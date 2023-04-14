import React, { useState } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { Outlet } from 'react-router-dom'

const Root = () => {
  const [lineItems, setlineItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0)
  const [toggle, setToggle] = useState(false)

  const handleToggle = () => {
    setToggle(!toggle)
  }

  const handleResetCart = () =>{
    setlineItems([])
  }
  

  return (
    <div className='body'>
      <Header itemCount={lineItems.length} handleToggle={handleToggle}/>
      <section>
        <Outlet context={[lineItems, setlineItems, totalPrice, setTotalPrice, toggle, setToggle, handleResetCart]} />
      </section>
      <Footer />
    </div>
  )
}

export default Root
