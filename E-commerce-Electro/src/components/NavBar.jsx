// import React from 'react'
import { Link,NavLink } from "react-router-dom"
const NavBar = () => {
  return (
    <div className="flex justify-between bg-[#F4F4F4] h-[71px] px-10  items-center ">
    {/* ===========Orange Catalogue=============== */}
         <span >   <NavLink to='/categories'><select className="bg-[#EDA415] px-5 py-6">
        <option value="">Browse Categories</option>
        <option value="">Tablets</option>
        <option value="">Laptop</option>
        <option value="">Headphones</option>
        <option value="">Console</option> 
        <option value="">Other</option>
        </select></NavLink></span>
        {/* ======================Links to various pages============================ */}
          <ul className="hidden sm:flex gap-7">
           <NavLink to='/'> <select  className="bg-transparent">
            <option value="">Home </option>
          
           <option value="">Popular Product </option>
            <option value="">Clients Review</option>
            <option value="">Latest News</option>
           </select></NavLink>
           <NavLink to='/collection'><select className="bg-transparent">
        <option value="">Catalogue </option>
        <option value="">Tablets</option>
        <option value="">Laptop</option>
        <option value="">Headphones</option>
        <option value="">Console</option> 
        <option value="">Other</option>
        </select></NavLink>
           <NavLink to='/blog'>Blog</NavLink>
           <NavLink to='/'><select name="" id="" className="bg-transparent">
            <option value="">Pages</option>
            </select>
            </NavLink>
            <NavLink to='/aboutUs'>About Us</NavLink>
         </ul>
         {/* ======================Small text==================================== */}
           <span className=" text-[#003F62] text-base font-bold"> 30 Days Free Return</span>
          </div>
  )
}

export default NavBar
