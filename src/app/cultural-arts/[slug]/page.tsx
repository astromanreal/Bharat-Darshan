
"use client";

import { useEffect, useState } from "react";
import { useParams, notFound, useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { getCulturalArtSectionById, type CulturalArtSection, type DanceFormDetail, type MudraDefinition, type FestivalDanceExample, type DancerSaintQuote, type DivineDancerFigure, type NatyashastraConcept, type ClassicalMusicDetails, type RagaExample, type InstrumentExample, type MantraExample, type DeityLink, type ReferenceLink, type TheatreDetails, type NatyashastraTeachingItem, type TraditionalTheatreForm, type SpiritualSymbolismDetail, type InteractiveShowcaseItem, type LearnMoreResource, type VisualArtsDetails, type VisualArtKeySectionCard, type MandalaYantraExample, type TempleArchitectureIconDetail, type RitualsFestivalsDetails, type SacredRitualItem, type FestivalCosmicMeaningItem } from '@/lib/data/cultural-arts-data';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronRight, Home, Download, HelpCircle, PlayCircle, Music, Users, Library, Waves, Headset, AudioLines, Info, Guitar, BarChart3, RadioTower, SpeakerIcon, CalendarDays, Leaf, Sun, Moon, BrainCog, SmilePlus, GraduationCap, Palette as PaletteIconLucide, Sparkles, FileAudio, ListMusic, DiscAlbum, BookCopy, UsersRound, ExternalLink, LandmarkIcon, MicVocal, Presentation, BookOpenText, ScrollTextIcon, ShieldAlertIcon, ZapIcon, Music2, Hand, Filter as FilterIcon, Clock, Globe2, VideoIcon, PersonStanding, PartyPopper, Settings, GalleryHorizontalEnd, Theater, Lightbulb, Maximize, Minimize, ArrowRight, Users2, Landmark, Shapes, Aperture, SquareTerminal, MessageSquare, GitCompareArrows, BookMarked, Quote, ChevronDown, ChevronUp, LayoutGrid, TowerControl, Building2, Church, Tent, Warehouse, View, ZoomIn, Wand2, DraftingCompass, Cog, Wrench, PenTool, Hexagon, Orbit, GalleryThumbnails, AppWindow, Youtube, Map as MapIcon, Camera as CameraIcon, FileText as FileTextIcon, Droplets, Flame, Link as LinkIconLucide, Share2 } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";


// Helper component for breadcrumbs
const Breadcrumbs = ({ sectionTitle }: { sectionTitle: string }) => (
  <nav aria-label="Breadcrumb" className="mb-8 text-sm text-muted-foreground font-serif">
    <ol className="flex items-center space-x-2">
      <li>
        <Link href="/cultural-arts" className="hover:text-primary transition-colors">
          Cultural Arts Hub
        </Link>
      </li>
      <li>
        <ChevronRight className="h-4 w-4" />
      </li>
      <li className="font-medium text-primary" aria-current="page">
        {sectionTitle}
      </li>
    </ol>
  </nav>
);

// Helper function to handle scroll to section
const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};


export default function CulturalArtDetailPage() {
  const params = useParams();
  const router = useRouter();
  const slug = typeof params.slug === 'string' ? params.slug : '';
  const [section, setSection] = useState<CulturalArtSection | null | undefined>(undefined);

  useEffect(() => {
    if (slug) {
      const sectionData = getCulturalArtSectionById(slug);
      setSection(sectionData);
      if (sectionData) {
        // Dynamically set document title for SEO
        document.title = `${sectionData.title} - Cultural Arts - Sanatana Insights`;
      } else {
        document.title = "Art Form Not Found - Sanatana Insights";
      }
    }
  }, [slug]);


  if (section === undefined) {
    return <div className="container mx-auto py-12 px-4 text-center font-serif">Loading art form details...</div>;
  }

  if (section === null) {
     return (
        <div className="container mx-auto py-12 px-4 text-center font-serif">
            <HelpCircle className="h-16 w-16 text-destructive mx-auto mb-4" />
            <h1 className="text-2xl font-semibold mb-4">Art Form Not Found</h1>
            <p className="text-muted-foreground mb-6">The cultural art form you are looking for ('{slug}') does not exist or may have been moved.</p>
            <Button onClick={() => router.push('/cultural-arts')}>Return to Arts Hub</Button>
        </div>
      );
  }

  const SectionIcon = section.icon;
  const classicalDetails = section.classicalMusicDetails;
  const danceDetails = section.danceDetails;
  const theatreDetails = section.theatreDetails;
  const visualArtsDetails = section.visualArtsDetails;
  const ritualsFestivalsDetails = section.ritualsFestivalsDetails;


  // Specific Layout for Rituals & Festivals
  if (section.id === "rituals-festivals" && ritualsFestivalsDetails) {
    return (
      <div className="container mx-auto py-8 space-y-12 font-serif">
        <Breadcrumbs sectionTitle={section.title} />

        {/* Hero Header for Rituals & Festivals */}
        <section className="relative h-[350px] md:h-[450px] rounded-xl overflow-hidden shadow-2xl mb-12">
          <Image
            src={section.heroImageUrl || "https://placehold.co/1200x500.png?text=Rituals+Hero"}
            alt={`${section.title} - Sacred Indian Rituals and Festivals`}
            fill
            style={{ objectFit: "cover" }}
            className="brightness-60"
            data-ai-hint={section.heroDataAiHint || "indian festival"}
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex flex-col items-center justify-center p-6 text-center">
            <SectionIcon className="h-16 w-16 text-white mb-4 drop-shadow-lg" />
            {/* TODO: Add glowing animation placeholder text/note here if desired */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white drop-shadow-md">
              {section.title}
            </h1>
            {section.themeLine && <p className="mt-2 text-lg md:text-xl text-slate-100 max-w-2xl mx-auto drop-shadow-sm">{section.themeLine}</p>}
          </div>
        </section>
        
        {/* Introduction */}
        <Card className="shadow-xl bg-card/95">
          <CardHeader>
             <CardTitle className="text-2xl text-primary flex items-center"><Info className="mr-3 h-7 w-7" />Introduction</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-lg text-foreground/85 leading-relaxed">{ritualsFestivalsDetails.introduction.text}</p>
            <p className="text-sm text-muted-foreground italic">({ritualsFestivalsDetails.introduction.animationPlaceholder})</p>
          </CardContent>
        </Card>

        {/* Sacred Rituals */}
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl text-primary flex items-center"><Flame className="mr-3 h-7 w-7" />The Sacred Rituals</CardTitle>
          </CardHeader>
          <CardContent className="grid md:grid-cols-2 gap-6">
            {ritualsFestivalsDetails.sacredRituals.map(ritual => (
              <Card key={ritual.id} className="bg-muted/30 shadow-sm hover:shadow-md transition-shadow">
                <CardHeader className="flex-row items-start space-x-3 pb-3">
                  <ritual.icon className="h-8 w-8 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <CardTitle className="text-xl text-accent">{ritual.name}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  {ritual.imageUrl && (
                    <div className="relative aspect-video mb-3 rounded overflow-hidden">
                       <Image src={ritual.imageUrl} alt={`${ritual.name} - Hindu sacred ritual`} fill style={{objectFit:"cover"}} data-ai-hint={ritual.dataAiHint || ritual.name.toLowerCase()} />
                     </div>
                  )}
                  <p className="text-sm text-foreground/80 leading-relaxed">{ritual.explanation}</p>
                </CardContent>
              </Card>
            ))}
          </CardContent>
        </Card>

        {/* Festivals with Cosmic Meaning */}
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl text-primary flex items-center"><PartyPopper className="mr-3 h-7 w-7" />Festivals with Cosmic Meaning</CardTitle>
          </CardHeader>
          <CardContent className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ritualsFestivalsDetails.festivalsCosmicMeaning.map(festival => (
              <Card key={festival.id} className="flex flex-col bg-card shadow-md hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3">
                   {festival.imageUrl && (
                    <div className="relative aspect-video mb-3 rounded overflow-hidden">
                       <Image src={festival.imageUrl} alt={`${festival.name} - Indian spiritual festival`} fill style={{objectFit:"cover"}} data-ai-hint={festival.dataAiHint || festival.name.toLowerCase()} />
                     </div>
                  )}
                  <div className="flex items-center space-x-2">
                    <festival.icon className="h-6 w-6 text-accent flex-shrink-0" />
                    <CardTitle className="text-xl text-accent">{festival.name}</CardTitle>
                  </div>
                  <CardDescription className="text-xs text-muted-foreground">{festival.datePattern}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow space-y-2 text-sm">
                  <p><strong className="text-primary/90">Symbolism:</strong> {festival.spiritualSymbolism}</p>
                  <p><strong className="text-primary/90">Deity/Story:</strong> {festival.associatedDeityOrStory}</p>
                </CardContent>
                <CardFooter>
                  <Button variant="link" className="text-primary p-0 h-auto text-xs" onClick={() => alert(`Explore ${festival.name} clicked (Placeholder for: ${festival.exploreLinkPlaceholder})`)}>
                    Explore Full Festival <ArrowRight className="ml-1 h-3 w-3" />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </CardContent>
        </Card>

        {/* Timeline View or Interactive Calendar Placeholder */}
        <Card className="shadow-md bg-secondary/5">
          <CardHeader>
            <CardTitle className="text-xl text-secondary flex items-center"><CalendarDays className="mr-3 h-6 w-6" />{ritualsFestivalsDetails.timelineViewPlaceholder.title}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-sm text-secondary-foreground/80">
            <p>{ritualsFestivalsDetails.timelineViewPlaceholder.description}</p>
            <p>Key aspects to include: {ritualsFestivalsDetails.timelineViewPlaceholder.types.join(", ")}.</p>
          </CardContent>
        </Card>
        
        {/* Audio-Visual Elements Placeholders */}
        <div className="grid md:grid-cols-2 gap-6">
            <Card className="shadow-md bg-muted/30">
                <CardHeader><CardTitle className="text-xl text-primary flex items-center"><ListMusic className="mr-3 h-6 w-6"/>{ritualsFestivalsDetails.audioVisualElements.chantAudioClips.title}</CardTitle></CardHeader>
                <CardContent className="space-y-2 text-sm">
                    <p className="text-foreground/80">{ritualsFestivalsDetails.audioVisualElements.chantAudioClips.description}</p>
                    {ritualsFestivalsDetails.audioVisualElements.chantAudioClips.examples.map(ex => (
                        <div key={ex.name} className="flex items-center justify-between p-2 border rounded-md bg-background">
                            <span>{ex.name}</span>
                            <Button variant="outline" size="sm" onClick={() => alert(`Play ${ex.name} (Placeholder)`)}>Play</Button>
                        </div>
                    ))}
                </CardContent>
            </Card>
            <Card className="shadow-md bg-muted/30">
                <CardHeader><CardTitle className="text-xl text-primary flex items-center"><Film className="mr-3 h-6 w-6"/>{ritualsFestivalsDetails.audioVisualElements.festivalVideos.title}</CardTitle></CardHeader>
                <CardContent className="text-sm">
                    <p className="text-foreground/80">{ritualsFestivalsDetails.audioVisualElements.festivalVideos.description}</p>
                    <p className="italic text-muted-foreground mt-2">{ritualsFestivalsDetails.audioVisualElements.festivalVideos.placeholder}</p>
                </CardContent>
            </Card>
        </div>

        {/* Regional & Folk Diversity Placeholder */}
         <Card className="shadow-md bg-secondary/5">
          <CardHeader>
            <CardTitle className="text-xl text-secondary flex items-center"><MapIcon className="mr-3 h-6 w-6" />{ritualsFestivalsDetails.regionalDiversity.title}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-sm text-secondary-foreground/80">
            <p>{ritualsFestivalsDetails.regionalDiversity.description}</p>
            <p className="italic">{ritualsFestivalsDetails.regionalDiversity.mapPlaceholder}</p>
          </CardContent>
        </Card>

        {/* Community Sharing Section Placeholder */}
        <Card className="shadow-md bg-muted/30">
            <CardHeader>
                <CardTitle className="text-xl text-primary flex items-center"><Users className="mr-3 h-6 w-6"/>{ritualsFestivalsDetails.communitySharing.title}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-foreground/80">
                <p>{ritualsFestivalsDetails.communitySharing.invitationText}</p>
                <div className="flex items-center gap-2 text-muted-foreground italic"> <CameraIcon className="h-4 w-4"/> {ritualsFestivalsDetails.communitySharing.uploadPlaceholder}</div>
                <div className="flex items-center gap-2 text-muted-foreground italic"> <FileTextIcon className="h-4 w-4"/> {ritualsFestivalsDetails.communitySharing.sharePlaceholder}</div>
            </CardContent>
        </Card>

        {/* Footer Options */}
        <Card className="shadow-lg mt-12">
          <CardContent className="flex flex-col sm:flex-row gap-4 justify-center p-6">
            {ritualsFestivalsDetails.footerOptions.map(opt => (
              <Button key={opt.id} variant="outline" size="lg" className="flex-1" onClick={() => {
                if (opt.actionType === 'download') window.print(); // Simple PDF placeholder
                else if (opt.actionType === 'link') {
                    if (opt.actionValue.startsWith('#')) {
                        scrollToSection(opt.actionValue.substring(1)); // Assuming internal link
                    } else {
                        alert('External link placeholder: ' + opt.actionValue);
                    }
                }
                else alert('Submission feature coming soon!');
              }}>
                <opt.icon className="mr-2 h-5 w-5" /> {opt.text}
              </Button>
            ))}
          </CardContent>
        </Card>
        
        <Separator className="my-12" />
        <div className="text-center my-8 print:hidden">
          <Button onClick={() => window.print()} variant="outline" size="lg" className="shadow-md">
            <Download className="mr-2 h-5 w-5" /> Export This Exhibit as PDF
          </Button>
        </div>
        <footer className="text-center py-8">
          <Home className="h-10 w-10 text-primary mx-auto mb-4" />
          <p className="text-lg text-muted-foreground">
            Continue your journey through the rich <Link href="/cultural-arts" className="text-primary hover:underline">Cultural Arts Hub</Link>.
          </p>
        </footer>
      </div>
    );
  }


  // Specific Layout for Visual Arts
  if (section.id === "visual-arts" && visualArtsDetails) {
    return (
      <div className="container mx-auto py-8 space-y-12 font-serif">
        <Breadcrumbs sectionTitle={section.title} />

        {/* Hero Header for Visual Arts */}
        <section className="relative h-[350px] md:h-[450px] rounded-xl overflow-hidden shadow-2xl mb-12">
          {/* Placeholder for animated background - current is static image */}
          <Image
            src={section.heroImageUrl || "https://placehold.co/1200x500.png?text=Sacred+Art+Background"}
            alt={`${visualArtsDetails.hero.title} - Indian sacred visual arts`}
            fill
            style={{ objectFit: "cover" }}
            className="brightness-60"
            data-ai-hint={section.heroDataAiHint || "mandala silhouette"}
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex flex-col items-center justify-center p-6 text-center">
            <PaletteIconLucide className="h-16 w-16 text-white mb-4 drop-shadow-lg" />
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white drop-shadow-md">
              {visualArtsDetails.hero.title}
            </h1>
            <p className="mt-2 text-lg md:text-xl text-slate-100 max-w-2xl mx-auto drop-shadow-sm">
              {visualArtsDetails.hero.subtitle}
            </p>
            <p className="text-xs text-slate-300 mt-2 italic">({visualArtsDetails.hero.backgroundAnimationPlaceholder})</p>
          </div>
        </section>

        {/* About Visual Arts Section */}
        <Card className="shadow-xl bg-card/95">
          <CardHeader>
            <CardTitle className="text-2xl text-primary flex items-center"><BookOpenText className="mr-3 h-7 w-7" /> About Indian Visual Arts</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-lg text-foreground/85 leading-relaxed">{visualArtsDetails.about.intro}</p>
            <blockquote className="border-l-4 border-accent pl-4 py-2 italic bg-accent/5 rounded-md">
              <p className="font-hindi text-md text-accent-foreground" lang="sa">{visualArtsDetails.about.quote.text}</p>
              <p className="text-sm text-muted-foreground mt-1"><strong>English:</strong> {visualArtsDetails.about.quote.translation}</p>
              <p className="text-xs text-muted-foreground mt-1">- {visualArtsDetails.about.quote.source}</p>
            </blockquote>
          </CardContent>
        </Card>

        {/* Key Sections Cards */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {visualArtsDetails.keySections.map(ks => (
            <Card key={ks.id} className="shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
              <CardHeader className="flex-row items-start space-x-3 pb-3">
                <ks.icon className="h-8 w-8 text-accent mt-1 flex-shrink-0" />
                <div>
                  <CardTitle className="text-xl text-accent">{ks.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-sm text-foreground/80 leading-relaxed">{ks.description}</p>
              </CardContent>
              {ks.exploreMoreLink && (
                <CardFooter className="pt-3">
                  <Button variant="link" asChild className="text-primary p-0 h-auto" onClick={(e) => { if(ks.exploreMoreLink==="#") { e.preventDefault(); alert('Explore more coming soon!')} else if (ks.exploreMoreLink?.startsWith("#")) { e.preventDefault(); scrollToSection(ks.exploreMoreLink.substring(1)); }}}>
                    <Link href={ks.exploreMoreLink?.startsWith("#") ? "#" : (ks.exploreMoreLink || "#")}>Explore More <ArrowRight className="ml-2 h-4 w-4" /></Link>
                  </Button>
                </CardFooter>
              )}
            </Card>
          ))}
        </section>
        
        {/* Mandalas, Yantras & Kolams Section */}
        <Card className="shadow-lg" id="mandalas-yantras-kolams-section">
          <CardHeader>
            <CardTitle className="text-2xl text-primary flex items-center"><GalleryThumbnails className="mr-3 h-7 w-7"/>Mandalas, Yantras & Kolams</CardTitle>
            <CardDescription>Visual tools for meditation, ritual, and daily auspiciousness.</CardDescription>
          </CardHeader>
          <CardContent className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {visualArtsDetails.mandalasYantrasKolams.map(myk => (
              <Card key={myk.id} className="bg-muted/30 shadow-sm">
                <CardHeader className="pb-2">
                  <myk.icon className="h-7 w-7 text-accent mb-2"/>
                  <CardTitle className="text-lg text-accent">{myk.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  {myk.imageUrl && (
                     <div className="relative aspect-square mb-3 rounded overflow-hidden">
                       <Image src={myk.imageUrl} alt={`${myk.name} - sacred Indian geometric art`} fill style={{objectFit:"cover"}} data-ai-hint={myk.dataAiHint || myk.name.toLowerCase()} />
                     </div>
                  )}
                  <p className="text-xs text-foreground/75">{myk.description}</p>
                </CardContent>
              </Card>
            ))}
          </CardContent>
        </Card>

        {/* Temple Architecture Section */}
        <Card className="shadow-lg" id="temple-architecture-detailed">
          <CardHeader>
            <CardTitle className="text-2xl text-primary flex items-center"><Landmark className="mr-3 h-7 w-7" />Temple Architecture Styles</CardTitle>
            <CardDescription>Comparing North Indian (Nagara) and South Indian (Dravida) temple designs.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {[visualArtsDetails.templeArchitecture.comparison.nagara, visualArtsDetails.templeArchitecture.comparison.dravida].map(style => (
                <Card key={style.title} className="bg-card shadow-inner">
                  <CardHeader>
                    <CardTitle className="text-xl text-secondary">{style.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="relative aspect-video mb-3 rounded overflow-hidden">
                       <Image src={style.visualPlaceholder} alt={`${style.title} - Indian temple architecture style`} fill style={{objectFit:"cover"}} data-ai-hint={style.dataAiHint} />
                    </div>
                    <p className="text-sm text-foreground/80">{style.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <Separator />
            <h4 className="text-lg font-semibold text-accent">Key Temple Elements:</h4>
            <TooltipProvider>
              <div className="flex flex-wrap gap-4">
                {visualArtsDetails.templeArchitecture.icons.map(el => (
                  <Tooltip key={el.id}>
                    <TooltipTrigger asChild>
                      <Button variant="outline" className="flex items-center gap-2">
                        <el.icon className="h-5 w-5 text-primary" /> {el.name}
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{el.tooltipText}</p>
                    </TooltipContent>
                  </Tooltip>
                ))}
              </div>
            </TooltipProvider>
          </CardContent>
        </Card>

        {/* Interactive Elements Placeholders */}
        <Card className="shadow-lg bg-secondary/5">
          <CardHeader>
            <CardTitle className="text-2xl text-secondary flex items-center"><View className="mr-3 h-7 w-7" />Interactive Explorations</CardTitle>
            <CardDescription>Engage directly with sacred art forms (Future Features).</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-secondary-foreground/80">
            <p><strong>3D Viewer:</strong> {visualArtsDetails.interactivePlaceholders.viewer3D}</p>
            <p><strong>Zoomable Mandalas:</strong> {visualArtsDetails.interactivePlaceholders.zoomableMandala}</p>
            <p><strong>Yantra Builder:</strong> {visualArtsDetails.interactivePlaceholders.buildYantraTool}</p>
          </CardContent>
        </Card>

        {/* Artist Lineage & Real-World Examples (Optional) */}
        {visualArtsDetails.artistLineage && (
            <Card className="shadow-md bg-muted/40">
                <CardHeader><CardTitle className="text-xl text-primary flex items-center"><Users className="mr-3 h-6 w-6"/>Artist Lineage & Notable Sites</CardTitle></CardHeader>
                <CardContent className="space-y-3">
                    <p className="text-foreground/85">{visualArtsDetails.artistLineage.intro}</p>
                    {visualArtsDetails.artistLineage.examples.map(ex => (
                        <div key={ex.name}>
                            <h5 className="font-semibold text-accent">{ex.name}</h5>
                            <p className="text-sm text-foreground/75">{ex.description}</p>
                        </div>
                    ))}
                    <p className="text-sm text-muted-foreground italic mt-2">More examples (Belur-Halebid, Khajuraho, Konark) will be detailed here.</p>
                </CardContent>
            </Card>
        )}

        {/* Learn, Download & Share */}
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl text-primary flex items-center"><GraduationCap className="mr-3 h-7 w-7" />Learn More, Download & Share</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col sm:flex-row gap-4 justify-center">
            {visualArtsDetails.learnDownloadShare.map(lds => (
              <Button key={lds.id} variant="outline" size="lg" className="flex-1" onClick={() => {
                if (lds.actionType === 'download') window.print(); // Simple PDF placeholder
                else if (lds.actionType === 'link') window.open(lds.actionValue, '_blank');
                else alert('Contribution feature coming soon!');
              }}>
                <lds.icon className="mr-2 h-5 w-5" /> {lds.text}
              </Button>
            ))}
          </CardContent>
        </Card>
        
        <Separator className="my-12" />
        <div className="text-center my-8 print:hidden">
          <Button onClick={() => window.print()} variant="outline" size="lg" className="shadow-md">
            <Download className="mr-2 h-5 w-5" /> Export This Exhibit as PDF
          </Button>
        </div>
        <footer className="text-center py-8">
          <Home className="h-10 w-10 text-primary mx-auto mb-4" />
          <p className="text-lg text-muted-foreground">
            Continue your journey through the rich <Link href="/cultural-arts" className="text-primary hover:underline">Cultural Arts Hub</Link>.
          </p>
        </footer>
      </div>
    );
  }


  // Specific Layout for Theatre & Natyashastra
  if (section.id === "theatre" && theatreDetails) {
    return (
      <div className="container mx-auto py-8 space-y-12 font-serif">
        <Breadcrumbs sectionTitle={section.title} />

        {/* Hero Header */}
        <section className="relative h-[350px] md:h-[450px] rounded-xl overflow-hidden shadow-2xl mb-12">
          <Image
            src={theatreDetails.hero.backgroundImageUrl}
            alt={`${theatreDetails.hero.title} - Indian sacred theatre and Natyashastra`}
            fill
            style={{ objectFit: "cover" }}
            className="brightness-60"
            data-ai-hint={theatreDetails.hero.dataAiHintBackground}
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex flex-col items-center justify-center p-6 text-center">
            <Theater className="h-16 w-16 text-white mb-4 drop-shadow-lg" />
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white drop-shadow-md">
              {theatreDetails.hero.title}
            </h1>
            <p className="mt-2 text-lg md:text-xl text-slate-100 max-w-2xl mx-auto drop-shadow-sm">
              {theatreDetails.hero.subtitle}
            </p>
            <Button
              size="lg"
              className="mt-8 shadow-lg hover:scale-105 transition-transform"
              onClick={() => scrollToSection(theatreDetails.hero.ctaScrollTargetId)}
            >
              {theatreDetails.hero.ctaButtonText} <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </section>

        {/* About the Sacred Theatre */}
        <Card className="shadow-xl bg-card/95">
          <CardHeader>
            <CardTitle className="text-2xl text-primary flex items-center"><BookOpenText className="mr-3 h-7 w-7" /> About Sacred Theatre & Its Roots</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-lg text-foreground/85 leading-relaxed">{theatreDetails.about.vedicOriginText}</p>
            <blockquote className="border-l-4 border-accent pl-4 py-2 italic bg-accent/5 rounded-md">
              <p className="font-hindi text-lg text-accent-foreground" lang="sa">{theatreDetails.about.bharataMuniQuote.sanskrit}</p>
              <p className="text-sm text-muted-foreground mt-1"><strong>English:</strong> {theatreDetails.about.bharataMuniQuote.english}</p>
              <p className="text-sm text-muted-foreground font-hindi" lang="hi">{theatreDetails.about.bharataMuniQuote.hindi}</p>
            </blockquote>
            <p className="text-md text-foreground/80">{theatreDetails.about.bharataMuniMention}</p>
          </CardContent>
        </Card>

        {/* Core Teachings of Natyashastra */}
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl text-primary flex items-center"><Library className="mr-3 h-7 w-7" /> Core Teachings of Natyashastra</CardTitle>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full space-y-3">
              {theatreDetails.coreTeachingsNatyashastra.map(item => (
                <AccordionItem key={item.id} value={item.id} className="border bg-muted/20 rounded-lg shadow-sm">
                  <AccordionTrigger className="p-4 text-xl font-semibold text-accent hover:no-underline text-left">
                    <item.icon className="mr-3 h-6 w-6 flex-shrink-0" /> {item.title}
                  </AccordionTrigger>
                  <AccordionContent className="p-4 pt-0 space-y-2">
                    <p className="text-foreground/80 text-sm mb-2">{item.description}</p>
                    {item.subItems && item.subItems.length > 0 ? (
                        <ul className="list-disc list-inside space-y-1 text-sm text-foreground/70 pl-2">
                            {item.subItems.map(sub => <li key={sub.title}><strong>{sub.title}:</strong> {sub.text}</li>)}
                        </ul>
                    ) : (
                        <p className="text-sm text-muted-foreground italic">{item.detailsPlaceholder}</p>
                    )}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>

        {/* Lokadharmi vs Natyadharmi */}
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl text-primary flex items-center"><GitCompareArrows className="mr-3 h-7 w-7" /> Lokadharmi vs. Natyadharmi</CardTitle>
            <CardDescription>Understanding the Two Modes of Theatrical Representation</CardDescription>
          </CardHeader>
          <CardContent className="grid md:grid-cols-2 gap-6">
            {[theatreDetails.lokadharmiVsNatyadharmi.lokadharmi, theatreDetails.lokadharmiVsNatyadharmi.natyadharmi].map(mode => (
              <Card key={mode.title} className="bg-muted/30 shadow-sm">
                <CardHeader>
                  <CardTitle className="text-xl text-accent">{mode.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="relative aspect-video mb-3 rounded overflow-hidden">
                    <Image src={mode.illustrationPlaceholder} alt={`${mode.title} - theatrical representation style`} fill style={{objectFit:"cover"}} data-ai-hint={mode.dataAiHint} />
                  </div>
                  <p className="text-sm text-foreground/80 mb-2">{mode.description}</p>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button variant="link" size="sm" className="p-0 h-auto text-primary text-xs">
                          <Info className="mr-1 h-3 w-3" /> Example
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent className="max-w-xs">
                        <p>{mode.tooltipExample}</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </CardContent>
              </Card>
            ))}
          </CardContent>
        </Card>

        {/* Traditional Theatre Forms */}
        <Card className="shadow-lg" id={theatreDetails.hero.ctaScrollTargetId}>
          <CardHeader>
            <CardTitle className="text-2xl text-primary flex items-center"><GalleryHorizontalEnd className="mr-3 h-7 w-7" /> Traditional Theatre Forms of Bharat</CardTitle>
          </CardHeader>
          <CardContent>
             <ScrollArea className="w-full whitespace-nowrap rounded-md border shadow-inner">
                <div className="flex space-x-4 p-4 bg-muted/10">
                    {theatreDetails.traditionalTheatreForms.map(form => (
                    <Card key={form.id} className="min-w-[300px] max-w-[350px] flex-shrink-0 shadow-md hover:shadow-lg transition-shadow duration-300">
                        <CardHeader className="p-4">
                        <div className="relative h-40 w-full mb-3 rounded-md overflow-hidden">
                            <Image src={form.performanceMediaPlaceholder} alt={`${form.name} - traditional Indian theatre form`} fill style={{objectFit:"cover"}} data-ai-hint={form.dataAiHintMedia} />
                        </div>
                        <CardTitle className="text-lg text-accent flex items-center"> <form.icon className="mr-2 h-5 w-5"/> {form.name}</CardTitle>
                        <CardDescription className="text-xs">{form.region}</CardDescription>
                        </CardHeader>
                        <CardContent className="p-4 pt-0 text-sm">
                        <p className="text-foreground/80 mb-1"><strong className="text-primary/90">Origin:</strong> {form.shortOrigin}</p>
                        <p className="text-foreground/80 mb-2"><strong className="text-primary/90">Deity/Theme:</strong> {form.associatedDeityOrTheme}</p>
                        <p className="text-foreground/70 line-clamp-3 mb-3">{form.intro}</p>
                         <Button variant="outline" size="sm" className="w-full" onClick={() => alert(`Watch Teaser for ${form.name} (Placeholder)`)}>
                            <VideoIcon className="mr-2 h-4 w-4"/> Watch Teaser
                        </Button>
                        </CardContent>
                    </Card>
                    ))}
                </div>
                <ScrollBar orientation="horizontal" />
            </ScrollArea>
          </CardContent>
        </Card>

        {/* Spiritual Symbolism */}
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl text-primary flex items-center"><Sparkles className="mr-3 h-7 w-7" /> Spiritual Symbolism in Theatre</CardTitle>
            <CardDescription>{theatreDetails.spiritualSymbolism.intro}</CardDescription>
          </CardHeader>
          <CardContent className="grid md:grid-cols-2 gap-6">
            {theatreDetails.spiritualSymbolism.items.map(item => (
              <Card key={item.id} className="bg-muted/20">
                <CardHeader className="flex-row items-center space-x-2 pb-2">
                  <item.icon className="h-6 w-6 text-accent" />
                  <h4 className="text-lg font-semibold text-accent">{item.title}</h4>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-foreground/80">{item.description}</p>
                  {item.imageGalleryPlaceholder && <p className="text-xs text-muted-foreground italic mt-2">{item.imageGalleryPlaceholder}</p>}
                </CardContent>
              </Card>
            ))}
          </CardContent>
        </Card>

        {/* Interactive Showcase (Placeholder) */}
        <Card className="shadow-lg bg-secondary/5">
          <CardHeader>
            <CardTitle className="text-2xl text-secondary flex items-center"><Lightbulb className="mr-3 h-7 w-7" /> Interactive Showcase</CardTitle>
            <CardDescription>{theatreDetails.interactiveShowcase.intro}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {theatreDetails.interactiveShowcase.items.map(item => (
              <div key={item.id} className="p-4 border border-dashed border-secondary/40 rounded-md">
                <h4 className="text-lg font-semibold text-secondary-foreground flex items-center mb-1"><item.icon className="mr-2 h-5 w-5" /> {item.title}</h4>
                <p className="text-sm text-secondary-foreground/80">{item.descriptionPlaceholder}</p>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Content Enhancement Placeholders */}
        <Card className="shadow-md bg-muted/40">
            <CardHeader><CardTitle className="text-xl text-primary">Further Exploration (Coming Soon)</CardTitle></CardHeader>
            <CardContent className="space-y-3 text-sm text-foreground/75">
                <p><strong>Real Natyashastra Verses:</strong> {theatreDetails.contentEnhancementsPlaceholders.natyashastraVerses}</p>
                <p><strong>Comparison with Western Dramaturgy:</strong> {theatreDetails.contentEnhancementsPlaceholders.comparisonWesternDramaturgy}</p>
                <p><strong>Women in Classical Theatre:</strong> {theatreDetails.contentEnhancementsPlaceholders.womenInTheatre}</p>
            </CardContent>
        </Card>

        {/* Learn More or Export */}
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl text-primary flex items-center"><GraduationCap className="mr-3 h-7 w-7" /> Learn More & Resources</CardTitle>
             <CardDescription>{theatreDetails.learnMore.intro}</CardDescription>
          </CardHeader>
          <CardContent className="grid sm:grid-cols-2 gap-4">
            {theatreDetails.learnMore.resources.map(resource => (
              <Button key={resource.id} variant="outline" asChild className="justify-start text-left h-auto py-3">
                <Link href={resource.linkPlaceholder.startsWith("http") ? resource.linkPlaceholder : "#"} target={resource.linkPlaceholder.startsWith("http") ? "_blank" : "_self"} rel="noopener noreferrer" onClick={() => { if(resource.type === 'pdf' && resource.linkPlaceholder === "Download link for PDF summary (placeholder)") window.print(); else if (!resource.linkPlaceholder.startsWith("http")) alert('Resource link coming soon!')}}>
                  <resource.icon className="mr-2 h-5 w-5 flex-shrink-0" />
                  <span>{resource.title}
                    {resource.linkPlaceholder === "Download link for PDF summary (placeholder)" && <span className="text-xs text-muted-foreground"> (Print Page)</span>}
                    {!resource.linkPlaceholder.startsWith("http") && resource.linkPlaceholder !== "Download link for PDF summary (placeholder)" && <span className="text-xs text-muted-foreground"> (Coming Soon)</span>}
                  </span>
                </Link>
              </Button>
            ))}
          </CardContent>
        </Card>
         <Separator className="my-12" />
        <div className="text-center my-8 print:hidden">
            <Button onClick={() => window.print()} variant="outline" size="lg" className="shadow-md">
            <Download className="mr-2 h-5 w-5" /> Export This Exhibit as PDF
            </Button>
        </div>

        <footer className="text-center py-8">
            <Home className="h-10 w-10 text-primary mx-auto mb-4" />
            <p className="text-lg text-muted-foreground">
            Continue your journey through the rich <Link href="/cultural-arts" className="text-primary hover:underline">Cultural Arts Hub</Link>.
            </p>
        </footer>
      </div>
    );
  }


  // Specific Layout for Dance
  if (section.id === "dance" && danceDetails) {
    return (
      <div className="container mx-auto py-8 space-y-12 font-serif">
        <Breadcrumbs sectionTitle={section.title} />

        <section className="relative h-[300px] md:h-[400px] rounded-xl overflow-hidden shadow-2xl mb-12">
          {section.heroImageUrl && (
            <Image
              src={section.heroImageUrl}
              alt={`${section.title} - Hero Image - Indian classical dance`}
              fill
              style={{ objectFit: "cover" }}
              className="brightness-60"
              data-ai-hint={section.heroDataAiHint || section.title.toLowerCase()}
            />
          )}
          <div className={`absolute inset-0 flex flex-col items-center justify-center p-6 text-center ${!section.heroImageUrl && 'bg-gradient-to-br from-primary/20 to-secondary/20'}`}>
            <SectionIcon className="h-16 w-16 text-white mb-4 drop-shadow-lg" />
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white drop-shadow-md">
              {section.title}
            </h1>
            {section.themeLine && <p className="mt-2 text-lg md:text-xl text-slate-100 max-w-2xl mx-auto drop-shadow-sm">{section.themeLine}</p>}
          </div>
        </section>

        <Card className="shadow-xl bg-card/95">
          <CardHeader>
            <CardTitle className="text-2xl text-accent flex items-center"><Info className="mr-3 h-7 w-7" />About This Sacred Art</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-lg text-foreground/85 leading-relaxed">{danceDetails.pageObjective}</p>
            {danceDetails.introductionVideoPlaceholder && (
              <div className="p-4 border border-dashed border-primary/50 rounded-md text-center bg-muted/30">
                <VideoIcon className="h-10 w-10 text-primary mx-auto mb-2" />
                <p className="text-sm text-muted-foreground">Placeholder: Brief video showing "Dance as Meditation" (e.g., {danceDetails.introductionVideoPlaceholder})</p>
              </div>
            )}
          </CardContent>
        </Card>

        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl text-primary flex items-center"><ScrollTextIcon className="mr-3 h-7 w-7" />Natyashastra's Foundation</CardTitle>
          </CardHeader>
          <CardContent>
            {danceDetails.bharataMuniBio && <p className="text-foreground/80 mb-4 italic">{danceDetails.bharataMuniBio}</p>}
            {danceDetails.natyashastraConcepts && (
              <Accordion type="single" collapsible className="w-full mb-4">
                {danceDetails.natyashastraConcepts.map(concept => (
                  <AccordionItem value={concept.name} key={concept.name}  className="border bg-muted/20 rounded-lg shadow-sm mb-2">
                    <AccordionTrigger className="p-4 text-xl font-semibold text-accent hover:no-underline text-left">
                        {concept.name} ({concept.sanskritName})
                    </AccordionTrigger>
                    <AccordionContent className="space-y-2 p-4 pt-0">
                      <p className="text-foreground/80">{concept.explanation}</p>
                      {concept.example && <p className="text-sm text-primary"><span className="font-medium">Example:</span> {concept.example}</p>}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            )}
            {danceDetails.natyashastraVerse && (
              <div className="p-4 border border-primary/30 rounded-md bg-primary/5">
                <h4 className="text-lg font-semibold text-primary mb-2">Key Verse from Natyashastra:</h4>
                <p className="font-hindi text-lg text-accent mb-1" lang="sa">{danceDetails.natyashastraVerse.sanskrit}</p>
                <p className="text-sm text-muted-foreground mb-1"><strong>English:</strong> {danceDetails.natyashastraVerse.english}</p>
                <p className="text-sm text-muted-foreground font-hindi" lang="hi"><strong>हिन्दी:</strong> {danceDetails.natyashastraVerse.hindi}</p>
              </div>
            )}
          </CardContent>
        </Card>

        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl text-primary flex items-center"><GalleryHorizontalEnd className="mr-3 h-7 w-7" />Classical Dance Forms</CardTitle>
            <CardDescription>Explore various classical dance traditions from across Bharat.</CardDescription>
             <div className="pt-4">
                <Button variant="outline" size="sm" className="mr-2" disabled><FilterIcon className="mr-2 h-4 w-4" /> Filter by Deity</Button>
                <Button variant="outline" size="sm" className="mr-2" disabled><Globe2 className="mr-2 h-4 w-4" /> Filter by State</Button>
                <Button variant="outline" size="sm" disabled><SmilePlus className="mr-2 h-4 w-4" /> Filter by Theme/Rasa</Button>
            </div>
          </CardHeader>
          <CardContent className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {danceDetails.danceForms.map(form => (
              <Card key={form.id} className="flex flex-col hover:shadow-xl transition-shadow bg-muted/20">
                <CardHeader>
                   {form.media.image && (
                    <div className="relative aspect-video mb-4 rounded-md overflow-hidden">
                      <Image src={form.media.image} alt={`${form.name} - classical Indian dance`} fill style={{objectFit:"cover"}} data-ai-hint={form.name.toLowerCase()} />
                    </div>
                  )}
                  <CardTitle className="text-xl text-accent">{form.name}</CardTitle>
                  {form.sanskritEtymology && <CardDescription className="text-xs italic text-muted-foreground">{form.sanskritEtymology}</CardDescription>}
                   <Badge variant="secondary" className="text-xs w-fit mt-1">{form.region}</Badge>
                </CardHeader>
                <CardContent className="flex-grow space-y-3 text-sm">
                  <p><strong className="text-primary/90">Origin:</strong> {form.origin}</p>
                  <p><strong className="text-primary/90">Deity:</strong> {form.deity}</p>
                  <p><strong className="text-primary/90">Philosophy:</strong> {form.philosophy}</p>

                  <Accordion type="single" collapsible className="w-full text-xs">
                    <AccordionItem value="key-elements" className="border-t pt-2">
                      <AccordionTrigger className="text-primary/90 hover:no-underline py-2 text-xs font-semibold">Key Elements</AccordionTrigger>
                      <AccordionContent className="space-y-1 pl-2 pt-1">
                        <p><strong className="text-muted-foreground">Mudras:</strong> {form.keyElements.mudras.join(", ")}</p>
                        <p><strong className="text-muted-foreground">Costume:</strong> {form.keyElements.costume.join(", ")}</p>
                        <p><strong className="text-muted-foreground">Accompaniment:</strong> {form.keyElements.musicalAccompaniment.join(", ")}</p>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="themes" className="border-t pt-2">
                      <AccordionTrigger className="text-primary/90 hover:no-underline py-2 text-xs font-semibold">Themes</AccordionTrigger>
                      <AccordionContent className="space-y-1 pl-2 pt-1">
                         {form.themes.map((theme, i) => <li key={i} className="list-none">{theme}</li>)}
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="notable-features" className="border-t pt-2">
                      <AccordionTrigger className="text-primary/90 hover:no-underline py-2 text-xs font-semibold">Notable Features</AccordionTrigger>
                      <AccordionContent className="space-y-1 pl-2 pt-1">
                        {form.notableFeatures.map((feature, i) => <li key={i} className="list-none">{feature}</li>)}
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>

                  {form.overview && <p className="mt-2 text-foreground/75 line-clamp-3">{form.overview}</p>}
                </CardContent>
                <CardFooter className="p-3">
                   <div className="p-2 border border-dashed border-secondary/50 rounded-md text-center w-full bg-background">
                    <VideoIcon className="h-8 w-8 text-secondary mx-auto mb-1" />
                    <p className="text-xs text-muted-foreground">Video Preview: {form.media.video}</p>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </CardContent>
        </Card>

        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl text-primary flex items-center"><Hand className="mr-3 h-7 w-7" />Mudras & Attire</CardTitle>
          </CardHeader>
          <CardContent>
            <h4 className="text-lg font-semibold text-accent mb-2">Key Mudras (Hand Gestures):</h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-6">
              {danceDetails.mudras.map(mudra => (
                <div key={mudra.name} className="p-3 border rounded-md bg-muted/30 text-center hover:bg-muted/50 transition-colors group">
                  {mudra.imageUrl ?
                    <Image src={mudra.imageUrl} alt={`${mudra.name} - Indian dance mudra`} width={60} height={60} className="mx-auto mb-2 rounded" data-ai-hint={mudra.dataAiHintImage || mudra.name.toLowerCase()} />
                    : <Hand className="h-10 w-10 text-primary mx-auto mb-2" />
                  }
                  <p className="font-semibold text-sm text-primary/90">{mudra.name} {mudra.sanskritName && `(${mudra.sanskritName})`}</p>
                  <p className="text-xs text-muted-foreground group-hover:block md:hidden">{mudra.meaning}</p>
                  <p className="text-xs text-muted-foreground hidden md:group-hover:block">{mudra.meaning}</p>
                </div>
              ))}
            </div>
            <p className="text-sm text-center text-muted-foreground italic mb-6">(Hover/Tap interaction on mudra symbols for meaning - Placeholder for advanced interaction)</p>

            <h4 className="text-lg font-semibold text-accent mb-2">Costume Layers:</h4>
            <p className="text-foreground/80">{danceDetails.costumeIllustrationPlaceholder || "Detailed illustrations of costume layers for each dance style are planned."}</p>
          </CardContent>
        </Card>

        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl text-primary flex items-center"><PartyPopper className="mr-3 h-7 w-7" />Dance in Festivals & Temple Traditions</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-foreground/80 mb-4">Placeholder for Carousel: Visuals of dance performances during major festivals like {danceDetails.festivalExamples.map(fe => fe.title).join(", ")}.</p>
            <div className="grid md:grid-cols-2 gap-4">
              {danceDetails.festivalExamples.map(ex => (
                <Card key={ex.id} className="bg-muted/20">
                  <CardHeader>
                    <CardTitle className="text-lg text-accent">{ex.title}</CardTitle>
                    {ex.imageUrl && <div className="relative aspect-video mt-2 rounded overflow-hidden"><Image src={ex.imageUrl} alt={`${ex.title} - festival dance`} fill style={{objectFit:"cover"}} data-ai-hint={ex.dataAiHintImage || ex.title.toLowerCase()} /></div>}
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-foreground/80">{ex.description}</p>
                    <p className="text-xs text-primary mt-1">Features: {ex.danceFormsFeatured.join(", ")}</p>
                    {ex.audioPlaceholder && <p className="text-xs text-muted-foreground mt-1">Audio: {ex.audioPlaceholder}</p>}
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-lg">
            <CardHeader><CardTitle className="text-2xl text-primary flex items-center"><Sparkles className="mr-3 h-7 w-7"/>Interactive Explorations (Placeholders)</CardTitle></CardHeader>
            <CardContent className="space-y-3 text-foreground/80">
                <p><strong>Mudra Explainer Wheel:</strong> {danceDetails.interactiveElementPlaceholders.mudraWheel}</p>
                <p><strong>Short Performances Gallery:</strong> {danceDetails.interactiveElementPlaceholders.shortPerformances}</p>
                <p><strong>Temple-Dance Timeline:</strong> {danceDetails.interactiveElementPlaceholders.templeDanceTimeline}</p>
                <p><strong>Rasa Filter:</strong> {danceDetails.interactiveElementPlaceholders.rasaFilter}</p>
            </CardContent>
        </Card>

        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl text-primary flex items-center"><BrainCog className="mr-3 h-7 w-7" />Dance as Sadhana (Spiritual Practice)</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4 mb-6">
              {danceDetails.dancerSaintQuotes.map((q, i) => (
                <blockquote key={`quote-${i}`} className="border-l-4 border-accent pl-4 italic text-foreground/80">
                  "{q.quote}" <footer className="text-sm text-muted-foreground">- {q.author}{q.era && ` (${q.era})`}</footer>
                </blockquote>
              ))}
            </div>
            <h4 className="text-lg font-semibold text-accent mb-2">Divine Figures as Eternal Dancers:</h4>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {danceDetails.divineDancers.map(figure => (
                <div key={figure.name} className="p-3 border rounded-md bg-muted/30 text-center">
                  {figure.icon ? <figure.icon className="h-10 w-10 text-primary mx-auto mb-2" /> : <PersonStanding className="h-10 w-10 text-primary mx-auto mb-2"/>}
                  <p className="font-semibold text-sm text-primary/90">{figure.name}</p>
                  <p className="text-xs text-muted-foreground">{figure.description}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-lg bg-secondary/5">
            <CardHeader><CardTitle className="text-2xl text-secondary flex items-center"><Settings className="mr-3 h-7 w-7"/>Additional Features & Engagement (Placeholders)</CardTitle></CardHeader>
            <CardContent className="space-y-3 text-secondary-foreground/80">
                <p><strong>Export Sections as PDF:</strong> {danceDetails.additionalFeatures.pdfExportPlaceholder}</p>
                <p><strong>User Submission Area:</strong> {danceDetails.additionalFeatures.userSubmissionPlaceholder}</p>
            </CardContent>
        </Card>


        <Separator className="my-12" />
        <div className="text-center my-8 print:hidden">
          <Button onClick={() => window.print()} variant="outline" size="lg" className="shadow-md">
            <Download className="mr-2 h-5 w-5" /> Export This Exhibit as PDF
          </Button>
        </div>
        <footer className="text-center py-8">
          <Home className="h-10 w-10 text-primary mx-auto mb-4" />
          <p className="text-lg text-muted-foreground">
            Continue your journey through the rich <Link href="/cultural-arts" className="text-primary hover:underline">Cultural Arts Hub</Link>.
          </p>
        </footer>
      </div>
    );
  }

  // Specific Layout for Classical Music (as implemented before)
  if (section.id === "classical-music" && classicalDetails) {
    return (
      <div className="container mx-auto py-8 space-y-12 font-serif">
        <Breadcrumbs sectionTitle={classicalDetails.title} />

        <section className="relative h-[300px] md:h-[400px] rounded-xl overflow-hidden shadow-2xl mb-12">
          {section.heroImageUrl && (
            <Image
              src={section.heroImageUrl}
              alt={`${classicalDetails.title} - Hero Image - Indian classical music`}
              fill
              style={{ objectFit: "cover" }}
              className="brightness-60"
              data-ai-hint={section.heroDataAiHint || classicalDetails.title.toLowerCase()}
            />
          )}
          <div className={`absolute inset-0 flex flex-col items-center justify-center p-6 text-center ${!section.heroImageUrl && 'bg-gradient-to-br from-primary/20 to-secondary/20'}`}>
            <Music2 className="h-16 w-16 text-white mb-4 drop-shadow-lg" />
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white drop-shadow-md">
              {classicalDetails.title}
            </h1>
          </div>
        </section>

        <Card className="shadow-xl bg-background/80 backdrop-blur-sm border border-primary/20">
          <CardHeader>
              <CardTitle className="text-2xl text-primary flex items-center"><Music2 className="mr-3 h-7 w-7"/>About {classicalDetails.title}</CardTitle>
          </CardHeader>
          <CardContent>
              <p className="text-lg text-foreground/85 leading-relaxed font-sans">{classicalDetails.description}</p>
              <p className="text-md text-foreground/75 mt-2 font-sans">Traditions: {classicalDetails.traditions.join(", ")}</p>
          </CardContent>
        </Card>

        <Tabs defaultValue="origins-elements" className="w-full">
          <ScrollArea className="pb-2">
            <TabsList className="mb-6 flex w-max space-x-1 sm:w-full sm:grid sm:grid-cols-2 md:grid-cols-4">
              <TabsTrigger value="origins-elements">Origins & Core Elements</TabsTrigger>
              <TabsTrigger value="traditions-forms">Traditions & Forms</TabsTrigger>
              <TabsTrigger value="applications-learning">Applications & Learning</TabsTrigger>
              <TabsTrigger value="media-references">Media & References</TabsTrigger>
            </TabsList>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>

          <TabsContent value="origins-elements" className="space-y-6">
            <Card className="shadow-lg border border-accent/20">
                <Accordion type="single" collapsible defaultValue="item-origins">
                  <AccordionItem value="item-origins" className="border-b-0">
                    <AccordionTrigger className="p-6 hover:no-underline">
                      <div className="flex items-start space-x-4 text-left w-full">
                        <ScrollTextIcon className="h-8 w-8 text-accent flex-shrink-0 mt-1" />
                        <div>
                          <h3 className="text-xl font-semibold text-accent">Origins & Philosophy</h3>
                          <p className="text-sm text-muted-foreground mt-1 font-sans">{classicalDetails.origins.philosophy}</p>
                        </div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-6 space-y-3">
                        <p className="text-base text-foreground/80 leading-relaxed font-sans">Key Texts: {classicalDetails.origins.texts.join(", ")}.</p>
                        <p className="text-base text-foreground/80 leading-relaxed font-sans">Indian classical music, deeply rooted in Vedic traditions, views sound (Nada) as divine (Nada Brahma). The Sama Veda provides ancient melodic chants, while texts like the Natyashastra and Sangita Ratnakara codified its grammar and aesthetics. It's a path to spiritual realization through disciplined sound.</p>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
            </Card>

            <Card className="shadow-xl bg-card border border-primary/30">
                <CardHeader>
                    <CardTitle className="text-2xl text-primary flex items-center"><ListMusic className="mr-3 h-7 w-7"/>Ragas: Melodic Frameworks</CardTitle>
                    <CardDescription className="font-sans">{classicalDetails.elements.ragas.description} Healing Potential: {classicalDetails.elements.ragas.healing ? "Yes" : "No"}. Chakra Mapping: {classicalDetails.elements.ragas.chakraMapping ? "Yes" : "No"}.</CardDescription>
                </CardHeader>
                <CardContent className="grid md:grid-cols-2 gap-4">
                    {classicalDetails.elements.ragas.examples.map(raga => (
                        <Card key={raga.name} className="bg-muted/30 shadow-md hover:shadow-lg transition-shadow">
                            <CardHeader className="pb-3">
                                <div className="flex items-center space-x-3">
                                    {raga.icon ? <raga.icon className="h-7 w-7 text-accent"/> : <Music className="h-7 w-7 text-accent"/>}
                                    <CardTitle className="text-xl text-accent">{raga.name}</CardTitle>
                                </div>
                                <CardDescription className="text-xs font-sans">Time: {raga.time} | Rasa: {raga.rasa} | Chakra: {raga.chakra}</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-2">
                                <p className="text-sm text-foreground/80 font-sans">{raga.description || "Evokes profound emotions."}</p>
                                <audio controls src={raga.audioUrl.startsWith('placeholder-') ? `/audio/${raga.audioUrl}` : raga.audioUrl} className="w-full mt-2 h-10" aria-label={`Play Raga ${raga.name}`}>
                                    Your browser does not support the audio element. (Audio for {raga.name})
                                </audio>
                            </CardContent>
                        </Card>
                    ))}
                </CardContent>
            </Card>

             <Card className="shadow-lg border border-accent/20">
                <Accordion type="multiple" className="w-full">
                    <AccordionItem value="item-talas">
                        <AccordionTrigger className="p-6 text-xl font-semibold text-accent hover:no-underline flex items-center gap-3"><BarChart3 className="h-6 w-6"/>Talas (Rhythmic Cycles)</AccordionTrigger>
                        <AccordionContent className="px-6 pb-6 space-y-2 bg-muted/20 rounded-b-md">
                            <p className="text-base text-foreground/80 font-sans">{classicalDetails.elements.talas.description}</p>
                            <p className="text-sm text-primary font-sans">Common Talas: {classicalDetails.elements.talas.commonTalas.join(", ")}</p>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-swaras">
                        <AccordionTrigger className="p-6 text-xl font-semibold text-accent hover:no-underline flex items-center gap-3"><SpeakerIcon className="h-6 w-6"/>Swaras (Musical Notes)</AccordionTrigger>
                        <AccordionContent className="px-6 pb-6 space-y-2 bg-muted/20 rounded-b-md">
                            <p className="text-base text-foreground/80 font-sans">{classicalDetails.elements.swaras.philosophy}</p>
                            <p className="text-sm text-primary font-sans">Notes: {classicalDetails.elements.swaras.notes.join(", ")}</p>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-instruments">
                        <AccordionTrigger className="p-6 text-xl font-semibold text-accent hover:no-underline flex items-center gap-3"><Guitar className="h-6 w-6"/>Sacred Instruments</AccordionTrigger>
                        <AccordionContent className="px-6 pb-6 space-y-4 bg-muted/20 rounded-b-md">
                            {classicalDetails.elements.instruments.map(instr => (
                                <div key={instr.name} className="border-b border-border/50 pb-3 last:border-b-0">
                                    <h4 className="text-md font-semibold text-primary flex items-center gap-2">{instr.icon ? <instr.icon/> : <Music2/>} {instr.name}</h4>
                                    <p className="text-sm text-foreground/75 font-sans">Symbolism: {instr.symbolism}</p>
                                    <p className="text-sm text-foreground/75 font-sans">Usage: {instr.usage}</p>
                                    <audio controls src={instr.audioUrl.startsWith('placeholder-') ? `/audio/${instr.audioUrl}` : instr.audioUrl} className="w-full sm:w-2/3 mt-1 h-8" aria-label={`Play ${instr.name} sample`}>Audio for {instr.name}</audio>
                                </div>
                            ))}
                        </AccordionContent>
                    </AccordionItem>
                     <AccordionItem value="item-mantras">
                        <AccordionTrigger className="p-6 text-xl font-semibold text-accent hover:no-underline flex items-center gap-3"><MicVocal className="h-6 w-6"/>Mantras in Music</AccordionTrigger>
                        <AccordionContent className="px-6 pb-6 space-y-4 bg-muted/20 rounded-b-md">
                             <p className="text-base text-foreground/80 font-sans">{classicalDetails.elements.mantras.description}</p>
                            {classicalDetails.elements.mantras.examples.map(mantra => (
                                <div key={mantra.name} className="border-b border-border/50 pb-3 last:border-b-0">
                                    <h4 className="text-md font-semibold text-primary flex items-center gap-2">{mantra.icon ? <mantra.icon/> : <Sparkles/>} {mantra.name}</h4>
                                    <p className="text-sm text-foreground/75 font-sans">Meaning: {mantra.meaning}</p>
                                    <p className="text-sm text-foreground/75 font-sans">Usage: {mantra.usage}</p>
                                    <audio controls src={mantra.audioUrl.startsWith('placeholder-') ? `/audio/${mantra.audioUrl}` : mantra.audioUrl} className="w-full sm:w-2/3 mt-1 h-8" aria-label={`Play ${mantra.name} sample`}>Audio for {mantra.name}</audio>
                                </div>
                            ))}
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </Card>
          </TabsContent>

          <TabsContent value="traditions-forms" className="space-y-6">
            <Card className="shadow-lg border border-secondary/30">
                <CardHeader>
                    <CardTitle className="text-2xl text-secondary flex items-center"><Users className="mr-3 h-7 w-7"/>Hindustani Tradition</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 font-sans">
                    <p className="text-foreground/80">{classicalDetails.forms.hindustani.description}</p>
                    <p><strong className="text-secondary-foreground/90">Forms:</strong> {classicalDetails.forms.hindustani.forms.join(", ")}</p>
                    {classicalDetails.forms.hindustani.gharanas && <p><strong className="text-secondary-foreground/90">Gharanas:</strong> {classicalDetails.forms.hindustani.gharanas.join(", ")}</p>}
                </CardContent>
            </Card>
             <Card className="shadow-lg border border-secondary/30">
                <CardHeader>
                    <CardTitle className="text-2xl text-secondary flex items-center"><Users className="mr-3 h-7 w-7"/>Carnatic Tradition</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 font-sans">
                    <p className="text-foreground/80">{classicalDetails.forms.carnatic.description}</p>
                    <p><strong className="text-secondary-foreground/90">Forms:</strong> {classicalDetails.forms.carnatic.forms.join(", ")}</p>
                    {classicalDetails.forms.carnatic.composers && <p><strong className="text-secondary-foreground/90">Key Composers:</strong> {classicalDetails.forms.carnatic.composers.join(", ")}</p>}
                </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="applications-learning" className="space-y-6">
             <Card className="shadow-lg border border-green-600/30">
                <CardHeader>
                    <CardTitle className="text-2xl text-green-700 flex items-center"><Presentation className="mr-3 h-7 w-7"/>Applications of Classical Music</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 font-sans">
                    <div>
                        <h4 className="font-semibold text-green-800">Spiritual:</h4>
                        <ul className="list-disc list-inside ml-4 text-foreground/80 text-sm">
                            {classicalDetails.applications.spiritual.map(app => <li key={app}>{app}</li>)}
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold text-green-800">Psychological:</h4>
                        <ul className="list-disc list-inside ml-4 text-foreground/80 text-sm">
                            {classicalDetails.applications.psychological.map(app => <li key={app}>{app}</li>)}
                        </ul>
                    </div>
                     <div>
                        <h4 className="font-semibold text-green-800">Educational:</h4>
                        <ul className="list-disc list-inside ml-4 text-foreground/80 text-sm">
                            {classicalDetails.applications.educational.map(app => <li key={app}>{app}</li>)}
                        </ul>
                    </div>
                </CardContent>
            </Card>
             <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 bg-card border border-primary/30">
                <CardHeader className="flex-row items-center space-x-3">
                    <GraduationCap className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                        <h3 className="text-xl font-semibold text-primary">Learning & Media (Placeholders)</h3>
                    </div>
                </CardHeader>
                <CardContent className="space-y-3 font-sans text-sm text-foreground/80">
                   <p><strong className="text-primary/90">Audio Samples:</strong> {classicalDetails.mediaPlaceholders.audioSamples}</p>
                   <p><strong className="text-primary/90">Interactive Player Idea:</strong> {classicalDetails.mediaPlaceholders.interactivePlayer}</p>
                   <p><strong className="text-primary/90">Video Demonstrations:</strong> {classicalDetails.mediaPlaceholders.videoDemos}</p>
                </CardContent>
            </Card>
          </TabsContent>

           <TabsContent value="media-references" className="space-y-6">
             <Card className="shadow-lg border-purple-600/30">
                <CardHeader>
                    <CardTitle className="text-2xl text-purple-700 flex items-center"><UsersRound className="mr-3 h-7 w-7"/>Related Deities</CardTitle>
                     <CardDescription className="font-sans">Divine figures associated with music and arts in Sanatana Dharma.</CardDescription>
                </CardHeader>
                <CardContent className="grid sm:grid-cols-2 gap-4">
                    {classicalDetails.relatedDeities.map(deity => (
                        <div key={deity.name} className="p-3 bg-muted/40 rounded-md">
                            <h4 className="font-semibold text-purple-800 flex items-center gap-2">{deity.icon ? <deity.icon/> : <LandmarkIcon/>} {deity.name}</h4>
                            <p className="text-xs text-foreground/75 font-sans">{deity.role}</p>
                        </div>
                    ))}
                </CardContent>
            </Card>
            <Card className="shadow-lg border-purple-600/30">
                <CardHeader>
                    <CardTitle className="text-2xl text-purple-700 flex items-center"><BookOpenText className="mr-3 h-7 w-7"/>References & Further Reading</CardTitle>
                     <CardDescription className="font-sans">Explore these resources for deeper insights.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                    {classicalDetails.references.map(refItem => (
                        <Button key={refItem.title} variant="link" asChild className="p-0 h-auto text-purple-800 hover:text-purple-600 font-sans block text-left">
                            <Link href={refItem.link} target="_blank" rel="noopener noreferrer">
                                {refItem.title} <ExternalLink className="inline ml-1 h-3 w-3"/>
                            </Link>
                        </Button>
                    ))}
                </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <Separator className="my-12 bg-border/70" />
        <div className="text-center my-8 print:hidden">
            <Button onClick={() => window.print()} variant="outline" size="lg" className="shadow-md font-sans">
            <Download className="mr-2 h-5 w-5" /> Export This Exhibit as PDF
            </Button>
        </div>

        <footer className="text-center py-8">
            <Music2 className="h-10 w-10 text-primary mx-auto mb-4" />
            <p className="text-lg text-muted-foreground font-sans">
            May the sacred sounds guide your journey. Explore more in the <Link href="/cultural-arts" className="text-primary hover:underline">Cultural Arts Hub</Link>.
            </p>
        </footer>
      </div>
    );
  }

  // Generic Layout for other cultural arts sections
  return (
    <div className="container mx-auto py-8 space-y-12 font-serif">
      <Breadcrumbs sectionTitle={section.title} />

      <section className="relative h-[250px] md:h-[350px] rounded-xl overflow-hidden shadow-2xl mb-12">
        {section.heroImageUrl && (
          <Image
            src={section.heroImageUrl}
            alt={`${section.title} - Hero Image - Indian cultural art`}
            fill
            style={{ objectFit: "cover" }}
            className="brightness-60"
            data-ai-hint={section.heroDataAiHint || section.title.toLowerCase()}
          />
        )}
        <div className={`absolute inset-0 flex flex-col items-center justify-center p-6 text-center ${!section.heroImageUrl && 'bg-gradient-to-br from-primary/20 to-secondary/20'}`}>
          <SectionIcon className="h-16 w-16 text-white mb-4 drop-shadow-lg" />
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white drop-shadow-md">
            {section.title}
          </h1>
          {section.themeLine && (
             <p className="mt-2 text-lg md:text-xl text-slate-100 max-w-2xl mx-auto drop-shadow-sm">
                {section.themeLine}
            </p>
          )}
        </div>
      </section>

      <Card className="shadow-xl bg-card/95">
        <CardHeader>
            <CardTitle className="text-2xl text-accent flex items-center"><SectionIcon className="mr-3 h-7 w-7"/>About {section.title}</CardTitle>
        </CardHeader>
        <CardContent>
            <p className="text-lg text-foreground/85 leading-relaxed">{section.content}</p>
        </CardContent>
      </Card>

      {section.subSections && section.subSections.length > 0 && (
        <div className="space-y-8">
          <h2 className="text-2xl md:text-3xl font-semibold text-primary text-center mt-12 mb-8">Key Aspects & Teachings</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {section.subSections.map((sub, index) => {
              const SubIcon = sub.icon;
              return (
                <Card key={`${section.id}-sub-${index}`} className="shadow-lg hover:shadow-xl transition-shadow duration-300 bg-muted/20 flex flex-col">
                  <CardHeader className="flex-row items-start space-x-3 pb-3">
                    <SubIcon className="h-8 w-8 text-accent mt-1 flex-shrink-0" />
                    <div>
                      <CardTitle className="text-xl text-accent">{sub.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-grow">
                     {sub.intro && <p className="text-sm text-foreground/70 leading-relaxed mb-2">{sub.intro}</p>}
                    <p className="text-sm text-foreground/80 leading-relaxed">{sub.text}</p>
                    {sub.imageUrl && (
                        <div className="mt-4 relative aspect-video rounded-md overflow-hidden">
                            <Image src={sub.imageUrl} alt={`${sub.title} - aspect of ${section.title}`} fill style={{objectFit:"cover"}} data-ai-hint={sub.dataAiHint || sub.title.toLowerCase().replace(/\s+/g, '-')} />
                        </div>
                    )}
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      )}

      {section.interactivePlaceholder && (
        <Card className="shadow-lg mt-12 bg-secondary/5">
          <CardHeader>
            <CardTitle className="text-2xl text-secondary flex items-center">
                { section.id === "classical-music" && <Music className="mr-3 h-7 w-7"/> }
                { section.id === "dance" && <PlayCircle className="mr-3 h-7 w-7"/> }
                { section.id === "visual-arts" && <PaletteIconLucide className="mr-3 h-7 w-7"/> }
                { section.id === "rasa-theory" && <SmilePlus className="mr-3 h-7 w-7"/> }
                { !["classical-music", "dance", "visual-arts", "rasa-theory"].includes(section.id) && <Sparkles className="mr-3 h-7 w-7"/> }
                 Interactive Exploration
            </CardTitle>
            <CardDescription>Engage with {section.title} through interactive content.</CardDescription>
          </CardHeader>
          <CardContent className="text-center py-10">
            <HelpCircle className="h-12 w-12 text-secondary-foreground/50 mx-auto mb-4" />
            <p className="text-lg text-secondary-foreground/80 mb-2">
              {section.interactivePlaceholder}
            </p>
            <p className="text-sm text-muted-foreground italic">
              (This is a placeholder for a future interactive element. Real implementation would require specific components for audio, video, 3D models, etc.)
            </p>
            { section.id === 'learn-contribute' && (
                <div className="flex flex-wrap gap-4 mt-6 justify-center">
                    <Button variant="outline"><Download className="mr-2 h-4 w-4" /> Download PDFs</Button>
                    <Button variant="outline"><LinkIconLucide className="mr-2 h-4 w-4" /> Media Archives</Button>
                    <Button><Share2 className="mr-2 h-4 w-4" /> Submit Your Art</Button>
               </div>
            )}
          </CardContent>
        </Card>
      )}

      <Separator className="my-12" />
       <div className="text-center my-8 print:hidden">
        <Button
          onClick={() => window.print()}
          variant="outline"
          size="lg"
          className="shadow-md"
        >
          <Download className="mr-2 h-5 w-5" /> Export This Exhibit as PDF
        </Button>
      </div>

      <footer className="text-center py-8">
        <Home className="h-10 w-10 text-primary mx-auto mb-4" />
        <p className="text-lg text-muted-foreground">
          Continue your journey through the rich <Link href="/cultural-arts" className="text-primary hover:underline">Cultural Arts Hub</Link>.
        </p>
      </footer>
    </div>
  );
}
