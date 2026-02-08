'use client';

import { motion } from 'framer-motion';
import { PageTransition } from '@/components/ui/PageTransition';
import { WeddingCardBackground } from '@/components/ui/WeddingCardBackground';
import { AnimatedText } from '@/components/ui/AnimatedText';
import { FaCalendar, FaClock, FaMapMarkerAlt } from 'react-icons/fa';

export function Page4Engagement() {
  return (
    <PageTransition>
      <WeddingCardBackground variant="gold">
        <div className="h-full flex items-center justify-center p-4 md:p-8">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          className="w-full max-w-2xl relative z-10"
        >
          {/* Content directly on background */}
          <div className="px-4 md:px-12 py-8 md:py-12 space-y-4 md:space-y-6 relative">
              {/* Title */}
              <div className="text-center space-y-3">
                <AnimatedText delay={0.2}>
                  <h2 className="font-gujarati text-5xl md:text-6xl font-bold text-wedding-maroon">
                    સગાઈ સમારોહ
                  </h2>
                </AnimatedText>
                <AnimatedText delay={0.4}>
                  <h3 className="font-decorative text-3xl md:text-4xl text-wedding-darkGold">
                    Engagement Ceremony
                  </h3>
                </AnimatedText>
                <div className="h-1 w-24 bg-wedding-gold mx-auto" />
              </div>

              {/* Details */}
              <div className="space-y-4">
                {/* Date */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 }}
                  className="flex gap-4 items-start bg-wedding-gold/10 p-5 rounded-2xl"
                >
                  <FaCalendar className="w-6 h-6 text-wedding-darkGold flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-gujarati text-lg md:text-xl font-semibold text-wedding-maroon">
                      સોમવાર, ૨૪ ફેબ્રુઆરી ૨૦૨૫
                    </p>
                    <p className="font-elegant text-sm text-gray-700">
                      Monday, 24th February 2025
                    </p>
                  </div>
                </motion.div>

                {/* Time */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 }}
                  className="flex gap-4 items-start bg-wedding-gold/10 p-5 rounded-2xl"
                >
                  <FaClock className="w-6 h-6 text-wedding-darkGold flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-gujarati text-lg md:text-xl font-semibold text-wedding-maroon">
                      સાંજે ૬:૩૦ વાગ્યે
                    </p>
                    <p className="font-elegant text-sm text-gray-700">
                      6:30 PM Onwards
                    </p>
                  </div>
                </motion.div>

                {/* Venue */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1 }}
                  className="flex gap-4 items-start bg-wedding-gold/10 p-5 rounded-2xl"
                >
                  <FaMapMarkerAlt className="w-6 h-6 text-wedding-darkGold flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-decorative text-lg md:text-xl font-semibold text-wedding-maroon">
                      Navneet Lawns
                    </p>
                    <p className="font-elegant text-sm text-gray-700">
                      Ahmedabad
                    </p>
                  </div>
                </motion.div>
              </div>

              {/* Blessing */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
                className="text-center font-gujarati text-base md:text-lg text-wedding-maroon italic pt-4"
              >
                આપની ઉપસ્થિતિ આ ક્ષણને યાદગાર બનાવશે
              </motion.p>



              {/* Dual Animated Flowers at Bottom */}
              <motion.div
                initial={{ x: -100, opacity: 0, rotate: -45 }}
                animate={{ x: 0, opacity: 1, rotate: 0 }}
                transition={{ delay: 1.4, duration: 0.9, type: "spring" }}
                className="absolute bottom-2 left-4 md:left-8 z-10"
              >
                <motion.img
                  src="/p-flower-200w (1).png"
                  alt="Flower"
                  className="w-20 md:w-28 h-auto drop-shadow-xl"
                  animate={{ rotate: [0, 10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                />
              </motion.div>
              <motion.div
                initial={{ x: 100, opacity: 0, rotate: 45 }}
                animate={{ x: 0, opacity: 1, rotate: 0 }}
                transition={{ delay: 1.4, duration: 0.9, type: "spring" }}
                className="absolute bottom-2 right-4 md:right-8 z-10"
              >
                <motion.img
                  src="/p-f-1-200w.png"
                  alt="Flower"
                  className="w-20 md:w-28 h-auto drop-shadow-xl -scale-x-100"
                  animate={{ rotate: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                />
              </motion.div>
            </div>

        </motion.div>
        </div>
      </WeddingCardBackground>
    </PageTransition>
  );
}
