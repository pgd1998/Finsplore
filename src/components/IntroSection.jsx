import React from 'react';

export default function IntroSection() {
  return (
    // #cef5f0
    // #c4f5ef
    <div className="bg-[#cef5f0] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-[#008080] mb-6">
            Finsplore isn't just a financial tracking tool
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Yet, many young professionals struggle with complex financial tools, lack financial literacy, or 
            simply don't have the time to track their expenses and plan their future effectively.
          </p>
          <p className="text-gray-600 max-w-2xl mx-auto mt-4">
            Most existing solutions only display financial data—without guiding users toward smarter 
            financial decisions.
          </p>
        </div>
      </div>
    </div>
  );
}