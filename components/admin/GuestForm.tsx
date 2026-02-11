'use client';

import { useState } from 'react';
import { FaUserPlus, FaSpinner } from 'react-icons/fa';

interface GuestFormProps {
  adminPassword: string;
  onGuestCreated: () => void;
}

export function GuestForm({ adminPassword, onGuestCreated }: GuestFormProps) {
  const [guestName, setGuestName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [customMessage, setCustomMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

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
      const payload = {
        guestName: guestName.trim(),
        phoneNumber: phoneNumber.trim(),
        customMessage: customMessage.trim(),
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

        {/* Optional Message */}
        <div>
          <label htmlFor="customMessage" className="block text-sm font-medium text-gray-700 mb-2">
            Message (Optional)
          </label>
          <textarea
            id="customMessage"
            value={customMessage}
            onChange={(e) => setCustomMessage(e.target.value)}
            rows={3}
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-wedding-gold focus:outline-none transition-colors font-gujarati"
            placeholder="આપનું હાર્દિક સ્વાગત છે..."
          />
        </div>

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
