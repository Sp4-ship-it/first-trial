import { Card, CardContent } from '@/components/ui/card';
import { getIcon } from '@/lib/icons';

export function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) {
  const Icon = getIcon(icon);

  return (
    <Card className="group border-border/60 shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <CardContent className="p-6 text-center">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-primary/10 to-secondary/10 transition-colors group-hover:from-secondary/20 group-hover:to-[#D4A574]/20">
          <Icon className="h-8 w-8 text-secondary" />
        </div>
        <h3 className="font-display text-lg font-bold text-primary">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          {description}
        </p>
      </CardContent>
    </Card>
  );
}
