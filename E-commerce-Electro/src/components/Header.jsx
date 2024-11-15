// import React from 'react'
// import { Link } from "react-router-dom";
import {Link } from "react-router-dom";
import Head from "./Head";
import NavBar from "./NavBar";
import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";

const Header = () => {
  const {getCartCount} = useContext(ShopContext)
  return (
    <div className=" flex flex-col  ">
      {/* ==================Header section 1================== */}
      <Head/>
  {/* =======Navbar 1 with search bar============================ */} 
      <div className="bg-[#003F62]  h-20 px-10 flex justify-between items-center text-white   ">
        {/* ======================Logo===================== */}
     <Link to={'/'}>LOGO  <img src="" alt="" className="" /> </Link>
{/* ==============================Search bar=============================== */}
         <i className="fa fa-search block sm:hidden  " ></i>
        <form className="flex justify-between bg-white rounded-xl w-[40%] sm:w-[40] h-[40%] sm:h-[60%] overflow-hidden  ">
          <input type="text" placeholder="Search any thing" className="border-none  outline-none relative placeholder:px-4 "/>
          <button type="submit" className="  bg-[#EDA415] rounded-xl  hover:text-black w-48 ">Search</button>
        </form>
        {/* ====================NIcons user================================== */}
        <ul className="flex gap-10">
          <li className="group relative">
      
            <Link to={'/login'}><i className="fa-regular fa-user text-2xl cursor-pointer"></i></Link> 
            <div className="group-hover:block hidden dropdown-menu  absolute">
              <div className="flex flex-col gap-2 w-32 px-5 bg-[#003F62] text-[#EDA415] ">
              <span className="cursor-pointer ">Sign in</span>
              <span className="cursor-pointer ">Login</span>
              </div>
            </div>
          
          </li>
          <li className="">
         
            <i className="fa-regular fa-heart text-2xl "></i>
            <span className="bg-[#EDA415] py-1 px-2 rounded-full  text-center text-[10px]  absolute  mt-3 mr-4 left-8]">
              0
            </span>
          </li>
          <li className="">
        
             <Link to="/cart"><i className="fa fa-shopping-cart text-2xl "></i></Link>
            <span className="bg-[#EDA415] py-1 px-2 rounded-full text-center text-[10px] absolute  mt-3 mr-4 left-8]">
            {getCartCount()}
            </span> 
          </li>
          <i className="fa fa-bars text-2xl sm:hidden"></i>
        </ul>
      
      </div>
      {/* ============= Nav links================== */}
     <NavBar/>
    </div>
  );
};

export default Header;
