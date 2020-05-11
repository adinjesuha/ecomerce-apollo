import React from 'react'
import { ApolloClient, HttpLink, InMemoryCache, ApolloProvider } from '@apollo/client'
import fetch from 'isomorphic-fetch'

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    fetch,
    uri: '/.netlify/functions/graphql',
  })
})

export const wrapRootElement = ({element}) => (
  <ApolloProvider client={client}>{element}</ApolloProvider>
)