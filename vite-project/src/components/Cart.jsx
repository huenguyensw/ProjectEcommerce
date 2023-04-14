import React, { useState } from 'react'
import Button from "@material-ui/core/Button";
import CloseIcon from '@material-ui/icons/Close';
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import { Link } from 'react-router-dom';
const Cart = ({ lineItems, totalPrice, handleRemoveItem, handleResetCart, handleDecrement, handleIncrement}) => {
  const URL = 'https://db.up.railway.app'


  // //orders is an array of objects
  // // each object include 2 properties: product and quantity



  return (
    <div className='ShoppingCart'>
      <ul>
        {lineItems.map((order) =>
          <li className='ShoppingItem'>
            <img src={`${URL}/uploads/${order.product.image}`} width='20px' height='20px'></img>
            <p>{order.product.title}</p>

            {/* <section className='changeQuantity'>
              <Button onClick={()=>handleIncrement(order)}>
                <AddIcon />
              </Button>
              <Button onClick={()=>handleDecrement(order)}>
                <RemoveIcon />
              </Button>
            </section> */}

            <p>{order.quantity}x{order.product.price} kr</p>
            <Button onClick={() => handleRemoveItem(order)}>
              <CloseIcon></CloseIcon>
            </Button>
          </li>)
        }
      </ul>
      <p style={{ textAlign: 'center' }}><b>Total price: {totalPrice} kr</b></p>
      <section className='shoppingCart-btn'>
        <button onClick={handleResetCart}>Reset Cart</button>
        <Link to={'/checkout'}>Proceed to Checkout</Link>
      </section>


    </div>
  )
}

export default Cart
