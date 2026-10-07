import Image from 'next/image';
import Link from 'next/link';
import { Target, Eye, Heart, Sparkles, Award, Users } from 'lucide-react';
import { SectionHeading } from '@/components/section-heading';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { buildWhatsAppUrl } from '@/lib/whatsapp';

const values = [
  {
    icon: Heart,
    title: 'Passion',
    description:
      'Every cake is baked with genuine love and care, as if it were for our own family.',
  },
  {
    icon: Award,
    title: 'Quality',
    description:
      'We use only premium ingredients and never compromise on taste or presentation.',
  },
  {
    icon: Sparkles,
    title: 'Creativity',
    description:
      'Each design is unique — we turn your vision into an edible work of art.',
  },
  {
    icon: Users,
    title: 'Community',
    description:
      'Proudly serving the Chinhoyi community and Chinhoyi University family.',
  },
];

export const metadata = {
  title: 'About Us | Kuziva Cakes',
  description:
    'Learn the story of Kuziva Cakes — passionate bakers at Chinhoyi University Campus making every celebration special with custom cakes.',
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] w-full overflow-hidden">
        <Image
          src="https://images.pexels.com/photos/35228372/pexels-photo-35228372.jpeg?auto=compress&cs=tinysrgb&h=900&w=1600"
          alt="Kuziva Cakes bakery display"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/20" />
        <div className="absolute inset-0 flex items-end">
          <div className="container mx-auto px-4 pb-12 lg:px-8">
            <span className="mb-2 inline-block text-sm font-semibold uppercase tracking-[0.2em] text-secondary">
              About Us
            </span>
            <h1 className="font-display text-4xl font-bold text-white text-shadow-lg md:text-5xl">
              Our Story
            </h1>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="cake-pattern py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="relative">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-xl">
                <Image
                  src="https://images.pexels.com/photos/8477783/pexels-photo-8477783.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                  alt="Baking at Kuziva Cakes"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 hidden rounded-2xl bg-secondary p-6 text-secondary-foreground shadow-xl md:block">
                <p className="font-display text-3xl font-bold">2018</p>
                <p className="text-sm">Since</p>
              </div>
            </div>
            <div>
              <span className="mb-2 inline-block text-sm font-semibold uppercase tracking-[0.2em] text-secondary">
                How We Started
              </span>
              <h2 className="font-display text-3xl font-bold text-primary md:text-4xl">
                From a Campus Kitchen to Your Celebrations
              </h2>
              <div className="mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-secondary to-[#D4A574]" />
              <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
                <p>
                  Kuziva Cakes began with a simple passion — baking cakes that
                  bring people together. What started as a small hobby from the
                  kitchens of Chinhoyi University Campus has grown into a
                  beloved bakery serving the entire Chinhoyi community.
                </p>
                <p>
                  We have always believed that a great cake is more than just a
                  dessert — it is the centerpiece of a celebration, a symbol of
                  love, and a memory in the making. That belief drives every
                  cake we bake, from the first mix to the final decoration.
                </p>
                <p>
                  Today, we are proud to be part of countless weddings,
                  birthdays, graduations, and special events across Chinhoyi
                  and beyond. Every order tells a story, and we are honored to
                  be part of yours.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-muted/30 py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2">
            <Card className="border-border/60 shadow-lg">
              <CardContent className="p-8">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                  <Target className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-display text-2xl font-bold text-primary">
                  Our Mission
                </h3>
                <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                  To create beautifully crafted, delicious cakes that make
                  every celebration memorable. We are committed to using quality
                  ingredients, delivering exceptional service, and bringing joy
                  to every customer in Chinhoyi and beyond.
                </p>
              </CardContent>
            </Card>
            <Card className="border-border/60 shadow-lg">
              <CardContent className="p-8">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-secondary/10">
                  <Eye className="h-7 w-7 text-secondary" />
                </div>
                <h3 className="font-display text-2xl font-bold text-primary">
                  Our Vision
                </h3>
                <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                  To be the most loved and trusted bakery in Chinhoyi, known
                  for creativity, quality, and the warmth we bring to every
                  celebration. We envision a community where every special
                  moment is celebrated with a Kuziva cake.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="cake-pattern py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading
            eyebrow="What We Stand For"
            title="Our Core Values"
            description="The principles that guide every cake we bake and every customer we serve."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <Card
                key={value.title}
                className="group border-border/60 text-center shadow-md transition-all hover:shadow-xl hover:-translate-y-1"
              >
                <CardContent className="p-6">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-primary/10 to-secondary/10 transition-colors group-hover:from-secondary/20 group-hover:to-[#D4A574]/20">
                    <value.icon className="h-8 w-8 text-secondary" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-primary">
                    {value.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-16">
        <div className="container mx-auto px-4 text-center lg:px-8">
          <h2 className="font-display text-3xl font-bold text-primary-foreground">
            Ready to Celebrate with Us?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-primary-foreground/80">
            Let us make your next celebration unforgettable with a custom cake
            made just for you.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <a
              href={buildWhatsAppUrl(
                'Hello Kuziva Cakes! I would like to place an order.',
              )}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
                Order on WhatsApp
              </Button>
            </a>
            <Link href="/shop">
              <Button
                variant="outline"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              >
                Browse Our Cakes
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
