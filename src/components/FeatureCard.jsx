import React from 'react';

export default function FeatureCard({ title, description, icon }) {
  return (
    <div className="bg-[#F8F8FF] rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="mb-4">
        {icon}
      </div>
      <h3 className="text-lg font-heading font-semibold mb-2 text-[#094141]">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
}