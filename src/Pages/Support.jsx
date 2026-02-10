import Banner from '@/Components/Main/Banner'
import Footer from '@/Components/Main/Footer'
import React from 'react'
import { FaChevronDown } from 'react-icons/fa'

const Support = () => {
  return (
    <div>
        <div className="support-page w-full pt-20 min-h-screen bg-[#141414] px-4 md:px-8 lg:px-12 xl:px-[70px] py-12 md:py-16 lg:py-24">
    <div className="support-container w-full max-w-[1400px] mx-auto flex flex-col lg:flex-row gap-8 lg:gap-12 xl:gap-16">
        
        {/* Left Section - Header & Images */}
        <div className="left-section flex-1 flex flex-col">
            {/* Header */}
            <div className="header-section mb-8 md:mb-10 lg:mb-12">
                <h1 className="text-white text-2xl md:text-3xl lg:text-4xl xl:text-[38px] font-bold mb-4 md:mb-5">
                    Welcome to our support page!
                </h1>
                <p className="text-[rgba(153,153,153,1)] text-sm md:text-base lg:text-lg max-w-[500px]">
                    We're here to help you with any problems you may be having with our product.
                </p>
            </div>

            {/* Images Grid Container */}
            <div className="images-container w-full max-w-[650px] bg-[rgba(15,15,15,1)] border border-[#282828] rounded-xl p-4 md:p-5 lg:p-6">
                <div className=" images-grid flex flex-wrap gap-3 md:gap-4">
                    <img src="/public/images/support-img.png" alt="" />
                </div>
            </div>
        </div>

        {/* Right Section - Contact Form */}
        <div className="right-section flex-1 bg-[rgba(15,15,15,1)] border border-[#1f1f1f] rounded-xl p-6 md:p-8 lg:p-10">
            <form className="contact-form flex flex-col gap-5 md:gap-6">
                
                {/* First Name & Last Name Row */}
                <div className="form-row flex flex-col md:flex-row gap-5 md:gap-6">
                    <div className="form-group flex-1 flex flex-col gap-3">
                        <label htmlFor="firstName" className="text-white text-sm md:text-base font-medium">
                            First Name
                        </label>
                        <input
                            type="text"
                            id="firstName"
                            placeholder="Enter First Name"
                            className="w-full px-4 md:px-5 py-3 md:py-4 bg-[#0f0f0f] border border-[#262626] rounded-lg text-white text-sm md:text-base placeholder:text-[rgba(153,153,153,0.5)] focus:outline-none focus:border-[#e50000] transition-colors"
                        />
                    </div>
                    <div className="form-group flex-1 flex flex-col gap-3">
                        <label htmlFor="lastName" className="text-white text-sm md:text-base font-medium">
                            Last Name
                        </label>
                        <input
                            type="text"
                            id="lastName"
                            placeholder="Enter Last Name"
                            className="w-full px-4 md:px-5 py-3 md:py-4 bg-[#0f0f0f] border border-[#262626] rounded-lg text-white text-sm md:text-base placeholder:text-[rgba(153,153,153,0.5)] focus:outline-none focus:border-[#e50000] transition-colors"
                        />
                    </div>
                </div>

                {/* Email & Phone Number Row */}
                <div className="form-row flex flex-col md:flex-row gap-5 md:gap-6">
                    <div className="form-group flex-1 flex flex-col gap-3">
                        <label htmlFor="email" className="text-white text-sm md:text-base font-medium">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Enter your Email"
                            className="w-full px-4 md:px-5 py-3 md:py-4 bg-[#0f0f0f] border border-[#262626] rounded-lg text-white text-sm md:text-base placeholder:text-[rgba(153,153,153,0.5)] focus:outline-none focus:border-[#e50000] transition-colors"
                        />
                    </div>
                    <div className="form-group flex-1 flex flex-col gap-3">
                        <label htmlFor="phone" className="text-white text-sm md:text-base font-medium">
                            Phone Number
                        </label>
                        <div className="phone-input-wrapper flex gap-2">
                            {/* Country Code Selector */}
                            <div className="country-code flex items-center gap-2 px-3 md:px-4 py-3 md:py-4 bg-[#0f0f0f] border border-[#262626] rounded-lg">
                                <div className="flag w-6 h-4 bg-gradient-to-b from-[#00843D] via-white to-[#CE1126] rounded-sm"></div>
                                <FaChevronDown className="text-[rgba(153,153,153,1)] text-xs" />
                            </div>
                            {/* Phone Input */}
                            <input
                                type="tel"
                                id="phone"
                                placeholder="+998"
                                className="flex-1 px-4 md:px-5 py-3 md:py-4 bg-[#0f0f0f] border border-[#262626] rounded-lg text-white text-sm md:text-base placeholder:text-[rgba(153,153,153,0.5)] focus:outline-none focus:border-[#e50000] transition-colors"
                            />
                        </div>
                    </div>
                </div>

                {/* Message */}
                <div className="form-group flex flex-col gap-3">
                    <label htmlFor="message" className="text-white text-sm md:text-base font-medium">
                        Message
                    </label>
                    <textarea
                        id="message"
                        rows="6"
                        placeholder="Enter your Message"
                        className="w-full px-4 md:px-5 py-3 md:py-4 bg-[#0f0f0f] border border-[#262626] rounded-lg text-white text-sm md:text-base placeholder:text-[rgba(153,153,153,0.5)] focus:outline-none focus:border-[#e50000] transition-colors resize-none"
                    ></textarea>
                </div>

                {/* Checkbox & Submit Button Row */}
                <div className="form-footer flex flex-col md:flex-row items-start md:items-center justify-between gap-4 md:gap-6 mt-2">
                    {/* Checkbox */}
                    <label className="checkbox-label flex items-start gap-3 cursor-pointer flex-1">
                        <input
                            type="checkbox"
                            className="mt-1 w-4 h-4 md:w-5 md:h-5 accent-[#e50000] bg-[#0f0f0f] border-[#262626] rounded cursor-pointer"
                        />
                        <span className="text-[rgba(153,153,153,1)] text-xs md:text-sm leading-relaxed">
                            I agree with <span className="text-white">Terms of Use</span> and <span className="text-white">Privacy Policy</span>
                        </span>
                    </label>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full md:w-auto px-6 md:px-8 lg:px-10 py-3 md:py-4 bg-[#e50000] hover:bg-[#c50000] text-white text-sm md:text-base font-semibold rounded-lg transition-all duration-300 whitespace-nowrap"
                    >
                        Send Message
                    </button>
                </div>
            </form>
        </div>
    </div>
</div>
<Banner/>
<Footer/>
    </div>
    
  )
}

export default Support