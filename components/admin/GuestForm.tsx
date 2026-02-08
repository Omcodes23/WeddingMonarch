'use client';

import { useState, useEffect } from 'react';
import { FaUserPlus, FaSpinner, FaVolumeUp } from 'react-icons/fa';
import { voiceOverService } from '@/lib/voiceover';

interface GuestFormProps {
  adminPassword: string;
  onGuestCreated: () => void;
}

export function GuestForm({ adminPassword, onGuestCreated }: GuestFormProps) {
  const [guestName, setGuestName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [customMessage, setCustomMessage] = useState('');
  const [selectedVoice, setSelectedVoice] = useState('');
  const [availableVoices, setAvailableVoices] = useState<Array<{ name: string; lang: string; label: string; quality: string; voiceURI?: string }>>([]);
  const [loading, setLoading] = useState(false);
  const [testingVoice, setTestingVoice] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  // Load available voices on component mount
  useEffect(() => {
    if (voiceOverService.isSupported()) {
      // Wait longer for voices to load (especially on first load)
      const loadVoices = () => {
        const voices = voiceOverService.getAvailableVoices();
        console.log('=== LOAD VOICES ===');
        console.log('Available voices:', voices);
        console.log('voices.length:', voices.length);
        if (voices.length > 0) {
          setAvailableVoices(voices);
          // Set first voice as default if available
          if (!selectedVoice) {
            const defaultVoice = voices[0].name;
            console.log('🎤 Setting default voice:', defaultVoice);
            setSelectedVoice(defaultVoice);
          }
        } else {
          // Retry if voices not loaded yet
          setTimeout(loadVoices, 200);
        }
      };
      
      setTimeout(loadVoices, 100);
    }
  }, []);

  const handleTestVoice = async () => {
    if (!guestName.trim()) {
      setError('Please enter a guest name to test the voice');
      return;
    }

    if (!selectedVoice) {
      setError('Please select a voice first');
      return;
    }

    setTestingVoice(true);
    setError('');

    try {
      console.log('=== TEST VOICE ADMIN ===');
      console.log('selectedVoice:', selectedVoice);
      console.log('selectedVoice === "PRE_RECORDED":', selectedVoice === 'PRE_RECORDED');
      
      // For pre-recorded, don't generate greeting, just play audio
      if (selectedVoice === 'PRE_RECORDED') {
        console.log('✅ PRE_RECORDED detected in admin test');
        await voiceOverService.speak({
          text: '',
          voiceName: selectedVoice,
        });
      } else {
        const greeting = voiceOverService.generateGreeting(guestName.trim(), customMessage.trim());
        await voiceOverService.speak({
          text: greeting,
          voiceName: selectedVoice,
        });
      }

      const voiceLabel = availableVoices.find(v => v.name === selectedVoice)?.label || selectedVoice;
      setSuccess(`✅ Voice test completed with: ${voiceLabel}`);

      setTimeout(() => setSuccess(''), 3000);
    } catch (err: any) {
      setError('Failed to play voice: ' + (err.message || 'Unknown error'));
    } finally {
      setTestingVoice(false);
    }
  };

  const handleQuickTest = async () => {
    if (!selectedVoice) {
      setError('Please select a voice first');
      return;
    }

    setTestingVoice(true);
    setError('');

    try {
      // Pre-recorded audio plays the file, others speak test text
      if (selectedVoice === 'PRE_RECORDED') {
        await voiceOverService.speak({
          text: '',
          voiceName: selectedVoice,
        });
      } else {
        const testText = 'નમસ્તે. આ વોઇસ ટેસ્ટ છે.'; // "Namaste. This is a voice test."
        await voiceOverService.speak({
          text: testText,
          voiceName: selectedVoice,
        });
      }

      const voiceLabel = availableVoices.find(v => v.name === selectedVoice)?.label || selectedVoice;
      setSuccess(`✅ Quick test: ${voiceLabel}`);
      setTimeout(() => setSuccess(''), 2000);
    } catch (err: any) {
      setError('Failed to play voice: ' + (err.message || 'Unknown error'));
    } finally {
      setTestingVoice(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!guestName.trim()) {
      setError('Guest name is required');
      return;
    }

    setLoading(true);

    try {
      console.log('=== SUBMIT FORM ===');
      console.log('selectedVoice:', selectedVoice);
      console.log('typeof selectedVoice:', typeof selectedVoice);
      console.log('selectedVoice === "PRE_RECORDED":', selectedVoice === 'PRE_RECORDED');
      
      const payload = {
        guestName: guestName.trim(),
        phoneNumber: phoneNumber.trim(),
        customMessage: customMessage.trim(),
        voiceName: selectedVoice || undefined,
        adminPassword,
      };
      
      console.log('📤 Sending payload to API:', payload);
      
      const response = await fetch('/api/admin/create-invitation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();  // THIS WAS MISSING!

      console.log('📥 API Response:', data);
      console.log('📥 Response invitation:', data.invitation);
      console.log('📥 Response voiceName:', data.invitation?.voiceName);
      console.log('📥 typeof voiceName:', typeof data.invitation?.voiceName);

      if (data.success) {
        setSuccess(`Invitation created for ${data.invitation.guestName}!`);
        console.log('✅ SUCCESS - Clearing form and voiceName');
        setGuestName('');
        setPhoneNumber('');
        setCustomMessage('');
        setSelectedVoice(''); // Reset voice selection after successful creation
        onGuestCreated();
      } else {
        setError(data.error || 'Failed to create invitation');
      }
    } catch (err: any) {
      setError(err.message || 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
      <div className="flex items-center gap-3 mb-6">
        <FaUserPlus className="w-6 h-6 text-wedding-maroon" />
        <h2 className="text-2xl md:text-3xl font-decorative text-wedding-maroon">
          Add New Guest
        </h2>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Guest Name */}
        <div>
          <label htmlFor="guestName" className="block text-sm font-medium text-gray-700 mb-2">
            Guest Name *
          </label>
          <input
            type="text"
            id="guestName"
            value={guestName}
            onChange={(e) => setGuestName(e.target.value)}
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-wedding-gold focus:outline-none transition-colors"
            placeholder="Enter guest name"
            required
          />
        </div>

        {/* Voice Selection */}
        <div>
          <label htmlFor="voiceSelection" className="block text-sm font-medium text-gray-700 mb-2">
            Select Voice for Gujarati Greeting (Free)
          </label>
          <div className="flex gap-2">
            <select
              id="voiceSelection"
              value={selectedVoice}
              onChange={(e) => {
                const newVoice = e.target.value;
                console.log('🎤 VOICE SELECTION CHANGED');
                console.log('newVoice:', newVoice);
                console.log('typeof newVoice:', typeof newVoice);
                console.log('newVoice === "PRE_RECORDED":', newVoice === 'PRE_RECORDED');
                setSelectedVoice(newVoice);
                setSuccess(''); // Clear success message when changing voice
                setError(''); // Clear error message when changing voice
              }}
              disabled={availableVoices.length === 0}
              className="flex-1 px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-wedding-gold focus:outline-none transition-colors font-mono text-xs disabled:bg-gray-100"
            >
              {availableVoices.length === 0 ? (
                <option value="">Loading voices...</option>
              ) : (
                availableVoices.map((voice, index) => (
                  <option 
                    key={`${voice.name}-${index}`} 
                    value={voice.name}
                    className="font-mono"
                  >
                    {voice.label}
                  </option>
                ))
              )}
            </select>
            <button
              type="button"
              onClick={handleQuickTest}
              disabled={testingVoice || !selectedVoice}
              className="px-3 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-1 whitespace-nowrap text-sm"
              title="Quick test this voice"
            >
              {testingVoice ? (
                <FaSpinner className="animate-spin" />
              ) : (
                <>🔊</>
              )}
            </button>
            <button
              type="button"
              onClick={handleTestVoice}
              disabled={testingVoice || !guestName.trim() || !selectedVoice}
              className="px-4 py-3 bg-wedding-gold hover:bg-wedding-darkGold text-white rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 whitespace-nowrap"
              title="Test voice with guest name"
            >
              {testingVoice ? (
                <>
                  <FaSpinner className="animate-spin" />
                  Playing...
                </>
              ) : (
                <>
                  <FaVolumeUp />
                  Test
                </>
              )}
            </button>
          </div>
          {selectedVoice && (
            <div className="mt-2 p-2 bg-blue-50 border border-blue-200 rounded text-xs text-blue-800">
              <div className="font-bold mb-1">📢 Currently selected: {availableVoices.find(v => v.name === selectedVoice)?.label || selectedVoice}</div>
              <div className="text-gray-600 space-y-0.5">
                {selectedVoice === 'PRE_RECORDED' ? (
                  <div>🎙️ Pre-recorded audio will play (no guest name spoken)</div>
                ) : (
                  <>
                    <div>🔊 = Quick test (short phrase)</div>
                    <div>Test = Full greeting with guest name</div>
                  </>
                )}
              </div>
            </div>
          )}
          <div className="flex items-center gap-2 mt-1">
            <p className="text-xs text-gray-500 flex-1">
              {selectedVoice === 'PRE_RECORDED' ? (
                <>🎙️ Pre-recorded: Plays gretting.mp3 file (ignores guest name & custom message)</>
              ) : (
                <>⭐⭐⭐ Browser voices: Speaks "Jai Shree Krishna" + Guest Name + Custom Message (if provided)</>
              )}
            </p>
          </div>
        </div>

        {/* Phone Number */}
        <div>
          <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-2">
            Phone Number
          </label>
          <input
            type="tel"
            id="phoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-wedding-gold focus:outline-none transition-colors"
            placeholder="+91 98765 43210"
          />
        </div>

        {/* Custom Message - Only for Browser Voices */}
        {selectedVoice !== 'PRE_RECORDED' && (
          <div>
            <label htmlFor="customMessage" className="block text-sm font-medium text-gray-700 mb-2">
              Custom Message (Optional, Gujarati)
            </label>
            <p className="text-xs text-gray-500 mb-2">
              Will be spoken after guest name: "Jai Shree Krishna, [Name], [Your custom message]"
            </p>
            <textarea
              id="customMessage"
              value={customMessage}
              onChange={(e) => setCustomMessage(e.target.value)}
              rows={3}
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-wedding-gold focus:outline-none transition-colors font-gujarati"
              placeholder="આપનું હાર્દિક સ્વાગત છે..."
            />
          </div>
        )}

        {/* Error Message */}
        {error && (
          <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded">
            <p className="text-red-700">{error}</p>
          </div>
        )}

        {/* Success Message */}
        {success && (
          <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded">
            <p className="text-green-700">{success}</p>
          </div>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-wedding-maroon hover:bg-wedding-burgundy text-white font-decorative text-lg py-3 px-6 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {loading ? (
            <>
              <FaSpinner className="animate-spin" />
              Creating...
            </>
          ) : (
            <>
              <FaUserPlus />
              Create Invitation
            </>
          )}
        </button>
      </form>
    </div>
  );
}
