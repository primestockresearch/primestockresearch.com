import React from 'react';

export default function Logo({ className = "h-9", textClass = "text-navy", dark = false }) {
  const mainColor = dark ? "#FFFFFF" : "#0A1F44";
  const textColor = dark ? "text-white" : textClass;

  return (
    <div className="flex items-center space-x-3 select-none">
      <svg
        viewBox="0 0 100 100"
        className={`${className} w-auto shrink-0`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Hexagon with gaps for arrow and clean aesthetics */}
        <path
          d="M 50 8 L 81 26 M 83 45 L 83 74 L 50 93 L 19 75 M 17 55 L 17 26 L 50 8"
          stroke={mainColor}
          strokeWidth="7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        
        {/* Four rising bar charts with logo-matching colors */}
        <rect x="25" y="58" width="7" height="15" rx="1.5" fill="#94D0E1" />
        <rect x="36" y="47" width="7" height="26" rx="1.5" fill="#5CBBD2" />
        <rect x="47" y="37" width="7" height="36" rx="1.5" fill="#49B4CA" />
        <rect x="58" y="27" width="7" height="46" rx="1.5" fill="#8EC4D1" />

        {/* Swooping arrow from bottom-left to top-right */}
        <path
          d="M 10 74 C 20 86, 50 90, 71 72 C 81 63, 85 49, 87 27"
          stroke={mainColor}
          strokeWidth="7.5"
          strokeLinecap="round"
          fill="none"
        />
        {/* Arrowhead */}
        <path
          d="M 87 27 L 76 32 M 87 27 L 92 38"
          stroke={mainColor}
          strokeWidth="7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      
      <div className="flex flex-col font-poppins">
        <span className={`text-lg md:text-xl font-bold tracking-tight leading-none ${textColor}`}>
          PRIME STOCK
        </span>
        <span className={`text-[9px] uppercase font-bold tracking-[0.25em] mt-1 leading-none ${dark ? 'text-teal-light' : 'text-teal'}`}>
          RESEARCH
        </span>
      </div>
    </div>
  );
}
