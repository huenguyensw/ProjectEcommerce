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
      if (!response.ok) {
        throw new Error('Error fetching product. Please try again later.');
      }
      const data = await response.json();
      if (!data || Object.keys(data).length === 0) {
        throw new Error('Error fetching product data. Please try again later.');
      }
      setProduct(data);
      setSrc(`${URL}uploads/${encodeURI(data?.image) || 'default-image.png'}`);
    } catch (error) {
      console.log(error);
      // display an error message to the user
      alert(error.message);
      navigate("/admin/manage-products");
    }
  };
  
  
  
  // Function to handle changes in the form fields
  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    switch (name) {
      case 'price':
        if (isNaN(value) || Number(value) < 0) {
          alert('Price must be a positive number.');
          return;
        }
        break;
      case 'quantity':
        if (isNaN(value) || Number(value) < 0) {
          alert('Quantity must be a positive number.');
          return;
        }
        break;
      default:
        break;
    }
    setProduct({
      ...product,
      [name]: value,
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
    
    try {
      const res = await axios.patch(URL + 'products/' + id, formData, config);
      if (res.status === 200) {
        navigate("/admin/manage-products");
      } else {
        throw new Error('Error updating product. Please try again later.');
      }
      console.log(res);
      console.log(formData)
    } catch (error) {
      console.log(error);
      // display an error message to the user
      alert('Error updating product. Please try again later.');
    }
  };
  
  // Function to handle uploading files
  const handleFiles = (event) => {
    if (!event.target.files || event.target.files.length === 0) {
      // handle error
      alert('Please select a file.');
      return;
    }
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setProduct({
        ...product,
        image: reader.result,
      });
      setSrc(reader.result)
    };
    reader.onerror = () => {
      // handle error
      alert('Error reading file.');
    };
    if (file.size > 2 * 1024 * 1024) {
      // handle error
      alert('File size must be less than 2MB.');
      return;
    }
    if (!['image/jpeg', 'image/png'].includes(file.type)) {
      // handle error
      alert('File type must be JPEG or PNG.');
      return;
    }
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