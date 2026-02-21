import { useState } from 'react';
import { FaPlus, FaMinus, FaQuestionCircle } from 'react-icons/fa';

const Questions = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What is StreamVibe?",
      answer: "StreamVibe is a streaming service that allows you to watch movies and shows on demand, anytime, anywhere. With a vast library of content, we provide an unmatched viewing experience across all your devices."
    },
    {
      question: "How much does StreamVibe cost?",
      answer: "StreamVibe offers flexible pricing plans starting from $8.99/month for our basic plan. We also offer Standard and Premium plans with additional features. Check out our pricing page for detailed information."
    },
    {
      question: "What content is available on StreamVibe?",
      answer: "We offer thousands of movies, TV shows, documentaries, and original content across all genres. From the latest blockbusters to classic films, there's something for everyone on StreamVibe."
    },
    {
      question: "How do I cancel my subscription?",
      answer: "You can cancel your subscription at any time from your account settings. No cancellation fees or hidden charges. Your access will continue until the end of your current billing period."
    },
    {
      question: "Can I watch on multiple devices?",
      answer: "Yes! Depending on your plan, you can stream on 2-4 devices simultaneously. Our Standard plan allows 2 screens, while Premium supports up to 4 screens at once."
    },
    {
      question: "Is there a free trial available?",
      answer: "Yes! We offer a 7-day free trial for new users. No credit card required to start. Experience all our features and decide if StreamVibe is right for you."
    },
    {
      question: "How do I contact customer support?",
      answer: "Our support team is available 24/7 via live chat, email at support@streamvibe.com, or phone at 1-800-STREAM. We're always here to help you with any questions or issues."
    },
    {
      question: "Can I download content for offline viewing?",
      answer: "Yes! Premium plans include offline download functionality for mobile devices. Download your favorite shows and movies to watch without an internet connection."
    }
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="questions-section w-full min-h-screen bg-[#141414] px-4 md:px-8 lg:px-12 xl:px-[70px] py-12 md:py-16 lg:py-24">
      <div className="questions-container max-w-[1400px] mx-auto">
        
        {/* Header */}
        <div className="questions-header text-center mb-10 md:mb-14 lg:mb-16 animate-fade-in">
          <div className="icon-wrapper flex justify-center mb-4 md:mb-6">
            <div className="relative">
              {/* Pulsing rings */}
              <div className="absolute inset-0 bg-[#e50000] rounded-full animate-ping opacity-20"></div>
              <div className="absolute inset-0 bg-[#e50000]/30 rounded-full animate-pulse"></div>
              
              {/* Icon */}
              <div className="relative w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-[#e50000] to-[#a00000] rounded-full flex items-center justify-center shadow-xl shadow-[#e50000]/50 animate-float">
                <FaQuestionCircle className="text-3xl md:text-4xl text-white" />
              </div>
            </div>
          </div>
          
          <h1 className="text-2xl md:text-3xl lg:text-4xl text-white font-bold mb-4 md:mb-5 animate-fade-in-delay">
            Frequently Asked Questions
          </h1>
          <p className="text-sm md:text-base text-[rgba(153,153,153,1)] max-w-3xl mx-auto animate-fade-in-delay-2">
            Got questions? We&apos;ve got answers! Check out our FAQ section to find answers to the most common questions about StreamVibe.
          </p>
        </div>

        {/* FAQ Grid */}
        <div className="faq-grid grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-5 lg:gap-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="faq-item-wrapper animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div
                className={`faq-item group relative bg-[#1a1a1a] border-2 rounded-xl overflow-hidden transition-all duration-500 ${
                  openIndex === index
                    ? 'border-[#e50000] shadow-lg shadow-[#e50000]/20'
                    : 'border-[#262626] hover:border-[#e50000]/50'
                }`}
              >
                {/* Animated gradient background */}
                <div className={`absolute inset-0 bg-gradient-to-br from-[#e50000]/0 via-[#e50000]/5 to-[#e50000]/0 transition-opacity duration-500 ${
                  openIndex === index ? 'opacity-100' : 'opacity-0'
                }`}></div>

                {/* Question Header */}
                <button
                  onClick={() => toggleAccordion(index)}
                  className="relative w-full flex items-start justify-between gap-4 p-5 md:p-6 lg:p-7 text-left group/btn transition-all duration-300"
                >
                  {/* Number Badge */}
                  <div className={`flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center font-bold text-sm md:text-base transition-all duration-500 ${
                    openIndex === index
                      ? 'bg-[#e50000] text-white shadow-lg shadow-[#e50000]/50 scale-110'
                      : 'bg-[rgba(38,38,38,1)] text-white group-hover/btn:bg-[#e50000]/20 group-hover/btn:text-[#e50000]'
                  }`}>
                    {String(index + 1).padStart(2, '0')}
                  </div>

                  {/* Question Text */}
                  <h3 className={`flex-1 text-sm md:text-base lg:text-lg font-semibold transition-colors duration-300 ${
                    openIndex === index ? 'text-white' : 'text-white group-hover/btn:text-[#e50000]'
                  }`}>
                    {faq.question}
                  </h3>

                  {/* Toggle Icon */}
                  <div className={`flex-shrink-0 w-8 h-8 md:w-10 md:h-10 rounded-lg flex items-center justify-center transition-all duration-500 ${
                    openIndex === index
                      ? 'bg-[#e50000] text-white rotate-180 scale-110'
                      : 'bg-[rgba(38,38,38,1)] text-white group-hover/btn:bg-[#e50000]/20 group-hover/btn:text-[#e50000]'
                  }`}>
                    {openIndex === index ? (
                      <FaMinus className="text-sm md:text-base" />
                    ) : (
                      <FaPlus className="text-sm md:text-base" />
                    )}
                  </div>
                </button>

                {/* Answer Content with Smooth Animation */}
                <div
                  className={`relative overflow-hidden transition-all duration-500 ease-in-out ${
                    openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-5 md:px-6 lg:px-7 pb-5 md:pb-6 lg:pb-7 pt-0">
                    {/* Divider Line */}
                    <div className="w-full h-px bg-gradient-to-r from-transparent via-[#e50000] to-transparent mb-4 md:mb-5 animate-expand"></div>
                    
                    {/* Answer Text */}
                    <p className={`text-sm md:text-base text-[rgba(153,153,153,1)] leading-relaxed transition-all duration-700 ${
                      openIndex === index ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                    }`}>
                      {faq.answer}
                    </p>
                  </div>
                </div>

                {/* Bottom shine effect */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#e50000] to-transparent transition-opacity duration-500 ${
                  openIndex === index ? 'opacity-100 animate-pulse' : 'opacity-0'
                }`}></div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="cta-section mt-12 md:mt-16 lg:mt-20 text-center animate-fade-in" style={{ animationDelay: '1000ms' }}>
          <div className="relative inline-block">
            {/* Glow effect */}
            <div className="absolute inset-0 bg-[#e50000] blur-3xl opacity-30 rounded-full"></div>
            
            <div className="relative bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] border-2 border-[#262626] rounded-2xl p-6 md:p-8 lg:p-10 max-w-2xl hover:border-[#e50000] transition-all duration-500 group">
              <h2 className="text-xl md:text-2xl lg:text-3xl text-white font-bold mb-3 md:mb-4 group-hover:text-[#e50000] transition-colors duration-300">
                Still have questions?
              </h2>
              <p className="text-sm md:text-base text-[rgba(153,153,153,1)] mb-5 md:mb-6">
                Can&apos;t find the answer you&apos;re looking for? Our customer support team is here to help.
              </p>
              <button className="relative px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-[#e50000] to-[#c50000] text-white font-semibold rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[#e50000]/50 group/btn">
                {/* Shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700"></div>
                <span className="relative flex items-center gap-2">
                  <span>📧</span>
                  Contact Support
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Questions;