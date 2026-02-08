'use client';

import { motion } from 'framer-motion';
import { PageTransition } from '@/components/ui/PageTransition';
import { WeddingCardBackground } from '@/components/ui/WeddingCardBackground';
import { StaggerText } from '@/components/ui/AnimatedText';
interface Page3GuestWelcomeProps {
  guestName: string;
  customMessage?: string;
}

export function Page3GuestWelcome({ guestName, customMessage }: Page3GuestWelcomeProps) {
  return (
    <PageTransition>
      <WeddingCardBackground variant="cream">
        <div className="h-full flex items-center justify-center p-4 md:p-8 relative">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          className="w-full max-w-2xl relative z-10"
        >
          {/* Content directly on background */}
          <div className="px-4 md:px-12 py-8 md:py-12 space-y-4 md:space-y-6 text-center">
              {/* Greeting */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
              >
                <h1 className="font-gujarati text-5xl md:text-6xl font-bold text-wedding-maroon">
                  નમસ્તે
                </h1>
              </motion.div>

              {/* Guest Name Card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="bg-gradient-to-r from-wedding-gold via-wedding-rose to-wedding-gold p-1 rounded-2xl shadow-lg"
              >
                <div className="bg-white rounded-2xl p-8 md:p-10">
                  <p className="font-gujarati text-3xl md:text-5xl font-bold text-wedding-maroon">
                    {guestName}
                  </p>
                  <p className="font-decorative text-xl md:text-2xl text-wedding-darkGold mt-2">
                    Ji
                  </p>
                </div>
              </motion.div>

              {/* Divider */}
              <div className="h-1 w-24 bg-wedding-gold mx-auto" />

              {/* Invitation Message */}
              <StaggerText
                text={customMessage || "આપનું કેયુર અને ઈશાના લગ્નસમારોહમાં હાર્દિક સ્વાગત છે"}
                className="font-gujarati text-2xl md:text-3xl text-wedding-maroon leading-relaxed"
                delay={0.8}
              />

              {/* English Message */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.4 }}
                className="space-y-2 md:space-y-3"
              >
                <p className="font-elegant text-base md:text-lg text-gray-700">
                  You are cordially invited
                </p>
                <p className="font-elegant text-base md:text-lg text-gray-700">
                  to the wedding celebration of
                </p>
                <p className="font-decorative text-xl md:text-3xl text-wedding-darkGold font-bold">
                  Keyur & Isha
                </p>
              </motion.div>



              {/* Dual Animated Peacocks at Bottom */}
              <motion.div
                initial={{ x: -200, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 1.4, duration: 1.2, type: "spring", stiffness: 50 }}
                className="absolute bottom-2 left-4 md:left-8 z-10"
              >
                <motion.img
                  src="/more-200h.png"
                  alt="Peacock"
                  className="w-24 md:w-36 h-auto drop-shadow-2xl"
                  animate={{ y: [0, -8, 0], rotate: [-2, 2, -2] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                />
              </motion.div>
              <motion.div
                initial={{ x: 200, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 1.4, duration: 1.2, type: "spring", stiffness: 50 }}
                className="absolute bottom-2 right-4 md:right-8 z-10"
              >
                <motion.img
                  src="/more-200h.png"
                  alt="Peacock"
                  className="w-24 md:w-36 h-auto drop-shadow-2xl -scale-x-100"
                  animate={{ y: [0, -8, 0], rotate: [-2, 2, -2] }}
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
