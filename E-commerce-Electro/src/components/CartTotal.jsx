// import React from 'react'
import { ShopContext } from "../context/ShopContext"
import { useContext } from "react"
import {Link} from "react-router-dom"

const CartTotal = () => {
    const {currency,getCartAmount,navigate}= useContext(ShopContext)
  return (
    
        <div className="w-full border justify-center items-center  sm:w-[100%]" > 
        <h1 className="text-center bg-[#E2F4FF] px-8 py-4">Cart total</h1>
      <div className="flex justify-between px-8 py-4">
         <p>Subtotal</p>
         <p>{currency}{getCartAmount()}.00</p>
      </div>
      <hr className="mx-6 my-4" />
      <div className="flex justify-between px-8 py-3 border rounded-2xl  my-2 mx-2">
      <input type="text" className="px-2  " placeholder="Enter Coupon code"  />
      <p>
        <Link className="text-blue-500 font-bold">apply</Link>
      </p>
      </div>
  
      <hr className="mx-6 my-4" />
     <select name="" className="mx-4">
        <option value="Country"></option>
     </select>
     <div className="flex justify-between px-8 py-4">
        <b>Total</b>
        <p>{currency}{getCartAmount() === 0 ? 0: getCartAmount() + 5}
        </p>
     </div>
     <button className="border mx-8 my-4 w-[80%] rounded-full  p-2 bg-[#EDA415] text-white font-bold" onClick={()=> navigate('/place-order')}>Proceed to check outs</button>
    </div>
  )
}

export default CartTotal
