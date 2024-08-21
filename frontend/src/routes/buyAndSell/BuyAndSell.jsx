import React from 'react'
import { Outlet } from 'react-router-dom'
// import {data} from "./data"
import AllProds from './AllProds'
const BuyAndSell = () => {
  // const data = data;
  // console.log(data)
  return (
    <div className='flex justify-center'>
      {/* <AllProds/> */}
    {/* <ProductList/> */}
          <Outlet /> {/* This is where nested routes will be rendered */}
    </div>
  )
}

export default BuyAndSell
