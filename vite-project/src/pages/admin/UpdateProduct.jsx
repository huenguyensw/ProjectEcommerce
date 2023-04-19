import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { useOutletContext } from "react-router-dom";
import { ProductWrapper, StyleInputs,Image,InputLabel,Button, BackButton, ButtonWrapper} from '../../styling';

const UpdateProduct = () => {
  // Set up state for the product
  const [product, setProduct] = useState({});
  const [file, setFile] = useState({});
  const { setIsDisplayCart } = useOutletContext();

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

  console.log(product?.image)

  //hide Cart icon
  setIsDisplayCart(false);

  // Function to fetch the product by id from the API
  const fetchProduct = async () => {
    try {
      const response = await fetch(URL + 'products/' + id);
      const data = await response.json();
      setProduct(data);
      console.log(data);
      setSrc(`${URL}uploads/${encodeURI(data?.image)}`);
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
    const res = await axios.patch(URL + 'products/' + id, formData, config);
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
    console.log(event.target.files[0])
  };

  // Render the component
  return (

    <ProductWrapper>
      <h1>Update Products</h1>
      <StyleInputs onSubmit={handleSubmit}>
        {/* Render the product fields in the input elements */}
        {product.image == '' || product.image == null ? (
          ''
        ) : (
          <img src={src} width={250} height={250} />
        )}
        <Image>
            Upload Image:
            <input type="file" name="productImage" onChange={handleFiles} />
        </Image>

        <InputLabel>
          Title:
          <input type="text" name="title" value={product.title || ""} onChange={handleChange} />
        </InputLabel>

        <InputLabel>
          Price:
          <input type="text" name="price" value={product.price || ""} onChange={handleChange} />
        </InputLabel>

        <InputLabel>
          Description:
          <br />
          <textarea name="description" value={product.description || ""} onChange={handleChange} />
        </InputLabel>

        <InputLabel>
          Quantity:
          <input type="text" name="quantity" value={product.quantity} onChange={handleChange} />
        </InputLabel>

        {/* Add a link to navigate back to the manage-products page */}
        <ButtonWrapper>
          
          <BackButton to="/admin/manage-products">&#8592; Back</BackButton>
          
          {/* Add a button to submit the form */}
          <Button type="submit">Update</Button>
        </ButtonWrapper>


      </StyleInputs>

    </ProductWrapper>

  );
};


export default UpdateProduct;