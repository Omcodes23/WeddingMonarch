'use client';

import { ReactNode } from 'react';

interface WeddingCardBackgroundProps {
  children: ReactNode;
  variant?: 'red' | 'maroon' | 'gold' | 'cream';
}

export function WeddingCardBackground({ children, variant = 'maroon' }: WeddingCardBackgroundProps) {
  return (
    <div className="relative min-h-screen flex items-center justify-center p-2 md:p-4 bg-gradient-to-br from-amber-50 via-orange-50 to-rose-100">
      {/* The actual wedding card image container - fully responsive */}
      <div className="relative w-full max-w-full md:max-w-4xl h-screen md:h-auto md:aspect-[4/5] overflow-hidden">
        {/* Card image as background */}
        <div 
          className="absolute inset-0 rounded-none md:rounded-2xl shadow-none md:shadow-2xl"
          style={{
            backgroundImage: 'url(/bg.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        
        {/* Content overlay on top of the card */}
        <div className="absolute inset-0 overflow-hidden">
          {children}
        </div>
      </div>
    </div>
  );
}
