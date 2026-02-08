import React, { useEffect, useMemo, useState } from 'react'
import Navbar from '../Main/Navbar'
import Marquee from 'react-fast-marquee'
import { shuffle } from 'lodash'


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
            <div className="hero w-full h-screen overflow-x-hidden">
        <div className="1-layer w-full h-screen bg-[#141414]">
            <div className="line-1 flex flex-col">
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
    </div>
    </div>
    
    
  )
}

export default Header