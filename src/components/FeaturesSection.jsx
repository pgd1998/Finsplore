import React from 'react';
import FeatureCard from './FeatureCard';

export default function FeaturesSection() {
  const features = [
    {
      title: "Automated Transaction Syncing",
      description: "Connects to multiple bank accounts and auto-categorizes transactions for effortless financial tracking.",
      icon: <img src="/icons/transaction.svg" alt="Transactions" className="h-12 w-12" />
    },
    {
      title: "AI-Driven Financial Predictions",
      description: "Uses intelligent forecasting to provide personalized financial insights and optimize decision making.",
      icon: <img src="/icons/ai.svg" alt="AI" className="h-12 w-12" />
    },
    {
      title: "Chatbot for Financial Guidance",
      description: "Offers real time answers and recommendations based on individual financial situations.",
      icon: <img src="/icons/chatbot.svg" alt="Chatbot" className="h-12 w-12" />
    },
    {
      title: "Personalized Dashboard",
      description: "A user-friendly interface offering a clear snapshot of income, expenses, savings, and financial goals.",
      icon: <img src="/icons/dashboard.svg" alt="Dashboard" className="h-12 w-12" />
    },
    {
      title: "Goal-Based Scenario Planning",
      description: "Helps users visualize different financial paths to make better long term decisions.",
      icon: <img src="/icons/goal.svg" alt="Goals" className="h-12 w-12" />
    },
    {
      title: "Predictive Financial Planning",
      description: "Uses AI to anticipate future financial trends and guide users toward better financial habits.",
      icon: <img src="/icons/planning.svg" alt="Planning" className="h-12 w-12" />
    }
  ];

  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-heading font-semibold text-[#094141] mb-4">Key Features</h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
            />
          ))}
        </div>
      </div>
    </div>
  );
}