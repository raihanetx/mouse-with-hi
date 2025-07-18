
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Process from './components/Process';
import Technologies from './components/Technologies';
import Blog from './components/Blog';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-brand-navy font-sans text-brand-slate overflow-x-hidden">
      <Header />
      <main className="container mx-auto px-6 md:px-10 lg:px-20">
        <Hero />
        <Services />
        <Process />
        <Technologies />
        <Blog />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
