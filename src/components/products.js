import React from 'react'
import { useQuery, gql } from '@apollo/client'

import Product from './product'

const Products = () => {
  const { data, loading, error } = useQuery(gql`
    {
      listings{
        id
        title
        description
        company{
          name
          url
        }
      }
    }
  `)
  if(loading) return <p>loading...</p>
  if(error) return console.log(error)
  return data.listings.map((listing) => (
    <Product key={listing.id} {...listing}/>
  ))
}

export default Products