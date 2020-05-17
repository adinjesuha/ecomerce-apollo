import React from 'react'
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  Divider,
  Flex,
  Text,
} from "@chakra-ui/core";
import { useShoppingCart } from 'use-shopping-cart';

import CartItems from './cartItems';

const CartDrawer = ({
  isOpen,
  placement,
  onClose,
  finalFocusRef
}) => {
  const { 
    cartDetails, 
    redirectToCheckout,
    totalPrice
  } = useShoppingCart();
  const handleSubmit = async (event) => {
    event.preventDefault();
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
    <Drawer
      isOpen={isOpen}
      placement={placement}
      onClose={onClose}
      finalFocusRef={finalFocusRef}
    >
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>Shopping Cart</DrawerHeader>

        <DrawerBody
          overflowY="auto"
        >
          <CartItems />
          <Divider mb={5}/>
          <Flex 
            align="center" 
            justify="space-between"
            mb={5}
          >
            <Text fontSize="sm">Total amount</Text> 
            <Text fontSize="xl">
              <strong>{totalPrice()}</strong>
            </Text> 
          </Flex>
        </DrawerBody>

        <DrawerFooter>
        <Button 
          onClick={handleSubmit}
          size="lg"
          variantColor="blue"
          rounded="none"
          width="100%"
        >
          Continue to checkout
        </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}

export default CartDrawer