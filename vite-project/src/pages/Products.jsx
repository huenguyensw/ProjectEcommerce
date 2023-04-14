import React, { useEffect, useState } from 'react'
import ProductItem from '../components/ProductItem';
import usefetchAllRecords from './usefetchAllRecords'
import { useOutletContext } from 'react-router-dom'
import Cart from '../components/Cart'



const Products = () => {
  const [lineItems, setLineItems, totalPrice,setTotalPrice,toggle,setToggle,handleResetCart] = useOutletContext();
  const URL = 'https://db.up.railway.app'
  const { data: products, isLoading, isError } = usefetchAllRecords(`${URL}/products`)
  

  const handleClick = (product,amount) => {
    setToggle(true);
    let isExist = lineItems.some(element => element.product._id == product._id)
    if (!isExist) {
      setTotalPrice(totalPrice => totalPrice + product.price*amount)
      setLineItems([...lineItems, { product: product, quantity: amount }])
    } else {
      setLineItems(lineItems.map((order) => {
        if (order.product._id === product._id) {
          console.log('exist')
          setTotalPrice(totalPrice + order.product.price*amount)
          return { ...order, quantity: order.quantity + amount }
        } else {
          return order;
        }
      }))
    }
    setTimeout(()=>{
      setToggle(false)
  },4000)
  }

  const handleIncrement = (product) =>{
    setLineItems(lineItems.map((item) => {
      if (item.product._id === product._id) {
        console.log('exist')
        setTotalPrice(totalPrice + item.product.price)
        return { ...item, quantity: item.quantity + 1 }
      } else {
        return item;
      }
    }))
  }

  const handleDecrement = (product) =>{
    setLineItems(lineItems.map((item) => {
      if (item.product._id === product._id) {
        console.log('exist')
        setTotalPrice(totalPrice - item.product.price)
        return { ...item, quantity: item.quantity - 1 }
      } else {
        return item;
      }
    }))
  }
  

  const handleRemoveItem = (item)=>{
    setLineItems(lineItems => lineItems.filter((i)=>i.product._id != item.product._id));
    setTotalPrice(totalPrice - item.product.price*item.quantity)
  }
  return (
    <div className='products-container'>

    {isLoading?<h1>Loading...</h1>:isError?<h1>{isError}</h1>:products.map((product)=><div className="product-area"><ProductItem key={product._id} product={product} URL={URL} handleClick={handleClick}/></div>)}
      {/* {isLoading ? <h1>Loading...</h1> : isError ? <h1>{isError}</h1> : products.map((product) => <ProductForm key={product._id} product={product} URL={URL} handleClick={handleClick} />)} */}
      {/* <button onClick={() => console.log(lineItems)}>show</button> */}
      {console.log(toggle)}
      {(lineItems.length >0 && toggle === true) && <Cart lineItems={lineItems} totalPrice={totalPrice} handleRemoveItem={handleRemoveItem} handleResetCart={handleResetCart} handleDecrement={handleDecrement} handleIncrement={handleIncrement} />}
    </div>
  )
}

export default Products
