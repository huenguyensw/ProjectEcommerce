import React, { useRef, useState } from 'react'
import usefetchOneRecord from './usefetchOneRecord'
import { useParams } from 'react-router-dom'
import ProductItem from '../components/ProductItem';
import { useOutletContext } from "react-router-dom";
import Cart from '../components/Cart'

const Product = () => {
  const Params = useParams();
  console.log(Params.id)
  const intervalRef = useRef(null);
  const URL = 'https://db.up.railway.app'
  const { data: product, isLoading, isError } = usefetchOneRecord('https://db.up.railway.app/products/' + Params.id)

  const { lineItems, setLineItems, totalPrice, setTotalPrice, toggle, setToggle } = useOutletContext();

  const handleClick = (product, amount) => {
    setToggle(true);
    let isExist = lineItems.some(element => element.product._id == product._id)
    if (!isExist) {
      setTotalPrice(totalPrice => totalPrice + product.price * amount)
      setLineItems([...lineItems, { product: product, quantity: amount }])
    } else {
      setLineItems(lineItems.map((order) => {
        if (order.product._id === product._id) {
          console.log('exist')
          setTotalPrice(totalPrice + order.product.price * amount)
          return { ...order, quantity: order.quantity + amount }
        } else {
          return order;
        }
      }))
    }
    //set timeout for mini-cart
    clearInterval(intervalRef.current)
    intervalRef.current = setTimeout(() => {
      setToggle(false)
    }, 3000)
  }

  const handleRemoveItem = (item) => {
    setLineItems(lineItems => lineItems.filter((i) => i.product._id != item.product._id));
    setTotalPrice(totalPrice - item.product.price * item.quantity)
  }

  return (
    <div>
      {isLoading
        ? <h1>Loading...</h1>
        : isError
          ? <h1>{isError}</h1>
          : <div className="single-product-view">
            <ProductItem key={product._id} product={product} URL={URL} handleClick={handleClick} />
          </div>}
      {(lineItems.length > 0 && toggle == true) 
      && <Cart handleRemoveItem={handleRemoveItem}/>}
    </div>
  )
}

export default Product
