import React from 'react'

function Banner() {
  return (
    <div className="banner w-full px-4 md:px-8 lg:px-12 xl:px-[70px] py-8 md:py-12 lg:py-16 bg-[#141414]">
    <div className="main-banner relative flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8 lg:gap-12 px-6 md:px-10 lg:px-14 py-8 md:py-10 lg:py-12 w-full max-w-7xl mx-auto bg-[url('../../../public/images/backgroundImages.png')] bg-cover bg-center rounded-xl md:rounded-2xl overflow-hidden">
        {/* Dark Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40 -z-10"></div>
        
        <div className="text-part flex-1 text-center md:text-left z-10">
            <h1 className='text-white text-xl md:text-2xl lg:text-[28px] xl:text-[32px] font-bold mb-3 md:mb-4'>
                Start your free trial today!
            </h1>
            <p className='text-sm md:text-base lg:text-lg text-[rgba(153,153,153,1)] max-w-2xl mx-auto md:mx-0 leading-relaxed'>
                This is a clear and concise call to action that encourages users to sign up for a free trial of StreamVibe.
            </p>
        </div>

        <div className="button-zone flex-shrink-0 w-full md:w-auto z-10">
            <button 
                className='w-full md:w-auto px-6 md:px-8 lg:px-10 py-3 md:py-4 lg:py-5 bg-[#e50000] hover:bg-[#c50000] text-white text-sm md:text-base lg:text-lg font-semibold rounded-lg md:rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl whitespace-nowrap' 
                type="button"
            >
                Start a Free Trial
            </button>
        </div>
    </div>
</div>
  )
}

export default Banner