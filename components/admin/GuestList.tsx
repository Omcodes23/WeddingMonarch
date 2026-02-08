'use client';

import { useState } from 'react';
import { FaTrash, FaEye, FaEyeSlash, FaSearch } from 'react-icons/fa';
import { CopyButton } from './CopyButton';
import { formatDate } from '@/lib/utils';

interface Invitation {
  id: string;
  guestName: string;
  slug: string;
  phoneNumber?: string;
  viewed: boolean;
  viewedAt?: Date;
  createdAt: Date;
  invitationUrl: string;
}

interface GuestListProps {
  invitations: Invitation[];
  adminPassword: string;
  onDelete: () => void;
}

export function GuestList({ invitations, adminPassword, onDelete }: GuestListProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [deleting, setDeleting] = useState<string | null>(null);

  const filteredInvitations = invitations.filter((inv) =>
    inv.guestName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleDelete = async (id: string, guestName: string) => {
    if (!confirm(`Are you sure you want to delete the invitation for ${guestName}?`)) {
      return;
    }

    setDeleting(id);

    try {
      const response = await fetch(`/api/admin/invitation/${id}`, {
        method: 'DELETE',
        headers: {
          'x-admin-password': adminPassword,
        },
      });

      const data = await response.json();

      if (data.success) {
        onDelete();
      } else {
        alert(data.error || 'Failed to delete invitation');
      }
    } catch (err: any) {
      alert(err.message || 'An error occurred');
    } finally {
      setDeleting(null);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl md:text-3xl font-decorative text-wedding-maroon">
          Guest List
        </h2>
        <div className="text-sm text-gray-600">
          Total: <span className="font-bold text-wedding-maroon">{invitations.length}</span>
        </div>
      </div>

      {/* Search */}
      <div className="mb-6">
        <div className="relative">
          <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search guests..."
            className="w-full pl-12 pr-4 py-3 border-2 border-gray-300 rounded-lg focus:border-wedding-gold focus:outline-none transition-colors"
          />
        </div>
      </div>

      {/* Guest List */}
      {filteredInvitations.length === 0 ? (
        <div className="text-center py-12 text-gray-500">
          {searchTerm ? 'No guests found' : 'No guests added yet'}
        </div>
      ) : (
        <div className="space-y-4">
          {filteredInvitations.map((invitation) => (
            <div
              key={invitation.id}
              className="border-2 border-gray-200 rounded-xl p-4 hover:border-wedding-gold transition-colors"
            >
              <div className="flex flex-col md:flex-row md:items-center gap-4">
                {/* Guest Info */}
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-decorative text-xl text-wedding-maroon">
                      {invitation.guestName}
                    </h3>
                    {invitation.viewed ? (
                      <span className="flex items-center gap-1 text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
                        <FaEye className="w-3 h-3" />
                        Viewed
                      </span>
                    ) : (
                      <span className="flex items-center gap-1 text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                        <FaEyeSlash className="w-3 h-3" />
                        Not viewed
                      </span>
                    )}
                  </div>
                  
                  {invitation.phoneNumber && (
                    <p className="text-sm text-gray-600 mb-1">{invitation.phoneNumber}</p>
                  )}
                  
                  <p className="text-xs text-gray-500">
                    Created: {formatDate(invitation.createdAt)}
                  </p>
                  
                  {invitation.viewed && invitation.viewedAt && (
                    <p className="text-xs text-green-600">
                      Viewed: {formatDate(invitation.viewedAt)}
                    </p>
                  )}
                </div>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row gap-2">
                  <CopyButton text={invitation.invitationUrl} label="Copy Link" />
                  <button
                    onClick={() => handleDelete(invitation.id, invitation.guestName)}
                    disabled={deleting === invitation.id}
                    className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-sm font-medium"
                  >
                    <FaTrash className="w-4 h-4" />
                    {deleting === invitation.id ? 'Deleting...' : 'Delete'}
                  </button>
                </div>
              </div>

              {/* URL Display */}
              <div className="mt-3 pt-3 border-t border-gray-200">
                <p className="text-xs text-gray-500 break-all">{invitation.invitationUrl}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
