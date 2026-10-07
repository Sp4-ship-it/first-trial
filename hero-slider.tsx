'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { heroSlides } from '@/lib/data';
import { buildWhatsAppUrl } from '@/lib/whatsapp';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export function HeroSlider() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((p) => (p + 1) % heroSlides.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((p) => (p - 1 + heroSlides.length) % heroSlides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 5500);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="relative h-[85vh] min-h-[600px] w-full overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          className="absolute inset-0"
        >
          <Image
            src={heroSlides[current].image}
            alt={heroSlides[current].title}
            fill
            priority={current === 0}
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/20" />
        </motion.div>
      </AnimatePresence>

      {/* Content overlay */}
      <div className="absolute inset-0 flex items-center">
        <div className="container mx-auto px-4 lg:px-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="max-w-2xl"
            >
              <span className="mb-4 inline-block rounded-full bg-secondary/90 px-4 py-1.5 text-sm font-semibold uppercase tracking-wider text-secondary-foreground">
                {heroSlides[current].category}
              </span>
              <h1 className="font-display text-4xl font-bold leading-tight text-white text-shadow-lg md:text-5xl lg:text-6xl">
                {heroSlides[current].title}
              </h1>
              <p className="mt-4 max-w-xl text-lg leading-relaxed text-white/90 text-shadow-md md:text-xl">
                {heroSlides[current].subtitle}
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href={buildWhatsAppUrl(
                    `Hello Kuziva Cakes! I'm interested in your ${heroSlides[current].category.toLowerCase()} cakes. I'd like to place an order.`,
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    size="lg"
                    className="bg-secondary text-secondary-foreground hover:bg-secondary/90"
                  >
                    Order Now
                  </Button>
                </a>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Arrows */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-sm transition-colors hover:bg-secondary hover:text-secondary-foreground"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-sm transition-colors hover:bg-secondary hover:text-secondary-foreground"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 gap-2">
        {heroSlides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={cn(
              'h-2 rounded-full transition-all duration-300',
              current === i
                ? 'w-8 bg-secondary'
                : 'w-2 bg-white/50 hover:bg-white/70',
            )}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
