import React, { useState } from 'react'

import usefetchAllRecords from './usefetchAllRecords'
import ProductForm from '../components/ProductForm'
import { useOutletContext } from 'react-router-dom'
import Cart from '../components/Cart'



const Products = () => {
  const [lineItems, setLineItems] = useOutletContext();
  const URL = 'https://db.up.railway.app'
  const { data: products, isLoading, isError } = usefetchAllRecords(`${URL}/products`)
  const [cart, toggle, toggleWithTime] = useOutletContext();
  const [totalPrice, setTotalPrice] = useState(0)

  const handleClick = (product) => {
    let isExist = lineItems.some(element => element.product._id == product._id)
    if (!isExist) {
      setTotalPrice(totalPrice => totalPrice + product.price)
      setLineItems([...lineItems, { product: product, quantity: 1 }])
    } else {
      setLineItems(lineItems.map((order) => {
        if (order.product._id === product._id) {
          console.log('exist')
          setTotalPrice(totalPrice + order.product.price)
          return { ...order, quantity: order.quantity + 1 }
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
    {isLoading?<h1>Loading...</h1>:isError?<h1>{isError}</h1>:products.map((product)=><div className="product-area"><ProductItem key={product._id} product={product} URL={URL} cart={cart} toggle={toggle} toggleWithTime={toggleWithTime}/></div>)}
      {/* {isLoading ? <h1>Loading...</h1> : isError ? <h1>{isError}</h1> : products.map((product) => <ProductForm key={product._id} product={product} URL={URL} handleClick={handleClick} />)} */}
      {/* <button onClick={() => console.log(lineItems)}>show</button> */}
      {lineItems.length >0 && <Cart lineItems={lineItems} totalPrice={totalPrice} handleRemoveItem={handleRemoveItem}/>}
    </div>
  )
}

export default Products
