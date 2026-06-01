'use client';

import { useState } from 'react';

export default function PieChart() {
  const [hoveredSlice, setHoveredSlice] = useState(null);

  // Slices configuration
  // Total 100% => 60% Teal (#0D9488), 30% Dark Navy (#0A1F44), 10% Red (#DC2626)
  // Angles: 60% = 216°, 30% = 108°, 10% = 36°
  const slices = [
    {
      percentage: 60,
      label: '60',
      title: 'Equity & Growth',
      color: '#14B8A6', // Teal
      hoverColor: '#0F766E',
      // Start angle = 0, End angle = 216. Mid angle = 108
      path: 'M 100 100 L 100 10 A 90 90 0 1 1 14.63 127.81 Z',
      labelX: 135,
      labelY: 120,
    },
    {
      percentage: 30,
      label: '30',
      title: 'Options & Hedging',
      color: '#0A1F44', // Dark Navy
      hoverColor: '#1E3A6A',
      // Start angle = 216, End angle = 324. Mid angle = 270
      path: 'M 100 100 L 14.63 127.81 A 90 90 0 0 1 47.1 27.2 Z',
      labelX: 60,
      labelY: 90,
    },
    {
      percentage: 10,
      label: '10',
      title: 'Commodity & Cash',
      color: '#DC2626', // Red
      hoverColor: '#991B1B',
      // Start angle = 324, End angle = 360. Mid angle = 342
      path: 'M 100 100 L 47.1 27.2 A 90 90 0 0 1 100 10 Z',
      labelX: 75,
      labelY: 35,
    },
  ];

  return (
    <div className="w-full flex flex-col items-center justify-center bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
      <div className="relative w-64 h-64 md:w-80 md:h-80">
        <svg
          viewBox="0 0 200 200"
          className="w-full h-full drop-shadow-md select-none"
        >
          {slices.map((slice, index) => {
            const isHovered = hoveredSlice === index;
            return (
              <g
                key={index}
                onMouseEnter={() => setHoveredSlice(index)}
                onMouseLeave={() => setHoveredSlice(null)}
                className="cursor-pointer"
              >
                {/* Slice Path */}
                <path
                  d={slice.path}
                  fill={isHovered ? slice.hoverColor : slice.color}
                  className="transition-all duration-300 origin-center"
                  style={{
                    transform: isHovered ? 'scale(1.05)' : 'scale(1)',
                    transformOrigin: '100px 100px',
                  }}
                />
                {/* Slice Label */}
                <text
                  x={slice.labelX}
                  y={slice.labelY}
                  fill="#FFFFFF"
                  fontSize="12"
                  fontWeight="bold"
                  textAnchor="middle"
                  className="pointer-events-none font-poppins text-shadow-subtle transition-all duration-300"
                  style={{
                    transform: isHovered ? 'scale(1.15)' : 'scale(1)',
                    transformOrigin: `${slice.labelX}px ${slice.labelY}px`,
                  }}
                >
                  {slice.label}%
                </text>
              </g>
            );
          })}
          {/* Inner circle for a premium donut-style look */}
          <circle cx="100" cy="100" r="25" fill="#FFFFFF" />
        </svg>
      </div>

      {/* Interactive Legend */}
      <div className="grid grid-cols-3 gap-4 mt-6 w-full max-w-sm">
        {slices.map((slice, index) => (
          <div
            key={index}
            className={`flex flex-col items-center p-2 rounded-lg border transition-all duration-200 ${
              hoveredSlice === index 
                ? 'bg-gray-50 border-gray-200 shadow-sm scale-105' 
                : 'bg-transparent border-transparent'
            }`}
            onMouseEnter={() => setHoveredSlice(index)}
            onMouseLeave={() => setHoveredSlice(null)}
          >
            <div className="flex items-center space-x-1.5 mb-1">
              <span
                className="w-3 h-3 rounded-full shrink-0"
                style={{ backgroundColor: slice.color }}
              ></span>
              <span className="text-xs font-bold text-navy font-poppins">
                {slice.percentage}%
              </span>
            </div>
            <span className="text-[10px] text-gray-500 font-medium text-center leading-tight">
              {slice.title}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
