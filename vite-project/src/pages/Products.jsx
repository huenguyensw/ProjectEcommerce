import React from 'react'

import usefetchAllRecords from './usefetchAllRecords'
import ProductForm from '../components/ProductForm'
import { useOutletContext } from 'react-router-dom'
import Cart from '../components/Cart'



const Products = () => {
  const [lineItems, setLineItems] = useOutletContext();
  const URL = 'https://db.up.railway.app'
  const { data: products, isLoading, isError } = usefetchAllRecords(`${URL}/products`)
  


  const handleClick = (product) => {
    let isExist = lineItems.some(element => element.product._id == product._id)
    if (!isExist) {
      setLineItems([...lineItems, { product: product, quantity: 1 }])
    } else {
      setLineItems(lineItems.map((order) => {
        if (order.product._id === product._id) {
          console.log('exist')
          return { ...order, quantity: order.quantity + 1 }
        } else {
          return order;
        }
      }))
    }
  }
  return (
    <div className='products-container'>
      {isLoading ? <h1>Loading...</h1> : isError ? <h1>{isError}</h1> : products.map((product) => <ProductForm key={product._id} product={product} URL={URL} handleClick={handleClick} />)}
      {/* <button onClick={() => console.log(lineItems)}>show</button> */}
      {lineItems.length >0 && <Cart lineItems={lineItems}/>}
    </div>
  )
}

export default Products
