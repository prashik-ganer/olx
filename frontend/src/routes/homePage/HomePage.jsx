import React from 'react';
import { Link } from 'react-router-dom';
<div className="bg-blue-500 text-white px-3 py-1 rounded text-sm"><Link to={`/buyandsell`} className="bg-blue-500 text-white">Explore Buy and Sell</Link></div>

const HomePage = () => {
    return (
        <div className='container mx-auto my-12'>

            <h1 className='text-5xl font-semibold text-center my-9 text-gray-800'>OUR SERVICES</h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center justify-items-center">

                <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <a href="#">
                        <div className="h-48 w-full overflow-hidden rounded-t-lg">
                            <img className="h-full w-full object-contain" src="https://cdni.iconscout.com/illustration/premium/thumb/taxi-service-5071331-4252833.png" alt="Taxi Service" />
                        </div>
                    </a>
                    <div className="p-5">
                        <a href="#">
                            <h5 className="mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">TAXI SERVICE</h5>
                        </a>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                       
                        <div className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-auto"><Link to={`/taxi`}>Explore Taxi Service</Link></div>
                    </div>
                </div>

                <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <a href="#">
                        <div className="h-48 w-full overflow-hidden rounded-t-lg">
                            <img className="h-full w-full object-contain" src="buy.png" alt="Buy and Sell" />
                        </div>
                    </a>
                    <div className="p-5">
                        <a href="#">
                            <h5 className="mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">BUY AND SELL</h5>
                        </a>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                        <div className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-auto"><Link to={`/buyandsell`}>Explore Buy and Sell</Link></div>
                    
                    </div>
                </div>

                <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <a href="#">
                        <div className="h-48 w-full overflow-hidden rounded-t-lg">
                            <img className="h-full w-full object-contain" src="https://w7.pngwing.com/pngs/365/661/png-transparent-cafeteria-computer-icons-restaurant-food-hotel.png" alt="Canteen" />
                        </div>
                    </a>
                    <div className="p-5">
                        <a href="#">
                            <h5 className="mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">CANTEEN</h5>
                        </a>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                        <div className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-auto"><Link to={`/canteen`}>Explore Canteen Service</Link></div>
                    
                    </div>
                </div>

            </div>
        </div>
    );
};

export default HomePage;





// <div className=''>

// <h1 className='text-5xl font-semibold whitespace-nowrap text-center my-9 text-gray-800'>OUR SERVICES</h1>

// <div className="flex flex-wrap items-center justify-evenly mx-auto p-4">


//     <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
//         <a href="#">
//             <img className="rounded-t-lg" src="https://cdni.iconscout.com/illustration/premium/thumb/taxi-service-5071331-4252833.png" alt="" />
//         </a>
//         <div className="p-5">
//             <a href="#">
//                 <h5 className="mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">TAXI SERVICE</h5>
//             </a>
//             <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
//             <div className="bg-blue-500 text-white px-3 py-1 rounded text-sm"><Link to={`/taxi`} className="bg-blue-500 text-white">Explore Taxi Service</Link></div>

//         </div>
//     </div>



//     <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
//         <a href="#">
//             <img className="rounded-t-lg" src="buy.png" alt="" />
//         </a>
//         <div className="p-5">
//             <a href="#">
//                 <h5 className="mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">BUY AND SELL</h5>
//             </a>
//             <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>

//             <div className="bg-blue-500 text-white px-3 py-1 rounded text-sm"><Link to={`/buyandsell`} className="bg-blue-500 text-white">Explore Buy and Sell</Link></div>

//         </div>
//     </div>



//     <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
//         <a href="#">
//             <img className="rounded-t-lg" src="https://w7.pngwing.com/pngs/365/661/png-transparent-cafeteria-computer-icons-restaurant-food-hotel.png" alt="" />
//         </a>
//         <div className="p-5">
//             <a href="#">
//                 <h5 className="mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">CANTEEN</h5>
//             </a>
//             <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>

//             <div className="bg-blue-500 text-white px-3 py-1 rounded text-sm"><Link to={`/canteen`} className="bg-blue-500 text-white">Explore Canteen Service</Link></div>


//         </div>
//     </div>

// </div>

// </div>