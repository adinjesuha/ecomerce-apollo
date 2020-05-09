import React from 'react'
import { useQuery, gql } from '@apollo/client'

import Layout from '../components/layout'

const IndexPage = () => {
  const { data, loading, error } = useQuery(gql`
    {
      products{
        id
        name
      }
    }
  `)
  if(loading) return <p>loading...</p>
  if(error) return console.log(error)
  return(
    <Layout>
    {data.products.map(({name, id}) => (
      <h1 key={id}>{name}</h1>
    ))}
    </Layout>
  )
}

export default IndexPage
