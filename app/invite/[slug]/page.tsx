'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { Page1Ganesh } from '@/components/invitation/Page1Ganesh';
import { Page2MangalParivar } from '@/components/invitation/Page2MangalParivar';
import { Page3VigataHostInfo } from '@/components/invitation/Page3VigataHostInfo';
import { Page4ShubhvichaarCover } from '@/components/invitation/Page4ShubhvichaarCover';
import { voiceOverService } from '@/lib/voiceover';

export default function InvitationPage() {
  const params = useParams();
  const slug = params.slug as string;
  
  const [loading, setLoading] = useState(true);
  const [showOverlay, setShowOverlay] = useState(false);
  const [error, setError] = useState('');
  const [guestData, setGuestData] = useState<{
    guestName: string;
    customMessage?: string;
    voiceName?: string;
  } | null>(null);

  useEffect(() => {
    const fetchInvitation = async () => {
      try {
        const response = await fetch(`/api/invitation/${slug}`);
        const data = await response.json();

        console.log('=== FETCH INVITATION RESPONSE ===');
        console.log('Full response:', data);
        console.log('data.invitation:', data.invitation);
        console.log('data.invitation.voiceName:', data.invitation?.voiceName);
        console.log('typeof data.invitation.voiceName:', typeof data.invitation?.voiceName);

        if (data.success) {
          console.log('✅ Fetched guestData:', data.invitation);
          setGuestData(data.invitation);
          setShowOverlay(true); // Show overlay after loading
        } else {
          setError(data.error || 'Invitation not found');
        }
      } catch (err: any) {
        setError(err.message || 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      fetchInvitation();
    }
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-wedding-maroon to-wedding-burgundy flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin w-16 h-16 border-4 border-wedding-gold border-t-transparent rounded-full mx-auto mb-4"></div>
          <p className="font-gujarati text-2xl text-wedding-gold">લોડ કરી રહ્યા છીએ...</p>
          <p className="font-elegant text-lg text-wedding-cream mt-2">Loading your invitation...</p>
        </div>
      </div>
    );
  }

  if (error || !guestData) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-wedding-maroon to-wedding-burgundy flex items-center justify-center px-4">
        <div className="text-center max-w-md">
          <div className="text-6xl mb-6">😔</div>
          <h1 className="font-decorative text-3xl text-wedding-gold mb-4">
            Invitation Not Found
          </h1>
          <p className="font-elegant text-lg text-wedding-cream">
            {error || 'The invitation you are looking for does not exist.'}
          </p>
        </div>
      </div>
    );
  }

  const customMessageToUse = guestData.customMessage?.toString().trim() || '';

  // Generate voice-over text or use pre-recorded
  const voiceOverText = guestData.voiceName === 'PRE_RECORDED' 
    ? '' 
    : voiceOverService.generateGreeting(guestData.guestName, customMessageToUse);

  const handleOverlayClick = async () => {
    try {
      console.log('=== OVERLAY CLICKED ===');
      console.log('guestData:', guestData);
      console.log('guestData.voiceName:', guestData.voiceName);
      console.log('typeof guestData.voiceName:', typeof guestData.voiceName);
      
      // Use EXACT voiceName from database - no modification
      const voiceNameToUse = guestData.voiceName === 'PRE_RECORDED' 
        ? 'PRE_RECORDED' 
        : guestData.voiceName;
      console.log('voiceNameToUse:', voiceNameToUse);
      console.log('voiceNameToUse === "PRE_RECORDED":', voiceNameToUse === 'PRE_RECORDED');
      
      // TextToSpeak - empty for PRE_RECORDED, greeting for others
      const textToSpeak = voiceNameToUse === 'PRE_RECORDED' 
        ? '' 
        : voiceOverService.generateGreeting(guestData.guestName, customMessageToUse);

      const normalizedTextToSpeak = textToSpeak.replace(/\s+/g, ' ').trim();
      
      console.log('textToSpeak:', textToSpeak);
      
      // Call speak with EXACT values
      console.log('🎤 Calling voiceOverService.speak() with:', {
        text: voiceNameToUse === 'PRE_RECORDED' ? '' : normalizedTextToSpeak,
        voiceName: voiceNameToUse,
      });
      
      voiceOverService.speak({ 
        text: textToSpeak,
        voiceName: voiceNameToUse,
      }).catch((error) => {
        console.error('❌ voiceOverService.speak() error:', error);
      });

      // Close overlay immediately on click
      setShowOverlay(false);
    } catch (error) {
      console.error('❌ Error in handleOverlayClick:', error);
      setShowOverlay(false);
    }
  };

  return (
    <>
      {/* Click Overlay to See Invitation */}
      {showOverlay && (
        <div 
          onClick={handleOverlayClick}
          className="fixed inset-0 bg-black/40 backdrop-blur-md flex items-center justify-center z-50 cursor-pointer"
        >
          <div className="text-center px-6">
            <p className="font-gujarati text-3xl text-wedding-gold font-bold">
              આહીયે ક્લિક કરો તમરું આમંત્રણ જોવા માટે
            </p>
          </div>
        </div>
      )}

      {/* Invitation Pages - 4 Page Traditional Structure */}
      <div className="overflow-x-hidden">
        {/* Page 4: Cover/Front Page */}
        <Page4ShubhvichaarCover guestName={guestData.guestName} />
        
        {/* Page 1: Ganesh - Ceremonies */}
        <Page1Ganesh />
        
        {/* Page 2: Mangal Parivar - Couple & Family */}
        <Page2MangalParivar />
        
        {/* Page 3: Family Information */}
        <Page3VigataHostInfo />
      </div>

      {/* Scroll Progress Indicator */}
      <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50">
        <div className="bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
          <p className="text-xs text-gray-600 font-elegant">
            Scroll to explore
          </p>
        </div>
      </div>
    </>
  );
}
