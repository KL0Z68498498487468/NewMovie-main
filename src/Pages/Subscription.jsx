import Banner from '@/Components/Main/Banner'
import Footer from '@/Components/Main/Footer'
import Plan from '@/Components/Main/Plan'
import React from 'react'

const Subscription = () => {
  return (
    <div className="Subscription pt-10 bg-black">
      <Plan/>
      <Banner/>
      <Footer/>
    </div>
  )
}

export default Subscription