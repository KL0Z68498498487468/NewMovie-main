import React from 'react'
import { FaArchive, FaLaptop, FaLinux, FaMobile, FaTablet } from 'react-icons/fa'
import { FaTv } from 'react-icons/fa6'

function Devices() {
  return (
    <div className="devices w-full h-[870px] flex flex-col px-[70px] bg-[#141414] pt-32">
        <div className="devices-header w-full h-[120px] flex flex-col gap-y-5">
            <h1 className='text-[28px] text-white'>
                We Provide you streaming experience across various  .
            </h1>
            <p className='text-[rgba(153,153,153,1)]'>
                With StreamVibe, you can enjoy your favorite movies and TV shows anytime, anywhere. Our platform is designed to be compatible with a wide range of devices, ensuring that you never miss a moment of entertainment.
            </p>
        </div>
        <div className="devies-main w-full h-[630px]">
            <div className="line-1 w-full h-[315px] flex gap-x-9 pt-17">
                <div className="card w-[413px] h-[230px] flex flex-col bg-[rgba(15,15,15,1)] rounded-[10px] gap-y-[24px] p-7">
                    <div className="part-1 flex text-white items-center gap-x-4">
                        <div className="ico-shell">
                            <FaMobile/>
                        </div>
                        <h1 className='text-[20px]'>
                            Smartphones
                        </h1>
                    </div>
                    <div className="part-2">
                        <p className='text-[rgba(153,153,153,1)]'>
                            StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store
                        </p>
                    </div>
                </div>
                <div className="card w-[413px] h-[230px] flex flex-col bg-[rgba(15,15,15,1)] rounded-[10px] gap-y-[24px] p-7">
                    <div className="part-1 text-white items-center gap-x-4">
                        <div className="ico-shell">
                            <FaTablet/>
                        </div>
                        <h1 className='text-[20px]'>
                            Tablet
                        </h1>
                    </div>
                    <div className="part-2">
                        <p className='text-[rgba(153,153,153,1)]'>
                            StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store
                        </p>
                    </div>
                </div>
                <div className="card w-[413px] h-[230px] flex flex-col bg-[rgba(15,15,15,1)] rounded-[10px] gap-y-[24px] p-7">
                    <div className="part-1 text-white items-center gap-x-4">
                        <div className="ico-shell">
                            <FaTv/>
                        </div>
                        <h1 className='text-[20px]'>
                            Smart TV
                        </h1>
                    </div>
                    <div className="part-2">
                        <p className='text-[rgba(153,153,153,1)]'>
                            StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store
                        </p>
                    </div>
                </div>
            </div>
            <div className="line-2 w-full h-[315px] flex gap-x-9 pt-11">
                <div className="card w-[413px] h-[230px] flex flex-col bg-[rgba(15,15,15,1)] rounded-[10px] gap-y-[24px] p-7">
                    <div className="part-1 text-white items-center gap-x-4">
                        <div className="ico-shell">
                            <FaLaptop/>
                        </div>
                        <h1 className='text-[20px]'>
                            Laptops
                        </h1>
                    </div>
                    <div className="part-2">
                        <p className='text-[rgba(153,153,153,1)]'>
                            StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store
                        </p>
                    </div>
                </div>
                <div className="card w-[413px] h-[230px] flex flex-col bg-[rgba(15,15,15,1)] rounded-[10px] gap-y-[24px] p-7">
                    <div className="part-1 text-white items-center gap-x-4">
                        <div className="ico-shell">
                            <FaLinux/>
                        </div>
                        <h1 className='text-[20px]'>
                            Linux distributes
                        </h1>
                    </div>
                    <div className="part-2">
                        <p className='text-[rgba(153,153,153,1)]'>
                            StreamVibe is optimized for both Linux systems. Download our app from the github repositories
                        </p>
                    </div>
                </div>
                <div className="card w-[413px] h-[230px] flex flex-col bg-[rgba(15,15,15,1)] rounded-[10px] gap-y-[24px] p-7">
                    <div className="part-1 text-white items-center gap-x-4">
                        <div className="ico-shell">
                            <FaArchive/>
                        </div>
                        <h1 className='text-[20px]'>
                            Lorem
                        </h1>
                    </div>
                    <div className="part-2">
                        <p className='text-[rgba(153,153,153,1)]'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum fugit id magni voluptatem, rerum dolore!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Devices