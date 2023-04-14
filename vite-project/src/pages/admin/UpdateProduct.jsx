import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";

const UpdateProduct = () => {
  // Set up state for the product
  const [product, setProduct] = useState({});

  // Get the navigate function from react-router
  const navigate = useNavigate();

  // Get the id parameter from the URL using useParams from react-router
  const { id } = useParams();

  // Use useEffect to fetch the product on mount
  useEffect(() => {
    fetchProduct();
  }, []);

  // Function to fetch the product by id from the API
  const fetchProduct = async () => {
    try {
      const response = await fetch("https://db.up.railway.app/products/" + id);
      const data = await response.json();
      setProduct(data);
      console.log(data);
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
    try {
      await fetch("https://db.up.railway.app/products/" + id, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          image: product.image,
          title: product.title,
          price: product.price,
          description: product.description,
          quantityOfProducts: product.quantityOfProducts
        }),
      });

      // Navigate to the manage-products page after successful submission
      navigate("/manage-products");
    } catch (error) {
      console.log(error);
    }
  };

  // Function to handle uploading files
  const handleFiles = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setProduct({
        ...product,
        image: reader.result,
      });
    };
  };

  // Render the component
  return (
    <div id="page">
      <h1>Update Products</h1>

      <form onSubmit={handleSubmit}>
        {/* Render the product fields in the input elements */}
        <label>
          Upload Image:
          <input type="file" name='productImage' onChange={handleFiles} />
        </label>
        <br />
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
        <Link to="/manage-products">&#8592; Back</Link>
        {/* Add a button to submit the form */}
        <button>Update</button>
      </form>
    </div>
  );
};

export default UpdateProduct;
