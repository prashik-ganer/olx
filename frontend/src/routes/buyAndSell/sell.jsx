import React, { useState } from 'react';
import  './sellproduct.css'

const Sell = () => {
  const [product, setProduct] = useState({
    name: '',
    category: '',
    price: '',
    image: null,
    description: '',
    negotiable: false,
    costPrice: '',
    productAge: ''
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

  return (
    <div className="app-container">
      <div className="preview-section">
        <h2>Product Preview</h2>
        <div className="preview">
          {product.image && <img src={product.image} alt={product.name} />}
          <h3>{product.name}</h3>
          <p>Category: {product.category}</p>
          <p>Price: ₹{product.price}</p>
          <p>Description: {product.description}</p>
          <p>Negotiable: {product.negotiable ? 'Yes' : 'No'}</p>
          <p>Cost Price: ₹{product.costPrice}</p>
          <p>Product Age: {product.productAge} years</p>
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
              name="name"
              value={product.name}
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
              type="file"
              id="image"
              name="image"
              accept="image/jpeg"
              onChange={handleImageChange}
              className="form-input"
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description:</label>
            <textarea
              id="description"
              name="description"
              value={product.description}
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
                  value="true"
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
                  value="false"
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
              name="costPrice"
              value={product.costPrice}
              onChange={handleChange}
              className="form-input"
            />
          </div>
          <div className="form-group">
            <label htmlFor="productAge">Product Age (years):</label>
            <input
              type="number"
              id="productAge"
              name="productAge"
              value={product.productAge}
              onChange={handleChange}
              className="form-input"
            />
          </div>
          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Sell
