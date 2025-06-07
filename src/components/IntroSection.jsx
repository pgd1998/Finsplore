// Modern IntroSection.jsx
import React from 'react';

export default function IntroSection() {
  return (
    <div className="section-padding bg-gradient-to-b from-gray-50 to-white relative">
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-emerald-100 rounded-full blur-3xl opacity-60"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-teal-100 rounded-full blur-3xl opacity-60"></div>
      
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <div className="animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
            No More Guesswork. Just 
            <span className="block gradient-text mt-2">Smart, Confident Decisions</span>
          </h2>
          
          <div className="max-w-4xl mx-auto space-y-6 text-lg text-gray-600 leading-relaxed">
            <p className="text-xl">
              Finsplore cuts through the clutter of traditional tools and financial confusion by providing an all-in-one, 
              AI-powered platform that's built for clarity, confidence, and control.
            </p>
            <p>
              Our aim is to transform the way you understand and manage your finances by turning complex decisions into personalized, actionable steps.
            </p>
            <p>
              Whether you're just starting out or striving for financial independence, Finsplore helps you track progress, plan smarter, and stay in control every step of the way.
            </p>
          </div>
          
          {/* Stats section */}
          {/* <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { number: "10K+", label: "Users Trust Us" },
              { number: "98%", label: "Satisfaction Rate" },
              { number: "24/7", label: "AI Support" }
            ].map((stat, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 animate-slide-up" style={{animationDelay: `${index * 200}ms`}}>
                <div className="text-3xl font-bold gradient-text mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div> */}
        </div>
      </div>
    </div>
  );
}







