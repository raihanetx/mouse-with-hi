
import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center py-20">
      <div className="max-w-4xl">
        <p className="text-brand-blue font-mono text-lg mb-4">Welcome to TechSquad360.</p>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-brand-lightest-slate mb-4">
          Complete Tech Solutions,
        </h1>
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-brand-slate mb-8">
          Engineered for Growth.
        </h2>
        <p className="max-w-xl text-lg text-brand-slate mb-12">
          We empower your business with innovative technology solutions, from cutting-edge digital marketing to robust cybersecurity, ensuring you stay ahead in the digital landscape.
        </p>
        <a href="#services" className="px-8 py-4 bg-brand-blue text-white font-bold rounded-md hover:bg-opacity-90 transition-all duration-300 shadow-lg shadow-brand-blue/20">
          Explore Our Services
        </a>
      </div>
    </section>
  );
};

export default Hero;
