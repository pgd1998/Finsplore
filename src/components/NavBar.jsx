import React, { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <nav className="bg-[#094141] text-white fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <a href="/" className="text-2xl font-heading font-bold text-white">
              Finsplore
            </a>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-white hover:text-[#CFFDFE]">Home</a>
            <a href="/about" className="text-white hover:text-[#CFFDFE]">About</a>
            <a href="#services" className="text-white hover:text-[#CFFDFE]">Services</a>
            <a href="#pricing" className="text-white hover:text-[#CFFDFE]">Pricing</a>
            <a href="#how-it-works" className="text-white hover:text-[#CFFDFE]">How it works</a>
            <a href="#contact" className="text-white hover:text-[#CFFDFE]">Contact</a>
          </div>
          
          <div className="flex items-center">
            <a 
              href="#try-free" 
              className="px-4 py-2 rounded-md bg-white text-[#094141] font-medium hover:bg-[#CFFDFE] transition-colors"
            >
              Try for Free
            </a>
            
            {/* Mobile menu button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="ml-4 md:hidden text-white"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#094141] pb-4 px-4">
          <a href="/" className="block py-2 text-white hover:text-[#CFFDFE]">Home</a>
          <a href="#info-section" className="block py-2 text-white hover:text-[#CFFDFE]">About</a>
          <a href="#services" className="block py-2 text-white hover:text-[#CFFDFE]">Services</a>
          <a href="#pricing" className="block py-2 text-white hover:text-[#CFFDFE]">Pricing</a>
          <a href="#how-it-works" className="block py-2 text-white hover:text-[#CFFDFE]">How it works</a>
          <a href="#contact" className="block py-2 text-white hover:text-[#CFFDFE]">Contact</a>
        </div>
      )}
    </nav>
  );
}