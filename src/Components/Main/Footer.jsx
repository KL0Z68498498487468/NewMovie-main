import React from 'react'
import { FaFacebook, FaLinkedin } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

function Footer() {
  return (
    <footer className="footer w-full bg-[rgba(15,15,15,1)] border-t border-[#282828]">
    {/* Main Footer Content */}
    <div className="footer-content px-4 md:px-8 lg:px-12 xl:px-[70px] py-8 md:py-12 lg:py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8 lg:gap-10">
            {/* Column 1 - Home */}
            <div className="footer-column">
                <h3 className="text-white text-base md:text-lg font-semibold mb-4 md:mb-6">Home</h3>
                <ul className="space-y-2 md:space-y-3">
                    <li>
                        <a href="#" className="text-sm md:text-base text-[rgba(153,153,153,1)] hover:text-[#e50000] transition-colors">
                            Categories
                        </a>
                    </li>
                    <li>
                        <a href="#" className="text-sm md:text-base text-[rgba(153,153,153,1)] hover:text-[#e50000] transition-colors">
                            Devices
                        </a>
                    </li>
                    <li>
                        <a href="#" className="text-sm md:text-base text-[rgba(153,153,153,1)] hover:text-[#e50000] transition-colors">
                            Pricing
                        </a>
                    </li>
                    <li>
                        <a href="#" className="text-sm md:text-base text-[rgba(153,153,153,1)] hover:text-[#e50000] transition-colors">
                            FAQ
                        </a>
                    </li>
                </ul>
            </div>

            {/* Column 2 - Movies */}
            <div className="footer-column">
                <h3 className="text-white text-base md:text-lg font-semibold mb-4 md:mb-6">Movies</h3>
                <ul className="space-y-2 md:space-y-3">
                    <li>
                        <a href="#" className="text-sm md:text-base text-[rgba(153,153,153,1)] hover:text-[#e50000] transition-colors">
                            Genres
                        </a>
                    </li>
                    <li>
                        <a href="#" className="text-sm md:text-base text-[rgba(153,153,153,1)] hover:text-[#e50000] transition-colors">
                            Trending
                        </a>
                    </li>
                    <li>
                        <a href="#" className="text-sm md:text-base text-[rgba(153,153,153,1)] hover:text-[#e50000] transition-colors">
                            New Release
                        </a>
                    </li>
                    <li>
                        <a href="#" className="text-sm md:text-base text-[rgba(153,153,153,1)] hover:text-[#e50000] transition-colors">
                            Popular
                        </a>
                    </li>
                </ul>
            </div>

            {/* Column 3 - Shows */}
            <div className="footer-column">
                <h3 className="text-white text-base md:text-lg font-semibold mb-4 md:mb-6">Shows</h3>
                <ul className="space-y-2 md:space-y-3">
                    <li>
                        <a href="#" className="text-sm md:text-base text-[rgba(153,153,153,1)] hover:text-[#e50000] transition-colors">
                            Genres
                        </a>
                    </li>
                    <li>
                        <a href="#" className="text-sm md:text-base text-[rgba(153,153,153,1)] hover:text-[#e50000] transition-colors">
                            Trending
                        </a>
                    </li>
                    <li>
                        <a href="#" className="text-sm md:text-base text-[rgba(153,153,153,1)] hover:text-[#e50000] transition-colors">
                            New Release
                        </a>
                    </li>
                    <li>
                        <a href="#" className="text-sm md:text-base text-[rgba(153,153,153,1)] hover:text-[#e50000] transition-colors">
                            Popular
                        </a>
                    </li>
                </ul>
            </div>

            {/* Column 4 - Support */}
            <div className="footer-column">
                <h3 className="text-white text-base md:text-lg font-semibold mb-4 md:mb-6">Support</h3>
                <ul className="space-y-2 md:space-y-3">
                    <li>
                        <a href="#" className="text-sm md:text-base text-[rgba(153,153,153,1)] hover:text-[#e50000] transition-colors">
                            Contact Us
                        </a>
                    </li>
                </ul>
            </div>

            {/* Column 5 - Subscription */}
            <div className="footer-column">
                <h3 className="text-white text-base md:text-lg font-semibold mb-4 md:mb-6">Subscription</h3>
                <ul className="space-y-2 md:space-y-3">
                    <li>
                        <a href="#" className="text-sm md:text-base text-[rgba(153,153,153,1)] hover:text-[#e50000] transition-colors">
                            Plans
                        </a>
                    </li>
                    <li>
                        <a href="#" className="text-sm md:text-base text-[rgba(153,153,153,1)] hover:text-[#e50000] transition-colors">
                            Features
                        </a>
                    </li>
                </ul>
            </div>

            {/* Column 6 - Connect With Us */}
            <div className="footer-column col-span-2 md:col-span-3 lg:col-span-1">
                <h3 className="text-white text-base md:text-lg font-semibold mb-4 md:mb-6">Connect With Us</h3>
                <div className="flex gap-4 md:gap-5">
                    <a 
                        href="#" 
                        className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-[rgba(38,38,38,1)] hover:bg-[#e50000] rounded-lg transition-colors"
                        aria-label="Facebook"
                    >
                        <FaFacebook className="text-white text-lg md:text-xl" />
                    </a>
                    <a 
                        href="#" 
                        className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-[rgba(38,38,38,1)] hover:bg-[#e50000] rounded-lg transition-colors"
                        aria-label="Twitter/X"
                    >
                        <FaXTwitter className="text-white text-lg md:text-xl" />
                    </a>
                    <a 
                        href="#" 
                        className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-[rgba(38,38,38,1)] hover:bg-[#e50000] rounded-lg transition-colors"
                        aria-label="LinkedIn"
                    >
                        <FaLinkedin className="text-white text-lg md:text-xl" />
                    </a>
                </div>
            </div>
        </div>
    </div>

    {/* Footer Bottom */}
    <div className="footer-bottom border-t border-[#282828] px-4 md:px-8 lg:px-12 xl:px-[70px] py-5 md:py-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6">
            {/* Copyright */}
            <div className="text-center md:text-left">
                <p className="text-xs md:text-sm text-[rgba(153,153,153,1)]">
                    @2023 streamvib, All Rights Reserved
                </p>
            </div>

            {/* Legal Links */}
            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 lg:gap-8">
                <a 
                    href="#" 
                    className="text-xs md:text-sm text-[rgba(153,153,153,1)] hover:text-[#e50000] transition-colors whitespace-nowrap"
                >
                    Terms of Use
                </a>
                <span className="text-[rgba(153,153,153,1)] hidden md:inline">|</span>
                <a 
                    href="#" 
                    className="text-xs md:text-sm text-[rgba(153,153,153,1)] hover:text-[#e50000] transition-colors whitespace-nowrap"
                >
                    Privacy Policy
                </a>
                <span className="text-[rgba(153,153,153,1)] hidden md:inline">|</span>
                <a 
                    href="#" 
                    className="text-xs md:text-sm text-[rgba(153,153,153,1)] hover:text-[#e50000] transition-colors whitespace-nowrap"
                >
                    Cookie Policy
                </a>
            </div>
        </div>
    </div>
</footer>
  )
}

export default Footer