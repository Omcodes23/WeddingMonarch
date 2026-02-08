'use client';

import { motion } from 'framer-motion';
import { PageTransition } from '@/components/ui/PageTransition';
import { WeddingCardBackground } from '@/components/ui/WeddingCardBackground';
import { FaPhone } from 'react-icons/fa';

export function Page8RSVP() {
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
          {/* Content directly on card background */}
            <div className="px-8 md:px-12 py-12 space-y-8">
              {/* Thank You Title */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="text-center"
              >
                <h2 className="font-gujarati text-4xl md:text-6xl font-bold text-wedding-maroon drop-shadow-lg mb-2">
                  આભાર
                </h2>
                <h3 className="font-decorative text-2xl md:text-3xl text-wedding-darkGold">
                  Thank You
                </h3>
              </motion.div>

              {/* Divider */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="h-1 w-24 bg-gradient-to-r from-wedding-gold to-wedding-rose mx-auto"
              />

              {/* Gratitude Messages */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="text-center space-y-4"
              >
                <p className="font-gujarati text-2xl text-wedding-maroon leading-relaxed">
                  આપની ઉપસ્થિતિ અમારા આ ખાસ દિવસને વધુ ખાસ બનાવશે
                </p>
                <p className="font-elegant text-lg text-gray-700">
                  Your presence will make our special day even more special
                </p>
              </motion.div>

              {/* Divider 2 */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="h-px bg-gradient-to-r from-transparent via-wedding-gold to-transparent"
              />

              {/* Contact Information */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                className="space-y-4"
              >
                <p className="font-gujarati text-lg text-center text-wedding-maroon font-semibold">
                  વધુ માહિતી માટે સંપર્ક કરો
                </p>

                <div className="space-y-3">
                  {/* Groom's Contact */}
                  <div className="flex items-center gap-3 bg-gradient-to-r from-wedding-gold/10 to-wedding-yellow/10 p-4 rounded-xl border-l-4 border-wedding-gold">
                    <FaPhone className="w-5 h-5 text-wedding-gold flex-shrink-0" />
                    <div>
                      <p className="text-sm text-gray-600 font-elegant">Groom's Side</p>
                      <a
                        href="tel:+919876543210"
                        className="font-decorative text-lg text-wedding-maroon hover:text-wedding-darkGold transition-colors"
                      >
                        +91 98765 43210
                      </a>
                    </div>
                  </div>

                  {/* Bride's Contact */}
                  <div className="flex items-center gap-3 bg-gradient-to-r from-wedding-rose/10 to-wedding-maroon/10 p-4 rounded-xl border-r-4 border-wedding-rose">
                    <FaPhone className="w-5 h-5 text-wedding-rose flex-shrink-0" />
                    <div>
                      <p className="text-sm text-gray-600 font-elegant">Bride's Side</p>
                      <a
                        href="tel:+919876543211"
                        className="font-decorative text-lg text-wedding-maroon hover:text-wedding-darkGold transition-colors"
                      >
                        +91 98765 43211
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Final Blessing */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4 }}
                className="text-center space-y-3 pt-4 border-t border-wedding-gold/20"
              >
                <p className="font-gujarati text-3xl text-wedding-maroon font-bold">
                  શુભ વિવાહ
                </p>
                <p className="font-decorative text-xl text-wedding-darkGold">
                  Shubh Vivah
                </p>
                <p className="font-elegant text-sm text-gray-600 pt-2">
                  With love,<br />
                  <span className="font-decorative text-xl text-wedding-maroon">
                    Keyur & Isha
                  </span>
                </p>
              </motion.div>

              {/* Save Note */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.6 }}
                className="text-center text-xs md:text-sm text-gray-600 font-elegant px-4 py-2 bg-wedding-cream/50 rounded-lg"
              >
                <p>💾 Save this invitation for venue entry</p>
              </motion.div>



              {/* Dual Animated Couple at Bottom */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 1.8, duration: 0.8, type: "spring" }}
                className="absolute bottom-2 left-4 md:left-8 z-10"
              >
                <motion.img
                  src="/couple-3-200w.png"
                  alt="Couple"
                  className="w-24 md:w-36 h-auto drop-shadow-2xl"
                  animate={{ rotate: [-3, 3, -3] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                />
              </motion.div>
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 1.8, duration: 0.8, type: "spring" }}
                className="absolute bottom-2 right-4 md:right-8 z-10"
              >
                <motion.img
                  src="/couple-3-200w.png"
                  alt="Couple"
                  className="w-24 md:w-36 h-auto drop-shadow-2xl -scale-x-100"
                  animate={{ rotate: [-3, 3, -3] }}
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
