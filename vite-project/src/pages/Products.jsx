import React, { useRef, useState } from 'react'
import ProductItem from '../components/ProductItem';
import usefetchAllRecords from './usefetchAllRecords'
import { useOutletContext } from 'react-router-dom'
import Cart from '../components/Cart'



const Products = () => {
  const intervalRef = useRef(null);
  const {lineItems, setLineItems, totalPrice,setTotalPrice,toggle,setToggle} = useOutletContext();
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
          
          setTotalPrice(totalPrice + order.product.price*amount)
          return { ...order, quantity: order.quantity + amount }
        } else {
          return order;
        }
      }))
    }
  //set timeout for mini-shopping cart
  clearInterval(intervalRef.current);
  intervalRef.current =setTimeout(()=>{
      setToggle(false)
  },3000)
  }
  

  const handleRemoveItem = (item)=>{
    setLineItems(lineItems => lineItems.filter((i)=>i.product._id != item.product._id));
    setTotalPrice(totalPrice - item.product.price*item.quantity)
  }
  return (
    <div className='products-container'>

    {isLoading
    ? <h1>Loading...</h1>:isError?<h1>{isError}</h1>
    : products.map((product)=>
      <div key={product._id} className="product-area">
        <ProductItem  product={product} URL={URL} handleClick={handleClick}/>
      </div>)}
      
      {(lineItems.length >0 && toggle === true) 
        && <Cart  handleRemoveItem={handleRemoveItem} />}
    </div>
  )
}

export default Products
