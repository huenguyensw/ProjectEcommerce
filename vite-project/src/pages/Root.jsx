import React, {useState} from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { Outlet} from 'react-router-dom'

const Root = () => {
  const [lineItems, setlineItems] = useState([])
  
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
      <Header itemCount={lineItems.length} />
      <section>
        <Outlet context={[lineItems,setlineItems]}/>
      </section>
      <Footer/>
    </div>
  )
}

export default Root
