import React, { useState } from 'react'
import Button from "@material-ui/core/Button";
import CloseIcon from '@material-ui/icons/Close';
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import { Link } from 'react-router-dom';
const Cart = ({ lineItems, setLineItems, setTotalPrice, totalPrice, handleRemoveItem, handleResetCart }) => {
  const URL = 'https://db.up.railway.app'


  // //orders is an array of objects
  // // each object include 2 properties: product and quantity
  const handleIncrement = (product) => {
    console.log(product.product._id)
    console.log(product)
    setLineItems(lineItems.map((item) => {
      console.log(item.product._id)
      if (item.product._id === product.product._id) {
        console.log('exist')
        setTotalPrice(totalPrice + item.product.price)
        return { ...item, quantity: item.quantity + 1 }
      } else {
        return item;
      }
    }))
    console.log(lineItems)
  }

  const handleDecrement = (product) => {
    //remove product with quantity = 1 from list of items.
    if(product.quantity == 1){
      setLineItems(lineItems => lineItems.filter((item) => item.product._id != product.product._id));
      setTotalPrice(totalPrice - product.product.price)
    } else {
      setLineItems(lineItems => lineItems.map((item) => {
        if (item.product._id === product.product._id && item.quantity>1) {
          console.log('exist')
          setTotalPrice(totalPrice - item.product.price)
          return { ...item, quantity: item.quantity - 1 }
        } else {
          return item;
        }}))
    }
    
    console.log(lineItems)
  }


  return (
    <div className='ShoppingCart'>
      <ul>
        {lineItems.map((order) =>
          <li className='ShoppingItem'>
            <img src={`${URL}/uploads/${order.product.image}`} width='20px' height='20px'></img>
            <p>{order.product.title}</p>

            <section className='changeQuantity'>
              <Button onClick={() => handleIncrement(order)}>
                <AddIcon />
              </Button>
              <Button onClick={() => handleDecrement(order)}>
                <RemoveIcon />
              </Button>
            </section>

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
