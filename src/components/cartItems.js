import React from 'react'
import { useShoppingCart } from 'use-shopping-cart'
import { Button, Box, Image, Flex, Text } from '@chakra-ui/core'
import { MdAdd, MdRemove } from 'react-icons/md'

const CartItemEmpty = () => (
  <Flex
    align="center"
    direction="column"
    justify="center"
    h="90px"
  >
    <Text fontSize="md">Your cart is empty</Text>
  </Flex>
)

const CartItem = ({addItem, reduceItemByOne, cartEntry}) => (
  <Flex 
    align="center"
    justify="space-between"
    mb={4}
  >
    <Flex
      align="center"
    >
      <Box
        w="60px"
        rounded={4}
        overflow="hidden"
      >
        <Image 
          size="100%"
          objectFit="cover"
          src={cartEntry.image}
          alt={cartEntry.name}
        />
      </Box>
      <Box ml={3}>
        <Text fontSize="sm">
          {cartEntry.name}
        </Text>
        <Text fontSize="xs">{cartEntry.formattedValue}</Text>
      </Box>
    </Flex>
    <Box>
      <Flex align="center" flexDirection="column">
        <Button
          variant="ghost"
          size="xs"
          onClick={() => addItem(cartEntry)}
          aria-label={`Add one ${cartEntry.name} to your cart`}
        >
          <Box as={MdAdd} />
        </Button>
        <Text p="6px 0">
          {cartEntry.quantity}
        </Text>
        <Button
          variant="ghost"
          size="xs"
          onClick={() => reduceItemByOne(cartEntry.sku)}
          aria-label={`Remove one ${cartEntry.name} from your cart`}
        >
          <Box as={MdRemove} />
        </Button>
      </Flex>
    </Box>
  </Flex>
)

const CartItems = () => {

  const { 
    cartDetails, 
    reduceItemByOne,
    addItem,
  } = useShoppingCart();

  const cart = []

  for (const sku in cartDetails) {
    const cartEntry = cartDetails[sku]

    cart.push(
      <CartItem 
        addItem={addItem}
        reduceItemByOne={reduceItemByOne}
        cartEntry={cartEntry}
      />
    )
  }
  return cart.length > 0 ? cart : <CartItemEmpty />
}

export default CartItems