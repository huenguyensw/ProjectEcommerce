import React from 'react'
import usefetchOneRecord from './usefetchOneRecord'
import { useParams} from 'react-router-dom'

const Product = () => {
  const Params = useParams();
  console.log(Params.id)
  const {data: product, isLoading, isError} = usefetchOneRecord('https://db.up.railway.app/products/'+ Params.id)
  return (
    <div>
      
    </div>
  )
}

export default Product
