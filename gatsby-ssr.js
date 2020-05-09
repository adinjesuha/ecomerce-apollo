import React from 'react'
import { ApolloClient, HttpLink, InMemoryCache, ApolloProvider } from '@apollo/client'
import fetch from 'isomorphic-fetch'

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    fetch,
    uri: `${process.env.GATSBY_GRAPHCMS_API}`,
  })
})

export const wrapRootElement = ({element}) => (
  <ApolloProvider client={client}>{element}</ApolloProvider>
)