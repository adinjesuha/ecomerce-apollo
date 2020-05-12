import React from 'react'
import inventory from '../../functions/data/products.json';

import Product from './product'

const Products = () => {
  return inventory.map((product) => (
    <Product key={product.sku} {...product}/>
  ))
}

export default Products