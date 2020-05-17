import React from 'react';
import { graphql } from 'gatsby';

import Product from '../components/product';
import SEO from '../components/SEO';
import { Grid } from '@chakra-ui/core';
import HeadLine from '../components/headLine';

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
      <HeadLine 
        textLine={category.name}
      />
      <Grid 
        templateColumns="repeat(4, 1fr)"
        gap={6}
      >
        {category.products.map(product => (
          <Product key={product.sku} {...product}/>
        ))}
      </Grid>
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