'use client';

import { motion } from 'framer-motion';

// Animated Ganesh SVG
export function AnimatedGanesh() {
  return (
    <motion.svg
      width="80"
      height="80"
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      animate={{ y: [0, -10, 0], rotate: [0, 5, -5, 0] }}
      transition={{ duration: 3, repeat: Infinity }}
    >
      {/* Head */}
      <circle cx="50" cy="35" r="18" fill="#FFD700" stroke="#B8860B" strokeWidth="2" />
      {/* Elephant Trunk - Curved */}
      <path d="M 50 50 Q 45 60 40 65" stroke="#FFD700" strokeWidth="4" strokeLinecap="round" fill="none" />
      {/* Ears */}
      <ellipse cx="30" cy="35" rx="8" ry="12" fill="#FFD700" stroke="#B8860B" strokeWidth="1.5" />
      <ellipse cx="70" cy="35" rx="8" ry="12" fill="#FFD700" stroke="#B8860B" strokeWidth="1.5" />
      {/* Body */}
      <ellipse cx="50" cy="65" rx="15" ry="20" fill="#FFA500" stroke="#B8860B" strokeWidth="2" />
      {/* Halo */}
      <circle cx="50" cy="30" r="22" fill="none" stroke="#FFD700" strokeWidth="1.5" opacity="0.5" />
    </motion.svg>
  );
}

// Animated Bride & Groom SVG
export function AnimatedCoupleMinimal() {
  return (
    <motion.svg
      width="100"
      height="100"
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      animate={{ y: [0, -8, 0] }}
      transition={{ duration: 2.5, repeat: Infinity }}
    >
      {/* Groom - Left */}
      {/* Head */}
      <circle cx="30" cy="25" r="8" fill="#E8B4A8" />
      {/* Turban/Hat */}
      <path d="M 22 25 L 28 20 L 32 20 L 38 25" fill="#800020" stroke="#6B1529" strokeWidth="1" />
      {/* Body */}
      <rect x="25" y="35" width="10" height="18" fill="#800020" rx="2" />
      {/* Arms */}
      <line x1="25" y1="40" x2="18" y2="50" stroke="#E8B4A8" strokeWidth="2" />
      <line x1="35" y1="40" x2="42" y2="50" stroke="#E8B4A8" strokeWidth="2" />

      {/* Bride - Right */}
      {/* Head */}
      <circle cx="70" cy="25" r="8" fill="#E8B4A8" />
      {/* Hair/Veil area */}
      <path d="M 62 25 L 62 20 L 78 20 L 78 25" fill="#FFD700" opacity="0.8" stroke="#B8860B" strokeWidth="0.8" />
      {/* Body */}
      <rect x="65" y="35" width="10" height="18" fill="#FFD700" rx="2" />
      {/* Arms with bangles */}
      <line x1="65" y1="40" x2="58" y2="50" stroke="#E8B4A8" strokeWidth="2" />
      <line x1="75" y1="40" x2="82" y2="50" stroke="#E8B4A8" strokeWidth="2" />

      {/* Connected Heart */}
      <motion.path
        d="M 43 50 Q 50 45 57 50"
        stroke="#C9A07C"
        strokeWidth="2"
        fill="none"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      />
    </motion.svg>
  );
}

// Animated Peacock SVG
export function AnimatedPeacock() {
  return (
    <motion.svg
      width="110"
      height="80"
      viewBox="0 0 110 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      animate={{ x: [0, 10, 0], rotateZ: [0, 3, -3, 0] }}
      transition={{ duration: 4, repeat: Infinity }}
    >
      {/* Tail Feathers - Animated */}
      <motion.g animate={{ rotateZ: [0, 15, 0, -15, 0] }} transition={{ duration: 3, repeat: Infinity }}>
        <ellipse cx="55" cy="20" rx="25" ry="15" fill="#1E90FF" opacity="0.7" />
        <circle cx="70" cy="15" r="4" fill="#FFD700" />
        <circle cx="40" cy="15" r="4" fill="#FFD700" />
        <circle cx="85" cy="25" r="3.5" fill="#00FF7F" />
        <circle cx="25" cy="25" r="3.5" fill="#00FF7F" />
      </motion.g>
      {/* Body */}
      <ellipse cx="55" cy="50" rx="12" ry="16" fill="#1E90FF" />
      {/* Neck */}
      <rect x="52" y="38" width="6" height="12" fill="#00FF7F" />
      {/* Head */}
      <circle cx="55" cy="32" r="6" fill="#00FF7F" />
      {/* Beak */}
      <polygon points="61,32 68,30 63,35" fill="#FFD700" />
      {/* Eye */}
      <circle cx="58" cy="30" r="2" fill="#FFD700" />
    </motion.svg>
  );
}

// Animated Lotus SVG
export function AnimatedLotus() {
  return (
    <motion.svg
      width="80"
      height="80"
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      animate={{ scale: [0.95, 1, 0.95], rotateZ: [0, 5, -5, 0] }}
      transition={{ duration: 3, repeat: Infinity }}
    >
      {/* Petals - Outer Ring */}
      <motion.g animate={{ rotateZ: [0, 360] }} transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}>
        <ellipse cx="40" cy="15" rx="8" ry="14" fill="#FF69B4" />
        <ellipse cx="65" cy="25" rx="8" ry="14" fill="#FF1493" transform="rotate(45 40 40)" />
        <ellipse cx="65" cy="65" rx="8" ry="14" fill="#FF69B4" transform="rotate(90 40 40)" />
        <ellipse cx="40" cy="65" rx="8" ry="14" fill="#FF1493" transform="rotate(135 40 40)" />
        <ellipse cx="15" cy="40" rx="8" ry="14" fill="#FF69B4" transform="rotate(180 40 40)" />
      </motion.g>

      {/* Inner Petals */}
      <ellipse cx="40" cy="30" rx="6" ry="10" fill="#FFD700" />
      <ellipse cx="55" cy="40" rx="6" ry="10" fill="#FFD700" transform="rotate(60 40 40)" />
      <ellipse cx="25" cy="40" rx="6" ry="10" fill="#FFD700" transform="rotate(-60 40 40)" />

      {/* Center */}
      <circle cx="40" cy="40" r="8" fill="#FFA500" />
      <circle cx="40" cy="40" r="5" fill="#FFD700" />
    </motion.svg>
  );
}

// Animated Diya (Oil Lamp) SVG
export function AnimatedDiya() {
  return (
    <motion.svg
      width="70"
      height="80"
      viewBox="0 0 70 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      animate={{ y: [0, -5, 0] }}
      transition={{ duration: 2, repeat: Infinity }}
    >
      {/* Lamp Body */}
      <ellipse cx="35" cy="50" rx="20" ry="15" fill="#C9A07C" stroke="#B8860B" strokeWidth="1.5" />
      {/* Lamp Rim */}
      <ellipse cx="35" cy="38" rx="22" ry="8" fill="#C9A07C" stroke="#B8860B" strokeWidth="1" />
      {/* Oil Inside */}
      <ellipse cx="35" cy="48" rx="18" ry="12" fill="#8B4513" />

      {/* Wick Holder */}
      <rect x="32" y="35" width="6" height="8" fill="#B8860B" rx="2" />

      {/* Flame - Animated */}
      <motion.g animate={{ y: [0, -3, 0, -2, 0], opacity: [1, 0.8, 1, 0.9, 1] }} transition={{ duration: 1.2, repeat: Infinity }}>
        {/* Outer Flame */}
        <path d="M 35 20 Q 28 28 30 38 Q 35 32 40 38 Q 42 28 35 20" fill="#FF6347" opacity="0.8" />
        {/* Inner Flame */}
        <path d="M 35 24 Q 31 30 32 36 Q 35 30 38 36 Q 39 30 35 24" fill="#FFD700" />
      </motion.g>
    </motion.svg>
  );
}

// Animated Bell SVG
export function AnimatedBell() {
  return (
    <motion.svg
      width="70"
      height="80"
      viewBox="0 0 70 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      animate={{ rotate: [-10, 10, -8, 8, 0] }}
      transition={{ duration: 2, repeat: Infinity }}
    >
      {/* Bell Rope */}
      <line x1="35" y1="5" x2="35" y2="18" stroke="#B8860B" strokeWidth="2" />
      {/* Knot at top */}
      <circle cx="35" cy="5" r="3" fill="#B8860B" />

      {/* Bell Body */}
      <path d="M 20 18 Q 15 30 18 50 Q 20 62 35 65 Q 50 62 52 50 Q 55 30 50 18 Z" fill="#FFD700" stroke="#B8860B" strokeWidth="2" />

      {/* Bell Rim - Decorative */}
      <ellipse cx="35" cy="18" rx="15" ry="4" fill="none" stroke="#B8860B" strokeWidth="1.5" />

      {/* Bell Clapper - Animated */}
      <motion.circle cx="35" cy="55" r="4" fill="#B8860B" animate={{ y: [0, 3, 0, -2, 0] }} transition={{ duration: 1.5, repeat: Infinity }} />

      {/* Decorative flowers on bell */}
      <circle cx="25" cy="35" r="2.5" fill="#FF69B4" />
      <circle cx="45" cy="35" r="2.5" fill="#FF69B4" />
      <circle cx="35" cy="40" r="2.5" fill="#FF69B4" />
    </motion.svg>
  );
}

// Animated Nagaras (Indian Drums) SVG
export function AnimatedNagaras() {
  return (
    <motion.svg
      width="100"
      height="70"
      viewBox="0 0 100 70"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      animate={{ scale: [0.95, 1.02, 0.95] }}
      transition={{ duration: 0.8, repeat: Infinity }}
    >
      {/* Left Drum */}
      <motion.g animate={{ rotateZ: [-5, 5, -5] }} transition={{ duration: 1, repeat: Infinity }}>
        {/* Drum Body */}
        <ellipse cx="28" cy="35" rx="14" ry="20" fill="#8B4513" stroke="#654321" strokeWidth="2" />
        {/* Drum Top */}
        <ellipse cx="28" cy="18" rx="14" ry="6" fill="#C9A07C" stroke="#654321" strokeWidth="1.5" />
        {/* Rope */}
        <line x1="16" y1="25" x2="16" y2="50" stroke="#654321" strokeWidth="1" />
        <line x1="40" y1="25" x2="40" y2="50" stroke="#654321" strokeWidth="1" />
        {/* Decorative Ring */}
        <circle cx="28" cy="35" r="16" fill="none" stroke="#FFD700" strokeWidth="1" opacity="0.6" />
      </motion.g>

      {/* Right Drum */}
      <motion.g animate={{ rotateZ: [5, -5, 5] }} transition={{ duration: 1, repeat: Infinity }}>
        {/* Drum Body */}
        <ellipse cx="72" cy="35" rx="14" ry="20" fill="#8B4513" stroke="#654321" strokeWidth="2" />
        {/* Drum Top */}
        <ellipse cx="72" cy="18" rx="14" ry="6" fill="#C9A07C" stroke="#654321" strokeWidth="1.5" />
        {/* Rope */}
        <line x1="60" y1="25" x2="60" y2="50" stroke="#654321" strokeWidth="1" />
        <line x1="84" y1="25" x2="84" y2="50" stroke="#654321" strokeWidth="1" />
        {/* Decorative Ring */}
        <circle cx="72" cy="35" r="16" fill="none" stroke="#FFD700" strokeWidth="1" opacity="0.6" />
      </motion.g>

      {/* Connecting Rod - Decorated */}
      <line x1="44" y1="35" x2="56" y2="35" stroke="#FFD700" strokeWidth="3" />
      <circle cx="50" cy="35" r="4" fill="#FFD700" />
    </motion.svg>
  );
}

// Decorative Border SVG
export function DecorativeBorder() {
  return (
    <svg width="100%" height="8" viewBox="0 0 200 8" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
      <defs>
        <pattern id="flowers" x="0" y="0" width="20" height="8" patternUnits="userSpaceOnUse">
          <circle cx="10" cy="4" r="2" fill="#FFD700" />
          <circle cx="6" cy="3" r="1.5" fill="#FF69B4" />
          <circle cx="14" cy="3" r="1.5" fill="#FF69B4" />
          <circle cx="8" cy="6" r="1.5" fill="#00FF7F" />
          <circle cx="12" cy="6" r="1.5" fill="#00FF7F" />
        </pattern>
      </defs>
      <rect width="200" height="8" fill="url(#flowers)" />
    </svg>
  );
}
