import React from 'react'
import { Link } from 'react-router-dom'

const ProductForm = ({product, URL}) => {
  const endpoint = encodeURI(product.image)
 console.log()
  return (
    <div className='product-area'>
      <img src={`${URL}/uploads/${endpoint}`} width='250px' height='250px'></img>
      <h3>{product.title}</h3>
      <p>{product.price} kr</p>
      <p>{product.quantity>0?'In stock':'Out stock'}</p>
      <Link to={"/products/"+`${product._id}`}>Read more...</Link>
      <br/>
      <input type='text'></input>
      <br/>
      <button>Add to cart</button>
      
    </div>
  )
}

export default ProductForm
