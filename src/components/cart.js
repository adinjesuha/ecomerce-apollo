import React from 'react'
import { useShoppingCart } from 'use-shopping-cart'
import { Button, Box, Divider, Text, Flex } from '@chakra-ui/core'
import CartItems from './cartItems';

const Cart = ({showCart}) => {

  const { 
    cartDetails, 
    redirectToCheckout,
    totalPrice,
    cartCount
  } = useShoppingCart();

  const handleSubmit = async (event) => {
    event.preventDefault()
    const response = await fetch('/.netlify/functions/create-checkout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(cartDetails),
    })
    .then((res) => {
      return res.json();
    })
    .catch((error) => console.log(error));
    redirectToCheckout({sessionId: response.sessionId});
  }

  return (
    <Flex 
      bg="white" 
      minH={300}
      borderWidth="1px"
      rounded="lg"
      p={4}
      direction="column"
      justify="space-between"
      pos="absolute" 
      top="20"
      right={8}
      display={showCart ? "flex" : "none"}
    >
      <Flex
        direction="column"
        justify={cartCount > 0 ? "flex-start" : "center"}
        align="center"
        h={230}
        overflow="hidden"
        overflowY="auto"
      >
        <CartItems />
      </Flex>
      <Box>
        <Divider mb={5}/>
        <Flex 
          align="center" 
          justify="space-between"
          mb={5}
        >
          <Text fontSize="sm">Total amount</Text> 
          <Text fontSize="xl"><strong>{totalPrice()}</strong></Text> 
        </Flex>
        <Button 
          size="lg"
          variantColor="blue"
          width="100%"
          onClick={handleSubmit}
        >
          Continue to checkout
        </Button>
      </Box>
    </Flex>
  )
}

export default Cart