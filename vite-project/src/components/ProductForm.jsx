import React from 'react'

const ProductForm = ({product}) => {
  return (
    <div>
      <img src={product.image} width='200px' height='200px'></img>
      {product.title}
    </div>
  )
}

export default ProductForm
