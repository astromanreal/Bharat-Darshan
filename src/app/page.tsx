
import type { Metadata } from 'next';
import { ShlokaDisplay } from "@/components/shloka-display";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Library, 
  ScrollText, 
  Brain, 
  CalendarClock, 
  Users, 
  Lightbulb, 
  SigmaSquare, 
  Palette, 
  Landmark, 
  ImageIcon, 
  BookOpen, 
  Settings, 
  Home, 
  Sparkles, 
  Compass,
} from "lucide-react";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.sanatanainsights.com';

export const metadata: Metadata = {
  title: "Sanatana Insights - Eternal Wisdom for Modern Minds",
  description: "Embark on a transformative journey into Indian philosophy, Sanātana Dharma, and spiritual heritage. Discover texts, concepts, historical timelines, cultural arts, and AI-powered philosophical insights.",
  keywords: ["Sanatana Dharma", "Indian Philosophy", "Hinduism", "Vedanta", "Yoga", "Spirituality", "Meditation", "Vedas", "Upanishads", "Bhagavad Gita", "Darshanas", "Cultural Arts", "Vedic Science", "Bharat History", "AI Philosopher", "Eternal Wisdom"],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Sanatana Insights - Eternal Wisdom for Modern Minds",
    description: "Embark on a transformative journey into Indian philosophy, Sanātana Dharma, and spiritual heritage. Discover texts, concepts, historical timelines, cultural arts, and AI-powered philosophical insights.",
    url: `${SITE_URL}/`,
    images: [
      {
        url: `${SITE_URL}/og-home.png`, // Replace with a specific OG image for the homepage
        width: 1200,
        height: 630,
        alt: 'Explore Sanatana Insights',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Sanatana Insights - Eternal Wisdom for Modern Minds",
    description: "Embark on a transformative journey into Indian philosophy, Sanātana Dharma, and spiritual heritage.",
    images: [`${SITE_URL}/twitter-home.png`], // Replace with a specific Twitter image for the homepage
  },
};

const features = [
  {
    title: "Philosophical Schools (Darshanas)",
    href: "/schools",
    description: "Journey through the diverse schools of Indian thought, from Nyāya to Vedānta.",
    icon: <Library className="h-8 w-8 mb-2 text-primary" />,
    hint: "Understand systematic Indian logic, metaphysics, and paths to liberation."
  },
  {
    title: "Ancient Texts & Scriptures",
    href: "/texts",
    description: "Explore summaries and teachings from the Vedas, Upaniṣads, and Bhagavad Gītā.",
    icon: <ScrollText className="h-8 w-8 mb-2 text-primary" />,
    hint: "Access the foundational wisdom of Hindu spiritual literature."
  },
  {
    title: "Core Themes & Concepts",
    href: "/concepts",
    description: "Unravel fundamental ideas like Dharma, Karma, and Moksha that shape spiritual understanding.",
    icon: <Brain className="h-8 w-8 mb-2 text-primary" />,
    hint: "Grasp key philosophical terms and their profound implications."
  },
  {
    title: "Timeline of Wisdom",
    href: "/timeline",
    description: "Trace the chronological evolution of Indian philosophy from ancient to modern times.",
    icon: <CalendarClock className="h-8 w-8 mb-2 text-primary" />,
    hint: "See how spiritual ideas developed across millennia."
  },
  {
    title: "Saints & Philosophers",
    href: "/saints",
    description: "Discover the lives and profound teachings of spiritual luminaries and great thinkers.",
    icon: <Users className="h-8 w-8 mb-2 text-primary" />,
    hint: "Learn from the masters who shaped India's spiritual heritage."
  },
  {
    title: "Vedic Science & Technology",
    href: "/vedic-science",
    description: "Uncover ancient wisdom in mathematics, cosmology, sound science, and more.",
    icon: <SigmaSquare className="h-8 w-8 mb-2 text-primary" />,
    hint: "Explore India's contributions to ancient scientific knowledge."
  },
  {
    title: "Cultural Arts & Heritage",
    href: "/cultural-arts",
    description: "Celebrate Indian music, dance, theatre, rituals, and artistic expressions.",
    icon: <Palette className="h-8 w-8 mb-2 text-primary" />,
    hint: "Experience the vibrant artistic traditions rooted in spirituality."
  },
   {
    title: "Bharat's Civilizational History",
    href: "/bharat-history",
    description: "Explore India's continuous narrative, from Saraswati-Sindhu to modern times.",
    icon: <Landmark className="h-8 w-8 mb-2 text-primary" />,
    hint: "Discover the decolonized history of the Indian subcontinent."
  },
  {
    title: "Media Gallery",
    href: "/gallery",
    description: "Immerse yourself in sacred art, chants, and visual depictions of spiritual themes.",
    icon: <ImageIcon className="h-8 w-8 mb-2 text-primary" />,
    hint: "Visually explore the beauty of Indic spirituality."
  },
  {
    title: "Learning Resources",
    href: "/resources",
    description: "Access downloadable texts, guides, and glossaries to deepen your study.",
    icon: <BookOpen className="h-8 w-8 mb-2 text-primary" />,
    hint: "Find tools and materials for your learning journey."
  },
  {
    title: "Ask the AI Philosopher",
    href: "/ask-ai",
    description: "Engage with our AI for insights on spiritual and philosophical questions (Coming Soon!).",
    icon: <Lightbulb className="h-8 w-8 mb-2 text-primary" />,
    hint: "Get AI-powered answers based on ancient scriptures."
  },
  {
    title: "Personalize Your Experience",
    href: "/settings",
    description: "Customize appearance, themes, and preferences to suit your journey.",
    icon: <Settings className="h-8 w-8 mb-2 text-primary" />,
    hint: "Tailor the application to your visual and interactive preferences."
  },
];


export default function HomePage() {
  return (
    <div className="space-y-16 md:space-y-24">
      {/* Hero Section */}
      <section className="text-center py-16 md:py-24 bg-gradient-to-br from-primary/10 via-background to-secondary/10 rounded-2xl shadow-xl overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <Home className="h-20 w-20 text-primary mx-auto mb-6 animate-pulse" />
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-6xl text-primary drop-shadow-md">
            Welcome to Sanatana Insights
          </h1>
          <p className="mt-6 text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed">
            Embark on a transformative journey into the heart of Indian philosophy, Sanātana Dharma, and timeless spiritual heritage. Discover profound teachings and the enduring wisdom of sages.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Button asChild size="lg" className="shadow-lg text-base px-8 py-3 rounded-lg hover:scale-105 transition-transform duration-300 ease-in-out hover:shadow-primary/30">
              <Link href="/concepts">Explore Core Concepts <ArrowRight className="ml-2 h-5 w-5" /></Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="shadow-md text-base px-8 py-3 rounded-lg border-primary text-primary hover:bg-primary/10 hover:scale-105 transition-transform duration-300 ease-in-out hover:shadow-primary/20">
              <Link href="/schools">Discover Darshanas</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Introductory Shloka */}
      <section className="container mx-auto px-4">
         <ShlokaDisplay
            sanskrit="ॐ असतो मा सद्गमय । तमसो मा ज्योतिर्गमय । मृत्योर्मा अमृतं गमय ॥"
            hindi="ॐ मुझे असत्य से सत्य की ओर ले चलो । मुझे अन्धकार से प्रकाश की ओर ले चलो । मुझे मृत्यु से अमरता की ओर ले चलो ॥"
            english="Om, lead me from the unreal to the real. Lead me from darkness to light. Lead me from death to immortality."
          />
      </section>

      {/* Introduction to Indian Philosophy and Sanātana Dharma */}
      <section className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-stretch">
        <Card className="shadow-xl hover:shadow-2xl transition-shadow duration-300 flex flex-col bg-card border border-primary/20 hover:border-primary/40">
          <CardHeader>
            <CardTitle className="text-2xl text-primary flex items-center"><Brain className="mr-3 h-7 w-7"/>What is Indian Philosophy?</CardTitle>
          </CardHeader>
          <CardContent className="text-foreground/90 space-y-4 flex-grow">
            <p>
              Indian philosophy, or 'Darshana' (vision/sight), refers to the diverse and profound philosophical traditions that emerged in the Indian subcontinent. It's a rich tapestry encompassing metaphysics, ethics, logic, epistemology, and soteriology (theories of liberation).
            </p>
            <p>
              These traditions courageously explore fundamental questions about existence, consciousness, the nature of reality, and the ultimate path to liberation (Moksha).
            </p>
          </CardContent>
          <CardFooter>
             <Button variant="link" asChild className="px-0 text-primary hover:text-primary/80 transition-colors">
              <Link href="/concepts">Learn Key Concepts <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </CardFooter>
        </Card>
        <Card className="shadow-xl hover:shadow-2xl transition-shadow duration-300 flex flex-col bg-card border border-accent/20 hover:border-accent/40">
          <CardHeader>
            <CardTitle className="text-2xl text-accent flex items-center"><Sparkles className="mr-3 h-7 w-7"/>The Essence of Sanātana Dharma</CardTitle>
          </CardHeader>
          <CardContent className="text-foreground/90 space-y-4 flex-grow">
            <p>
              Sanātana Dharma, often translated as the "Eternal Path" or "Eternal Order," is the indigenous term for a way of life that underpins many Indian spiritual traditions. It signifies timeless principles and duties governing cosmic order and individual righteousness.
            </p>
            <p>
              It emphasizes a holistic way of life, seeking harmony between the individual, society, and the cosmos, guiding one towards self-realization and spiritual fulfillment.
            </p>
          </CardContent>
          <CardFooter>
             <Button variant="link" asChild className="px-0 text-accent hover:text-accent/80 transition-colors">
              <Link href="/concepts/dharma">Understand Dharma <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </CardFooter>
        </Card>
      </section>
      
      {/* Explore Our Platform Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
            <Compass className="h-16 w-16 text-secondary mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold text-secondary tracking-tight">
              Explore the Depths of Wisdom
            </h2>
            <p className="mt-4 text-lg text-foreground/70 max-w-2xl mx-auto">
              Dive into various facets of Sanatana Dharma and Indian philosophy through our curated sections. Each card below gives a glimpse into a unique area of study.
            </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {features.map((feature) => (
            <Card 
              key={feature.href} 
              className="flex flex-col shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1.5 bg-card/90 backdrop-blur-sm border border-border/20 rounded-xl overflow-hidden hover:border-primary/50 hover:bg-gradient-to-br hover:from-card hover:to-primary/5"
              title={feature.hint} // Tooltip hint
            >
              <CardHeader className="items-center text-center bg-muted/20 p-6">
                {feature.icon}
                <CardTitle className="text-xl font-semibold text-primary">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent className="p-5 flex-grow">
                <CardDescription className="text-sm text-foreground/80 leading-relaxed text-center">
                  {feature.description}
                </CardDescription>
              </CardContent>
              <CardFooter className="p-5 mt-auto bg-muted/10">
                <Button asChild variant="outline" className="w-full border-primary text-primary hover:bg-primary/10 hover:text-primary transition-colors">
                  <Link href={feature.href}>
                    Explore <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>


      {/* Visuals and Inspiration Section */}
      <section className="py-12 container mx-auto px-4">
        <div className="text-center mb-12">
            <ImageIcon className="h-16 w-16 text-accent mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold text-accent tracking-tight">Visual Inspirations</h2>
            <p className="mt-4 text-lg text-foreground/70 max-w-xl mx-auto">
              Glimpses of the beauty and depth embedded in Indic art and symbolism.
            </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-2xl group transition-all duration-500 ease-in-out hover:scale-105">
            <Image src="https://i.pinimg.com/736x/e7/5b/95/e75b951b6a006255fb257a50e0123cb9.jpg" alt="Sacred Om Symbolism reflecting ancient Indian spiritual wisdom" layout="fill" objectFit="cover" data-ai-hint="om symbol" className="transform group-hover:scale-110 transition-transform duration-500"/>
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/10 flex items-end p-4">
              <p className="text-white text-lg font-semibold drop-shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">Sacred Symbols</p>
            </div>
          </div>
          <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-2xl group transition-all duration-500 ease-in-out hover:scale-105">
            <Image src="https://i.pinimg.com/736x/e8/ba/6f/e8ba6ffe55826ca3397454b0cab90d07.jpg" alt="Meditative Art from India inspiring peace and contemplation" layout="fill" objectFit="cover" data-ai-hint="meditation art" className="transform group-hover:scale-110 transition-transform duration-500"/>
             <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/10 flex items-end p-4">
              <p className="text-white text-lg font-semibold drop-shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">Meditative Art</p>
            </div>
          </div>
          <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-2xl group transition-all duration-500 ease-in-out hover:scale-105">
            <Image src="https://i.pinimg.com/736x/09/ac/f0/09acf0a1e58041ecab10b5c692a06344.jpg" alt="Cosmic Energy Representations in Indian Philosophy and art" layout="fill" objectFit="cover" data-ai-hint="spiritual energy" className="transform group-hover:scale-110 transition-transform duration-500"/>
             <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/10 flex items-end p-4">
              <p className="text-white text-lg font-semibold drop-shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">Cosmic Energy</p>
            </div>
          </div>
        </div>
         <div className="text-center mt-10">
            <Button asChild variant="ghost" className="text-accent hover:text-accent/80 transition-colors text-base">
                <Link href="/gallery">Visit Full Gallery <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
        </div>
      </section>

      {/* Call to Action to AI Philosopher */}
      <section className="py-16 text-center bg-secondary/10 rounded-2xl shadow-lg container mx-auto px-4">
         <Lightbulb className="h-16 w-16 text-secondary mx-auto mb-6" />
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-secondary-foreground">Curious Minds, Seek Answers</h2>
        <p className="text-lg text-secondary-foreground/80 mb-8 max-w-2xl mx-auto leading-relaxed">
          Our AI Philosopher is under development, preparing to offer insights rooted in ancient wisdom. Get ready to explore your spiritual and philosophical questions.
        </p>
        <Button asChild size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/80 shadow-lg text-base px-8 py-3 rounded-lg hover:scale-105 transition-transform">
          <Link href="/ask-ai">Prepare Your Questions <ArrowRight className="ml-2 h-5 w-5" /></Link>
        </Button>
      </section>
    </div>
  );
}
