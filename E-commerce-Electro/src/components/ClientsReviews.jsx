// import React from 'react'
import { Pagination } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/pagination';
import { user1,user2 } from '../assets/assets';

const ClientsReviews = () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Pagination]}
      spaceBetween={25}
      slidesPerView={3}
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
     className='flex justify-center items-center content-center w-[75%] p-4  '>
      <SwiperSlide className='border rounded-2xl py-2  mb-6'>
        <div className="">
            <p className='flex justify-start items-center gap-8 px-4 '>
              <div >  <img src={user1} alt=""  className='w-14 p-1 rounded-full border-2 border-dashed border-[#EDA415]'/>  </div>
                <span>maryAnn</span>          </p>
                <p className='bg-[#E2F4FF] p-4 rounded-xl m-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, error.</p>
        </div>
        
      </SwiperSlide>
      <SwiperSlide className='border rounded-2xl py-2  mb-6'>
      <div className="">
            <p className='flex justify-start items-center gap-8 px-4 '>
              <div >  <img src={user1} alt=""  className='w-14 rounded-full border-2 p-1 border-dashed border-[#EDA415]'/>  </div>
                <span>maryAnn</span>          </p>
                <p className='bg-[#E2F4FF] p-4 rounded-xl m-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, error.</p>
        </div>
      </SwiperSlide>
      <SwiperSlide className='border rounded-2xl py-2  mb-6'> <div className="">
            <p className='flex justify-start items-center gap-8 px-4 '>
              <div >  <img src={user2} alt=""  className='w-14 rounded-full border-2 p-1 border-dashed border-[#EDA415]'/>  </div>
                <span>maryAnn</span>          </p>
                <p className='bg-[#E2F4FF] p-4 rounded-xl m-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, error.</p>
        </div></SwiperSlide>
      <SwiperSlide className='border rounded-2xl py-2  mb-6'> <div className="">
            <p className='flex justify-start items-center gap-8 px-4 '>
              <div >  <img src={user1} alt=""  className='w-14 rounded-full border-2 p-1 border-dashed border-[#EDA415]'/>  </div>
                <span>maryAnn</span>          </p>
                <p className='bg-[#E2F4FF] p-4 rounded-xl m-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, error.</p>
        </div></SwiperSlide>
      <SwiperSlide className='border rounded-2xl py-2  mb-6'> <div className="">
            <p className='flex justify-start items-center gap-8 px-4 '>
              <div >  <img src={user1} alt=""  className='w-14 rounded-full border-2 p-1 border-dashed border-[#EDA415]'/>  </div>
                <span>maryAnn</span>          </p>
                <p className='bg-[#E2F4FF] p-4 rounded-xl m-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, error.</p>
        </div></SwiperSlide>
     
    </Swiper>
  )
}

export default ClientsReviews

