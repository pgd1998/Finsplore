// Modern VisionSection.jsx
import React from 'react';

export default function VisionSection() {
  return (
    <div className="section-padding bg-gradient-to-r from-gray-50 to-emerald-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 right-20 w-32 h-32 bg-emerald-200 rounded-full blur-3xl opacity-60 animate-float"></div>
        <div className="absolute bottom-20 left-20 w-40 h-40 bg-teal-200 rounded-full blur-3xl opacity-60 animate-float" style={{animationDelay: '2s'}}></div>
      </div>
      
      <div className="max-w-5xl mx-auto text-center relative z-10 animate-fade-in">
        <div className="modern-card p-12 lg:p-16 bg-white">
          {/* Icon */}
          <div className="mb-8">
            <div className="w-20 h-20 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center mx-auto shadow-glow">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Our Vision
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Empowering individuals with swift, simplified financial decisions and personalized solutions for a brighter financial future.
          </p>
          
          {/* Supporting text */}
          <div className="mt-12 grid md:grid-cols-3 gap-8 text-left">
            {[
              {
                icon: "🎯",
                title: "Clarity",
                description: "Making complex financial decisions simple and understandable"
              },
              {
                icon: "🚀",
                title: "Growth",
                description: "Helping you build wealth through smart, informed choices"
              },
              {
                icon: "🔮",
                title: "Future",
                description: "Planning for tomorrow with AI-powered insights today"
              }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl mb-4">{item.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}