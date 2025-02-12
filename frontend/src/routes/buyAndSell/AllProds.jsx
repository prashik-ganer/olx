import React from 'react';
import data from './data'; // Make sure the path to your data file is correct
import { Link } from 'react-router-dom';
const AllProds = () => {
  const data2 = data;
  


    const id = 7;
  return (
    <div className="container p-4">
      {/* <h1 className="text-2xl font-bold mb-6">All Products</h1> */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data2.map((product, index) => (
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
            <button
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center"
            >
              View Details
            </button>
              <Link to={`./${id}`}>Click</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllProds;
