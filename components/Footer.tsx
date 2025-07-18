import React from 'react';

interface SocialIconProps {
    href: string;
    children: React.ReactNode;
}

const SocialIcon = ({ href, children }: SocialIconProps) => (
    <a href={href} target="_blank" rel="noopener noreferrer" className="text-brand-slate hover:text-brand-blue transition-colors">
        {children}
    </a>
);


const Footer = () => {
    const servicesLinks = ['SEO', 'Digital Marketing', 'Web to App', 'Web Development', 'App Development', 'Cybersecurity', 'IT Support', 'SaaS Solutions', 'Cloud Computing'];
    const quickLinks = ['About Us', 'Services', 'Blog', 'Contact'];

    return (
        <footer className="bg-brand-navy border-t border-brand-light-navy/20">
            <div className="container mx-auto px-6 md:px-10 lg:px-20 py-16">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="col-span-1 md:col-span-2 lg:col-span-1">
                        <h4 className="text-lg font-bold text-brand-lightest-slate mb-4">TechSquad360</h4>
                        <p className="text-sm text-brand-slate mb-4">Your partner in digital transformation.</p>
                        <div className="flex space-x-4">
                            <SocialIcon href="#"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg></SocialIcon>
                            <SocialIcon href="#"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg></SocialIcon>
                            <SocialIcon href="#"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg></SocialIcon>
                        </div>
                    </div>
                    <div>
                        <h5 className="font-bold text-brand-lightest-slate mb-4">Quick Links</h5>
                        <ul className="space-y-2">
                            {quickLinks.map(link => <li key={link}><a href={`#${link.toLowerCase().replace(' ', '')}`} className="text-sm text-brand-slate hover:text-brand-blue transition-colors">{link}</a></li>)}
                        </ul>
                    </div>
                    <div className="md:col-span-2 lg:col-span-2">
                        <h5 className="font-bold text-brand-lightest-slate mb-4">Our Services</h5>
                        <ul className="grid grid-cols-2 gap-2">
                           {servicesLinks.map(link => <li key={link}><a href="#services" className="text-sm text-brand-slate hover:text-brand-blue transition-colors">{link}</a></li>)}
                        </ul>
                    </div>
                </div>
            </div>
            <div className="border-t border-brand-light-navy/20 py-6">
                <p className="text-center text-xs text-brand-slate">© {new Date().getFullYear()} TechSquad360. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;