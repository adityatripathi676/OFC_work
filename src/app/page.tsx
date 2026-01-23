
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  Trophy,
  Scale,
  Handshake,
  Dumbbell,
} from 'lucide-react';

import { Button } from '@/components/ui/button';
import { OfcLogo } from '@/components/logo';
import { placeholderImages, sponsors } from '@/lib/data';
import { Separator } from '@/components/ui/separator';
import { FadeIn } from '@/components/fade-in';
import { FighterRegistrationForm } from '@/components/fighter-registration-form';
import { ZoomParallax } from '@/components/ui/zoom-parallax';
import { DestinationCard } from '@/components/ui/card-21';
import { TravelCard } from '@/components/ui/card-7';

export default function Home() {
  const whyOFC = [
    {
      icon: <Dumbbell className="size-8 text-white/80" />,
      title: 'Professional Fights',
      description: 'Compete in professionally sanctioned bouts.',
    },
    {
      icon: <Scale className="size-8 text-white/80" />,
      title: 'Fair Judging',
      description: 'Unbiased, expert judges ensure every fight is fair.',
    },
    {
      icon: <Trophy className="size-8 text-white/80" />,
      title: 'Real Opportunity',
      description: 'A genuine path to elevate your fighting career.',
    },
    {
      icon: <Handshake className="size-8 text-white/80" />,
      title: 'Discipline & Respect',
      description: 'We uphold the core values of martial arts.',
    },
  ];

  const whyOFCImages = [
    placeholderImages.find(p => p.id === 'why-ofc-1')!,
    placeholderImages.find(p => p.id === 'why-ofc-2')!,
    placeholderImages.find(p => p.id === 'why-ofc-3')!,
    placeholderImages.find(p => p.id === 'why-ofc-4')!,
  ];

  const divisionCards = [
    {
      name: 'MMA',
      icon: '🥊',
      imageUrl: placeholderImages.find(p => p.id === 'gallery-2')?.imageUrl!,
      stats: 'The pinnacle of combat sports.',
    },
    {
      name: 'Boxing',
      icon: '🥊',
      imageUrl: placeholderImages.find(p => p.id === 'gallery-3')?.imageUrl!,
      stats: 'The sweet science of striking.',
    },
    {
      name: 'Kickboxing',
      icon: '🦵',
      imageUrl: placeholderImages.find(p => p.id === 'home-gallery-4')?.imageUrl!,
      stats: 'Devastating kicks and punches.',
    },
    {
      name: 'Grappling',
      icon: '🤼',
      imageUrl: placeholderImages.find(p => p.id === 'gallery-4')?.imageUrl!,
      stats: 'The art of submission.',
    },
  ];

  const galleryImages = placeholderImages.filter(p => p.group === 'home-gallery');

  const parallaxImages = [
    { src: '/ofc-1.jpg', alt: 'OFC Fighter' },
    placeholderImages.find(p => p.id === 'gallery-2'),
    placeholderImages.find(p => p.id === 'gallery-4'),
    placeholderImages.find(p => p.id === 'gallery-8'),
    placeholderImages.find(p => p.id === 'gallery-3'),
    placeholderImages.find(p => p.id === 'home-gallery-2'),
    placeholderImages.find(p => p.id === 'video-thumb'),
  ].filter(p => !!p).map(p => p.src ? p : ({ src: p!.imageUrl, alt: p!.description }));

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <ZoomParallax images={parallaxImages}>
        <OfcLogo className="w-48 h-auto mb-4 text-primary" />
        <h1 className="font-headline text-4xl md:text-6xl font-bold tracking-tighter text-primary uppercase">
          Fight. Discipline. Glory.
        </h1>
        <p className="max-w-md mx-auto mt-4 text-lg text-foreground">
          The ultimate proving ground for the world's elite combat athletes.
        </p>
      </ZoomParallax>

      {/* About OFC */}
      <FadeIn>
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="text-center md:text-left">
                <h2 className="font-headline text-3xl md:text-5xl font-bold uppercase tracking-wider text-primary">About OFC</h2>
                <Separator className="w-24 h-1 mx-auto md:mx-0 my-6 bg-primary" />
                <p className="text-xl md:text-2xl text-balance text-muted-foreground leading-relaxed">
                  Octa Fighting Championship is the arena where legends are forged. We are dedicated to showcasing the world's most disciplined fighters on a platform built on integrity and respect.
                </p>
              </div>
              <div className="relative aspect-square rounded-lg overflow-hidden shadow-2xl shadow-primary/20">
                 <Image
                  src="/brand-story.jpg"
                  alt="Octa Fighting Championship Brand Story"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* Upcoming Event Highlight */}
      <FadeIn>
        <section className="py-16 md:py-24 bg-card">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="text-center md:text-left">
                <h3 className="text-primary font-headline text-xl uppercase">Next Fight Night</h3>
                <h2 className="font-headline text-4xl md:text-6xl font-bold uppercase tracking-tighter mt-2 text-primary">OFC 25: Reckoning</h2>
                <p className="text-2xl text-muted-foreground mt-4">October 26, 2024</p>
                <p className="text-xl text-muted-foreground">MGM Grand, Las Vegas</p>
                <Button asChild size="lg" className="mt-8 glow-on-hover font-bold">
                  <Link href="/events">
                    See Event Details <ArrowRight className="ml-2" />
                  </Link>
                </Button>
              </div>
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-2xl shadow-primary/20">
                 <Image
                  src="/event-ofc-25.jpg"
                  alt="OFC 25 Reckoning"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* Why OFC Section */}
      <FadeIn>
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <h2 className="text-center font-headline text-3xl md:text-5xl font-bold uppercase tracking-wider text-primary">Why OFC?</h2>
             <Separator className="w-24 h-1 mx-auto my-6 bg-primary" />
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {whyOFC.map((item, index) => (
                <div key={index} className="h-96">
                  <TravelCard
                    imageUrl={whyOFCImages[index]?.imageUrl || ''}
                    imageAlt={item.title}
                    logo={item.icon}
                    title={item.title}
                    overview={item.description}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeIn>

      {/* Divisions Section */}
      <FadeIn>
        <section className="py-16 md:py-24 bg-black">
          <div className="container mx-auto px-4">
             <h2 className="text-center font-headline text-3xl md:text-5xl font-bold uppercase tracking-wider text-primary">Our Divisions</h2>
             <Separator className="w-24 h-1 mx-auto my-6 bg-primary" />
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {divisionCards.map((division) => (
                <div key={division.name} className="h-[450px]">
                  <DestinationCard
                    imageUrl={division.imageUrl}
                    location={division.name}
                    flag={division.icon}
                    stats={division.stats}
                    href="#"
                    themeColor="0 72.2% 50.6%"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeIn>

      {/* Gallery Preview */}
      <FadeIn>
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <h2 className="text-center font-headline text-3xl md:text-5xl font-bold uppercase tracking-wider text-primary">Gallery</h2>
            <Separator className="w-24 h-1 mx-auto my-6 bg-primary" />
            <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-4">
              {galleryImages.map((image, i) => (
                <div key={image.id} className={`group relative rounded-lg overflow-hidden aspect-video ${i >= 2 ? 'hidden md:block' : ''}`}>
                  <Image
                    src={image.imageUrl}
                    alt={image.description}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    data-ai-hint={image.imageHint}
                  />
                  <div className="absolute inset-0 bg-black/20 transition-colors group-hover:bg-black/40"></div>
                </div>
              ))}
            </div>
            <div className="text-center mt-12">
              <Button asChild variant="outline" size="lg" className="font-bold border-2 border-primary/50 hover:border-primary hover:bg-primary/10">
                <Link href="/gallery-contact">View Full Gallery <ArrowRight className="ml-2" /></Link>
              </Button>
            </div>
          </div>
        </section>
      </FadeIn>
      
      {/* Become a Fighter Section */}
      <FadeIn>
        <section className="py-16 md:py-24 bg-card">
          <div className="container mx-auto px-4">
            <h2 className="text-center font-headline text-3xl md:text-5xl font-bold uppercase tracking-wider text-primary">Become a Fighter</h2>
            <Separator className="w-24 h-1 mx-auto my-6 bg-primary" />
            <p className="text-center max-w-2xl mx-auto text-lg text-muted-foreground mb-12 text-balance">
              Think you have what it takes to compete in the OFC? Fill out the form below to start your journey. We are looking for dedicated athletes who embody discipline and respect.
            </p>
            <div className="max-w-4xl mx-auto">
              <FighterRegistrationForm />
            </div>
          </div>
        </section>
      </FadeIn>

      {/* Sponsors */}
      <FadeIn>
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-center font-headline text-4xl font-bold uppercase text-primary tracking-widest">Our Partners</h2>
            <div className="mt-12 w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]">
              <div className="flex w-max animate-scroll">
                {[...sponsors, ...sponsors].map((sponsor, index) => {
                  const logo = placeholderImages.find(p => p.id === sponsor.logoId);
                  return (
                    <div key={`${sponsor.name}-${index}`} className="relative h-36 w-80 mx-20 flex-shrink-0 grayscale transition-all hover:grayscale-0 hover:scale-105 opacity-60 hover:opacity-100" title={sponsor.name}>
                      {logo && (
                        <Image
                          src={logo.imageUrl}
                          alt={`${sponsor.name} logo`}
                          fill
                          className="object-contain"
                          data-ai-hint={logo.imageHint}
                        />
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      </FadeIn>
    </div>
  );
}

    