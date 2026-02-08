'use client';

import { motion } from 'framer-motion';
import { PageTransition } from '@/components/ui/PageTransition';
import { WeddingCardBackground } from '@/components/ui/WeddingCardBackground';

export function Page1Ganesh() {
  return (
    <PageTransition>
      <WeddingCardBackground variant="maroon">
        <div className="h-full flex items-center justify-center p-1 md:p-2 relative overflow-hidden">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="w-full h-full flex flex-col justify-start py-1 md:py-2"
          >
            {/* Content directly on background */}
            <div className="px-2 md:px-4 pt-8 md:pt-12 pb-1 md:pb-3 text-center space-y-0.5 md:space-y-1.5 max-h-full w-full flex flex-col items-center">
              
              {/* Ganesha Image at Top */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="flex justify-center"
              >
                <img src="/ganesha2-200w.png" alt="Ganesh" className="w-6 md:w-14 h-auto" />
              </motion.div>

              {/* Shree Vallabhay Namah */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
              >
                <h1 className="font-gujarati text-base md:text-3xl font-bold text-wedding-maroon drop-shadow-lg">
                  ॥ ૐ બ્રહ્માણીયૈ નમઃ ॥
                </h1>
              </motion.div>

              {/* Shubh Mangal Avsaro with Swastika */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7, duration: 0.6 }}
                className="flex items-center justify-center gap-1 py-0.5"
              >
                <span className="text-wedding-darkGold text-xs md:text-lg">卐</span>
                <h2 className="font-gujarati text-xs md:text-lg font-semibold text-wedding-maroon">
                  મંગલ અવસરો
                </h2>
                <span className="text-wedding-darkGold text-xs md:text-lg">卐</span>
              </motion.div>

              {/* First Row: Mandap Muhurat & Mosalu */}
              <div className="grid grid-cols-2 gap-1 md:gap-2 pt-0.5 max-w-xs md:max-w-sm w-full items-stretch">
                {/* Mandap Muhurat */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.1, duration: 0.6 }}
                  className="flex flex-col items-center space-y-0.25 md:space-y-0.5 h-full"
                >
                  <div className="flex items-center justify-center h-6 md:h-12">
                    <img src="/ganesha2-200w.png" alt="Mandap" className="w-5 md:w-10 h-auto" />
                  </div>
                  <div className="min-h-[1.5rem] md:min-h-[2.75rem] flex items-center justify-center">
                    <h4 className="font-gujarati text-xs md:text-base font-semibold text-wedding-maroon text-center">
                      મંડપ મુહૂર્ત
                    </h4>
                  </div>
                  <div className="border-t border-b border-wedding-darkGold py-0.25 w-full flex justify-center">
                    <span className="text-sm md:text-base">✦</span>
                  </div>
                  <div className="min-h-[2.25rem] md:min-h-[2.5rem] flex flex-col justify-center">
                    <p className="font-gujarati text-xs md:text-sm text-gray-700 text-center">
                      ૨૦/૦૨/૨૦૨૬, શુક્રવાર
                    </p>
                    <p className="font-gujarati text-xs md:text-sm text-gray-700 text-center">
                      સવારે ૮:૦૦ કલાકે
                    </p>
                  </div>
                </motion.div>

                {/* Mosalu */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.1, duration: 0.6 }}
                  className="flex flex-col items-center space-y-0.25 md:space-y-0.5 h-full"
                >
                  <div className="flex items-center justify-center h-6 md:h-12">
                    <img src="/more-200h.png" alt="Mosalu" className="w-5 md:w-10 h-auto" />
                  </div>
                  <div className="min-h-[1.5rem] md:min-h-[2.75rem] flex items-center justify-center">
                    <h4 className="font-gujarati text-xs md:text-base font-semibold text-wedding-maroon text-center">
                      મોસાળું
                    </h4>
                  </div>
                  <div className="border-t border-b border-wedding-darkGold py-0.25 w-full flex justify-center">
                    <span className="text-xs md:text-base">✦</span>
                  </div>
                  <div className="min-h-[1.75rem] md:min-h-[2.5rem] flex flex-col justify-center">
                    <p className="font-gujarati text-[0.65rem] md:text-sm text-gray-700 text-center">
                      ૨૦/૦૨/૨૦૨૬, શુક્રવાર
                    </p>
                    <p className="font-gujarati text-[0.65rem] md:text-sm text-gray-700 text-center">
                      સવારે ૧૧:૦૦ કલાકે
                    </p>
                  </div>
                </motion.div>
              </div>

              {/* Second Row: Swami Bhojan & Podhi */}
              <div className="grid grid-cols-2 gap-1 md:gap-2 max-w-xs md:max-w-sm w-full items-stretch">
                {/* Swami Bhojan */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.3, duration: 0.6 }}
                  className="flex flex-col items-center space-y-0.25 md:space-y-0.5 h-full"
                >
                  <div className="flex items-center justify-center h-6 md:h-12">
                    <img src="/p-flower-200w (1).png" alt="Swami Bhojan" className="w-5 md:w-10 h-auto" />
                  </div>
                  <div className="min-h-[1.5rem] md:min-h-[2.75rem] flex items-center justify-center">
                    <h4 className="font-gujarati text-xs md:text-base font-semibold text-wedding-maroon text-center">
                      સ્વરુચિ ભોજન
                    </h4>
                  </div>
                  <div className="border-t border-b border-wedding-darkGold py-0.25 w-full flex justify-center">
                    <span className="text-xs md:text-base">✦</span>
                  </div>
                  <div className="min-h-[1.75rem] md:min-h-[2.5rem] flex flex-col justify-center">
                    <p className="font-gujarati text-[0.65rem] md:text-sm text-gray-700 text-center">
                      ૨૦/૦૨/૨૦૨૬, શુક્રવાર
                    </p>
                    <p className="font-gujarati text-[0.65rem] md:text-sm text-gray-700 text-center">
                      બપોરે ૧૨:૦૦ કલાકે
                    </p>
                  </div>
                </motion.div>

                {/* Podhi */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.3, duration: 0.6 }}
                  className="flex flex-col items-center space-y-0.25 md:space-y-0.5 h-full"
                >
                  <div className="flex items-center justify-center h-6 md:h-12">
                    <span className="text-base md:text-2xl">🪔</span>
                  </div>
                  <div className="min-h-[1.5rem] md:min-h-[2.75rem] flex items-center justify-center">
                    <h4 className="font-gujarati text-xs md:text-base font-semibold text-wedding-maroon text-center">
                      પીઠી
                    </h4>
                  </div>
                  <div className="border-t border-b border-wedding-darkGold py-0.25 w-full flex justify-center">
                    <span className="text-xs md:text-base">✦</span>
                  </div>
                  <div className="min-h-[1.75rem] md:min-h-[2.5rem] flex flex-col justify-center">
                    <p className="font-gujarati text-[0.65rem] md:text-sm text-gray-700 text-center">
                      ૨૦/૦૨/૨૦૨૬, શુક્રવાર
                    </p>
                    <p className="font-gujarati text-[0.65rem] md:text-sm text-gray-700 text-center">
                      બપોરે ૩:૩૦ કલાકે
                    </p>
                  </div>
                </motion.div>
              </div>

              {/* Third Row: Sangeet - Center */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5, duration: 0.6 }}
                className="flex flex-col items-center space-y-0.25 md:space-y-0.5 pt-0.5 max-w-xs md:max-w-sm w-full"
              >
                <img src="/couple-1-200w.png" alt="Sangeet" className="w-6 md:w-14 h-auto" />
                <h4 className="font-gujarati text-xs md:text-base font-semibold text-wedding-maroon text-center">
                  કેશા ના તાલે – સંગીતની સુવર્ણ સાંજ
                </h4>
                <div className="border-t border-b border-wedding-darkGold py-0.25 max-w-xs w-full flex justify-center">
                  <span className="text-xs md:text-base">✦</span>
                </div>
                <p className="font-gujarati text-[0.65rem] md:text-sm text-gray-700 text-center">
                  ૨૦/૦૨/૨૦૨૬, શુક્રવાર
                </p>
                <p className="font-gujarati text-[0.65rem] md:text-sm text-gray-700 text-center">
                  સાંજે ૭:૩૦ કલાકે
                </p>
              </motion.div>

              {/* Fourth Row: Jan Parnan & Hast Melap */}
              <div className="grid grid-cols-2 gap-1 md:gap-2 max-w-xs md:max-w-sm w-full items-stretch">
                {/* Jan Parnan */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.7, duration: 0.6 }}
                  className="flex flex-col items-center space-y-0.25 md:space-y-0.5 h-full"
                >
                  <div className="flex items-center justify-center h-6 md:h-12">
                    <img src="/hathi-300w.png" alt="Jan Parnan" className="w-5 md:w-10 h-auto" />
                  </div>
                  <div className="min-h-[1.5rem] md:min-h-[2.75rem] flex items-center justify-center">
                    <h4 className="font-gujarati text-xs md:text-base font-semibold text-wedding-maroon text-center">
                      જાન પ્રસ્થાન
                    </h4>
                  </div>
                  <div className="border-t border-b border-wedding-darkGold py-0.25 w-full flex justify-center">
                    <span className="text-xs md:text-base">✦</span>
                  </div>
                  <div className="min-h-[1.75rem] md:min-h-[2.5rem] flex flex-col justify-center">
                    <p className="font-gujarati text-[0.65rem] md:text-sm text-gray-700 text-center">
                      ૨૧/૦૨/૨૦૨૬, શનિવાર
                    </p>
                    <p className="font-gujarati text-[0.65rem] md:text-sm text-gray-700 text-center">
                      સવારે ૦૯:૦૦ કલાકે
                    </p>
                  </div>
                </motion.div>

                {/* Hast Melap */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.7, duration: 0.6 }}
                  className="flex flex-col items-center space-y-0.25 md:space-y-0.5 h-full"
                >
                  <div className="flex items-center justify-center h-6 md:h-12">
                    <img src="/couple-3-200w.png" alt="Hast Melap" className="w-5 md:w-10 h-auto" />
                  </div>
                  <div className="min-h-[1.5rem] md:min-h-[2.75rem] flex items-center justify-center">
                    <h4 className="font-gujarati text-xs md:text-base font-semibold text-wedding-maroon text-center">
                      હસ્ત મેળાપ
                    </h4>
                  </div>
                  <div className="border-t border-b border-wedding-darkGold py-0.25 w-full flex justify-center">
                    <span className="text-xs md:text-base">✦</span>
                  </div>
                  <div className="min-h-[1.75rem] md:min-h-[2.5rem] flex flex-col justify-center">
                    <p className="font-gujarati text-[0.65rem] md:text-sm text-gray-700 text-center">
                      ૨૧/૦૨/૨૦૨૬, શનિવાર
                    </p>
                    <p className="font-gujarati text-[0.65rem] md:text-sm text-gray-700 text-center">
                      બપોરે ૧૨:૩૦ કલાકે
                    </p>
                  </div>
                </motion.div>
              </div>

            </div>
          </motion.div>

          {/* Dual Animated Elephants at Bottom */}
          <motion.div
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1.3, duration: 1.2, type: "spring", stiffness: 50 }}
            className="absolute bottom-2 left-2 md:bottom-4 md:left-8 z-10"
          >
            <motion.img
              src="/hathi-300w.png"
              alt="Elephant"
              className="w-12 md:w-32 h-auto drop-shadow-2xl"
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
          <motion.div
            initial={{ x: 200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1.3, duration: 1.2, type: "spring", stiffness: 50 }}
            className="absolute bottom-2 right-2 md:bottom-4 md:right-8 z-10"
          >
            <motion.img
              src="/hathi-300w.png"
              alt="Elephant"
              className="w-12 md:w-32 h-auto drop-shadow-2xl -scale-x-100"
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </div>
      </WeddingCardBackground>
    </PageTransition>
  );
}
