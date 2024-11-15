// import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
// import  core modules
import { Pagination,Autoplay } from "swiper/modules";
import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import ProductItem from "./ProductItem";

// ******************
const PopularProduct = () => {
  const {products}=useContext(ShopContext)
  const [popularProducts,setPopularProducts] = useState([])

  useEffect(()=>{
    setPopularProducts(products.slice(0,8))
  },[products])
  console.log(products)
  return (
    <div className="p-5 width-3/4 h-1/3">
        <div className="sm:flex flex-wrap justify-between p-5">
          <p className="text-3xl text-[#003F62]">Popular products</p> 
          <ul className="flex gap-10 overflow-x-scroll sm:overflow-auto ">
            <li className="border-2 rounded-full px-8 py-2 hover:border-[#003F62] ">Cameras</li>
            <li className="border-2 rounded-full px-8 py-2 hover:border-[#003F62] ">Laptops</li>
            <li className="border-2 rounded-full px-8 py-2 hover:border-[#003F62] ">Tablets</li>
            <li className="border-2 rounded-full px-8 py-2 hover:border-[#003F62] ">Mouse</li>
          </ul>
        </div>
        {/*      products swiper section */}
       
       
        <Swiper
          // install Swiper modules
          modules={[Pagination,Autoplay]}
          spaceBetween={50}
          slidesPerView
          
          loop={true}
          // autoplay={{
          //   delay: 5500
          // }}
        
          pagination={{ clickable: true }}  
       
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
          className="flex justify-center items-center content-center h-1/3   py-8 px-4 min-w-[100%]"
        >1
        <SwiperSlide className="flex justify-center item-center  ">
         {/* rendering products  */}
         <div className="grid grid-cols-2  sm:grid-cols-3  md:grid-cols-4 lg:grid-col-5  gap-4  ">
              {
                  popularProducts.map((item,index)=>(<ProductItem key={index} id={item.id} image={item.image} name={item.name} price={item.price} />))
              }
          </div>
        
        </SwiperSlide>
        <SwiperSlide className="grid grid-cols-4">
          <div className="">
            
          </div>
        </SwiperSlide>
        <SwiperSlide className="grid grid-cols-4">
          <div className="">
            
          </div>
        </SwiperSlide>
        <SwiperSlide className="grid grid-cols-4">
          <div className="">
            
          </div>
        </SwiperSlide>
        </Swiper>
        </div>
    
  
  )
}

export default PopularProduct
