'use client';

import { motion } from 'framer-motion';

export function GrassBottom() {
  return (
    <div className="absolute bottom-0 left-0 right-0 h-16 md:h-20 overflow-hidden pointer-events-none">
      {/* Grass pattern */}
      <div className="absolute inset-0">
        {/* Multiple grass blades with varying heights and animations */}
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{
              delay: i * 0.02,
              duration: 0.5,
              ease: "easeOut"
            }}
            className="absolute bottom-0 origin-bottom"
            style={{
              left: `${(i / 30) * 100}%`,
              width: '4%',
              height: `${60 + Math.random() * 40}%`,
              background: `linear-gradient(to top, #2d5016, #4a7c2f)`,
              clipPath: 'polygon(40% 0%, 60% 0%, 55% 100%, 45% 100%)',
              opacity: 0.8 + Math.random() * 0.2
            }}
          >
            <motion.div
              animate={{
                rotate: [0, 2, -2, 0],
              }}
              transition={{
                duration: 2 + Math.random() * 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="w-full h-full"
            />
          </motion.div>
        ))}
      </div>
      
      {/* Darker base */}
      <div className="absolute bottom-0 left-0 right-0 h-4 bg-gradient-to-t from-green-900/80 to-transparent" />
    </div>
  );
}
