import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { FaBell, FaMagnifyingGlass } from 'react-icons/fa6';
import { Link, NavLink, useLocation } from 'react-router-dom';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [notificationCount, setNotificationCount] = useState(3);
  const location = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  return (
    <>
      {/* Navbar */}
      <nav className={`navbar w-full flex items-center justify-between px-4 md:px-8 lg:px-16 xl:px-25 fixed top-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'h-14 md:h-16 lg:h-20 bg-black/95 backdrop-blur-xl shadow-2xl shadow-black/50' 
          : 'h-16 md:h-20 lg:h-24.5 bg-black/30 backdrop-blur-sm'
      }`}>
        
        {/* Logo with Glow */}
        <Link to="/" className="logo flex-shrink-0 group">
          <div className="relative">
            {/* Glow effect */}
            <div className="absolute inset-0 bg-[#e50000] blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 rounded-full"></div>
            <img 
              src="/images/logo.svg" 
              className={`relative h-8 md:h-10 transition-all duration-500 group-hover:scale-110 ${
                scrolled ? 'lg:h-10' : 'lg:h-12'
              }`} 
              alt="Logo" 
            />
          </div>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="nav-center hidden lg:flex h-12 lg:h-15.25 w-auto items-center px-5 text-white bg-black/50 border-2 border-[#282828] rounded-xl backdrop-blur-md relative overflow-hidden group">
          {/* Animated Background */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#e50000]/0 via-[#e50000]/10 to-[#e50000]/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
          
          <ul className='relative flex gap-x-2 lg:gap-x-4 xl:gap-x-[20px]'>
            {[
              { path: '/', label: 'Home' },
              { path: '/movieshow', label: 'Movies & Shows' },
              { path: '/support', label: 'Support' },
              { path: '/subscriptions', label: 'Subscriptions' }
            ].map((item) => (
              <NavLink 
                key={item.path}
                to={item.path}
                className={({ isActive }) => 
                  `relative px-4 py-2 rounded-lg transition-all duration-300 ${
                    isActive 
                      ? 'text-white bg-[#e50000] shadow-lg shadow-[#e50000]/50' 
                      : 'text-[#999] hover:text-white hover:bg-white/10'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <li className="whitespace-nowrap font-medium">
                      {item.label}
                    </li>
                    {/* Active indicator */}
                    {isActive && (
                      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-white rounded-full animate-pulse"></div>
                    )}
                  </>
                )}
              </NavLink>
            ))}
            
            {/* Login Button */}
            <li>
              <NavLink to="/reg">
                <button className='relative px-4 lg:px-6 py-2 bg-gradient-to-r from-[#e50000] to-[#c50000] rounded-lg font-semibold overflow-hidden group/btn transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#e50000]/50'>
                  {/* Shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700"></div>
                  <span className="relative">Login/Sign</span>
                </button>
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Right Icons */}
        <div className="nav-items flex items-center gap-x-3 md:gap-x-4 text-white">
          {/* Search Icon */}
          <Link to="/search">
            <div className="relative group/search">
              <div className="absolute inset-0 bg-[#e50000] blur-lg opacity-0 group-hover/search:opacity-50 transition-opacity duration-300 rounded-full"></div>
              <FaMagnifyingGlass className='relative size-4 md:size-5 cursor-pointer hover:text-[#e50000] transition-all duration-300 hover:scale-125 hover:rotate-12'/>
            </div>
          </Link>
          
          {/* Notification Bell with Badge */}
          <button className="relative group/bell">
            <div className="absolute inset-0 bg-[#e50000] blur-lg opacity-0 group-hover/bell:opacity-50 transition-opacity duration-300 rounded-full"></div>
            <FaBell className='relative size-4 md:size-5 cursor-pointer hover:text-[#e50000] transition-all duration-300 hover:scale-125 animate-wiggle'/>
            {notificationCount > 0 && (
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#e50000] text-white text-[10px] font-bold rounded-full flex items-center justify-center animate-bounce-slow">
                {notificationCount}
              </span>
            )}
          </button>
          
          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden relative w-10 h-10 flex items-center justify-center group/menu"
            aria-label="Menu"
          >
            <div className="absolute inset-0 bg-[#e50000] blur-lg opacity-0 group-hover/menu:opacity-50 transition-opacity duration-300 rounded-full"></div>
            <div className="relative">
              {isMenuOpen ? (
                <FaTimes className="size-6 text-[#e50000] animate-spin-in" />
              ) : (
                <FaBars className="size-6 hover:text-[#e50000] transition-colors duration-300" />
              )}
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`lg:hidden fixed inset-0 bg-black/80 backdrop-blur-sm z-40 transition-opacity duration-500 ${
          isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMenuOpen(false)}
      />

      {/* Mobile Menu */}
      <div className={`lg:hidden fixed top-16 md:top-20 right-0 w-full sm:w-80 h-[calc(100vh-4rem)] md:h-[calc(100vh-5rem)] bg-gradient-to-b from-black via-black/95 to-black/90 backdrop-blur-xl border-l border-[#282828] z-40 transition-all duration-500 overflow-y-auto ${
        isMenuOpen ? 'translate-x-0 shadow-2xl' : 'translate-x-full'
      }`}>
        <ul className='flex flex-col gap-y-2 p-6 text-white'>
          {[
            { path: '/', label: 'Home', icon: '🏠' },
            { path: '/movieshow', label: 'Movies & Shows', icon: '🎬' },
            { path: '/support', label: 'Support', icon: '💬' },
            { path: '/subscriptions', label: 'Subscriptions', icon: '⭐' }
          ].map((item, index) => (
            <NavLink 
              key={item.path}
              to={item.path}
              className={({ isActive }) => 
                `relative flex items-center gap-3 px-4 py-4 rounded-xl transition-all duration-300 overflow-hidden group ${
                  isActive 
                    ? 'bg-gradient-to-r from-[#e50000] to-[#c50000] shadow-lg shadow-[#e50000]/50' 
                    : 'hover:bg-white/10 hover:translate-x-2'
                }`
              }
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {({ isActive }) => (
                <>
                  {/* Slide in animation bar */}
                  <div className={`absolute left-0 top-0 bottom-0 w-1 bg-[#e50000] transition-all duration-300 ${
                    isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                  }`}></div>
                  
                  {/* Icon */}
                  <span className="text-2xl transform group-hover:scale-125 transition-transform duration-300">
                    {item.icon}
                  </span>
                  
                  {/* Label */}
                  <span className="font-medium text-lg">{item.label}</span>
                  
                  {/* Arrow indicator */}
                  <span className={`ml-auto transform transition-all duration-300 ${
                    isActive ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100'
                  }`}>
                    →
                  </span>
                </>
              )}
            </NavLink>
          ))}
          
          {/* Login Button in Mobile Menu */}
          <li className="mt-4">
            <NavLink to="/reg">
              <button className='w-full py-4 px-6 bg-gradient-to-r from-[#e50000] to-[#c50000] rounded-xl font-bold text-lg relative overflow-hidden group/btn transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl hover:shadow-[#e50000]/50'>
                {/* Animated shine */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700"></div>
                <span className="relative flex items-center justify-center gap-2">
                  <span>🔐</span>
                  Login / Sign Up
                </span>
              </button>
            </NavLink>
          </li>
        </ul>

        {/* Mobile Menu Footer */}
        <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-[#282828] bg-black/50 backdrop-blur-xl">
          <p className="text-center text-sm text-[#666]">
            © 2024 StreamVibe
          </p>
        </div>
      </div>
    </>
  );
}

export default Navbar;