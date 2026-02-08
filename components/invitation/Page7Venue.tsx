'use client';

import { motion } from 'framer-motion';
import { PageTransition } from '@/components/ui/PageTransition';
import { WeddingCardBackground } from '@/components/ui/WeddingCardBackground';
import { FaMapMarkerAlt, FaPhone, FaDirections } from 'react-icons/fa';

export function Page7Venue() {
  const venueAddress = 'Navneet Lawns, Near Judges Bunglow, Ahmedabad, Gujarat 380054';
  const phone = '+91 98765 43210';
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent('Navneet Lawns Ahmedabad')}`;

  return (
    <PageTransition>
      <WeddingCardBackground variant="red">
        <div className="h-full flex items-center justify-center p-4 md:p-8">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          className="w-full max-w-2xl"
        >
          {/* Content directly on background */}
          <div className="px-4 md:px-12 py-8 md:py-12 space-y-4 md:space-y-6 relative">
              {/* Venue Name */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-center"
              >
                <h3 className="font-gujarati text-3xl md:text-4xl font-bold text-wedding-maroon mb-2">
                  નવનીત લૉન્સ
                </h3>
                <h4 className="font-decorative text-2xl text-wedding-darkGold">
                  Navneet Lawns
                </h4>
              </motion.div>

              {/* Address */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-gradient-to-r from-wedding-maroon/10 to-wedding-burgundy/10 p-6 rounded-2xl border-l-4 border-wedding-maroon space-y-2"
              >
                <div className="flex items-start gap-3">
                  <FaMapMarkerAlt className="w-5 h-5 text-wedding-maroon mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-elegant text-base text-gray-800">
                      {venueAddress}
                    </p>
                    <p className="font-gujarati text-sm text-gray-700 mt-1">
                      જજ બંગલો નજીક, અમદાવાદ, ગુજરાત
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Contact Phone */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="bg-gradient-to-r from-wedding-gold/15 to-wedding-yellow/15 p-6 rounded-2xl border-r-4 border-wedding-gold"
              >
                <div className="flex items-center gap-3">
                  <FaPhone className="w-5 h-5 text-wedding-darkGold flex-shrink-0" />
                  <div>
                    <p className="font-elegant text-sm text-gray-600">Contact</p>
                    <a
                      href={`tel:${phone}`}
                      className="font-decorative text-xl text-wedding-maroon hover:text-wedding-darkGold transition-colors"
                    >
                      {phone}
                    </a>
                  </div>
                </div>
              </motion.div>

              {/* Maps Embed */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 }}
                className="rounded-2xl overflow-hidden shadow-lg h-64"
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.743087766726!2d72.5216!3d23.0225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDAxJzIxLjAiTiA3MsKwMzEnMTcuOCJF!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />
              </motion.div>

              {/* Get Directions Button */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="flex justify-center"
              >
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-wedding-maroon to-wedding-burgundy hover:from-wedding-burgundy hover:to-wedding-maroon text-white font-decorative text-lg px-8 py-3 rounded-full shadow-lg transition-all duration-300 hover:scale-105"
                >
                  <FaDirections className="w-5 h-5" />
                  Get Directions
                </a>
              </motion.div>

              {/* Parking Info */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
                className="text-center text-xs md:text-sm text-gray-600 font-elegant pt-4 border-t border-wedding-gold/20"
              >
                <p className="font-gujarati text-sm md:text-base text-gray-700">
                  પર્કીંગ ની સુવિધા ઉપલબ્ધ છે
                </p>
                <p className="text-gray-600">Ample parking available</p>
              </motion.div>



              {/* Dual Animated Flowers at Bottom */}
              <motion.div
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 1.5, duration: 0.9, type: "spring" }}
                className="absolute bottom-2 left-4 md:left-8 z-10"
              >
                <motion.img
                  src="/p-flower-200w (1).png"
                  alt="Flower"
                  className="w-20 md:w-28 h-auto drop-shadow-xl"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                />
              </motion.div>
              <motion.div
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 1.5, duration: 0.9, type: "spring" }}
                className="absolute bottom-2 right-4 md:right-8 z-10"
              >
                <motion.img
                  src="/p-f-1-200w.png"
                  alt="Flower"
                  className="w-20 md:w-28 h-auto drop-shadow-xl -scale-x-100"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                />
              </motion.div>
            </div>
        </motion.div>
        </div>
      </WeddingCardBackground>
    </PageTransition>
  );
}
