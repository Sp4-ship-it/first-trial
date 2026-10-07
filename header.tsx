'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ShoppingBag } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useCart } from '@/lib/cart-context';
import { Logo } from '@/components/logo';
import { Button } from '@/components/ui/button';
import { buildWhatsAppUrl } from '@/lib/whatsapp';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Why Choose Us', href: '/why-choose-us' },
  { label: 'Shop', href: '/shop' },
  { label: 'Contact', href: '/contact' },
];

export function Header() {
  const pathname = usePathname();
  const { totalItems, openCart } = useCart();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-background/95 shadow-lg backdrop-blur-md'
          : 'bg-background/80 backdrop-blur-sm',
      )}
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-4 lg:px-8">
        <Logo />

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'relative px-4 py-2 text-sm font-medium transition-colors hover:text-secondary',
                pathname === link.href
                  ? 'text-secondary'
                  : 'text-foreground/80',
              )}
            >
              {link.label}
              {pathname === link.href && (
                <span className="absolute bottom-0 left-1/2 h-0.5 w-8 -translate-x-1/2 rounded-full bg-secondary" />
              )}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={openCart}
            className="relative flex h-10 w-10 items-center justify-center rounded-full bg-muted text-foreground transition-colors hover:bg-secondary hover:text-secondary-foreground"
            aria-label="Open cart"
          >
            <ShoppingBag className="h-5 w-5" />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-secondary px-1 text-xs font-bold text-secondary-foreground">
                {totalItems}
              </span>
            )}
          </button>

          <a
            href={buildWhatsAppUrl(
              'Hello Kuziva Cakes! I would like to place an order.',
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex"
          >
            <Button
              size="sm"
              className="bg-secondary text-secondary-foreground hover:bg-secondary/90"
            >
              Order on WhatsApp
            </Button>
          </a>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-muted lg:hidden"
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <nav className="border-t border-border bg-background lg:hidden">
          <div className="container mx-auto flex flex-col px-4 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'rounded-lg px-4 py-3 text-base font-medium transition-colors hover:bg-muted',
                  pathname === link.href
                    ? 'bg-secondary/10 text-secondary'
                    : 'text-foreground',
                )}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={buildWhatsAppUrl(
                'Hello Kuziva Cakes! I would like to place an order.',
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2"
            >
              <Button className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90">
                Order on WhatsApp
              </Button>
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
