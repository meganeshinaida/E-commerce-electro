// 0

import { useContext, useState } from "react"
import { razorPay, stripe } from "../assets/assets"
import CartTotal from "../components/CartTotal"
import { ShopContext } from "../context/ShopContext"


const PlaceOrder = () => {
  const [method,setMethod]=useState('cod')
const {navigate}=useContext(ShopContext)
  return (
   <div className="flex  m-28 justify-between flex-wrap">
     <div className="flex flex-col gap-4 w-full sm:max-w-[480px] m-4">
        <div className="text-xl sm:text-2xl my-3">
            <h1>Delivery information</h1> </div>
            <div className="flex gap-3">
                <input type="text" placeholder="First Name" className="border border-gray-300 rounded py-1.5 px3.5 w-full" />
                <input type="text" placeholder="Last Name" className="border border-gray-300 rounded py-1.5 px3.5 w-full" />
            </div>
            <input type="email" placeholder="Email address" className="border border-gray-300 rounded py-1.5 px3.5 w-full" />
            <input type="text" placeholder="Street" className="border border-gray-300 rounded py-1.5 px3.5 w-full" />
            <div className="flex gap-3">
                <input type="text" placeholder="City" className="border border-gray-300 rounded py-1.5 px3.5 w-full" />
                <input type="text" placeholder="State" className="border border-gray-300 rounded py-1.5 px3.5 w-full" />
            </div>
            <div className="flex gap-3">
                <input type="number" placeholder="ZipCode" className="border border-gray-300 rounded py-1.5 px3.5 w-full" />
                <input type="text" placeholder="Country" className="border border-gray-300 rounded py-1.5 px3.5 w-full" />
            </div>
            <input type="number" placeholder="Phone" className="border border-gray-300 rounded py-1.5 px3.5 w-full" />
      </div>
      {/* cart total section */}
      <div className="">
      <CartTotal/>
      <div className="">
        {/* Payment method section  */}
        <h1 className="font-bold text-3xl text-[#003F62] m-4">Payment method</h1>
        <div className="flex flex-col lg:flex-row gap-3">
            <div  onClick={()=>setMethod('stripe')}className="flex items-center gap-3 border p-2 px-3 cursor-pointer ">
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method==='stripe' ? 'bg-green-400':''}`}></p>
              <img src={stripe} alt="" />
            </div>
            <div onClick={()=>setMethod('razorpay')} className="flex items-center gap-3 border p-2 px-3 cursor-pointer ">
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method==='razorpay' ? 'bg-green-400':''}`}></p>
              <img src={razorPay} alt="" />
            </div>
            <div onClick={()=>setMethod('cod')} className="flex items-center gap-3 border p-2 px-3 cursor-pointer ">
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method==='cod' ? 'bg-green-400':''}`}></p>
           <p className="text-[#003F62] text-3xl font-medium` ">Cash on delivery</p>
            </div>
        </div>
        <div className="w-full text-end mt-8"
        >
          <button onClick={()=>navigate('/orders')} className="bg-[#003F62] text-white px-16 py-3 text-medium">Place Order</button>
        </div>
      </div>
      </div>
    
   </div>
  )
}

export default PlaceOrder
