import Footer from '@/Components/Main/Footer'
import Sliderui from '@/Components/Main/Slider'
import Slideractor from '@/Components/Main/Slideractor'
import Api_Service from '@/service/Api.Service'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function Actor() {

    const actorInfo = useParams()

    const [actorData, setActorData] = useState()
    

    const actorDatas = async () => {
        const responce = await Api_Service.getData(`person/${actorInfo.id}`)
        setActorData(responce);
    }

    useEffect(() => {
        actorDatas()
        document.documentElement.scrollTop = 0;
    }, [])





    return (
        <div>
            <div className='pt-14 bg-[#141414]'>
                <div className="actor-page w-full min-h-screen bg-[#141414] px-4 md:px-8 lg:px-12 xl:px-20 py-12 md:py-16 lg:py-24">
                    <div className="actor-container max-w-[1400px] mx-auto">
                        {/* Actor Info Section */}
                        <div className="actor-info flex flex-col lg:flex-row gap-8 md:gap-12 lg:gap-16 xl:gap-20">
                            {/* Actor Image */}
                            <div className="actor-image-wrapper flex-shrink-0 w-full sm:w-[280px] md:w-[320px] lg:w-[350px] mx-auto lg:mx-0">
                                <div className="actor-image w-full aspect-[3/4] bg-gradient-to-br from-[#3a4a5a] to-[#2a3a4a] rounded-2xl overflow-hidden">
                                    <img className='w-full' src={`https://image.tmdb.org/t/p/w200${actorData?.profile_path}`} alt="" />
                                </div>
                            </div>

                            {/* Actor Details */}
                            <div className="actor-details flex-1 pt-6">
                                <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-4xl font-medium mb-6 md:mb-8 lg:mb-10">
                                    {actorData?.name}
                                </h1>

                                <h2 className="text-[#999999] text-lg md:text-xl lg:text-[18px] mb-4 md:mb-5 lg:mb-6">
                                    Biography
                                </h2>

                                <p className="text-white text-sm md:text-base lg:text-lg leading-relaxed">
                                    {actorData?.biography}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Slideractor />
            <Footer />
        </div>


    )
}

export default Actor