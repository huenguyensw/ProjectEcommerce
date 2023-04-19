import React, { useState } from 'react'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { useOutletContext } from 'react-router-dom';
import { ProductWrapper, StyleInputs, Image, InputLabel, Button, BackButton, ButtonWrapper } from '../../styling';



const CreateProduct = () => {
  const [file, setFile] = useState({})
  const [inputs, setInputs] = useState({})
  const URL = 'https://db.up.railway.app/products'
  const navigate = useNavigate();
  const { setIsDisplayCart } = useOutletContext();

  const [image, setImage] = useState('');


  const handleChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value })
  }

  const handleFiles = (e) => {
    setFile(e.target.files[0])
    //render image
    var reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
      setImage(reader.result)
    };
    console.log(reader)
    reader.onerror = error => {
      console.log("Error:", error)
    }

  }
  console.log(image)

  const handleSubmit = async (e) => {
    e.preventDefault();
    var formData = new FormData();
    formData.append('productImage', file);
    formData.append('title', inputs.title);
    formData.append('description', inputs.description);
    formData.append('price', inputs.price);
    formData.append('quantity', inputs.quantity);

    const config = {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    }

    const res = await axios.post(URL, formData, config);


    navigate('/admin/manage-products')
    console.log(res)
  }


  //hide Cart icon
  setIsDisplayCart(false);

  return (
    <ProductWrapper>
      <h1>Create Product</h1>
      <StyleInputs onSubmit={handleSubmit}>
        {image == '' || image == null
          ? ""
          : <img src={image} width={250} height={250} alt='product-image'></img>}
        <br />
        <Image>
          Upload Image:
          <br />
          <input type="file" name='productImage' onChange={handleFiles} />
          
        </Image>
        <InputLabel>
          Title:
          <br />
          <input type='text' name='title' value={inputs.title} onChange={handleChange} required></input>
        </InputLabel>
        <InputLabel>
          Description:
          <br />
          <textarea name='description' rows={10} value={inputs.description} onChange={handleChange} required></textarea>
        </InputLabel>
        <InputLabel>
          Price(kr):
          <br />
          <input type='text' name='price' value={inputs.price} onChange={handleChange} required></input>
        </InputLabel>
        <InputLabel>
          Quantity:
          <br />
          <input type='text' name='quantity' value={inputs.quantity} onChange={handleChange} required></input>
        </InputLabel>
        <ButtonWrapper>
          <BackButton to="/admin/manage-products">&#8592; Back</BackButton>
          <Button type="submit">Create</Button>
        </ButtonWrapper>
      </StyleInputs>
    </ProductWrapper>


  )
}

export default CreateProduct