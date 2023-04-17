import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const ProductItem = ({product, URL, toggleWithTime}) => {
    const [quantity, setQuantity] = useState(1)
    const endpoint = encodeURI(product.image);
    
    const increment = () => {
        setQuantity(quantity + 1);
    }
    const decrement = () => {
        quantity>0 ? setQuantity(quantity - 1)
        : setQuantity(quantity)
    }

    const handleSubmit = (e) => {
      e.preventDefault();

      const addToCart = product;
      toggleWithTime(addToCart, );
  }
  return (
    <>
      <img src={`${URL}/uploads/${endpoint}`}></img>
      <div className="product-single-info"><h1>{product.title}</h1>
      <h2>{product.price} kr</h2>
      <p className={product.quantity>0?'':'out-of-stock'}>{product.quantity>0?'In stock':'Out of stock'}</p>
      <br/>
      <div className="read-more-link"><Link to={"/products/"+`${product._id}`}>Read more...</Link></div>
      <br/>
      <input id='quantity-input' type='text' readOnly value={quantity}></input>
      <button className='quantity-button' onClick={increment}>+</button>
      <button className='quantity-button decrement-button' onClick={decrement}>-</button>
      <br/>
      <button onClick={handleSubmit} className="add-to-cart-button">Add to cart</button>
      </div>
      </>
  )
}

export default ProductItem
