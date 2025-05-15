
'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import Link from "next/link";
import {
  Sigma, Calculator, Brain, Orbit, Telescope, Hourglass, Waves, Music, BrainCog, Rocket, Plane, Scroll,
  Leaf, Atom, Combine, Stethoscope, Gem, Droplets, Users, BookOpen, Mic, Film, Search, ShieldQuestion,
  Lightbulb, SlidersHorizontal, SigmaSquare, Sparkles
} from "lucide-react";

// Metadata should be exported from server components or handled differently for client components
// For now, we remove it here as this will be a client component.
// export const metadata: Metadata = {
//   title: "Vedic Science & Technology - Sanatana Insights",
//   description: "Explore Vedic mathematics, cosmology, sound science, ancient technologies, and more. Bridging ancient wisdom with modern inquiry.",
// };

const vedicMathSutras = [
  { id: "nikhilam", name: "Nikhilam Navatashcaramam Dashatah", description: "('All from 9 and the last from 10') - Used for subtraction and multiplication, especially with numbers near a base (10, 100, etc.).", example: "97 x 98: Deviations from 100 are -3 and -2. Product of deviations: (-3)x(-2)=6. Cross-subtract: 97-2=95 (or 98-3=95). Answer: 9506." },
  { id: "urdhva", name: "Urdhva Tiryagbhyam", description: "('Vertically and Crosswise') - A general multiplication method applicable to all cases.", example: "23 x 14: Vertical (3x4)=12 (write 2, carry 1). Crosswise (2x4 + 3x1)=8+3=11. Add carry: 11+1=12 (write 2, carry 1). Vertical (2x1)=2. Add carry: 2+1=3. Answer: 322." },
  { id: "ekadhikena", name: "Ekadhikena Purvena", description: "('By one more than the previous one') - Used for squaring numbers ending in 5.", example: "Square of 35: Previous digit is 3. One more than previous is 3+1=4. Multiply 3x4=12. Square of last digit 5x5=25. Answer: 1225." },
];

const cosmologyData = [
  {
    id: "lokas",
    title: "Cosmic Structure (Lokas)",
    content: "Vedic texts describe a multi-layered universe with various realms (Lokas) such as Bhuloka (Earth), Bhuvarloka (Atmospheric realm), Swargaloka (Heavenly realm), and higher spiritual realms. Each Loka represents a different plane of existence and consciousness.",
    imageUrl: "https://i.pinimg.com/736x/5a/e5/cc/5ae5cc43c1c3e948bb905e9457c63340.jpg",
    dataAiHint: "sacred geometry",
    icon: Orbit,
  },
  {
    id: "yugas",
    title: "Cosmic Cycles (Yugas)",
    content: "Hindu cosmology outlines vast cycles of time called Yugas (Satya, Treta, Dvapara, Kali), which together form a Mahayuga. Multiple Mahayugas constitute a Manvantara, and Kalpas describe even larger cosmic durations, reflecting a cyclical and immense understanding of time.",
    imageUrl: "https://i.pinimg.com/736x/68/32/1e/68321e41e2ac6b5e35132f9053fb4843.jpg",
    dataAiHint: "mandala art",
    icon: Hourglass,
    interactive_note: "An interactive time wheel could show the duration and characteristics of each Yuga.",
  },
];

const ancientInventions = [
  { id: "ayurveda", title: "Ayurveda (Bioscience)", description: "Ancient system of medicine focusing on holistic health, balance of doshas (Vata, Pitta, Kapha), herbal remedies, and lifestyle practices.", icon: Leaf, imageUrl: "https://i.pinimg.com/736x/52/32/58/5232585f2e2ac83c14a50d520e58ac1a.jpg", dataAiHint: "herbal medicine" },
  { id: "vaisheshika", title: "Atomic Theory (Vaisheshika)", description: "The Vaisheshika school proposed that all material objects are composed of indivisible atoms (paramanu), an early form of atomic theory.", icon: Atom, imageUrl: "https://i.pinimg.com/736x/21/f1/de/21f1dedb12c35bb71e45b0bf6466512c.jpg", dataAiHint: "atomic structure" },
  { id: "surya-siddhanta", title: "Gravity & Planetary Motion (Surya Siddhanta)", description: "Ancient astronomical text detailing calculations for planetary positions, eclipses, and concepts related to gravity (gurutvakarshan).", icon: Combine, imageUrl: "https://i.pinimg.com/736x/f9/a8/f5/f9a8f563a98e87ef314aaf195be299b3.jpg", dataAiHint: "celestial mechanics" },
  { id: "sushruta", title: "Surgery (Sushruta Samhita)", description: "A foundational text on medicine and surgery, describing complex procedures, surgical instruments, and anatomical knowledge.", icon: Stethoscope, imageUrl: "https://i.pinimg.com/736x/95/9f/f1/959ff19da878c6e8f42f96bbdd166079.jpg", dataAiHint: "surgical tools" },
  { id: "metallurgy", title: "Metallurgy (Iron Pillar)", description: "Advanced metallurgical skills evidenced by structures like the rust-resistant Iron Pillar of Delhi, showcasing sophisticated iron extraction and processing.", icon: Gem, imageUrl: "https://i.pinimg.com/736x/07/b2/cd/07b2cd3246464e11d7addf8eb4c42709.jpg", dataAiHint: "metal work" },
  { id: "water-harvesting", title: "Water Harvesting", description: "Sophisticated systems of step-wells (baolis), reservoirs, and canals for water management and irrigation, seen in civilizations like Harappa.", icon: Droplets, imageUrl: "https://i.pinimg.com/736x/c2/83/17/c2831709f249eabb5f04598e3a2738fa.jpg", dataAiHint: "ancient wells" },
];

const researchers = [
    { name: "Subhash Kak", field: "Vedic Studies & Computer Science", contribution: "Research on the astronomical code in the Rigveda, ancient Indian mathematics, and consciousness.", avatar: "https://picsum.photos/seed/subhashkak/100/100", dataAiHint: "scholar portrait" },
    { name: "B. G. Sidharth", field: "Astrophysics & Cosmology", contribution: "Connecting modern cosmological concepts with ancient Indian ideas of cyclic universes and dark energy.", avatar: "https://picsum.photos/seed/bgsidharth/100/100", dataAiHint: "scientist face" },
    { name: "Raj Vedam", field: "Indian History & Science", contribution: "Works on tracing the continuity of Indian scientific traditions and challenging colonial narratives in history.", avatar: "https://picsum.photos/seed/rajvedam/100/100", dataAiHint: "historian profile" },
];

export default function VedicSciencePage() {
  return (
    <div className="container mx-auto py-8 space-y-16">
      {/* Hero Section */}
      <section className="relative h-[400px] md:h-[500px] rounded-xl overflow-hidden shadow-2xl">
        <Image
          src="https://i.pinimg.com/736x/65/9b/04/659b04a0b13763cc5e009ab79764a91c.jpg"
          alt="Vedic Science and Technology"
          fill
          style={{objectFit:"cover"}}
          className="brightness-75"
          data-ai-hint="cosmic art"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col items-center justify-center p-8 text-center">
          <Sparkles className="h-16 w-16 text-primary mb-4" />
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-6xl text-white drop-shadow-md">
            Vedic Science & Technology Showcase
          </h1>
          <p className="mt-4 text-xl text-slate-200 max-w-3xl mx-auto drop-shadow-sm">
            Science Behind the Mantras: Unveiling ancient wisdom in mathematics, cosmology, sound, and more, bridging millennia of knowledge with modern inquiry.
          </p>
        </div>
      </section>

      {/* Section 1: Vedic Mathematics */}
      <section>
        <Card className="shadow-xl">
          <CardHeader>
            <div className="flex items-center space-x-3">
              <SigmaSquare className="h-10 w-10 text-primary" />
              <div>
                <CardTitle className="text-3xl text-primary">Vedic Mathematics – The Ancient Code of Numbers</CardTitle>
                <CardDescription>Discover incredibly fast and intuitive methods of calculation from ancient Indian texts.</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-lg text-foreground/85">
              Vedic Mathematics, derived from ancient texts like the Atharvaveda and later popularized by Sri Bharati Krishna Tirthaji, offers a unique system of mental calculation through simple sutras (aphorisms).
            </p>
            <Accordion type="single" collapsible className="w-full">
              {vedicMathSutras.map((sutra) => (
                <AccordionItem value={sutra.id} key={sutra.id} className="border-border/50">
                  <AccordionTrigger className="text-xl font-semibold text-accent hover:no-underline">
                    {sutra.name}
                  </AccordionTrigger>
                  <AccordionContent className="space-y-2 p-4 bg-muted/30 rounded-md">
                    <p className="text-foreground/80">{sutra.description}</p>
                    <p className="text-sm text-primary"><span className="font-medium">Example:</span> {sutra.example}</p>
                    {/* Placeholder for animated example */}
                    <div className="my-4 p-4 border border-dashed border-primary/50 rounded-md text-center">
                      <Brain className="h-8 w-8 text-primary mx-auto mb-2" />
                      <p className="text-sm text-muted-foreground">Imagine an animation here showing this calculation unfold step-by-step!</p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
            <div className="grid md:grid-cols-2 gap-4 pt-4">
              <Card className="bg-secondary/10">
                <CardHeader><CardTitle className="text-lg text-secondary-foreground flex items-center"><Calculator className="mr-2"/> Applications</CardTitle></CardHeader>
                <CardContent><p className="text-secondary-foreground/80">Vedic Math enhances mental agility, speed, and accuracy, finding applications in education for children and competitive exams. Its principles are also explored in computer algorithms.</p></CardContent>
              </Card>
              <Card className="bg-accent/10">
                <CardHeader><CardTitle className="text-lg text-accent-foreground flex items-center"><SlidersHorizontal className="mr-2"/> Comparative Insight</CardTitle></CardHeader>
                <CardContent><p className="text-accent-foreground/80">Unlike conventional step-by-step methods, Vedic Math often uses intuitive, pattern-based approaches, making complex calculations simpler and faster.</p></CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Section 2: Vedic Cosmology */}
      <section>
        <Card className="shadow-xl">
          <CardHeader>
             <div className="flex items-center space-x-3">
                <Telescope className="h-10 w-10 text-primary" />
                <div>
                    <CardTitle className="text-3xl text-primary">Vedic Cosmology – Mapping the Universe</CardTitle>
                    <CardDescription>Explore how Vedas and Puranas describe the cosmos in mystical yet scientifically intriguing terms.</CardDescription>
                </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <Tabs defaultValue={cosmologyData[0].id} className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                {cosmologyData.map((item) => (
                  <TabsTrigger key={item.id} value={item.id} className="flex items-center gap-2">
                    <item.icon className="h-5 w-5" /> {item.title}
                  </TabsTrigger>
                ))}
              </TabsList>
              {cosmologyData.map((item) => (
                <TabsContent key={item.id} value={item.id} className="mt-4 p-4 border rounded-md bg-muted/30">
                  <div className="grid md:grid-cols-2 gap-6 items-center">
                    <div>
                      <h4 className="text-xl font-semibold text-accent mb-2">{item.title}</h4>
                      <p className="text-foreground/80 mb-4">{item.content}</p>
                      {item.interactive_note && <p className="text-sm text-primary italic">{item.interactive_note}</p>}
                    </div>
                    <div className="relative w-full h-64 md:h-auto md:aspect-[4/2.5] rounded-lg overflow-hidden shadow-md">
                        <Image src={item.imageUrl} alt={item.title} fill style={{objectFit: "cover"}} data-ai-hint={item.dataAiHint} />
                    </div>
                  </div>
                </TabsContent>
              ))}
            </Tabs>
            <p className="text-lg text-foreground/85 pt-4">
              Puranic texts further elaborate on these concepts, describing vast time scales (Kalpas, Manvantaras) and complex multi-universal structures, some of which echo ideas in modern physics like the multiverse theory.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Section 3: Energy & Sound Principles */}
      <section>
        <Card className="shadow-xl">
           <CardHeader>
             <div className="flex items-center space-x-3">
                <Waves className="h-10 w-10 text-primary" />
                <div>
                    <CardTitle className="text-3xl text-primary">Energy & Sound Principles – Mantras as Vibrational Science</CardTitle>
                    <CardDescription>Discover the science behind mantras, sound frequencies, and energy fields, revealing the universe as vibration.</CardDescription>
                </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-lg text-foreground/85">Ancient seers understood the universe as a symphony of vibrations. Mantras, sacred sounds, are considered potent tools to influence energy fields within and around us.</p>
            <div className="grid md:grid-cols-2 gap-6">
                <Card className="bg-background">
                    <CardHeader><CardTitle className="text-xl text-accent flex items-center"><Music className="mr-2"/> Mantra Dynamics</CardTitle></CardHeader>
                    <CardContent>
                        <p className="text-foreground/80 mb-2">Specific mantras are said to resonate at particular frequencies, impacting brainwaves, emotional states, and even physiological processes. The science of Cymatics visually demonstrates how sound shapes matter.</p>
                        <p className="text-sm text-muted-foreground italic">(Placeholder for audio visualizer of mantra frequencies)</p>
                    </CardContent>
                </Card>
                 <Card className="bg-background">
                    <CardHeader><CardTitle className="text-xl text-accent flex items-center"><BrainCog className="mr-2"/> Chakras & Nadis</CardTitle></CardHeader>
                    <CardContent>
                        <p className="text-foreground/80 mb-2">Yogic texts map an intricate network of energy channels (Nadis) and centers (Chakras) in the subtle body. Mantras, particularly Bija mantras, are used to activate and balance these energy centers.</p>
                    </CardContent>
                </Card>
            </div>
            <p className="text-md text-foreground/80"><strong className="text-primary">OM (ॐ):</strong> Often considered the primordial sound of creation, its vibrations are linked by some researchers to cosmic background frequencies. Modern studies are exploring the neurophysiological effects of chanting OM and other mantras.</p>
            <p className="text-sm text-muted-foreground italic">(Placeholder: Links to scientific studies on mantra effects)</p>
          </CardContent>
        </Card>
      </section>

      {/* Section 4: Vimanas – Ancient Flying Machines */}
      <section>
        <Card className="shadow-xl">
           <CardHeader>
             <div className="flex items-center space-x-3">
                <Rocket className="h-10 w-10 text-primary" />
                <div>
                    <CardTitle className="text-3xl text-primary">Vimanas – Ancient Flying Machines</CardTitle>
                    <CardDescription>Exploring descriptions of ancient aircraft from texts like the Vaimanika Shastra, Ramayana, and Mahabharata.</CardDescription>
                </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-lg text-foreground/85">Ancient Indian texts contain intriguing descriptions of flying machines, or Vimanas, sparking curiosity and debate among researchers.</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="border p-4 rounded-lg bg-muted/30">
                    <h4 className="font-semibold text-accent">Textual Descriptions</h4>
                    <p className="text-sm text-foreground/80">Sources like the Vaimanika Shastra (attributed to Sage Bharadwaja, though its antiquity is debated) and epics like Ramayana and Mahabharata mention various types of Vimanas (e.g., Rukma, Tripura, Pushpaka).</p>
                </div>
                 <div className="border p-4 rounded-lg bg-muted/30">
                    <h4 className="font-semibold text-accent">Propulsion & Materials</h4>
                    <p className="text-sm text-foreground/80">Texts describe use of mercury vortex engines, solar power, and specific alloys. The accuracy and feasibility of these descriptions are subjects of ongoing research and interpretation.</p>
                </div>
                <div className="border p-4 rounded-lg bg-muted/30">
                    <h4 className="font-semibold text-accent">Scholarly Debate</h4>
                    <p className="text-sm text-foreground/80">Interpretations range from symbolic or metaphorical accounts to evidence of advanced ancient technology or even a lost science. Critical analysis and interdisciplinary research are key.</p>
                </div>
            </div>
            <Button variant="outline" className="mt-4" onClick={() => alert('Vimana Vault: Placeholder for archive link')}>
                <Scroll className="mr-2" /> Access the Vimana Vault (References)
            </Button>
          </CardContent>
        </Card>
      </section>

      {/* Section 5: Ancient Indian Inventions & Scientific Concepts */}
      <section>
        <Card className="shadow-xl">
          <CardHeader>
             <div className="flex items-center space-x-3">
                <Lightbulb className="h-10 w-10 text-primary" />
                <div>
                    <CardTitle className="text-3xl text-primary">Ancient Indian Inventions & Scientific Concepts</CardTitle>
                    <CardDescription>A gallery of innovations rooted in Vedic and post-Vedic thought.</CardDescription>
                </div>
            </div>
          </CardHeader>
          <CardContent className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ancientInventions.map((invention) => (
              <Card key={invention.id} className="hover:shadow-lg transition-shadow bg-card">
                <CardHeader className="flex-row items-center space-x-3 pb-3">
                  <invention.icon className="h-8 w-8 text-accent" />
                  <CardTitle className="text-xl text-accent">{invention.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-foreground/80 mb-3">{invention.description}</p>
                  {invention.imageUrl && (
                    <div className="relative w-full aspect-[300/180] rounded-md overflow-hidden">
                        <Image src={invention.imageUrl} alt={invention.title} fill style={{objectFit: "cover"}} data-ai-hint={invention.dataAiHint} />
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </CardContent>
        </Card>
      </section>

      {/* Section 6: Research & Modern Interpretation */}
        <section>
            <Card className="shadow-xl">
                 <CardHeader>
                     <div className="flex items-center space-x-3">
                        <BookOpen className="h-10 w-10 text-primary" />
                        <div>
                            <CardTitle className="text-3xl text-primary">Research & Modern Interpretation</CardTitle>
                            <CardDescription>Exploring how modern science and scholarship interpret Vedic knowledge.</CardDescription>
                        </div>
                    </div>
                </CardHeader>
                <CardContent className="space-y-6">
                    <p className="text-lg text-foreground/85">Contemporary researchers, scientists, and historians are increasingly delving into Vedic and ancient Indian texts to uncover scientific insights, validate traditional knowledge, and explore its relevance today.</p>
                    <h4 className="text-xl font-semibold text-accent">Key Areas of Focus:</h4>
                    <ul className="list-disc list-inside space-y-2 text-foreground/80 pl-4">
                        <li>Archaeology and linguistics to trace civilizational continuity.</li>
                        <li>Re-evaluation of ancient mathematical and astronomical contributions.</li>
                        <li>Scientific validation of Ayurvedic principles and herbal medicine.</li>
                        <li>Studies on the effects of meditation, mantra, and yoga on health and consciousness.</li>
                        <li>Decolonizing historical narratives and highlighting indigenous scientific traditions.</li>
                    </ul>
                    <h4 className="text-xl font-semibold text-accent mt-4">Notable Researchers & Voices:</h4>
                     <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {researchers.map(researcher => (
                            <Card key={researcher.name} className="p-4 bg-muted/30">
                                <div className="flex items-center space-x-3 mb-2">
                                    <div className="relative w-12 h-12 rounded-full overflow-hidden">
                                        <Image src={researcher.avatar} alt={researcher.name} fill style={{objectFit: "cover"}} data-ai-hint={researcher.dataAiHint} />
                                    </div>
                                    <div>
                                        <h5 className="font-semibold text-primary">{researcher.name}</h5>
                                        <p className="text-xs text-muted-foreground">{researcher.field}</p>
                                    </div>
                                </div>
                                <p className="text-sm text-foreground/80">{researcher.contribution}</p>
                            </Card>
                        ))}
                    </div>
                    <div className="flex flex-wrap gap-4 mt-4">
                        <Button variant="link" asChild><Link href="#" target="_blank" className="text-primary"><BookOpen className="mr-2"/> Open-Source Papers (Placeholder)</Link></Button>
                        <Button variant="link" asChild><Link href="#" target="_blank" className="text-primary"><Mic className="mr-2"/> Lectures & Interviews (Placeholder)</Link></Button>
                    </div>
                    <p className="text-sm text-foreground/80">Community contributions and citizen science projects are also emerging, fostering wider engagement in rediscovering this ancient heritage.</p>
                </CardContent>
            </Card>
        </section>

      {/* Section 8: Myth vs Misunderstanding */}
      <section>
        <Card className="shadow-xl">
           <CardHeader>
             <div className="flex items-center space-x-3">
                <ShieldQuestion className="h-10 w-10 text-primary" />
                <div>
                    <CardTitle className="text-3xl text-primary">Myth vs. Misunderstanding – Busting Stereotypes</CardTitle>
                    <CardDescription>Addressing colonial dismissals and explaining the nuances of interpreting ancient Indian science.</CardDescription>
                </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <Accordion type="multiple" className="w-full">
                <AccordionItem value="colonial-dismissal" className="border-border/50">
                    <AccordionTrigger className="text-lg font-semibold text-accent hover:no-underline">Why was ancient Indian knowledge often sidelined or misinterpreted?</AccordionTrigger>
                    <AccordionContent className="p-4 bg-muted/30 rounded-md text-foreground/80">
                        Colonial perspectives often viewed indigenous knowledge systems through a lens of superiority, leading to dismissal or mischaracterization. Lack of understanding of Sanskrit, symbolic language, and different epistemological frameworks also contributed.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="myth-metaphor-science" className="border-border/50">
                    <AccordionTrigger className="text-lg font-semibold text-accent hover:no-underline">Mythology, Metaphor, or Scientific Encoding?</AccordionTrigger>
                    <AccordionContent className="p-4 bg-muted/30 rounded-md text-foreground/80">
                        Ancient texts often use rich symbolism and narrative. It's crucial to differentiate between literal interpretations, metaphorical storytelling conveying philosophical truths, and potentially encoded scientific knowledge that requires careful decoding and contextual understanding.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="cultural-context" className="border-border/50">
                    <AccordionTrigger className="text-lg font-semibold text-accent hover:no-underline">The Importance of Cultural Context</AccordionTrigger>
                    <AccordionContent className="p-4 bg-muted/30 rounded-md text-foreground/80">
                        Interpreting ancient scientific concepts requires understanding the cultural, philosophical, and linguistic context in which they arose. Applying modern scientific paradigms directly without considering this context can lead to misinterpretations.
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>
      </section>

    </div>
  );
}

