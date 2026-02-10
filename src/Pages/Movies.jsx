import Banner from '@/Components/Main/Banner'
import Footer from '@/Components/Main/Footer'
import Sliderui from '@/Components/Main/Slider'
import React from 'react'

const Movies = () => {
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