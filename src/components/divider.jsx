import React from 'react';

const GlowingDivider = ({ fillColor = 'white' }) => {
  return (
     <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-20">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 150" // Using a common 1440 width for smooth scaling
        preserveAspectRatio="none"
        // Adjust the height of the entire divider element here
        className="relative block w-full h-[120px]"
      >
        <defs>
          {/* 1. The Gradient for the main aurora line */}
          <linearGradient id="aurora-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#372c1b" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#ffffff" stopOpacity="1" />
            <stop offset="100%" stopColor="#1b2637" stopOpacity="0.8" />
          </linearGradient>

          {/* 2. The SVG Filter to create the soft, blurred glow */}
          <filter id="soft-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="8" result="coloredBlur" />
          </filter>
        </defs>

        {/* 
          This is the single S-curve path we will reuse for all layers.
          - M0,50: Starts on the left, slightly down from the top.
          - C 480,150 960,0 1440,50: Creates a beautiful Cubic Bézier S-curve.
            (You can play with these numbers to change the curve's shape!)
        */}
        <path
          id="aurora-curve"
          d="M0,50 C 480,150 960,0 1440,50"
          fill="none"
        />

        {/* --- THE LAYERS THAT CREATE THE "AMAZING" EFFECT (Rendered bottom to top) --- */}

        {/* Layer 1: The soft, blurred background glow. */}
        <use
          href="#aurora-curve"
          stroke="url(#aurora-gradient)"
          strokeWidth="10" // Make this one thick
          filter="url(#soft-glow)"
          opacity="0.6"
        />

        {/* Layer 2: The main colored aurora line. */}
        <use
          href="#aurora-curve"
          stroke="url(#aurora-gradient)"
          strokeWidth="4" // Medium thickness
        />

        {/* Layer 3: The sharp, bright highlight on top. */}
        <use href="#aurora-curve" stroke="#ffffff" strokeWidth="1.5" />

        {/* --- THE SOLID FILL SHAPE --- */}
        {/* This path uses the same curve and adds lines to fill the bottom area. */}
        <path
          d="M0,50 C 480,150 960,0 1440,50 L 1440,150 L 0,150 Z"
          className={`fill-current text-${fillColor}`}
        />
      </svg>
    </div>
  );
};

export default GlowingDivider;