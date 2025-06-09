
"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
// import type { Metadata } from 'next'; // Removed static metadata import
import { historicalErasData, mythsVsRealityData, voicesOfBharatData, type HistoricalEra } from '@/lib/data/bharat-history-data';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Landmark, MapPin, BookOpen, Microscope, Waves, University, Route, ShieldQuestion, Users, Languages, Search, Quote } from "lucide-react";
import Link from 'next/link';
import { useToast } from "@/hooks/use-toast"; // Added for toast notifications

// Note: For Client Components, 'export const metadata' is not directly used by Next.js for SSR meta tags
// in the same way as Server Components. Title updates are typically done with useEffect.
// However, providing it can be useful for documentation or if the component structure changes.
// Removed: export const metadata: Metadata = { ... };


// Helper to select an icon based on content type
const getIconForContentType = (type: string): JSX.Element => {
  switch (type) {
    case 'archaeology': return <Microscope className="h-5 w-5 mr-2 text-primary" />;
    case 'cities': return <MapPin className="h-5 w-5 mr-2 text-primary" />;
    case 'rivers': return <Waves className="h-5 w-5 mr-2 text-primary" />;
    case 'temples': return <Landmark className="h-5 w-5 mr-2 text-primary" />;
    case 'universities': return <University className="h-5 w-5 mr-2 text-primary" />;
    default: return <BookOpen className="h-5 w-5 mr-2 text-primary" />;
  }
};


export default function BharatHistoryPage() {
  const [selectedEra, setSelectedEra] = useState<HistoricalEra | null>(null);
  const { toast } = useToast(); // Initialize toast

  useEffect(() => {
    // Set a default era on initial load
    if (historicalErasData.length > 0) {
      setSelectedEra(historicalErasData[0]);
    }
    // Set a default title if no era is selected initially
    if (!selectedEra && historicalErasData.length > 0) {
        document.title = "Bharat’s Civilizational History Explorer - Sanatana Insights";
    }
  }, []);

  useEffect(() => {
    if (selectedEra) {
      document.title = `${selectedEra.name} - History Explorer - Sanatana Insights`;
    } else {
      // Fallback title if selectedEra becomes null after initial load
      document.title = "Bharat’s Civilizational History Explorer - Sanatana Insights";
    }
  }, [selectedEra]);


  const handleEraSelect = (eraId: string) => {
    const era = historicalErasData.find(e => e.id === eraId);
    setSelectedEra(era || null);
  };

  const handleComingSoonFeature = (featureName: string) => {
    toast({
      title: "Feature Coming Soon",
      description: `${featureName} functionality is under development. Please check back later!`,
    });
  };

  return (
    <div className="container mx-auto py-8 space-y-12">
      {/* Hero Section */}
      <section className="relative h-[400px] md:h-[500px] rounded-xl overflow-hidden shadow-2xl">
        <Image
          src="https://i.pinimg.com/736x/7b/24/7b/7b247be88b30ce44de221eae995b69c4.jpg"
          alt="Exploring Bharat's Civilizational History"
          fill
          style={{objectFit:"cover"}}
          className="brightness-75"
          data-ai-hint="ancient architecture"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col items-center justify-end p-8 text-center">
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-6xl text-white drop-shadow-lg">
            Bharat’s Civilizational History Explorer
          </h1>
          <p className="mt-4 text-xl text-slate-200 max-w-3xl mx-auto drop-shadow-md">
            Unfolding the True History of India: Rediscover Bharat’s continuous civilizational narrative, from ancient origins to modern times, through archaeological evidence and decolonized research.
          </p>
        </div>
      </section>

      {/* Horizontal Timeline Navigation */}
      <section>
        <h2 className="text-2xl font-semibold text-primary mb-4 text-center">Explore Eras</h2>
        <ScrollArea className="w-full whitespace-nowrap rounded-md border shadow-md">
          <div className="flex space-x-3 p-4 bg-muted/50">
            {historicalErasData.map((era) => (
              <Button
                key={era.id}
                variant={selectedEra?.id === era.id ? "default" : "outline"}
                onClick={() => handleEraSelect(era.id)}
                className="text-sm h-auto py-2 px-4 shadow-sm hover:shadow-lg transition-shadow"
              >
                {era.shortName} <br/> ({era.duration.split(" - ")[0]})
              </Button>
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </section>

      {/* Dynamic Content Area for Selected Era */}
      {selectedEra && (
        <Card className="shadow-xl bg-card/90 backdrop-blur-sm">
          <CardHeader className="border-b">
            <div className="flex items-center space-x-3">
                <Route className="h-10 w-10 text-primary" />
                <div>
                    <CardTitle className="text-3xl text-primary">{selectedEra.name}</CardTitle>
                    <CardDescription className="text-md text-accent">{selectedEra.duration}</CardDescription>
                </div>
            </div>
          </CardHeader>
          <CardContent className="p-6 space-y-8">
            <p className="text-lg text-foreground/85 leading-relaxed">{selectedEra.overview}</p>
            
            {/* Archaeological Findings */}
            {selectedEra.archaeologicalFindings && selectedEra.archaeologicalFindings.length > 0 && (
              <section>
                <h3 className="text-2xl font-semibold text-accent mb-4 flex items-center">{getIconForContentType('archaeology')} Key Archaeological Findings</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {selectedEra.archaeologicalFindings.map(finding => (
                    <Card key={finding.id} className="shadow-md hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <CardTitle className="text-xl text-primary">{finding.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-foreground/80">{finding.description}</p>
                        {finding.source && <p className="text-xs text-muted-foreground mt-2">Source: {finding.source}</p>}
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </section>
            )}

            {/* Ancient Cities */}
             {selectedEra.ancientCities && selectedEra.ancientCities.length > 0 && (
              <section>
                <h3 className="text-2xl font-semibold text-accent mb-4 flex items-center">{getIconForContentType('cities')} Ancient Cities &amp; Urban Planning</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {selectedEra.ancientCities.map(city => (
                    <Card key={city.id} className="shadow-md hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <CardTitle className="text-xl text-primary">{city.name}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-foreground/80">{city.description}</p>
                        {city.features && city.features.length > 0 && (
                            <ul className="list-disc list-inside mt-2 text-sm text-foreground/70">
                                {city.features.map(feat => <li key={feat}>{feat}</li>)}
                            </ul>
                        )}
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </section>
            )}

            {/* River Evolution */}
            {selectedEra.riverEvolution && (
              <section>
                <h3 className="text-2xl font-semibold text-accent mb-4 flex items-center">{getIconForContentType('rivers')} River Evolution: {selectedEra.riverEvolution.riverName}</h3>
                <Card className="shadow-md hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <p className="text-foreground/80 mb-2">{selectedEra.riverEvolution.significance}</p>
                    {selectedEra.riverEvolution.evidence && <p className="text-sm text-muted-foreground">Evidence: {selectedEra.riverEvolution.evidence}</p>}
                  </CardContent>
                </Card>
              </section>
            )}

            {/* Temples and Architecture (Keeping mini image gallery as it's different from single card image) */}
            {selectedEra.templesAndArchitecture && selectedEra.templesAndArchitecture.length > 0 && (
              <section>
                <h3 className="text-2xl font-semibold text-accent mb-4 flex items-center">{getIconForContentType('temples')} Temples &amp; Architecture</h3>
                <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-6">
                  {selectedEra.templesAndArchitecture.map(temple => (
                    <Card key={temple.id} className="shadow-md hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <CardTitle className="text-xl text-primary">{temple.name}</CardTitle>
                        <CardDescription>{temple.period} {temple.location && `- ${temple.location}`}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-foreground/80 mb-4">{temple.description}</p>
                        {/* Mini Image Gallery */}
                        {temple.imageUrls && temple.imageUrls.length > 0 && (
                            <div className="grid grid-cols-2 gap-2">
                            {temple.imageUrls.map((url, index) => (
                                <div key={index} className="relative aspect-video rounded overflow-hidden">
                                <Image src={url} alt={`${temple.name} image ${index + 1}`} fill style={{objectFit:"cover"}} data-ai-hint={temple.dataAiHints?.[index] || "temple architecture"} />
                                </div>
                            ))}
                            </div>
                        )}
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </section>
            )}

            {/* Ancient Universities */}
            {selectedEra.ancientUniversities && selectedEra.ancientUniversities.length > 0 && (
              <section>
                <h3 className="text-2xl font-semibold text-accent mb-4 flex items-center">{getIconForContentType('universities')} Ancient Universities &amp; Knowledge Hubs</h3>
                 <div className="grid md:grid-cols-2 gap-6">
                    {selectedEra.ancientUniversities.map(uni => (
                         <Card key={uni.id} className="shadow-md hover:shadow-lg transition-shadow">
                             <CardHeader>
                                <CardTitle className="text-xl text-primary">{uni.name}</CardTitle>
                                <CardDescription>{uni.period}</CardDescription>
                             </CardHeader>
                             <CardContent>
                                <p className="font-semibold text-foreground/90 mb-1">Curriculum Highlights:</p>
                                <ul className="list-disc list-inside text-sm text-foreground/80 mb-3">
                                    {uni.curriculumHighlights.map(item => <li key={item}>{item}</li>)}
                                </ul>
                                {uni.legacy && <p><span className="font-semibold text-foreground/90">Legacy:</span> <span className="text-foreground/80">{uni.legacy}</span></p>}
                             </CardContent>
                         </Card>
                    ))}
                 </div>
              </section>
            )}
          </CardContent>
        </Card>
      )}

      {/* Myth vs Reality Section */}
      <section className="py-8">
        <h2 className="text-3xl font-semibold text-center mb-8 text-primary flex items-center justify-center">
            <ShieldQuestion className="h-10 w-10 mr-3" /> Myth vs. Reality: Debunking Colonial Distortions
        </h2>
        <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto space-y-3">
          {mythsVsRealityData.map((item) => (
            <AccordionItem key={item.id} value={item.id} className="border bg-card rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <AccordionTrigger className="p-6 text-lg font-medium text-accent hover:no-underline text-left">
                {item.myth}
              </AccordionTrigger>
              <AccordionContent className="p-6 pt-0 space-y-2">
                <p className="font-semibold text-primary">Reality:</p>
                <p className="text-foreground/85">{item.reality}</p>
                <p className="font-semibold text-primary mt-2">Evidence:</p>
                <p className="text-foreground/80 text-sm">{item.evidence}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      {/* Voices of Bharat Section */}
      <section className="py-8">
        <h2 className="text-3xl font-semibold text-center mb-8 text-primary flex items-center justify-center">
            <Users className="h-10 w-10 mr-3"/> Voices of Modern Bharat: Reshaping Narratives
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {voicesOfBharatData.map((voice) => (
            <Card key={voice.id} className="shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col bg-secondary/5 rounded-lg overflow-hidden">
              <CardContent className="p-6 flex-grow flex flex-col items-center text-center">
                <Quote className="h-8 w-8 sm:h-10 sm:w-10 text-primary mb-3 sm:mb-4 flex-shrink-0" />
                <blockquote className="italic text-base sm:text-lg text-foreground/85 mb-4 sm:mb-6 flex-grow">
                  &quot;{voice.quote}&quot;
                </blockquote>
                <div className="mt-auto text-center">
                  <p className="font-semibold text-accent text-sm sm:text-md">{voice.author}</p>
                  <p className="text-xs sm:text-sm text-muted-foreground">{voice.designation}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Call to Explore Section */}
      <section className="text-center py-12 bg-secondary/10 rounded-xl shadow-lg">
        <h2 className="text-3xl font-semibold mb-4 text-secondary-foreground">Continue Your Exploration</h2>
        <p className="text-lg text-secondary-foreground/80 mb-6 max-w-2xl mx-auto">
          Dive deeper into specific eras, explore related themes, or contribute your findings. The journey of understanding Bharat&apos;s rich past is ongoing.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button variant="default" size="lg" className="shadow-md">
                <Link href="/concepts">Explore Key Concepts</Link>
            </Button>
            <Button variant="outline" size="lg" className="shadow-md flex items-center" onClick={() => handleComingSoonFeature('Language Toggle')}>
                <Languages className="mr-2 h-5 w-5" /> Toggle Language (EN/HI/SA)
            </Button>
            <Button variant="outline" size="lg" className="shadow-md flex items-center" onClick={() => handleComingSoonFeature('History Filter')}>
               <Search className="mr-2 h-5 w-5" /> Filter History (Coming Soon)
            </Button>
        </div>
      </section>
    </div>
  );
}

    

    