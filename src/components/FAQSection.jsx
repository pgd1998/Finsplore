// Modern FAQSection.jsx
import React, { useState } from 'react';

function FAQ({ question, answer, index }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-gray-200 rounded-2xl mb-4 overflow-hidden bg-white shadow-sm hover:shadow-md transition-all duration-300">
      <button 
        className="flex justify-between items-center w-full text-left p-6 hover:bg-gray-50 transition-colors focus:outline-none focus:bg-gray-50"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-lg font-semibold text-gray-900 pr-8">{question}</h3>
        <div className="flex-shrink-0">
          <div className={`w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center transition-all duration-300 ${isOpen ? 'bg-emerald-500' : ''}`}>
            <svg 
              className={`w-5 h-5 transition-all duration-300 ${isOpen ? 'rotate-180 text-white' : 'text-emerald-600'}`} 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </button>
      <div className={`transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
        <div className="px-6 pb-6">
          <div className="border-t border-gray-100 pt-4">
            <p className="text-gray-600 leading-relaxed">{answer}</p>
          </div>
        </div>
      </div>
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
    <div className="section-padding bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-32 h-32 bg-emerald-100 rounded-full blur-3xl opacity-60 animate-float"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-teal-100 rounded-full blur-3xl opacity-60 animate-float" style={{animationDelay: '2s'}}></div>
      </div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to know about Finsplore
          </p>
        </div>
        
        <div className="animate-slide-up">
          {faqs.map((faq, index) => (
            <FAQ key={index} question={faq.question} answer={faq.answer} index={index} />
          ))}
        </div>
        
        <div className="mt-16 text-center animate-fade-in">
          <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl p-8 border border-emerald-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Still have questions?
            </h3>
            <p className="text-gray-600 mb-6">
              Can't find the answer you're looking for? Please chat to our friendly team.
            </p>
            <a 
              href="#contact" 
              className="btn-primary inline-flex items-center"
            >
              Get in touch
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

