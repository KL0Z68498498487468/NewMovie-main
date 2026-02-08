import React, { useRef, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
// ИСПРАВЛЕНИЕ 1: Импортируйте Swiper из 'swiper/react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Virtual } from "swiper/modules";

function Slider() {
  const [swiperRef, setSwiperRef] = useState(null);
  const appendNumber = useRef(500);
  const prependNumber = useRef(1);
  // Create array with 500 slides
  const [slides, setSlides] = useState(
    Array.from({ length: 500 }).map((_, index) => `Slide ${index + 1}`),
  );

  const prepend = () => {
    setSlides([
      `Slide ${prependNumber.current - 2}`,
      `Slide ${prependNumber.current - 1}`,
      ...slides,
    ]);
    prependNumber.current = prependNumber.current - 2;
    swiperRef.slideTo(swiperRef.activeIndex + 2, 0);
  };

  const append = () => {
    setSlides([...slides, "Slide " + ++appendNumber.current]);
  };

  const slideTo = (index) => {
    swiperRef.slideTo(index - 1, 0);
  };

  return (
    <div className="w-full h-[420px] bg-[#141414] px-[70px]">
      <div className="slider-header w-full h-[120px] flex items-center ">
        <div className="text-part w-[1200px] h-[120px] flex items-start flex-col justify-center">
          <h1 className="text-white text-[28px]">
            Explore our wide variety of categories
          </h1>
          <p className="text-[rgba(153,153,153,1)]">
            Whether you're looking for a comedy to make you laugh, a drama to
            make you think, or a documentary to learn something new
          </p>
        </div>
        <div className="button-zone rounded-[10px] px-[15px] w-[155px] h-[68px] flex items-center justify-between bg-[rgba(15,15,15,1)]">
          <div className="shevron-shell text-white w-[44px] h-[44px] bg-[rgba(31,31,31,1)] rounded-[6px] flex items-center justify-center">
            <FaArrowLeft className="text-2xl" />
          </div>
          <div className="shevron-shell shevron-shell text-white w-[44px] h-[44px] bg-[rgba(31,31,31,1)] rounded-[6px] flex items-center justify-center">
            <FaArrowRight className="text-2xl" />
          </div>
        </div>
      </div>
      <div className="slider-main w-full h-[300px]">
        <div className="card w-[239px] h-[282px] bg-[rgba(38,38,38,1)] rounded-[10px]">
          <div className="c-img-part">
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Slider;
