import Link from 'next/link';
import { Instagram, Mail } from 'lucide-react';
import { OfcLogo } from './logo';

function MessageCircle(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="bg-black border-t-2 border-primary">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <Link href="/" className="flex items-center justify-center md:justify-start gap-2 mb-1" aria-label="OctaFight Home">
              <OfcLogo className="h-8 w-auto text-primary" />
              <span className="font-headline text-2xl font-bold text-white">
                OctaFight
              </span>
            </Link>
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} Octa Fighting Championship. All Rights Reserved.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="WhatsApp">
              <MessageCircle className="size-5" />
            </a>
            <a href="mailto:contact@ofc.com" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Email">
              <Mail className="size-5" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Instagram">
              <Instagram className="size-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
