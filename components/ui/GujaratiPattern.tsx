'use client';

export function GujaratiPattern({ position = 'top' }: { position?: 'top' | 'bottom' }) {
  const topPattern = (
    <svg
      className="w-full h-24"
      viewBox="0 0 1200 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 50 Q 100 20, 200 50 T 400 50 T 600 50 T 800 50 T 1000 50 T 1200 50"
        stroke="url(#gradient)"
        strokeWidth="3"
        fill="none"
      />
      <circle cx="200" cy="50" r="8" fill="url(#gradient)" />
      <circle cx="600" cy="50" r="8" fill="url(#gradient)" />
      <circle cx="1000" cy="50" r="8" fill="url(#gradient)" />
      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#FFD700" />
          <stop offset="50%" stopColor="#B8860B" />
          <stop offset="100%" stopColor="#800020" />
        </linearGradient>
      </defs>
    </svg>
  );

  const bottomPattern = (
    <svg
      className="w-full h-24"
      viewBox="0 0 1200 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 50 Q 100 80, 200 50 T 400 50 T 600 50 T 800 50 T 1000 50 T 1200 50"
        stroke="url(#gradient2)"
        strokeWidth="3"
        fill="none"
      />
      <path
        d="M100 20 L120 40 L100 60 L80 40 Z"
        fill="url(#gradient2)"
        opacity="0.6"
      />
      <path
        d="M500 20 L520 40 L500 60 L480 40 Z"
        fill="url(#gradient2)"
        opacity="0.6"
      />
      <path
        d="M900 20 L920 40 L900 60 L880 40 Z"
        fill="url(#gradient2)"
        opacity="0.6"
      />
      <defs>
        <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#800020" />
          <stop offset="50%" stopColor="#B8860B" />
          <stop offset="100%" stopColor="#FFD700" />
        </linearGradient>
      </defs>
    </svg>
  );

  return (
    <div className="w-full overflow-hidden">
      {position === 'top' ? topPattern : bottomPattern}
    </div>
  );
}
