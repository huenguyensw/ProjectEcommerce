import React, { useState } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { Outlet } from 'react-router-dom'

const Root = () => {
  const [lineItems, setLineItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0)
  const [toggle, setToggle] = useState(false)
  

  const handleToggle = () => {
    setToggle(!toggle)
  }

  const handleResetCart = () =>{
    setLineItems([])
  }
  

  return (
    <div className='body'>
      <Header itemCount={lineItems.length} handleToggle={handleToggle}/>
      <section>
        <Outlet context={{lineItems, setLineItems, totalPrice, setTotalPrice, toggle, setToggle, handleResetCart}} />
      </section>
      <Footer />
    </div>
  )
}

export default Root
