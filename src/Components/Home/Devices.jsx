import React from 'react'
import { FaArchive, FaGamepad, FaLaptop, FaLinux, FaMobile, FaTablet } from 'react-icons/fa'
import { FaTv } from 'react-icons/fa6'

function Devices() {
  return (
    <div className="devices w-full min-h-screen lg:h-auto bg-[#141414] px-4 md:px-8 lg:px-12 xl:px-[70px] py-12 md:py-16 lg:py-32">
    <div className="devices-header w-full flex flex-col gap-y-3 md:gap-y-4 lg:gap-y-5 mb-8 md:mb-12 lg:mb-16">
        <h1 className='text-xl md:text-2xl lg:text-[28px] text-white font-semibold'>
            We Provide you streaming experience across various devices
        </h1>
        <p className='text-sm md:text-base text-[rgba(153,153,153,1)] max-w-4xl'>
            With StreamVibe, you can enjoy your favorite movies and TV shows anytime, anywhere. Our platform is designed to be compatible with a wide range of devices, ensuring that you never miss a moment of entertainment.
        </p>
    </div>

    <div className="devices-main w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-9">
        {/* Card 1 - Smartphones */}
        <div className="card w-full h-auto min-h-[200px] md:min-h-[220px] lg:h-[230px] flex flex-col bg-[rgba(15,15,15,1)] hover:bg-[rgba(25,25,25,1)] rounded-[10px] gap-y-4 md:gap-y-5 lg:gap-y-[24px] p-5 md:p-6 lg:p-7 transition-colors">
            <div className="part-1 flex text-white items-center gap-x-3 md:gap-x-4">
                <div className="ico-shell text-[#e50000] text-2xl md:text-3xl lg:text-4xl">
                    <FaMobile/>
                </div>
                <h1 className='text-lg md:text-xl lg:text-[20px] font-medium'>
                    Smartphones
                </h1>
            </div>
            <div className="part-2">
                <p className='text-sm md:text-base text-[rgba(153,153,153,1)] leading-relaxed'>
                    StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store
                </p>
            </div>
        </div>

        {/* Card 2 - Tablet */}
        <div className="card w-full h-auto min-h-[200px] md:min-h-[220px] lg:h-[230px] flex flex-col bg-[rgba(15,15,15,1)] hover:bg-[rgba(25,25,25,1)] rounded-[10px] gap-y-4 md:gap-y-5 lg:gap-y-[24px] p-5 md:p-6 lg:p-7 transition-colors">
            <div className="part-1 flex text-white items-center gap-x-3 md:gap-x-4">
                <div className="ico-shell text-[#e50000] text-2xl md:text-3xl lg:text-4xl">
                    <FaTablet/>
                </div>
                <h1 className='text-lg md:text-xl lg:text-[20px] font-medium'>
                    Tablet
                </h1>
            </div>
            <div className="part-2">
                <p className='text-sm md:text-base text-[rgba(153,153,153,1)] leading-relaxed'>
                    StreamVibe is optimized for both Android and iOS tablets. Enjoy a larger screen experience with our responsive design
                </p>
            </div>
        </div>

        {/* Card 3 - Smart TV */}
        <div className="card w-full h-auto min-h-[200px] md:min-h-[220px] lg:h-[230px] flex flex-col bg-[rgba(15,15,15,1)] hover:bg-[rgba(25,25,25,1)] rounded-[10px] gap-y-4 md:gap-y-5 lg:gap-y-[24px] p-5 md:p-6 lg:p-7 transition-colors">
            <div className="part-1 flex text-white items-center gap-x-3 md:gap-x-4">
                <div className="ico-shell text-[#e50000] text-2xl md:text-3xl lg:text-4xl">
                    <FaTv/>
                </div>
                <h1 className='text-lg md:text-xl lg:text-[20px] font-medium'>
                    Smart TV
                </h1>
            </div>
            <div className="part-2">
                <p className='text-sm md:text-base text-[rgba(153,153,153,1)] leading-relaxed'>
                    StreamVibe is available on major Smart TV platforms. Enjoy your favorite content on the big screen
                </p>
            </div>
        </div>

        {/* Card 4 - Laptops */}
        <div className="card w-full h-auto min-h-[200px] md:min-h-[220px] lg:h-[230px] flex flex-col bg-[rgba(15,15,15,1)] hover:bg-[rgba(25,25,25,1)] rounded-[10px] gap-y-4 md:gap-y-5 lg:gap-y-[24px] p-5 md:p-6 lg:p-7 transition-colors">
            <div className="part-1 flex text-white items-center gap-x-3 md:gap-x-4">
                <div className="ico-shell text-[#e50000] text-2xl md:text-3xl lg:text-4xl">
                    <FaLaptop/>
                </div>
                <h1 className='text-lg md:text-xl lg:text-[20px] font-medium'>
                    Laptops
                </h1>
            </div>
            <div className="part-2">
                <p className='text-sm md:text-base text-[rgba(153,153,153,1)] leading-relaxed'>
                    Access StreamVibe directly from your laptop browser. Compatible with Windows, macOS, and Chrome OS
                </p>
            </div>
        </div>

        {/* Card 5 - Linux */}
        <div className="card w-full h-auto min-h-[200px] md:min-h-[220px] lg:h-[230px] flex flex-col bg-[rgba(15,15,15,1)] hover:bg-[rgba(25,25,25,1)] rounded-[10px] gap-y-4 md:gap-y-5 lg:gap-y-[24px] p-5 md:p-6 lg:p-7 transition-colors">
            <div className="part-1 flex text-white items-center gap-x-3 md:gap-x-4">
                <div className="ico-shell text-[#e50000] text-2xl md:text-3xl lg:text-4xl">
                    <FaLinux/>
                </div>
                <h1 className='text-lg md:text-xl lg:text-[20px] font-medium'>
                    Linux Distributes
                </h1>
            </div>
            <div className="part-2">
                <p className='text-sm md:text-base text-[rgba(153,153,153,1)] leading-relaxed'>
                    StreamVibe is optimized for Linux systems. Download our app from the github repositories
                </p>
            </div>
        </div>

        {/* Card 6 - Gaming Consoles */}
        <div className="card w-full h-auto min-h-[200px] md:min-h-[220px] lg:h-[230px] flex flex-col bg-[rgba(15,15,15,1)] hover:bg-[rgba(25,25,25,1)] rounded-[10px] gap-y-4 md:gap-y-5 lg:gap-y-[24px] p-5 md:p-6 lg:p-7 transition-colors">
            <div className="part-1 flex text-white items-center gap-x-3 md:gap-x-4">
                <div className="ico-shell text-[#e50000] text-2xl md:text-3xl lg:text-4xl">
                    <FaGamepad/>
                </div>
                <h1 className='text-lg md:text-xl lg:text-[20px] font-medium'>
                    Gaming Consoles
                </h1>
            </div>
            <div className="part-2">
                <p className='text-sm md:text-base text-[rgba(153,153,153,1)] leading-relaxed'>
                    Stream on PlayStation and Xbox consoles. Download the app from your console's store
                </p>
            </div>
        </div>
    </div>
</div>
  )
}

export default Devices