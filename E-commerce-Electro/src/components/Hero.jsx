// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
// import  core modules
import { Pagination, Autoplay } from "swiper/modules";
import { canonCam1, headset1, smartwatch } from "../assets/assets";
const Hero = () => {
  return (
    <div>
      <section id="Home" className="">
        <Swiper
          // install Swiper modules
          modules={[Pagination, Autoplay]}
          spaceBetween={50}
          slidesPerView
          
          loop={Infinity}
          autoplay={{
            delay: 2500,
          }}
          pagination={{ clickable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
          className="flex justify-center items-center content-center"
        >
          <SwiperSlide className=" flex  justify-center items-center content-center flex-wrap w-full ">
            <div className="sm:flex justify-center overflow-hidden   w-auto   flex-wrap">
              <div className=" pr-36 pt-14 mr-8 ">
                <h2 className="text-4xl font-bold text-[#003F62] ml-4">
                  Canon <br />
                  camera
                </h2>
                <div className="flex gap-5">
                  <button className="py-5 p-8 m-5 mr-0 rounded-2xl border-solid bg-[#EDA415] text-white sm:py-3 sm:text-sm">
                    Shop now
                  </button>
                  <button className="py-5 px-8 m-5 rounded-2xl border-2 border-[#003F62]  text-[#003F62] sm:py-3 sm:text-sm">
                    Shop now
                  </button>
                </div>
              </div>
              <img
                src={canonCam1}
                alt=""
                className="relative top-1 object-cover h-96 "
              />
              <div className="relative bg-[#EDA415] w-36 h-36 rounded-full top-48 right-16 text-white text-lg content-center pl-12">
                {" "}
                only <br /> <span>Price</span>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className=" flex  justify-center items-center w-full ">
          <div className="sm:flex justify-center overflow-hidden   w-auto   flex-wrap">
              <div className=" pr-36 pt-14 mr-8 ">
                <h2 className="text-4xl font-bold text-[#003F62] ml-4">
                  Canon <br />
                  camera
                </h2>
                <div className="flex gap-5">
                  <button className="py-5 p-8 m-5 mr-0 rounded-2xl border-solid bg-[#EDA415] text-white sm:py-3 sm:text-sm">
                    Shop now
                  </button>
                  <button className="py-5 px-8 m-5 rounded-2xl border-2 border-[#003F62]  text-[#003F62] sm:py-3 sm:text-sm">
                    Shop now
                  </button>
                </div>
              </div>
              <img
                src={headset1}
                alt=""
                className="relative -top-1 object-cover h-96 ml-10 pr-38"
              />
              <div className="relative bg-[#EDA415] w-36 h-36 rounded-full top-48 right-16 text-white text-lg content-center pl-12">
                {" "}
                only <br /> <span>Price</span>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className=" flex  justify-center items-center w-full ">
          <div className="sm:flex justify-center overflow-hidden   w-auto   flex-wrap">
              <div className=" pr-36 pt-14 mr-8 ">
                <h2 className="text-4xl font-bold text-[#003F62] ml-4">
                  Canon <br />
                  camera
                </h2>
                <div className="flex gap-5">
                  <button className="py-5 p-8 m-5 mr-0 rounded-2xl border-solid bg-[#EDA415] text-white sm:py-3 sm:text-sm">
                    Shop now
                  </button>
                  <button className="py-5 px-8 m-5 rounded-2xl border-2 border-[#003F62]  text-[#003F62] sm:py-3 sm:text-sm">
                    Shop now
                  </button>
                </div>
              </div>
              <img
                src={smartwatch}
                alt=""
                className="relative -top-1 object-cover h-96 "
              />
              <div className="relative bg-[#EDA415] w-36 h-36 rounded-full top-48 right-16 text-white text-lg content-center pl-12">
                {" "}
                only <br /> <span>Price</span>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
    </div>
  );
};

export default Hero;
