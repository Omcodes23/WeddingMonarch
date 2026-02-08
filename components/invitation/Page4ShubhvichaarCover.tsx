'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { PageTransition } from '@/components/ui/PageTransition';
import { WeddingCardBackground } from '@/components/ui/WeddingCardBackground';

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
    <PageTransition>
      <WeddingCardBackground variant="maroon">
        <div className="h-full flex items-center justify-center p-1 md:p-2 relative overflow-hidden">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="w-full h-full flex flex-col justify-center items-center"
          >
            <div className="flex flex-col items-center justify-center gap-2 md:gap-3 text-center py-4 md:py-6 w-full h-full">
              
              {/* Title */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                <h1 className="font-gujarati text-2xl md:text-3xl font-bold text-wedding-maroon drop-shadow-lg">
                  ॥ આમંત્રણ ॥
                </h1>
              </motion.div>

              {/* Decorative Line Top */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="w-24 h-0.5 bg-gradient-to-r from-transparent via-wedding-gold to-transparent"
              />

              {/* Ganesha Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7, duration: 0.8 }}
                className="relative w-24 md:w-32 h-24 md:h-32 flex-shrink-0 drop-shadow-2xl"
              >
                <Image
                  src="/ganesha2-200w.png"
                  alt="Lord Ganesha"
                  fill
                  className="object-contain drop-shadow-2xl"
                  priority
                />
              </motion.div>

              {/* Decorative Line Bottom */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.9, duration: 0.6 }}
                className="w-24 h-0.5 bg-gradient-to-r from-transparent via-wedding-darkGold to-transparent"
              />

              {/* Couple Names */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1, duration: 0.6 }}
                className="space-y-0.5 md:space-y-1"
              >
                <h2 className="font-gujarati text-base md:text-xl font-bold text-wedding-maroon">
                  ચિ. કેયુર  ||  ચિ. ઈશા
                </h2>
              </motion.div>

              {/* Decorative Divider */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 1.3, duration: 0.6 }}
                className="w-20 h-0.5 bg-wedding-gold my-0.5"
              />

              {/* Date */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5, duration: 0.6 }}
                className="space-y-0.5 md:space-y-1"
              >
                <p className="font-gujarati text-sm md:text-base font-bold text-wedding-maroon">
                  શનિવાર તા. ૨૧-૦૨-૨૦૨૬
                </p>
              </motion.div>

              {/* Invitee Line */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.7, duration: 0.6 }}
                className="pt-0.5"
              >
                <p className="font-gujarati text-xs md:text-sm text-gray-700">
                  પ્રતિ શ્રી, {guestName || '________________________'}
                </p>
              </motion.div>

              {/* English Couple Line */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.9, duration: 0.6 }}
                className="pt-0.5"
              >
                <p className="font-elegant text-xs md:text-sm text-gray-700">
                  KEYUR weds ISHA
                </p>
              </motion.div>

              {/* Inviter Block */}
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
                      index === 0 ? 'text-wedding-maroon font-semibold' : 'text-gray-700'
                    } px-2`}
                  >
                    {line}
                  </p>
                ))}
              </motion.div>
            </div>
          </motion.div>

          {/* Dual Animated Couple Images at Bottom */}
          <motion.div
            initial={{ x: -150, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1.3, duration: 1.2, type: "spring", stiffness: 50 }}
            className="absolute bottom-4 left-4 md:left-8 z-10"
          >
            <motion.img
              src="/couple-1-200w.png"
              alt="Couple"
              className="w-16 md:w-24 h-auto drop-shadow-2xl"
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
          <motion.div
            initial={{ x: 150, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1.3, duration: 1.2, type: "spring", stiffness: 50 }}
            className="absolute bottom-4 right-4 md:right-8 z-10"
          >
            <motion.img
              src="/couple-1-200w.png"
              alt="Couple"
              className="w-16 md:w-24 h-auto drop-shadow-2xl -scale-x-100"
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </div>
      </WeddingCardBackground>
    </PageTransition>
  );
}
