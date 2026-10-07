import {
  Palette,
  Heart,
  PartyPopper,
  GraduationCap,
  Zap,
  Truck,
  Wheat,
  Sparkles,
  BadgePercent,
  Clock,
  Facebook,
  Instagram,
  MessageCircle,
  type LucideIcon,
} from 'lucide-react';

const iconMap: Record<string, LucideIcon> = {
  Palette,
  Heart,
  PartyPopper,
  GraduationCap,
  Zap,
  Truck,
  Wheat,
  Sparkles,
  BadgePercent,
  Clock,
  Facebook,
  Instagram,
  MessageCircle,
};

export function getIcon(name: string): LucideIcon {
  return iconMap[name] ?? Sparkles;
}
