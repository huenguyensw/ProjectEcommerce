import React from 'react'

import usefetchAllRecords from './usefetchAllRecords'
import ProductForm from '../components/ProductForm'


const Products = () => {
  const URL = 'https://db.up.railway.app'
  const {data: products,isLoading,isError } = usefetchAllRecords(`${URL}/products`)
  
  return (
    <div className='products-container'>
        {isLoading?<h1>Loading...</h1>:isError?<h1>{isError}</h1>:products.map((product)=><ProductForm key={product._id} product={product} URL={URL}/>)}
    </div>
  )
}

export default Products
