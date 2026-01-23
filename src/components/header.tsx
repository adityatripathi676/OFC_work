"use client";

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { Menu, X, Home, CalendarDays, GalleryHorizontal, Mail } from 'lucide-react';
import { useState, useMemo } from 'react';

import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { OfcLogo } from '@/components/logo';
import { cn } from '@/lib/utils';
import { LimelightNav } from '@/components/ui/limelight-nav';
import type { NavItem } from '@/components/ui/limelight-nav';

export function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const navLinks = useMemo(() => [
    { href: '/', label: 'Home', icon: <Home /> },
    { href: '/events', label: 'Events', icon: <CalendarDays /> },
    { href: '/gallery-contact', label: 'Gallery', icon: <GalleryHorizontal /> },
    { href: '/contact', label: 'Contact', icon: <Mail /> },
  ], []);

  const limelightNavItems: NavItem[] = useMemo(() => navLinks.map(link => ({
    id: link.href,
    icon: link.icon,
    label: link.label,
    onClick: () => router.push(link.href)
  })), [router, navLinks]);

  const defaultActiveIndex = useMemo(() => {
    const activeIndex = navLinks.findIndex(link => pathname === link.href);
    return activeIndex > -1 ? activeIndex : 0;
  }, [pathname, navLinks]);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center justify-between">
        <Link href="/" className="flex items-center gap-2" aria-label="OctaFight Home">
          <OfcLogo className="h-8 w-auto text-primary" />
          <span className="font-headline text-2xl font-bold hidden sm:inline-block">
            OctaFight
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center">
          <LimelightNav items={limelightNavItems} defaultActiveIndex={defaultActiveIndex} />
        </nav>
        
        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet open={isMenuOpen} onOpenChange={setMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[80%] bg-black">
              <div className="flex flex-col h-full">
                <div className="flex justify-between items-center border-b border-primary/20 pb-4">
                  <Link href="/" onClick={() => setMenuOpen(false)}>
                    <OfcLogo className="h-7 w-auto text-primary" />
                  </Link>
                  <Button variant="ghost" size="icon" onClick={() => setMenuOpen(false)}>
                    <X className="h-6 w-6" />
                    <span className="sr-only">Close menu</span>
                  </Button>
                </div>
                <nav className="flex-grow flex flex-col items-center justify-center gap-8 mt-8">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      className={cn(
                        'text-2xl font-headline transition-colors hover:text-primary',
                        pathname === link.href ? 'text-primary' : 'text-foreground'
                      )}
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
