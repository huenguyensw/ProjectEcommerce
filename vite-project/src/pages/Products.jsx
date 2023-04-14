import React from 'react'

import usefetchAllRecords from './usefetchAllRecords'
import ProductForm from '../components/ProductForm'
import { useOutletContext } from "react-router-dom";


const Products = () => {
  const URL = 'https://db.up.railway.app'
  const {data: products,isLoading,isError } = usefetchAllRecords(`${URL}/products`)
  
  const [cart, toggle, toggleWithTime] = useOutletContext();

  return (
    <div className='products-container'>
        {isLoading?<h1>Loading...</h1>:isError?<h1>{isError}</h1>:products.map((product)=><ProductForm key={product._id} product={product} URL={URL} cart={cart} toggle={toggle} toggleWithTime={toggleWithTime}/>)}
    </div>
  )
}

export default Products
