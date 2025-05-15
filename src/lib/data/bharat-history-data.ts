
import type { LucideIcon } from "lucide-react";
import { Landmark, MapPin, BookOpen, ShieldQuestion, Users, Microscope, Waves, University, Route } from "lucide-react";

export interface ArchaeologicalFinding {
  id: string;
  title: string;
  description: string;
  imageUrl?: string;
  dataAiHint?: string;
  source?: string;
  icon?: LucideIcon;
}

export interface AncientCity {
  id: string;
  name: string;
  description: string;
  imageUrl?: string;
  dataAiHint?: string;
  features?: string[];
  icon?: LucideIcon;
}

export interface RiverEvolution {
  id: string;
  riverName: string;
  significance: string;
  evidence?: string;
  imageUrl?: string;
  dataAiHint?: string;
  icon?: LucideIcon;
}

export interface TempleArchitecture {
  id: string;
  name: string;
  period: string;
  description: string;
  imageUrls: string[]; // Array of image URLs for a mini-gallery
  dataAiHints?: string[];
  location?: string;
  icon?: LucideIcon;
}

export interface AncientUniversity {
  id: string;
  name: string;
  period: string;
  curriculumHighlights: string[];
  legacy?: string;
  imageUrl?: string;
  dataAiHint?: string;
  icon?: LucideIcon;
}

export interface HistoricalEra {
  id: string;
  name: string;
  shortName: string;
  duration: string;
  heroImage: string;
  dataAiHintHero?: string;
  overview: string;
  archaeologicalFindings?: ArchaeologicalFinding[];
  ancientCities?: AncientCity[];
  riverEvolution?: RiverEvolution;
  templesAndArchitecture?: TempleArchitecture[];
  ancientUniversities?: AncientUniversity[];
}

export interface MythRealityItem {
  id: string;
  myth: string;
  reality: string;
  evidence: string;
  icon?: LucideIcon;
}

export interface VoiceOfBharat {
  id: string;
  quote: string;
  author: string;
  designation: string;
  imageUrl?: string;
  dataAiHint?: string;
}

export const historicalErasData: HistoricalEra[] = [
  {
    id: "saraswati-sindhu",
    name: "Saraswati-Sindhu Civilization",
    shortName: "Saraswati-Sindhu",
    duration: "c. 7000 - 1900 BCE",
    heroImage: "https://picsum.photos/seed/saraswati-sindhu-hero/1200/400",
    dataAiHintHero: "ancient ruins",
    overview: "An advanced urban civilization that flourished in the northwestern regions of the Indian subcontinent, known for its sophisticated city planning, drainage systems, and trade networks. Recent research highlights the central role of the Saraswati river system.",
    archaeologicalFindings: [
      { id: "dholavira", title: "Dholavira's Water Management", description: "Sophisticated water reservoirs and step-wells showcasing advanced hydraulic engineering.", imageUrl: "https://picsum.photos/seed/dholavira/600/400", dataAiHint: "ancient reservoirs", source: "ASI Reports", icon: Microscope },
      { id: "rakhigarhi", title: "Rakhigarhi Burial Practices & DNA", description: "Largest IVC site, providing insights into Harappan ancestry and cultural continuity.", imageUrl: "https://picsum.photos/seed/rakhigarhi/600/400", dataAiHint: "archaeological dig", source: "Shinde et al.", icon: Microscope },
    ],
    ancientCities: [
      { id: "mohenjo-daro", name: "Mohenjo-daro", description: "One of the largest settlements, featuring a grid layout, Great Bath, and advanced sanitation.", imageUrl: "https://picsum.photos/seed/mohenjo-daro/600/400", dataAiHint: "ancient city", features: ["Grid System", "Great Bath", "Granaries"], icon: MapPin },
      { id: "harappa", name: "Harappa", description: "Another major urban center with evidence of seals, pottery, and standardized weights.", imageUrl: "https://picsum.photos/seed/harappa/600/400", dataAiHint: "ruins excavation", features: ["Citadel", "Worker's Quarters"], icon: MapPin },
    ],
    riverEvolution: { id: "saraswati-river", riverName: "Saraswati River", significance: "A mighty river described in Vedic texts, considered the cradle of this civilization. Its gradual drying impacted settlements.", evidence: "Paleo-channel studies, Ghaggar-Hakra river system.", imageUrl: "https://picsum.photos/seed/saraswati-map/600/400", dataAiHint: "river map", icon: Waves },
  },
  {
    id: "vedic-period",
    name: "Vedic Period",
    shortName: "Vedic",
    duration: "c. 1900 - 500 BCE",
    heroImage: "https://picsum.photos/seed/vedic-hero/1200/400",
    dataAiHintHero: "vedic ritual",
    overview: "A period characterized by the composition of the Vedas, the development of early Hindu philosophical thought, and the transition from semi-nomadic life to settled agricultural communities and early kingdoms.",
    templesAndArchitecture: [
       { id: "vedic-altars", name: "Vedic Fire Altars (Yajna Shalas)", period: "Vedic Period", description: "Elaborate brick altars constructed for yajnas (fire sacrifices) showcasing precise geometric knowledge (Shulba Sutras).", imageUrls: ["https://i.pinimg.com/736x/b9/09/b9/b909b9ac5c89453c816fe1ff64d7505a.jpg", "https://i.pinimg.com/736x/70/9b/7f/709b7f446a15635b9b83fd8a1cfec6cb.jpg"], dataAiHints: ["fire ritual", "ancient altar"], location: "Various sites", icon: Landmark }
    ],
    ancientUniversities: [
      { id: "gurukulas", name: "Gurukula System", period: "Vedic Period", curriculumHighlights: ["Vedic recitation", "Grammar (Vyakarana)", "Astronomy (Jyotisha)", "Philosophy (Darshana)"], legacy: "Oral tradition of knowledge transmission from Guru to Shishya.", imageUrl: "https://picsum.photos/seed/gurukula/600/400", dataAiHint: "teacher student", icon: University },
    ],
  },
  // Add more eras here (Mahajanapadas, Maurya, Gupta, etc.) with similar structure
  {
    id: "gupta-empire",
    name: "Gupta Empire",
    shortName: "Gupta",
    duration: "c. 320 - 550 CE",
    heroImage: "https://picsum.photos/seed/gupta-hero/1200/400",
    dataAiHintHero: "golden age",
    overview: "Often referred to as the 'Golden Age of India,' this period saw remarkable achievements in mathematics, astronomy, arts, literature, and philosophy. It was marked by political stability and flourishing trade.",
    templesAndArchitecture: [
      { id: "dashavatara-temple", name: "Dashavatara Temple, Deogarh", period: "Gupta Period", description: "One of the earliest surviving Panchayatana style stone temples, known for its exquisite sculptures depicting Vishnu's avatars.", imageUrls: ["https://i.pinimg.com/736x/3e/75/e2/3e75e22aaeb9c8e6493721382330ec54.jpg", "https://i.pinimg.com/736x/15/ee/4c/15ee4c152c23f286ca06ac4d4f8963d9.jpg"], dataAiHints: ["ancient temple", "stone carvings"], location: "Deogarh, Uttar Pradesh", icon: Landmark },
    ],
    ancientUniversities: [
      { id: "nalanda-gupta", name: "Nalanda Mahavihara (Early Phase)", period: "Gupta Period onwards", curriculumHighlights: ["Buddhist philosophy", "Logic (Nyaya)", "Grammar", "Medicine", "Astronomy"], legacy: "A renowned international center of learning attracting scholars from across Asia.", imageUrl: "https://picsum.photos/seed/nalanda-ruins/600/400", dataAiHint: "university ruins", icon: University },
    ],
  },
];

export const mythsVsRealityData: MythRealityItem[] = [
  {
    id: "aryan-invasion",
    myth: "Aryan Invasion Theory: The idea that a nomadic, light-skinned 'Aryan' race invaded India from Central Asia, destroyed the Indus Valley Civilization, and imposed Vedic culture.",
    reality: "This theory, largely a colonial construct, is not supported by archaeological, genetic, or literary evidence. Modern research points to indigenous development and cultural continuity, with migrations being complex and multi-directional, not a destructive invasion.",
    evidence: "Genetic studies (e.g., Rakhigarhi DNA), archaeological continuity between Harappan and later cultures, internal evidence from Vedic literature describing the Saraswati river.",
    icon: ShieldQuestion,
  },
  {
    id: "civilization-decline",
    myth: "Linear Decline Myth: The idea that Indian civilization experienced a straightforward decline after a supposed 'Golden Age' until British intervention 'revived' it.",
    reality: "Indian history shows dynamic periods of flourishing and challenges, with continuous innovation and adaptation across various regions. Many 'dark ages' were periods of significant regional development and cultural synthesis.",
    evidence: "Flourishing of regional kingdoms, continued scientific and philosophical advancements in medieval India, vibrant trade networks, and resilience of cultural traditions.",
    icon: ShieldQuestion,
  },
];

export const voicesOfBharatData: VoiceOfBharat[] = [
  {
    id: "bb-lal",
    quote: "The so-called Aryan invasion of India is a myth. There is no archaeological evidence to support it, and the literary evidence from the Rigveda points to an indigenous origin.",
    author: "Prof. B.B. Lal",
    designation: "Archaeologist, Former Director General of ASI",
    imageUrl: "https://picsum.photos/seed/bblal/100/100",
    dataAiHint: "historian portrait",
  },
  {
    id: "michel-danino",
    quote: "The Saraswati river was not a myth but a mighty river that nurtured a vast civilization. Its drying up was a major environmental event that reshaped ancient Indian geography and history.",
    author: "Michel Danino",
    designation: "Author and Researcher on Ancient India",
    imageUrl: "https://picsum.photos/seed/danino/100/100",
    dataAiHint: "scholar portrait",
  },
  {
    id: "subhash-kak",
    quote: "Ancient India's contributions to science, mathematics, and astronomy, often attributed to later periods or external influences, have deep indigenous roots stretching back to the Vedic era.",
    author: "Prof. Subhash Kak",
    designation: "Scientist and Indologist",
    imageUrl: "https://picsum.photos/seed/subhashkak/100/100",
    dataAiHint: "scientist portrait",
  },
];


    