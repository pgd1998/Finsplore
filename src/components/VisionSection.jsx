import React from 'react';

export default function VisionSection() {
  return (
    <div className="bg-[#E6E6FA] py-16"> {/* Lavender background for the full section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl shadow-md p-8 text-center">
          <h2 className="text-2xl font-heading font-semibold text-black mb-4"> {/* Black font color */}
            Our Vision
          </h2>
          <p className="text-black max-w-3xl mx-auto"> {/* Black font color */}
            Empowering individuals with swift, simplified financial decisions and personalized solutions for a brighter financial future.
          </p>
        </div>
      </div>
    </div>
  );
}