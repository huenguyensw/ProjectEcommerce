import React, { useState } from 'react'

const ProductItem = ({product, URL, toggleWithTime}) => {
    const endpoint = encodeURI(product.image);
    const [quantity, setQuantity] = useState(1);

    const increment = () => {
        setQuantity(quantity + 1);
    }
    const decrement = () => {
        quantity>0 ? setQuantity(quantity - 1)
        : setQuantity(quantity)
    }
    
  return (
    <div className='product-single-view'>
      <img src={`${URL}/uploads/${endpoint}`} width='500px' height='500px'></img>
      <div class="product-single-info"><h1>{product.title}</h1>
      <h2>{product.price} kr</h2>
      <p class={product.quantity>0?'':'out-of-stock'}>{product.quantity>0?'In stock':'Out of stock'}</p>
      <br/>
      <input id='quantity-input' type='text' value={quantity}></input>
      <button class='quantity-button' onClick={increment}>+</button>
      <button class='quantity-button decrement-button' onClick={decrement}>-</button>
      <br/>
      <button onClick={toggleWithTime} class="add-to-cart-button">Add to cart</button><button id="favourite">&#x2764;</button>
      </div>
      
    </div>
  )
}

export default ProductItem
