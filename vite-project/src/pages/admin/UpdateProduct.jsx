import React, { useState } from 'react';
import { Link } from 'react-router-dom';


function UpdateProduct() {
  const [product, setProduct] = useState({
    name: '',
    price: '',
    description: '',
    quantity: '',
  
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    ('https://db.up.railway.app/products'+ params.id)
      .then(() => {
        // redirect to ManageProducts page
        window.location.href = '/admin/manage-products';
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  return (
    <div>
     
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" onChange={handleChange} value={product.name} />

        <label htmlFor="price">Price</label>
        <input type="number" name="price" id="price" onChange={handleChange} value={product.price} />

        <label htmlFor="description">Description</label>
        <textarea name="description" id="description" onChange={handleChange} value={product.description}></textarea>

        <button type="submit">Create Product</button>
      </form>
      <Link to="/admin/manage-products">Back to Manage Products</Link>
    </div>
  );
}

export default UpdateProduct;
