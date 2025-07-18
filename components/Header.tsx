
import React, { useState, useEffect } from 'react';

const Logo = () => (
    <div className="flex items-center space-x-2">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-brand-blue" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
        </svg>
        <span className="text-2xl font-bold text-brand-lightest-slate">TechSquad360</span>
    </div>
);


const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = ['Services', 'About', 'Contact'];

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-brand-navy/80 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
      <nav className="container mx-auto flex items-center justify-between p-4 px-6 md:px-10 lg:px-20">
        <a href="#home" aria-label="Homepage">
            <Logo />
        </a>
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link, index) => (
            <a key={link} href={`#${link.toLowerCase()}`} className="text-brand-light-slate hover:text-brand-blue transition-colors duration-300 font-mono text-sm">
              <span className="text-brand-blue">0{index + 1}.</span> {link}
            </a>
          ))}
          <a href="#contact" className="px-4 py-2 border border-brand-blue text-brand-blue rounded-md hover:bg-brand-blue/10 transition-colors duration-300 font-mono text-sm">
            Book a Session
          </a>
        </div>
        <button className="md:hidden text-brand-blue">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </nav>
    </header>
  );
};

export default Header;
