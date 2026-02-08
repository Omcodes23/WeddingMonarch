'use client';

import { useState } from 'react';
import { FaCopy, FaCheck } from 'react-icons/fa';

interface CopyButtonProps {
  text: string;
  label?: string;
}

export function CopyButton({ text, label = 'Copy' }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <button
      onClick={handleCopy}
      className="flex items-center gap-2 bg-wedding-gold hover:bg-wedding-darkGold text-white px-4 py-2 rounded-lg transition-all duration-200 text-sm font-medium"
      title={label}
    >
      {copied ? (
        <>
          <FaCheck className="w-4 h-4" />
          Copied!
        </>
      ) : (
        <>
          <FaCopy className="w-4 h-4" />
          {label}
        </>
      )}
    </button>
  );
}
