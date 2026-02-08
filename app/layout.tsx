import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Keyur & Isha Wedding Invitation',
  description: 'You are cordially invited to the wedding celebration of Keyur and Isha',
  keywords: ['wedding', 'invitation', 'gujarati wedding', 'Keyur', 'Isha'],
  openGraph: {
    title: 'Keyur & Isha Wedding Invitation',
    description: 'You are cordially invited to the wedding celebration of Keyur and Isha',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>💍</text></svg>" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
