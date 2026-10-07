import { Star } from 'lucide-react';
import type { Testimonial } from '@/lib/data';
import { Card, CardContent } from '@/components/ui/card';

export function TestimonialCard({
  testimonial,
}: {
  testimonial: Testimonial;
}) {
  const initials = testimonial.name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();

  return (
    <Card className="border-border/60 shadow-md transition-shadow hover:shadow-lg">
      <CardContent className="p-6">
        <div className="mb-3 flex gap-1">
          {[...Array(testimonial.rating)].map((_, i) => (
            <Star
              key={i}
              className="h-4 w-4 fill-[#D4A574] text-[#D4A574]"
            />
          ))}
        </div>
        <p className="text-sm leading-relaxed text-foreground/80 italic">
          &ldquo;{testimonial.text}&rdquo;
        </p>
        <div className="mt-5 flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-secondary to-[#D4A574] text-sm font-bold text-secondary-foreground">
            {initials}
          </div>
          <div>
            <p className="font-semibold text-primary">{testimonial.name}</p>
            <p className="text-xs text-muted-foreground">Verified Customer</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
