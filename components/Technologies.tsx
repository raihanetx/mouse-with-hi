
import React from 'react';

const techList = [
  'JavaScript (ES6+)',
  'React & Next.js',
  'Node.js',
  'Express',
  'Python & Django',
  'Android (Kotlin/Java)',
  'iOS (Swift)',
  'Firebase',
  'AWS',
  'Docker',
  'Terraform',
  'Cybersecurity Tools',
];

const Technologies = () => {
  return (
    <section id="technologies" className="py-24">
      <h2 className="text-3xl font-bold text-center text-brand-lightest-slate mb-12">
        <span className="font-mono text-brand-blue text-2xl mr-2">03.</span>Technologies We Use
      </h2>
      <ul className="max-w-3xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-4">
        {techList.map((tech, index) => (
          <li key={index} className="flex items-center space-x-3 text-brand-slate font-mono text-sm">
            <svg className="w-4 h-4 text-brand-blue flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
            <span>{tech}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Technologies;
