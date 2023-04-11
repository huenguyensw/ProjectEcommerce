import React from 'react'
import Header from '../components/Header'
import usefetchAllRecords from '../components/usefetchAllRecords'
import ProductForm from '../components/ProductForm'
import Footer from '../components/Footer'

const Products = () => {
  const {data: products,isLoading,isError } = usefetchAllRecords('https://db.up.railway.app/products')
  
  return (
    <div>
        {isLoading?<h1>Loading...</h1>:isError?<h1>{isError}</h1>:products.map((product)=><ProductForm key={product._id} product={product}/>)}
    </div>
  )
}

export default Products
