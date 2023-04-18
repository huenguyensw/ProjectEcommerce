import React, { useState } from 'react'
import axios from 'axios'
import usefetchAllRecords from '../usefetchAllRecords'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { useOutletContext } from 'react-router-dom'

const ManageProducts = () => {
  const {data:products,isLoading, isError} = usefetchAllRecords('https://db.up.railway.app/products');
  const {setIsDisplayCart} = useOutletContext();


  const handleDelete = async (productId) => {
    try {
      // Make API call to delete product using productId
      await axios.delete(`https://db.up.railway.app/products/${productId}`);
  
      // Perform any additional actions after successful deletion
      console.log(`Product with ID ${productId} deleted successfully.`);
    } catch (error) {
      // Handle error if any
      console.error(`Error deleting product with ID ${productId}: ${error}`);
    }
  };
  if(isLoading){
    return <h1>Loading...</h1>
  }
  if(isError){
    return <h1>{isError}</h1>
  }

  //hide Cart icon
  setIsDisplayCart(false);
  
  return (
    <div>
      <HeaderSection>
        <h1>Manage Products</h1>
        <Link to='/admin/create-product'>Create new product</Link>
      </HeaderSection>
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
          {products.length == 0
          ? <h1>No product is available!</h1>
          : products.map((product)=>{ return (
            <tr key={product._id}>
              <td>{product.title}</td>
              <td>{product.price}</td>
              <td>{product.quantity}</td>
              <td>
                <Link to={"/admin/update-product/" + `${product._id}`}>Edit</Link>|  
                <a href="#" onClick={() => handleDelete(product._id)}>Delete</a>
              </td>
            </tr>
          )})}
          </tbody>
      </table>
      
    </div>
  )
}

const HeaderSection = styled.section`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
padding: 0 100px;
`;

export default ManageProducts