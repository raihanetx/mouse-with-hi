
import React from 'react';

const About = () => {
  const whyChooseUs = [
    'Decades of combined experience in various digital domains.',
    'A comprehensive suite of services under one roof.',
    'Proven track record of client success and transformation.',
    'A dedicated partner committed to your long-term growth.'
  ];

  return (
    <section id="about" className="py-24">
      <h2 className="text-3xl font-bold text-center text-brand-lightest-slate mb-12">
        <span className="font-mono text-brand-blue text-2xl mr-2">05.</span>About Us
      </h2>
      <div className="flex flex-col lg:flex-row items-center gap-12">
        <div className="lg:w-1/2">
          <h3 className="text-2xl font-bold text-brand-lightest-slate mb-4">Driven by a Mission to Empower Businesses</h3>
          <p className="text-brand-slate mb-4">
            At TechSquad360, we are driven by a mission to provide comprehensive, cutting-edge digital services. We empower businesses to thrive with our innovative solutions tailored to meet their unique needs and challenges in an ever-evolving digital world.
          </p>
          <p className="text-brand-slate">
            Our team is our greatest asset. A squad of passionate strategists, designers, developers, and marketers dedicated to turning your vision into reality.
          </p>
        </div>
        <div className="lg:w-1/2">
            <h3 className="text-2xl font-bold text-brand-lightest-slate mb-4">Why Choose Us?</h3>
            <ul className="space-y-3">
                {whyChooseUs.map((item, index) => (
                    <li key={index} className="flex items-start space-x-3 text-brand-slate">
                       <svg className="w-5 h-5 text-brand-blue flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                        <span>{item}</span>
                    </li>
                ))}
            </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
