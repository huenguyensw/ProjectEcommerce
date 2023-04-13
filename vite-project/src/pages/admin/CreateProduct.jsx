import React, { useState } from 'react'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';


const CreateProduct = () => {
  const [file, setFile] = useState({})
  const [inputs, setInputs] = useState({})
  const URL = 'https://db.up.railway.app/products'
  const navigate = useNavigate();


  const handleChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value })
  }

  const handleFiles = (e) => {
    setFile(e.target.files[0])
  }

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

  
  return (
    <form className='product-form' onSubmit={handleSubmit}>
      <label>
        Upload Image:
        <input type="file" name='productImage' onChange={handleFiles} />
      </label>
      <section className='product-form-info' >
        <label>
          Title:
          <br/>
          <input type='text' name='title' value={inputs.title} onChange={handleChange} required></input>
        </label>
        <label>
          Description:
          <br/>
          <textarea name='description' value={inputs.description} onChange={handleChange} required></textarea>
        </label>
        <label>
          Price:
          <br/>
          <input type='text' name='price' value={inputs.price} onChange={handleChange} required></input>
        </label>
        <label>
          Quantity:
          <br/>
          <input type='text' name='quantity' value={inputs.quantity} onChange={handleChange} required></input>
        </label>
        <button type="submit">Create</button>
      </section>
      
    </form>

  )
}

export default CreateProduct
