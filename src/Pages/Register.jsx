import Banner from '@/Components/Main/Banner'
import Footer from '@/Components/Main/Footer'
import React from 'react'
import { FaGithub } from 'react-icons/fa'

function Register() {
  return (
    <div>
        <div className="login-page w-full min-h-screen bg-[#141414] flex items-center justify-center p-4 md:p-6 lg:pt-23">
    <div className="login-container w-full max-w-[1400px] min-h-[500px] lg:h-[600px] bg-[#141414] rounded-2xl overflow-hidden flex flex-col lg:flex-row">
        
        {/* Left Side - Movie Posters (One Container) */}
        <div className="posters-container hidden lg:block flex-1 bg-[#141414] p-6 relative">
            {/* Single container for all posters - you'll add your image here */}
            <div className="posters-wrapper w-full h-full bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] rounded-xl overflow-hidden">
                {/* Your posters image/grid goes here as one piece */}
                <div className="w-full h-full bg-[#141414] opacity-70">
                    <img src="/images/support-img.png" alt="" />
                </div>
            </div>
        </div>

        {/* Right Side - Login Form */}
        <div className="form-section flex-1 flex items-center justify-center p-6 md:p-10 lg:p-12 xl:p-16">
            <div className="form-wrapper w-full max-w-[520px]">
                
                {/* Header */}
                <h1 className="text-white text-2xl md:text-3xl lg:text-[32px] xl:text-[36px] font-bold text-center mb-8 md:mb-10 lg:mb-12">
                    Please login to use our app
                </h1>

                {/* Login Form */}
                <form className="flex flex-col gap-5 md:gap-6">
                    
                    {/* Email Field */}
                    <div className="form-group">
                        <label htmlFor="email" className="text-white text-sm md:text-base font-medium mb-3 block">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            placeholder="example@email.com"
                            className="w-full px-5 py-4 md:py-[18px] bg-[#0a0a0a] border border-[#262626] rounded-xl text-white text-sm md:text-base placeholder:text-[#4a4a4a] focus:outline-none focus:border-[#e50000] transition-colors"
                        />
                    </div>

                    {/* Password Field */}
                    <div className="form-group">
                        <label htmlFor="password" className="text-white text-sm md:text-base font-medium mb-3 block">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            placeholder="password"
                            className="w-full px-5 py-4 md:py-[18px] bg-[#0a0a0a] border border-[#262626] rounded-xl text-white text-sm md:text-base placeholder:text-[#4a4a4a] focus:outline-none focus:border-[#e50000] transition-colors"
                        />
                    </div>

                    {/* Login Button */}
                    <button
                        type="submit"
                        className="w-full px-6 py-4 md:py-[18px] bg-[#e50000] hover:bg-[#c50000] text-white text-base md:text-lg font-bold rounded-xl transition-all duration-300 mt-2 shadow-lg hover:shadow-xl"
                    >
                        Login
                    </button>
                </form>

                {/* Sign Up Link */}
                <p className="text-center text-[#999999] text-sm md:text-base mt-6 mb-5">
                    Don&apos;t have an account?
                </p>

                {/* Social Login Buttons */}
                <div className="social-login flex flex-col sm:flex-row gap-4">
                    <button className="flex-1 px-5 py-3.5 md:py-4 bg-[#0f0f0f] hover:bg-[#1a1a1a] border border-[#262626] rounded-xl text-white text-sm md:text-base font-medium transition-colors flex items-center justify-center gap-3">
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                        </svg>
                        Login with Google
                    </button>

                    <button className="flex-1 px-5 py-3.5 md:py-4 bg-[#0f0f0f] hover:bg-[#1a1a1a] border border-[#262626] rounded-xl text-white text-sm md:text-base font-medium transition-colors flex items-center justify-center gap-3">
                        <FaGithub className="text-xl" />
                        Login with Github
                    </button>
                </div>
            </div>
        </div>
    </div>
</div>
<Banner/>
<Footer/>
    </div>
    
  )
}

export default Register