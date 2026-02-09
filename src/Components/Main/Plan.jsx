import React from 'react'

function Plan() {
  return (
    <div className="month-plan w-full bg-[#141414] px-4 md:px-8 lg:px-12 xl:px-[70px] py-12 md:py-16 lg:py-32">
    <div className="plan-header w-full flex flex-col items-center text-center mb-8 md:mb-12 lg:mb-16">
        <h1 className="text-xl md:text-2xl lg:text-[28px] xl:text-[32px] text-white font-bold mb-3 md:mb-4">
            Choose the plan that's right for you
        </h1>
        <p className="text-sm md:text-base text-[rgba(153,153,153,1)] max-w-3xl mb-6 md:mb-8 lg:mb-10 px-4">
            Join StreamVibe and select from our flexible subscription options tailored to suit your viewing preferences. Get ready for non-stop entertainment!
        </p>

        {/* Toggle Monthly/Yearly */}
        <div className="mode-block flex items-center gap-2 bg-black border-2 border-[#282828] rounded-lg p-1.5 md:p-2">
            <div className="month-shell px-4 md:px-6 py-2 md:py-3 bg-[rgba(38,38,38,1)] hover:bg-[#e50000] rounded-md cursor-pointer transition-colors">
                <p className="text-white text-sm md:text-base font-medium">Monthly</p>
            </div>
            <div className="yearly-shell px-4 md:px-6 py-2 md:py-3 hover:bg-[rgba(38,38,38,1)] rounded-md cursor-pointer transition-colors">
                <p className="text-white text-sm md:text-base font-medium">Yearly</p>
            </div>
        </div>
    </div>

    {/* Plans Grid */}
    <div className="plan-main w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
        {/* Basic Plan */}
        <div className="card w-full bg-[rgba(15,15,15,1)] hover:bg-[rgba(25,25,25,1)] border-2 border-[#282828] hover:border-[#e50000] rounded-xl p-6 md:p-8 lg:p-10 flex flex-col transition-all duration-300">
            <h1 className="text-lg md:text-xl lg:text-2xl text-white font-bold mb-3 md:mb-4">
                Basic Plan
            </h1>
            <p className="text-sm md:text-base text-[rgba(153,153,153,1)] mb-6 md:mb-8 flex-grow leading-relaxed">
                Enjoy an extensive library of movies and shows, featuring a range of content, including recently released titles.
            </p>
            
            <div className="price flex items-baseline gap-2 mb-6 md:mb-8">
                <h1 className="text-2xl md:text-3xl lg:text-4xl text-white font-bold">$9.99</h1>
                <p className="text-base md:text-lg text-[rgba(153,153,153,1)]">/month</p>
            </div>

            <div className="card-button flex gap-3 md:gap-4">
                <button 
                    className="w-full px-5 py-3 md:py-4 bg-[rgba(38,38,38,1)] hover:bg-[rgba(48,48,48,1)] text-white rounded-lg text-sm md:text-base font-medium transition-colors"
                    type="button"
                >
                    Start Free Trial
                </button>
                <button 
                    className="w-full px-5 py-3 md:py-4 bg-[#e50000] hover:bg-[#c50000] text-white rounded-lg text-sm md:text-base font-medium transition-colors"
                    type="button"
                >
                    Choose Plan
                </button>
            </div>
        </div>

        {/* Standard Plan */}
        <div className="card w-full bg-[rgba(15,15,15,1)] hover:bg-[rgba(25,25,25,1)] border-2 border-[#282828] hover:border-[#e50000] rounded-xl p-6 md:p-8 lg:p-10 flex flex-col transition-all duration-300 relative">
            {/* Popular Badge */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-[#e50000] rounded-full">
                <span className="text-white text-xs md:text-sm font-bold">POPULAR</span>
            </div>

            <h1 className="text-lg md:text-xl lg:text-2xl text-white font-bold mb-3 md:mb-4">
                Standard Plan
            </h1>
            <p className="text-sm md:text-base text-[rgba(153,153,153,1)] mb-6 md:mb-8 flex-grow leading-relaxed">
                Access to a wider selection of movies and shows, including most new releases and exclusive content
            </p>
            
            <div className="price flex items-baseline gap-2 mb-6 md:mb-8">
                <h1 className="text-2xl md:text-3xl lg:text-4xl text-white font-bold">$12.99</h1>
                <p className="text-base md:text-lg text-[rgba(153,153,153,1)]">/month</p>
            </div>

            <div className="card-button flex gap-3 md:gap-4">
                <button 
                    className="w-full px-5 py-3 md:py-4 bg-[rgba(38,38,38,1)] hover:bg-[rgba(48,48,48,1)] text-white rounded-lg text-sm md:text-base font-medium transition-colors"
                    type="button"
                >
                    Start Free Trial
                </button>
                <button 
                    className="w-full px-5 py-3 md:py-4 bg-[#e50000] hover:bg-[#c50000] text-white rounded-lg text-sm md:text-base font-medium transition-colors"
                    type="button"
                >
                    Choose Plan
                </button>
            </div>
        </div>

        {/* Premium Plan */}
        <div className="card w-full bg-[rgba(15,15,15,1)] hover:bg-[rgba(25,25,25,1)] border-2 border-[#282828] hover:border-[#e50000] rounded-xl p-6 md:p-8 lg:p-10 flex flex-col transition-all duration-300 md:col-span-2 lg:col-span-1">
            <h1 className="text-lg md:text-xl lg:text-2xl text-white font-bold mb-3 md:mb-4">
                Premium Plan
            </h1>
            <p className="text-sm md:text-base text-[rgba(153,153,153,1)] mb-6 md:mb-8 flex-grow leading-relaxed">
                Access to the widest selection of movies and shows, including all new releases and Offline Viewing
            </p>
            
            <div className="price flex items-baseline gap-2 mb-6 md:mb-8">
                <h1 className="text-2xl md:text-3xl lg:text-4xl text-white font-bold">$14.99</h1>
                <p className="text-base md:text-lg text-[rgba(153,153,153,1)]">/month</p>
            </div>

            <div className="card-button flex gap-3 md:gap-4">
                <button 
                    className="w-full px-5 py-3 md:py-4 bg-[rgba(38,38,38,1)] hover:bg-[rgba(48,48,48,1)] text-white rounded-lg text-sm md:text-base font-medium transition-colors"
                    type="button"
                >
                    Start Free Trial
                </button>
                <button 
                    className="w-full px-5 py-3 md:py-4 bg-[#e50000] hover:bg-[#c50000] text-white rounded-lg text-sm md:text-base font-medium transition-colors"
                    type="button"
                >
                    Choose Plan
                </button>
            </div>
        </div>
    </div>

    {/* Features Comparison Table (Optional) */}
    <div className="features-comparison mt-8 md:mt-12 lg:mt-16 p-4 md:p-6 lg:p-8 bg-[rgba(15,15,15,1)] border border-[#282828] rounded-xl hidden lg:block">
        <h2 className="text-xl md:text-2xl text-white font-bold mb-6 text-center">Compare Plans</h2>
        <div className="overflow-x-auto">
            <table className="w-full text-white">
                <thead>
                    <tr className="border-b border-[#282828]">
                        <th className="text-left py-4 px-4 text-[rgba(153,153,153,1)]">Features</th>
                        <th className="text-center py-4 px-4">Basic</th>
                        <th className="text-center py-4 px-4">Standard</th>
                        <th className="text-center py-4 px-4">Premium</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="border-b border-[#282828]">
                        <td className="py-4 px-4 text-[rgba(153,153,153,1)]">HD Quality</td>
                        <td className="text-center py-4"><span className="text-2xl">✓</span></td>
                        <td className="text-center py-4"><span className="text-2xl">✓</span></td>
                        <td className="text-center py-4"><span className="text-2xl">✓</span></td>
                    </tr>
                    <tr className="border-b border-[#282828]">
                        <td className="py-4 px-4 text-[rgba(153,153,153,1)]">4K Quality</td>
                        <td className="text-center py-4"><span className="text-2xl text-[rgba(153,153,153,1)]">✗</span></td>
                        <td className="text-center py-4"><span className="text-2xl">✓</span></td>
                        <td className="text-center py-4"><span className="text-2xl">✓</span></td>
                    </tr>
                    <tr className="border-b border-[#282828]">
                        <td className="py-4 px-4 text-[rgba(153,153,153,1)]">Screens</td>
                        <td className="text-center py-4">1</td>
                        <td className="text-center py-4">2</td>
                        <td className="text-center py-4">4</td>
                    </tr>
                    <tr className="border-b border-[#282828]">
                        <td className="py-4 px-4 text-[rgba(153,153,153,1)]">Offline Downloads</td>
                        <td className="text-center py-4"><span className="text-2xl text-[rgba(153,153,153,1)]">✗</span></td>
                        <td className="text-center py-4"><span className="text-2xl text-[rgba(153,153,153,1)]">✗</span></td>
                        <td className="text-center py-4"><span className="text-2xl">✓</span></td>
                    </tr>
                    <tr>
                        <td className="py-4 px-4 text-[rgba(153,153,153,1)]">Ad-Free</td>
                        <td className="text-center py-4"><span className="text-2xl">✓</span></td>
                        <td className="text-center py-4"><span className="text-2xl">✓</span></td>
                        <td className="text-center py-4"><span className="text-2xl">✓</span></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</div>
  )
}

export default Plan