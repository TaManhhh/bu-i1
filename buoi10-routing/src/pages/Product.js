import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Product=() =>{

  return (
    <div>
      <h1>products</h1>
      <ul>
        <li><Link to ="/product/1">Product 1</Link></li>
        <li><Link to ="/product/2">Product 2</Link></li>
        <li><Link to ="/product/3">Product 3</Link></li>
      </ul>
      <Outlet></Outlet>
    </div>
  )
}

export default Product