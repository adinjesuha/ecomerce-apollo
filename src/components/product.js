import React from 'react'
import { Box, Heading, Text } from '@chakra-ui/core'

const Product = ({...listing}) => (
  <Box p="4">
    <Heading mb="2">{listing.title}</Heading>
    <Text>{listing.company.name}</Text>
    <Text>{listing.description}</Text>
  </Box>
)

export default Product