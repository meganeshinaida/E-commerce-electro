// import React from 'react'

const OurPolicy = () => {
  return (
    <div className="flex justify-center items-center mt-8">
      <div className="flex flex-wrap gap-14 sm:justify-center bg-[#E2F4FF] w-[95%] rounded-2xl p-12 ">
       <div className=" flex gap-4">
        <i className="fa fa-box-open text-5xl text-[#EDA415]"></i>
        <span className="text-[#003F62]">
        <p className="font-bold">Free delivery</p>
        <p className="text-sm">on orders above 100,000FCFA</p>
          </span>
       </div>
       <div className=" flex gap-4">
        <i className="fa fa-crown text-5xl text-[#EDA415]"></i>
        <span className="text-[#003F62]">
        <p className="font-bold">Best quantity</p>
        <p className="text-sm">best quality in low price</p>
          </span>
       </div> 
       <div className=" flex gap-4">
        <i className="fa fa-box-open text-5xl text-[#EDA415]"></i>
        <span className="text-[#003F62]">
        <p className="font-bold">1 year Guaranty</p>
        <p className="text-sm">available guaranty</p>
          </span>
       </div>
      </div>
    </div>
  )
}

export default OurPolicy
