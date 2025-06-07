import React from 'react';

export default function HeroSection() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-emerald-900 via-teal-800 to-emerald-800 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-400/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-400/20 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-400/10 rounded-full blur-3xl animate-pulse-slow"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight text-shadow">
                From goals to 
                <span className="block bg-gradient-to-r from-emerald-300 to-cyan-300 bg-clip-text text-transparent">
                  growth
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-emerald-100 max-w-2xl leading-relaxed">
                Simplify Your Finances with AI-Driven Insights
              </p>
              <p className="text-lg text-emerald-200/80 max-w-xl">
                Finsplore empowers you to make swift, simplified financial decisions with personalized, AI-driven tools, designed to light the way toward a brighter financial future
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a href="#get-started" className="btn-primary group">
                Get started
                <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              <a href="#watch-demo" className="btn-secondary bg-white/10 text-white border-white/30 hover:bg-white/20">
                <svg className="mr-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Watch Demo
              </a>
            </div>
          </div>
          
          <div className="flex justify-center lg:justify-end animate-slide-up">
            <div className="relative">
              {/* Glow effects */}
              <div className="absolute -inset-4 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-3xl blur-2xl opacity-30 animate-pulse-slow"></div>
              
              {/* Phone mockup */}
              <div className="relative bg-gray-900 rounded-[3rem] w-80 h-[600px] shadow-2xl border-8 border-gray-800 overflow-hidden">
                <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-br from-emerald-800 to-teal-900 p-6">
                  {/* Status bar */}
                  <div className="flex justify-between items-center text-white text-sm mb-6">
                    <div className="flex space-x-1">
                      <div className="w-4 h-4 bg-green-400 rounded-full"></div>
                      <div className="w-4 h-4 bg-yellow-400 rounded-full"></div>
                      <div className="w-4 h-4 bg-red-400 rounded-full"></div>
                    </div>
                    <span>9:41</span>
                    <div className="text-xs">100%</div>
                  </div>
                  
                  {/* App content */}
                  <div className="bg-white/10 backdrop-blur-lg rounded-2xl h-[90%] p-4 border border-white/20">
                    <div className="text-white text-lg font-semibold mb-4">Dashboard</div>
                    
                    {/* Balance card */}
                    <div className="bg-white/20 backdrop-blur-lg rounded-xl p-4 mb-4 border border-white/20">
                      <div className="text-emerald-100 text-sm">Total Balance</div>
                      <div className="text-white text-3xl font-bold mt-1">$2,408.45</div>
                      <div className="text-emerald-300 text-sm mt-1">+2.4% this month</div>
                    </div>
                    
                    {/* Quick stats */}
                    <div className="grid grid-cols-2 gap-3 mb-4">
                      <div className="bg-white/15 backdrop-blur-lg rounded-xl p-3 border border-white/20">
                        <div className="text-emerald-100 text-xs">Savings</div>
                        <div className="text-white text-lg font-bold">$750.00</div>
                      </div>
                      <div className="bg-white/15 backdrop-blur-lg rounded-xl p-3 border border-white/20">
                        <div className="text-emerald-100 text-xs">Spending</div>
                        <div className="text-white text-lg font-bold">$430.20</div>
                      </div>
                    </div>
                    
                    {/* Transactions */}
                    <div className="bg-white/15 backdrop-blur-lg rounded-xl p-3 border border-white/20">
                      <div className="text-white text-sm mb-3">Recent Transactions</div>
                      <div className="space-y-2">
                        {[1, 2, 3, 4].map(item => (
                          <div key={item} className="bg-white/10 rounded-lg h-8 animate-pulse"></div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* UPDATED: Consistent scroll indicator */}
        <div className="mt-16 text-center">
          <div class="inline-flex flex-col items-center space-y-2">
            <span class="text-emerald-200 text-sm font-medium">Discover Your Journey</span>
            <div class="w-6 h-10 border-2 border-emerald-300 rounded-full flex justify-center">
              <div class="w-1 h-3 bg-emerald-300 rounded-full mt-2 animate-bounce"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* ADDED: Wave transition */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,64C960,75,1056,85,1152,80C1248,75,1344,53,1392,42.7L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z" fill="rgb(243 244 246)"/>
        </svg>
      </div>
    </div>
  );
}