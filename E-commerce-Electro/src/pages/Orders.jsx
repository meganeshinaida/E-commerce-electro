// import React from 'react'

import { useContext } from "react"
import { ShopContext } from "../context/ShopContext"

const Orders = () => {
  const {products,currency}=useContext(ShopContext)
  return (
    <div className="mx-5">
      <div className=" ">
        <h1 className="text-2xl text-[]">
          My Order
        </h1>
      </div>
      <div className="">{
       products.slice(1,4).map((item,index)=>(
        <div className="py-4 border-t border-b text-gray-700 flex flex-col md:flex-row md:items-center md:justify-between" key={index}>
          <div className="flex items-start gap-6 text-sm">
            <img src={item.image[0]} alt="" className="w-16 sm:w-20"/>
            <div className="">
              <p className="sm:text-base font-medium">{item.name}</p>
              <div className="flex items-center gap-3 mt-2 text-base ">
                <p>{currency}{item.price}</p>
                <p>Quantity:1</p>
                <p>size:M</p>
              </div>
              <p>date: <span className=""></span>19 oct,2024</p>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-between">
            <div className="flex item-center gap-2">
               <p className="min-w-2 h-2 rounded-full bg-green-500"></p>
               <p> Ready to ship</p>
            </div>
            <button className="border px-4 py-2 text-sm font-medium rounded-sm">Track Order</button>
            </div>
        </div>
        
       )) 
}</div>
    </div>
  )
}

export default Orders
