import React from 'react';

export default function BenefitCard({ icon, title, description }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border-t-4 border-[#008080]">
      <div className="text-[#008080] text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-heading font-semibold mb-2 text-[#094141]">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}