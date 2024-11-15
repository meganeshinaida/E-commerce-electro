// import React from 'react'

import { advert } from "../assets/assets"

const Advertisement = () => {
  return (
    <div className="flex justify-center item-center my-8">
        <div className="flex justify-center item-center gap-40  bg-black w-[95%] rounded-2xl p-4">
            <img src={advert} alt="" className="w-[20%] relative z-index-1"/>
            <div className="">

                <button className="bg-[#EDA415] text-white w-30 p-2 rounded-full m-1">New laptop</button>
                <p className="text-4xl text-blue-600 font-bold p-1">sale up to 50% off</p>
                <p className="text-white p-1">12 inch hd display</p>
                <button className="bg-[#EDA415] text-white w-30 p-2 rounded-full m-1">Shop now </button>
            </div>
        </div>
      
    </div>
  )
}

export default Advertisement
