// Modern InfoSection.jsx
import React from 'react';

export default function InfoSection() {
  const sections = [
    {
      title: "Plan Smarter, Not Harder",
      description: "AI-driven guidance and predictive planning to help you make confident financial decisions fast.",
      image: "📊"
    },
    {
      title: "Total Clarity",
      description: "See your entire financial life - income, expenses, goals, and growth, on one clean, intuitive dashboard.",
      image: "🎯"
    },
    {
      title: "Zero Friction",
      description: "Automatic syncing, smart categorization, and seamless tracking across accounts. Say goodbye to spreadsheets.",
      image: "⚡"
    },
    {
      title: "Always-On Support",
      description: "Ask anything, anytime. Our friendly AI chatbot gives real-time insights and tips on budgeting, saving, and investing",
      image: "🤖"
    },
    {
      title: "Plan with Purpose",
      description: "Compare 'what-if' scenarios, simulate your financial future, and choose the smartest path to reach your goals faster with goal-based scenario planning built right in.",
      image: "🚀"
    }
  ];

  return (
    <div className="section-padding bg-gradient-to-br from-emerald-900 via-teal-800 to-emerald-900 text-white relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-emerald-400/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-teal-400/10 rounded-full blur-3xl animate-float" style={{animationDelay: '3s'}}></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-shadow">
            Finsplore isn't just another finance app
          </h2>
          <p className="text-xl text-emerald-100 max-w-4xl mx-auto leading-relaxed">
            It's your personal AI-powered money coach, designed to simplify the way you track, plan, and grow.
          </p>
        </div>
        
        <div className="space-y-24">
          {sections.map((section, index) => (
            <div 
              key={index} 
              className={`flex flex-col lg:flex-row items-center gap-12 ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              } animate-slide-up`}
              style={{animationDelay: `${index * 200}ms`}}
            >
              <div className="lg:w-1/2 space-y-6">
                <h3 className="text-3xl font-bold text-white text-shadow">
                  {section.title}
                </h3>
                <p className="text-lg text-emerald-100 leading-relaxed">
                  {section.description}
                </p>
                <div className="inline-flex items-center text-emerald-300 hover:text-white transition-colors cursor-pointer group">
                  <span className="font-semibold">Learn more</span>
                  <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
              </div>
              <div className="lg:w-1/2 flex justify-center">
                <div className="glass-card rounded-3xl w-80 h-64 flex items-center justify-center text-6xl hover:scale-105 transition-transform duration-300">
                  {section.image}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}