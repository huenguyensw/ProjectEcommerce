import React, { useState } from 'react'
import Button from "@material-ui/core/Button";
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import { useOutletContext } from 'react-router-dom';
import { Link } from 'react-router-dom';
import {motion} from 'framer-motion'
import styled from 'styled-components';



const Cart = ({handleRemoveItem, popup}) => {
  const URL = 'https://db.up.railway.app'
  const {lineItems, setLineItems, totalPrice, setToggle, setTotalPrice,handleResetCart} = useOutletContext();

  //lineItems is an array of objects
  // each object include 2 properties: product and quantity
  const handleIncrement = (product) => {
    console.log(product.product._id)
    console.log(product)
    setLineItems(lineItems.map((item) => {
      console.log(item.product._id)
      if (item.product._id === product.product._id) {
        setTotalPrice(totalPrice + item.product.price)
        return { ...item, quantity: item.quantity + 1 }
      } else {
        return item;
      }
    }))
    console.log(lineItems)
  }

  const handleDecrement = (product) => {
    //remove product if quantity = 1 from list of items.
    if(product.quantity == 1){
      setLineItems(lineItems => lineItems.filter((item) => item.product._id != product.product._id));
      setTotalPrice(totalPrice - product.product.price)
    } else {
      setLineItems(lineItems =>lineItems.map((item) => {
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
    <CartWrapper popup={popup}>
      <ul>
        {lineItems.map((order) =>
          <ShoppingItem key= {order.product._id}>
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
              <DeleteIcon></DeleteIcon>
            </Button>
          </ShoppingItem>)
        }
      </ul>
      <p style={{ textAlign: 'center' }}><b>Total price: {totalPrice} kr</b></p>
      <ShoppingCartBtn popup={popup}>
        <button onClick={handleResetCart}>Reset Cart</button>
        <Link to={'/checkout'} onClick={()=>setToggle(false)}>Proceed to Checkout</Link>
      </ShoppingCartBtn>


    </CartWrapper>
  )
}

const CartWrapper = styled.div`
  position: ${props => props.popup ? 'absolute' : 'unset'};
  top: ${props => props.popup ? '65px' : 'unset'};
  right: ${props => props.popup ? '39px' : 'unset'};
  border: 1px solid rgb(246, 230, 211);
  background-color: ${props => props.popup ? 'rgb(251, 233, 211)' : 'unset'};
  display: grid;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 4px;
`;

const ShoppingItem = styled.li`
  display: flex;
  flex-direction: row;
  align-items:center;
  gap: 10px;
  padding: 0 10px;
  justify-items:center;
  justify-content:space-between;
`;
const ShoppingCartBtn = styled.section`
  display: ${props => props.popup ? 'flex' : 'none'};
  flex-direction: ${props => props.popup ? 'row' : 'none'};
  justify-content: ${props => props.popup ? 'space-around' : 'none'};
  padding-bottom: ${props => props.popup ? '10px' : 'none'};
`;
export default Cart
