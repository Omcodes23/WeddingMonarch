'use client';

import { motion } from 'framer-motion';

interface Page4Props {
  guestName?: string;
}

export function Page4ShubhvichaarCover({ guestName }: Page4Props) {
  const inviterLines = [
    'નિમંત્રક :',
    'શ્રી ભરતભાઇ જયેન્દ્રભાઈ જ્યોતિષી',
    'શ્રીમતી કોકિલાબેન ભરતભાઇ જ્યોતિષી',
    'Mob No: ૬૩૫૩૮ ૯૭૮૩૩',
    'અમારું આંગણું :',
    'એચ-૧૦૨ ઈશાન્યા ફ્લોરેંઝા',
    'ઈશાન્યા રોડ, ઉંડેરા, વડોદરા',
    '૩૯૧૩૩૦',
  ];

  return (
    <div
      className="w-full h-screen bg-cover bg-center bg-no-repeat relative overflow-hidden"
      style={{ backgroundImage: "url('/page-4.png')" }}
    >
        <div className="h-full flex items-center justify-center p-1 md:p-2 relative overflow-hidden">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="w-full h-full flex flex-col justify-center items-center"
          >
            <div className="flex flex-col items-center justify-center gap-2 md:gap-3 text-center py-4 md:py-6 w-full h-full">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                <h1 className="font-gujarati text-2xl md:text-3xl font-bold text-yellow-200 drop-shadow-lg">
                  ॥ આમંત્રણ ॥
                </h1>
              </motion.div>

              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="w-24 h-0.5 bg-gradient-to-r from-transparent via-yellow-300 to-transparent"
              />

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1, duration: 0.6 }}
                className="space-y-0.5 md:space-y-1 pt-4"
              >
                <h2 className="font-gujarati text-base md:text-xl font-bold text-white">
                  ચિ. કેયુર  ||  ચિ. ઈશા
                </h2>
              </motion.div>

              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 1.3, duration: 0.6 }}
                className="w-20 h-0.5 bg-yellow-300 my-0.5"
              />

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5, duration: 0.6 }}
                className="space-y-0.5 md:space-y-1"
              >
                <p className="font-gujarati text-sm md:text-base font-bold text-yellow-200">
                  શનિવાર તા. ૨૧-૦૨-૨૦૨૬
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.7, duration: 0.6 }}
                className="pt-0.5"
              >
                <p className="font-gujarati text-xl md:text-3xl font-bold text-white">
                  પ્રતિ શ્રી, {guestName || '________________________'}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.9, duration: 0.6 }}
                className="pt-0.5"
              >
                <p className="font-elegant text-xs md:text-sm text-white">
                  KEYUR weds ISHA
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.1, duration: 0.6 }}
                className="pt-0.5 space-y-0.5"
              >
                {inviterLines.map((line, index) => (
                  <p
                    key={line}
                    className={`font-gujarati text-xs md:text-sm ${
                      index === 0 ? 'text-yellow-200 font-semibold' : 'text-white'
                    } px-2`}
                  >
                    {line}
                  </p>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
  );
}
