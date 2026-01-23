import Image from 'next/image';

export function OfcLogo({ className }: { className?: string }) {
  return (
    <Image
      src="/ofc-logo.jpeg"
      alt="Octa Fighting Championship Logo"
      width={280}
      height={100}
      className={className}
      priority
    />
  );
}
