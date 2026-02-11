'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export function Page1Ganesh() {
  return (
    <div
      className="w-full h-screen bg-cover bg-center bg-no-repeat relative overflow-hidden"
      style={{ backgroundImage: "url('/page-1.png')" }}
    >
        <div className="h-full flex items-center justify-center p-2 md:p-2 relative overflow-hidden overflow-y-auto">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="w-full h-full flex flex-col justify-start py-1 md:py-2"
          >
            <div className="px-2 md:px-4 pt-4 md:pt-12 pb-16 md:pb-32 text-center space-y-0.5 md:space-y-1.5 overflow-y-auto max-h-full w-full flex flex-col items-center">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
              >
                <h1 className="font-gujarati text-sm md:text-2xl font-bold text-white drop-shadow-lg">
                  ॥ ૐ બ્રહ્માણીયૈ નમઃ ॥
                </h1>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7, duration: 0.6 }}
                className="flex items-center justify-center gap-1 py-0.5"
              >
                <span className="text-yellow-300 text-xs md:text-base">卐</span>
                <h2 className="font-gujarati text-xs md:text-base font-semibold text-yellow-200">
                  મંગલ અવસરો
                </h2>
                <span className="text-yellow-300 text-xs md:text-base">卐</span>
              </motion.div>

              <div className="grid grid-cols-2 gap-1 md:gap-2 pt-0.5 max-w-xs md:max-w-sm w-full items-stretch">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.1, duration: 0.6 }}
                  className="flex flex-col items-center space-y-0.5 md:space-y-1 h-full"
                >
                  <Image
                    src="/mandap.png"
                    alt="મંડપ મુહૂર્ત"
                    width={90}
                    height={90}
                    className="w-[60px] h-[60px] md:w-[90px] md:h-[90px] object-contain"
                  />
                  <h4 className="font-gujarati text-[0.65rem] md:text-sm font-semibold text-yellow-200 text-center">
                    મંડપ મુહૂર્ત
                  </h4>
                  <div className="min-h-[2.25rem] md:min-h-[2.5rem] flex flex-col justify-center">
                    <p className="font-gujarati text-[0.6rem] md:text-xs text-white text-center">
                      ૨૦/૦૨/૨૦૨૬, શુક્રવાર
                    </p>
                    <p className="font-gujarati text-[0.6rem] md:text-xs text-white text-center">
                      સવારે ૮:૦૦ કલાકે
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.1, duration: 0.6 }}
                  className="flex flex-col items-center space-y-0.5 md:space-y-1 h-full"
                >
                  <Image
                    src="/mosad.png"
                    alt="મોસાળું"
                    width={90}
                    height={90}
                    className="w-[60px] h-[60px] md:w-[90px] md:h-[90px] object-contain"
                  />
                  <h4 className="font-gujarati text-[0.65rem] md:text-sm font-semibold text-yellow-200 text-center">
                    મોસાળું
                  </h4>
                  <div className="min-h-[1.75rem] md:min-h-[2.5rem] flex flex-col justify-center">
                    <p className="font-gujarati text-[0.55rem] md:text-xs text-white text-center">
                      ૨૦/૦૨/૨૦૨૬, શુક્રવાર
                    </p>
                    <p className="font-gujarati text-[0.55rem] md:text-xs text-white text-center">
                      સવારે ૧૧:૦૦ કલાકે
                    </p>
                  </div>
                </motion.div>
              </div>

              <div className="grid grid-cols-2 gap-1 md:gap-2 max-w-xs md:max-w-sm w-full items-stretch">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.3, duration: 0.6 }}
                  className="flex flex-col items-center space-y-0.5 md:space-y-1 h-full"
                >
                  <Image
                    src="/bhojan.png"
                    alt="સ્વરુચિ ભોજન"
                    width={90}
                    height={90}
                    className="w-[60px] h-[60px] md:w-[90px] md:h-[90px] object-contain"
                  />
                  <h4 className="font-gujarati text-[0.65rem] md:text-sm font-semibold text-yellow-200 text-center">
                    સ્વરુચિ ભોજન
                  </h4>
                  <div className="min-h-[1.75rem] md:min-h-[2.5rem] flex flex-col justify-center">
                    <p className="font-gujarati text-[0.55rem] md:text-xs text-white text-center">
                      ૨૦/૦૨/૨૦૨૬, શુક્રવાર
                    </p>
                    <p className="font-gujarati text-[0.55rem] md:text-xs text-white text-center">
                      બપોરે ૧૨:૦૦ કલાકે
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.3, duration: 0.6 }}
                  className="flex flex-col items-center space-y-0.5 md:space-y-1 h-full"
                >
                  <Image
                    src="/haldi.png"
                    alt="પીઠી"
                    width={90}
                    height={90}
                    className="w-[60px] h-[60px] md:w-[90px] md:h-[90px] object-contain"
                  />
                  <h4 className="font-gujarati text-[0.65rem] md:text-sm font-semibold text-yellow-200 text-center">
                    પીઠી
                  </h4>
                  <div className="min-h-[1.75rem] md:min-h-[2.5rem] flex flex-col justify-center">
                    <p className="font-gujarati text-[0.55rem] md:text-xs text-white text-center">
                      ૨૦/૦૨/૨૦૨૬, શુક્રવાર
                    </p>
                    <p className="font-gujarati text-[0.55rem] md:text-xs text-white text-center">
                      બપોરે ૩:૩૦ કલાકે
                    </p>
                  </div>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5, duration: 0.6 }}
                className="flex flex-col items-center space-y-0.5 md:space-y-1 pt-0.5 max-w-xs md:max-w-sm w-full"
              >
                <Image
                  src="/garba.png"
                  alt="કેશા ના તાલે"
                  width={60}
                  height={60}
                  className="w-[50px] h-[50px] md:w-[70px] md:h-[70px] object-contain"
                />
                <h4 className="font-gujarati text-[0.65rem] md:text-sm font-semibold text-yellow-200 text-center">
                  કેશા ના તાલે – સંગીતની સુવર્ણ સાંજ
                </h4>
                <p className="font-gujarati text-[0.55rem] md:text-xs text-white text-center">
                  ૨૦/૦૨/૨૦૨૬, શુક્રવાર
                </p>
                <p className="font-gujarati text-[0.55rem] md:text-xs text-white text-center">
                  સાંજે ૭:૩૦ કલાકે
                </p>
              </motion.div>

              <div className="grid grid-cols-2 gap-1 md:gap-2 max-w-xs md:max-w-sm w-full items-stretch">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.7, duration: 0.6 }}
                  className="flex flex-col items-center space-y-0.5 md:space-y-1 h-full"
                >
                  <Image
                    src="/jan.png"
                    alt="જાન પ્રસ્થાન"
                    width={90}
                    height={90}
                    className="w-[60px] h-[60px] md:w-[90px] md:h-[90px] object-contain"
                  />
                  <h4 className="font-gujarati text-[0.65rem] md:text-sm font-semibold text-yellow-200 text-center">
                    જાન પ્રસ્થાન
                  </h4>
                  <div className="min-h-[1.75rem] md:min-h-[2.5rem] flex flex-col justify-center">
                    <p className="font-gujarati text-[0.55rem] md:text-xs text-white text-center">
                      ૨૧/૦૨/૨૦૨૬, શનિવાર
                    </p>
                    <p className="font-gujarati text-[0.55rem] md:text-xs text-white text-center">
                      સવારે ૦૯:૦૦ કલાકે
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.7, duration: 0.6 }}
                  className="flex flex-col items-center space-y-0.5 md:space-y-1 h-full"
                >
                  <Image
                    src="/lagan.png"
                    alt="હસ્ત મેળાપ"
                    width={90}
                    height={90}
                    className="w-[60px] h-[60px] md:w-[90px] md:h-[90px] object-contain"
                  />
                  <h4 className="font-gujarati text-[0.65rem] md:text-sm font-semibold text-yellow-200 text-center">
                    હસ્ત મેળાપ
                  </h4>
                  <div className="min-h-[1.75rem] md:min-h-[2.5rem] flex flex-col justify-center">
                    <p className="font-gujarati text-[0.55rem] md:text-xs text-white text-center">
                      ૨૧/૦૨/૨૦૨૬, શનિવાર
                    </p>
                    <p className="font-gujarati text-[0.55rem] md:text-xs text-white text-center">
                      બપોરે ૧૨:૩૦ કલાકે
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
  );
}
