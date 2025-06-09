
import type { LucideIcon } from "lucide-react";
import {
  Music2, Headset, Waves, PersonStanding, Drama, Palette as PaletteIconShad, Landmark, GalleryHorizontalEnd, Flame, CalendarDays, PartyPopper,
  SmilePlus, BrainCog, Users, Map as MapIcon, Camera as CameraIcon, Sparkles, Route, BookOpen, Download, GraduationCap, Share2, Link as LinkIcon,
  Hand, ScrollText, Shapes, Leaf, Sun, Moon, AudioLines, Palette, SquareTerminal, Aperture, VideoIcon, BookMarked, MessageSquare, Settings, HelpCircle, UserCircle2, FileText as FileTextIcon, Film, Grid,
  Library, PlayCircle, SpeakerIcon, Info, Guitar, BarChart3, RadioTower, FileAudio, ListMusic, DiscAlbum, BookCopy, UsersRound, ExternalLink, LandmarkIcon, MicVocal,
  Presentation, BookOpenText, ScrollTextIcon, ShieldAlertIcon, ZapIcon, Users2, BookHeart, Award, GitFork, AlignCenter, GitMerge, Sprout, Pyramid, Gem, Package, Filter as FilterIcon, Clock, Globe2, Theater, Lightbulb,
  ChevronDown, ChevronUp, Quote, LayoutGrid, TowerControl, Building2, Church, Tent, Warehouse, View, ZoomIn, Wand2, DraftingCompass, Cog, Wrench, PenTool, Orbit, Hexagon, Home, GalleryThumbnails, AppWindow, Youtube,
  Droplets
} from "lucide-react";

// --- Generic Cultural Art Types ---
export interface CulturalArtSubSection {
  title: string;
  text: string;
  icon: LucideIcon;
  imageUrl?: string;
  dataAiHint?: string;
  intro?: string;
}

// --- Visual Arts Specific Types ---
export interface VisualArtKeySectionCard {
  id: string;
  title: string;
  icon: LucideIcon;
  description: string;
  exploreMoreLink?: string; // Placeholder for future detailed pages
}

export interface MandalaYantraExample {
  id: string;
  name: string;
  description: string;
  icon: LucideIcon;
  imageUrl?: string;
  dataAiHint?: string;
}

export interface TempleArchitectureIconDetail {
  id: string;
  name: string;
  icon: LucideIcon;
  tooltipText: string;
}

export interface VisualArtsDetails {
  hero: {
    title: string;
    subtitle: string;
    backgroundAnimationPlaceholder: string; // e.g., "Rotating Mandala or Glowing Temple Silhouette"
  };
  about: {
    intro: string;
    quote: {
      text: string;
      source: string;
      translation: string;
    };
  };
  keySections: VisualArtKeySectionCard[];
  mandalasYantrasKolams: MandalaYantraExample[];
  templeArchitecture: {
    comparison: {
      nagara: { title: string; description: string; visualPlaceholder: string; dataAiHint: string;};
      dravida: { title: string; description: string; visualPlaceholder: string; dataAiHint: string;};
    };
    icons: TempleArchitectureIconDetail[];
  };
  interactivePlaceholders: {
    viewer3D: string;
    zoomableMandala: string;
    buildYantraTool: string;
  };
  artistLineage?: { // Optional section
    intro: string;
    examples: Array<{ name: string; description: string; }>;
  };
  learnDownloadShare: Array<{
    id: string;
    text: string;
    icon: LucideIcon;
    actionType: "download" | "link" | "contribute";
    actionValue: string; // URL or placeholder for action
  }>;
}


// --- Classical Music Specific Types ---
export interface RagaExample {
  name: string;
  time: string;
  rasa: string;
  chakra: string;
  audioUrl: string;
  icon?: LucideIcon;
  description?: string;
}

export interface InstrumentExample {
  name: string;
  symbolism: string;
  usage: string;
  audioUrl: string;
  icon?: LucideIcon;
}

export interface MantraExample {
  name: string;
  meaning: string;
  usage: string;
  audioUrl: string;
  icon?: LucideIcon;
}

export interface TraditionFormDetails {
  gharanas?: string[];
  composers?: string[];
  forms: string[];
  description: string;
}

export interface DeityLink {
  name: string;
  role: string;
  icon?: LucideIcon;
}

export interface ReferenceLink {
  title: string;
  link: string;
}

export interface ClassicalMusicDetails {
  title: string;
  description: string;
  traditions: string[];
  origins: {
    texts: string[];
    philosophy: string;
  };
  elements: {
    ragas: {
      description: string;
      healing: boolean;
      chakraMapping: boolean;
      examples: RagaExample[];
    };
    talas: {
      description: string;
      commonTalas: string[];
    };
    swaras: {
      notes: string[];
      philosophy: string;
    };
    instruments: InstrumentExample[];
    mantras: {
      description: string;
      examples: MantraExample[];
    };
  };
  forms: {
    hindustani: TraditionFormDetails;
    carnatic: TraditionFormDetails;
  };
  applications: {
    spiritual: string[];
    psychological: string[];
    educational: string[];
  };
  mediaPlaceholders: {
    audioSamples: string;
    interactivePlayer: string;
    videoDemos: string;
  };
  relatedDeities: DeityLink[];
  references: ReferenceLink[];
}

// --- Dance Specific Types ---
export interface DanceFormMedia {
  video: string; // placeholder string like "placeholder_bharatanatyam.mp4"
  image: string; // placeholder string like "https://placehold.co/600x400.png?text=Dance+Image"
}

export interface DanceFormKeyElements {
  mudras: string[];
  costume: string[];
  musicalAccompaniment: string[];
}

export interface DanceFormDetail {
  id: string;
  name: string;
  sanskritEtymology?: string;
  region: string;
  deity: string;
  origin: string;
  philosophy: string;
  keyElements: DanceFormKeyElements;
  themes: string[];
  notableFeatures: string[];
  media: DanceFormMedia;
  overview?: string; // Added this back as it was in previous code
  heroImageUrl?: string; // Added this back for individual page heroes
  dataAiHintHero?: string; // Added this back for individual page heroes
}

export interface MudraDefinition {
  name: string;
  sanskritName?: string;
  meaning: string;
  imageUrl?: string;
  dataAiHintImage?: string;
  icon?: LucideIcon;
}

export interface FestivalDanceExample {
  id: string;
  title: string;
  description: string;
  danceFormsFeatured: string[];
  imageUrl?: string;
  dataAiHintImage?: string;
  audioPlaceholder?: string;
}

export interface DancerSaintQuote {
  quote: string;
  author: string;
  era?: string;
}

export interface DivineDancerFigure {
  name: string;
  description: string;
  icon?: LucideIcon;
  imageUrl?: string;
  dataAiHintImage?: string;
}

export interface NatyashastraConcept {
    name: "Bhava" | "Rasa" | "Abhinaya";
    sanskritName: string;
    explanation: string;
    example?: string;
}

export interface DanceDetails {
  pageObjective: string;
  introductionVideoPlaceholder?: string; // e.g. "placeholder-dance-meditation.mp4"
  bharataMuniBio?: string;
  natyashastraConcepts?: NatyashastraConcept[];
  natyashastraVerse?: {
    sanskrit: string;
    english: string;
    hindi: string;
  };
  danceForms: DanceFormDetail[]; // This will use the more detailed structure
  mudras: MudraDefinition[];
  costumeIllustrationPlaceholder?: string;
  festivalExamples: FestivalDanceExample[];
  interactiveElementPlaceholders: {
    mudraWheel: string;
    shortPerformances: string;
    templeDanceTimeline: string;
    rasaFilter: string;
  };
  dancerSaintQuotes: DancerSaintQuote[];
  divineDancers: DivineDancerFigure[];
  additionalFeatures: {
    pdfExportPlaceholder: string;
    userSubmissionPlaceholder: string;
  };
}

// --- Theatre & Natyashastra Specific Types ---
export interface TheatreHeroData {
  title: string;
  subtitle: string;
  backgroundImageUrl: string; // This will be a placeholder URL
  dataAiHintBackground: string;
  ctaButtonText: string;
  ctaScrollTargetId: string;
}

export interface AboutTheatreData {
  vedicOriginText: string;
  bharataMuniQuote: {
    sanskrit: string;
    english: string;
    hindi: string;
  };
  bharataMuniMention: string;
}

export interface NatyashastraTeachingItem {
  id: string;
  title: string;
  icon: LucideIcon;
  description: string; // Brief intro
  detailsPlaceholder: string; // Placeholder for more content
  subItems?: Array<{ title: string; text: string }>; // For Rasa theory, Abhinaya types etc.
}

export interface LokadharmiNatyadharmiComparison {
  lokadharmi: {
    title: string;
    description: string;
    illustrationPlaceholder: string; // URL
    dataAiHint: string;
    tooltipExample: string;
  };
  natyadharmi: {
    title: string;
    description: string;
    illustrationPlaceholder: string; // URL
    dataAiHint: string;
    tooltipExample: string;
  };
}

export interface TraditionalTheatreForm {
  id: string;
  name: string;
  region: string;
  shortOrigin: string;
  associatedDeityOrTheme: string;
  intro: string;
  performanceMediaPlaceholder: string; // Could be image URL or video placeholder text
  dataAiHintMedia: string;
  icon: LucideIcon;
}

export interface SpiritualSymbolismDetail {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  imageGalleryPlaceholder?: string;
}

export interface InteractiveShowcaseItem {
  id: string;
  title: string;
  descriptionPlaceholder: string;
  icon: LucideIcon;
}

export interface LearnMoreResource {
  id: string;
  type: "pdf" | "excerpt" | "video" | "article";
  title: string;
  linkPlaceholder: string; // URL or download instruction
  icon: LucideIcon;
}

export interface TheatreDetails {
  hero: TheatreHeroData;
  about: AboutTheatreData;
  coreTeachingsNatyashastra: NatyashastraTeachingItem[];
  lokadharmiVsNatyadharmi: LokadharmiNatyadharmiComparison;
  traditionalTheatreForms: TraditionalTheatreForm[];
  spiritualSymbolism: {
    intro: string;
    items: SpiritualSymbolismDetail[];
  };
  interactiveShowcase: {
    intro: string;
    items: InteractiveShowcaseItem[];
  };
  learnMore: {
    intro: string;
    resources: LearnMoreResource[];
  };
  contentEnhancementsPlaceholders: {
    natyashastraVerses: string;
    comparisonWesternDramaturgy: string;
    womenInTheatre: string;
  };
}

// --- Rituals & Festivals Specific Types ---
export interface SacredRitualItem {
  id: string;
  name: string;
  explanation: string;
  icon: LucideIcon;
  imageUrl?: string;
  dataAiHint?: string;
}

export interface FestivalCosmicMeaningItem {
  id: string;
  name: string;
  datePattern: string;
  spiritualSymbolism: string;
  associatedDeityOrStory: string;
  exploreLinkPlaceholder: string; // Placeholder for future detailed festival pages
  icon: LucideIcon;
  imageUrl?: string;
  dataAiHint?: string;
}

export interface RitualsFestivalsDetails {
  introduction: {
    text: string;
    animationPlaceholder: string; // e.g., "Soft glowing temple lamp (diya) or rising sun"
  };
  sacredRituals: SacredRitualItem[];
  festivalsCosmicMeaning: FestivalCosmicMeaningItem[];
  timelineViewPlaceholder: {
    title: string;
    description: string;
    types: string[]; // e.g., "Lunar Cycles", "Solar Cycles", "Monthly Vratas"
  };
  audioVisualElements: {
    chantAudioClips: {
      title: string;
      description: string;
      examples: Array<{ name: string; audioPlaceholder: string }>;
    };
    festivalVideos: {
      title: string;
      description: string;
      placeholder: string; // e.g., "Gallery of temple processions, home pujas, community celebrations"
    };
  };
  regionalDiversity: {
    title: string;
    description: string;
    mapPlaceholder: string; // e.g., "Interactive map with click-to-explore folk variations"
  };
  communitySharing: {
    title: string;
    invitationText: string;
    uploadPlaceholder: string; // e.g., "Form for uploading images/stories"
    sharePlaceholder: string; // e.g., "Form for sharing folk customs"
  };
  footerOptions: Array<{
    id: string;
    text: string;
    icon: LucideIcon;
    actionType: "download" | "link" | "submit";
    actionValue: string; // URL or placeholder for action
  }>;
}


// --- Main Cultural Art Section Type ---
export interface CulturalArtSection {
  id: string;
  title: string;
  icon: LucideIcon;
  themeLine?: string;
  content: string; // General intro to the art form category
  subSections?: CulturalArtSubSection[]; // For generic sections
  interactivePlaceholder?: string; // For generic sections
  heroImageUrl?: string; // For individual art form pages
  heroDataAiHint?: string; // For individual art form pages
  classicalMusicDetails?: ClassicalMusicDetails;
  danceDetails?: DanceDetails;
  theatreDetails?: TheatreDetails;
  visualArtsDetails?: VisualArtsDetails;
  ritualsFestivalsDetails?: RitualsFestivalsDetails;
}

// --- Page Data Structure ---
export interface CulturalArtsPageData {
  hero: {
    title: string;
    theme: string;
    // imageUrl and dataAiHint removed for the hub page hero
    intro: string;
  };
  sections: CulturalArtSection[];
}

// --- DATA ---

const newVisualArtsData: VisualArtsDetails = {
  hero: {
    title: "Visual Arts: Where Spirit Meets Form",
    subtitle: "Sacred geometry, divine sculptures, and the cosmic design of temples",
    backgroundAnimationPlaceholder: "Future: Soft animation of a rotating Mandala or glowing temple silhouette.",
  },
  about: {
    intro: "Indian visual art is a profound language of the cosmos. Every sculpture, yantra, and temple blueprint is not merely aesthetic but carries deep spiritual symbolism, reflecting eternal truths and guiding the seeker towards inner harmony and universal consciousness. It is an art form where devotion, mathematics, and metaphysics converge.",
    quote: {
      text: "चित्रसूत्रं न जानाति यो नरो यत्नतोऽपि हि। प्रतिमालक्षणं वेत्तुं न शक्यं तेन सर्वथा॥",
      source: "Vishnudharmottara Purana (Part 3, Chapter 2.4)",
      translation: "One who does not know the principles of painting (Chitrasutra) properly, cannot understand the characteristics of images (sculptures) at all.",
    },
  },
  keySections: [
    { id: "temples-energy", title: "Temples as Energy Machines", icon: Landmark, description: "Explore Vastu Purusha Mandala, cardinal alignments, and the sacred layers of a temple from Garbha Griha (sanctum sanctorum) to the towering Gopuram or Shikhara, designed to channel cosmic energies.", exploreMoreLink: "#temple-architecture-detailed" },
    { id: "sculptural-symbolism", title: "Sculptural Symbolism", icon: Shapes, description: "Decode the meanings behind Mudras (hand gestures), deity poses (Abhaya, Varada), divine Vahanas (animal vehicles), and postures, each telling a story of divine attributes and cosmic functions.", exploreMoreLink: "#" },
    { id: "divine-proportions", title: "Divine Proportions & Shilpa Shastras", icon: DraftingCompass, description: "Learn how ancient texts like Shilpa Shastras and Manasara define precise iconometry and measurements for sculpting deities, constructing temples, and creating sacred altars.", exploreMoreLink: "#" },
  ],
  mandalasYantrasKolams: [
    { id: "sri-yantra", name: "Sri Yantra", description: "A complex geometric pattern representing the divine feminine (Shakti) and the cosmos, used for meditation and invoking abundance.", icon: Hexagon, imageUrl: "https://placehold.co/300x200.png?text=Sri+Yantra", dataAiHint: "sri yantra diagram" },
    { id: "kolams", name: "Kolams / Rangoli", description: "Ephemeral sacred art drawn daily at thresholds using rice flour, symbolizing auspiciousness, impermanence, and welcoming energies.", icon: PenTool, imageUrl: "https://placehold.co/300x200.png?text=Kolam+Design", dataAiHint: "kolam art" },
    { id: "navagraha-mandala", name: "Navagraha Mandalas", description: "Geometric representations mapping the energies of the nine celestial bodies (planets), used in rituals for harmony and astrological balance.", icon: Orbit, imageUrl: "https://placehold.co/300x200.png?text=Navagraha+Mandala", dataAiHint: "planetary mandala" },
  ],
  templeArchitecture: {
    comparison: {
      nagara: { title: "Nagara Style (North Indian)", description: "Characterized by curvilinear towers (Shikhara), amalaka (circular stone disk), and often built on a raised platform. Examples: Khajuraho, Konark.", visualPlaceholder: "https://placehold.co/300x200.png?text=Nagara+Temple", dataAiHint: "nagara architecture"},
      dravida: { title: "Dravida Style (South Indian)", description: "Distinguished by pyramidal towers (Vimana), large enclosures (prakaras), and elaborate gateways (Gopurams). Examples: Brihadeeswarar Temple, Meenakshi Temple.", visualPlaceholder: "https://placehold.co/300x200.png?text=Dravida+Temple", dataAiHint: "dravida architecture"},
    },
    icons: [
      { id: "gopuram", name: "Gopuram", icon: TowerControl, tooltipText: "Elaborate, towering gateway of South Indian temples." },
      { id: "shikhara", name: "Shikhara / Vimana", icon: Pyramid, tooltipText: "The main tower above the sanctum; Shikhara (North), Vimana (South)." },
      { id: "mandapa", name: "Mandapa", icon: Tent, tooltipText: "Pillared hall for congregations and rituals." },
      { id: "garbhagriha", name: "Garbhagriha", icon: Home, tooltipText: "The innermost sanctum housing the primary deity; 'womb chamber'." },
    ],
  },
  interactivePlaceholders: {
    viewer3D: "Placeholder: Interactive 3D viewer for sculptures or yantras (e.g., embed Sketchfab).",
    zoomableMandala: "Placeholder: Zoomable mandala diagrams with hover-to-learn parts.",
    buildYantraTool: "Placeholder: Future idea - 'Build Your Own Yantra' interactive tool.",
  },
  artistLineage: {
    intro: "The transmission of artistic knowledge in ancient India often happened through guilds (shrenis) and family lineages (parampara).",
    examples: [
      { name: "Vishwakarma Lineage", description: "Divine architect and craftsman in Hindu mythology, representing the ideal artisan. Many traditional craftspeople trace their lineage to him." },
      { name: "Sthapatis & Shilpis", description: "Master architects (Sthapatis) and sculptors (Shilpis) who followed canonical texts (Shilpa Shastras) to create temples and idols." },
    ],
  },
  learnDownloadShare: [
    { id: "download-pdfs", text: "Download visual PDFs", icon: Download, actionType: "download", actionValue: "placeholder_visual_guides.pdf" },
    { id: "watch-videos", text: "Watch: Visual Arts in Motion", icon: Youtube, actionType: "link", actionValue: "https://youtube.com/playlist?list=PLEexampleVisualArts" },
    { id: "contribute-art", text: "Contribute: Share your art", icon: Share2, actionType: "contribute", actionValue: "/community/submit-visual-art" },
  ],
};


const newClassicalMusicData: ClassicalMusicDetails = {
  "title": "Classical Music – Nada Yoga and the Sound of the Divine",
  "description": "A spiritual exploration of Indian classical music as a sacred path (Nada Yoga), combining sound, consciousness, and divine expression rooted in Sanātana Dharma.",
  "traditions": ["Hindustani", "Carnatic"],
  "origins": {
    "texts": ["Sama Veda", "Upanishads", "Natyashastra", "Sangita Ratnakara"],
    "philosophy": "Nada Brahma – the belief that the universe is created and sustained by sound (nada)."
  },
  "elements": {
    "ragas": {
      "description": "Melodic frameworks designed to evoke specific emotional and spiritual states (Rasas).",
      "healing": true,
      "chakraMapping": true,
      "examples": [
        { "name": "Raga Yaman", "time": "Evening", "rasa": "Peace, Devotion", "chakra": "Anahata (Heart)", "audioUrl": "/audio/placeholder_yaman.mp3", "icon": Moon, "description": "A prominent evening raga known for its soothing and devotional quality." },
        { "name": "Raga Bhairavi", "time": "Morning", "rasa": "Compassion, Tranquility", "chakra": "Sahasrara (Crown)", "audioUrl": "/audio/placeholder_bhairavi.mp3", "icon": Sun, "description": "A morning raga, often concluding concerts, expressing deep devotion and universal love." },
        { "name": "Raga Darbari Kanada", "time": "Late Night", "rasa": "Majesty, Depth", "chakra": "Vishuddha (Throat)", "audioUrl": "/audio/placeholder_darbari.mp3", "icon": RadioTower, "description": "A profound raga associated with grandeur and deep contemplation." },
        { "name": "Raga Malkauns", "time": "Late Night", "rasa": "Meditation, Seriousness", "chakra": "Ajna (Third Eye)", "audioUrl": "/audio/placeholder_malkauns.mp3", "icon": BrainCog, "description": "A powerful pentatonic raga evoking deep meditative states." }
      ]
    },
    "talas": { "description": "Rhythmic cycles used to maintain time and structure in compositions.", "commonTalas": ["Teentaal", "Ektaal", "Adi Tala", "Rupaka Tala"] },
    "swaras": { "notes": ["Sa", "Re", "Ga", "Ma", "Pa", "Dha", "Ni"], "philosophy": "Each swara corresponds to universal vibrations and inner consciousness." },
    "instruments": [
      { "name": "Veena", "symbolism": "Wisdom, Saraswati's grace", "usage": "Carnatic solo, devotional compositions", "audioUrl": "/audio/placeholder_veena.mp3", "icon": Guitar },
      { "name": "Sitar", "symbolism": "Melody, longing", "usage": "Hindustani solo", "audioUrl": "/audio/placeholder_sitar.mp3", "icon": Music2 },
      { "name": "Tabla", "symbolism": "Duality of sound and rhythm", "usage": "Hindustani rhythm, accompaniment", "audioUrl": "/audio/placeholder_tabla.mp3", "icon": DiscAlbum },
      { "name": "Mridangam", "symbolism": "Primordial sound", "usage": "Carnatic accompaniment", "audioUrl": "/audio/placeholder_mridangam.mp3", "icon": DiscAlbum },
      { "name": "Bansuri (Flute)", "symbolism": "Divine play of Krishna", "usage": "Both traditions", "audioUrl": "/audio/placeholder_flute.mp3", "icon": Waves },
      { "name": "Tanpura", "symbolism": "Eternal drone, foundation of harmony", "usage": "Essential drone for both traditions", "audioUrl": "/audio/placeholder_tanpura.mp3", "icon": AudioLines }
    ],
    "mantras": {
      "description": "Chanted syllables with musical intonation to invoke spiritual energies.",
      "examples": [
        { "name": "Om (ॐ)", "meaning": "Primordial sound of the universe", "usage": "Base for tuning and meditation", "audioUrl": "/audio/placeholder_om.mp3", "icon": Sparkles },
        { "name": "Gayatri Mantra", "meaning": "Prayer for divine illumination", "usage": "Chanted musically during sunrise", "audioUrl": "/audio/placeholder_gayatri.mp3", "icon": Sun }
      ]
    }
  },
  "forms": {
    "hindustani": { "gharanas": ["Gwalior", "Jaipur-Atrauli", "Patiala", "Benaras"], "forms": ["Dhrupad", "Khayal", "Thumri", "Tappa"], "description": "Focuses on improvisation and emotive depth." },
    "carnatic": { "composers": ["Tyagaraja", "Muthuswami Dikshitar", "Shyama Shastri"], "forms": ["Kriti", "Varnam", "Tillana", "Alapana"], "description": "Structured compositions with devotional themes and technical mastery." }
  },
  "applications": {
    "spiritual": ["Nada Yoga", "Meditation", "Temple Worship", "Raga-based Therapy"],
    "psychological": ["Mood Elevation", "Chakra Balancing", "Emotional Healing"],
    "educational": ["Gurukula system", "Modern Conservatories"]
  },
  "mediaPlaceholders": {
    "audioSamples": "Audio cards for ragas, mantras, and instruments will be added here.",
    "interactivePlayer": "Embed interactive player with raga selection, chakra mapping, and playback.",
    "videoDemos": "Future section for Guru performances, concerts, and guided lessons."
  },
  "relatedDeities": [
    { "name": "Saraswati", "role": "Goddess of Music and Wisdom", "icon": BookCopy },
    { "name": "Krishna", "role": "Divine flutist and embodiment of Raga", "icon": PersonStanding },
    { "name": "Shiva (Nataraja)", "role": "Lord of Cosmic Sound and Dance", "icon": Flame }
  ],
  "references": [
    { "title": "Sama Veda (Example)", "link": "https://www.sacred-texts.com/hin/sv.htm" },
    { "title": "Natyashastra (Example)", "link": "https://www.wisdomlib.org/hinduism/book/natyashastra" }
  ]
};

// Processed classical dances using the new JSON structure
const processedClassicalDances: DanceFormDetail[] = [
    {
      id: "bharatanatyam",
      name: "Bharatanatyam",
      region: "Tamil Nadu",
      origin: "Temple dances of South India",
      deity: "Shiva as Nataraja",
      philosophy: "Yoga in motion, Tandava (dynamic) and Lasya (graceful) dance balance",
      keyElements: {
        mudras: ["Anjali", "Tripataka", "Kataka-mukha", "Pataka"],
        costume: ["Traditional sari with pleated fan", "Temple jewelry", "Ankle bells (Ghungroo)", "Headpiece (Chutti)"],
        musicalAccompaniment: ["Mridangam", "Veena", "Flute", "Nadaswaram"]
      },
      themes: ["Bhakti (devotion)", "Rasa expression (Shanta, Shringara, Veera)", "Mythological stories, especially from Shiva and Parvati"],
      notableFeatures: ["Emphasis on Abhinaya (expression)", "Structured compositions (Alarippu, Varnam, Tillana)"],
      media: { video: "placeholder_bharatanatyam.mp4", image: "https://placehold.co/600x400.png?text=Bharatanatyam" },
      sanskritEtymology: "Derived from 'Bha' (Bhava - emotion), 'Ra' (Raga - melody), 'Ta' (Tala - rhythm), and 'Natyam' (dance).",
      overview: "Bharatanatyam is known for its fixed upper torso, bent legs and knees (Araimandi), and spectacular footwork, combined with a sophisticated vocabulary of sign language based on gestures of hands, eyes, and face muscles.",
      heroImageUrl: "https://placehold.co/800x300.png?text=Bharatanatyam+Hero",
      dataAiHintHero: "bharatanatyam dance"
    },
    {
      id: "kathak",
      name: "Kathak",
      region: "North India",
      origin: "Temple dances evolved to Mughal court performances",
      deity: "Krishna",
      philosophy: "Storytelling through rhythmic footwork and spins (Chakkars)",
      keyElements: {
        mudras: ["Pataka", "Ardhapataka", "Tripataka", "Kataka-mukha"],
        costume: ["Anarkali-style dress", "Dupatta", "Ghungroo (ankle bells)"],
        musicalAccompaniment: ["Tabla", "Harmonium", "Sarangi"]
      },
      themes: ["Krishna Leela stories", "Rasa in music and dance", "Combination of Hindu and Mughal cultural elements"],
      notableFeatures: ["Intricate footwork (Tatkar)", "Use of spins (Chakkars)", "Expressive storytelling (Abhinaya)"],
      media: { video: "placeholder_kathak.mp4", image: "https://placehold.co/600x400.png?text=Kathak" },
      sanskritEtymology: "From 'Katha' meaning 'story', and 'Kathaka' meaning 'storyteller'.",
      overview: "Kathak is characterized by its intricate footwork, rapid spins (chakkars), and expressive storytelling. It has influences from both Hindu temple traditions and Mughal courtly arts.",
      heroImageUrl: "https://placehold.co/800x300.png?text=Kathak+Hero",
      dataAiHintHero: "kathak dance"
    },
     {
      id: "odissi",
      name: "Odissi",
      region: "Odisha",
      origin: "Temple dance tradition of Odisha",
      deity: "Jagannath (form of Krishna)",
      philosophy: "Tribhangi posture emphasizing three bends of the body",
      keyElements: {
        mudras: ["Alapadma", "Suchi", "Tripataka", "Kartari-mukha"],
        costume: ["Silk sari draped in a traditional style", "Silver jewelry", "Ghungroo"],
        musicalAccompaniment: ["Mardala", "Flute", "Veena"]
      },
      themes: ["Bhakti and storytelling through sculptures and poses", "Mythology from Jagannath Temple", "Rasa focus on Shringara and Karuna"],
      notableFeatures: ["Graceful torso movements", "Mudra language derived from temple sculptures", "Use of Tribhangi and Chauka postures"],
      media: { video: "placeholder_odissi.mp4", image: "https://placehold.co/600x400.png?text=Odissi" },
      sanskritEtymology: "Named after the region of Odisha, reflecting its indigenous origins.",
      overview: "Odissi is distinguished by its Tribhangi (three-bend) posture, graceful torso movements, and intricate hand gestures that often mirror temple sculptures.",
      heroImageUrl: "https://placehold.co/800x300.png?text=Odissi+Hero",
      dataAiHintHero: "odissi dance"
    },
    {
      id: "kuchipudi",
      name: "Kuchipudi",
      region: "Andhra Pradesh",
      origin: "Village dance-drama tradition",
      deity: "Vishnu and Krishna",
      philosophy: "Combination of dance and drama (Natya)",
      keyElements: {
        mudras: ["Pataka", "Tripataka", "Hamsasya", "Ardhapataka"],
        costume: ["Traditional sari with dhoti style", "Temple jewelry", "Ghungroo"],
        musicalAccompaniment: ["Mridangam", "Veena", "Flute"]
      },
      themes: ["Krishna’s childhood and divine plays", "Spiritual storytelling with Bhakti focus", "Expressive Abhinaya and rhythmic footwork"],
      notableFeatures: ["Dramatic narrative dances", "Fast rhythmic movements", "Use of Tarangam (dancing on the edge of a brass plate)"],
      media: { video: "placeholder_kuchipudi.mp4", image: "https://placehold.co/600x400.png?text=Kuchipudi" },
      sanskritEtymology: "Named after the village of Kuchipudi in Andhra Pradesh where it originated.",
      overview: "Kuchipudi is known for its blend of dance (Nritta), mime (Nritya), and drama (Natya). A unique feature is the Tarangam, where the dancer performs on the rim of a brass plate.",
      heroImageUrl: "https://placehold.co/800x300.png?text=Kuchipudi+Hero",
      dataAiHintHero: "kuchipudi dance"
    },
    {
      id: "kathakali",
      name: "Kathakali",
      region: "Kerala",
      origin: "Temple ritual theatre",
      deity: "Vishnu and Shiva",
      philosophy: "Dance-drama with elaborate makeup and costumes",
      keyElements: {
        mudras: ["Karthari-mukha", "Hamsasya", "Mayura", "Tripataka"],
        costume: ["Large headgear", "Face paint (Vesham)", "Heavy jewelry", "Ghungroo"],
        musicalAccompaniment: ["Chenda", "Maddalam", "Chengila"]
      },
      themes: ["Mahabharata and Ramayana stories", "Symbolism of good vs evil", "Spiritual and moral lessons"],
      notableFeatures: ["Facial expressions and eye movements (Navarasas)", "Highly stylized gestures", "All-male troupe traditionally"],
      media: { video: "placeholder_kathakali.mp4", image: "https://placehold.co/600x400.png?text=Kathakali" },
      sanskritEtymology: "Combination of 'Katha' (story) and 'Kali' (play/performance).",
      overview: "Kathakali is a highly stylized classical Indian dance-drama noted for its elaborate makeup, costumes, and intricate gestures that narrate stories from Hindu epics.",
      heroImageUrl: "https://placehold.co/800x300.png?text=Kathakali+Hero",
      dataAiHintHero: "kathakali performance"
    },
    {
      id: "manipuri",
      name: "Manipuri",
      region: "Manipur",
      origin: "Temple and folk traditions",
      deity: "Radha-Krishna",
      philosophy: "Soft graceful movements, emphasis on devotion",
      keyElements: {
        mudras: ["Alapadma", "Suchi", "Pataka"],
        costume: ["Cylindrical skirt (Potloi)", "Veil (Dupatta)", "Simple jewelry"],
        musicalAccompaniment: ["Pung (drum)", "Flute", "Violin"]
      },
      themes: ["Raas Leela of Krishna", "Bhakti and nature worship", "Emotional expressions of love and devotion"],
      notableFeatures: ["Gentle and flowing movements", "Use of Raslila and devotional themes", "Emphasis on circular movements"],
      media: { video: "placeholder_manipuri.mp4", image: "https://placehold.co/600x400.png?text=Manipuri" },
      sanskritEtymology: "Originating from the region of Manipur.",
      overview: "Manipuri dance is characterized by its gentle, lyrical, and graceful movements, with a strong emphasis on devotion, particularly related to Radha and Krishna.",
      heroImageUrl: "https://placehold.co/800x300.png?text=Manipuri+Hero",
      dataAiHintHero: "manipuri dance"
    },
    {
      id: "sattriya",
      name: "Sattriya",
      region: "Assam",
      origin: "Vaishnavite monasteries (Satras)",
      deity: "Krishna",
      philosophy: "Devotional dance-drama tradition",
      keyElements: {
        mudras: ["Pataka", "Tripataka", "Kataka-mukha"],
        costume: ["Traditional Assamese attire (Pat silk)", "Ghungroo"],
        musicalAccompaniment: ["Khol (drum)", "Flute", "Cymbals (Taal)"]
      },
      themes: ["Bhakti through Krishna’s life stories", "Monastic performance arts", "Spiritual narration and ritual"],
      notableFeatures: ["Narrative style with expressive gestures", "Choreographed group dances", "Performed in Satras (monasteries)"],
      media: { video: "placeholder_sattriya.mp4", image: "https://placehold.co/600x400.png?text=Sattriya" },
      sanskritEtymology: "Derived from 'Satra', the Vaishnavite monasteries where it was nurtured.",
      overview: "Sattriya is a living tradition from Assam, originally performed in monasteries as part of religious rituals and storytelling. It combines dance, drama, and music.",
      heroImageUrl: "https://placehold.co/800x300.png?text=Sattriya+Hero",
      dataAiHintHero: "sattriya dance"
    }
];


const newDanceData: DanceDetails = {
  pageObjective: "A spiritually rich, multimedia-led exploration of classical Indian dance as a sacred art form, presenting each tradition in modern, scrollable card layouts with embedded visuals, storytelling, and interactivity.",
  introductionVideoPlaceholder: "placeholder-dance-meditation.mp4",
  bharataMuniBio: "Bharata Muni is traditionally considered the author of the Natyashastra, an ancient Indian treatise on the performing arts, encompassing theatre, dance, and music. He is revered as a sage who received this divine knowledge from Brahma.",
  natyashastraConcepts: [
    { name: "Bhava", sanskritName: "भाव", explanation: "The emotional state or sentiment conveyed by the performer and evoked in the audience. Bhavas are the foundation for Rasa.", example: "Sthayi Bhava (permanent mood) like Rati (love) leading to Shringara Rasa." },
    { name: "Rasa", sanskritName: "रस", explanation: "The aesthetic flavor, essence, or emotional taste experienced by the audience. It's the ultimate goal of artistic performance, transforming raw emotion into a refined aesthetic experience.", example: "The nine primary Rasas: Shringara (Love), Hasya (Laughter), Karuna (Compassion), etc." },
    { name: "Abhinaya", sanskritName: "अभिनय", explanation: "The art of expression in dance and drama. It has four aspects: Angika (body movements), Vachika (speech/song), Aharya (costume/makeup), and Sattvika (expression of internal psychic states).", example: "Using specific hand gestures (mudras) and facial expressions to convey a story or emotion." }
  ],
  natyashastraVerse: {
    sanskrit: "यतो हस्तस्ततो दृष्टिः यतो दृष्टिस्ततो मनः ।\nयतो मनस्ततो भावो यतो भावस्ततो रसः ॥",
    english: "Where the hand goes, the eyes follow; where the eyes go, the mind follows.\nWhere the mind is, there the emotion (Bhava) arises; where the emotion is, there aesthetic experience (Rasa) is realized.",
    hindi: "जहाँ हाथ जाता है, वहाँ दृष्टि जाती है; जहाँ दृष्टि जाती है, वहाँ मन जाता है ।\nजहाँ मन होता है, वहाँ भाव उत्पन्न होता है; जहाँ भाव होता है, वहाँ रस की अनुभूति होती है ॥"
  },
  danceForms: processedClassicalDances, // Use the processed data
  mudras: [
    { name: "Anjali Mudra", sanskritName: "अञ्जलि मुद्रा", meaning: "Salutation, offering, reverence. Palms pressed together at heart center.", icon: Hand, imageUrl: "https://placehold.co/100x100.png?text=Anjali&font=montserrat", dataAiHintImage: "prayer hands" },
    { name: "Pataka Mudra", sanskritName: "पताका मुद्रा", meaning: "Flag, representing various objects like river, wind, blessing.", icon: Hand, imageUrl: "https://placehold.co/100x100.png?text=Pataka&font=montserrat", dataAiHintImage: "flat hand" },
    { name: "Tripataka Mudra", sanskritName: "त्रिपताका मुद्रा", meaning: "Three parts of a flag, used to depict crown, arrow, tree.", icon: Hand, imageUrl: "https://placehold.co/100x100.png?text=Tripataka&font=montserrat", dataAiHintImage: "three fingers" }
  ],
  costumeIllustrationPlaceholder: "Future: Interactive diagrams showing layers of costumes for Bharatanatyam, Kathak, Odissi, etc.",
  festivalExamples: [
    { id: "koodal-azhagar", title: "Dance at Koodal Azhagar Temple, Madurai", description: "Traditional performances of Bharatanatyam during temple festivals, narrating stories of Lord Vishnu.", danceFormsFeatured: ["Bharatanatyam"], imageUrl: "https://placehold.co/300x200.png?text=Temple+Dance&font=montserrat", dataAiHintImage: "temple festival", audioPlaceholder: "placeholder-temple-chants.mp3" },
    { id: "krishna-leela-kathak", title: "Krishna Leela in Kathak", description: "Kathak performances depicting episodes from Lord Krishna's life, especially during Janmashtami or Holi.", danceFormsFeatured: ["Kathak"], imageUrl: "https://placehold.co/300x200.png?text=Krishna+Dance&font=montserrat", dataAiHintImage: "krishna kathak", audioPlaceholder: "placeholder-krishna-bhajans.mp3" }
  ],
  interactiveElementPlaceholders: {
    mudraWheel: "Placeholder: Interactive Mudra Wheel - Click a mudra to see its image, meaning, and usage in dance.",
    shortPerformances: "Placeholder: Gallery of embedded short dance performance clips (1-2 minutes each).",
    templeDanceTimeline: "Placeholder: Interactive timeline showing the evolution of temple dance traditions.",
    rasaFilter: "Placeholder: Filter dance forms/clips by dominant Rasa (e.g., Shringara, Veera, Karuna)."
  },
  dancerSaintQuotes: [
    { quote: "Dance is the hidden language of the soul.", author: "Rukmini Devi Arundale (attributed)", era: "20th Century" },
    { quote: "Where the hand is, the eye follows... Where the mind is, there is feeling... Where there is feeling, there is mood/flavor (rasa).", author: "Nandikeshvara (Abhinaya Darpana)", era: "Ancient Text" }
  ],
  divineDancers: [
    { name: "Shiva (Nataraja)", description: "The Cosmic Dancer, whose Tandava dance represents creation, preservation, destruction, illusion, and grace.", icon: Flame, imageUrl: "https://placehold.co/300x200.png?text=Nataraja&font=montserrat", dataAiHintImage: "shiva nataraja" },
    { name: "Krishna", description: "Known for his playful Rasa Leela dance with the Gopis, symbolizing the soul's yearning for the divine.", icon: PersonStanding, imageUrl: "https://placehold.co/300x200.png?text=Krishna+Dancing&font=montserrat", dataAiHintImage: "krishna flute" },
    { name: "Devi (Parvati/Kali)", description: "Represents Lasya (gentle, graceful dance) as Parvati and powerful, fierce dance as Kali or Durga.", icon: Sparkles, imageUrl: "https://placehold.co/300x200.png?text=Devi+Dancing&font=montserrat", dataAiHintImage: "goddess dancing" }
  ],
  additionalFeatures: {
    pdfExportPlaceholder: "Placeholder: Button to export dance form details as PDF.",
    userSubmissionPlaceholder: "Placeholder: Form for users to submit regional dance clips/info.",
  }
};

const newTheatreData: TheatreDetails = {
  hero: {
    title: "Theatre & Natyashastra",
    subtitle: "Sacred Stagecraft Rooted in Divine Knowledge",
    backgroundImageUrl: "https://placehold.co/1200x500.png?text=Indian+Traditional+Stage&font=montserrat",
    dataAiHintBackground: "traditional theatre stage",
    ctaButtonText: "Explore Performances",
    ctaScrollTargetId: "traditional-theatre-forms-section",
  },
  about: {
    vedicOriginText: "Indian theatre, or Natya, is not mere entertainment but a sacred art form, considered the fifth Veda (Natyaveda), created by Brahma himself by taking elements from the existing four Vedas. It aims to instruct, delight, and lead the audience towards Dharma, Artha, Kama, and ultimately Moksha.",
    bharataMuniQuote: {
      sanskrit: "न तज्ज्ञानं न तच्छिल्पं न सा विद्या न सा कला।\nनासौ योगो न तत्कर्म नाट्यऽस्मिन् यन्न दृश्यते॥",
      english: "There is no knowledge, no craft, no learning, no art, no yoga, no action that is not found in Natya.",
      hindi: "ऐसा कोई ज्ञान नहीं, कोई शिल्प नहीं, कोई विद्या नहीं, कोई कला नहीं, कोई योग नहीं, कोई कर्म नहीं, जो इस नाट्य में न दिखाई दे।",
    },
    bharataMuniMention: "This divine knowledge of theatre was codified by the sage Bharata Muni in his monumental treatise, the Natyashastra.",
  },
  coreTeachingsNatyashastra: [
    { id: "rasa-theory", title: "Rasa Theory (Aesthetic Experience)", icon: SmilePlus, description: "The essence of Indian aesthetics, Rasa is the emotional flavor or sentiment evoked in the audience by the performance.", detailsPlaceholder: "Detailed explanation of the nine primary Rasas (Shringara, Hasya, Karuna, Raudra, Veera, Bhayanaka, Bibhatsa, Adbhuta, Shanta) and how they are created through Bhavas (emotions).", subItems: [ {title: "Shringara", text:"Love, Erotic"}, {title: "Hasya", text:"Laughter, Comic"}, {title: "Karuna", text:"Compassion, Pathetic"}, {title: "Raudra", text:"Anger, Furious"}, {title: "Veera", text:"Heroism, Heroic"}, {title: "Bhayanaka", text:"Fear, Terrible"}, {title: "Bibhatsa", text:"Disgust, Odious"}, {title: "Adbhuta", text:"Wonder, Marvelous"}, {title: "Shanta", text:"Peace, Tranquil"}] },
    { id: "abhinaya", title: "Abhinaya (Art of Expression)", icon: Presentation, description: "The techniques used by performers to convey meaning and evoke Rasa.", detailsPlaceholder: "Exploring the four types of Abhinaya: Angika (physical), Vachika (vocal), Aharya (costume/makeup), and Sattvika (emotional states).", subItems: [{title: "Angika", text:"Physical gestures, body movements, postures."}, {title: "Vachika", text:"Vocal expression, speech, song, intonation."}, {title: "Aharya", text:"Costumes, makeup, jewelry, stage props."}, {title: "Sattvika", text:"Subtle psychological expressions like tears, trembling, joy."}] },
    { id: "character-archetypes", title: "Character Archetypes", icon: Users2, description: "Natyashastra defines various character types that form the core of dramatic narratives.", detailsPlaceholder: "Descriptions of Nayaka (hero - Dhirodatta, Dhiralalita etc.), Nayika (heroine - Swakiya, Parakiya etc.), Vidushaka (jester), Sutradhara (stage manager/narrator) and their roles." },
    { id: "stage-design", title: "Stage Design & Props (Natyamandapa)", icon: Theater, description: "Principles of stage construction and the symbolic use of props.", detailsPlaceholder: "Details on types of stages (Vikrishta - rectangular, Chaturasra - square, Tryasra - triangular), measurements, specific areas like Rangapitha and Rangashirsha, and conventions for props." },
    { id: "sanskrit-vs-regional", title: "Sanskrit vs Regional Traditions", icon: BookOpenText, description: "The Natyashastra's influence on pan-Indian theatre and its local adaptations.", detailsPlaceholder: "Discussion on how classical Sanskrit drama principles influenced diverse regional folk and classical theatre forms across India, leading to a rich tapestry of theatrical expression." },
  ],
  lokadharmiVsNatyadharmi: {
    lokadharmi: { title: "Lokadharmi (Realistic)", description: "Represents actions and behaviors as they occur in the everyday world, emphasizing naturalism and relatable human experience.", illustrationPlaceholder: "https://placehold.co/300x200.png?text=Lokadharmi+Scene&font=montserrat", dataAiHint: "realistic theatre scene", tooltipExample: "E.g., a character naturally weeping in sorrow." },
    natyadharmi: { title: "Natyadharmi (Stylized/Symbolic)", description: "Employs conventional, codified gestures, movements, and expressions that are symbolic and often divine or superhuman in nature, transcending everyday reality.", illustrationPlaceholder: "https://placehold.co/300x200.png?text=Natyadharmi+Gesture&font=montserrat", dataAiHint: "stylized theatre gesture", tooltipExample: "E.g., a specific mudra to represent a lotus or a god." },
  },
  traditionalTheatreForms: [
    { id: "yakshagana", name: "Yakshagana", region: "Karnataka", shortOrigin: "A traditional theatre form combining dance, music, dialogue, costume, and stage techniques.", associatedDeityOrTheme: "Stories from Puranas, Ramayana, Mahabharata", intro: "Known for its vibrant costumes, powerful music, and energetic performances.", performanceMediaPlaceholder: "https://placehold.co/300x180.png?text=Yakshagana&font=montserrat", dataAiHintMedia: "yakshagana performance", icon: Drama },
    { id: "kutiyattam", name: "Kutiyattam", region: "Kerala", shortOrigin: "One of the oldest living theatre traditions in the world, recognized by UNESCO.", associatedDeityOrTheme: "Sanskrit plays, temple rituals", intro: "Characterized by detailed Abhinaya and elaborate rituals, performed in temple theatres (Koothambalams).", performanceMediaPlaceholder: "https://placehold.co/300x180.png?text=Kutiyattam&font=montserrat", dataAiHintMedia: "kutiyattam stage", icon: Drama },
    { id: "terukoothu", name: "Terukoothu", region: "Tamil Nadu", shortOrigin: "A popular folk theatre form performed in village squares, often during temple festivals.", associatedDeityOrTheme: "Mahabharata stories, local deities", intro: "Features expressive acting, songs, music, and colorful makeup.", performanceMediaPlaceholder: "https://placehold.co/300x180.png?text=Terukoothu&font=montserrat", dataAiHintMedia: "folk theatre tamil nadu", icon: Drama },
    { id: "bhavai", name: "Bhavai", region: "Gujarat", shortOrigin: "A folk theatre form known for its social satire, humor, and devotional themes.", associatedDeityOrTheme: "Goddess Amba, social issues", intro: "Performed by male actors, it includes dance, music, and dialogues, often with a satirical edge.", performanceMediaPlaceholder: "https://placehold.co/300x180.png?text=Bhavai&font=montserrat", dataAiHintMedia: "gujarati folk theatre", icon: Drama },
    { id: "nautanki", name: "Nautanki", region: "North India (UP, Bihar, Rajasthan)", shortOrigin: "A popular folk operatic theatre form.", associatedDeityOrTheme: "Romantic tales, historical legends, social themes", intro: "Combines music, dance, and storytelling, often with melodramatic elements.", performanceMediaPlaceholder: "https://placehold.co/300x180.png?text=Nautanki&font=montserrat", dataAiHintMedia: "north indian folk opera", icon: Drama },
    { id: "dashavatar", name: "Dashavatar", region: "Goa, Maharashtra (Konkan)", shortOrigin: "A traditional folk theatre form depicting the ten incarnations of Lord Vishnu.", associatedDeityOrTheme: "Lord Vishnu's avatars", intro: "Features vibrant masks, music, and storytelling focused on mythological narratives.", performanceMediaPlaceholder: "https://placehold.co/300x180.png?text=Dashavatar&font=montserrat", dataAiHintMedia: "vishnu avatar theatre", icon: Drama },
  ],
  spiritualSymbolism: {
    intro: "Indian theatre is rich in symbolism, where every element, from costumes to gestures, carries deep spiritual and cultural meaning.",
    items: [
      { id: "masks-costumes", title: "Masks & Costumes", description: "Elaborate masks and costumes are not merely decorative but transform the actor into a divine or mythical character, representing virtues, vices, or specific energies. Colors used in makeup and attire also have symbolic significance (e.g., green for heroic, red for anger).", icon: Shapes, imageGalleryPlaceholder: "Placeholder for gallery of theatre masks and costumes." },
      { id: "gestures-mudras", title: "Gestures (Mudras) in Theatre", description: "While dance mudras are more codified, theatrical gestures (Angika Abhinaya) also convey emotions, actions, and objects, often drawing from everyday life but amplified for stage.", icon: Hand, imageGalleryPlaceholder: "Placeholder for common theatrical gestures." },
      { id: "colors-symbolism", title: "Color Symbolism", description: "Specific colors in makeup, costumes, and stage design often denote character traits, emotional states, or divine attributes (e.g., blue for Krishna/Vishnu, red for power/anger, white for purity).", icon: Palette, imageGalleryPlaceholder: "Placeholder for color symbolism chart." },
      { id: "mythological-portrayals", title: "Mythological Stories Portrayed", description: "The epics Ramayana and Mahabharata, Puranic legends, and lives of saints are common themes, serving to educate, inspire, and reinforce Dharma and spiritual values.", icon: BookMarked, imageGalleryPlaceholder: "Placeholder for iconic scenes from mythological plays." },
    ],
  },
  interactiveShowcase: {
    intro: "Engage with the world of Indian theatre through these interactive explorations (Future Implementations):",
    items: [
      { id: "performance-clips", title: "Watch Performance Clips", descriptionPlaceholder: "A curated gallery of short video clips from various traditional theatre forms.", icon: VideoIcon },
      { id: "masks-costumes-preview", title: "3D Masks & Costumes Preview", descriptionPlaceholder: "Interactive 3D models of theatrical masks and costumes, allowing users to rotate and zoom.", icon: Aperture },
      { id: "rasa-generator", title: "Rasa Generator", descriptionPlaceholder: "Select a Rasa (e.g., Veera) and see a relevant dramatic excerpt, character description, or performance snippet that embodies it.", icon: SmilePlus },
    ],
  },
  learnMore: {
    intro: "Deepen your understanding of Indian theatre and the Natyashastra with these resources:",
    resources: [
      { id: "pdf-summary", type: "pdf", title: "Download Visual Guide to Indian Dramaturgy", linkPlaceholder: "Download link for PDF summary (placeholder)", icon: Download },
      { id: "natyashastra-excerpts", type: "excerpt", title: "Read Natyashastra Excerpts", linkPlaceholder: "Link to translated Natyashastra excerpts (placeholder)", icon: BookOpenText },
      { id: "related-videos", type: "video", title: "Watch Related Documentaries/Lectures", linkPlaceholder: "Link to relevant videos (placeholder)", icon: Film },
      { id: "academic-sources", type: "article", title: "Explore Academic Sources", linkPlaceholder: "Link to scholarly articles/books (placeholder)", icon: Library },
    ],
  },
  contentEnhancementsPlaceholders: {
    natyashastraVerses: "Placeholder: Section with more key Sanskrit verses from Natyashastra with detailed commentary.",
    comparisonWesternDramaturgy: "Placeholder: Detailed comparison between Bharata's Natyashastra and Aristotle's Poetics.",
    womenInTheatre: "Placeholder: Section discussing the historical and contemporary roles and contributions of women in Indian classical and folk theatre.",
  },
};

const newRitualsFestivalsData: RitualsFestivalsDetails = {
  introduction: {
    text: "Rituals and festivals are not just traditions—they are cosmic alignments in action. Every fire ritual, every sacred fast, every celebration is a mirror of celestial rhythms and inner transformation in Sanatan Dharma.",
    animationPlaceholder: "Future: Soft glowing temple lamp (diya) or rising sun animation.",
  },
  sacredRituals: [
    { id: "agnihotra", name: "Agnihotra", explanation: "A Vedic fire ritual performed at sunrise and sunset to purify the environment, atmosphere, and mind, promoting health and well-being.", icon: Flame, imageUrl: "https://placehold.co/300x200.png?text=Agnihotra+Fire", dataAiHint: "fire ritual" },
    { id: "sandhya-vandanam", name: "Sandhya Vandanam", explanation: "A daily meditative practice performed during twilight hours (sunrise, noon, sunset) involving Gayatri mantra chanting and offerings to the Sun, fostering spiritual discipline and connection.", icon: Sun, imageUrl: "https://placehold.co/300x200.png?text=Sunrise+Meditation", dataAiHint: "sunrise prayer" },
    { id: "abhisheka", name: "Abhisheka", explanation: "Ritual bathing of a deity's idol with sacred substances like milk, honey, yogurt, and water, symbolizing purification, reverence, and the infusion of divine energies.", icon: Droplets, imageUrl: "https://placehold.co/300x200.png?text=Deity+Bathing", dataAiHint: "ritual bathing" },
    { id: "seasonal-samskaras", name: "Seasonal Samskaras & Observances", explanation: "Rituals and observances tied to solstices, equinoxes, eclipses, and harvests, aligning human life with cosmic and natural cycles. Examples include specific pujas or community gatherings.", icon: CalendarDays, imageUrl: "https://placehold.co/300x200.png?text=Seasonal+Festival", dataAiHint: "harvest festival" },
  ],
  festivalsCosmicMeaning: [
    { id: "diwali", name: "Diwali (Deepavali)", datePattern: "Amavasya of Kartik month (Oct/Nov)", spiritualSymbolism: "Victory of light over darkness, good over evil, knowledge over ignorance. Inner illumination.", associatedDeityOrStory: "Return of Lord Rama to Ayodhya; Worship of Goddess Lakshmi.", exploreLinkPlaceholder: "/festivals/diwali", icon: Sparkles, imageUrl: "https://placehold.co/300x200.png?text=Diwali+Lamps", dataAiHint: "diwali lights" },
    { id: "navratri", name: "Navratri", datePattern: "Nine nights, typically twice a year (Chaitra & Sharad)", spiritualSymbolism: "Celebration of the Divine Feminine (Shakti) in her various forms (Durga, Lakshmi, Saraswati). Renewal and spiritual power.", associatedDeityOrStory: "Victory of Goddess Durga over Mahishasura; Various forms of Devi.", exploreLinkPlaceholder: "/festivals/navratri", icon: PartyPopper, imageUrl: "https://placehold.co/300x200.png?text=Navratri+Celebration", dataAiHint: "goddess durga" },
    { id: "holi", name: "Holi", datePattern: "Purnima of Phalgun month (Feb/Mar)", spiritualSymbolism: "Victory of good over evil (Holika Dahan), arrival of spring, festival of colors and love.", associatedDeityOrStory: "Prahlada's devotion; Radha-Krishna's playful love.", exploreLinkPlaceholder: "/festivals/holi", icon: Palette, imageUrl: "https://placehold.co/300x200.png?text=Holi+Colors+Splash", dataAiHint: "holi festival" },
    { id: "kumbh-mela", name: "Kumbh Mela", datePattern: "Cyclical, held at four sacred sites over 12 years.", spiritualSymbolism: "Mass pilgrimage for ritual bathing in sacred rivers, believed to cleanse sins and grant liberation.", associatedDeityOrStory: "Mythological story of the churning of the cosmic ocean (Samudra Manthan).", exploreLinkPlaceholder: "/festivals/kumbh-mela", icon: Users, imageUrl: "https://placehold.co/300x200.png?text=Kumbh+Mela+Gathering", dataAiHint: "pilgrimage crowd" },
    { id: "pongal-makar-sankranti", name: "Pongal / Makar Sankranti", datePattern: "Mid-January, marking sun's transition into Makara (Capricorn)", spiritualSymbolism: "Harvest festival, gratitude to nature, sun worship, marking longer days.", associatedDeityOrStory: "Sun God (Surya), harvest deities.", exploreLinkPlaceholder: "/festivals/pongal", icon: Sun, imageUrl: "https://placehold.co/300x200.png?text=Pongal+Celebration", dataAiHint: "harvest festival india" },
    { id: "ratha-yatra", name: "Ratha Yatra", datePattern: "Ashadha Shukla Dwitiya (June/July)", spiritualSymbolism: "Lord Jagannath's journey with siblings, symbolizing divine accessibility and communal devotion.", associatedDeityOrStory: "Lord Jagannath, Balabhadra, Subhadra.", exploreLinkPlaceholder: "/festivals/ratha-yatra", icon: Route, imageUrl: "https://placehold.co/300x200.png?text=Ratha+Yatra+Chariot", dataAiHint: "chariot festival" },
    { id: "guru-purnima", name: "Guru Purnima", datePattern: "Purnima of Ashadha month (July/Aug)", spiritualSymbolism: "Reverence for spiritual teachers (Gurus), expressing gratitude for wisdom and guidance.", associatedDeityOrStory: "Sage Vyasa (compiler of Vedas and Puranas).", exploreLinkPlaceholder: "/festivals/guru-purnima", icon: Award, imageUrl: "https://placehold.co/300x200.png?text=Guru+Purnima+Respect", dataAiHint: "teacher respect" },
    { id: "maha-shivaratri", name: "Maha Shivaratri", datePattern: "Krishna Paksha Chaturdashi of Phalgun month (Feb/Mar)", spiritualSymbolism: "Night of Shiva, overcoming darkness and ignorance, meditation, and austerity.", associatedDeityOrStory: "Lord Shiva's cosmic dance (Tandava) and marriage to Parvati.", exploreLinkPlaceholder: "/festivals/maha-shivaratri", icon: Flame, imageUrl: "https://placehold.co/300x200.png?text=Maha+Shivaratri+Meditation", dataAiHint: "shiva worship" },
    { id: "chhath-puja", name: "Chhath Puja", datePattern: "Kartika Shukla Shashthi (Oct/Nov)", spiritualSymbolism: "Worship of Sun God (Surya) and Chhathi Maiya for well-being, prosperity, and longevity. Gratitude for life-sustaining solar energy.", associatedDeityOrStory: "Surya (Sun God), Chhathi Maiya (Usha/Shashthi).", exploreLinkPlaceholder: "/festivals/chhath-puja", icon: Sun, imageUrl: "https://placehold.co/300x200.png?text=Chhath+Puja+River", dataAiHint: "sun worship river" },
  ],
  timelineViewPlaceholder: {
    title: "Interactive Ritual & Festival Calendar",
    description: "Future Feature: Explore the Hindu calendar with lunar (Tithi, Paksha, Masa) and solar cycles, including monthly Vratas (Ekadashi, Purnima). Click events to learn more or watch related videos.",
    types: ["Lunar Cycles", "Solar Cycles", "Monthly Vratas (Ekadashi, Purnima)"],
  },
  audioVisualElements: {
    chantAudioClips: {
      title: "Sacred Chant Audio Clips",
      description: "Listen to common mantras used in pujas and daily worship.",
      examples: [
        { name: "Gayatri Mantra", audioPlaceholder: "/audio/gayatri_mantra.mp3" },
        { name: "Mahamrityunjaya Mantra", audioPlaceholder: "/audio/mahamrityunjaya_mantra.mp3" },
      ],
    },
    festivalVideos: {
      title: "Festival Videos",
      description: "Experience the vibrancy of Indian festivals.",
      placeholder: "Placeholder: Gallery of short video clips showcasing temple processions, home pujas, and community celebrations for various festivals.",
    },
  },
  regionalDiversity: {
    title: "How Rituals & Festivals Differ Across Bharat",
    description: "India's cultural tapestry is woven with diverse regional expressions of common festivals and unique local traditions.",
    mapPlaceholder: "Future Feature: Interactive map of Bharat. Click on a state or region to explore folk variations of festivals like Holi, Navratri, and learn about local deities' festivals.",
  },
  communitySharing: {
    title: "Share Your Traditions",
    invitationText: "Contribute to our growing archive by sharing your family's or community's unique customs and celebrations.",
    uploadPlaceholder: "Future Feature: Form to upload images or stories of home celebrations.",
    sharePlaceholder: "Future Feature: Form to share folk customs or temple traditions from your region.",
  },
  footerOptions: [
    { id: "download-guide", text: "Download Festival Guide", icon: Download, actionType: "download", actionValue: "placeholder_festival_guide.pdf" },
    { id: "listen-mantras", text: "Listen to Mantras", icon: Headset, actionType: "link", actionValue: "#chant-audio-clips-section" }, // Link to an internal section
    { id: "submit-info", text: "Submit Local Festival Info", icon: Share2, actionType: "submit", actionValue: "#community-sharing-section" }, // Link to an internal section
  ],
};


export const culturalArtsData: CulturalArtsPageData = {
  hero: {
    title: "Cultural Arts & Intangible Heritage Hub",
    theme: "Bharatiya Kala, Natya, Sangeet & Rituals Archive",
    intro: "This hub page serves as your gateway to dedicated explorations of Indian music, dance, theatre, visual arts, rituals, and more. Click on any art form below to embark on its own immersive journey into Bharatiya Kala, drawing from ancient treatises and showcasing vibrant regional traditions.",
  },
  sections: [
    {
      id: "classical-music",
      title: newClassicalMusicData.title, // This will be long, e.g., "Classical Music – Nada Yoga and the Sound of the Divine"
      themeLine: "Nada Yoga and the Sound of the Divine",
      icon: Music2,
      heroImageUrl: "https://placehold.co/800x300.png?text=Classical+Music+Hero&font=montserrat",
      heroDataAiHint: "indian classical music concert",
      content: newClassicalMusicData.description,
      classicalMusicDetails: newClassicalMusicData,
      interactivePlaceholder: newClassicalMusicData.mediaPlaceholders.interactivePlayer,
    },
    {
      id: "dance",
      title: "Dance – Embodied Spirituality", // Shorter title for the card
      themeLine: "Sacred Storytelling, Rhythm & Grace",
      icon: PersonStanding,
      heroImageUrl: "https://placehold.co/800x300.png?text=Classical+Dance+Hero&font=montserrat",
      heroDataAiHint: "classical indian dance",
      content: "This section focuses on classical Indian dance forms as moving meditations, spiritual disciplines, and profound storytelling arts. Explore their origins, symbolism, and connection to divine narratives.",
      danceDetails: newDanceData,
    },
    {
      id: "theatre",
      title: "Theatre & Natyashastra", // Keep this as is for the card, it's specific
      themeLine: "Sacred Stagecraft and Dramatic Arts",
      icon: Theater,
      heroImageUrl: newTheatreData.hero.backgroundImageUrl,
      heroDataAiHint: newTheatreData.hero.dataAiHintBackground,
      content: "Dive into the roots of drama and theatre in the Indian tradition, where theatre is seen as a divine offering, born from the Vedas themselves.",
      theatreDetails: newTheatreData,
    },
    {
      id: "visual-arts",
      title: "Visual Arts", // Simple title for card
      themeLine: "Sacred Geometry, Sculpture & Symbolism",
      icon: PaletteIconShad,
      heroImageUrl: "https://placehold.co/800x300.png?text=Visual+Arts+Hero&font=montserrat",
      heroDataAiHint: "indian sacred art",
      content: "This section features the aesthetic and metaphysical brilliance of temple architecture, sculpture, and sacred designs, exploring their spiritual significance and artistic mastery.",
      visualArtsDetails: newVisualArtsData,
    },
    {
      id: "rituals-festivals",
      title: "Rituals & Festivals", // Simple title for card
      themeLine: "Expressions of Cosmic Rhythm & Community",
      icon: Flame,
      heroImageUrl: "https://placehold.co/800x300.png?text=Rituals+Festivals+Hero&font=montserrat",
      heroDataAiHint: "indian festival celebration",
      content: "Explore the philosophy, rhythm, and symbolism behind rituals, fasts, and festivals that mark the Hindu calendar.",
      ritualsFestivalsDetails: newRitualsFestivalsData,
    },
    {
      id: "rasa-theory",
      title: "Rasa Theory",
      themeLine: "The Psychology of Aesthetic Experience",
      icon: SmilePlus,
      heroImageUrl: "https://placehold.co/800x300.png?text=Rasa+Theory+Hero&font=montserrat",
      heroDataAiHint: "emotional spectrum",
      content: "One of the central philosophical explorations, this section explains the Rasa Theory—a unique Indian contribution to aesthetics and human consciousness.",
      subSections: [
        { title: "The Nine Rasas", text: "Detailed explanation of Shringara (love/beauty), Hasya (laughter), Karuna (compassion/sadness), Raudra (anger), Veera (heroism), Bhayanaka (fear/terror), Bibhatsa (disgust), Adbhuta (wonder/surprise), and Shanta (peace/tranquility).", icon: MessageSquare, imageUrl: "https://placehold.co/300x200.png?text=Navarasas&font=montserrat", dataAiHint: "emotion faces", intro: "Exploring the nine fundamental aesthetic emotions." },
        { title: "Art & Inner Transformation", text: "How art evokes aesthetic delight (Rasa) leading to inner transformation, emotional catharsis, and spiritual upliftment (chitta shuddhi).", icon: Sparkles, imageUrl: "https://placehold.co/300x200.png?text=Art+Transformation&font=montserrat", dataAiHint: "spiritual art", intro: "The transformative power of aesthetic experience." },
        { title: "Examples in Arts", text: "Illustrations of Rasas from various art forms like dance (Abhinaya), music (Raga expressions), poetry, and sculpture.", icon: Palette, imageUrl: "https://placehold.co/300x200.png?text=Rasa+Examples&font=montserrat", dataAiHint: "art forms", intro: "Seeing Rasa theory applied in various art forms." },
      ],
      interactivePlaceholder: "Interactive 'Emotion Wheel' based on Rasa theory, where clicking a Rasa reveals examples in art.",
    },
    {
      id: "living-traditions",
      title: "Living Traditions & Regional Diversity",
      themeLine: "Vibrant Expressions Across Bharat",
      icon: Users,
      heroImageUrl: "https://placehold.co/800x300.png?text=Living+Traditions+Hero&font=montserrat",
      heroDataAiHint: "indian folk performance",
      content: "Showcase the ongoing, vibrant expressions of Indian intangible culture in villages, towns, and temples across Bharat.",
      subSections: [
        { title: "Folk Art Forms", text: "Highlighting diverse folk traditions like Kalbelia dance of Rajasthan, Lavani of Maharashtra, Baul music of Bengal, Pattachitra scroll painting of Odisha, Theyyam ritual dance of Kerala, and Gondi tribal painting.", icon: Grid, imageUrl: "https://placehold.co/300x200.png?text=Folk+Art+Medley&font=montserrat", dataAiHint: "folk dance painting", intro: "Celebrating the diverse tapestry of India's folk arts." },
        { title: "Guardians of Tradition", text: "Profiles of artisans, hereditary performers, and gurus keeping these traditions alive, often through oral transmission and apprenticeship.", icon: UserCircle2, imageUrl: "https://placehold.co/300x200.png?text=Tradition+Guardian&font=montserrat", dataAiHint: "artisan working", intro: "Honoring the individuals who preserve cultural heritage." },
      ],
      interactivePlaceholder: "Photo essays, mini-documentaries; 'State by State' interactive map linking to regional traditions.",
    },
    {
      id: "art-as-moksha",
      title: "Art as a Path to Moksha",
      themeLine: "Creativity as Spiritual Sadhana",
      icon: Route,
      heroImageUrl: "https://placehold.co/800x300.png?text=Art+Moksha+Hero&font=montserrat",
      heroDataAiHint: "spiritual artistic creation",
      content: "Reflect on the philosophical foundation of art in Hindu Dharma—not just as expression, but as a means of attaining liberation.",
      subSections: [
        { title: "Art as Seva & Sadhana", text: "The concept of art as selfless service (Seva) to the divine or community, and as a dedicated spiritual practice (Sadhana) for self-purification and realization.", icon: Sparkles, imageUrl: "https://placehold.co/300x200.png?text=Art+as+Seva&font=montserrat", dataAiHint: "devotional painting", intro: "Art as selfless service and dedicated spiritual practice." },
        { title: "Devotion, Discipline, Creativity", text: "How Bhakti (devotion), Tapas (discipline through rigorous practice), and creative expression converge in artistic pursuits to elevate consciousness.", icon: Flame, imageUrl: "https://placehold.co/300x200.png?text=Art+Discipline&font=montserrat", dataAiHint: "focused artist", intro: "The convergence of devotion, discipline, and creativity." },
        { title: "Wisdom of Sage-Artists", text: "Lessons from legendary figures like Vishwakarma (divine architect), Nandikeshvara (Natyashastra commentator), Abhinavagupta (philosopher of aesthetics).", icon: BookOpen, imageUrl: "https://placehold.co/300x200.png?text=Sage-Artist&font=montserrat", dataAiHint: "ancient scroll", intro: "Insights from masters who integrated art and wisdom." },
        { title: "Divine Artists", text: "Stories of deities as patrons and embodiments of art: Shiva as Nataraja (Lord of Dance), Saraswati (Goddess of Arts and Wisdom), Narada (divine musician), Hanuman (embodiment of devotion in music).", icon: Users, imageUrl: "https://placehold.co/300x200.png?text=Divine+Artist&font=montserrat", dataAiHint: "nataraja statue", intro: "Deities as inspirers and embodiments of art forms." },
      ],
      interactivePlaceholder: "Reflective prompts and guided meditations on art as a spiritual practice."
    },
    {
      id: "learn-contribute",
      title: "Learn & Contribute",
      themeLine: "Engage, Explore, and Share Knowledge",
      icon: GraduationCap,
      heroImageUrl: "https://placehold.co/800x300.png?text=Learn+Contribute+Hero&font=montserrat",
      heroDataAiHint: "community knowledge sharing",
      content: "A concluding space to engage the user community, inviting exploration and participation in preserving and promoting these invaluable cultural arts.",
      subSections: [
        { title: "Free Resources", text: "Access downloadable PDFs on Natyashastra summaries, Rasa Theory charts, and guides to temple symbolism.", icon: Download, imageUrl: "https://placehold.co/300x200.png?text=PDF+Resources&font=montserrat", dataAiHint: "document icon", intro: "Downloadable materials to deepen your understanding." },
        { title: "External Links", text: "Curated links to reputable online archives of classical music, dance tutorials, virtual museum tours of Indian art, and Sanskrit chanting resources.", icon: LinkIcon, imageUrl: "https://placehold.co/300x200.png?text=External+Links&font=montserrat", dataAiHint: "web links", intro: "Explore further with these curated external resources." },
        { title: "Community Contribution", text: "An invitation for users to submit their own research, photographs of local traditions, recordings of folk art, or articles to enrich the archive. (Moderated submissions)", icon: Share2, imageUrl: "https://placehold.co/300x200.png?text=Community+Share&font=montserrat", dataAiHint: "people collaborating", intro: "Share your knowledge and help grow this archive." },
      ],
      interactivePlaceholder: "Submission form for community contributions and a forum/discussion board placeholder."
    },
  ]
};

// Helper function to get a specific section by its ID
export function getCulturalArtSectionById(id: string): CulturalArtSection | undefined {
  return culturalArtsData.sections.find(section => section.id === id);
}
