import React, { useState } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { Outlet } from 'react-router-dom'
import styled from 'styled-components'

const Root = () => {
  const [lineItems, setLineItems] = useState([]); //list of products that are added to cart
  const [totalPrice, setTotalPrice] = useState(0); 
  const [toggle, setToggle] = useState(false); //show and hide shoppingcart popup when click 'Add to cart' button
  const [isDisplayCart, setIsDisplayCart] = useState(true); // display/hide cart icon on Header
  

  const handleToggle = () => {
    setToggle(!toggle)
  }

  const handleResetCart = () =>{
    setLineItems([]);
    setTotalPrice(0);
  }
  

  return (
    <BodyPage>
      <Header itemCount={lineItems.length} handleToggle={handleToggle} isDisplayCart = {isDisplayCart}/>
      <section>
        <Outlet context={{lineItems, setLineItems, totalPrice, setTotalPrice, toggle, setToggle, handleResetCart,setIsDisplayCart}} />
      </section>
      <Footer />
    </BodyPage>
  )
}

const BodyPage = styled.div`
  background-color: rgb(192, 226, 239);
  font-family: arial;
  min-height: 100vh;
  width: 100vw;
  overflow-x: hidden;
  margin-left: -8px;
  margin-top: -8px;
  margin-bottom: -8px;
`

export default Root
