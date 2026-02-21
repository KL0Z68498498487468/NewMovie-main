import { FaMobile, FaTablet, FaTv, FaLaptop, FaLinux, FaGamepad } from 'react-icons/fa';

const Devices = () => {
  const devices = [
    {
      icon: FaMobile,
      name: "Smartphones",
      description: "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store",
      gradient: "from-blue-500/20 to-purple-500/20"
    },
    {
      icon: FaTablet,
      name: "Tablet",
      description: "StreamVibe is optimized for both Android and iOS tablets. Enjoy a larger screen experience with our responsive design",
      gradient: "from-purple-500/20 to-pink-500/20"
    },
    {
      icon: FaTv,
      name: "Smart TV",
      description: "StreamVibe is available on major Smart TV platforms. Enjoy your favorite content on the big screen",
      gradient: "from-pink-500/20 to-red-500/20"
    },
    {
      icon: FaLaptop,
      name: "Laptops",
      description: "Access StreamVibe directly from your laptop browser. Compatible with Windows, macOS, and Chrome OS",
      gradient: "from-red-500/20 to-orange-500/20"
    },
    {
      icon: FaLinux,
      name: "Linux Distributes",
      description: "StreamVibe is optimized for Linux systems. Download our app from the github repositories",
      gradient: "from-orange-500/20 to-yellow-500/20"
    },
    {
      icon: FaGamepad,
      name: "Gaming Consoles",
      description: "Stream on PlayStation and Xbox consoles. Download the app from your console's store",
      gradient: "from-yellow-500/20 to-green-500/20"
    }
  ];

  return (
    <div className="devices w-full min-h-screen bg-[#141414] px-4 md:px-8 lg:px-12 xl:px-[70px] py-12 md:py-16 lg:py-32">
      {/* Header */}
      <div className="devices-header w-full flex flex-col gap-3 md:gap-4 lg:gap-5 mb-8 md:mb-12 lg:mb-16 text-center animate-fade-in">
        <h1 className="text-xl md:text-2xl lg:text-[28px] text-white font-semibold">
          We Provide you streaming experience across various devices
        </h1>
        <p className="text-sm md:text-base text-[rgba(153,153,153,1)] max-w-4xl mx-auto animate-fade-in-delay">
          With StreamVibe, you can enjoy your favorite movies and TV shows anytime, anywhere. Our platform is designed to be compatible with a wide range of devices, ensuring that you never miss a moment of entertainment.
        </p>
      </div>

      {/* Devices Grid */}
      <div className="devices-main w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-9">
        {devices.map((device, index) => {
          const Icon = device.icon;
          return (
            <div
              key={device.name}
              className="card-wrapper animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="card group relative w-full h-auto min-h-[200px] md:min-h-[220px] lg:h-[230px] flex flex-col bg-[rgba(15,15,15,1)] rounded-xl gap-4 md:gap-5 lg:gap-[24px] p-5 md:p-6 lg:p-7 transition-all duration-500 hover:scale-105 hover:shadow-2xl overflow-hidden border border-[#1a1a1a] hover:border-[#e50000]">
                
                {/* Animated Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${device.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-3xl`}></div>
                
                {/* Rotating Border Effect */}
                <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-[-2px] rounded-xl bg-gradient-to-r from-[#e50000] via-transparent to-[#e50000] animate-spin-slow"></div>
                </div>

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon with Pulse Animation */}
                  <div className="part-1 flex text-white items-center gap-3 md:gap-4">
                    <div className="ico-shell relative">
                      {/* Pulsing Ring */}
                      <div className="absolute inset-0 rounded-full bg-[#e50000] animate-ping opacity-20"></div>
                      <div className="absolute inset-0 rounded-full bg-[#e50000]/30 animate-pulse"></div>
                      
                      {/* Icon */}
                      <div className="relative w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-full bg-gradient-to-br from-[#e50000] to-[#a00000] flex items-center justify-center transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-500 shadow-lg shadow-[#e50000]/50">
                        <Icon className="text-2xl md:text-3xl lg:text-4xl animate-float" />
                      </div>
                    </div>
                    
                    {/* Name with Slide In */}
                    <h1 className="text-lg md:text-xl lg:text-[20px] font-medium group-hover:text-[#e50000] transition-colors duration-300 animate-slide-in-left">
                      {device.name}
                    </h1>
                  </div>

                  {/* Description */}
                  <div className="part-2 mt-4">
                    <p className="text-sm md:text-base text-[rgba(153,153,153,1)] group-hover:text-[rgba(200,200,200,1)] leading-relaxed transition-colors duration-300">
                      {device.description}
                    </p>
                  </div>
                </div>

                {/* Sparkle Effect */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-[#e50000] rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-sparkle transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 w-1.5 h-1.5 bg-[#e50000] rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-sparkle-delayed transition-opacity duration-300"></div>

                {/* Bottom Shine */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#e50000] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-slide-right"></div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Stats Section with Counter Animation */}
      <div className="stats-section mt-12 md:mt-16 lg:mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 animate-fade-in" style={{ animationDelay: '800ms' }}>
        {[
          { label: "Total Devices", value: "10M+", icon: "📱" },
          { label: "Active Users", value: "5M+", icon: "👥" },
          { label: "Countries", value: "150+", icon: "🌍" },
          { label: "Platforms", value: "6", icon: "⚡" }
        ].map((stat, idx) => (
          <div 
            key={stat.label}
            className="stat-card bg-[rgba(15,15,15,1)] border border-[#262626] rounded-xl p-4 md:p-6 text-center hover:border-[#e50000] transition-all duration-300 hover:scale-105 animate-fade-in-up"
            style={{ animationDelay: `${900 + idx * 100}ms` }}
          >
            <div className="text-3xl md:text-4xl mb-2 animate-bounce-slow">{stat.icon}</div>
            <div className="text-2xl md:text-3xl text-white font-bold mb-1 animate-counter">
              {stat.value}
            </div>
            <div className="text-xs md:text-sm text-[rgba(153,153,153,1)]">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Devices;