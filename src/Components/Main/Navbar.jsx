import React from 'react'
import { FaBell, FaMagnifyingGlass } from 'react-icons/fa6'

function Navbar() {
  return (
    <div className="navbar w-full h-24.5 flex items-center justify-between px-25 fixed z-3">
        <div className="logo">
            <img src="/public/images/Logo.svg" alt="" />
        </div>
        <div className="nav-center flex h-15.25 w-135.25 items-center px-5  text-white bg-black border-3 border-[#282828] rounded-[10px] mr-[100px]">
            <ul className='flex gap-x-[20px]'>
                <div className="page-shell flex items-center">
                    <li>
                        Home
                    </li>
                </div>
                <div className="page-shell flex items-center">
                    <li>
                        Movies & Shows
                    </li>
                </div>
                <div className="page-shell flex items-center">
                    <li>
                        Support
                    </li>
                </div>
                <div className="page-shell flex items-center">
                    <li>
                        Subscriptions
                    </li>
                </div>
                <div className="button-shell">
                    <input className='py-[10px] px-[24px] bg-[#e50000] rounded-[8px]' type="button" value="Logout" />
                </div>
            </ul>
        </div>
        <div className="nav-items flex gap-x-4 text-white">
            <FaMagnifyingGlass className='size-5'/>
            <FaBell className='size-5'/>
        </div>
    </div>
  )
}

export default Navbar