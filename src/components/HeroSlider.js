'use client';

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, TrendingUp, Sparkles, CheckCircle2 } from 'lucide-react';

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: 'Expert Stock Market Research',
      subtitle: 'Unlock High-Potential Investment Ideas',
      description: 'Get research recommendations backed by deep fundamental analysis and data-driven technical indicators to grow your wealth.',
      badge: 'SEBI Registered Research Analyst',
      icon: <TrendingUp className="h-5 w-5 text-gold" />,
    },
    {
      title: 'Plan Your Investments Smartly',
      subtitle: 'Structured Advice for Long-Term Wealth',
      description: 'Align your investment horizons with clear entry, target, and stop-loss advisory calls tailored for active retail and HNI investors.',
      badge: 'Tailored Investment Horizon',
      icon: <Sparkles className="h-5 w-5 text-gold" />,
    },
    {
      title: 'Numbers Speak Louder Than Words',
      subtitle: 'Disciplined Approach with 1:2 Risk-Reward',
      description: 'Minimize risk and maximize returns. Our advisory calls are designed with robust risk management parameters.',
      badge: 'Proven Analytical Models',
      icon: <CheckCircle2 className="h-5 w-5 text-gold" />,
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact-section');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full h-[380px] md:h-[450px] overflow-hidden bg-white border-b border-gray-100">
      
      {/* Light Abstract Financial Chart Background (SVG Grid) */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none select-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#e5e7eb" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
          
          {/* Simulated chart line */}
          <path
            d="M -50 450 Q 150 300 350 380 T 750 200 T 1150 280 T 1550 100 T 1950 150 L 1950 600 L -50 600 Z"
            fill="rgba(13, 148, 136, 0.03)"
            stroke="rgba(13, 148, 136, 0.12)"
            strokeWidth="3"
          />
          <path
            d="M -50 480 Q 200 350 450 420 T 850 250 T 1250 330 T 1650 150 L 1950 190"
            fill="none"
            stroke="rgba(10, 31, 68, 0.05)"
            strokeWidth="2"
            strokeDasharray="5,5"
          />
        </svg>
      </div>

      {/* Slide Content wrapper */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full relative z-10 flex items-center">
        <div className="relative w-full h-full max-w-3xl">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`transition-all duration-700 ease-in-out absolute inset-y-0 left-0 right-0 flex flex-col justify-center items-start ${
                currentSlide === index
                  ? 'opacity-100 translate-y-0 pointer-events-auto'
                  : 'opacity-0 translate-y-4 pointer-events-none'
              }`}
            >
              {/* Badge */}
              <div className="flex items-center space-x-2 bg-navy/5 border border-navy/10 rounded-full py-1.5 px-4 mb-3">
                {slide.icon}
                <span className="text-xs font-bold text-navy tracking-wider uppercase font-poppins">
                  {slide.badge}
                </span>
              </div>

              {/* Headings */}
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-poppins text-navy leading-tight tracking-tight mb-1">
                {slide.title}
              </h1>
              <h2 className="text-lg sm:text-xl font-semibold font-poppins text-gold mb-3">
                {slide.subtitle}
              </h2>

              {/* Description */}
              <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed mb-6 max-w-2xl">
                {slide.description}
              </p>

              {/* CTA Button */}
              <button
                onClick={scrollToContact}
                className="bg-navy hover:bg-navy-light text-white font-bold px-6 py-2.5 rounded transition-all duration-300 shadow-md hover:shadow-lg border border-transparent hover:border-gold hover:text-gold text-xs sm:text-sm group"
              >
                Contact Us Now
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white border border-gray-100 hover:border-navy/10 hover:text-gold text-navy p-2 rounded-full shadow transition-all z-20 focus:outline-none"
        aria-label="Previous Slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white border border-gray-100 hover:border-navy/10 hover:text-gold text-navy p-2 rounded-full shadow transition-all z-20 focus:outline-none"
        aria-label="Next Slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-0 right-0 flex justify-center space-x-2.5 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3.5 h-1.5 rounded-full transition-all duration-300 ${
              currentSlide === index ? 'bg-gold w-8' : 'bg-gray-300 hover:bg-gray-400'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
