
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { placeholderImages, upcomingEvents, pastEvents } from '@/lib/data';
import { FadeIn } from '@/components/fade-in';

const EventCard = ({ event }: { event: (typeof upcomingEvents)[0] & { isPast?: boolean } }) => {
  const poster = placeholderImages.find(p => p.id === event.posterId);
  return (
    <Card className="bg-card border-border/50 overflow-hidden flex flex-col group hover:border-primary transition-all duration-300 transform hover:-translate-y-1">
      <CardHeader className="p-0">
        <div className="relative aspect-[3/4] w-full">
          <Image
            src={poster?.imageUrl || ''}
            alt={event.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            data-ai-hint="fight poster"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
          <div className="absolute bottom-0 left-0 p-3">
            <h3 className="font-headline text-xl lg:text-2xl font-bold text-white uppercase tracking-tighter">{event.name}</h3>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-3 flex-grow">
        <p className="text-base font-semibold text-muted-foreground">{event.date}</p>
        <p className="text-sm text-muted-foreground">{event.location}</p>
      </CardContent>
      <CardFooter className="p-3">
        {event.isPast ? (
          <Button variant="outline" disabled className="w-full font-bold">Event Finished</Button>
        ) : null}
      </CardFooter>
    </Card>
  );
};

export default function EventsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section with Background Image */}
      <div className="relative w-full h-[93vh] overflow-hidden bg-black">
        <div 
          className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
          style={{ backgroundImage: 'url(/ofc-1.jpg)' }}
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
          <FadeIn>
            <h1 className="font-headline text-4xl md:text-6xl font-bold uppercase tracking-wider text-white">Events</h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-white/90">
              Witness the glory. Find upcoming and past OFC events.
            </p>
            <Separator className="w-24 h-1 mx-auto mt-6 bg-primary" />
          </FadeIn>
        </div>
      </div>

      {/* Events Content */}
      <div className="container mx-auto px-4 py-16">
        <FadeIn>
          <section>
            <h2 className="font-headline text-3xl md:text-4xl font-bold uppercase tracking-wide mb-8 text-primary">Upcoming Events</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {upcomingEvents.map(event => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          </section>
        </FadeIn>

        <Separator className="my-16" />

        <FadeIn>
          <section>
            <h2 className="font-headline text-3xl md:text-4xl font-bold uppercase tracking-wide mb-8 text-primary">Past Events</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {pastEvents.map(event => (
                <EventCard key={event.id} event={{...event, isPast: true}} />
              ))}
            </div>
          </section>
        </FadeIn>
      </div>
    </div>
  );
}
