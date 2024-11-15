import {useContext} from 'react'
import { ShopContext } from '../context/ShopContext'
import {  useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
function ShowSearch() {
    const {search,setSearch,showSearch}=useContext(ShopContext)
    const [setVisible]=useState(false)
    const location = useLocation()
    useEffect(()=>{
     if(location.pathname.includes('categories') && showSearch){
       setVisible(true)
     }else{
       setVisible(false)
     }
    })
  return  showSearch ?(
    <div>
          <i className="fa fa-search block sm:hidden cursor-pointer " ></i>
        <form className="flex justify-between bg-white rounded-xl w-[40%] sm:w-[40] h-[40%] sm:h-[60%] overflow-hidden  ">
          <input type="text" placeholder="Search any thing" value={search} onChange={(e)=>setSearch(e.target.value)}  className="border-none  outline-none relative placeholder:pl-4  text-black"/>
          <button type="submit" className="  bg-[#EDA415] rounded-xl  hover:text-black w-48 ">Search</button>
        </form>
        <i onClick={()=>showSearch(false)} className="fa fa-cross cursor-pointer"></i>
    </div>
  ):null
}

export default ShowSearch
