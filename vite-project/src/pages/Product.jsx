import React from 'react'
import usefetchOneRecord from './usefetchOneRecord'
import { useParams} from 'react-router-dom'
import ProductItem from '../components/ProductItem';

const Product = () => {
  const Params = useParams();
  console.log(Params.id)
  const URL = 'https://db.up.railway.app'

  const {data: product, isLoading, isError} = usefetchOneRecord('https://db.up.railway.app/products/'+ Params.id)
  return (
    <div>
      {isLoading?<h1>Loading...</h1>:isError?<h1>{isError}</h1>:<ProductItem key={product._id} product={product} URL={URL}/>}
    </div>
  )
}

export default Product
