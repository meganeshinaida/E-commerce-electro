import { ShopContext } from "../context/ShopContext"
import { useParams } from "react-router-dom"
import { useContext,useEffect,useState } from "react"
import DescriptionReview from "../components/DescriptionReview"
import RelatedProducts from "../components/RelatedProducts"
const Product = () => {
  const {productId} = useParams()
  const {products,currency,addToCart}=useContext(ShopContext)
  const [productData,setProductData]=useState(false)
 const [image,setImage]=useState('')
 const [size,setSize]=useState('')
  const fetchProductData = async()=>{

    products.map((item)=>{
      if (item.id==productId){
        setProductData(item)
        setImage(item.image[0])
      
        return null
      }
    })
  }


  useEffect(()=>{
    fetchProductData()
  },[productId])



  return productData ? (
  
    <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100">
  {/* // Product data */}
    <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
      {/* Product images */}
      <div className="flex-1 flex flex-col ml-8 gap-y-5">
      <div className="w-full sm:w-[80%] border-2 rounded-2xl overflow-hidden ">
          <img src={image} className="w-full h-auto border" alt="" />
        </div>
        <div className="flex sm:flex-row overflow-x-auto sm:overflow-x-scroll justify-between sm:justify-normal sm:w-full w-full h-[300px] overflow-hidden  ">
          {
            productData.image.map((item,index)=>(
                     <img onClick={()=>setImage(item)} src={item} key={index} className="w-[50%] sm:w-[40%] h-[60%]  flex-shrink-0 cursor-pointer border-2 rounded-2xl" alt="" />
            ))
          }
        </div>
     
      </div>
      {/* Product info */}
      <div className="flex-1">
        <h1 className="font-medium text-2xl mt-2 text-[#003F62]">{productData.name}</h1>
        <h1 className="font-medium text-xl mt-2">{currency} {productData.price}</h1>
        <div className="flex items-center gap-1mt-2">
          <i className="fa-regular fa-star text-3xl text-[#EDA415]"></i>
          <i className="fa-regular fa-star text-3xl text-[#EDA415]"></i>
          <i className="fa-regular fa-star text-3xl text-[#EDA415]"></i>
          <i className="fa-regular fa-star text-3xl text-[#EDA415]"></i>
          <i className="fa-regular fa-star text-3xl text-[#EDA415]"></i>
        </div>
        <div> <span className="font-bold text-[#003F62]">Availability: </span><span className="text-green-400"><i className="fa fa-check"></i> {productData.availability}</span></div>
        <p className="text-gray-400 text-[13px]">{productData.description} </p>
        <hr className="my-8 w-11/12" />
        <div> <span className="font-bold text-[#003F62]">Color: </span><span></span></div>
      <div className="flex gap-2"> <p className="font-bold text-[#003F62]">size: </p> <div className="flex gap-2">
          {productData.size.map((item,index)=>(
             <button onClick={()=>setSize(item) 
             } className={`border  px-2 bg-gray-100 ${item === size ? 'border-orange-500':''} `} key={index}> {item}</button>
          ))}

          </div></div> 
          <div className=" flex gap-8 my-4">
            <button className="bg-[#EDA415] w-2/6 active:bg-black text-white text-sm rounded-full" onClick={()=>addToCart(productData.id,size)}>Add to cart</button>
            <button className="bg-[#EDA415] w-2/6 active:bg-black text-white text-sm rounded-full"> Buy it now</button>
            <div className="bg-gray-300 flex justify-center item-center p-4 rounded-full text-2xl"> <i className="fa-regular fa-heart cursor-pointer hover:text-red-600 "></i></div>
           
          </div>
 <hr className=" w-11/12" />
 <div> <span className="font-bold text-[#003F62]">shu: </span>01133-9-9<span></span></div>
 <div> <span className="font-bold text-[#003F62]">Category: </span>20% off,49% off Alex remote<span></span></div>
 <div> <span className="font-bold text-[#003F62] flex gap-2">Share:  <ul className="flex gap-7 items-end  " >
          <i className="fa-brands fa-google"></i>
            <i className="fa-brands fa-square-facebook"></i>
            <i className="fa-brands fa-whatsapp"></i>
          </ul></span></div>
      </div>
    
    </div>
    {/* Description Review section */}
    <DescriptionReview/>
    {/* Related Products */}
    <RelatedProducts category={productData.category} subCategory={productData.subCategory} brand={productData.brand}/>
    </div>
  ): <div className="opacity-0"></div>
}

export default Product
