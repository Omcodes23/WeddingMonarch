'use client';

import { motion } from 'framer-motion';
import { PageTransition } from '@/components/ui/PageTransition';

export function Page3VigataHostInfo() {
  const sections = [
    {
      title: '॥ દર્શનાભિલાષી ॥',
      lines: [
        'અ.સૌ. અર્ચના ગૌરાંગભાઈ જ્યોતિષી – શ્રી ગૌરાંગ રજનીકાંત જ્યોતિષી',
        'અ.સૌ. કૃતિકા અંકુરભાઈ જ્યોતિષી – શ્રી અંકુર ભરતભાઇ જ્યોતિષી',
      ],
    },
    {
      title: '॥ મોસાળ પક્ષ ॥',
      lines: [
        'શ્રી પ્રવીણભાઈ પ્રભાશંકર જોષી (જાફરાબાદ)',
        'શ્રી મનીષભાઈ પ્રવીણભાઈ જોષી (જાફરાબાદ)',
      ],
    },
    {
      title: '॥ હરખનાં તેડાં ॥',
      lines: [
        'શ્રી જીગર વસંતરાય જાની',
        'શ્રી વિશ્વેશ રમેશભાઈ પાણેરી',
        'શ્રી વિક્રમ રમેશભાઈ પાણેરી',
      ],
    },
    {
      title: '॥ ટહુકો ॥',
      lines: [
        'રંગ છે મહેંદીનો, સૂર છે શરણાઈનો, નાદ છે ઢોલનો,',
        'ઉમંગ છે મારા ચાચુ/મામાના લગ્નનો.',
        '... પ્રાવ્યા, પ્રજ્ઞાન, રિશિવ, નવધા, આરવી, હર્ષવર્ધન, ખુશી',
      ],
    },
    {
      title: '॥ પ્રતીક્ષાતુર ॥',
      lines: [
        'અ.સૌ. હેતલ એ. પંડયા  – શ્રી આશુતોષ આર. પંડયા',
        'અ.સૌ. શીતલ ડી. ભટ્ટ  – શ્રી દેવેનકુમાર જે. ભટ્ટ',
      ],
    },
    {
      title: '॥ પૂ. બા-દાદાની અંતરીક્ષથી અમીવૃષ્ટિ ॥',
      lines: [
        'હૃદયસ્થ સ્વ. પુષ્પાબેન જયેન્દ્રભાઈ જ્યોતિષી',
        'હૃદયસ્થ સ્વ. જયેન્દ્રભાઈ દામોદરભાઈ જ્યોતિષી',
      ],
    },
  ];

  return (
    <PageTransition>
      <div
        className="w-full h-screen bg-cover bg-center bg-no-repeat relative overflow-hidden"
        style={{ backgroundImage: "url('/page-3.png')" }}
      >
        <div className="h-full flex items-center justify-center p-1 md:p-2 relative overflow-hidden">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="w-full h-full flex flex-col justify-center"
          >
            <div className="px-2 md:px-4 py-4 md:py-6 text-center space-y-1 md:space-y-1.5 overflow-y-auto max-h-full w-full">
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                <p className="font-gujarati text-xs md:text-sm text-white">
                  ॥ શ્રી દાળેશ્વરાય નમઃ ॥
                </p>
              </motion.div>

              {/* Title */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                <h1 className="font-gujarati text-lg md:text-2xl font-bold text-yellow-200 drop-shadow-lg">
                  પરિવાર
                </h1>
              </motion.div>

              {/* Decorative Line */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="w-20 h-px bg-yellow-300 mx-auto my-0.5"
              />

              {sections.map((section, sectionIndex) => (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 + sectionIndex * 0.2, duration: 0.6 }}
                  className="space-y-0.5 md:space-y-1"
                >
                  <p className="font-gujarati text-xs md:text-sm font-semibold text-yellow-200">
                    {section.title}
                  </p>
                  {section.lines.map((line) => (
                    <p key={line} className="font-gujarati text-xs md:text-sm text-white">
                      {line}
                    </p>
                  ))}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
}
