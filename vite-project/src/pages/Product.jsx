import React,{useState} from 'react'
import usefetchOneRecord from './usefetchOneRecord'
import { useParams} from 'react-router-dom'
import ProductItem from '../components/ProductItem';
import { useOutletContext } from "react-router-dom";

const Product = () => {
  const Params = useParams();
  console.log(Params.id)
  const URL = 'https://db.up.railway.app'
  const {data: product, isLoading, isError} = usefetchOneRecord('https://db.up.railway.app/products/'+ Params.id)
  
  const [lineItems, setLineItems] = useOutletContext();
  const [totalPrice, setTotalPrice] = useState(0);

  const handleClick = (product,amount) => {
    let isExist = lineItems.some(element => element.product._id == product._id)
    if (!isExist) {
      setTotalPrice(totalPrice => totalPrice + product.price*amount)
      setLineItems([...lineItems, { product: product, quantity: amount }])
    } else {
      setLineItems(lineItems.map((order) => {
        if (order.product._id === product._id) {
          console.log('exist')
          setTotalPrice(totalPrice + order.product.price*amount)
          return { ...order, quantity: order.quantity + amount }
        } else {
          return order;
        }
      }))
    }
  }

  return (
    <div>
      {isLoading?<h1>Loading...</h1>:isError?<h1>{isError}</h1>:<div className="single-product-view"><ProductItem key={product._id} product={product} URL={URL} handleClick={handleClick} /></div>}
    </div>
  )
}

export default Product
