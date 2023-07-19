import React, { useRef } from 'react'
import usefetchOneRecord from './usefetchOneRecord'
import { useParams } from 'react-router-dom'
import ProductItem from '../components/ProductItem';
import { useOutletContext } from "react-router-dom";
import Cart from '../components/Cart'

const Product = () => {
  const Params = useParams();
  const intervalRef = useRef(null);
  const URL = 'https://database-ecommerce-production.up.railway.app'
  const { data: product, isLoading, isError } = usefetchOneRecord('https://database-ecommerce-production.up.railway.app/products/' + Params.id)

  const { lineItems, setLineItems, totalPrice, setTotalPrice, toggle, setToggle, setIsDisplayCart} = useOutletContext();

  // if product existed then only increase amount of products and update total price
// else  if product does not exist, add product to list LineItems, update total price as well.
  const handleClick = (product, amount) => {
    setToggle(true);
    let isExist = lineItems.some(element => element.product._id == product._id)
    if (!isExist) {
      setTotalPrice(totalPrice => totalPrice + product.price * amount)
      setLineItems([...lineItems, { product: product, quantity: amount }])
    } else {
      setLineItems(lineItems.map((order) => {
        if (order.product._id === product._id) {
          setTotalPrice(totalPrice + order.product.price * amount)
          return { ...order, quantity: order.quantity + amount }
        } else {
          return order;
        }
      }))
    }
    //set timeout for mini-cart
    clearInterval(intervalRef.current)
    intervalRef.current = setTimeout(() => {
      setToggle(false)
    }, 3000)

    //show cart on Product page
    setIsDisplayCart(true);
  }

  const handleRemoveItem = (item) => {
    setLineItems(lineItems => lineItems.filter((i) => i.product._id != item.product._id));
    setTotalPrice(totalPrice - item.product.price * item.quantity)
  }

  return (
    <div>
      {isLoading
        ? <h1>Loading...</h1>
        : isError
          ? <h1>{isError}</h1>
          : <ProductItem key={product._id} product={product} URL={URL} handleClick={handleClick} isSingleView={true}/>
          }
      {(lineItems.length > 0 && toggle == true) 
      && <Cart popup={true} handleRemoveItem={handleRemoveItem}/>}
    </div>
  )
}

export default Product
