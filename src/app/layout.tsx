import type { ReactNode } from 'react';
import type { Metadata } from 'next';
import '@fontsource/poppins/400.css';
import '@fontsource/poppins/500.css';
import '@fontsource/poppins/600.css';
import '@fontsource/poppins/700.css';
import './globals.css';
import { WhatsAppCTA } from '@/components/navigation/WhatsAppCTA';
import { BackgroundAtmosphere } from '@/components/ui/BackgroundAtmosphere';

export const metadata: Metadata = {
  title: 'Children Choice Publication Pvt. Ltd. | Learning for Every Generation',
  description: 'Discover thoughtful learning books and the story behind Children Choice Publication Pvt. Ltd.',
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <BackgroundAtmosphere />
        {children}
        <WhatsAppCTA />
      </body>
    </html>
  );
}
