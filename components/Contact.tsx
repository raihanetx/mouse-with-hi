
import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 text-center">
      <div className="max-w-2xl mx-auto">
        <h2 className="font-mono text-brand-blue mb-4">What's Next?</h2>
        <h3 className="text-4xl md:text-5xl font-bold text-brand-lightest-slate mb-6">Get In Touch</h3>
        <p className="text-brand-slate mb-10">
          Ready to start your next project with us? That's great! Give us a call or send us an email and we will get back to you as soon as possible! We are always excited to discuss a new project, creative idea, or opportunity to be part of your vision.
        </p>
        <a href="mailto:hello@techsquad360.com" className="px-8 py-4 border border-brand-blue text-brand-blue rounded-md hover:bg-brand-blue/10 transition-colors duration-300 font-mono text-lg">
          Book a Free Session
        </a>
      </div>
    </section>
  );
};

export default Contact;
