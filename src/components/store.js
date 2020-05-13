import React from 'react'
import { loadStripe } from '@stripe/stripe-js';
import { CartProvider } from 'use-shopping-cart'

import Products from './products'
import Cart from './cart';

const stripePromise = loadStripe('pk_test_LwxeiEvASdWlLis25KhfpjLQ00Rh7uh1nO');


const Store = () => {
  return (
    <CartProvider
      stripe={stripePromise}
      currency="USD"
      successUrl={'https://ecommerce-apollo-graphcms.netlify.app/thanks'}
      cancelUrl={'https://ecommerce-apollo-graphcms.netlify.app/'}
    >
      <Cart />
      <Products />
    </CartProvider>
  )
}

export default Store