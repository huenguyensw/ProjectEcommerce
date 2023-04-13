import React from 'react'
import { motion } from "framer-motion"
import ProductItem from './ProductItem'

const Cart = ({onMouseLeave, insideCart}) => {
  const URL = 'https://db.up.railway.app'

  console.log(insideCart)

  return (
    <div onMouseLeave={onMouseLeave} id="cart">
      
      {/* <ProductItem key={product._id} product={product} URL={URL} /> */}
    </div>
  )
}

export default Cart
