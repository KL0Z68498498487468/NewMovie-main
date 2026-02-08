import { useEffect, useRef, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { Virtual, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


function Slider() {
  const [cinemas, setCinemas] = useState();

const [swiperInst, setSwiperInst] = useState(null);



async function api() {
  let responce = await fetch('http://localhost:3000/cinema');
  let data = await responce.json();
  setCinemas(data);
}

useEffect(() => {
  api();
}, []);

  return (
    <div className="w-full h-[460px] bg-[#141414] px-[70px]">
    <div className="w-full h-[120px] flex items-center ">
      <div className="text-part w-[1200px] h-[120px] flex items-start flex-col justify-center">
        <h1 className="text-white text-[28px]">
          Explore our wide variety of categories
        </h1>
        <p className="text-[rgba(153,153,153,1)]">
          Whether you're looking for a comedy to make you laugh, a drama to make
          you think, or a documentary to learn something new
        </p>
      </div>
      <div className="button-zone rounded-[10px] px-[15px] w-[155px] h-[68px] flex items-center justify-between bg-[rgba(15,15,15,1)]">
        <div className="shevron-shell-next text-white w-[44px] h-[44px] bg-[rgba(31,31,31,1)] rounded-[6px] flex items-center justify-center">
          <FaArrowLeft
            onClick={() => swiperInst?.slideNext()}
            className="text-2xl"
          />
        </div>
        <div
          onClick={() => swiperInst?.slidePrev()}
          className="shevron-shell-prev shevron-shell text-white w-[44px] h-[44px] bg-[rgba(31,31,31,1)] rounded-[6px] flex items-center justify-center"
        >
          <FaArrowRight className="text-2xl" />
        </div>
      </div>
    </div>
    <div className="slider-main w-full h-[340px] flex gap-x-7 overflow-hidden">
      <Swiper
        modules={[Virtual, Navigation, Pagination]}
        onSwiper={setSwiperInst}
        slidesPerView={6}
        centeredSlides={true}
        spaceBetween={30}
        pagination={{
          type: "fraction",
        }}
        navigation={true}
        onBeforeInit={(swiper) => {
          ((swiper.params.navigation.prevEl = "shevron-shell-prev"),
            (swiper.params.navigation.nextEl = "shevron-shell-next"));
        }}
        virtual
      >
        {cinemas &&
          cinemas.slice(0, 15).map((items) => (
            <SwiperSlide>
              <div className="card w-[220px] h-[330px]  bg-[rgba(38,38,38,1)] overflow-hidden rounded-[10px]">
              <div className="c-img-part w-[239px] ">
                <img
                  className="w-[200px] h-67 pt-2 pl-2"
                  src={items.poster}
                  alt=""
                />
              </div>
              <div className="cinema-name pt-[20px] pl-5">
                <h1 className="text-white">{items.title}</h1>
              </div>
            </div>
            </SwiperSlide>
            
          ))}
      </Swiper>
    </div>
  </div>
  )
}

export default Slider