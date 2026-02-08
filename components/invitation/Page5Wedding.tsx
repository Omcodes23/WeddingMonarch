'use client';

import { motion } from 'framer-motion';
import { PageTransition } from '@/components/ui/PageTransition';
import { WeddingCardBackground } from '@/components/ui/WeddingCardBackground';
import { AnimatedText } from '@/components/ui/AnimatedText';
import { FaCalendar, FaClock, FaMapMarkerAlt } from 'react-icons/fa';

export function Page5Wedding() {
  return (
    <PageTransition>
      <WeddingCardBackground variant="maroon">
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
                    લગ્ન સમારોહ
                  </h2>
                </AnimatedText>
                <AnimatedText delay={0.4}>
                  <h3 className="font-decorative text-3xl md:text-4xl text-wedding-darkGold">
                    Wedding Ceremony
                  </h3>
                </AnimatedText>
                <div className="h-1 w-24 bg-wedding-maroon mx-auto" />
              </div>

              {/* Shubh Muhurat */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 }}
                className="text-center bg-gradient-to-r from-wedding-maroon to-wedding-burgundy text-white p-6 rounded-2xl"
              >
                <p className="font-gujarati text-2xl md:text-3xl mb-2 font-semibold">શુભ મુહૂર્ત</p>
                <p className="font-decorative text-xl md:text-2xl">Shubh Muhurat</p>
              </motion.div>

              {/* Details */}
              <div className="space-y-4">
                {/* Date */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 }}
                  className="flex gap-4 items-start bg-wedding-maroon/5 p-5 rounded-2xl border border-wedding-maroon/10"
                >
                  <FaCalendar className="w-6 h-6 text-wedding-maroon flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-gujarati text-lg md:text-xl font-semibold text-wedding-maroon">
                      મંગળવાર, ૨૫ ફેબ્રુઆરી ૨૦૨૫
                    </p>
                    <p className="font-elegant text-sm text-gray-700">
                      Tuesday, 25th February 2025
                    </p>
                  </div>
                </motion.div>

                {/* Time */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1 }}
                  className="flex gap-4 items-start bg-wedding-maroon/5 p-5 rounded-2xl border border-wedding-maroon/10"
                >
                  <FaClock className="w-6 h-6 text-wedding-maroon flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-gujarati text-lg md:text-xl font-semibold text-wedding-maroon">
                      રાત્રે ૯:૦૦ વાગ્યે
                    </p>
                    <p className="font-elegant text-sm text-gray-700">
                      9:00 PM Onwards
                    </p>
                  </div>
                </motion.div>

                {/* Venue */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.2 }}
                  className="flex gap-4 items-start bg-wedding-maroon/5 p-5 rounded-2xl border border-wedding-maroon/10"
                >
                  <FaMapMarkerAlt className="w-6 h-6 text-wedding-maroon flex-shrink-0 mt-1" />
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
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.4 }}
                className="text-center space-y-2 pt-2"
              >
                <p className="font-gujarati text-base md:text-lg text-wedding-maroon italic">
                  આપની ઉપસ્થિતિ આ ક્ષણને યાદગાર બનાવશે
                </p>
                <p className="font-elegant text-sm md:text-base text-gray-600">
                  Your presence will make this occasion memorable
                </p>
              </motion.div>



              {/* Dual Animated Cows at Bottom */}
              <motion.div
                initial={{ x: -150, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 1.6, duration: 1, type: "spring" }}
                className="absolute bottom-2 left-4 md:left-8 z-10"
              >
                <motion.img
                  src="/gay-1-1-200w.png"
                  alt="Cow"
                  className="w-24 md:w-36 h-auto drop-shadow-2xl"
                  animate={{ x: [0, 8, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                />
              </motion.div>
              <motion.div
                initial={{ x: 150, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 1.6, duration: 1, type: "spring" }}
                className="absolute bottom-2 right-4 md:right-8 z-10"
              >
                <motion.img
                  src="/gay-1-1-200w.png"
                  alt="Cow"
                  className="w-24 md:w-36 h-auto drop-shadow-2xl -scale-x-100"
                  animate={{ x: [0, -8, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                />
              </motion.div>
            </div>
        </motion.div>
        </div>
      </WeddingCardBackground>
    </PageTransition>
  );
}
