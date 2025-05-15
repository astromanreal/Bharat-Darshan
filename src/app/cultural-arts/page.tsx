
"use client";

import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import {
  Music2, Headset, Waves, PersonStanding, Drama, Palette, Landmark, GalleryHorizontalEnd, Flame, CalendarDays, PartyPopper,
  SmilePlus, BrainCog, Users, Map, Camera, Sparkles, Route, BookOpen, Download, GraduationCap, Share2, Link as LinkIcon,
  Hand, ScrollText, Shapes, Leaf, Sun, Moon, AudioLines, PaletteIcon, Swords, SquareTerminal, Aperture, Video, BookMarked, MessageSquare, Settings, HelpCircle, UserCircle2
} from "lucide-react";
import { Separator } from "@/components/ui/separator";

// Data for the page
const culturalArtsData = {
  hero: {
    title: "Cultural Arts & Intangible Heritage Hub",
    theme: "Bharatiya Kala, Natya, Sangeet & Rituals Archive",
    imageUrl: "https://picsum.photos/seed/cultural-hero/1600/600",
    dataAiHint: "temple carving",
    intro: "A digital sanctuary celebrating the living soul of Indian civilization—its music, dance, theatre, rituals, festivals, and artistic expressions that have endured through time. This page serves as a comprehensive archive and learning space that explores the spiritual, cultural, and psychological dimensions of Indian performing and ritual arts. It brings to life the essence of Bharatiya Kala (Indian art), drawing from ancient treatises like the Natyashastra, Silpa Shastras, and Agamas, while also showcasing the vibrant diversity of regional traditions across the subcontinent.",
  },
  sections: [
    {
      id: "classical-music",
      title: "Classical Music – Nada Yoga and the Sound of the Divine",
      icon: Music2,
      content: "Explore the rich heritage of Indian classical music—both Hindustani and Carnatic systems—seen not just as entertainment, but as a sacred path to self-realization (Nada Brahma).",
      subSections: [
        { title: "Origins in Vedas & Upanishads", text: "The foundational principles of sound and rhythm are traced back to the Sama Veda and various Upanishadic texts, emphasizing music as a divine art.", icon: BookMarked },
        { title: "Ragas: Moods & Chakras", text: "Detailed explanation of how ragas (melodic frameworks) are structured to evoke specific emotions (rasas) and influence energy centers (chakras).", icon: Waves },
        { title: "Sacred Instruments", text: "Symbolic meanings and roles of instruments like Veena, Mridangam, Tabla, and Flute in classical traditions.", icon: Headset },
        { title: "Mantras, Swaras & Talas", text: "The impact of sacred chants (mantras), musical notes (swaras), and rhythmic cycles (talas) on human psychology and healing.", icon: AudioLines },
      ],
      interactivePlaceholder: "Audio player for Raga examples.",
    },
    {
      id: "dance",
      title: "Dance – Embodied Spiritual Expression",
      icon: PersonStanding,
      content: "This section focuses on classical dance forms like Bharatanatyam, Odissi, Kathak, Kuchipudi, Kathakali, etc., as moving meditations and spiritual disciplines.",
      subSections: [
        { title: "Natyashastra's Foundation", text: "Dance as described in Bharata Muni's Natyashastra – a blend of Bhava (emotion), Rasa (essence), and Abhinaya (expression).", icon: ScrollText },
        { title: "Regional Forms & Sacred Stories", text: "Origins and unique characteristics of various classical dance forms and the mythological narratives they depict.", icon: Map },
        { title: "Symbolism in Mudras & Attire", text: "Detailed explanations of mudras (hand gestures), elaborate costumes, and rhythmic footwork.", icon: Hand },
        { title: "Festivals & Temple Traditions", text: "The integral role of dance in temple rituals and cultural festivals.", icon: Landmark },
      ],
      interactivePlaceholder: "Video snippets of different dance forms.",
    },
    {
      id: "theatre",
      title: "Theatre & Natyashastra – Sacred Stagecraft",
      icon: Drama,
      content: "Dive into the roots of drama and theatre in the Indian tradition, where theatre is seen as a divine offering, born from the Vedas themselves.",
      subSections: [
        { title: "Structure of Indian Drama", text: "Based on Natyashastra, exploring character archetypes (Nayaka, Nayika), plot development, and stage conventions.", icon: SquareTerminal },
        { title: "Lokadharmi & Natyadharmi", text: "The concepts of realistic (Lokadharmi) and stylized/symbolic (Natyadharmi) presentation in Indian theatre.", icon: Aperture },
        { title: "Traditional Forms", text: "Overview of folk and classical theatre forms like Yakshagana, Kutiyattam, Terukoothu, and Bhavai.", icon: Users },
      ],
    },
    {
      id: "visual-arts",
      title: "Visual Arts – Sacred Geometry, Sculpture, and Symbolism",
      icon: PaletteIcon,
      content: "This section features the aesthetic and metaphysical brilliance of temple architecture, sculpture, and sacred designs.",
      subSections: [
        { title: "Temples as Cosmic Centers", text: "Principles of Vastu Shastra in temple architecture, making them conduits of cosmic energy.", icon: Landmark },
        { title: "Sculptural Symbolism", text: "Meaning behind postures, weapons, and attributes of deities and yogic figures in sculptures.", icon: Shapes },
        { title: "Mandalas, Yantras & Kolams", text: "Visual prayers and sacred geometry representing the universe and divine energies.", icon: Sun },
      ],
      interactivePlaceholder: "Interactive 3D models of iconic temples (e.g., Konark, Khajuraho).",
    },
    {
      id: "rituals-festivals",
      title: "Rituals & Festivals – Expressions of Cosmic Rhythm",
      icon: Flame,
      content: "Explore the philosophy, rhythm, and symbolism behind rituals, fasts, and festivals that mark the Hindu calendar.",
      subSections: [
        { title: "Science of Rituals", text: "Deep meaning of Agnihotra, Sandhya Vandanam, Abhisheka, and seasonal rituals.", icon: Leaf },
        { title: "Festivals Explained", text: "Significance of major festivals like Diwali, Navratri, Holi, Kumbh Mela, Ratha Yatra, Pongal.", icon: PartyPopper },
      ],
      interactivePlaceholder: "Interactive ritual calendar with lunar/solar alignments; Multimedia gallery of chants and processions.",
    },
    {
      id: "rasa-theory",
      title: "Rasa Theory – The Psychology of Aesthetic Experience",
      icon: SmilePlus,
      content: "One of the central philosophical explorations, this section explains the Rasa Theory—a unique Indian contribution to aesthetics and human consciousness.",
      subSections: [
        { title: "The Nine Rasas", text: "Detailed explanation of Shringara (love), Hasya (laughter), Karuna (compassion), Raudra (anger), Veera (heroism), Bhayanaka (fear), Bibhatsa (disgust), Adbhuta (wonder), and Shanta (peace).", icon: MessageSquare },
        { title: "Art & Inner Transformation", text: "How art evokes aesthetic delight (Rasa) leading to inner transformation and spiritual upliftment (chitta shuddhi).", icon: Sparkles },
        { title: "Examples in Arts", text: "Illustrations of Rasas from various art forms like dance, music, and sculpture.", icon: PaletteIcon },
      ],
      interactivePlaceholder: "Interactive emotion-wheel based on Rasa theory.",
    },
    {
      id: "living-traditions",
      title: "Living Traditions & Regional Diversity",
      icon: Users,
      content: "Showcase the ongoing, vibrant expressions of Indian intangible culture in villages, towns, and temples across Bharat.",
      subSections: [
        { title: "Folk Art Forms", text: "Highlighting diverse folk traditions like Kalbelia, Lavani, Baul, Pattachitra, Theyyam, Gondi painting.", icon: Landmark },
        { title: "Guardians of Tradition", text: "Profiles of artisans, hereditary performers, and gurus keeping these traditions alive.", icon: UserCircle2 },
      ],
      interactivePlaceholder: "Photo essays, mini-documentaries; 'State by State' interactive map.",
    },
    {
      id: "art-as-moksha",
      title: "Art as a Path to Moksha",
      icon: Route,
      content: "Reflect on the philosophical foundation of art in Hindu Dharma—not just as expression, but as a means of attaining liberation.",
      subSections: [
        { title: "Art as Seva & Sadhana", text: "The concept of art as selfless service (Seva) and dedicated spiritual practice (Sadhana).", icon: Sparkles },
        { title: "Devotion, Discipline, Creativity", text: "How Bhakti (devotion), Tapas (discipline), and creative expression converge in artistic pursuits.", icon: Flame },
        { title: "Wisdom of Sage-Artists", text: "Lessons from legendary figures like Vishwakarma, Nandikeshvara, Abhinavagupta.", icon: BookOpen },
        { title: "Divine Artists", text: "Stories of deities as patrons and embodiments of art: Shiva as Nataraja, Saraswati, Narada, Hanuman.", icon: Users },
      ],
    },
    {
      id: "learn-contribute",
      title: "Learn & Contribute",
      icon: GraduationCap,
      content: "A concluding space to engage the user community, inviting exploration and participation.",
      subSections: [
        { title: "Free Resources", text: "Access downloadable PDFs on Natyashastra, Rasa Theory, and temple design.", icon: Download },
        { title: "External Links", text: "Links to classical music archives, dance tutorials, Sanskrit chanting videos.", icon: LinkIcon },
        { title: "Community Contribution", text: "Invitation to submit art, local traditions, or research.", icon: Share2 },
      ],
    },
  ]
};

export default function CulturalArtsPage() {
  return (
    <div className="container mx-auto py-8 space-y-12">
      {/* Hero Section */}
      <section className="relative h-[300px] md:h-[450px] rounded-xl overflow-hidden shadow-2xl">
        <Image
          src={culturalArtsData.hero.imageUrl}
          alt={culturalArtsData.hero.title}
          fill
          style={{objectFit: "cover"}}
          className="brightness-75"
          data-ai-hint={culturalArtsData.hero.dataAiHint}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex flex-col items-center justify-center p-6 text-center">
          <Palette className="h-16 w-16 text-primary mb-4 drop-shadow-lg" />
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white drop-shadow-md">
            {culturalArtsData.hero.title}
          </h1>
          <p className="mt-2 text-lg md:text-xl text-slate-200 max-w-3xl mx-auto drop-shadow-sm">
            {culturalArtsData.hero.theme}
          </p>
        </div>
      </section>
      <p className="text-center text-lg text-foreground/80 max-w-4xl mx-auto -mt-6 mb-8 px-4">
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
          <Download className="mr-2 h-5 w-5" /> Export Page as PDF
        </Button>
      </div>


      {/* Sections */}
      {culturalArtsData.sections.map((section) => (
        <Card key={section.id} className="shadow-xl hover:shadow-2xl transition-shadow duration-300">
          <CardHeader>
            <div className="flex items-center space-x-3 mb-2">
              <section.icon className="h-10 w-10 text-primary" />
              <div>
                <CardTitle className="text-2xl md:text-3xl text-primary">{section.title}</CardTitle>
              </div>
            </div>
            <CardDescription className="text-md text-foreground/80">{section.content}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {section.subSections && section.subSections.length > 0 && (
              <div className="grid md:grid-cols-2 gap-6">
                {section.subSections.map((sub, index) => (
                  <Card key={`${section.id}-sub-${index}`} className="bg-muted/30 shadow-sm p-4 rounded-lg">
                    <div className="flex items-start space-x-3">
                      {sub.icon && <sub.icon className="h-6 w-6 text-accent mt-1 flex-shrink-0" />}
                      <div>
                        <h4 className="font-semibold text-lg text-accent">{sub.title}</h4>
                        <p className="text-sm text-foreground/80">{sub.text}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            )}
            {section.interactivePlaceholder && (
              <div className="mt-4 p-4 border border-dashed border-primary/50 rounded-md text-center bg-secondary/5">
                <HelpCircle className="h-8 w-8 text-primary mx-auto mb-2" />
                <p className="text-sm text-muted-foreground italic">
                  Interactive Element Placeholder: {section.interactivePlaceholder}
                </p>
              </div>
            )}
            {section.id === "learn-contribute" && (
               <div className="flex flex-wrap gap-4 mt-4">
                <Button variant="outline"><Download className="mr-2 h-4 w-4" /> Download PDFs</Button>
                <Button variant="outline"><LinkIcon className="mr-2 h-4 w-4" /> Media Archives</Button>
                <Button><Share2 className="mr-2 h-4 w-4" /> Submit Your Art</Button>
               </div>
            )}
          </CardContent>
        </Card>
      ))}
       <Separator className="my-12" />
        <footer className="text-center py-8">
            <Palette className="h-12 w-12 text-primary mx-auto mb-4" />
            <p className="text-lg text-muted-foreground">
                Dive deep into the artistic soul of Bharat. This journey is an ongoing exploration of timeless beauty and wisdom.
            </p>
        </footer>
    </div>
  );
}

