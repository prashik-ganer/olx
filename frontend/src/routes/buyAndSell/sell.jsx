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
          <label>
            Name:
            <input type="text" name="name" value={product.name} onChange={handleChange} />
          </label>
          <label>
            Category:
            <input type="text" name="category" value={product.category} onChange={handleChange} />
          </label>
          <label>
            Price:
            <input type="number" name="price" value={product.price} onChange={handleChange} />
          </label>
          <label>
            Image:
            <input type="file" name="image" accept="image/jpeg" onChange={handleImageChange} />
          </label>
          <label>
            Description:
            <textarea name="description" value={product.description} onChange={handleChange} />
          </label>
          <label>
            Negotiable:
            <input type="checkbox" name="negotiable" checked={product.negotiable} onChange={handleChange} />
          </label>
          <label>
            Cost Price:
            <input type="number" name="costPrice" value={product.costPrice} onChange={handleChange} />
          </label>
          <label>
            Product Age (years):
            <input type="number" name="productAge" value={product.productAge} onChange={handleChange} />
          </label>
        </form>
      </div>
    </div>
  );
}

export default Sell
