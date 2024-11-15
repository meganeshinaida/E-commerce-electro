// import React from 'react'

import { useContext, useEffect, useState } from "react";
import Advertisement from "./components/Advertisement";

import { Link } from "react-router-dom";
 
import ProductItem from "./components/ProductItem";
import { ShopContext } from "./context/ShopContext";
import { dropdown_icon,} from "./assets/assets";

const Categories = () => {
  const {products}=useContext(ShopContext)
  const[filterProducts,setFilterProducts]=useState([])
  useEffect(()=>{
    setFilterProducts(products)
  },[products])
  const [showFilter, setShowFilter] = useState(false);
  const [category,setCategory]=useState([])
  const toggleCategory =(e)=>{
    if (category.includes(e.target.value)) {
      setCategory(prev=>prev.filter(item=> item !== e.target.value))
    }
    else{
      setCategory(prev=>[...prev,e.target.value])
    }
  }
  const applyFilter =()=>{
    let productsCopy =products.slice()
    if(category.length > 0){
      productsCopy=productsCopy.filter(item=>category.includes(item.category) )
    } 
    setFilterProducts(productsCopy)
  }
 
  useEffect(()=>{
    applyFilter()
  },[category])

  return (
    <>
      <div className="flex gap-4">
        <Link to={"/"}>
          Home <i className="fa-solid fa-greater-than"></i>
        </Link>{" "}
        <Link to={"/categories"}>
          Categories <i className="fa-solid fa-greater-than"></i>
        </Link>
      </div>
      <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t">
      <div className="flex flex-col sm:flex-row gsp-1 sm:gap pt-10 border-t">
        {/* Filter option */}
        <div className="min-w-60 ">
          <p className=" text-xl flex item-center cursor-pointer gap-2 pl-2 text-[#003F62] font-bold" onClick={()=>setShowFilter(!showFilter)}>
            FILTER
            <img src={dropdown_icon} className={`h-3 m-2 sm:hidden ${showFilter? 'rotate-90' : ''}`} alt="" />
          </p>
          {/* Category Filter */}
          <div className={`pl-2 py-3  ${showFilter ? "" : "hidden"} sm:block`}>
            <div className="flex justify-between px-2 text-[#003F62] ">
              <p className="font-semibold ">Categories</p>
              <p> Reset</p>
            </div>
            <div className="flex justify-between px-2 text-black ">
              <p>
                {" "}
                <input
                  type="checkbox"
                  className="w-3 focus:bg-[#E2F4FF]  bg-black"
                  value={"All categories"}
                />{" "}
                All Categories
              </p>{" "}
              <p className="pr-3">10</p>
            </div>
            <div className="flex justify-between px-2 text-black ">
              <p>
                {" "}
                <input
                  type="checkbox"
                  className="w-3  bg-[#E2F4FF] "
                  value={"tablets"}
               onChange={toggleCategory} />{" "}
                Tablets
              </p>{" "}
              <p className="pr-3">5</p>
            </div>
            <div className="flex justify-between px-2 text-black ">
              <p>
                {" "}
                <input
                  type="checkbox"
                  className="w-3  bg-[#E2F4FF] "
                  value={"laptop"}
                onChange={toggleCategory}/>{" "}
                Laptops
              </p>{" "}
              <p className="pr-3">5</p>
            </div>
            <div className="flex justify-between px-2 text-black ">
              <p>
                {" "}
                <input
                  type="checkbox"
                  className="w-3  bg-[#E2F4FF] "
                  value={"headset"}
                onChange={toggleCategory}/>{" "}
                Headset
              </p>{" "}
              <p className="pr-3">5</p>
            </div>
            <div className="flex justify-between px-2 text-black ">
              <p>
                {" "}
                <input
                  type="checkbox"
                  className="w-3  bg-[#E2F4FF] "
                  value={"console"}
               onChange={toggleCategory} />{" "}
                Console
              </p>{" "}
              <p className="pr-3">5</p>
            </div>
            <div className="flex justify-between px-2 text-black ">
              <p>
                {" "}
                <input
                  type="checkbox"
                  className="w-3  bg-[#E2F4FF] "
                  value={"other"}
               onChange={toggleCategory} />{" "}
                Other
              </p>{" "}
              <p className="pr-3">5</p>
            </div>
            <hr className="my-6 mx-4" />
          </div>
         
          {/* =================Availability=================== */}
          <div className={`pl-2 py-3  ${showFilter ? "" : "hidden"} sm:block`}>
            <p className="font-semibold text-[#003F62] ">Availability</p>
            <div className="flex justify-between px-2 text-[#003F62] ">
              <p className="font-semibold ">{0} Selected</p>
              <p> Reset</p>
            </div>
            <div className="flex justify-between px-2 text-black ">
              <p>
                {" "}
                <input
                  type="checkbox"
                  name=""
                  id=""
                  className="w-3  bg-[#E2F4FF] "
                  value={"inStock"}
                />{" "}
                In stock
              </p>{" "}
              <p className="pr-3">5</p>
            </div>
            <div className="flex justify-between px-2 text-black ">
              <p>
                {" "}
                <input
                  type="checkbox"
                  className="w-3  bg-[#E2F4FF] "
                  value={"outOfStock"}
                />{" "}
                Out of stock
              </p>{" "}
              <p className="pr-3">0</p>
            </div>
            <hr className="my-6 mx-4" />
          </div>
       
          {/* ============Products type=============== */}
          <div className={`pl-2 py-3  ${showFilter ? "" : "hidden"} sm:block`}>
            <p className="font-semibold text-[#003F62] ">Product type</p>
            <div className="flex justify-between px-2 text-[#003F62] ">
              <p className="font-semibold ">{0} Selected</p>
              <p> Reset</p>
            </div>
            <div className="flex justify-between px-2 text-black ">
              <p>
                {" "}
                <input
                  type="checkbox"
                  className="w-3  bg-[#E2F4FF] "
                  value={"productType"}
                />{" "}
                Smart-watch
              </p>{" "}
              <p className="pr-3">5</p>
            </div>
            <hr className="my-6 mx-4" />
          </div>

          {/* =============Brand================= */}
          <div className={`pl-2 py-3  ${showFilter ? "" : "hidden"} sm:block`}>
            <p className="font-semibold text-[#003F62] ">Brand</p>
            <div className="flex justify-between px-2 text-[#003F62] ">
              <p className="font-semibold ">{0} Selected</p>
              <p> Reset</p>
            </div>
            <div className="flex justify-between px-2 text-black ">
              <p>
                {" "}
                <input
                  type="checkbox"
                  className="w-3  bg-[#E2F4FF] "
                  value={"brand"}
                />{" "}
                Smart-watch
              </p>{" "}
              <p className="pr-3">5</p>
            </div>
            <hr className="my-6 mx-4" />
          </div>
       
          {/* ===========Colors============== */}
          <div className={`pl-2 py-3  ${showFilter ? "" : "hidden"} sm:block`}>
            <p className="font-semibold text-[#003F62] ">Color</p>
            <div className="flex justify-between px-2 text-[#003F62] ">
              <p className="font-semibold ">{0} Selected</p>
              <p> Reset</p>
            </div>
            <div className="flex justify-between px-2 text-black ">
              <input type="color" name="" id="" value="orange-500" />
            </div>
            <hr className="my-6 mx-4" />
          </div>
          {/* ==========Sizes================ */}
   
          <div className={`pl-2 py-3  ${showFilter ? "" : "hidden"} sm:block`}>
            <p className="font-semibold text-[#003F62] ">Size</p>
            <div className="flex justify-between px-2 text-[#003F62] ">
              <p className="font-semibold ">{0} Selected</p>
              <p> Reset</p>
            </div>
            <div className="flex justify-between px-2 text-black ">
              <p>
                {" "}
                <input
                  type="checkbox"
                  className="w-3  bg-[#E2F4FF] "
                  value={"size"}
                />
                 M
              </p>{" "}
              <p className="pr-3">5</p>
            </div>
            <div className="flex justify-between px-2 text-black ">
              <p>
                {" "}
                <input
                  type="checkbox"
                  className="w-3  bg-[#E2F4FF] "
                  value={"size"}
                />
                 S
              </p>{" "}
              <p className="pr-3">5</p>
            </div>
            <div className="flex justify-between px-2 text-black ">
              <p>
                {" "}
                <input
                  type="checkbox"
                  className="w-3  bg-[#E2F4FF] "
                  value={"size"}
                />
                 X
              </p>{" "}
              <p className="pr-3">5</p>
            </div>
            <div className="flex justify-between px-2 text-black ">
              <p>
                {" "}
                <input
                  type="checkbox"
                  className="w-3  bg-[#E2F4FF] "
                  value={"size"}
                />
                 XX
              </p>{" "}
              <p className="pr-3">5</p>
            </div>
            <hr className="my-6 mx-4" />
          </div>
        </div>
      </div>
      {/* =======Map; products============== */}
      <div className="grid grid-cols-2  md:grid-cols-3 gap-4 gap-y-1 lg:grid-cols-4 ">{
        filterProducts.map((item,index)=>(
          <ProductItem key={index} id={item.id} image={item.image} name={item.name} price={item.price} />
        ))
        }</div>
      </div>
      
      <Advertisement />
    </>
  );
};

export default Categories;
