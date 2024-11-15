
import { useContext, useEffect, useState } from "react"
import { ShopContext } from "../context/ShopContext"
import ProductItem  from "./ProductItem"
const RelatedProducts = ({category,subCategory,brand}) => {
    const {products}=useContext(ShopContext)
    const [related,setRelated]=useState([])
    useEffect(()=>{
       if (products.length > 0) {
       let productsCopy=products.slice()
        productsCopy=productsCopy.filter((item)=>category === item.category)
        productsCopy=productsCopy.filter((item)=>subCategory === item.subCategory)
        productsCopy=productsCopy.filter((item)=>brand === item.brand)
          setRelated(productsCopy.slice(0,5))
       }

    },[products])
  return (
    <div className="my-24">
        <div className="text-[#003F62] text-3xl py-2">
            <p className="">Related Product</p>
        </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:gris-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
{
    related.map((item,index)=>(
        <ProductItem key={index} id={item.id} name={item.name} price={item.price} image={item.image}/>
    ))
}
      </div>
    </div>
  )
}

export default RelatedProducts
