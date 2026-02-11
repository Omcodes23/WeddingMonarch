'use client';

import { motion } from 'framer-motion';
import { PageTransition } from '@/components/ui/PageTransition';

interface Page2Props {
  guestName?: string;
}

export function Page2MangalParivar({ guestName }: Page2Props) {
  const introLines = [
    'આદરણીય સ્નેહીશ્રી:',
    'ઇષ્ટદેવશ્રી દાળેશ્વર દાદા, કુળદેવીશ્રી બ્રહ્માણી માતાજી, શ્રી રાંદલ માતાજી તથા સુરાપુરા દાદાની અશીમ કૃપાવર્ષા અને આત્મીયજનોના આશીર્વાદરૂપ મંગલમય સાન્નિધ્યમાં, અમારાં લાડકવાયા',
    'ધર્મ, સંસ્કાર અને સંસ્કૃતિના મંગલ પ્રતિબિંબરૂપ,(મૂળ વાંસજાળિયા હાલ વડોદરા નિવાસી)  પુણ્યપ્રદા અ.સૌ. કોકિલાબેન તથા શ્રી ભરતભાઇ જયેન્દ્રભાઈ જ્યોતિષી ના સંસ્કાર સિંચિત આત્મજ',
  ];

  const groomLines = [
    'ચિ. કેયુર',
  ];

  const brideLines = [
    'ધર્મ અને સંસ્કૃતિના મંગલ સંસ્કારોથી વિભૂષિત, (મૂળ રોહિસા હાલ વડોદરા નિવાસી) પુણ્યશીલ અ.સૌ. જીજ્ઞાસાબેન તથા શ્રી દેવેનભાઈ ગુણવંતભાઈ મહેતા ની સંસ્કાર સિંચિત આત્મજા',
    'ચિ. ઈશા',
    'સાથે લગ્નસૂત્રથી સંલગ્ન થઈ પરિણય પથ પર પગલાં પાડશે.',
    'વેદોક્ત મંત્રો, સૌભાગ્ય દ્રવ્યો અને અંતરના ઓવારણાં ભર્યા આ વિવાહ સંસ્કાર પ્રસંગમાં આપશ્રીને પધારવા આગ્રહભર્યું નિમંત્રણ છે.',
  ];

  const weddingInfoLines = [
    '॥ શુભતિથિ ॥',
    'ફાગણ સુદ ચોથ, શનિવાર તા-૨૧/૦૨/૨૦૨૬',
  ];

  const venueLines = [
    '॥ શુભલગ્ન સ્થળ ॥',
    'બાલાજી ગાર્ડન પાર્ટીપ્લોટ',
    'મોટનાથ મહાદેવ મંદિર પાસે, હરણી, વડોદરા',
  ];

  const supportLines = [
    '॥ સ્નેહાધીન ॥',
    'અ.સૌ. ઊર્મિલાબેન રજનીકાંત જ્યોતિષી – શ્રી રજનીકાંત જયેન્દ્રભાઈ જ્યોતિષી',
    'અ.સૌ. નીલાબેન મહેશભાઈ જ્યોતિષી – શ્રી મહેશભાઈ ભાનુશંકરભાન જ્યોતિષી',
    'ગં.સ્વ મીનાબેન  દીપકભાઈ જ્યોતિષી – સ્વ દીપકભાઈ પ્રભુલાલભાઈ જ્યોતિષી',
  ];

  return (
    <PageTransition>
      <div
        className="w-full h-screen bg-cover bg-center bg-no-repeat relative overflow-hidden"
        style={{ backgroundImage: "url('/page-2.png')" }}
      >
        <div className="h-full flex items-start justify-start pt-2 md:pt-3 p-2 md:p-2 relative overflow-hidden overflow-y-auto">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="w-full h-full flex flex-col justify-start"
          >
            <div className="px-2 md:px-4 py-2 md:py-3 text-center space-y-1 md:space-y-1.5 overflow-y-auto max-h-full w-full flex flex-col items-center">
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                <p className="font-gujarati text-xs md:text-sm text-white">
                  || શ્રી ગણેશાય નમઃ ||
                </p>
              </motion.div>

              {/* Title */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                <h1 className="font-gujarati text-lg md:text-2xl font-bold text-yellow-200 drop-shadow-lg">
                  મંગલ પરિણય
                </h1>
              </motion.div>

              {/* Intro */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                <div className="space-y-0.5">
                  <p className="font-gujarati text-xs md:text-sm text-white px-2">
                    આદરણીય સ્નેહીશ્રી: <span className="text-yellow-200 font-bold">{guestName || 'અતિથિ'}</span>
                  </p>
                  {introLines.slice(1).map((line) => (
                    <p key={line} className="font-gujarati text-xs md:text-sm text-white px-2">
                      {line}
                    </p>
                  ))}
                </div>
              </motion.div>

              {/* Groom Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.6 }}
                className="space-y-0.5 md:space-y-1 pt-1"
              >
                {groomLines.map((line, index) => (
                  <p
                    key={line}
                    className={`font-gujarati ${
                      index === 0 ? 'text-lg md:text-2xl font-bold text-yellow-200' : 'text-xs md:text-sm text-white'
                    } px-2`}
                  >
                    {line}
                  </p>
                ))}
              </motion.div>

              {/* Bride Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.6 }}
                className="space-y-0.5 md:space-y-1"
              >
                {brideLines.map((line, index) => (
                  <p
                    key={line}
                    className={`font-gujarati ${
                      index === 1 ? 'text-lg md:text-2xl font-bold text-yellow-200' : 'text-xs md:text-sm text-white'
                    } px-2`}
                  >
                    {line}
                  </p>
                ))}
              </motion.div>

              {/* Decorative Line */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 1.1, duration: 0.6 }}
                className="w-24 h-px bg-yellow-300 my-1"
              />

              {/* Wedding Info */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.3, duration: 0.6 }}
                className="space-y-0.5 md:space-y-1"
              >
                {weddingInfoLines.map((line, index) => (
                  <p
                    key={line}
                    className={`font-gujarati text-xs md:text-sm ${
                      index === 0 ? 'text-yellow-200 font-semibold' : 'text-white'
                    }`}
                  >
                    {line}
                  </p>
                ))}
              </motion.div>

              {/* Venue */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 0.6 }}
                className="space-y-0.5 md:space-y-1"
              >
                {venueLines.map((line, index) => (
                  <p
                    key={line}
                    className={`font-gujarati text-xs md:text-sm ${
                      index === 0 ? 'text-yellow-200 font-semibold' : 'text-white'
                    }`}
                  >
                    {line}
                  </p>
                ))}
              </motion.div>

              {/* Decorative Line */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 1.7, duration: 0.6 }}
                className="w-20 h-px bg-yellow-300 my-1"
              />

              {/* Snedhadhin */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.9, duration: 0.6 }}
                className="space-y-0.5 md:space-y-1"
              >
                {supportLines.map((line, index) => (
                  <p
                    key={line}
                    className={`font-gujarati text-xs md:text-sm ${
                      index === 0 ? 'text-yellow-200 font-semibold' : 'text-white'
                    }`}
                  >
                    {line}
                  </p>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
}
