import React from 'react';
import { Link } from 'react-router-dom';
<div className="bg-blue-500 text-white px-3 py-1 rounded text-sm"><Link to={`/buyandsell`} className="bg-blue-500 text-white">Explore Buy and Sell</Link></div>

const HomePage = () => {
  return (
    <div className=''>
      
      <h1 className='text-5xl font-semibold whitespace-nowrap text-center my-9 text-gray-800'>OUR SERVICES</h1>

    <div className="flex flex-wrap items-center justify-evenly mx-auto p-4">
    
    
<div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img className="rounded-t-lg" src="https://cdni.iconscout.com/illustration/premium/thumb/taxi-service-5071331-4252833.png" alt="" />
    </a>
    <div className="p-5">
        <a href="#">
            <h5 className="mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">TAXI SERVICE</h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
        <div className="bg-blue-500 text-white px-3 py-1 rounded text-sm"><Link to={`/taxi`} className="bg-blue-500 text-white">Explore Taxi Service</Link></div>

    </div>
</div>



<div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img className="rounded-t-lg" src="buy.png" alt="" />
    </a>
    <div className="p-5">
        <a href="#">
            <h5 className="mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">BUY AND SELL</h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
       
        <div className="bg-blue-500 text-white px-3 py-1 rounded text-sm"><Link to={`/buyandsell`} className="bg-blue-500 text-white">Explore Buy and Sell</Link></div>

    </div>
</div>



<div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img className="rounded-t-lg" src="https://w7.pngwing.com/pngs/365/661/png-transparent-cafeteria-computer-icons-restaurant-food-hotel.png" alt="" />
    </a>
    <div className="p-5">
        <a href="#">
            <h5 className="mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">CANTEEN</h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>

        <div className="bg-blue-500 text-white px-3 py-1 rounded text-sm"><Link to={`/canteen`} className="bg-blue-500 text-white">Explore Canteen Service</Link></div>
          
        
    </div>
</div>

    </div>

    </div>
  );
};

export default HomePage;
