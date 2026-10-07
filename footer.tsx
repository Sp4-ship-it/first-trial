import Link from 'next/link';
import { Phone, MapPin, Clock, Cake } from 'lucide-react';
import { Logo } from '@/components/logo';
import { contactInfo } from '@/lib/data';
import { getIcon } from '@/lib/icons';
import { buildWhatsAppUrl } from '@/lib/whatsapp';

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Why Choose Us', href: '/why-choose-us' },
  { label: 'Shop', href: '/shop' },
  { label: 'Contact', href: '/contact' },
];

export function Footer() {
  return (
    <footer className="mt-20 border-t border-border bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary">
                <Cake className="h-5 w-5 text-secondary-foreground" />
              </span>
              <div className="leading-none">
                <p className="font-display text-xl font-bold">Kuziva Cakes</p>
                <p className="text-[10px] uppercase tracking-[0.18em] text-primary-foreground/60">
                  Baked with Love
                </p>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-primary-foreground/80">
              Baked with Love, Celebrated with Joy. Premium custom cakes for
              every occasion, proudly based at Chinhoyi University Campus.
            </p>
            <div className="flex gap-3">
              {contactInfo.socials.map((social) => {
                const Icon = getIcon(social.icon);
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-foreground/10 transition-colors hover:bg-secondary hover:text-secondary-foreground"
                    aria-label={social.name}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 font-display text-lg font-semibold">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-primary-foreground/80 transition-colors hover:text-secondary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 font-display text-lg font-semibold">
              Get in Touch
            </h3>
            <ul className="space-y-3 text-sm text-primary-foreground/80">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-secondary" />
                <span>{contactInfo.location}</span>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="mt-0.5 h-4 w-4 flex-shrink-0 text-secondary" />
                <a
                  href={`tel:${contactInfo.phoneRaw}`}
                  className="transition-colors hover:text-secondary"
                >
                  {contactInfo.phone}
                </a>
              </li>
              <li>
                <a
                  href={buildWhatsAppUrl(
                    'Hello Kuziva Cakes! I would like to place an order.',
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-2 text-sm font-medium text-secondary-foreground transition-opacity hover:opacity-90"
                >
                  Order on WhatsApp
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="mb-4 font-display text-lg font-semibold">
              Business Hours
            </h3>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              {contactInfo.hours.map((h) => (
                <li key={h.day} className="flex items-start gap-2">
                  <Clock className="mt-0.5 h-4 w-4 flex-shrink-0 text-secondary" />
                  <span>
                    <span className="block font-medium text-primary-foreground">
                      {h.day}
                    </span>
                    <span className="text-primary-foreground/60">{h.time}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-primary-foreground/10 pt-8 text-center text-sm text-primary-foreground/60">
          <p>
            &copy; {new Date().getFullYear()} Kuziva Cakes. All rights reserved.
            Baked with Love, Celebrated with Joy.
          </p>
        </div>
      </div>
    </footer>
  );
}
