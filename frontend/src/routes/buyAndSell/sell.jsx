import React, { useContext, useState } from 'react';
import  './sellproduct.css'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { UserContext } from "../../context/UserContext";


const Sell = () => {
  const [token] = useContext(UserContext);
  const [product, setProduct] = useState({
    product_name: '',
    category: '',
    price: 0,
    negotiable: true,
    image_paths: '',
    short_description: '',
    product_age: '',
    cost_price: 0,
  });



  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setProduct({
      ...product,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProduct({ ...product, image: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };


  const handleSubmit = async(e) => {
    const formData = new URLSearchParams({
      grant_type: 'password',
      username: 'prashik',
      password: 'prashik',
      scope: '',  // Ensure this is correct
      client_id: 'string',
      client_secret: 'string'
    }).toString();
    
    try {
      const response = await fetch('http://127.0.0.1:8000/token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Accept': 'application/json',
          'Cache-Control': 'no-cache',  // Bypass cache
          'Pragma': 'no-cache'          // Bypass cache
        },
        body: formData
      });
    
      if (!response.ok) {
        const errorText = await response.text();
        console.error('HTTP error:', response.status, errorText);
        return;
      }
    
      const data = await response.json();
      const token = data.access_token;  // Adjust based on actual response structure
    
      console.log(token);
      localStorage.setItem('authToken', token);
    
    } catch (error) {
      console.error('Fetch error:', error);
    }    
    
    
  
  
  
    // e.preventDefault();

  //   const formData = new FormData(e.target);
  //   const name = formData.get("name");
  //   const category = formData.get("category");
  //   const price = formData.get("price");
  //   const image = "stringnnnnnnnnnnnnnn"
  //   const description = formData.get("description");
  //   const negotiable = formData.get("negotiable");
  //   const costPrice = formData.get("costPrice");
  //   const productAge = formData.get("productAge");
  //   // const password = formData.get("password");

  //   console.log(name, price, category, image, description, negotiable, costPrice, productAge);

  //   // TO MAKE REQUEST TO AN API
  //   try{

  //     const res = await axios.post("http://127.0.0.1:8000/product",
  //       'accept: application/json',
  //       {
  //       product_name:name,
  //       category:category,
  //       price:price,
  //       image_paths:image,
  //       short_description:description,
  //         negotiable: negotiable,
  //         cost_price:costPrice,
  //         product_age:productAge,
  //     })

  //     // {
  //     //   "product_name": "Vaibhav Ki cycle",
  //     //   "category": "string",
  //     //   "price": 5000,
  //     //   "negotiable": true,
  //     //   "image_paths": "string",
  //     //   "short_description": "string",
  //     //   "product_age": "string",
  //     //   "cost_price": 0,
  //     //   "user_id": "string"
  //     // }



  //     console.log(res.data)
  //   navigate("/login");
  //   }catch(err){
  //     console.log(err)
  //     // setEerror
  //     // setError(err.response.data.messsage)
  // }

}


    const handleCreated = async (e) => {
      e.preventDefault();
      
      const requestOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
        body: JSON.stringify({
          product_name: product.product_name,
          category: product.category,
          price: product.price,
          negotiable: product.negotiable,
          image_paths: product.image_paths,
          short_description: product.short_description,
          product_age: product.product_age,
          cost_price: product.cost_price,
        }),
      };
      const response = await fetch("http://127.0.0.1:8000/product", requestOptions);
      if (!response.ok) {
        console.log("Something went wrong when creating lead");
      } else {
        console.log("Product submitted!");
      }
    };


    


  return (
    <div className="app-container">
      <div className="preview-section">
        <h2>Product Preview</h2>
        <div className="preview">
          {product.image_paths && <img src={product.image_paths} alt={product.product_name} />}
          <h3>{product.product_name}</h3>
          <p>Category: {product.category}</p>
          <p>Price: ₹{product.price}</p>
          <p>Description: {product.short_description}</p>
          <p>Negotiable: {product.negotiable ? 'Yes' : 'No'}</p>
          <p>Cost Price: ₹{product.cost_price}</p>
          <p>Product Age: {product.product_age} years</p>
        </div>
      </div>
      
      <div className="form-section">
        <h2>Enter Product Details</h2>
        <form>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="product_name"
              value={product.product_name}
              onChange={handleChange}
              className="form-input"
            />
          </div>
          <div className="form-group">
            <label htmlFor="category">Category:</label>
            <input
              type="text"
              id="category"
              name="category"
              value={product.category}
              onChange={handleChange}
              className="form-input"
            />
          </div>
          <div className="form-group">
            <label htmlFor="price">Price:</label>
            <input
              type="number"
              id="price"
              name="price"
              value={product.price}
              onChange={handleChange}
              className="form-input"
            />
          </div>
          <div className="form-group">
            <label htmlFor="image">Image:</label>
            <input
              type="string"
              id="image"
              name="image_paths"
             // accept="image/jpeg"
              onChange={handleImageChange}
              className="form-input"
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description:</label>
            <textarea
              id="description"
              name="short_description"
              value={product.short_description}
              onChange={handleChange}
              className="form-input"
            />
          </div>
          <div className="form-group">
            <label>Negotiable:</label>
            <div className="form-toggle">
              <label>
                <input
                  type="radio"
                  name="negotiable"
                  value={true}
                  checked={product.negotiable === true}
                  onChange={() => setProduct({ ...product, negotiable: true })}
                  className="form-radio"
                />
                Yes
              </label>
              <label>
                <input
                  type="radio"
                  name="negotiable"
                  value={false}
                  checked={product.negotiable === false}
                  onChange={() => setProduct({ ...product, negotiable: false })}
                  className="form-radio"
                />
                No
              </label>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="costPrice">Cost Price:</label>
            <input
              type="number"
              id="costPrice"
              name="cost_price"
              value={product.cost_price}
              onChange={handleChange}
              className="form-input"
            />
          </div>
          <div className="form-group">
            <label htmlFor="productAge">Product Age (years):</label>
            <input
              type="text"
              id="productAge"
              name="product_age"
              value={product.product_age}
              onChange={handleChange}
              className="form-input"
            />
          </div>
          <button type="submit" className="submit-button" onClick={handleCreated}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Sell

