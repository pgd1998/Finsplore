import React from 'react';

export default function InfoSection() {
  return (
    <div id="info-section" className="bg-gradient-to-b from-[#094141] to-[#008080] py-16 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-heading font-semibold mb-4">Finsplore isn’t just another finance app </h2>
          {/* <h3 className="text-3xl font-heading font-semibold mb-8 text-[#CFFDFE]">
          it’s your personal AI-powered money coach, designed to simplify the way you track, plan, and grow.
          </h3> */}
          <p className="max-w-3xl mx-auto text-[#CFFDFE]">
          It’s your personal AI-powered money coach, designed to simplify the way you track, plan, and grow.
          </p>
        </div>
        
        <div className="space-y-20">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="md:w-1/2">
              <h3 className="text-2xl font-heading font-semibold mb-4"> Plan Smarter, Not Harder</h3>
              <p className="text-white/80">
              AI -  driven guidance and predictive planning to help you make confident financial decisions fast.
              </p>
            </div>
            <div className="md:w-1/2 bg-white/10 rounded-lg h-60 flex items-center justify-center">
              <span className="text-white/50">Image Placeholder</span>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row-reverse items-center gap-10">
            <div className="md:w-1/2">
              <h3 className="text-2xl font-heading font-semibold mb-4">Total Clarity</h3>
              <p className="text-white/80">
              See your entire financial life—income, expenses, goals, and growth—on one clean, intuitive dashboard.
              </p>
            </div>
            <div className="md:w-1/2 bg-white/10 rounded-lg h-60 flex items-center justify-center">
              <span className="text-white/50">Image Placeholder</span>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="md:w-1/2">
              <h3 className="text-2xl font-heading font-semibold mb-4">Zero Friction</h3>
              <p className="text-white/80">
              Automatic syncing, smart categorization, and seamless tracking across accounts. Say goodbye to spreadsheets.
              </p>
            </div>
            <div className="md:w-1/2 bg-white/10 rounded-lg h-60 flex items-center justify-center">
              <span className="text-white/50">Image Placeholder</span>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row-reverse items-center gap-10">
            <div className="md:w-1/2">
              <h3 className="text-2xl font-heading font-semibold mb-4">Always-On Support</h3>
              <p className="text-white/80">
              Ask anything, anytime. Our friendly AI chatbot gives real-time insights and tips on budgeting, saving, and investing
              </p>
            </div>
            <div className="md:w-1/2 bg-white/10 rounded-lg h-60 flex items-center justify-center">
              <span className="text-white/50">Image Placeholder</span>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="md:w-1/2">
              <h3 className="text-2xl font-heading font-semibold mb-4">Plan with Purpose</h3>
              <p className="text-white/80">
              Compare 'what-if' scenarios, simulate your financial future, and choose the smartest path to reach your goals faster—with goal-based scenario planning built right in.
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