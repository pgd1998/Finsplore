import React, { useState, useEffect } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-lg shadow-lg border-b border-gray-100' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <a href="/" className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              Finsplore
            </a>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            {['Home', 'About', 'Services', 'Pricing', 'How it works', 'Contact', 'Team'].map((item) => (
              <a 
                key={item}
                href={item === 'Home' ? '/' : item === 'About' ? '/about' : item === 'How it works' ? '/how-it-works' : item === 'Team' ? '/team' : `#${item.toLowerCase()}`}
                className={`font-medium transition-colors hover:text-emerald-600 ${
                  isScrolled ? 'text-gray-700' : 'text-white'
                }`}
              >
                {item}
              </a>
            ))}
          </div>
          
          <div className="flex items-center space-x-4">
            <a href="#try-free" className="btn-primary">
              Try for Free
            </a>
            
            {/* Mobile menu button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`md:hidden p-2 rounded-lg transition-colors ${
                isScrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'
              }`}
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-xl border-t border-gray-100 animate-slide-up">
          <div className="px-4 py-6 space-y-4">
            {['Home', 'About', 'Services', 'Pricing', 'How it works', 'Contact', 'Team'].map((item) => (
              <a 
                key={item}
                href={item === 'Home' ? '/' : item === 'About' ? '/about' : item === 'How it works' ? '/how-it-works' : item === 'Team' ? '/team' : `#${item.toLowerCase()}`}
                className="block py-2 text-gray-700 font-medium hover:text-emerald-600 transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}