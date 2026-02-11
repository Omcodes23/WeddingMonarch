'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface Page4Props {
  guestName?: string;
}

export function Page4ShubhvichaarCover({ guestName }: Page4Props) {
  const inviterLines = [
    'નિમંત્રક :',
    'શ્રી ભરતભાઇ જયેન્દ્રભાઈ જ્યોતિષી',
    'શ્રીમતી કોકિલાબેન ભરતભાઇ જ્યોતિષી',
    'એચ-૧૦૨ ઈશાન્યા ફ્લોરેંઝા, ઈશાન્યા રોડ, ઉંડેરા, વડોદરા - ૩૯૧૩૩૦',
  ];

  return (
    <div
      className="w-full h-screen bg-cover bg-center bg-no-repeat relative overflow-hidden"
      style={{ backgroundImage: "url('/page-4.png')" }}
    >
        <div className="h-full flex items-start justify-center pt-4 md:pt-9 p-10 md:p-2 relative overflow-hidden overflow-y-auto">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="w-full h-full flex flex-col justify-center items-center overflow-y-auto"
          >
            <div className="flex flex-col items-center justify-center gap-0.5 md:gap-3 text-center py-2 md:py-6 w-full h-full px-2 md:px-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="mb-1 md:mb-2"
              >
                <Image
                  src="/ganesha2-200w.png"
                  alt="Shri Ganesh"
                  width={80}
                  height={80}
                  className="w-[70px] h-[70px] md:w-[100px] md:h-[100px]"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                <h1 className="font-gujarati text-xl md:text-4xl font-bold text-yellow-200 drop-shadow-lg">
                  ॥ શુભ વિવાહ ॥
                </h1>
              </motion.div>

              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="w-16 md:w-24 h-0.5 bg-gradient-to-r from-transparent via-yellow-300 to-transparent"
              />

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="my-1 md:my-2"
              >
                <Image
                  src="/logo.png"
                  alt="Logo"
                  width={150}
                  height={150}
                  className="rounded-lg w-[80px] h-[80px] md:w-[120px] md:h-[120px]"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1, duration: 0.6 }}
                className="space-y-0.5 md:space-y-1 pt-1 md:pt-4"
              >
                <h2
                  className="font-decorative text-2xl md:text-5xl font-extrabold text-red-600 drop-shadow-lg tracking-wide"
                  style={{ textShadow: '0 2px 6px rgba(185, 28, 28, 0.55), 0 4px 10px rgba(255, 215, 0, 0.45)' }}
                >
                  ચિ. કેયુર <span className="text-base md:text-2xl font-semibold">સંગ</span> ચિ. ઈશા
                </h2>
              </motion.div>

              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 1.3, duration: 0.6 }}
                className="w-12 md:w-20 h-0.5 bg-yellow-300 my-0.5"
              />

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5, duration: 0.6 }}
                className="space-y-0.5 md:space-y-1"
              >
                <p className="font-gujarati text-xs md:text-base font-bold text-yellow-200">
                  શનિવાર તા. ૨૧-૦૨-૨૦૨૬
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.7, duration: 0.6 }}
                className="pt-0.5"
              >
                <p className="font-gujarati text-base md:text-3xl font-bold text-white px-2">
                  પ્રતિ શ્રી, {guestName || '________________________'}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.9, duration: 0.6 }}
                className="my-1 md:my-2"
              >
                <Image
                  src="/imge1.png"
                  alt="Decorative image"
                  width={150}
                  height={100}
                  className="rounded-lg w-[100px] h-auto md:w-[180px]"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.1, duration: 0.6 }}
                className="pt-2 md:pt-2 w-full px-4 md:px-4"
              >
                <div className="space-y-1 text-center max-w-4xl mx-auto w-full">
                  {inviterLines.map((line, index) => (
                    <p
                      key={line}
                      className={`font-gujarati text-[10px] md:text-xs ${
                        index === 0 ? 'text-yellow-200 font-semibold' : 'text-white'
                      }`}
                    >
                      {line}
                    </p>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
  );
}
