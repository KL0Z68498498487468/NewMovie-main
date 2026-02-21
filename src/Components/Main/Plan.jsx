import { useState } from 'react';
import { FaCheck } from 'react-icons/fa';


const Plans = () => {
  const [isYearly, setIsYearly] = useState(false);

  const plans = [
    {
      name: "Basic Plan",
      description: "Enjoy an extensive library of movies and shows, featuring a range of content, including recently released titles.",
      monthlyPrice: 9.99,
      yearlyPrice: 99.99,
      features: [
        "HD Quality",
        "1 Screen",
        "Mobile & Tablet",
        "Ad-Free",
        "Cancel Anytime"
      ]
    },
    {
      name: "Standard Plan",
      description: "Access to a wider selection of movies and shows, including most new releases and exclusive content",
      monthlyPrice: 12.99,
      yearlyPrice: 129.99,
      popular: true,
      features: [
        "4K Quality",
        "2 Screens",
        "All Devices",
        "Ad-Free",
        "Download Available",
        "Cancel Anytime"
      ]
    },
    {
      name: "Premium Plan",
      description: "Access to the widest selection of movies and shows, including all new releases and Offline Viewing",
      monthlyPrice: 14.99,
      yearlyPrice: 149.99,
      features: [
        "4K + HDR",
        "4 Screens",
        "All Devices",
        "Ad-Free",
        "Unlimited Downloads",
        "Priority Support",
        "Cancel Anytime"
      ]
    }
  ];

  return (
    <div className="month-plan w-full bg-[#141414] px-4 md:px-8 lg:px-12 xl:px-[70px] py-12 md:py-16 lg:py-32">
      <div className="plan-header w-full flex flex-col items-center text-center mb-8 md:mb-12 lg:mb-16">
        <h1 className="text-xl md:text-2xl lg:text-[28px] xl:text-[32px] text-white font-bold mb-3 md:mb-4 animate-fade-in">
          Choose the plan that&apos;s right for you
        </h1>
        <p className="text-sm md:text-base text-[rgba(153,153,153,1)] max-w-3xl mb-6 md:mb-8 lg:mb-10 px-4 animate-fade-in-delay">
          Join StreamVibe and select from our flexible subscription options tailored to suit your viewing preferences. Get ready for non-stop entertainment!
        </p>

        {/* Toggle Monthly/Yearly with Animation */}
        <div className="mode-block relative flex items-center gap-2 bg-[#0a0a0a] border-2 border-[#262626] rounded-xl p-1.5 md:p-2 animate-slide-up">
          {/* Sliding Background */}
          <div 
            className={`absolute top-1.5 md:top-2 left-1.5 md:left-2 w-[calc(50%-6px)] md:w-[calc(50%-8px)] h-[calc(100%-12px)] md:h-[calc(100%-16px)] bg-[#e50000] rounded-lg transition-all duration-300 ease-out ${
              isYearly ? 'translate-x-[calc(100%+4px)] md:translate-x-[calc(100%+8px)]' : 'translate-x-0'
            }`}
          />
          
          <button
            onClick={() => setIsYearly(false)}
            className={`relative z-10 px-6 md:px-8 py-2.5 md:py-3 rounded-lg font-medium text-sm md:text-base transition-colors duration-300 ${
              !isYearly ? 'text-white' : 'text-[#999] hover:text-white'
            }`}
          >
            Monthly
          </button>
          
          <button
            onClick={() => setIsYearly(true)}
            className={`relative z-10 px-6 md:px-8 py-2.5 md:py-3 rounded-lg font-medium text-sm md:text-base transition-colors duration-300 flex items-center gap-2 ${
              isYearly ? 'text-white' : 'text-[#999] hover:text-white'
            }`}
          >
            Yearly
            <span className="px-2 py-0.5 bg-[#00ff00] text-black text-xs font-bold rounded animate-pulse">
              -17%
            </span>
          </button>
        </div>
      </div>

      {/* Plans Grid with Stagger Animation */}
      <div className="plan-main w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
        {plans.map((plan, index) => (
          <div
            key={plan.name}
            className={`card-wrapper animate-fade-in-up`}
            style={{ animationDelay: `${index * 150}ms` }}
          >
            <div className={`card group relative w-full bg-[rgba(15,15,15,1)] border-2 rounded-xl p-6 md:p-8 lg:p-10 flex flex-col transition-all duration-500 hover:scale-105 hover:shadow-2xl ${
              plan.popular 
                ? 'border-[#e50000] shadow-lg shadow-[#e50000]/20' 
                : 'border-[#282828] hover:border-[#e50000]'
            }`}>
              
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-[#e50000] rounded-full animate-bounce-slow">
                  <span className="text-white text-xs md:text-sm font-bold">MOST POPULAR</span>
                </div>
              )}

              {/* Plan Name */}
              <h1 className="text-lg md:text-xl lg:text-2xl text-white font-bold mb-3 md:mb-4 group-hover:text-[#e50000] transition-colors duration-300">
                {plan.name}
              </h1>
              
              {/* Description */}
              <p className="text-sm md:text-base text-[rgba(153,153,153,1)] mb-6 md:mb-8 flex-grow leading-relaxed">
                {plan.description}
              </p>
              
              {/* Price with Animation */}
              <div className="price-wrapper mb-6 md:mb-8 overflow-hidden">
                <div className={`price flex items-baseline gap-2 transition-all duration-500 ${
                  isYearly ? '-translate-y-full opacity-0' : 'translate-y-0 opacity-100'
                }`}>
                  <h1 className="text-2xl md:text-3xl lg:text-4xl text-white font-bold">
                    ${plan.monthlyPrice}
                  </h1>
                  <p className="text-base md:text-lg text-[rgba(153,153,153,1)]">/month</p>
                </div>
                
                <div className={`price flex items-baseline gap-2 transition-all duration-500 ${
                  isYearly ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
                } ${isYearly ? '' : 'absolute'}`}>
                  <h1 className="text-2xl md:text-3xl lg:text-4xl text-white font-bold">
                    ${plan.yearlyPrice}
                  </h1>
                  <p className="text-base md:text-lg text-[rgba(153,153,153,1)]">/year</p>
                </div>
              </div>

              {/* Features */}
              <div className="features mb-6 md:mb-8 space-y-3">
                {plan.features.map((feature, idx) => (
                  <div 
                    key={feature} 
                    className="flex items-center gap-3 group/feature animate-slide-in-left"
                    style={{ animationDelay: `${idx * 50}ms` }}
                  >
                    <div className="w-5 h-5 rounded-full bg-[#e50000]/20 flex items-center justify-center flex-shrink-0 group-hover/feature:bg-[#e50000] transition-colors duration-300">
                      <FaCheck className="text-[#e50000] text-xs group-hover/feature:text-white transition-colors duration-300" />
                    </div>
                    <span className="text-sm md:text-base text-[rgba(200,200,200,1)]">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Buttons */}
              <div className="card-button flex flex-col gap-3 md:gap-4">
                <button 
                  className="w-full px-5 py-3 md:py-4 bg-[rgba(38,38,38,1)] hover:bg-[rgba(48,48,48,1)] text-white rounded-lg text-sm md:text-base font-medium transition-all duration-300 transform hover:scale-105"
                  type="button"
                >
                  Start Free Trial
                </button>
                <button 
                  className={`w-full px-5 py-3 md:py-4 rounded-lg text-sm md:text-base font-medium transition-all duration-300 transform hover:scale-105 ${
                    plan.popular 
                      ? 'bg-[#e50000] hover:bg-[#c50000] text-white shadow-lg hover:shadow-xl'
                      : 'bg-[#e50000] hover:bg-[#c50000] text-white'
                  }`}
                  type="button"
                >
                  Choose Plan
                </button>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#e50000]/0 via-[#e50000]/10 to-[#e50000]/0 blur-xl"></div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Features Comparison Table with Fade In */}
      <div className="features-comparison mt-8 md:mt-12 lg:mt-16 p-4 md:p-6 lg:p-8 bg-[rgba(15,15,15,1)] border border-[#282828] rounded-xl hidden lg:block animate-fade-in" style={{ animationDelay: '600ms' }}>
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
              <tr className="border-b border-[#282828] hover:bg-[rgba(38,38,38,0.3)] transition-colors">
                <td className="py-4 px-4 text-[rgba(153,153,153,1)]">HD Quality</td>
                <td className="text-center py-4"><span className="text-2xl animate-check">✓</span></td>
                <td className="text-center py-4"><span className="text-2xl animate-check">✓</span></td>
                <td className="text-center py-4"><span className="text-2xl animate-check">✓</span></td>
              </tr>
              <tr className="border-b border-[#282828] hover:bg-[rgba(38,38,38,0.3)] transition-colors">
                <td className="py-4 px-4 text-[rgba(153,153,153,1)]">4K Quality</td>
                <td className="text-center py-4"><span className="text-2xl text-[rgba(153,153,153,1)]">✗</span></td>
                <td className="text-center py-4"><span className="text-2xl animate-check">✓</span></td>
                <td className="text-center py-4"><span className="text-2xl animate-check">✓</span></td>
              </tr>
              <tr className="border-b border-[#282828] hover:bg-[rgba(38,38,38,0.3)] transition-colors">
                <td className="py-4 px-4 text-[rgba(153,153,153,1)]">Screens</td>
                <td className="text-center py-4">1</td>
                <td className="text-center py-4">2</td>
                <td className="text-center py-4">4</td>
              </tr>
              <tr className="border-b border-[#282828] hover:bg-[rgba(38,38,38,0.3)] transition-colors">
                <td className="py-4 px-4 text-[rgba(153,153,153,1)]">Offline Downloads</td>
                <td className="text-center py-4"><span className="text-2xl text-[rgba(153,153,153,1)]">✗</span></td>
                <td className="text-center py-4"><span className="text-2xl animate-check">✓</span></td>
                <td className="text-center py-4"><span className="text-2xl animate-check">✓</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Plans;