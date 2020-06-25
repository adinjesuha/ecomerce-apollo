import React from 'react'
import { useShoppingCart } from 'use-shopping-cart'
import { Box, Text, Button, useToast, Image, Flex } from '@chakra-ui/core'

const Product = ({...product}) => {
  const { addItem } = useShoppingCart()
  const toast = useToast();

  const formatPrice = (price, currency) => new 
    Intl.NumberFormat('en-US',{
      style: 'currency',
      currency
    }).format((price / 100).toFixed(2));
  
  return (
    <Box w="100%" mb="20px">
      <Box
        height={{base:"350px",md: "400px", lg: "400px"}}
        overflow="hidden"
      >
        <Image
          src={product.image}
          alt={product.name}
          size="100%"
          objectFit="cover"
          overflow="hidden"
        />
      </Box>
      <Box mt="10px">
        <Text mb="2">{product.name}</Text>
        <Flex 
          align="center"
          justify="space-between"
        >
          <Text
            fontSize="lg"
          >
            <strong>{formatPrice(product.price, product.currency)}</strong>
          </Text>
          <Button 
            borderRadius="none"
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
          >
            Add to cart
          </Button>
        </Flex>
      </Box>
    </Box>
  )
}

export default Product