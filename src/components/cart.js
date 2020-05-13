import React from 'react'
import { useShoppingCart } from 'use-shopping-cart'
import { Button } from '@chakra-ui/core'

const Cart = () => {

  const { 
    cartDetails, 
    cartCount, 
    totalPrice, 
    redirectToCheckout ,
    clearCart
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
    <React.Fragment>
      <details>
        <summary>Cart Details ({cartCount} Products)</summary>
        <ul>{Object.values(cartDetails).map(product => (
          <li key={product.sku}>{product.name} ({product.quantity}) - {product.formattedValue}</li>
        ))}</ul>
        <p><strong>Total price: {totalPrice()}</strong></p>
        <Button onClick={handleSubmit}>Check Out</Button>
        <Button onClick={clearCart}>Clear Cart</Button>
        <p>A $3.50 shipping  and handling charge will be applied at checkout.</p>
      </details>
    </React.Fragment>
  )
}

export default Cart