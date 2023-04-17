import React, {useState} from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { Outlet } from 'react-router-dom'

const Root = () => {
  const [cart, setCart] = useState(false)
  const [insideCart, setInsideCart] = useState([])

    const toggle = () => {
        setCart(!cart)
    }

    const toggleWithTime = (addToCart, quantity) => {
    setCart(!cart)
    setInsideCart([
        ...insideCart,
        addToCart
        ])
    setTimeout(() => {
      setCart(false);
    }, 1500);
  }

  return (
    <div className='body'>
      <Header cart={cart} toggle={toggle} insideCart={insideCart} setInsideCart={setInsideCart} />
      <section>
        <Outlet context={[cart, toggle, toggleWithTime]}/>
      </section>
      <Footer/>
    </div>
  )
}

export default Root
