import React from 'react';
import { graphql } from 'gatsby';

import Product from '../components/product';
import SEO from '../components/SEO';
import { Box, SimpleGrid } from '@chakra-ui/core';
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
    <Box w="100%">
      <SEO pageTitle={category.name}/>
      <HeadLine 
        textLine={category.name}
      />
      <SimpleGrid columns={{base: 1, sm: 2, md: 3, lg: 4}} spacing={{base: 2, sm: 4, md: 6, lg: 10}}>
        {category.products.map(product => (
          <Product key={product.sku} {...product}/>
        ))}
      </SimpleGrid>
    </Box>
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