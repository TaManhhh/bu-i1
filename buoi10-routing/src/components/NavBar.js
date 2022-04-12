import React from 'react'
import { NavLink } from 'react-router-dom'

const activeClass=(params)=>{
    return params.isActive?"active-menu-item" :"";
};
const NavBar=() =>{
  return (
    <ul>
        <li>
            <NavLink className={activeClass} to="/" >Home</NavLink>
        </li>
        <li><NavLink className={activeClass} to="/product" >Product</NavLink></li>
        <li><NavLink className={activeClass} to="/profile" >Profile</NavLink></li>
    </ul>
  )
}

export default NavBar