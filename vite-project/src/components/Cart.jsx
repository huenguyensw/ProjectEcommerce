import React, { useState } from 'react'

const Cart = ({ lineItems }) => {

  const URL = 'https://db.up.railway.app'
  // const [total, setTotal] = useState(0);
  // var totalValue = 0;
  // //orders is an array of objects
  // // each object include 2 properties: product and quantity
  // totalValue = lineItems.map((item)=> )
  // setTotal(totalValue);
  return (
    <ul className='ShoppingCart'>
      {lineItems.map((order) =>
        <li className='ShoppingItem'>
          <img src={`${URL}/uploads/${order.product.image}`} width='20px' height='20px'></img>
          <p>{order.product.title}</p>
          <p>{order.quantity}x{order.product.price}</p>
        </li>)
      }
      <hr/>
      {/* <p>Total price: {total} </p> */}
      {/* {console.log(order.product)} */}
    </ul>
  )
}

export default Cart
