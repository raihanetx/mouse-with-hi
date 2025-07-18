
import React from 'react';

const processSteps = [
  { number: '01', title: 'Consultation', description: 'We start by deeply understanding your business, goals, and challenges.' },
  { number: '02', title: 'Planning', description: 'A strategic roadmap is created, outlining milestones, timelines, and deliverables.' },
  { number: '03', title: 'Execution', description: 'Our expert team builds your solution with precision, quality, and cutting-edge tech.' },
  { number: '04', title: 'Testing', description: 'Rigorous testing ensures your solution is bug-free, secure, and performs flawlessly.' },
  { number: '05', title: 'Launch & Scale', description: 'We deploy your solution and provide ongoing support to help you grow.' },
];

const Process = () => {
  return (
    <section id="process" className="py-24">
      <h2 className="text-3xl font-bold text-center text-brand-lightest-slate mb-16">
        <span className="font-mono text-brand-blue text-2xl mr-2">02.</span>Our Proven Process
      </h2>
      <div className="relative max-w-2xl mx-auto">
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-brand-light-navy"></div>
        {processSteps.map((step, index) => (
          <div key={index} className="relative mb-12 flex items-center w-full">
            <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
              <p className="text-brand-blue font-mono font-bold text-lg">{step.number}</p>
              <h3 className="text-xl font-bold text-brand-lightest-slate mb-2">{step.title}</h3>
              <p className="text-brand-slate text-sm">{step.description}</p>
            </div>
            <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-brand-blue rounded-full border-4 border-brand-navy"></div>
            <div className={`w-1/2 ${index % 2 === 0 ? 'pl-8' : 'pr-8'}`}></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Process;
