import React from 'react';

interface IconWrapperProps {
    children: React.ReactNode;
}

const IconWrapper = ({ children }: IconWrapperProps) => (
    <div className="w-12 h-12 flex items-center justify-center bg-brand-blue/10 rounded-full mb-4">
        <div className="w-6 h-6">{children}</div>
    </div>
);

const commonProps = {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    strokeWidth: 2,
    className: "w-full h-full text-brand-blue"
};

export const DigitalMarketingIcon = () => (
    <IconWrapper>
        <svg {...commonProps}><path strokeLinecap="round" strokeLinejoin="round" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" /><path strokeLinecap="round" strokeLinejoin="round" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" /></svg>
    </IconWrapper>
);

export const CloudComputingIcon = () => (
    <IconWrapper>
        <svg {...commonProps}><path strokeLinecap="round" strokeLinejoin="round" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" /></svg>
    </IconWrapper>
);

export const AppDevIcon = () => (
    <IconWrapper>
        <svg {...commonProps}><path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
    </IconWrapper>
);

export const CyberSecurityIcon = () => (
    <IconWrapper>
        <svg {...commonProps}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 20.917L12 23l9-2.083A12.02 12.02 0 0021 8.984a11.955 11.955 0 01-4.382-.992z" /></svg>
    </IconWrapper>
);

export const SeoIcon = () => (
    <IconWrapper>
        <svg {...commonProps}><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M13 5h8m0 0v8m0-8l-8 8" /></svg>
    </IconWrapper>
);

export const WebDevIcon = () => (
    <IconWrapper>
        <svg {...commonProps}><path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
    </IconWrapper>
);

export const SupportIcon = () => (
    <IconWrapper>
        <svg {...commonProps}><path strokeLinecap="round" strokeLinejoin="round" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
    </IconWrapper>
);

export const SaasIcon = () => (
    <IconWrapper>
        <svg {...commonProps}><path strokeLinecap="round" strokeLinejoin="round" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7l8-4 8 4M12 11v10" /></svg>
    </IconWrapper>
);