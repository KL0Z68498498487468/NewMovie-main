import Banner from '@/Components/Main/Banner'
import Footer from '@/Components/Main/Footer'
import Plan from '@/Components/Main/Plan'
import React, { useEffect } from 'react'

const Subscription = () => {

  useEffect(()=>{
    document.documentElement.scrollTop = 0;
  },[])


  return (
    <div className="Subscription pt-10 bg-black">
      <Plan/>
      <Banner/>
      <Footer/>
    </div>
  )
}

export default Subscription