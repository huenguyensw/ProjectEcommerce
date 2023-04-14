import React, { useState } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { Outlet } from 'react-router-dom'

const Root = () => {
  const [lineItems, setlineItems,] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0)
  const [toggle, setToggle] = useState(false)

  const handleToggle = () => {
    setToggle(!toggle)
  }

  //const [quantity, setQuantity] = useState(0);


  // const [cart, setCart] = useState(false)
  // const [insideCart, setInsideCart] = useState([])

  // const toggle = () => {
  //     setCart(!cart)
  //     console.log(cart)
  // }

  // const toggleWithTime = (addToCart) => {
  // setCart(!cart)

  // // setInsideCart([
  // //   ...insideCart,
  // // addToCart
  // // ])

  // setTimeout(() => {
  //   setCart(false);
  // }, 1500);
  // }

  return (
    <div className='body'>
      <Header itemCount={lineItems.length} handleToggle={handleToggle}/>
      <section>
        <Outlet context={[lineItems, setlineItems, totalPrice, setTotalPrice, toggle, setToggle]} />
      </section>
      <Footer />
    </div>
  )
}

export default Root
