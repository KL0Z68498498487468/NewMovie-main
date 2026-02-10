import Devices from '@/Components/Home/Devices'
import Header from '@/Components/Home/Header'
import Banner from '@/Components/Main/Banner'
import Footer from '@/Components/Main/Footer'
import Plan from '@/Components/Main/Plan'
import Questions from '@/Components/Main/Questions'
import Sliderui from '@/Components/Main/Slider'
import React from 'react'

const Home = () => {
  return (
    <div>
      <Header/>
      <Sliderui/>
      <Devices/>
      <Questions/>
      <Plan/>
      <Banner/>
      <Footer/>
    </div>
  )
}

export default Home