'use client';

import { Quote } from 'lucide-react';

export default function WhatsAppButton() {
  const handleClick = (e) => {
    const contactSection = document.getElementById('contact-section');
    if (contactSection) {
      e.preventDefault();
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <a
      href="/#contact-section"
      onClick={handleClick}
      className="fixed bottom-6 right-6 bg-teal hover:bg-teal-dark text-white p-3.5 rounded-full shadow-2xl z-50 flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 group"
      aria-label="Get Quote"
    >
      {/* Pulse Rings */}
      <span className="absolute inset-0 rounded-full bg-teal/40 animate-ping group-hover:animate-none -z-10"></span>
      <span className="absolute inset-0 rounded-full bg-teal/20 animate-pulse -z-10"></span>
      
      <Quote className="h-6 w-6 fill-white text-white" />
      
      {/* Tooltip */}
      <span className="absolute right-14 bg-navy text-white text-xs font-semibold py-1.5 px-3 rounded shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none border border-navy-light/10">
        Get Quote
      </span>
    </a>
  );
}
