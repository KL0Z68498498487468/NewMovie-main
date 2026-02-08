import React, { useEffect, useMemo, useState } from 'react'
import Navbar from '../Main/Navbar'
import Marquee from 'react-fast-marquee'
import { shuffle } from 'lodash'
import { FaPlay } from 'react-icons/fa6'


function Header() {

    const [cinemas, setCinemas] = useState()

    async function api() {
        let responce = await fetch(`http://localhost:3000/cinema`)
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
            <div className="line-1 flex flex-col gap-y-4">
                <Marquee>
                    {
            row1 && row1.slice(0, 10).map( items => (
                
                    <div className='w-full'>
                        <img className='w-[200px] h-67 px-2' src={items.poster} alt="" />
                    </div>
                
            ))
        }
                </Marquee>
                <Marquee>
                    {
            row2 && row2.slice(0, 10).map( items => (
                
                    <div className='w-full'>
                        <img className='w-[200px] h-67 px-2' src={items.poster} alt="" />
                    </div>
                
            ))
        }
                </Marquee>
                <Marquee>
                    {
            row3 && row3.slice(0, 10).map( items => (
                
                    <div className='w-full'>
                        <img className='w-[200px] h-67 px-2' src={items.poster} alt="" />
                    </div>
                
            ))
        }
                </Marquee>
            </div>
        </div>
        <div className="layer-2 w-full px-38 text-center h-screen absolute z-2 bg-gradient-to-t from-[#141414]/100 from-10% via-black/70 to-[#141414] flex items-center justify-center flex-col gap-y-[15px] pt-25">
        <img src="/public/images/Abstract Design.svg" className='w-[270px]' alt="" />
        <h1 className='text-white text-[48px] font-bold'>The Best Streaming Experience</h1>
        <p className='text-[rgba(153,153,153,1)]'>StreamVibe is the best streaming experience for watching your favorite movies and shows on demand, anytime, anywhere. With StreamVibe, you can enjoy a wide variety of content, including the latest blockbusters, classic movies, popular TV shows, and more. You can also create your own watchlists, so you can easily find the content you want to watch.</p>
        <div className=''>
            <button className='flex px-4 py-4 bg-[#e50000] text-white items-center gap-x-3 rounded-[8px]' type="button">
                <FaPlay className='flex'/> Start Watching Now
            </button>
        </div>
        </div>
    </div>
    </div>
    
    
  )
}

export default Header