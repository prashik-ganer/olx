import React from 'react';
import ProductDetail from './productDetails';

const ProductView = ({prodDetail}) => {
  const { productx } = location.state || {};
  const product = {
    name: 'Sample Product',
    category: 'Electronics',
    price: '9999',
    image: 'https://via.placeholder.com/400x300',
    description: 'A great product with amazing features.',
    negotiable: true,
    costPrice: '8000',
    productAge: '2'
  };

  return (
    <div className="App">
      <ProductDetail product={product} />
    </div>
  );
}

export default ProductView;