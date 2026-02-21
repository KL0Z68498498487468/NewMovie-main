import { useEffect, useRef, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { Virtual, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import axios from "axios";
import Api_Service from "@/service/Api.Service";


function Sliderui() {
  const [cinemas, setCinemas] = useState();

const [swiperInst, setSwiperInst] = useState(null);

const getMovies = async () => {
  const responce = await Api_Service.getData('trending/movie/day')
  setCinemas(responce.results)
  console.log(responce);
  
}

  
  useEffect(() => {
    getMovies()
  },[])

  return (
    <div className="slider w-full min-h-[320px] md:min-h-[400px] lg:h-[530px] bg-[#141414] px-4 md:px-8 lg:px-12 xl:px-[70px] py-6 md:py-8">
    <div className="w-full min-h-[80px] md:h-[100px] lg:h-[120px] flex flex-col md:flex-row items-start md:items-center justify-between gap-4 md:gap-6 mb-6">
      <div className="text-part w-full md:w-auto max-w-[1200px] flex flex-col justify-center gap-2">
        <h1 className="text-white text-xl md:text-2xl lg:text-[28px] font-semibold">
          Explore our wide variety of categories
        </h1>
        <p className="text-[rgba(153,153,153,1)] text-sm md:text-base">
          Whether you're looking for a comedy to make you laugh, a drama to make
          you think, or a documentary to learn something new
        </p>
      </div>
      
      {/* Desktop Navigation Buttons */}
      <div className="button-zone hidden md:flex rounded-[10px] px-[15px] w-[155px] h-[68px] items-center justify-between bg-[rgba(15,15,15,1)] flex-shrink-0">
        <button
          onClick={() => swiperInst?.slidePrev()}
          className="shevron-shell-prev text-white w-[44px] h-[44px] bg-[rgba(31,31,31,1)] hover:bg-[#e50000] rounded-[6px] flex items-center justify-center transition-colors"
          aria-label="Previous"
        >
          <FaArrowLeft className="text-xl lg:text-2xl" />
        </button>
        <button
          onClick={() => swiperInst?.slideNext()}
          className="shevron-shell-next text-white w-[44px] h-[44px] bg-[rgba(31,31,31,1)] hover:bg-[#e50000] rounded-[6px] flex items-center justify-center transition-colors"
          aria-label="Next"
        >
          <FaArrowRight className="text-xl lg:text-2xl" />
        </button>
      </div>
    </div>

    <div className="slider-main w-full h-auto">
      <Swiper
        modules={[Virtual, Navigation, Pagination]}
        onSwiper={setSwiperInst}
        slidesPerView={2}
        spaceBetween={12}
        pagination={{
          type: "fraction",
        }}
        breakpoints={{
          480: {
            slidesPerView: 2,
            spaceBetween: 16,
          },
          640: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 24,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 28,
          },
          1280: {
            slidesPerView: 5,
            spaceBetween: 30,
          },
        }}
        navigation={{
          prevEl: '.shevron-shell-prev',
          nextEl: '.shevron-shell-next',
        }}
        virtual
        className="!pb-8"
      >
        {cinemas &&
          cinemas.map((items) => (
            
            <SwiperSlide className="!h-auto">
              <Link to={`/movie_inside/${items.id}`}>
              <div key={items.id} className="card w-full max-w-[260px] mx-auto bg-[rgba(38,38,38,1)] overflow-hidden rounded-[10px] hover:bg-[rgba(48,48,48,1)] transition-colors cursor-pointer">
                <div className="c-img-part w-full aspect-3/4 overflow-hidden">
                  <img
                    className="w-full h-full object-cover p-2"
                    src={`https://image.tmdb.org/t/p/w500/${items?.poster_path}`}
                    
                  />
                </div>
                <div className="cinema-name px-4 py-4">
                  <h1 className="text-white text-sm md:text-base truncate">
                    {items.title}
                  </h1>
                </div>
              </div>
              </Link>
              
            </SwiperSlide>
          ))}
      </Swiper>

    </div>
</div>
  )
}

export default Sliderui