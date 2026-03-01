import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Toaster } from "@/components/ui/toaster"
import { SmoothScroll } from '@/components/smooth-scroll';
import { Analytics } from '@vercel/analytics/next';

export const metadata: Metadata = {
  title: 'OFC Octa Fighting Championship - Fight. Discipline. Glory.',
  description: 'OFC Octa Fighting Championship is a serious platform for professional fighters. Join us for professional fights, fair judging, and real opportunity.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Allan&family=Bangers&family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" />
      </head>
      <body className={cn('font-body antialiased min-h-screen')}>
        <SmoothScroll>
          <div className="flex flex-col min-h-screen overflow-x-clip">
            <Header />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
            <Toaster />
          </div>
        </SmoothScroll>
        <Analytics />
      </body>
    </html>
  );
}
