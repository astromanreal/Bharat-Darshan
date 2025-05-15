import { ShlokaDisplay } from "@/components/shloka-display";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { BookText, Layers, ExternalLink, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata = {
  title: "Texts & Scriptures - Sanatana Insights",
  description: "Explore summaries, teachings, and key shlokas from the Vedas, Upanishads, Bhagavad Gita, and other foundational scriptures of Indian philosophy. Discover our detailed archive.",
};

// Placeholder data
const scriptures = [
  {
    id: "vedas",
    title: "The Vedas",
    description: "The oldest layer of Sanskrit literature and the foundational scriptures of Hinduism, containing hymns, prayers, rituals, and philosophical insights.",
    shlokas: [
      {
        sanskrit: "एकं सद् विप्रा बहुधा वदन्ति ।",
        hindi: "सत्य एक ही है, जिसे विद्वान विभिन्न नामों से पुकारते हैं ।",
        english: "Truth is One, though the sages call it by many names. (Rigveda 1.164.46)",
      },
    ],
  },
  {
    id: "upanishads",
    title: "The Upanishads",
    description: "A collection of philosophical texts forming the theoretical basis for Hinduism, exploring concepts of Brahman, Atman, and Moksha.",
    shlokas: [
      {
        sanskrit: "तत्त्वमसि ।",
        hindi: "तुम वही हो ।",
        english: "Thou art That. (Chandogya Upanishad 6.8.7)",
      },
      {
        sanskrit: "अहं ब्रह्मास्मि ।",
        hindi: "मैं ब्रह्म हूँ ।",
        english: "I am Brahman. (Brihadaranyaka Upanishad 1.4.10)",
      },
    ],
  },
  {
    id: "bhagavad-gita",
    title: "The Bhagavad Gita",
    description: "A 700-verse scripture that is part of the Mahabharata, presenting a synthesis of Dharma, Bhakti, Karma Yoga, and Jnana Yoga.",
    shlokas: [
      {
        sanskrit: "कर्मण्येवाधिकारस्ते मा फलेषु कदाचन । मा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि ॥",
        hindi: "तुम्हारा अधिकार केवल कर्म करने में है, उसके फलों में कभी नहीं । तुम न तो कर्मफल के हेतु बनो और न ही तुम्हारी आसक्ति अकर्म में हो ॥",
        english: "You have a right to perform your prescribed duty, but you are not entitled to the fruits of action. Never consider yourself the cause of the results of your activities, and never be attached to not doing your duty. (BG 2.47)",
      },
    ],
  },
];

export default function TextsPage() {
  return (
    <div className="container mx-auto py-8">
      <section className="text-center mb-12 py-12 md:py-16 bg-gradient-to-br from-primary/10 via-background to-secondary/10 rounded-xl shadow-lg">
        <BookText className="h-20 w-20 text-primary mx-auto mb-6" />
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-primary">
          Explore Our Comprehensive Scriptures Archive
        </h1>
        <p className="mt-6 text-xl text-foreground/80 max-w-3xl mx-auto">
          Delve into the sacred texts that form the bedrock of Indian philosophical and spiritual traditions. For an even more detailed exploration, visit our dedicated project.
        </p>
        <Button asChild size="lg" className="mt-8 shadow-md text-lg px-8 py-3">
          <Link href="https://sanatan-insights.vercel.app" target="_blank" rel="noopener noreferrer">
            Visit Detailed Scriptures Project <ExternalLink className="ml-2 h-5 w-5" />
          </Link>
        </Button>
        <p className="mt-4 text-sm text-muted-foreground">
          (You are currently on a summary page. Click above for the full experience.)
        </p>
      </section>

      <Accordion type="single" collapsible className="w-full space-y-4">
        {scriptures.map((scripture) => (
          <AccordionItem key={scripture.id} value={scripture.id} className="border bg-card rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <AccordionTrigger className="p-6 text-xl font-semibold text-primary hover:no-underline">
              <div className="flex items-center space-x-3">
                <Layers className="h-6 w-6 text-accent" />
                <span>{scripture.title}</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="p-6 pt-0">
              <p className="text-foreground/80 mb-6 leading-relaxed">{scripture.description}</p>
              <div className="space-y-6">
                {scripture.shlokas.map((shloka, index) => (
                  <ShlokaDisplay
                    key={`${scripture.id}-shloka-${index}`}
                    sanskrit={shloka.sanskrit}
                    hindi={shloka.hindi}
                    english={shloka.english}
                  />
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
      
      <section className="mt-16 text-center p-6 bg-muted/50 rounded-lg">
        <h2 className="text-2xl font-semibold mb-3 text-primary">Interpretations & Lineages</h2>
        <p className="text-foreground/80 max-w-2xl mx-auto">
          These scriptures have been interpreted by numerous Acharyas (teachers) and philosophical lineages over centuries. Exploring these diverse interpretations enriches one's understanding of the profound depth contained within.
        </p>
        <Button asChild variant="link" className="mt-4 text-accent">
           <Link href="https://sanatan-insights.vercel.app/saints" target="_blank" rel="noopener noreferrer">
            Learn about Sages & Commentators <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </section>
    </div>
  );
}
