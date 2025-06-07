import React from 'react';

export default function FeatureCard({ title, description, icon, index }) {
  return (
    <div 
      className="modern-card p-8 group relative overflow-hidden"
      style={{animationDelay: `${index * 100}ms`}}
    >
      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 to-teal-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      <div className="relative z-10">
        {/* Icon container */}
        <div className="mb-6 relative">
          <div className="w-16 h-16 bg-gradient-to-r from-emerald-100 to-teal-100 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            {icon}
          </div>
          {/* Glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
        </div>
        
        <h3 className="text-xl font-bold mb-4 text-gray-900 group-hover:text-emerald-700 transition-colors">
          {title}
        </h3>
        <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">
          {description}
        </p>
        
        {/* Learn more link */}
        {/* <div className="mt-6 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
          <a href="#" className="text-emerald-600 font-semibold text-sm hover:text-emerald-700 inline-flex items-center">
            Learn more
            <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div> */}
      </div>
    </div>
  );
}