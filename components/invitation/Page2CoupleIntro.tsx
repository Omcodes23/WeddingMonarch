'use client';

import { motion } from 'framer-motion';
import { PageTransition } from '@/components/ui/PageTransition';
import { WeddingCardBackground } from '@/components/ui/WeddingCardBackground';
import { FloatingPetals } from '@/components/ui/FloatingPetals';

export function Page2CoupleIntro() {
  return (
    <PageTransition>
      <WeddingCardBackground variant="red">
        <div className="h-full flex items-center justify-center p-4 md:p-8 relative overflow-hidden">
        
        <div className="absolute inset-0">
          <FloatingPetals />
        </div>
        
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          className="w-full max-w-3xl relative z-10"
        >
          {/* Content directly on background */}
          <div className="px-4 md:px-12 py-8 md:py-12 text-center space-y-6 md:space-y-8">
              {/* Names */}
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
              >
                <h1 className="font-decorative text-6xl md:text-7xl font-bold text-wedding-maroon">
                  Keyur
                </h1>
              </motion.div>

              {/* Heart Animation */}
              <motion.div
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 1 }}
                className="text-6xl md:text-8xl"
              >
                ❤️
              </motion.div>

              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1, delay: 0.3 }}
              >
                <h1 className="font-decorative text-6xl md:text-7xl font-bold text-wedding-maroon">
                  Isha
                </h1>
              </motion.div>

              {/* Divider */}
              <div className="h-1 w-32 bg-wedding-gold mx-auto" />

              {/* Subtitle */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.6 }}
                className="space-y-3"
              >
                <p className="font-elegant text-2xl text-wedding-maroon">
                  Together with their families
                </p>
                <p className="font-gujarati text-xl text-wedding-darkGold">
                  તેમના પરિવારો સાથે
                </p>
              </motion.div>

              {/* Invite Text */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.9, duration: 0.6 }}
                className="space-y-4 bg-wedding-gold/10 py-6 px-6 rounded-2xl"
              >
                <p className="font-gujarati text-lg md:text-xl text-wedding-maroon">
                  તમને તેમના લગ્નમાં આમંત્રણ આપવા માટે<br />
                  ખૂબ જ આનંદ થાય છે
                </p>
                <p className="font-elegant text-base md:text-lg text-gray-700">
                  Request the honour of your presence<br />
                  at their wedding celebration
                </p>
              </motion.div>


            </div>
        </motion.div>

        {/* Dual Animated Swans at Bottom */}
        <motion.div
          initial={{ x: -150, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 1.3, duration: 1, type: "spring", stiffness: 50 }}
          className="absolute bottom-4 left-4 md:left-8 z-10"
        >
          <motion.img
            src="/swan-1-200h-2.png"
            alt="Swan"
            className="w-16 md:w-24 h-auto drop-shadow-xl"
            animate={{ y: [0, -4, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
        <motion.div
          initial={{ x: 150, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 1.3, duration: 1, type: "spring", stiffness: 50 }}
          className="absolute bottom-4 right-4 md:right-8 z-10"
        >
          <motion.img
            src="/swan-1-200h-2.png"
            alt="Swan"
            className="w-16 md:w-24 h-auto drop-shadow-xl -scale-x-100"
            animate={{ y: [0, -4, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
        </div>
      </WeddingCardBackground>
    </PageTransition>
  );
}
