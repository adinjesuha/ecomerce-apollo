import React from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'
import { SimpleGrid, Box, Image, Heading } from '@chakra-ui/core'
import HeadLine from './headLine'

const Category = ({...category}) => (
  <Box
    pos="relative"
    minH={{base: "200px", md: "300px"}}
  >
    <Image 
      src={category.image} 
      alt={category.name}
      size="100%"
      objectFit="cover"
      overflow="hidden"
    />
    <Box
      pos="absolute"
      top="50%"
      left="50%"
      transform="translate(-50%, -50%)"
      color="white"
      textAlign="center"
    >
      <Link to={`/categories/${category.slug}`}>
        <Heading textTransform="uppercase" mb={4}>{category.name}</Heading>
      </Link>
    </Box>
  </Box>
)

const Categories = () => {
  const data = useStaticQuery(
    graphql`
      {
        cms{
          categories(orderBy: order_ASC){
            name
            slug
            image
            order
          }
        }
      }
    `
  )
  return (
    <React.Fragment>
      <HeadLine 
        textLine="Shop by Category"
      />
      <SimpleGrid columns={{base: 1, sm: 2}} spacing={{base:4, sm:6, md: 10}} mb={6}>
      {data.cms.categories.slice(3,5).map(category => (
        <Category key={`${category.name}-${category.order}`} {...category}/>
      ))}
      </SimpleGrid>
      <SimpleGrid columns={{base: 1, sm: 2, md: 3}} spacing={{base:4, sm:6, md: 10}} mb={6}>
      {data.cms.categories.slice(0,3).map(category => (
        <Category key={`${category.name}-${category.order}`} {...category}/>
      ))}
      </SimpleGrid>
    </React.Fragment>
  )
}

export default Categories