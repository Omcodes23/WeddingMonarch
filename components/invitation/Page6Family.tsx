'use client';

import { motion } from 'framer-motion';
import { PageTransition } from '@/components/ui/PageTransition';
import { WeddingCardBackground } from '@/components/ui/WeddingCardBackground';

export function Page6Family() {
  const groomFamily = [
    { name: 'અર્જુન પટેલ', relation: 'પિતા (Father)' },
    { name: 'પ્રીતી પટેલ', relation: 'માતા (Mother)' },
  ];

  const brideFamily = [
    { name: 'વિક્રમ શર્મા', relation: 'પિતા (Father)' },
    { name: 'શર્માધા શર્મા', relation: 'માતા (Mother)' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

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
          <div className="px-4 md:px-12 py-8 md:py-12 relative">
              {/* Title */}
              <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="font-gujarati text-4xl md:text-5xl font-bold text-center text-wedding-maroon drop-shadow-lg mb-8 md:mb-12"
              >
                પરિવાર
              </motion.h2>

              {/* Family Container */}
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="space-y-12"
              >
                {/* Groom's Family */}
                <motion.div variants={itemVariants} className="space-y-6">
                  <div className="text-center">
                    <h3 className="font-gujarati text-2xl md:text-3xl font-bold bg-gradient-to-r from-wedding-gold via-wedding-darkGold to-wedding-gold bg-clip-text text-transparent mb-2">
                      વર - કુટુંબ
                    </h3>
                    <p className="font-decorative text-lg text-wedding-gold">Groom's Family</p>
                  </div>

                  <div className="space-y-4">
                    {groomFamily.map((member, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 + idx * 0.2 }}
                        className="bg-gradient-to-r from-wedding-gold/10 to-wedding-yellow/10 p-4 rounded-xl border-l-4 border-wedding-gold"
                      >
                        <p className="font-gujarati text-xl font-semibold text-wedding-maroon">
                          {member.name}
                        </p>
                        <p className="font-elegant text-sm text-wedding-darkGold mt-1">
                          {member.relation}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Divider */}
                <motion.div
                  variants={itemVariants}
                  className="h-1 w-32 bg-gradient-to-r from-wedding-gold to-wedding-rose mx-auto"
                />

                {/* Bride's Family */}
                <motion.div variants={itemVariants} className="space-y-6">
                  <div className="text-center">
                    <h3 className="font-gujarati text-2xl md:text-3xl font-bold bg-gradient-to-r from-wedding-rose via-wedding-maroon to-wedding-burgundy bg-clip-text text-transparent mb-2">
                      વધુ - કુટુંબ
                    </h3>
                    <p className="font-decorative text-lg text-wedding-rose">Bride's Family</p>
                  </div>

                  <div className="space-y-4">
                    {brideFamily.map((member, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.8 + idx * 0.2 }}
                        className="bg-gradient-to-r from-wedding-rose/10 to-wedding-maroon/10 p-4 rounded-xl border-r-4 border-wedding-rose"
                      >
                        <p className="font-gujarati text-xl font-semibold text-wedding-maroon">
                          {member.name}
                        </p>
                        <p className="font-elegant text-sm text-wedding-maroon mt-1">
                          {member.relation}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </motion.div>

              {/* Footer Message */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.6 }}
                className="text-center mt-8 md:mt-12 pt-6 md:pt-8 border-t border-wedding-gold/20"
              >
                <p className="font-gujarati text-base md:text-lg text-gray-700">
                  સમાજ સાથે આપના આશીર્વાદને આમંત્રણ જણાવીએ છીએ
                </p>
              </motion.div>



              {/* Dual Animated Couple at Bottom */}
              <motion.div
                initial={{ x: -120, opacity: 0, scale: 0 }}
                animate={{ x: 0, opacity: 1, scale: 1 }}
                transition={{ delay: 1.9, duration: 0.8, type: "spring" }}
                className="absolute bottom-2 left-4 md:left-8 z-10"
              >
                <motion.img
                  src="/couple-1-200w.png"
                  alt="Couple"
                  className="w-20 md:w-32 h-auto drop-shadow-xl"
                  animate={{ rotate: [-2, 2, -2] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                />
              </motion.div>
              <motion.div
                initial={{ x: 120, opacity: 0, scale: 0 }}
                animate={{ x: 0, opacity: 1, scale: 1 }}
                transition={{ delay: 1.9, duration: 0.8, type: "spring" }}
                className="absolute bottom-2 right-4 md:right-8 z-10"
              >
                <motion.img
                  src="/couple-1-200w.png"
                  alt="Couple"
                  className="w-20 md:w-32 h-auto drop-shadow-xl -scale-x-100"
                  animate={{ rotate: [-2, 2, -2] }}
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
