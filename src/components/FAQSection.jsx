import React, { useState } from 'react';

function FAQ({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-[#CFFDFE]/30 py-4">
      <button 
        className="flex justify-between items-center w-full text-left focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-lg font-medium text-[#094141]">{question}</h3>
        <span className="ml-6 flex-shrink-0">
          <svg className={`w-6 h-6 transform ${isOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        </span>
      </button>
      {isOpen && (
        <div className="mt-2 text-gray-600">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
}

export default function FAQSection() {
  const faqs = [
    {
      question: "How is Finsplore different from other apps?",
      answer: "Unlike traditional finance apps that just show numbers, Finsplore provides AI-driven insights, personalized recommendations, and scenario planning to help users take action on their financial goals."
    },
    {
      question: "What platforms does Finsplore support?",
      answer: "Finsplore is available on iOS, Android, and as a web application, making it accessible from any device."
    },
    {
      question: "Can I connect multiple bank accounts?",
      answer: "Yes, Finsplore supports connections to multiple bank accounts, credit cards, and financial institutions to give you a complete picture of your finances."
    },
    {
      question: "Is my financial data secure?",
      answer: "Absolutely. Finsplore uses bank-level encryption and security practices to ensure your financial data remains private and protected at all times."
    },
    {
      question: "How does Finsplore help me plan my financial future?",
      answer: "Finsplore uses AI to analyze your spending patterns, income, and financial goals to provide personalized recommendations and scenario planning to help you achieve your financial objectives."
    }
  ];

  return (
    <div className="bg-[#B2F7EF]/30 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-heading font-semibold text-[#094141] mb-8">Frequently Asked Questions</h2>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-lg shadow-md p-6">
            {faqs.map((faq, index) => (
              <FAQ key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-gray-600 mb-4">Do you have more questions?</p>
            <a 
              href="#contact" 
              className="inline-block px-6 py-3 rounded-md bg-[#008080] text-white font-medium hover:bg-[#094141] transition-colors"
            >
              Contact us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}