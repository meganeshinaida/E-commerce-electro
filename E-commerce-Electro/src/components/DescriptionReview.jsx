// import React from 'react'
import { useState } from "react"
function DescriptionReview() {
    const [activeTab,setActiveTab]=useState('description')
    const [showReviewForm,setShowReviewForm]=useState(false)
  return (
    <div className="w-70 p-4 m-4" >
      <div  className="flex justify-center items-center gap-8" >
        <button onClick={()=>setActiveTab('description')} className=" border w-1/4 my-4 rounded-2xl py-3 font-bold text-[#003F62] hover:bg-[#EDA415] "> Description</button>

        <button onClick={()=>setActiveTab('review')} className=" border w-1/4 my-4 rounded-2xl py-3 font-bold bg-[#003F62] text-white hover:bg-[#EDA415]  ">Reviews</button>
      </div>
      {
        activeTab === 'description'&&(
            <div className="flex w-50% flex-col border px-4 py-2 mx-4">
                <h2 className=" font-bold text-[#003F62] text-center text-2xl">Description</h2>
                <p className="">An E-commerce website is an online platform that allows businesses to sell products or services directly to consumers over the internet.
It serves as a digital storefront where users can browse a catalog of items, add them to a virtual shopping cart, and complete purchases through secure payment gateways.
E-commerce websites typically include features like product descriptions, customer reviews, search functionality, and order tracking to enhance the shopping experience.
These platforms can cater to a wide range of industries, from fashion and electronics to groceries and digital goods, enabling businesses to reach a global audience with ease.</p>
            </div>
        )
      }
        
        {
            activeTab === 'review' &&(
                <div className="border px-2">
                    <h2 className="font-bold text-[#003F62] text-center text-2xl">Customer review</h2>
                    <p className="mx-2 ">no review yet</p>
                      <div className="flex flex-col">
                       <button onClick={()=>setShowReviewForm(!showReviewForm)} className="bg-[#003F62] text-white underline w-40 p-2 mx-4">
                        {
                            showReviewForm ? 'Hide Review Form':'Leave a Review'
                        }
                       </button>{
                        showReviewForm &&(
                            <textarea placeholder="Write your review here ... " rows={5} className="border w-1/4 m-4" ></textarea>
                        )
                       }
                </div>

                </div>
            )
        }
    </div>
  )
}

export default DescriptionReview
