import React from 'react';

export default function ContactSection() {
  return (
    <div id="contact" className="bg-[#E5DEFE]/50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-heading font-semibold text-[#094141] mb-4">We'd love to hear from you!</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Whether you have questions, feedback, or just want to say hello, feel free to reach out.
          </p>
        </div>
        
        <div className="max-w-xl mx-auto">
          <form className="bg-white rounded-lg shadow-md p-8">
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name</label>
              <input 
                type="text" 
                id="name" 
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#008080]"
                placeholder="Your name"
              />
            </div>
            
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
              <input 
                type="email" 
                id="email" 
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#008080]"
                placeholder="your.email@example.com"
              />
            </div>
            
            <div className="mb-6">
              <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
              <textarea 
                id="message" 
                rows="4" 
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#008080]"
                placeholder="Your message here..."
              ></textarea>
            </div>
            
            <button 
              type="submit" 
              className="w-full px-6 py-3 bg-[#008080] text-white font-medium rounded-md hover:bg-[#094141] transition-colors"
            >
              Get started
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}