import React from 'react'
import { loadStripe } from '@stripe/stripe-js';
import { Box, Heading, Text, Button, FormLabel, Input } from '@chakra-ui/core'


const stripePromise = loadStripe('pk_test_LwxeiEvASdWlLis25KhfpjLQ00Rh7uh1nO');

const Product = ({...product}) => {

  const formatPrice = (amount, currency) => new 
    Intl.NumberFormat('en-US',{
      style: 'currency',
      currency
    }).format((amount / 100).toFixed(2));

  const handleSubmit = async event => {
    event.preventDefault()
    const form = new FormData(event.target);
    const data = {
      quantity: form.get('quantity'),
      sku: form.get('sku')
    }
    // Send to serverless function
    const response = await fetch(
      '/.netlify/functions/create-checkout', 
      {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(data)
      }
    ).then(res => res.json())

    // Get the session ID and redirect to checkout
    const stripe = await stripePromise;

    const { error } = await stripe.redirectToCheckout({
      sessionId: response.sessionId,
    });

    if (error) {
      console.error(error);
    }

  }
  
  return (
    <Box p="4">
      <Heading mb="2">{product.name}</Heading>
      <Text>{product.description}</Text>
      <Text>{formatPrice(product.amount, product.currency)}</Text>
      <form onSubmit={handleSubmit}>
        <FormLabel htmlFor="quantity">Quantity</FormLabel>
        <Input 
          type="number" 
          id="quantity" 
          name="quantity" 
          min="1" 
          max="10" 
        />
        <Input type="hidden" name="sku" value={product.sku}/>
        <Button type="submit">Add to cart</Button>
      </form>
    </Box>
  )
}

export default Product