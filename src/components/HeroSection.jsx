import React from 'react';

export default function HeroSection() {
  return (
    <div className="bg-gradient-to-r from-[#094141] to-[#008080] pt-28 pb-20 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden text-[#CFFDFE]/10 whitespace-nowrap text-xs">
        <div className="animate-marquee">
          Finance Planning AI Smart Insights Finance Planning AI Smart Insights Finance Planning AI Smart Insights Finance Planning
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="w-full lg:w-1/2 mb-10 lg:mb-0">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
              Simplify Your Finances with <span className="text-[#CFFDFE]">AI-Driven Insights</span>
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-lg">
              Stop struggling with complex financial tools. Finsplore helps you manage your money effortlessly with personalized, AI-powered recommendations.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="#get-started" 
                className="px-6 py-3 rounded-md bg-white text-[#008080] font-medium hover:bg-[#CFFDFE] transition-colors"
              >
                Get started
              </a>
              <a 
                href="#watch-demo" 
                className="px-6 py-3 rounded-md border border-white text-white font-medium hover:bg-white/10 transition-colors flex items-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-5 w-5 mr-2">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Watch Demo
              </a>
            </div>
          </div>
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="relative">
              {/* Phone mockup */}
              <div className="bg-black rounded-3xl w-64 h-[500px] relative overflow-hidden border-4 border-black shadow-2xl">
                <div className="absolute top-0 left-0 right-0 bottom-0 bg-[#094141] p-4">
                  <div className="bg-black w-32 h-6 rounded-full mx-auto mb-2"></div>
                  <div className="bg-[#1a5c5c] rounded-xl h-[90%] p-3">
                    <div className="text-white text-xs mb-2">Dashboard</div>
                    <div className="bg-[#2a6c6c] rounded-lg h-24 mb-3 p-2">
                      <div className="text-white text-xs">Balance</div>
                      <div className="text-white text-xl font-bold mt-2">$2,408.45</div>
                    </div>
                    <div className="flex gap-2 mb-3">
                      <div className="bg-[#2a6c6c] rounded-lg flex-1 p-2">
                        <div className="text-white text-[10px]">Savings</div>
                        <div className="text-white text-sm font-bold">$750</div>
                      </div>
                      <div className="bg-[#2a6c6c] rounded-lg flex-1 p-2">
                        <div className="text-white text-[10px]">Spending</div>
                        <div className="text-white text-sm font-bold">$430</div>
                      </div>
                    </div>
                    <div className="bg-[#2a6c6c] rounded-lg h-40 p-2">
                      <div className="text-white text-xs mb-1">Transactions</div>
                      {[1, 2, 3, 4].map(item => (
                        <div key={item} className="bg-[#3a7c7c] rounded h-6 mb-2"></div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}