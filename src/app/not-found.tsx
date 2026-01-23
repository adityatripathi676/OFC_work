import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Video Background */}
      <div className="fixed inset-0 w-full h-full overflow-hidden -z-10">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src="/Ofc/DOC-20251231-WA0008_.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black/70" />
      </div>

      {/* Content */}
      <div className="relative flex-1 flex flex-col items-center justify-center text-center px-4">
        <div className="space-y-6">
          <h1 className="font-headline text-9xl md:text-[12rem] font-bold text-primary">404</h1>
          <h2 className="font-headline text-3xl md:text-5xl font-bold uppercase tracking-wider text-white">
            Page Not Found
          </h2>
          <p className="text-lg md:text-xl text-white/80 max-w-md mx-auto">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Button asChild size="lg" className="glow-on-hover font-bold">
              <Link href="/">
                <Home className="mr-2 h-5 w-5" />
                Back to Home
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="font-bold border-2 border-white/50 text-white hover:bg-white/10">
              <Link href="/events">
                <ArrowLeft className="mr-2 h-5 w-5" />
                View Events
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
