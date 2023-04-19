import React from 'react'
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
    <CartWrapper  
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }} 
    popup={popup}>
      <ul>
        {lineItems.map((order) =>
          <ShoppingItem key= {order.product._id}>
            <img src={`${URL}/uploads/${order.product.image}`} width='25px' height='25px'></img>
            <p>{order.product.title}</p>

            <ChangeQuantityBtn popup={popup}>
              <Button onClick={() => handleIncrement(order)}>
                <AddIcon />
              </Button>
              <Button onClick={() => handleDecrement(order)}>
                <RemoveIcon />
              </Button>
            </ChangeQuantityBtn>

            <p>{order.quantity}x{order.product.price} kr</p>
            <Button onClick={() => handleRemoveItem(order)}>
              <DeleteIcon></DeleteIcon>
            </Button>
          </ShoppingItem>)
        }
      </ul>
      <p style={{ textAlign: 'center' }}><b>Total price: {totalPrice} kr</b></p>
      <ShoppingCartBtn popup={popup}>
        <ResetCartBtn onClick={handleResetCart}>Reset Cart</ResetCartBtn>
        <ResetCartBtn><Link style={{textDecoration: 'none', color: 'unset'}} to={'/checkout'} onClick={()=>setToggle(false)}>Proceed to Checkout</Link></ResetCartBtn>
      </ShoppingCartBtn>

    </CartWrapper>
  )
}

const CartWrapper = styled(motion.div)`
  position: ${props => props.popup ? 'absolute' : 'unset'};
  top: ${props => props.popup ? '65px' : 'unset'};
  right: ${props => props.popup ? '24px' : 'unset'};
  width: ${props => props.popup ? '400px' : 'unset'};
  border: 1px solid skyblue;
  box-shadow: ${props => props.popup ? '0px 5px 20px' : 'unset'};
  background-color: ${props => props.popup ? 'white' : 'unset'};
  display: grid;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 4px;
  grid-template-columns: 1fr;
  
`;

const ShoppingItem = styled.li`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  column-gap: 10px;
  padding:0;
  align-items:center;
`;
const ShoppingCartBtn = styled.section`
  display: ${props => props.popup ? 'flex' : 'none'};
  flex-direction: ${props => props.popup ? 'row' : 'none'};
  justify-content: ${props => props.popup ? 'space-around' : 'none'};
  padding-bottom: ${props => props.popup ? '10px' : 'none'};
`;

const ResetCartBtn = styled.button`
  font-size: 1rem;
  cursor: pointer;
  box-shadow: 0px 0px 1.5px;
  padding: 7px;
  background-color: white;
  border-radius: 3px;
  border: none;
  color: rgb(103, 163, 186);

  &:hover {
    background-color: rgb(103, 163, 186);
    color: white;
  }
  `
  const ChangeQuantityBtn = styled.section`
  display: ${props => props.popup ? 'none' : 'inline'};
  `
export default Cart
