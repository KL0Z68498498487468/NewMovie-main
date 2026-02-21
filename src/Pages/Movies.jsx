import Banner from '@/Components/Main/Banner'
import Footer from '@/Components/Main/Footer'
import Sliderui from '@/Components/Main/Slider'
import React, { useEffect } from 'react'

const Movies = () => {

  useEffect(()=>{
    document.documentElement.scrollTop = 0;
  },[])


  return (
    <div className='pt-25 bg-[#141414]'>
        <Sliderui url={'movie/popular'} title={"Most popular movies"} description={"Explore the most popular movies that are trending right now. These films are loved by audiences worldwide and are a must-watch for any movie fan"}/>
        <Sliderui url={'movie/upcoming'} title={"Soon in StreamVibe..."} description={"Get ready for the upcoming releases on StreamVibe. Stay ahead and discover new movies that will soon be available for streaming."}/>
        <Sliderui url={'movie/top_rated'} title={"In top-list"} description={"Browse through the top-rated movies, featuring critically acclaimed titles and fan favorites. These films have received high praise and are recommended for every viewer."}/>
        <Sliderui url={'movie/now_playing'} title={"Playlist"} description={"Check out the latest movies currently playing in theaters. Experience fresh stories and new adventures as they hit the big screen"}/>
        <Banner/>
        <Footer/>
    </div>

  )
}

export default Movies