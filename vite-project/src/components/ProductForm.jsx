import React from 'react'
import { Link } from 'react-router-dom'

const ProductForm = ({product}) => {
  return (
    <div className='product-area'>
      <img src={product.image} width='250px' height='250px'></img>
      <h3>{product.title}</h3>
      <p>{product.price} kr</p>
      <p>{product.quantity>0?'In stock':'Out stock'}</p>
      <Link to={"/products/"+`${product._id}`}>Read more...</Link>
      <input type='text'></input>
      <button>Add to cart</button>
      
    </div>
  )
}

export default ProductForm
