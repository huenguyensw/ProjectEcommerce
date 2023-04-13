import React, { useState } from 'react'
import axios from 'axios';
import { useParams } from 'react-router';

const CreateProduct = () => {
  const [file, setFile] = useState({})
  const [inputs, setInputs] = useState({})



  const handleChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value })
  }
  //   const handleSubmit = (e) =>{
  //     console.log(inputs);
  //     console.log(fileInput.current.files[0].name)
  //     e.preventDefault();
  //     fetch('http://localhost:3000/products',{
  //       method: 'POST',
  //       headers: {
  //         "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //         title: inputs.title,
  //         description: inputs.description,
  //         price: inputs.price,
  //         quantity: inputs.quantity,
  //         productImage: fileInput.current.files[0].name,
  //     })
  // }).then(()=> console.log('test'))
  // .catch(error=>console.log(error))

  // }
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

    const res = await axios.post("http://localhost:3000/products", formData, config);
    console.log(res)

  }

  const handleFiles = (e) => {
    setFile(e.target.files[0])
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
          <input type='text' name='title' value={inputs.title} onChange={handleChange}></input>
        </label>
        <label>
          Description:
          <br/>
          <textarea rows="4" cols="80" name='description' value={inputs.description} onChange={handleChange}></textarea>
        </label>
        <label>
          Price:
          <br/>
          <input type='text' name='price' value={inputs.price} onChange={handleChange}></input>
        </label>
        <label>
          Quantity:
          <br/>
          <input type='text' name='quantity' value={inputs.quantity} onChange={handleChange}></input>
        </label>
        <button type="submit">Create</button>
      </section>
      
    </form>

  )
}

export default CreateProduct
