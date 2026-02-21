import { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight, FaStar, FaPlay } from "react-icons/fa";
import { Virtual, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Api_Service from "@/service/Api.Service";

function Sliderui({ url, title, description }) {
  const [cinemas, setCinemas] = useState();
  const [swiperInst, setSwiperInst] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const getMovies = async () => {
    const response = await Api_Service.getData(url);
    setCinemas(response.results);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div className="slider w-full bg-[#141414] px-4 md:px-8 lg:px-12 xl:px-[70px] py-8 md:py-12 lg:py-16 relative overflow-hidden">
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#e50000]/5 to-transparent opacity-50 animate-pulse-slow pointer-events-none"></div>

      <div className="relative z-10">
        {/* Header */}
        <div className="w-full flex flex-col md:flex-row items-start md:items-center justify-between gap-4 md:gap-6 mb-6 md:mb-10 lg:mb-12">
          <div className="text-part w-full md:w-auto max-w-[1200px] flex flex-col justify-center gap-2 md:gap-3 animate-fade-in">
            {/* Title with underline effect */}
            <div className="relative inline-block">
              <h1 className="text-white text-xl md:text-2xl lg:text-[32px] font-bold relative z-10">
                {title}
              </h1>
              <div className="absolute bottom-0 left-0 w-20 h-1 bg-gradient-to-r from-[#e50000] to-transparent rounded-full animate-expand"></div>
            </div>
            <p className="text-[rgba(153,153,153,1)] text-sm md:text-base animate-fade-in-delay">
              {description}
            </p>
          </div>

          {/* Desktop Navigation Buttons with Glow */}
          <div className="button-zone hidden md:flex rounded-xl px-4 gap-3 h-16 items-center bg-gradient-to-r from-[#0a0a0a] to-[#1a1a1a] border border-[#262626] flex-shrink-0 animate-slide-up backdrop-blur-sm">
            <button
              onClick={() => swiperInst?.slidePrev()}
              className="group relative shevron-shell-prev text-white w-12 h-12 bg-[rgba(31,31,31,1)] hover:bg-[#e50000] rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-[#e50000]/50 overflow-hidden"
              aria-label="Previous"
            >
              {/* Shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              <FaArrowLeft className="relative text-xl lg:text-2xl" />
            </button>
            
            <button
              onClick={() => swiperInst?.slideNext()}
              className="group relative shevron-shell-next text-white w-12 h-12 bg-[rgba(31,31,31,1)] hover:bg-[#e50000] rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-[#e50000]/50 overflow-hidden"
              aria-label="Next"
            >
              {/* Shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              <FaArrowRight className="relative text-xl lg:text-2xl" />
            </button>
          </div>
        </div>

        {/* Slider */}
        <div className="slider-main w-full h-auto">
          <Swiper
            modules={[Virtual, Navigation, Pagination]}
            onSwiper={setSwiperInst}
            slidesPerView={2}
            spaceBetween={12}
            pagination={{
              type: "fraction",
              formatFractionCurrent: (number) => String(number).padStart(2, '0'),
              formatFractionTotal: (number) => String(number).padStart(2, '0'),
            }}
            breakpoints={{
              480: { slidesPerView: 2, spaceBetween: 16 },
              640: { slidesPerView: 3, spaceBetween: 20 },
              768: { slidesPerView: 4, spaceBetween: 24 },
              1024: { slidesPerView: 5, spaceBetween: 28 },
              1280: { slidesPerView: 6, spaceBetween: 30 },
            }}
            navigation={{
              prevEl: '.shevron-shell-prev',
              nextEl: '.shevron-shell-next',
            }}
            virtual
            className="!pb-12"
          >
            {cinemas &&
              cinemas.map((items, index) => (
                <SwiperSlide 
                  key={items.id} 
                  className="!h-auto animate-fade-in-up"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <Link to={`/movie_inside/${items.id}`}>
                    <div
                      className="card group relative w-full max-w-[260px] mx-auto overflow-hidden rounded-xl transition-all duration-500 hover:scale-105 cursor-pointer"
                      onMouseEnter={() => setHoveredIndex(index)}
                      onMouseLeave={() => setHoveredIndex(null)}
                    >
                      {/* Image Container */}
                      <div className="relative w-full aspect-[2/3] overflow-hidden bg-gradient-to-br from-[#2a2a2a] to-[#1a1a1a]">
                        {/* Image */}
                        <img
                          className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                          src={`https://image.tmdb.org/t/p/w500/${items?.poster_path}`}
                          alt={items.title}
                          loading="lazy"
                        />

                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                        {/* Rating Badge */}
                        <div className="absolute top-3 right-3 px-2.5 py-1.5 bg-black/80 backdrop-blur-md rounded-lg flex items-center gap-1.5 transform translate-y-[-50px] group-hover:translate-y-0 transition-transform duration-500 shadow-lg">
                          <FaStar className="text-[#ffc107] text-xs animate-pulse" />
                          <span className="text-white text-xs font-bold">
                            {items.vote_average?.toFixed(1) || "N/A"}
                          </span>
                        </div>

                        {/* Play Button Overlay */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                          <div className="relative">
                            {/* Pulsing ring */}
                            <div className="absolute inset-0 bg-[#e50000] rounded-full animate-ping opacity-30"></div>
                            
                            {/* Play button */}
                            <div className="relative w-16 h-16 bg-[#e50000] rounded-full flex items-center justify-center shadow-2xl shadow-[#e50000]/50 transform scale-0 group-hover:scale-100 transition-transform duration-500 hover:bg-[#c50000]">
                              <FaPlay className="text-white text-xl ml-1" />
                            </div>
                          </div>
                        </div>

                        {/* Shine effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

                        {/* Border glow */}
                        <div className="absolute inset-0 border-2 border-[#e50000] rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-lg shadow-[#e50000]/50"></div>
                      </div>

                      {/* Title Section */}
                      <div className="relative bg-gradient-to-b from-[rgba(38,38,38,1)] to-[rgba(28,28,28,1)] px-3 py-4 border-t-2 border-transparent group-hover:border-[#e50000] transition-all duration-500">
                        <h1 className="text-white text-sm md:text-base font-semibold truncate group-hover:text-[#e50000] transition-colors duration-300">
                          {items.title}
                        </h1>
                        
                        {/* Year */}
                        <p className="text-[rgba(153,153,153,1)] text-xs mt-1">
                          {items.release_date?.split('-')[0] || "Unknown"}
                        </p>

                        {/* Bottom accent line */}
                        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#e50000] to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                      </div>
                    </div>
                  </Link>
                </SwiperSlide>
              ))}
          </Swiper>

          {/* Custom Pagination Style */}
          <style jsx>{`
            .swiper-pagination {
              color: white;
              font-weight: bold;
              font-size: 14px;
            }
            .swiper-pagination-current {
              color: #e50000;
              font-size: 18px;
            }
          `}</style>
        </div>

        {/* Progress Bar */}
        <div className="progress-bar-container mt-8 hidden md:block animate-fade-in" style={{ animationDelay: '600ms' }}>
          <div className="relative w-full h-1 bg-[#1a1a1a] rounded-full overflow-hidden">
            <div 
              className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#e50000] via-[#ff6b6b] to-[#e50000] rounded-full transition-all duration-300 animate-pulse-slow"
              style={{ 
                width: `${cinemas ? ((swiperInst?.activeIndex || 0) / cinemas.length) * 100 : 0}%` 
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sliderui;