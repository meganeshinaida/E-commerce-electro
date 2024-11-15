// import React from 'react'

const NewsLetterBox = () => {
    const onSubmitHandler=(event)=>{
        event.preventDefault()
      }
  return (
    <div className="flex justify-center "> <div className="w-[95%]   sm: w1/2 flex flex-wrap items-center justify-center  gap-10 border  py-7  rounded-2xl bg-white ">
    <span className="text-3xl font-bold text-[#003F62]">Subscribe Newsletter</span>
    <form action="" className="bg-[#EDA415] py-2 px-7 rounded-xl " onSubmit={onSubmitHandler}>
      <input type="email" placeholder="Email address" className="bg-transparent outline-none"/>
      <button type="submit" className=""><i className="fa-regular fa-paper-plane text-white"></i></button>
    </form>
    <span className="flex gap-3 ">
    <i className="fa-solid fa-headphones-simple text-[#EDA415] text-5xl gap-"></i>
    <p>Call us 24/7 <br />(+237) 0123 456 789</p>
    </span> 
  </div></div> 
  )
}

export default NewsLetterBox
