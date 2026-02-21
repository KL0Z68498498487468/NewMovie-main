import Devices from '@/Components/Home/Devices'
import Header from '@/Components/Home/Header'
import Banner from '@/Components/Main/Banner'
import Footer from '@/Components/Main/Footer'
import Plan from '@/Components/Main/Plan'
import Questions from '@/Components/Main/Questions'
import Sliderui from '@/Components/Main/Slider'
import Sliderhead from '@/Components/Main/Sliderheader'
import React from 'react'

const Home = () => {
  return (
    <div>
      <Header/>
      <Sliderhead title={"Explore our wide variety of categories"} description={"Whether you're looking for a comedy to make you laugh, a drama to make you think, or a documentary to learn something new"}/>
      <Devices/>
      <Questions/>
      <Plan/>
      <Banner/>
      <Footer/>
    </div>
  )
}

export default Home