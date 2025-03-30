import React from 'react';

export default function CTA({ text, buttonText, buttonUrl = "#" }) {
  return (
    <div className="bg-[#008080] py-14 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-heading font-bold text-white mb-6">
          {text}
        </h2>
        <a 
          href={buttonUrl} 
          className="inline-block px-6 py-3 rounded-md bg-white text-[#008080] font-medium hover:bg-[#CFFDFE] transition-colors"
        >
          {buttonText}
        </a>
      </div>
    </div>
  );
}