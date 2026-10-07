export type Cake = {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  longDescription: string;
  highlights: string[];
};

export const cakes: Cake[] = [
  {
    id: 'red-velvet',
    name: 'Red Velvet Cake',
    price: 30,
    image:
      'https://images.pexels.com/photos/17321240/pexels-photo-17321240.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    description:
      'Rich, velvety red sponge layered with smooth cream cheese frosting — a timeless classic.',
    longDescription:
      'Our signature Red Velvet Cake features layers of moist red cocoa sponge, each generously filled with silky cream cheese frosting. Topped with fresh berries and elegant crumb coating, it is the centerpiece for weddings, anniversaries, and any celebration that deserves something unforgettable.',
    highlights: ['Cream cheese frosting', 'Moist red sponge', 'Fresh berry topping'],
  },
  {
    id: 'vanilla',
    name: 'Vanilla Cake',
    price: 25,
    image:
      'https://images.pexels.com/photos/4110001/pexels-photo-4110001.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    description:
      'Light, fluffy vanilla sponge with delicate buttercream — perfect for every occasion.',
    longDescription:
      'A delicate vanilla sponge baked with real Madagascar vanilla beans, layered with silky buttercream and a soft, airy crumb. This versatile cake suits birthdays, tea parties, and any moment that calls for simple, elegant sweetness.',
    highlights: ['Madagascar vanilla', 'Silky buttercream', 'Light & airy crumb'],
  },
  {
    id: 'chocolate',
    name: 'Chocolate Cake',
    price: 28,
    image:
      'https://images.pexels.com/photos/3081657/pexels-photo-3081657.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    description:
      "Decadent chocolate layers with rich ganache — a chocolate lover's dream come true.",
    longDescription:
      'For the true chocolate lover — deep, moist chocolate sponge layered with rich chocolate ganache and whipped cream. Each bite is intensely chocolatey yet perfectly balanced, making it our most popular birthday cake.',
    highlights: ['Rich chocolate ganache', 'Moist chocolate sponge', 'Whipped cream layers'],
  },
  {
    id: 'black-forest',
    name: 'Black Forest Cake',
    price: 35,
    image:
      'https://images.pexels.com/photos/8802102/pexels-photo-8802102.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    description:
      'Classic Black Forest with cherries, whipped cream, and chocolate shavings.',
    longDescription:
      'A timeless Black Forest Cake — chocolate sponge soaked in cherry syrup, layered with whipped cream and cherries, then crowned with chocolate shavings and fresh cherry toppings. A stunning dessert for celebrations and special gatherings.',
    highlights: ['Fresh cherries', 'Chocolate shavings', 'Cherry syrup soak'],
  },
  {
    id: 'carrot',
    name: 'Carrot Cake',
    price: 32,
    image:
      'https://images.pexels.com/photos/5121948/pexels-photo-5121948.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    description:
      'Spiced carrot cake with walnuts and creamy frosting — wholesome and delicious.',
    longDescription:
      'Our Carrot Cake is packed with freshly grated carrots, warm spices, and crunchy walnuts, all layered with a rich cream cheese frosting. Decorated with handcrafted carrot accents, it is wholesome, moist, and deeply satisfying.',
    highlights: ['Freshly grated carrots', 'Cream cheese frosting', 'Crunchy walnuts'],
  },
];

export type HeroSlide = {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  image: string;
};

export const heroSlides: HeroSlide[] = [
  {
    id: 'weddings',
    title: 'Make Your Wedding Unforgettable',
    subtitle:
      'Elegant, multi-tier wedding cakes crafted to be the centerpiece of your special day.',
    category: 'Weddings',
    image:
      'https://images.pexels.com/photos/17315403/pexels-photo-17315403.jpeg?auto=compress&cs=tinysrgb&h=900&w=1600',
  },
  {
    id: 'birthdays',
    title: 'Sweeten Your Birthday Celebrations',
    subtitle:
      'Colorful, personalized birthday cakes that make every year brighter and sweeter.',
    category: 'Birthdays',
    image:
      'https://images.pexels.com/photos/31999343/pexels-photo-31999343.jpeg?auto=compress&cs=tinysrgb&h=900&w=1600',
  },
  {
    id: 'graduation',
    title: 'Celebrate Your Achievement',
    subtitle:
      'Mark your milestone with a stunning graduation cake designed just for you.',
    category: 'Graduation',
    image:
      'https://images.pexels.com/photos/7723809/pexels-photo-7723809.jpeg?auto=compress&cs=tinysrgb&h=900&w=1600',
  },
  {
    id: 'corporate',
    title: 'Perfect for Every Occasion',
    subtitle:
      'Corporate events, anniversaries, and special celebrations — we bake for them all.',
    category: 'Corporate & Special Events',
    image:
      'https://images.pexels.com/photos/7867778/pexels-photo-7867778.jpeg?auto=compress&cs=tinysrgb&h=900&w=1600',
  },
];

export type Service = {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
};

export const services: Service[] = [
  {
    id: 'custom-cake-design',
    title: 'Custom Cake Design',
    description:
      'Every cake is a blank canvas. Tell us your vision — theme, colors, flavors — and we will bring it to life with artistry and precision.',
    icon: 'Palette',
    features: ['Personalized themes', 'Custom colors & flavors', 'Photo & 3D cakes'],
  },
  {
    id: 'wedding-cakes',
    title: 'Wedding Cakes',
    description:
      'Elegant, multi-tier wedding cakes that become the centerpiece of your celebration. From classic white to bold contemporary designs.',
    icon: 'Heart',
    features: ['Multi-tier designs', 'Sugar flowers', 'Cake table styling'],
  },
  {
    id: 'birthday-party-cakes',
    title: 'Birthday & Party Cakes',
    description:
      'Make every birthday unforgettable with fun, colorful cakes designed to match the personality of the celebrant.',
    icon: 'PartyPopper',
    features: ['Themed designs', 'Character cakes', 'Cupcake towers'],
  },
  {
    id: 'graduation-corporate',
    title: 'Graduation & Corporate Cakes',
    description:
      'Celebrate milestones and corporate achievements with professional, beautifully crafted cakes for any scale.',
    icon: 'GraduationCap',
    features: ['Branded corporate cakes', 'Graduation themes', 'Bulk orders'],
  },
  {
    id: 'same-day-orders',
    title: 'Same-Day Orders in Chinhoyi',
    description:
      'Last-minute celebration? We offer same-day cake orders within the Chinhoyi area when you order before 11 AM.',
    icon: 'Zap',
    features: ['Order before 11 AM', 'Chinhoyi area', 'Selected flavors'],
  },
  {
    id: 'delivery-pickup',
    title: 'Delivery & Pickup at Campus',
    description:
      'Convenient delivery across Chinhoyi or pickup directly from our bakery at Chinhoyi University Campus.',
    icon: 'Truck',
    features: ['Campus pickup', 'Chinhoyi delivery', 'Safe packaging'],
  },
];

export type Reason = {
  id: string;
  title: string;
  description: string;
  icon: string;
};

export const reasons: Reason[] = [
  {
    id: 'freshly-baked',
    title: 'Freshly Baked Daily',
    description:
      'Every cake is baked fresh to order using premium ingredients — never frozen, never pre-made. You taste the difference.',
    icon: 'Wheat',
  },
  {
    id: 'custom-designs',
    title: 'Custom Designs',
    description:
      'No two celebrations are the same, and neither are our cakes. Each design is tailored to your unique story and style.',
    icon: 'Sparkles',
  },
  {
    id: 'affordable-quality',
    title: 'Affordable & Quality Ingredients',
    description:
      'We believe great cake should be accessible. Premium ingredients and honest pricing — quality you can taste, prices you can afford.',
    icon: 'BadgePercent',
  },
  {
    id: 'on-time-delivery',
    title: 'On-Time Delivery at Chinhoyi',
    description:
      'Your celebration waits for no one. We pride ourselves on punctual delivery across Chinhoyi and the university campus.',
    icon: 'Clock',
  },
];

export type Testimonial = {
  id: string;
  name: string;
  text: string;
  rating: number;
};

export const testimonials: Testimonial[] = [
  {
    id: 'anashe',
    name: 'Anashe Masese',
    text: 'Kuziva Cakes made my wedding day perfect! The red velvet cake was moist, beautiful and everyone loved it. Highly recommended!',
    rating: 5,
  },
  {
    id: 'tanaka',
    name: 'Tanaka',
    text: 'Best birthday cake ever! My chocolate cake was delivered on time and tasted amazing. Will definitely order again.',
    rating: 5,
  },
  {
    id: 'tapiwa',
    name: 'Tapiwa Garabha',
    text: 'I ordered for my graduation and they exceeded my expectations. Professional service from Chinhoyi University Campus team!',
    rating: 5,
  },
];

export const contactInfo = {
  phone: '071 918 2148',
  phoneRaw: '263719182148',
  email: 'kuzivacakes@gmail.com',
  location: 'Chinhoyi University Campus, Chinhoyi',
  hours: [
    { day: 'Monday – Friday', time: '8:00 AM – 6:00 PM' },
    { day: 'Saturday', time: '8:00 AM – 5:00 PM' },
    { day: 'Sunday', time: '10:00 AM – 3:00 PM' },
  ],
  socials: [
    { name: 'Facebook', icon: 'Facebook', url: 'https://facebook.com' },
    { name: 'Instagram', icon: 'Instagram', url: 'https://instagram.com' },
    { name: 'WhatsApp', icon: 'MessageCircle', url: 'https://wa.me/263719182148' },
  ],
};
