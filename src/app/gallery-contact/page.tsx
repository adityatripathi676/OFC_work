
import { Separator } from '@/components/ui/separator';
import { FadeIn } from '@/components/fade-in';
import { ImageGallery } from '@/components/ui/image-gallery';

export default function GalleryContactPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <FadeIn>
        <header className="text-center mb-12">
          <h1 className="font-headline text-4xl md:text-6xl font-bold uppercase tracking-wider text-primary">Gallery</h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            The heart of the battle, captured in moments.
          </p>
          <Separator className="w-24 h-1 mx-auto mt-6 bg-primary" />
        </header>
        
        <ImageGallery />

      </FadeIn>
    </div>
  );
}
