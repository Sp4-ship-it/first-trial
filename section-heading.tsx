import { cn } from '@/lib/utils';

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  className = '',
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'center' | 'left';
  className?: string;
}) {
  return (
    <div
      className={cn(
        'max-w-2xl',
        align === 'center' ? 'mx-auto text-center' : 'text-left',
        className,
      )}
    >
      {eyebrow && (
        <span className="mb-2 inline-block text-sm font-semibold uppercase tracking-[0.2em] text-secondary">
          {eyebrow}
        </span>
      )}
      <h2 className="font-display text-3xl font-bold text-primary md:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
          {description}
        </p>
      )}
      <div
        className={cn(
          'mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-secondary to-[#D4A574]',
          align === 'center' && 'mx-auto',
        )}
      />
    </div>
  );
}
