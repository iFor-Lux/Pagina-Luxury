"use client";

import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false); // Cerrar menú móvil al hacer clic
  };

  return (
    <nav 
      className={`fixed top-6 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-500 ${
        isScrolled ? 'w-80' : 'w-[90vw] sm:w-[80vw] md:w-[60vw] lg:w-[50vw] xl:w-[40vw]'
      }`}
      style={{
        padding: isScrolled ? '0.75rem 3rem' : '1rem 2rem',
        border: '1px solid rgba(255, 255, 255, 0.3)',
        color: 'white',
        fontWeight: 'lighter',
        letterSpacing: '0.1em',
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        transition: 'all 0.5s ease',
        backdropFilter: 'blur(5px)',
        borderRadius: '55px',
        cursor: 'pointer',
        fontFamily: 'SF Regular, sans-serif',
        minWidth: '280px',
        maxWidth: '1200px',
      }}
    >
      <div className="flex items-center justify-between w-full">
        {/* Logo */}
        <div 
          className={`text-lg sm:text-xl font-bold text-white cursor-pointer hover:text-white/80 transition-colors duration-300 flex-shrink-0 transform transition-transform duration-500 ease-out ${
            isScrolled ? 'translate-x-3' : 'translate-x-0'
          }`}
          onClick={() => scrollToSection('home')}
        >
          LUXURY
        </div>

        {/* Navigation Links - Desktop */}
        <div className={`hidden lg:flex items-center justify-center mx-4 overflow-hidden transition-all duration-500 ease-out ${
          isScrolled ? 'max-w-0 opacity-0 scale-95' : 'flex-1 max-w-[640px] opacity-100 scale-100'
        }`}>
          <div className="flex items-center justify-center space-x-3 lg:space-x-4 xl:space-x-6 2xl:space-x-8">
            <button
              onClick={() => scrollToSection('services')}
              className="text-white/80 hover:text-white transition-colors duration-300 text-sm px-1 lg:px-2"
            >
              Servicios
            </button>
            <button
              onClick={() => scrollToSection('testimonials')}
              className="text-white/80 hover:text-white transition-colors duration-300 text-sm px-1 lg:px-2"
            >
              Testimonios
            </button>
            <button
              onClick={() => scrollToSection('pricing')}
              className="text-white/80 hover:text-white transition-colors duration-300 text-sm px-1 lg:px-2"
            >
              Precios
            </button>
          </div>
        </div>

        {/* CTA Button - Desktop */}
        <div className={`hidden lg:block flex-shrink-0 transform transition-transform duration-500 ease-out ${
          isScrolled ? '-translate-x-3' : 'translate-x-0'
        }`}>
          <button 
            className="text-white/80 hover:text-white transition-colors duration-300 text-sm px-2"
          >
            Contacto
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center justify-center">
          <button 
            className="text-white/80 hover:text-white transition-colors duration-300 flex items-center justify-center w-8 h-8"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={`lg:hidden absolute top-full left-0 right-0 mt-2 bg-black/10 backdrop-blur-md border border-white/20 rounded-lg p-4 transition-all duration-300 ease-in-out transform ${
        isMobileMenuOpen 
          ? 'opacity-100 scale-100 translate-y-0' 
          : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'
      }`}>
        <div className="flex flex-col space-y-3">
          <button
            onClick={() => scrollToSection('services')}
            className="text-white/80 hover:text-white transition-colors duration-300 text-sm text-left"
          >
            Servicios
          </button>
          <button
            onClick={() => scrollToSection('testimonials')}
            className="text-white/80 hover:text-white transition-colors duration-300 text-sm text-left"
          >
            Testimonios
          </button>
          <button
            onClick={() => scrollToSection('pricing')}
            className="text-white/80 hover:text-white transition-colors duration-300 text-sm text-left"
          >
            Precios
          </button>
          <button 
            className="text-white/80 hover:text-white transition-colors duration-300 text-sm text-left"
          >
            Contacto
          </button>
        </div>
      </div>
    </nav>
  );
}
