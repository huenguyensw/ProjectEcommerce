import React, { useState, useEffect } from 'react'
import axios from 'axios'
import usefetchAllRecords from '../usefetchAllRecords'
import { Link } from 'react-router-dom'
import { useOutletContext } from 'react-router-dom'
import styled from 'styled-components'

const ManageProducts = () => {
  const [products, setProducts] = useState([]);
  const {setIsDisplayCart} = useOutletContext();

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get('https://db.up.railway.app/products');
      setProducts(response.data);
    } catch (error) {
      console.error(`Error fetching products: ${error}`);
    }
  };

  const handleDelete = async (productId) => {
    try {
      await axios.delete(`https://db.up.railway.app/products/${productId}`);
      setProducts(products.filter(product => product._id !== productId));
      console.log(`Product with ID ${productId} has been deleted.`);
    } catch (error) {
      console.error(`Error, colud not delete this product with ID ${productId}: ${error}`);
    }
    
    setIsDisplayCart(false);
  };

  //hide Cart icon
  setIsDisplayCart(false);
  return (
    <Wrapper>
      <HeaderSection>
        <Title>Manage Products</Title>
        <CreateLink to='/admin/create-product'>Create new product</CreateLink>
      </HeaderSection>
      <ProductTable>
        <thead>
          <TableRow>
            <TableHead>Title</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Quantity</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
          </thead>
          <tbody>
          {products.length == 0
          ? <h1>No product is available!</h1>
          : products.map((product)=>{ return (
            <TableRow key={product._id}>
              <TableData className='title'>{product.title}</TableData>
              <TableData>{product.price}</TableData>
              <TableData>{product.quantity}</TableData>
              <TableData>
                <EditButton to={"/admin/update-product/" + `${product._id}`}>Edit</EditButton>  
                <DeleteButton onClick={() => handleDelete(product._id)}>Delete</DeleteButton>
              </TableData>
            </TableRow>
          )})}
          </tbody>
      </ProductTable>
    </Wrapper>
  )
}

const lightColor = 'rgb(123, 172, 191)'
const darkColor = 'rgb(103, 163, 186)'

const Title = styled.h1`
  font-weight: lighter;
  color: ${darkColor};
  font-size: 20pt;
`;

const CreateLink = styled(Link)`
  background-color: ${darkColor};
  padding: 10px;
  text-decoration: none;
  color: white;
  border-radius: 5px;

  &:hover {
    background-color: ${lightColor}
  }
`;

const DeleteButton = styled.button`
  background-color: ${darkColor};
  padding: 10px;
  text-decoration: none;
  color: white;
  border-radius: 5px;
  border: none;
  font-size: 10pt;
  margin: 5px;
  border: 1px solid ${darkColor};

  &:hover {
    background-color: ${lightColor}
  }
`;

const EditButton = styled(Link)`
background-color: white;
padding: 10px;
text-decoration: none;
color: ${darkColor};
border-radius: 5px;
font-size: 10pt;
border: 1px solid ${darkColor};

&:hover {
  background-color: rgb(224, 231, 234);
}  
`;

const ProductTable = styled.table`
  border-collapse: collapse;
  width: 80%;
  margin: auto;
`;

const TableHead = styled.th`
  border: 1.5px solid ${darkColor};
  padding: 5px;
  color: ${darkColor};
  font-size: 20pt;
  background-color: rgb(224, 231, 234);
  text-align: center;`;

const TableRow = styled.tr`
  border: 1.5px solid ${darkColor};
  padding: 5px;
  text-align: center;

  &:nth-child(even) {
    background-color: #f2f2f2;
  }
  `;

const TableData = styled.td`
  border: 1.5px solid ${darkColor};
  padding: 5px;
  text-align: center;
  width: 3%;
  
  &.title {
    width: 20%;
    white-space: no-wrap;
    text-overflow: ellipsis;
    overflow: hidden;
    text-align: left;
    padding-left: 20px;
    position: relative;
  }
  `;

const Wrapper = styled.div`
  background-color: white;
  width: 100vw;
  display: block;
  padding: 30px;
  min-height: 75vh;
`;

const HeaderSection = styled.section`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
padding: 0 100px;
margin-top: -120px;
margin-bottom: 60px;
margin-left: 33%;
`;

export default ManageProducts