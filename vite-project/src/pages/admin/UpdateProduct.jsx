import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { useOutletContext } from "react-router-dom";
import styled from "styled-components";

const UpdateProduct = () => {
  // Set up state for the product
  const [product, setProduct] = useState({});
  const [file, setFile] = useState({});
  const {setIsDisplayCart} = useOutletContext();

  // Get the navigate function from react-router
  const navigate = useNavigate();

  // Get the id parameter from the URL using useParams from react-router
  const { id } = useParams();

  const URL = 'https://db.up.railway.app/'
  const [src, setSrc] = useState({})

  // Use useEffect to fetch the product on mount
  useEffect(() => {
    fetchProduct();
  }, []);

  console.log(product.image)

  //hide Cart icon
  setIsDisplayCart(false);

  // Function to fetch the product by id from the API
  const fetchProduct = async () => {
    try {
      const response = await fetch(URL + 'products/' + id);
      const data = await response.json();
      setProduct(data);
      console.log(data);
      setSrc(`${URL}uploads/${encodeURI(data.image)}`)
    } catch (error) {
      console.log(error);
    }
  };

  // Function to handle changes in the form fields
  const handleChange = (e) => {
    e.preventDefault();
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    var formData = new FormData();
    formData.append('productImage', file);
    formData.append('title', product.title);
    formData.append('description', product.description);
    formData.append('price', product.price);
    formData.append('quantity', product.quantity);

    const config = {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    }
    const res = await axios.patch(URL+'products/'+id,formData,config);
    navigate("/admin/manage-products");
    console.log(res);
    console.log(formData)
  };

  // Function to handle uploading files
  const handleFiles = (event) => {
    setFile(event.target.files[0])
    const reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = () => {
      setProduct({
        ...product,
        image: reader.result,
      });
      setSrc(reader.result)
    };
  };

  // Render the component
  return (
    <UpdateWrapper>
    <div id="page">
      <h1>Update Products</h1>

    <StyleInputs>
      <form onSubmit={handleSubmit}>
        {/* Render the product fields in the input elements */}
        {product.image==''||product.image==null
        ? ''
        : <img src={src} width={250} height={250}></img>}
        <label>
          Upload Image:
          <input type="file" name='productImage' onChange={handleFiles} />
        </label>
        <br/>
        <label>
          Title:
          <br/>
          <input type='text' name='title' value={product.title || ""} onChange={handleChange}></input>
        </label>
        <br />
        <label>
          Price:
          <input type="text" name="price" value={product.price || ""} onChange={handleChange} />
        </label>
        <br />
        <label>
          Description:
          <textarea name="description" value={product.description || ""} onChange={handleChange} />
        </label>
        <br />
        <label>
          Quantity:
          <br/>
          <input type='text' name='quantity' value={product.quantity} onChange={handleChange}></input>
        </label>
        <br />
        {/* Add a link to navigate back to the manage-products page */}
        <Link to="/admin/manage-products">&#8592; Back</Link>
        {/* Add a button to submit the form */}
        <button>Update</button>
      </form>
      </StyleInputs>
    </div>
    </UpdateWrapper>
  );
};

const UpdateWrapper = styled.div`
display: flex;
flex-direction: column;
width: 600px;
height: 700px;
border-radius:10px;
padding: 10px;
border: 1px solid white;
background-color: white;
align-items: center;
text-align: center;
margin: 10px;
justify-content: space-between;
`;

const StyleInputs = styled.form`
display: flex;
flex-direction: row;
flex-wrap: wrap;
row-gap: 20px;
column-gap:20px;
padding: 10px;
margin: 5px 0;
line-height: 2.5;
`;

const Button = styled.button`
font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;
export default UpdateProduct;