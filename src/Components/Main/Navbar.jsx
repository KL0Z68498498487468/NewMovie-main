import React from 'react'
import { FaBell, FaMagnifyingGlass } from 'react-icons/fa6'

function Navbar() {
  return (
    <div className="navbar w-full h-24.5 flex items-center justify-between px-25 absolute z-3">
        <div className="logo">
            <img src="/public/images/Logo.svg" alt="" />
        </div>
        <div className="nav-center flex  text-white bg-black border-3 border-[#282828] rounded-[10px] mr-[100px]">
            <ul className='flex h-15.25 w-105.25 items-center justify-between px-[20px]'>
                <div className="page-shell ">
                    <li>
                        Home
                    </li>
                </div>
                <div className="page-shell ">
                    <li>
                        Movies & Shows
                    </li>
                </div>
                <div className="page-shell ">
                    <li>
                        Support
                    </li>
                </div>
                <div className="page-shell ">
                    <li>
                        Subscriptions
                    </li>
                </div>
            </ul>
        </div>
        <div className="nav-items flex gap-x-4 text-white">
            <FaMagnifyingGlass/>
            <FaBell/>
        </div>
    </div>
  )
}

export default Navbar