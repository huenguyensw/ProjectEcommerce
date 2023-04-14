import React, { useState } from 'react'
import ProductItem from '../components/ProductItem';
import usefetchAllRecords from './usefetchAllRecords'
import { useOutletContext } from 'react-router-dom'
import Cart from '../components/Cart'



const Products = () => {
  const [lineItems, setLineItems, totalPrice,setTotalPrice] = useOutletContext();
  const URL = 'https://db.up.railway.app'
  const { data: products, isLoading, isError } = usefetchAllRecords(`${URL}/products`)
  

  const handleClick = (product,amount) => {
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
      {lineItems.length >0 && <Cart lineItems={lineItems} totalPrice={totalPrice} handleRemoveItem={handleRemoveItem}/>}
    </div>
  )
}

export default Products
