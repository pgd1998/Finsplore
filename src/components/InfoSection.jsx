import React from 'react';

export default function InfoSection() {
  return (
    <div className="bg-gradient-to-b from-[#094141] to-[#008080] py-16 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-heading font-semibold mb-4">More Than Just Tracking –</h2>
          <h3 className="text-3xl font-heading font-semibold mb-8 text-[#CFFDFE]">
            It's Intelligent Financial Guidance
          </h3>
          <p className="max-w-3xl mx-auto text-white/90">
            Unlike typical finance apps that only display numbers, Finsplore provides AI-driven insights and smart 
            predictions to help users make proactive decisions.
          </p>
        </div>
        
        <div className="space-y-20">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="md:w-1/2">
              <h3 className="text-2xl font-heading font-semibold mb-4">Personalized, Not Generic</h3>
              <p className="text-white/80">
                While other financial platforms provide broad, one-size-fits-all advice, Finsplore offers truly personalized financial insights. 
                By analyzing an individual's income, spending habits, and financial goals, our AI-driven platform tailors recommendations that 
                align with users' unique financial situations.
              </p>
            </div>
            <div className="md:w-1/2 bg-white/10 rounded-lg h-60 flex items-center justify-center">
              <span className="text-white/50">Image Placeholder</span>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row-reverse items-center gap-10">
            <div className="md:w-1/2">
              <h3 className="text-2xl font-heading font-semibold mb-4">Goal-Oriented, Not Just Budgeting</h3>
              <p className="text-white/80">
                Most financial apps stop at tracking expenses, but Finsplore goes beyond budgeting. With our goal-oriented approach, 
                users can set short-term and long-term financial goals, such as buying a home, saving for a dream vacation, or retiring early.
              </p>
            </div>
            <div className="md:w-1/2 bg-white/10 rounded-lg h-60 flex items-center justify-center">
              <span className="text-white/50">Image Placeholder</span>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="md:w-1/2">
              <h3 className="text-2xl font-heading font-semibold mb-4">Automation That Saves Time</h3>
              <p className="text-white/80">
                Managing personal finances shouldn't feel like a chore. That's why Finsplore automates the heavy lifting. 
                Instead of manually categorizing expenses or calculating future savings, our AI-powered system provides 
                real-time analysis and intelligent recommendations.
              </p>
            </div>
            <div className="md:w-1/2 bg-white/10 rounded-lg h-60 flex items-center justify-center">
              <span className="text-white/50">Image Placeholder</span>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row-reverse items-center gap-10">
            <div className="md:w-1/2">
              <h3 className="text-2xl font-heading font-semibold mb-4">Empowers Financial Growth, Not Just Monitoring</h3>
              <p className="text-white/80">
                Most financial apps tell you where your money is going, but Finsplore helps you take control of your financial future. 
                By analyzing trends, projecting future cash flow, and offering tailored investment strategies, our platform empowers 
                users to grow their wealth.
              </p>
            </div>
            <div className="md:w-1/2 bg-white/10 rounded-lg h-60 flex items-center justify-center">
              <span className="text-white/50">Image Placeholder</span>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="md:w-1/2">
              <h3 className="text-2xl font-heading font-semibold mb-4">A Trusted Financial Companion</h3>
              <p className="text-white/80">
                Managing money can be overwhelming, but Finsplore makes it easier with a friendly AI-powered assistant that 
                guides users every step of the way. Our clean, modern interface ensures a seamless user experience, while our 
                AI-driven insights provide clarity and confidence.
              </p>
            </div>
            <div className="md:w-1/2 bg-white/10 rounded-lg h-60 flex items-center justify-center">
              <span className="text-white/50">Image Placeholder</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}