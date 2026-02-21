import Banner from "@/Components/Main/Banner";
import Footer from "@/Components/Main/Footer";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {
  FaPlay,
  FaPlus,
  FaStar,
  FaChevronLeft,
  FaChevronRight,
  FaCalendar,
  FaLanguage,
  FaFilm,
  FaArrowUp,
} from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Api_Service from "@/service/Api.Service";

const Movie_inside = () => {

  const testApi = async () => {
    const responce = await Api_Service.getData(`/movie/${id}?append_to_response=credits`)
    setMoviedata(responce);

  }

  useEffect(() => {
    testApi()
    document.documentElement.scrollTop = 0;
  }, []);


  const [trailer, setTrailer] = useState(false);

  const [swiperInst, setSwiperInst] = useState(null);
  const [swipercast, setSwipercast] = useState(null);

  const { id } = useParams();

  const [moviedata, setMoviedata] = useState();
  console.log(moviedata?.credits.crew);



  return (
    <div className="mov">
      <div className="Movie_inside w-full min-h-screen bg-[#141414]">
        {/* Hero Banner */}
        <div className="movie-header-banner w-full min-h-[50vh] md:px-8 lg:px-12 xl:px-20 py-8 md:py-12 lg:py-16">
          <div className="img-container relative w-full max-w-[1400px] h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] rounded-xl lg:rounded-2xl overflow-hidden shadow-2xl">
            {/* Background Image with Overlay */}
            {trailer ? (
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/3pPpNmunqJY?si=Hci-aaZ8Q_tvjoYI?autoplay=1"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            ) : (

              <div
                style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original${moviedata?.backdrop_path})` }}
                className="absolute inset-0 bg-cover bg-center"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-transparent"></div>
              </div>

            )}



            {/* Content */}
            <div className="relative h-full flex flex-col items-center justify-end text-center text-white px-4 md:px-8 lg:px-16 pb-8 md:pb-12 lg:pb-16 gap-y-3 md:gap-y-4">
              <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-3xl font-bold max-w-4xl">
                {moviedata?.original_title}
              </h1>
              <p className="text-sm md:text-base lg:text-lg text-[#999999] max-w-3xl leading-relaxed">
                {moviedata?.overview}
              </p>
              <div className="button-zone flex flex-wrap gap-3 md:gap-4 mt-2 md:mt-4">
                <button
                  onClick={() => setTrailer(true)}
                  className="px-6 md:px-8 py-3 md:py-4 bg-[#e50000] hover:bg-[#c50000] rounded-lg flex items-center gap-x-2 md:gap-x-3 font-semibold text-sm md:text-base transition-colors shadow-lg"
                  type="button"
                >
                  <FaPlay className="text-sm md:text-base" /> Play Now
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Info Section */}
        <div className="info w-full px-4 md:px-8 lg:px-12 xl:px-20 py-8 md:py-12 lg:py-16">
          <div className="info-container max-w-[1400px] mx-auto flex flex-col lg:flex-row gap-8 lg:gap-12 flex-wrap">
            {/* Left Part - Main Content */}
            <div className="part-1 w-full lg:w-[850px] flex flex-col gap-6 md:gap-8">
              {/* Description */}
              <div className="description-section bg-[#1a1a1a] border border-[#262626] rounded-xl p-6 md:p-8 lg:p-10">
                <h2 className=" text-xl text-[#999999] md:text-2xl lg:text-[18px] font-semibold mb-4 md:mb-5">
                  Description
                </h2>
                <p className=" text-white text-sm md:text-base lg:text-[19px] leading-relaxed">
                  {moviedata?.overview}
                </p>
              </div>

              {/* Cast */}
              <div className="cast-section bg-[#1a1a1a] border border-[#262626] rounded-xl p-6 md:p-8 lg:p-10">
                <div className="cast-header flex items-center justify-between mb-5 md:mb-6">
                  <h2 className="text-white text-xl md:text-2xl lg:text-[28px] font-semibold">
                    Cast
                  </h2>
                  <div className="cast-navigation flex gap-3">
                    <button className="FaChevronLeft w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-[#0f0f0f] hover:bg-[#1f1f1f] border border-[#333] rounded-lg transition-colors">
                      <FaChevronLeft className=" text-white text-sm md:text-base" />
                    </button>
                    <button className="FaChevronRight w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-[#0f0f0f] hover:bg-[#1f1f1f] border border-[#333] rounded-lg transition-colors">
                      <FaChevronRight className=" text-white text-sm md:text-base" />
                    </button>
                  </div>
                </div>

                <div className="cast-slider overflow-hidden">
                  <div className="cast-track flex gap-4 md:gap-5">
                    <Swiper
                      className="w-full"
                      modules={[Navigation, Pagination]}
                      onSwiper={setSwipercast}
                      slidesPerView={6}
                      spaceBetween={0}
                      pagination={{
                        type: "fraction",
                      }}
                      breakpoints={{
                        480: {
                          slidesPerView: 4,
                          spaceBetween: 16,
                        },
                        640: {
                          slidesPerView: 5,
                          spaceBetween: 20,
                        },
                        768: {
                          slidesPerView: 5,
                          spaceBetween: 24,
                        },
                        1024: {
                          slidesPerView: 6,
                          spaceBetween: 28,
                        },
                        1280: {
                          slidesPerView: 6,
                          spaceBetween: 30,
                        },
                      }}
                      navigation={{
                        prevEl: ".FaChevronLeft",
                        nextEl: ".FaChevronRight",
                      }}
                    >
                      {moviedata?.credits?.cast?.map(actor => (
                        <SwiperSlide
                          key={actor.id}>
                          <Link to={`/actor/${actor.id}`}>
                            <div className="cast-card w-[100px] md:w-[120px] lg:w-[105px]">
                              <div className="actor-image w-full aspect-square bg-gradient-to-br from-[#333] to-[#1a1a1a] rounded-xl mb-2 overflow-hidden border border-[#333]">
                                {actor.profile_path ? (
                                  <img
                                    onError={(e) => {
                                      e.target.src =
                                        "https://m-carwash.com/wp-content/uploads/2021/02/07.jpg";
                                    }}
                                    referrerPolicy="no-referrer"
                                    src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
                                    alt=""
                                    className="w-full h-35"
                                  />
                                ) : (
                                  <h1>loading...</h1>
                                )}
                              </div>
                            </div>
                          </Link>
                        </SwiperSlide>
                      ))
                      }
                    </Swiper>
                  </div>
                </div>
              </div>

              {/* Reviews */}
              <div className="reviews-section bg-[#1a1a1a] border border-[#262626] rounded-xl p-6 md:p-8 lg:p-10">
                <div className="reviews-header flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 md:mb-8">
                  <h2 className="text-white text-xl md:text-2xl lg:text-[28px] font-semibold">
                    Reviews
                  </h2>
                  <button className="px-5 md:px-6 py-2.5 md:py-3 bg-[#0f0f0f] hover:bg-[#1f1f1f] border border-[#333] rounded-lg text-white text-sm md:text-base font-medium transition-colors flex items-center gap-2">
                    <FaPlus className="text-sm" /> Add Your Review
                  </button>
                </div>

                {/* Review Cards Grid */}
                <div className="reviews-grid w-full flex flex-col md:flex-row gap-4 md:gap-5 lg:gap-6 mb-6">
                  <Swiper
                    className="w-full"
                    modules={[Navigation, Pagination]}
                    onSwiper={setSwiperInst}
                    slidesPerView={1}
                    spaceBetween={2}
                    pagination={{
                      type: "fraction",
                    }}
                    breakpoints={{
                      480: {
                        slidesPerView: 1,
                        spaceBetween: 16,
                      },
                      640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                      },
                      768: {
                        slidesPerView: 2,
                        spaceBetween: 24,
                      },
                      1024: {
                        slidesPerView: 2,
                        spaceBetween: 28,
                      },
                      1280: {
                        slidesPerView: 2,
                        spaceBetween: 30,
                      },
                    }}
                    navigation={{
                      prevEl: ".shevron-shell-prev",
                      nextEl: ".shevron-shell-next",
                    }}
                  >
                    <SwiperSlide>
                      <div className="review-card flex-1 bg-[#0f0f0f] border border-[#262626] rounded-xl p-5 md:p-6">
                        <div className="review-header flex items-start justify-between mb-4">
                          <div className="user-info">
                            <h4 className="text-white text-base md:text-lg font-semibold mb-1">
                              Emily Johnson
                            </h4>
                            <p className="text-[#666] text-xs md:text-sm">
                              From Canada
                            </p>
                          </div>
                          <div className="rating flex items-center gap-1">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <FaStar
                                key={star}
                                className="text-[#e50000] text-sm md:text-base"
                              />
                            ))}
                            <span className="text-white text-sm md:text-base ml-1">
                              5
                            </span>
                          </div>
                        </div>
                        <p className="text-[#999] text-sm md:text-[15px] leading-relaxed">
                          This movie was recommended to me by a very dear friend
                          who went for the movie by herself. I went to the
                          cinemas to watch but had a houseful board so
                          couldn&apos;t watch it.
                        </p>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="review-card flex-1 bg-[#0f0f0f] border border-[#262626] rounded-xl p-5 md:p-6">
                        <div className="review-header flex items-start justify-between mb-4">
                          <div className="user-info">
                            <h4 className="text-white text-base md:text-lg font-semibold mb-1">
                              Emily Johnson
                            </h4>
                            <p className="text-[#666] text-xs md:text-sm">
                              From Canada
                            </p>
                          </div>
                          <div className="rating flex items-center gap-1">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <FaStar
                                key={star}
                                className="text-[#e50000] text-sm md:text-base"
                              />
                            ))}
                            <span className="text-white text-sm md:text-base ml-1">
                              5
                            </span>
                          </div>
                        </div>
                        <p className="text-[#999] text-sm md:text-[15px] leading-relaxed">
                          This movie was recommended to me by a very dear friend
                          who went for the movie by herself. I went to the
                          cinemas to watch but had a houseful board so
                          couldn&apos;t watch it.
                        </p>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="review-card flex-1 bg-[#0f0f0f] border border-[#262626] rounded-xl p-5 md:p-6">
                        <div className="review-header flex items-start justify-between mb-4">
                          <div className="user-info">
                            <h4 className="text-white text-base md:text-lg font-semibold mb-1">
                              Emily Johnson
                            </h4>
                            <p className="text-[#666] text-xs md:text-sm">
                              From Canada
                            </p>
                          </div>
                          <div className="rating flex items-center gap-1">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <FaStar
                                key={star}
                                className="text-[#e50000] text-sm md:text-base"
                              />
                            ))}
                            <span className="text-white text-sm md:text-base ml-1">
                              5
                            </span>
                          </div>
                        </div>
                        <p className="text-[#999] text-sm md:text-[15px] leading-relaxed">
                          This movie was recommended to me by a very dear friend
                          who went for the movie by herself. I went to the
                          cinemas to watch but had a houseful board so
                          couldn&apos;t watch it.
                        </p>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="review-card flex-1 bg-[#0f0f0f] border border-[#262626] rounded-xl p-5 md:p-6">
                        <div className="review-header flex items-start justify-between mb-4">
                          <div className="user-info">
                            <h4 className="text-white text-base md:text-lg font-semibold mb-1">
                              Emily Johnson
                            </h4>
                            <p className="text-[#666] text-xs md:text-sm">
                              From Canada
                            </p>
                          </div>
                          <div className="rating flex items-center gap-1">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <FaStar
                                key={star}
                                className="text-[#e50000] text-sm md:text-base"
                              />
                            ))}
                            <span className="text-white text-sm md:text-base ml-1">
                              5
                            </span>
                          </div>
                        </div>
                        <p className="text-[#999] text-sm md:text-[15px] leading-relaxed">
                          This movie was recommended to me by a very dear friend
                          who went for the movie by herself. I went to the
                          cinemas to watch but had a houseful board so
                          couldn&apos;t watch it.
                        </p>
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </div>

                {/* Pagination */}
                <div className="pagination flex items-center justify-center gap-3">
                  <button
                    onClick={() => swiperInst?.slidePrev()}
                    aria-label="Previous"
                    className="shevron-shell-prev w-10 h-10 flex items-center justify-center bg-[#0f0f0f] hover:bg-[#1f1f1f] border border-[#333] rounded-lg transition-colors"
                  >
                    <FaChevronLeft className="text-white text-sm" />
                  </button>
                  <button
                    onClick={() => swiperInst?.slideNext()}
                    aria-label="Next"
                    className="shevron-shell-next w-10 h-10 flex items-center justify-center bg-[#0f0f0f] hover:bg-[#1f1f1f] border border-[#333] rounded-lg transition-colors"
                  >
                    <FaChevronRight className="text-white text-sm" />
                  </button>
                </div>
              </div>
            </div>

            {/* Right Part - Movie Details Sidebar */}
            <div className="part-2 w-full lg:w-[416px] flex flex-col gap-5 md:gap-6">
              {/* Released Year */}
              <div className="info-card bg-[#1a1a1a] border border-[#262626] rounded-xl p-5 md:p-6">
                <div className="flex items-center gap-3 mb-3">
                  <FaCalendar className="text-[#666] text-lg" />
                  <h3 className="text-[#999] text-sm md:text-base">
                    Released Year
                  </h3>
                </div>
                <p className="text-white text-lg md:text-xl font-semibold">
                  {moviedata?.release_date}
                </p>
              </div>

              {/* Available Languages */}
              <div className="info-card bg-[#1a1a1a] border border-[#262626] rounded-xl p-5 md:p-6">
                <div className="flex items-center gap-3 mb-4">
                  <FaLanguage className="text-[#666] text-lg" />
                  <h3 className="text-[#999] text-sm md:text-base">
                    Available Languages
                  </h3>
                </div>
                <div className="languages flex flex-wrap gap-2.5">
                  {moviedata?.origin_country.map((lang) => (
                    <span
                      key={lang}
                      className="px-4 py-2 bg-[#0f0f0f] border border-[#333] hover:border-[#e50000] rounded-lg text-white text-sm transition-colors cursor-pointer"
                    >
                      {lang}
                    </span>
                  ))}
                </div>
              </div>

              {/* Ratings */}
              <div className="info-card bg-[#1a1a1a] border border-[#262626] rounded-xl p-5 md:p-6">
                <div className="flex items-center gap-3 mb-4">
                  <FaStar className="text-[#666] text-lg" />
                  <h3 className="text-[#999] text-sm md:text-base">Ratings</h3>
                </div>
                <div className="ratings-list flex flex-col gap-4">
                  <div className="rating-item">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-white text-base font-medium">
                        IMDb
                      </span>
                      <div className="flex items-center gap-1.5">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <FaStar
                            key={star}
                            className="text-[#e50000] text-base"
                          />
                        ))}
                        <span className="text-white font-semibold text-lg ml-1">
                          5
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="rating-item">
                    <div className="flex items-center justify-between">
                      <span className="text-white text-base font-medium">
                        Streamvibe
                      </span>
                      <div className="flex items-center gap-1.5">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <FaStar
                            key={star}
                            className="text-[#e50000] text-base"
                          />
                        ))}
                        <span className="text-white font-semibold text-lg ml-1">
                          5
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Genres */}
              <div className="info-card bg-[#1a1a1a] border border-[#262626] rounded-xl p-5 md:p-6">
                <div className="flex items-center gap-3 mb-4">
                  <FaFilm className="text-[#666] text-lg" />
                  <h3 className="text-[#999] text-sm md:text-base">Gernes</h3>
                </div>
                <div className="genres flex flex-wrap gap-2.5">
                  {moviedata?.genres.map((genre) => (
                    <span
                      key={genre.id}
                      className="px-4 py-2 bg-[#0f0f0f] border border-[#333] hover:border-[#e50000] hover:bg-[#e50000] rounded-lg text-white text-sm transition-colors cursor-pointer"
                    >
                      {genre.name}
                    </span>
                  ))}
                </div>
              </div>

              {/* Director */}
              <div className="info-card bg-[#1a1a1a] border border-[#262626] rounded-xl p-5 md:p-6">
                <h3 className="text-[#999] text-sm md:text-base mb-4">
                  Director
                </h3>
                <div className="director-info flex items-center gap-4">
                  <div className="director-avatar w-14 h-14 rounded-xl bg-gradient-to-br from-[#333] to-[#1a1a1a] border border-[#333] overflow-hidden flex-shrink-0">
                    {moviedata?.credits.crew.filter((photo) => photo.job === "Director").map((directorPhoto) => (
                      <img key={directorPhoto.id} src={`https://image.tmdb.org/t/p/original${directorPhoto.profile_path}`} alt="" />
                    ))
                    }
                  </div>
                  <div>
                    {moviedata?.credits.crew.filter((person) => person.job === "Director").map((director) => (
                      <h3 className="text-white text-base md:text-lg font-semibold" key={director.id}>{director.name}</h3>
                    ))
                    }
                  </div>
                </div>
              </div>
              {/* Music Composer */}
              <div className="info-card bg-[#1a1a1a] border border-[#262626] rounded-xl p-5 md:p-6">
                <h3 className="text-[#999] text-sm md:text-base mb-4">
                  Original Music Composer
                </h3>
                <div className="composer-info flex items-center gap-4">
                  <div className="composer-avatar w-14 h-14 rounded-xl bg-gradient-to-br from-[#333] to-[#1a1a1a] border border-[#333] overflow-hidden flex-shrink-0">
                    {moviedata?.credits.crew.filter((photo) => photo.job === "Original Music Composer").map((directorPhoto) => (
                      <img key={directorPhoto.id} src={`https://image.tmdb.org/t/p/original${directorPhoto.profile_path}`} alt="" />
                    ))
                    }
                  </div>
                  <div>
                    <h4 className="text-white text-base md:text-lg font-semibold">
                      {moviedata?.credits.crew.filter((person) => person.job === "Original Music Composer").map((director) => (
                      <h3 className="text-white text-base md:text-lg font-semibold" key={director.id}>{director.name}</h3>
                    ))
                    }
                    </h4>
                    <p className="text-[#666] text-sm">John Williams</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll to Top Button */}
        <button className="fixed bottom-8 right-8 w-12 h-12 md:w-14 md:h-14 bg-[#e50000] hover:bg-[#c50000] rounded-full flex items-center justify-center shadow-lg transition-all z-50">
          <FaArrowUp className="text-white text-lg md:text-xl" />
        </button>
      </div>
      <Banner />
      <Footer />
    </div>
  );
};

export default Movie_inside;
