// import React from 'react'

import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import CartTotal from "../components/CartTotal";

const Cart = () => {
  const { products, currency, cartItems,updateQuantity,getCartAmount } = useContext(ShopContext);
  const [cartData, setCartData] = useState([]);
  useEffect(() => {
    const tempData = [];
    for (const items in cartItems) {
      for (const item in cartItems[items]) {
        if (cartItems[items][item] > 0) {
          tempData.push({
            id: items,
            size: item,
            quantity: cartItems[items][item],
          });
        }
      }
    }
    setCartData(tempData);
  }, [cartItems]);
  return(
    <div className="border-t pt-14">
      <div className="text-2xl mb-3">
        <h1>Your Cart</h1>
      </div>
      <div className="flex gap-4 ">
      
      <table className="table-auto w-full sm:w-[80%] lg:w-[70%] ">
      <thead>
          <tr className="bg-[#E2F4FF] text-left">
            <th className="">Product</th>
            <th className="">Price</th>
            <th className="">Quantity</th>
            <th className="">sum Total</th>
            <th className="">de</th>
          </tr>
          </thead>
        <tbody className="">
        {
          cartData.map((item,index)=>{
            const productData = products.find((product)=>product.id === item.id)
            return(
              <tr key={index} className="border-b">
                <td className="flex gap-2">
                <img src={productData.image[0]} alt="" className="w-16 sm:w-20" />
                    <div className="f">
                      <p>{productData.name}</p>
                      <p><span>Color:</span>{item.color}</p>
                      <p><span>sizer:</span > <span className="px-2 bg-gray-300">{item.size}</span></p> </div>
                </td>
                <td>
                <p>{currency} {productData.price}</p>
                </td>
                <td>
                <input onChange={(e)=>e.target.value ==='' || e.target.value === '0' ? null :updateQuantity(item.id,item.size,Number(e.target.value)) } type="number" min={1} defaultValue={item.quantity} className="border border-black bg-gray-300 w-16
                  " />
                </td>
                <td>{currency}{getCartAmount()}  </td>
                <td><i className="fa fa-trash"></i></td>
              </tr>
            )})}
 
        </tbody>
        <div className="`py-4 w-full justify-between">
        <button className="border w-1/3 rounded-full py-2 px-2">Continue shopping </button>
        <button className="border w-1/3 rounded-full py-2">update cart</button> 
        <button className="border w-1/3 rounded-full py-2">Clear cart</button>
      </div>
      </table>
      <div>    <CartTotal/></div>
  
 
       </div>
       
    </div>
  )
};

export default Cart;
