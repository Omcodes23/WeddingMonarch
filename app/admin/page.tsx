'use client';

import { useState, useEffect } from 'react';
import { GuestForm } from '@/components/admin/GuestForm';
import { GuestList } from '@/components/admin/GuestList';
import { FaLock, FaHeart } from 'react-icons/fa';

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [adminPassword, setAdminPassword] = useState('');
  const [error, setError] = useState('');
  const [invitations, setInvitations] = useState([]);
  const [loading, setLoading] = useState(false);

  // Restore session from localStorage on mount
  useEffect(() => {
    const savedPassword = localStorage.getItem('adminPassword');
    if (savedPassword) {
      setAdminPassword(savedPassword);
      setIsAuthenticated(true);
    }
  }, []);

  useEffect(() => {
    if (isAuthenticated) {
      fetchInvitations();
    }
  }, [isAuthenticated]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!password) {
      setError('Password is required');
      return;
    }

    // Save password to localStorage (binary approach: correct password or no persistence)
    // Simple client-side check - actual validation happens in API
    setAdminPassword(password);
    setIsAuthenticated(true);
    
    // Save to localStorage for persistence across refreshes
    localStorage.setItem('adminPassword', password);
  };

  const fetchInvitations = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/admin/invitations', {
        headers: {
          'x-admin-password': adminPassword || password,
        },
      });

      const data = await response.json();

      if (data.success) {
        setInvitations(data.invitations);
      } else {
        if (response.status === 401) {
          setError('Invalid password');
          setIsAuthenticated(false);
          setAdminPassword('');
        } else {
          setError(data.error || 'Failed to fetch invitations');
        }
      }
    } catch (err: any) {
      setError(err.message || 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  const handleGuestCreated = () => {
    fetchInvitations();
  };

  const handleGuestDeleted = () => {
    fetchInvitations();
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-wedding-maroon via-wedding-burgundy to-wedding-maroon flex items-center justify-center px-4">
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 w-full max-w-md">
          <div className="text-center mb-8">
            <div className="inline-block p-4 bg-wedding-gold rounded-full mb-4">
              <FaLock className="w-8 h-8 text-wedding-maroon" />
            </div>
            <h1 className="font-decorative text-3xl md:text-4xl text-wedding-maroon mb-2">
              Admin Panel
            </h1>
            <p className="font-elegant text-gray-600">
              Wedding Invitation Manager
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                Admin Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-wedding-gold focus:outline-none transition-colors"
                placeholder="Enter admin password"
                autoFocus
              />
            </div>

            {error && (
              <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded">
                <p className="text-red-700 text-sm">{error}</p>
              </div>
            )}

            <button
              type="submit"
              className="w-full bg-wedding-maroon hover:bg-wedding-burgundy text-white font-decorative text-lg py-3 px-6 rounded-lg transition-colors"
            >
              Login
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-xs text-gray-500">
              Keyur & Isha Wedding 2025
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-wedding-cream via-wedding-rose to-wedding-cream">
      {/* Header */}
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <FaHeart className="w-8 h-8 text-wedding-maroon" />
              <div>
                <h1 className="font-decorative text-2xl md:text-3xl text-wedding-maroon">
                  Wedding Invitations
                </h1>
                <p className="font-elegant text-sm text-gray-600">
                  Keyur & Isha - February 2025
                </p>
              </div>
            </div>
            <button
              onClick={() => {
                setIsAuthenticated(false);
                setAdminPassword('');
                setPassword('');
                setInvitations([]);
                // Clear localStorage on logout
                localStorage.removeItem('adminPassword');
              }}
              className="text-sm text-gray-600 hover:text-wedding-maroon transition-colors"
            >
              Logout
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Guest Form */}
          <div>
            <GuestForm adminPassword={adminPassword} onGuestCreated={handleGuestCreated} />
          </div>

          {/* Guest List */}
          <div className="lg:col-span-1">
            {loading && invitations.length === 0 ? (
              <div className="bg-white rounded-2xl shadow-xl p-12 text-center">
                <div className="animate-spin w-12 h-12 border-4 border-wedding-gold border-t-transparent rounded-full mx-auto"></div>
                <p className="mt-4 text-gray-600">Loading invitations...</p>
              </div>
            ) : (
              <GuestList
                invitations={invitations}
                adminPassword={adminPassword}
                onDelete={handleGuestDeleted}
              />
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
