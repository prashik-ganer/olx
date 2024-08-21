import React from 'react';
import './ProductDetail.css';

const ProductDetail = ({ product }) => {
  const whatsappMessage = `Hi, I'm interested in the ${product.name}. Can you provide more details?`;
  const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="product-detail-container mt-32">
      <div className="product-image">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="product-info">
        <h1>{product.name}</h1>
        <p><strong>Category:</strong> {product.category}</p>
        <p><strong>Price:</strong> ₹{product.price}</p>
        <p><strong>Description:</strong> {product.description}</p>
        <p><strong>Negotiable:</strong> {product.negotiable ? 'Yes' : 'No'}</p>
        <p><strong>Cost Price:</strong> ₹{product.costPrice}</p>
        <p><strong>Product Age:</strong> {product.productAge} years</p>
        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="whatsapp-button">
          <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp_Logo_2016.svg" alt="WhatsApp" />
        </a>
      </div>
    </div>
  );
};

export default ProductDetail;
