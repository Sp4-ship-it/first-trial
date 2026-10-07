'use client';

import Image from 'next/image';
import { Plus, Star } from 'lucide-react';
import type { Cake } from '@/lib/data';
import { useCart } from '@/lib/cart-context';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { orderSingleCake } from '@/lib/whatsapp';
import Link from 'next/link';

export function CakeCard({ cake }: { cake: Cake }) {
  const { addItem } = useCart();

  return (
    <Card className="group overflow-hidden border-border/60 shadow-md transition-all duration-300 hover:shadow-xl">
      <div className="relative aspect-square overflow-hidden">
        <Image
          src={cake.image}
          alt={cake.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
        <span className="absolute top-3 right-3 rounded-full bg-secondary px-3 py-1 text-sm font-bold text-secondary-foreground shadow-md">
          ${cake.price}
        </span>
      </div>
      <CardContent className="p-5">
        <h3 className="font-display text-xl font-bold text-primary">
          {cake.name}
        </h3>
        <div className="mt-1 flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className="h-3.5 w-3.5 fill-[#D4A574] text-[#D4A574]"
            />
          ))}
          <span className="ml-1 text-xs text-muted-foreground">Popular</span>
        </div>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground line-clamp-2">
          {cake.description}
        </p>
        <div className="mt-4 flex gap-2">
          <Button
            onClick={() =>
              addItem({
                id: cake.id,
                name: cake.name,
                price: cake.price,
                image: cake.image,
              })
            }
            className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90"
            size="sm"
          >
            <Plus className="h-4 w-4" /> Add to Cart
          </Button>
          <a
            href={orderSingleCake(cake.name, cake.price)}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="outline"
              size="sm"
              className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground"
            >
              Order Now
            </Button>
          </a>
        </div>
      </CardContent>
    </Card>
  );
}
