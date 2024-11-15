import { createContext,useState } from "react";
import {products} from "../assets/assets"
import PropTypes from "prop-types";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
export const ShopContext = createContext()
const ShopContextProvider =(props)=>{
  const currency = 'FCFA';
  const deliver_fee =1000;
  const [cartItems,setCartItems]=useState({})
const navigate=useNavigate()

  const addToCart = async(itemId,size)=>{
     let cartData = structuredClone(cartItems)
     if(!size){
      toast.error('select product size')
      return
     }
     if(cartData[itemId]){
      if(cartData[itemId][size]){
        cartData[itemId][size] += 1
      }
      else{
        cartData[itemId][size]=1
      }
     }else{
      cartData[itemId]={}
      cartData[itemId][size]=1
     }
     setCartItems(cartData)
  }

  const getCartCount = ()=>{
    let totalCount = 0
    for(const items in cartItems){
      for(const item in cartItems[items]){
        try{
          if(cartItems[items][item] > 0){
            totalCount += cartItems[items][item]
          }
        }catch(error){}
      }
    }return totalCount
  }
  
  const updateQuantity =async(itemId,size,quantity)=>{
    let cartData =structuredClone(cartItems)
      cartData[itemId][size]=quantity
      setCartItems(cartData)
    
  }
  const getCartAmount =  () =>{
    let totalAmount = 0
    for(const items in cartItems){
        let itemInfo =products.find((products)=> products.id === items)
       for(const item in cartItems[items]){
        try {
           if(cartItems[items][item]>0){
            totalAmount+=itemInfo.price * cartItems[items][item]
           } 
        } catch (error){}
        
       }
    }
    return totalAmount
 }


  const value ={
 products,currency,deliver_fee,cartItems,addToCart,getCartCount, updateQuantity,getCartAmount,navigate
  }
  return(
    <ShopContext.Provider value={value}>
      {props.children}
    </ShopContext.Provider>
  )
}
ShopContextProvider.propTypes = {
  children: PropTypes.node.isRequired,};
export default ShopContextProvider