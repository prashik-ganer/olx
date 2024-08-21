import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const AllProds = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/products');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setProducts(data.products.products);
        setFilteredProducts(data.products.products);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    // Filter products based on search query and price range
    const filtered = products.filter(product => {
      const matchesSearch = product.product_name.toLowerCase().includes(searchQuery.toLowerCase());
      const withinPriceRange =
        (minPrice === '' || product.price >= parseFloat(minPrice)) &&
        (maxPrice === '' || product.price <= parseFloat(maxPrice));
      return matchesSearch && withinPriceRange;
    });
    setFilteredProducts(filtered);
  }, [searchQuery, minPrice, maxPrice, products]);

  if (loading) return <p className="text-center text-xl font-semibold">Loading...</p>;
  if (error) return <p className="text-center text-red-500">Error: {error}</p>;

  return (
    <div className="container p-4">
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search by product name..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded mb-4"
        />
        <div className="flex gap-4 mb-4">
          <div className="flex flex-col">
            <label htmlFor="minPrice" className="text-gray-700">Min Price</label>
            <input
              id="minPrice"
              type="number"
              placeholder="Min Price"
              value={minPrice}
              onChange={(e) => setMinPrice(e.target.value)}
              className="p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="maxPrice" className="text-gray-700">Max Price</label>
            <input
              id="maxPrice"
              type="number"
              placeholder="Max Price"
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
              className="p-2 border border-gray-300 rounded"
            />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product, index) => (
            <div
              key={index}
              className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700"
            >
              <h5 className="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">
                {product.product_name}
              </h5>
              <div className="flex items-baseline text-gray-900 dark:text-white">
                <span className="text-3xl font-semibold">₹</span>
                <span className="text-5xl font-extrabold tracking-tight">
                  {product.price.toFixed(2)}
                </span>
                <span className="ms-1 text-xl font-normal text-red-300 dark:text-red-300">
                  ({product.negotiable ? 'Negotiable' : 'Fixed'})
                </span>
              </div>
              <ul role="list" className="space-y-5 my-7">
                <li className="flex items-center">
                  <svg
                    className="flex-shrink-0 w-4 h-4 text-blue-700 dark:text-blue-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                  </svg>
                  <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">
                    {product.short_description}
                  </span>
                </li>
                <li className="flex">
                  <svg
                    className="flex-shrink-0 w-4 h-4 text-blue-700 dark:text-blue-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                  </svg>
                  <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">
                    Product Age: {product.product_age}
                  </span>
                </li>
                <li className="flex">
                  <svg
                    className="flex-shrink-0 w-4 h-4 text-blue-700 dark:text-blue-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                  </svg>
                  <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">
                    Cost Price: ${product.cost_price.toFixed(2)}
                  </span>
                </li>
              </ul>
              <div className="flex flex-wrap gap-2 mb-4">
                {product.image_paths.map((image, i) => (
                  <img
                    key={i}
                    src={image}
                    alt={`${product.product_name} ${i}`}
                    className="w-24 h-24 object-cover rounded"
                  />
                ))}
              </div>
              <div className='flex justify-center'>
                <Link
                  // to={{`${product.user_id}`  state: { user: user }}
                  to={{
                    pathname: `${product.user_id}`,
                    state: { productx: product },
                  }}
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-xl font-semibold">No products found</p>
        )}
      </div>
    </div>
  );
};

export default AllProds;
