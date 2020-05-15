import React from 'react'
import 'isomorphic-fetch';
import { GraphQLClient, ClientContext } from 'graphql-hooks'
import { loadStripe } from '@stripe/stripe-js';
import { CartProvider } from 'use-shopping-cart'
import Layout from './src/components/layout'

const stripePromise = loadStripe('pk_test_LwxeiEvASdWlLis25KhfpjLQ00Rh7uh1nO');

const client = new GraphQLClient({
  url: '/.netlify/functions/graphql',
})

export const wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>;
};

export const wrapRootElement = ({element}) => (
  <ClientContext.Provider value={client}>
    <CartProvider
      stripe={stripePromise}
      currency="USD"
      successUrl={'https://ecommerce-apollo-graphcms.netlify.app/thanks'}
      cancelUrl={'https://ecommerce-apollo-graphcms.netlify.app/'}
    >
      {element}
    </CartProvider>
  </ClientContext.Provider>
)