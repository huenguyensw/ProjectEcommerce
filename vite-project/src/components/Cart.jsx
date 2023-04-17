import React, {useState} from 'react'
import { motion } from "framer-motion"
import ProductItem from './ProductItem'

const Cart = ({onMouseLeave, insideCart}) => {
  const URL = 'https://db.up.railway.app'


  console.log(insideCart)

  return (
    <div onMouseLeave={onMouseLeave} id="cart">
      <ul>
      {insideCart.length 
      ? insideCart.map(product => 
        <li className="in-cart-list" key={product._id}>
          <img src={`${URL}/uploads/${encodeURI(product.image)}`} width='40px' height='40px'></img><p>{product.title} <b>{product.price}</b> x ANTAL</p> 
        </li>
      )
      : <li className="in-cart-list">Empty cart</li>
      }
      </ul>
    </div>
  )
}

export default Cart
