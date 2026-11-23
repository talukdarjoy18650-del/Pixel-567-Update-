import type { Metadata } from 'next';
import { Pixelify_Sans, Nunito } from 'next/font/google';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';

const pixelifySans = Pixelify_Sans({
  subsets: ['latin'],
  weight: ['500', '700'],
  variable: '--font-pixelify',
});

const nunito = Nunito({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-nunito',
});

export const metadata: Metadata = {
  title: 'Minecraft Pixel Art Generator',
  description: 'Ultimate Edition: Convert images into block art and Sponge Schematics.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${pixelifySans.variable} ${nunito.variable}`}>
      <body className="font-body antialiased">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
