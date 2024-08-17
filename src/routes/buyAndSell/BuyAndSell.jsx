import React from 'react'
import { Outlet } from 'react-router-dom'

const BuyAndSell = () => {
  return (
    <div>
      <Outlet /> {/* This is where nested routes will be rendered */}
    </div>
  )
}

export default BuyAndSell
