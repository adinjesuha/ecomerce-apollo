import React from 'react'
import { useShoppingCart } from 'use-shopping-cart'

import { Box, Heading, Text, Button } from '@chakra-ui/core'

const Product = ({...product}) => {
  const { addItem } = useShoppingCart()

  const formatPrice = (price, currency) => new 
    Intl.NumberFormat('en-US',{
      style: 'currency',
      currency
    }).format((price / 100).toFixed(2));

  // const handleSubmit = async event => {
  //   event.preventDefault()
  //   const form = new FormData(event.target);
  //   const data = {
  //     quantity: form.get('quantity'),
  //     sku: form.get('sku')
  //   }
  //   // Send to serverless function
  //   const response = await fetch(
  //     '/.netlify/functions/create-checkout', 
  //     {
  //       method: 'POST',
  //       headers: {
  //         'Content-type': 'application/json',
  //       },
  //       body: JSON.stringify(data)
  //     }
  //   ).then(res => res.json())

  //   // Get the session ID and redirect to checkout
  //   const stripe = await stripePromise;

  //   const { error } = await stripe.redirectToCheckout({
  //     sessionId: response.sessionId,
  //   });

  //   if (error) {
  //     console.error(error);
  //   }

  // }
  
  return (
    <Box 
      p="4"
      w="100%"
    >
      <Heading mb="2">{product.name}</Heading>
      <Text>{product.description}</Text>
      <Text>{formatPrice(product.price, product.currency)}</Text>
      {/*<form onSubmit={handleSubmit}>
        <FormLabel htmlFor="quantity">Quantity</FormLabel>
        <Input 
          type="number" 
          id="quantity" 
          name="quantity" 
          min="1" 
          max="10" 
        />
        <Input type="hidden" name="sku" value={product.sku}/> */}
        <Button 
          type="submit"
          onClick={(event) => {
            event.preventDefault()
            addItem(product)
          }}
        >Add to cart</Button>
      {/*</form>*/}
    </Box>
  )
}

export default Product