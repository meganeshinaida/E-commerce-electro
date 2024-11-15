import { ShopContext } from "../context/ShopContext"
import {Link} from 'react-router-dom'
import {useContext} from 'react'


const ProductItem = ({id,image,name,price}) => {
    const {currency}=useContext(ShopContext)
  return (

      <Link className  ='cursor-pointer text-[#003F62]' to={`/product/${id}`}>
          <div className="overflow-hidden border-2 border-black rounded-2xl   p-4 content-center " >
          <span className="flex justify-end"><i className="fa-regular fa-heart    bg-gray-400 py-1 px-1  rounded-full  hover:text-red-600 "></i></span>
            <div className="flex justify-center ">
              <img  src={image[0]} alt="" className="hover:scale-110 transition ease-in-out w-1/2"/> 
             
              </div>
              
              <p className='pt-3 pb-1 text-sm font-bold '>{name}</p>
              <p className='text-sm font-medium'>{currency} {price}</p>
              
              <div className="flex gap-3 ">
                <i className="fa fa-heart text-gray-400 text-sm hover:text-orange-400"></i>
                <i className="fa fa-heart text-gray-400 text-sm hover:text-orange-400"></i>
                <i className="fa fa-heart text-gray-400 text-sm hover:text-orange-400"></i>
                <i className="fa fa-heart text-gray-400 text-sm hover:text-orange-400"></i>
                <i className="fa fa-heart text-gray-400 text-sm hover:text-orange-400"></i>
              </div>
          </div>
         
      </Link>
  
  )
}

export default ProductItem
