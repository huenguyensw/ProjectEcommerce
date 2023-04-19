import React, { useState } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { Outlet } from 'react-router-dom'
import styled from 'styled-components'

const Root = () => {
  const [lineItems, setLineItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0)
  const [toggle, setToggle] = useState(false)
  const [isDisplayCart, setIsDisplayCart] = useState(true);
  

  const handleToggle = () => {
    setToggle(!toggle)
  }

  const handleResetCart = () =>{
    setLineItems([])
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
