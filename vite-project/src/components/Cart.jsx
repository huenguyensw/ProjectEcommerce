import React, { useState } from 'react'
import Button from "@material-ui/core/Button";
import CloseIcon from '@material-ui/icons/Close';
const Cart = ({ lineItems, totalPrice, handleRemoveItem }) => {
  const URL = 'https://db.up.railway.app'
  let total = 0;
  
  // //orders is an array of objects
  // // each object include 2 properties: product and quantity
  
  return (
    <ul className='ShoppingCart'>
      {lineItems.map((order) =>
        <li className='ShoppingItem'>
          <img src={`${URL}/uploads/${order.product.image}`} width='20px' height='20px'></img>
          <p>{order.product.title}</p>
          <p>{order.quantity}x{order.product.price}</p>
          <Button onClick={()=>handleRemoveItem(order)}>
            <CloseIcon></CloseIcon>
          </Button>
        </li>)
      }
      <hr/>
      <p>Total price: {totalPrice}</p>
      {/* {console.log(order.product)} */}
    </ul>
  )
}

export default Cart;