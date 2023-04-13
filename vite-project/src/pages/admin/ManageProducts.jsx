import React from 'react'
import usefetchAllRecords from '../usefetchAllRecords'
import { Link } from 'react-router-dom'

const ManageProducts = () => {
  const {data:products,isLoading, isError} = usefetchAllRecords('https://db.up.railway.app/products')
  if(isLoading){
    return <h1>Loading...</h1>
  }
  if(isError){
    return <h1>{isError}</h1>
  }
  return (
    <div>
      <section className='create-Product-Btn'>
        <Link to='/admin/create-product'>Create new product</Link>
      </section>
      <table className='data'>
        <thead>
          <tr>
            <th>Title</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.length == 0? <h1>No product is available!</h1>:
          products.map((product)=>{ return (
            <tr key={product._id}>
              <td>{product.title}</td>
              <td>{product.price}</td>
              <td>{product.quantity}</td>
              <td>
                <Link to={"/products/" + `${product._id}`}>Edit</Link>| <a href='#'>Delete</a>
              </td>
            </tr>
          )})}
          </tbody>
      </table>
      
    </div>
  )
}

export default ManageProducts
