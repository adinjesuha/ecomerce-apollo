import React from 'react';
import { graphql } from 'gatsby';

import Product from '../components/product';
import SEO from '../components/SEO';

const CategoryPage = ({
  data: {
    cms: { 
      category 
    }
  }
}) => {
  if (!category) return null;
  return (
    <React.Fragment>
      <SEO pageTitle={category.name}/>
      <h1>{category.name}</h1>
      <ul>
        {category.products.map(product => (
          <Product key={product.sku} {...product}/>
        ))}
      </ul>
    </React.Fragment>
  )
}

export const pageQuery = graphql`
  query CategoryQuery($slug: String!){
    cms {
      category(where:{slug:$slug}){
        name
        slug
        products{
          id
          name
          sku
          image
          price
          currency
        }
      }
    }
  }
`

export default CategoryPage