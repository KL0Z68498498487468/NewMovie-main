import React, { useState } from 'react'
import { FaBars } from 'react-icons/fa'
import { FaBell, FaMagnifyingGlass } from 'react-icons/fa6'

function Navbar() {

    const [isMenuOpen, setIsmenuopen] = useState(false)
    

  return (
    <div className="navbar w-full h-16 md:h-20 lg:h-24.5 flex items-center justify-between px-4 md:px-8 lg:px-16 xl:px-25 fixed z-50 bg-black/80 backdrop-blur-sm">
    <div className="logo flex-shrink-0">
        <img src="/public/images/Logo.svg" className="h-8 md:h-10 lg:h-12" alt="Logo" />
    </div>
    
    {/* Desktop Navigation */}
    <div className="nav-center hidden lg:flex h-15.25 w-auto items-center px-5 text-white bg-black border-3 border-[#282828] rounded-[10px]">
        <ul className='flex gap-x-4 xl:gap-x-[20px]'>
            <li className="page-shell flex items-center cursor-pointer hover:text-[#e50000] transition-colors px-3">
                Home
            </li>
            <li className="page-shell flex items-center cursor-pointer hover:text-[#e50000] transition-colors px-3 whitespace-nowrap">
                Movies & Shows
            </li>
            <li className="page-shell flex items-center cursor-pointer hover:text-[#e50000] transition-colors px-3">
                Support
            </li>
            <li className="page-shell flex items-center cursor-pointer hover:text-[#e50000] transition-colors px-3">
                Subscriptions
            </li>
            <li className="button-shell">
                <input className='py-2 lg:py-[10px] px-4 lg:px-[24px] bg-[#e50000] rounded-[8px] cursor-pointer hover:bg-[#c50000] transition-colors' type="button" value="Logout" />
            </li>
        </ul>
    </div>

    {/* Mobile & Tablet Icons + Menu Button */}
    <div className="nav-items flex items-center gap-x-3 md:gap-x-4 text-white">
        <FaMagnifyingGlass className='size-4 md:size-5 cursor-pointer hover:text-[#e50000] transition-colors'/>
        <FaBell className='size-4 md:size-5 cursor-pointer hover:text-[#e50000] transition-colors'/>
        
        {/* Mobile Menu Button */}
        <button className="lg:hidden flex flex-col gap-1 w-6 h-5" aria-label="Menu">
            <FaBars className="size-7" onClick={()=> {setIsmenuopen(!isMenuOpen)}}/>
        </button>
    </div>

    <div className={`lg:hidden fixed top-16 md:top-20 left-0 w-full bg-black border-t border-[#282828]  ${isMenuOpen ? 'block' : 'hidden'}`}>
        <ul className='flex flex-col gap-y-4 p-6 text-white'>
            <li className="cursor-pointer hover:text-[#e50000] transition-colors">Home</li>
            <li className="cursor-pointer hover:text-[#e50000] transition-colors">Movies & Shows</li>
            <li className="cursor-pointer hover:text-[#e50000] transition-colors">Support</li>
            <li className="cursor-pointer hover:text-[#e50000] transition-colors">Subscriptions</li>
            <li>
                <input className='w-full py-3 px-6 bg-[#e50000] rounded-[8px] cursor-pointer hover:bg-[#c50000] transition-colors' type="button" value="Logout" />
            </li>
        </ul>
    </div>
</div>
  )
}

export default Navbar