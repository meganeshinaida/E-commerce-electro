// import React from 'react'

import NewsLetterBox from "./NewsLetterBox"

const Footer = () => {
  
  return (
    // +++++++++++FOOTER++++++++++++
    <div className="h-[511px] top-[4330px] flex flex-col justify-center item-center bg-[#E2F4FF] ">
      {/* ==============news letter box=============== */}
    <NewsLetterBox/>
      {/* ===========Footer columns============= */}
      <div className="flex flex-col sm:grid grid-cols-4 gap-14 my-10 text-[#003F62] place-content-between  ">
         <div className="m-7 flex flex-col">
          <img src="" alt="" />
          <span className="mx-10">64 st james boulevard <br /> hoswick,ze2 7zj</span>
          <hr className="text-black font-bold my-5 mx-10 text-2xl" />
          <ul className="flex gap-7 items-end ml-9 " >
          <i className="fa-brands fa-google"></i>
            <i className="fa-brands fa-square-facebook"></i>
            <i className="fa-brands fa-whatsapp"></i>
          </ul>
         </div>
         <div className="">
          <h5 className="text-lg font-bold mb-3">Find product</h5>
       <ul className="list-disc marker:text-gray-300 text-base">
        <li>Bronze arnold</li>
        <li>Chronograph blue</li>
        <li>Smart phones</li>
        <li>Automatic watch</li>
        <li>Hair straightners</li>
       </ul>
         </div>
         <div className="">
          <h5 className="text-lg font-bold mb-3">Get help</h5>
          <ul className="list-disc marker:text-gray-300 text-base">
            <li>About us</li>
            <li>Contact us</li>
            <li>Return policy</li>
            <li>Privacy policy</li>
            <li>Payment policy</li>
          </ul>
         </div>
         <div className="">
          <h5 className="text-lg  font-bold mb-3">About us</h5>
          <ul className="list-disc marker:text-gray-300 text-base">
            <li>News</li>
            <li>Service</li>
            <li>Our policy</li>
            <li>Customer care</li>
            <li>Faq's</li>
          </ul>
         </div>
      </div>
    </div>
  )
}

export default Footer
