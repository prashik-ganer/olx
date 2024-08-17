// src/components/ProductPage.js
import React, { useState } from 'react';

const Sell = () => {
  const [product, setProduct] = useState({
    product_name: '',
    category: '',
    price: '',
    negotiable: '',
    image_paths: '',
    short_description: '',
    product_age: '',
    cost_price: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct(prevProduct => ({
      ...prevProduct,
      [name]: value
    }));
  };

  return (
    <div className="flex h-screen">
      {/* LEFT Half */}
      <div className="w-1/2 p-4">
        <div className="bg-white p-4 shadow-md rounded-lg border border-gray-300">
          <h2 className="text-xl font-bold mb-2">Product Card</h2>
          <p><strong>Product Name:</strong> {product.product_name}</p>
          <p><strong>Category:</strong> {product.category}</p>
          <p><strong>Price:</strong> {product.price}</p>
          <p><strong>Negotiable:</strong> {product.negotiable}</p>
          <p><strong>Image Paths:</strong> {product.image_paths}</p>
          <p><strong>Short Description:</strong> {product.short_description}</p>
          <p><strong>Product Age:</strong> {product.product_age}</p>
          <p><strong>Cost Price:</strong> {product.cost_price}</p>
        </div>
      </div>

      {/* RIGHT Half */}
      <div className="w-1/2 p-4">
        <label className="mb-2">
          Product Name
          <input
            type="text"
            name="product_name"
            placeholder="Product Name"
            value={product.product_name}
            onChange={handleChange}
            className="mb-4 p-2 border border-gray-300 rounded"
          />
        </label>
        <label className="block mb-2">
          Category
          <input
            type="text"
            name="category"
            placeholder="Category"
            value={product.category}
            onChange={handleChange}
              className="mb-4 p-2 border border-gray-300 rounded"
          />
        </label>
        <label className="block mb-2">
          Price
          <input
            type="text"
            name="price"
            placeholder="Price"
            value={product.price}
            onChange={handleChange}
              className="mb-4 p-2 border border-gray-300 rounded"
          />
        </label>
        <label className="block mb-2">
          Negotiable
          <input
            type="text"
            name="negotiable"
            placeholder="Negotiable"
            value={product.negotiable}
            onChange={handleChange}
              className="mb-4 p-2 border border-gray-300 rounded"
          />
        </label>
        <label className="block mb-2">
          Image Paths
          <input
            type="text"
            name="image_paths"
            placeholder="Image Paths"
            value={product.image_paths}
            onChange={handleChange}
              className="mb-4 p-2 border border-gray-300 rounded"
          />
        </label>
        <label className="block mb-2">
          Short Description
          <input
            type="text"
            name="short_description"
            placeholder="Short Description"
            value={product.short_description}
            onChange={handleChange}
              className="mb-4 p-2 border border-gray-300 rounded"
          />
        </label>
        <label className="block mb-2">
          Product Age
          <input
            type="text"
            name="product_age"
            placeholder="Product Age"
            value={product.product_age}
            onChange={handleChange}
              className="mb-4 p-2 border border-gray-300 rounded"
          />
        </label>
        <label className="block mb-2">
          Cost Price
          <input
            type="text"
            name="cost_price"
            placeholder="Cost Price"
            value={product.cost_price}
            onChange={handleChange}
              className="mb-4 p-2 border border-gray-300 rounded"
          />
        </label>
      </div>
    </div>
  );
};

export default Sell;
