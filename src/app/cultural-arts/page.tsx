
"use client";

import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Palette, Download, ArrowRight } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { culturalArtsData, type CulturalArtSection } from "@/lib/data/cultural-arts-data";
import { useEffect } from "react";
// Removed: import type { Metadata } from 'next';

// Removed SITE_URL constant as it was only for the disallowed metadata block.

// Removed disallowed metadata export for client component
// export const metadata: Metadata = { ... };

export default function CulturalArtsHubPage() {
  useEffect(() => {
    document.title = "Cultural Arts & Intangible Heritage Hub - Sanatana Insights";
  }, []);

  const getExploreButtonText = (section: CulturalArtSection): string => {
    let exploreText = section.title.split(" – ")[0].split(" & ")[0].trim(); 
    
    if (section.id === "classical-music") exploreText = "Classical Music";
    else if (section.id === "dance") exploreText = "Dance";
    else if (section.id === "theatre") exploreText = "Theatre";
    else if (section.id === "visual-arts") exploreText = "Visual Arts";
    else if (section.id === "rituals-festivals") exploreText = "Rituals & Festivals";
    else if (section.id === "rasa-theory") exploreText = "Rasa Theory";
    else if (section.id === "living-traditions") exploreText = "Living Traditions";
    else if (section.id === "art-as-moksha") exploreText = "Art as Moksha";
    else if (section.id === "learn-contribute") exploreText = "Resources";
    
    return `Explore ${exploreText}`;
  };


  return (
    <div className="container mx-auto py-8 space-y-12">
      {/* Hero Section - Updated to remove image and restyle */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary/10 via-background to-secondary/10 rounded-xl shadow-xl text-center">
        <Palette className="h-20 w-20 text-primary mx-auto mb-6" />
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-primary drop-shadow-md">
          {culturalArtsData.hero.title}
        </h1>
        <p className="mt-4 text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto drop-shadow-sm">
          {culturalArtsData.hero.theme}
        </p>
      </section>
      <p className="text-center text-lg text-foreground/80 max-w-4xl mx-auto mt-8 mb-8 px-4">
        {culturalArtsData.hero.intro}
      </p>

      {/* Export to PDF Button */}
      <div className="text-center my-8 print:hidden">
        <Button
          onClick={() => window.print()}
          variant="outline"
          size="lg"
          className="shadow-md"
        >
          <Download className="mr-2 h-5 w-5" /> Export Hub Page as PDF
        </Button>
      </div>

      {/* Art Form Navigation Cards */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {culturalArtsData.sections.map((section: CulturalArtSection) => (
          <Link key={section.id} href={`/cultural-arts/${section.id}`} passHref>
            <Card className="flex flex-col h-full shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1.5 bg-card/90 backdrop-blur-sm border border-border/20 rounded-xl overflow-hidden hover:border-primary/50 hover:bg-gradient-to-br hover:from-card hover:to-primary/5 cursor-pointer group">
              <CardHeader className="items-center text-center bg-muted/20 p-6">
                <section.icon className="h-12 w-12 mb-3 text-primary transition-colors group-hover:text-accent" />
                <CardTitle className="text-xl font-semibold text-primary">{section.title.split(" – ")[0].split(" & ")[0].trim()}</CardTitle>
                {section.themeLine && <CardDescription className="text-sm text-accent">{section.themeLine}</CardDescription>}
              </CardHeader>
              <CardContent className="p-5 flex-grow">
                <p className="text-sm text-foreground/80 leading-relaxed text-center line-clamp-3">
                  {section.content}
                </p>
              </CardContent>
              <CardFooter className="p-5 mt-auto bg-muted/10 flex justify-center">
                <Button variant="link" className="text-primary group-hover:text-accent">
                  {getExploreButtonText(section)} <ArrowRight className="ml-2 h-4 w-4" /></Button>
              </CardFooter>
            </Card>
          </Link>
        ))}
      </section>

      <Separator className="my-12" />
      <footer className="text-center py-8">
        <Palette className="h-12 w-12 text-primary mx-auto mb-4" />
        <p className="text-lg text-muted-foreground">
          Dive deep into the artistic soul of Bharat. Each section offers a unique exhibit into timeless beauty and wisdom.
        </p>
      </footer>
    </div>
  );
}
