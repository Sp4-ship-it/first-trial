import Link from 'next/link';
import { Cake } from 'lucide-react';

export function Logo({ className = '' }: { className?: string }) {
  return (
    <Link
      href="/"
      className={`flex items-center gap-2 group ${className}`}
      aria-label="Kuziva Cakes Home"
    >
      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-md transition-transform group-hover:scale-105">
        <Cake className="h-5 w-5" />
      </span>
      <span className="flex flex-col leading-none">
        <span className="font-display text-xl font-bold tracking-tight text-primary">
          Kuziva Cakes
        </span>
        <span className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
          Baked with Love
        </span>
      </span>
    </Link>
  );
}
