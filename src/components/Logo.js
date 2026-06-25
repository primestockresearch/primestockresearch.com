import React from 'react';

export default function Logo({ className = "h-9", textClass = "text-navy", dark = false }) {
  return (
    <img
      src="/images/logo.png"
      alt="Prime Stock Research"
      className={`${className} w-auto object-contain select-none`}
      style={dark ? { filter: 'brightness(0) invert(1)' } : undefined}
    />
  );
}
