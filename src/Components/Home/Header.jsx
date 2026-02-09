import React, { useEffect, useMemo, useState } from 'react'
import Navbar from '../Main/Navbar'
import Marquee from 'react-fast-marquee'
import { shuffle } from 'lodash'
import { FaPlay } from 'react-icons/fa6'


function Header() {

    const [cinemas, setCinemas] = useState()

    async function api() {
        let responce = await fetch(`https://698a2fe5c04d974bc6a1a138.mockapi.io/movieProjectDatas`)
        let data = await responce.json()
        setCinemas(data)
    }
    useEffect(()=>{
        api()
    }, [])
    const row1 = useMemo(() => shuffle(cinemas))
    const row2 = useMemo(() => shuffle(cinemas))
    const row3 = useMemo(() => shuffle(cinemas))

  return (
    <div>
        <Navbar/>
            <div className="hero w-full h-screen overflow-y-hidden relative">
    <div className="1-layer w-full h-screen bg-[#141414] absolute z-1">
        <div className="line-1 flex flex-col gap-y-2 md:gap-y-4">
            <Marquee>
                {
                    row1 && row1.slice(0, 10).map(items => (
                        <div className='w-full' key={items.id}>
                            <img className='w-32 h-48 md:w-40 md:h-56 lg:w-50 lg:h-67 px-1 md:px-2' src={items.poster} alt="" />
                        </div>
                    ))
                }
            </Marquee>
            <Marquee>
                {
                    row2 && row2.slice(0, 10).map(items => (
                        <div className='w-full' key={items.id}>
                            <img className='w-32 h-48 md:w-40 md:h-56 lg:w-[200px] lg:h-67 px-1 md:px-2' src={items.poster} alt="" />
                        </div>
                    ))
                }
            </Marquee>
            <Marquee>
                {
                    row3 && row3.slice(0, 10).map(items => (
                        <div className='w-full' key={items.id}>
                            <img className='w-32 h-48 md:w-40 md:h-56 lg:w-[200px] lg:h-67 px-1 md:px-2' src={items.poster} alt="" />
                        </div>
                    ))
                }
            </Marquee>
        </div>
    </div>
    <div className="layer-2 w-full px-4 md:px-8 lg:px-16 xl:px-38 text-center h-screen absolute z-2 bg-gradient-to-t from-[#141414]/100 from-10% via-black/70 to-[#141414] flex items-center justify-center flex-col gap-y-2 backdrop-blur-xs md:gap-y-3 lg:gap-y-3.75 pt-16 md:pt-20 lg:pt-25">
        <img src="/images/abstractdesign.svg" className='w-40 md:w-52 lg:w-60 xl:w-67.5' alt="" />
        <h1 className='text-white text-xl md:text-2xl lg:text-[28px] font-bold px-2'>The Best Streaming Experience</h1>
        <p className='text-[rgba(153,153,153,1)] text-xs md:text-sm lg:text-[14px] px-4 md:px-8 lg:px-12 max-w-4xl'>StreamVibe is the best streaming experience for watching your favorite movies and shows on demand, anytime, anywhere. With StreamVibe, you can enjoy a wide variety of content, including the latest blockbusters, classic movies, popular TV shows, and more. You can also create your own watchlists, so you can easily find the content you want to watch.</p>
        <div className='mt-2 md:mt-4'>
            <button className='flex px-4 py-3 md:px-5 md:py-4 bg-[#e50000] text-white items-center gap-x-2 md:gap-x-3 rounded-lg text-sm md:text-base hover:bg-[#c50000] transition-colors' type="button">
                <FaPlay className='flex text-xs md:text-sm'/> Start Watching Now
            </button>
        </div>
    </div>
</div>
    </div>
    
    
  )
}

export default Header