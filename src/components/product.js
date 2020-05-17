import React from 'react'
import { useShoppingCart } from 'use-shopping-cart'
import Img from "gatsby-image"

import { Box, Heading, Text, Button, useToast, Image } from '@chakra-ui/core'

const Product = ({...product}) => {
  const { addItem } = useShoppingCart()
  const toast = useToast();

  const formatPrice = (price, currency) => new 
    Intl.NumberFormat('en-US',{
      style: 'currency',
      currency
    }).format((price / 100).toFixed(2));
  
  return (
    <Box 
      w="100%"
      h={400}
      mb={4}
    >
      <Image
        src={product.image}
        alt={product.name}
        size="100%"
        objectFit="cover"
        overflow="hidden"
        rounded={6}
      />
      <Heading mb="2">{product.name}</Heading>
      <Text>{product.description}</Text>
      <Text>{formatPrice(product.price, product.currency)}</Text>
        <Button 
          type="submit"
          onClick={ event => {
            event.preventDefault()
            const item = product.name
            addItem(product)
            toast({
              position: "bottom-right",
              title: "Item adedd.",
              description: `We've add ${item} to your cart.`,
              status: "info",
              duration: 6000,
              isClosable: true,
            })
          }}
        >Add to cart</Button>
    </Box>
  )
}

export default Product