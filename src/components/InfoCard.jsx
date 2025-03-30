import React from 'react';

export default function InfoCard({ title, description }) {
  return (
    <div className="bg-[#F8F8FF] p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <h3 className="text-xl font-heading font-semibold mb-3 text-[#008080]">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}