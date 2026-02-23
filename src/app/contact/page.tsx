"use client";

import Image from 'next/image';
import { Instagram, Mail } from 'lucide-react';

import { placeholderImages } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { FadeIn } from '@/components/fade-in';
import { FighterRegistrationForm } from '@/components/fighter-registration-form';
import { ScrollReveal, ScrollProgressBar } from '@/components/scroll-animations';

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

export default function ContactPage() {
  const mapImage = placeholderImages.find(p => p.id === 'contact-map');

  return (
    <div className="min-h-screen">
      {/* Scroll Progress Bar */}
      <ScrollProgressBar />
      
      <FadeIn>
        <section>
          <header className="text-center mb-12">
            <h1 className="font-headline text-4xl md:text-6xl font-black uppercase tracking-wider text-primary combat-shadow-strong">Contact Us</h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground font-semibold">
              Ready to join the ranks? Have questions? Reach out to the OFC Octa Fighting Championship team.
            </p>
            <Separator className="w-32 h-1 mx-auto mt-6 bg-gradient-to-r from-transparent via-primary to-transparent" />
          </header>

          <div className="max-w-4xl mx-auto flex flex-col items-center gap-8">
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" variant="outline" className="font-bold border-2">
                <a href="https://wa.me/9311477309" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2" /> WhatsApp Us
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="font-bold border-2">
                <a href="mailto:octafightingchampionship@gmail.com">
                  <Mail className="mr-2" /> Email Us
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="font-bold border-2">
                <a href="https://www.instagram.com/ofcxindia" target="_blank" rel="noopener noreferrer">
                  <Instagram className="mr-2" /> Follow on Instagram
                </a>
              </Button>
            </div>

            {mapImage && (
              <div className="relative w-full aspect-[16/6] mt-8 rounded-lg overflow-hidden border">
                <Image
                  src={mapImage.imageUrl}
                  alt={mapImage.description}
                  fill
                  className="object-cover"
                  data-ai-hint={mapImage.imageHint}
                />
                 <div className="absolute inset-0 bg-black/50" />
                 <div className="absolute inset-0 flex items-center justify-center">
                    <p className="text-white font-headline text-2xl md:text-4xl uppercase">Our Headquarters - Las Vegas</p>
                 </div>
              </div>
            )}
          </div>
        </section>
      </FadeIn>
    </div>
  );
}
