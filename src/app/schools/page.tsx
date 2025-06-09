
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { Library, GitFork, User, Target, BookOpen, ChevronsRight, CheckCircle, FileText, BookHeart, ArrowRight } from "lucide-react";
import type { Metadata } from 'next';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.sanatanainsights.com';

export const metadata: Metadata = {
  title: "Philosophical Schools of India (Darshanas) - Sanatana Insights",
  description: "Explore the six classical schools (Āstika Darshanas) of Indian philosophy: Nyāya, Vaiśeṣika, Sāṃkhya, Yoga, Mīmāṃsā, and Vedānta, including their core principles and texts.",
  keywords: ["Indian Philosophical Schools", "Darshanas", "Astika Schools", "Nyaya", "Vaisheshika", "Samkhya", "Yoga Philosophy", "Mimamsa", "Vedanta", "Hindu Philosophy Systems", "Indian Logic", "Metaphysics", "Ancient Indian Wisdom"],
  alternates: {
    canonical: '/schools',
  },
  openGraph: {
    title: "Philosophical Schools of India (Darshanas) - Sanatana Insights",
    description: "Dive into Nyāya, Vaiśeṣika, Sāṃkhya, Yoga, Mīmāṃsā, and Vedānta - the foundational systems of Indian thought.",
    url: `${SITE_URL}/schools`,
    images: [
      {
        url: `${SITE_URL}/og-schools.png`, // Replace with a specific OG image for this page
        width: 1200,
        height: 630,
        alt: 'The Six Darshanas of Indian Philosophy',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Philosophical Schools of India (Darshanas) - Sanatana Insights",
    description: "Explore the six classical schools of Indian philosophy and their core teachings.",
    images: [`${SITE_URL}/twitter-schools.png`], // Replace with a specific Twitter image
  },
};

const schoolsData = [
  {
    name: "Nyāya",
    meaning: "Logic or Reasoning",
    founder: "Sage Gautama (Akshapada)",
    keyConcepts: [
      "Emphasizes logic, critical inquiry, and epistemology",
      "Pramāna (means of valid knowledge) is central",
      "Four Pramānas: perception, inference, comparison, and verbal testimony"
    ],
    aim: "Liberation through correct knowledge and reasoning",
    text: "Nyāya Sūtras",
    importance: "Foundation for logical analysis in Hindu philosophy; highly influential in debates and discourse",
    slug: "nyaya",
    icon: <GitFork className="h-10 w-10 text-primary" />,
  },
  {
    name: "Vaiśeṣika",
    meaning: "Particularity or Atomism",
    founder: "Sage Kaṇāda",
    keyConcepts: [
      "Focus on metaphysics and categorization of reality",
      "Six (later seven) padārthas (categories) like substance, quality, action",
      "Believes in atomic theory – everything is made up of atoms"
    ],
    aim: "Liberation through knowledge of the nature of reality",
    text: "Vaiśeṣika Sūtras",
    importance: "Early precursor to scientific thought in Indian philosophy; complements Nyāya logic",
    slug: "vaisheshika",
    icon: <GitFork className="h-10 w-10 text-primary" />, // Consider Atom icon if available & distinct
  },
  {
    name: "Sāṃkhya",
    meaning: "Enumeration or Number",
    founder: "Sage Kapila",
    keyConcepts: [
      "Dualism between Puruṣa (consciousness) and Prakṛti (matter)",
      "Twenty-five tattvas (principles) that constitute existence",
      "Does not include Īśvara (God) in classical form"
    ],
    aim: "Liberation through discrimination between Puruṣa and Prakṛti",
    text: "Sāṃkhya Kārikā",
    importance: "Influenced Yoga and Vedānta; one of the oldest schools of metaphysics in India",
    slug: "samkhya",
    icon: <GitFork className="h-10 w-10 text-primary" />, // Consider Layers or Package icon
  },
  {
    name: "Yoga",
    meaning: "Union or Discipline",
    founder: "Sage Patañjali (compiler of Yoga system)",
    keyConcepts: [
      "Practical discipline for spiritual liberation",
      "Aṣṭāṅga Yoga: Eightfold path including yama, niyama, āsana, prāṇāyāma, pratyāhāra, dhāraṇā, dhyāna, samādhi",
      "Strong psychological insights"
    ],
    aim: "Cessation of mental fluctuations (citta vṛtti nirodha) to realize the Self",
    text: "Yoga Sūtras of Patañjali",
    importance: "Basis for classical and modern yoga; bridges philosophy and practice",
    slug: "yoga",
    icon: <GitFork className="h-10 w-10 text-primary" />, // Consider Sprout or BrainCog icon
  },
  {
    name: "Pūrva Mīmāṃsā",
    meaning: "Earlier Inquiry (on Vedas)",
    founder: "Sage Jaimini",
    keyConcepts: [
      "Focus on ritual actions (karma) and dharma from Vedas",
      "Emphasizes Vedic authority and ritualistic duties",
      "Considers dharma as eternal and non-manifested"
    ],
    aim: "Attain heaven and liberation through performance of Vedic rituals",
    text: "Mīmāṃsā Sūtras",
    importance: "Upheld Vedic tradition and ritualism; foundational to orthodox Hindu practice",
    slug: "purva-mimamsa",
    icon: <BookHeart className="h-10 w-10 text-secondary" />,
  },
  {
    name: "Vedānta (Uttara Mīmāṃsā)",
    meaning: "End of the Vedas (philosophy of the Upaniṣads)",
    founder: "Sage Bādarāyaṇa (Vyāsa)",
    keyConcepts: [
      "Emphasis on Brahman (ultimate reality), Ātman (Self), and Mokṣa (liberation)",
      "Three major sub-schools: Advaita (non-dualism), Viśiṣṭādvaita (qualified non-dualism), Dvaita (dualism)",
      "Strong metaphysical and spiritual focus"
    ],
    aim: "Liberation through knowledge and realization of Brahman",
    text: "Brahma Sūtras, Upaniṣads, Bhagavad Gītā (Prasthāna Trayī)",
    importance: "Most influential school in modern Hindu thought; inspired bhakti, jñāna, and yoga traditions",
    slug: "vedanta",
    icon: <BookHeart className="h-10 w-10 text-secondary" />, // Consider Gem icon
  },
];


export default function SchoolsPage() {
  return (
    <div className="container mx-auto py-10 px-4">
      <section className="text-center mb-16">
        <Library className="h-20 w-20 text-primary mx-auto mb-6" />
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-primary">
          Philosophical Schools (Darśanas)
        </h1>
        <p className="mt-6 text-xl text-foreground/80 max-w-3xl mx-auto">
          Dive into the six classical schools (Āstika) of Indian philosophy and other significant traditions that have shaped India&apos;s intellectual landscape. Each Darśana offers a unique vision for understanding reality and achieving liberation.
        </p>
      </section>

      <div className="space-y-12">
        {schoolsData.map((school) => (
          <Card key={school.slug} className="overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300 bg-card/80 backdrop-blur-sm border-primary/20">
            <CardHeader className="bg-primary/10 p-6">
              <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-3 sm:space-y-0 sm:space-x-4">
                {school.icon}
                <div>
                  <CardTitle className="text-3xl text-primary font-bold">{school.name}</CardTitle>
                  <CardDescription className="text-lg text-primary/90 italic">&quot;{school.meaning}&quot;</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-6 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 text-foreground/90">
              <div>
                <h3 className="font-semibold text-lg text-accent mb-2 flex items-center"><User className="h-5 w-5 mr-2" /> Founder</h3>
                <p className="ml-7">{school.founder}</p>
              </div>
              <div>
                <h3 className="font-semibold text-lg text-accent mb-2 flex items-center"><FileText className="h-5 w-5 mr-2" /> Key Text(s)</h3>
                <p className="ml-7">{school.text}</p>
              </div>
              <div className="md:col-span-2">
                <h3 className="font-semibold text-lg text-accent mb-2 flex items-center"><ChevronsRight className="h-5 w-5 mr-2" /> Key Concepts</h3>
                <ul className="space-y-1.5 ml-7 list-disc list-inside">
                  {school.keyConcepts.map((concept, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-4 w-4 mr-2 mt-1 text-green-500 flex-shrink-0" />
                      <span>{concept}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-lg text-accent mb-2 flex items-center"><Target className="h-5 w-5 mr-2" /> Aim</h3>
                <p className="ml-7">{school.aim}</p>
              </div>
              <div>
                <h3 className="font-semibold text-lg text-accent mb-2 flex items-center"><BookOpen className="h-5 w-5 mr-2" /> Importance</h3>
                <p className="ml-7">{school.importance}</p>
              </div>
            </CardContent>
            <div className="p-6 pt-0 text-right">
              <Link href={`/schools/${school.slug}`} className="inline-flex items-center text-accent hover:text-primary font-semibold transition-colors duration-200">
                Explore {school.name} Further <ArrowRight className="ml-1.5 h-4 w-4" />
              </Link>
            </div>
          </Card>
        ))}
      </div>

      <section className="mt-20 text-center p-8 bg-muted/50 rounded-xl shadow-lg">
        <h2 className="text-3xl font-semibold mb-4 text-primary">Understanding Darśanas</h2>
        <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
          The term &apos;Darśana&apos; literally means &apos;sight&apos; or &apos;vision,&apos; referring to a distinct way of seeing reality and attaining truth. Each school offers a unique perspective and methodology, contributing to a comprehensive understanding of life and existence.
        </p>
      </section>
    </div>
  );
}
