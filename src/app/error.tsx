'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Home, RefreshCcw } from 'lucide-react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Video Background */}
      <div className="fixed inset-0 w-full h-full overflow-hidden -z-10 bg-black">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          preload="auto"
          poster="/ofc-1.jpg"
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src="/Ofc/1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black/70" />
      </div>

      {/* Content */}
      <div className="relative flex-1 flex flex-col items-center justify-center text-center px-4">
        <div className="space-y-6">
          <h1 className="font-headline text-7xl md:text-9xl font-bold text-primary">ERROR</h1>
          <h2 className="font-headline text-3xl md:text-5xl font-bold uppercase tracking-wider text-white">
            Something Went Wrong
          </h2>
          <p className="text-lg md:text-xl text-white/80 max-w-md mx-auto">
            An unexpected error occurred. Please try again or return to the home page.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Button onClick={reset} size="lg" className="glow-on-hover font-bold">
              <RefreshCcw className="mr-2 h-5 w-5" />
              Try Again
            </Button>
            <Button asChild variant="outline" size="lg" className="font-bold border-2 border-white/50 text-white hover:bg-white/10">
              <Link href="/">
                <Home className="mr-2 h-5 w-5" />
                Back to Home
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
