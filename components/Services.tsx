import React from 'react';
import { DigitalMarketingIcon, CloudComputingIcon, AppDevIcon, CyberSecurityIcon, SeoIcon, WebDevIcon, SupportIcon, SaasIcon } from './icons/ServiceIcons';

const servicesData = [
  { icon: <DigitalMarketingIcon />, title: 'Digital Marketing', description: 'Maximize your online presence with targeted campaigns across social media, email, and digital ads.' },
  { icon: <CloudComputingIcon />, title: 'Cloud Computing', description: 'Scalable and secure cloud solutions to optimize your business operations and storage needs.' },
  { icon: <AppDevIcon />, title: 'App Development', description: 'Intuitive and powerful mobile applications for Android and iOS platforms tailored to your needs.' },
  { icon: <CyberSecurityIcon />, title: 'Cyber Security', description: 'Protect your digital assets and business from cyber threats with top-notch security solutions.' },
  { icon: <SeoIcon />, title: 'SEO Optimization', description: 'Rank higher in search results and drive more organic traffic with our expert SEO strategies.' },
  { icon: <WebDevIcon />, title: 'Web Development', description: 'Create fast, responsive, and user-friendly websites that convert visitors into customers.' },
  { icon: <SupportIcon />, title: 'Technical/IT Support', description: 'Reliable and responsive tech support services to keep your systems running smoothly 24/7.' },
  { icon: <SaasIcon />, title: 'SaaS Solutions', description: 'Develop and deploy custom SaaS products that streamline your operations and drive revenue.' },
];

const ServiceCard = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => (
  <div className="bg-brand-light-navy p-6 rounded-lg shadow-md hover:-translate-y-2 transition-transform duration-300 cursor-pointer flex flex-col">
    <div className="text-brand-blue mb-4">{icon}</div>
    <h3 className="text-xl font-bold text-brand-lightest-slate mb-2">{title}</h3>
    <p className="text-brand-slate text-sm flex-grow">{description}</p>
  </div>
);

const Services = () => {
  return (
    <section id="services" className="py-24">
      <h2 className="text-3xl font-bold text-center text-brand-lightest-slate mb-12">
        <span className="font-mono text-brand-blue text-2xl mr-2">01.</span>Our Services
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {servicesData.map((service, index) => (
          <ServiceCard key={index} icon={service.icon} title={service.title} description={service.description} />
        ))}
      </div>
    </section>
  );
};

export default Services;