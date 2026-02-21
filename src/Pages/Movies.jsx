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
        <Sliderui />
        <Sliderui />
        <Sliderui />
        <Sliderui />
        <Banner/>
        <Footer/>
    </div>

  )
}

export default Movies