
export type Pramana = {
  name: string;
  meaning: string;
  description: string;
};

export type CommentaryWork = {
  author: string;
  work: string;
  description:string;
};

export type PadarthaCategory = {
  name: string;
  meaning: string;
  description: string;
};

export type KeyConceptDetail = {
  name: string;
  meaning?: string;
  description: string;
};

export type TattvaConcept = {
  description: string;
  list: string[];
};

export type ComparisonDetail = {
  [schoolName: string]: string;
};

export type Thinker = {
  name: string;
  description: string;
};

export type SubSchool = {
  name: string;
  founder?: string;
  emphasis: string;
};

export type VedantaSubSchool = {
  name: string;
  founder?: string;
  coreView: string;
  keyConcepts: string[];
  viewOnGod: string;
  types?: Array<{ name: string; founder?: string; view: string; }>;
};

export type SchoolDetail = {
  slug: string;
  name: string;
  meaning: string;
  founder: string;
  period: string;
  coreText: {
    title: string;
    author: string;
    description: string;
  };
  aim: string;
  corePhilosophy: {
    summary: string;
    metaphysics?: string;
    ontology?: string;
    realism?: boolean; // True for realist, false for idealist/non-realist, undefined if complex/varies
    theismDescription?: string; // Textual description of theistic stance
  };
  keyConcepts: {
    Pramāṇas?: Pramana[];
    Padarthas?: (string | PadarthaCategory)[]; 
    Logic?: { 
      FiveMemberedSyllogism: string[];
      Example: string;
    };
    Atomism?: { 
      belief: string;
      typesOfAtoms: string[];
      formation: string;
      roleOfIshvara: string;
    };
    DualRealities?: KeyConceptDetail[]; 
    Gunas?: KeyConceptDetail[]; 
    Tattvas?: TattvaConcept; 
    cittaVrttiNirodhah?: {
      translation: string;
      explanation: string;
    };
    astangaYoga?: {
      meaning: string;
      limbs: string[];
    };
    isvaraConcept?: { 
      description: string;
      mantra: string;
    };
    kleshas?: string[];
    kaivalyaConcept?: string; 
    vedaConcept?: KeyConceptDetail;
    dharmaConcept?: KeyConceptDetail;
    apurvaConcept?: KeyConceptDetail;
    ritualismConcept?: KeyConceptDetail;
    sabdaConcept?: KeyConceptDetail;
    // Vedanta specific key concepts can be an array of KeyConceptDetail
    vedantaKeyConcepts?: KeyConceptDetail[];
  };
  epistemology: {
    emphasis?: string;
    typesOfKnowledge?: string[];
    validKnowledge?: string;
    pramāṇas?: Pramana[];
    note?: string;
  };
  liberation: {
    goal: string;
    means: string;
  };
  influence: {
    onOtherSchools: string[];
    importance?: string;
    onScience?: string[];
    debates?: string;
    onSpiritualPractice?: string;
    globalImpact?: string;
  };
  commentariesAndWorks: CommentaryWork[];
  notableThinkers?: Thinker[];
  modernRelevance: {
    uses: string[];
    revival?: string;
    academicInterest?: string;
    integration?: string;
  };
  comparisonWithNyaya?: { 
    relationship: string;
    difference: string;
  };
  comparisonWithOtherSchools?: ComparisonDetail; 
  branchesOfYoga?: Array<{ name: string; description: string; }>; 
  subSchools?: SubSchool[]; 
  schoolsOfVedānta?: VedantaSubSchool[]; // Vedanta specific
};

export const detailedSchoolsData: SchoolDetail[] = [
  {
    slug: "nyaya",
    name: "Nyāya",
    meaning: "Logic or Reasoning",
    founder: "Sage Gautama (also known as Akṣapāda)",
    period: "6th century BCE (approximate)",
    coreText: {
      title: "Nyāya Sūtras",
      author: "Gautama",
      description: "A foundational treatise that lays out the rules of logic, methods of debate, and epistemology. Divided into five chapters detailing perception, inference, analogy, verbal testimony, and methods of argumentation."
    },
    aim: "To attain liberation (moksha) through right knowledge (jñāna) acquired by valid means (pramāṇas) and critical reasoning.",
    corePhilosophy: {
      summary: "Nyāya is a system of logic and epistemology that emphasizes correct reasoning as the path to knowledge and liberation. It analyzes how valid knowledge arises and how errors in knowledge occur.",
      metaphysics: "Believes in a realist ontology: self (ātman), body (śarīra), senses (indriya), and external objects all exist independently and are knowable.",
      realism: true,
      theismDescription: "Affirms the existence of a supreme creator God (Īśvara) who is omniscient and governs the law of karma."
    },
    keyConcepts: {
      Pramāṇas: [
        {
          name: "Pratyakṣa",
          meaning: "Perception",
          description: "Direct sensory experience from reliable sense faculties. Can be external (through senses) or internal (mental perception)."
        },
        {
          name: "Anumāna",
          meaning: "Inference",
          description: "Logical deduction based on observation. Example: Seeing smoke and inferring fire."
        },
        {
          name: "Upamāna",
          meaning: "Comparison/Analogy",
          description: "Knowledge gained through similarity. For example, understanding what a ‘wild cow’ is by comparing it to a known cow."
        },
        {
          name: "Śabda",
          meaning: "Verbal Testimony",
          description: "Knowledge from reliable words or authoritative scriptures (like the Vedas or trustworthy persons)."
        }
      ],
      Padarthas: [ 
        "Dravya (substance)",
        "Guṇa (quality)",
        "Karma (action)",
        "Sāmānya (generality)",
        "Viśeṣa (particularity)",
        "Samavāya (inherence)",
        "Abhāva (non-existence, added later)"
      ],
      Logic: {
        FiveMemberedSyllogism: [
          "Pratijñā (Proposition)",
          "Hetu (Reason)",
          "Udāharaṇa (Example)",
          "Upanaya (Application)",
          "Nigamana (Conclusion)"
        ],
        Example: "1. The hill has fire (Proposition). 2. Because it has smoke (Reason). 3. Wherever there is smoke, there is fire (Example) — like in the kitchen. 4. The hill has smoke like the kitchen (Application). 5. Therefore, the hill has fire (Conclusion)."
      }
    },
    epistemology: {
      emphasis: "Correct knowledge is essential for liberation. Knowledge must be distinguished from doubt, error, and memory.",
      typesOfKnowledge: [
        "Valid (Yathārtha Jñāna)",
        "Invalid (Ayathārtha Jñāna)"
      ],
      pramāṇas: [ 
        {
          name: "Pratyakṣa",
          meaning: "Perception",
          description: "Direct sensory experience from reliable sense faculties. Can be external (through senses) or internal (mental perception)."
        },
        {
          name: "Anumāna",
          meaning: "Inference",
          description: "Logical deduction based on observation. Example: Seeing smoke and inferring fire."
        },
        {
          name: "Upamāna",
          meaning: "Comparison/Analogy",
          description: "Knowledge gained through similarity. For example, understanding what a ‘wild cow’ is by comparing it to a known cow."
        },
        {
          name: "Śabda",
          meaning: "Verbal Testimony",
          description: "Knowledge from reliable words or authoritative scriptures (like the Vedas or trustworthy persons)."
        }
      ]
    },
    liberation: {
      goal: "To eliminate ignorance and false knowledge, thereby escaping the cycle of birth and death (samsāra).",
      means: "By applying pramāṇas and discerning truth through debate, logic, and reasoning."
    },
    influence: {
      onOtherSchools: [
        "Vaisheshika: Combined later with Nyāya as 'Nyāya-Vaisheshika' school",
        "Vedanta: Adopted Nyāya logical techniques",
        "Buddhist Logic: Debated Nyāya principles rigorously"
      ],
      importance: "Served as the intellectual foundation for Indian philosophical discourse and debates. Contributed to Indian jurisprudence and rhetoric."
    },
    commentariesAndWorks: [
      {
        author: "Vātsyāyana",
        work: "Nyāya Bhāṣya",
        description: "Classical commentary on the Nyāya Sūtras."
      },
      {
        author: "Uddyotakara",
        work: "Nyāya Vārttika",
        description: "Rebuttals to Buddhist critiques and expansion on Vātsyāyana’s commentary."
      },
      {
        author: "Jayanta Bhaṭṭa",
        work: "Nyāya Mañjarī",
        description: "A later important text defending Nyāya realism and theism."
      },
      {
        author: "Gaṅgeśa",
        work: "Tattva Chintāmaṇi",
        description: "Neo-Nyāya reformulation with more precision in logical analysis (13th century)."
      }
    ],
    modernRelevance: {
      uses: [
        "Development of Indian logic systems",
        "Foundation for scientific reasoning in classical Indian sciences",
        "Influences on comparative philosophy and cognitive science"
      ],
      revival: "Neo-Nyāya school in Navya-Nyāya period (13th century onwards), particularly in Mithila and Navadvipa regions."
    }
  },
  {
    slug: "vaisheshika",
    name: "Vaiśeṣika",
    meaning: "Particularity or Atomism",
    founder: "Sage Kaṇāda (also known as Ulūka)",
    period: "6th–2nd century BCE (approximate)",
    coreText: {
      title: "Vaiśeṣika Sūtras",
      author: "Kaṇāda",
      description: "Foundational treatise that systematically outlines categories of reality and the atomic theory of the universe. Focuses on physics, metaphysics, and logic."
    },
    aim: "Liberation (moksha) through right knowledge of reality, obtained by understanding the nature of the universe and the soul.",
    corePhilosophy: {
      summary: "Vaiśeṣika is a realist and pluralistic school that posits the universe is made up of eternal, indivisible atoms and categorizes all that exists into distinct, knowable entities. It promotes knowledge of these categories as the path to liberation.",
      ontology: "Pluralistic realism — all entities are real and distinct. Soul and matter are separate.",
      realism: true,
      theismDescription: "Initially non-theistic, later versions include Ishvara (Supreme Being) as the cause of motion in atoms or acknowledge an unseen moral principle (adṛṣṭa)."
    },
    keyConcepts: {
      Padarthas: [
        {
          name: "Dravya",
          meaning: "Substance",
          description: "Includes nine substances: earth (pṛthivī), water (jala), fire (tejas), air (vāyu), ether (ākāśa), time (kāla), space (dik), mind (manas), and self (ātman)."
        },
        {
          name: "Guṇa",
          meaning: "Quality",
          description: "Attributes that reside in substances, e.g., color, taste, smell, number, motion, cognition."
        },
        {
          name: "Karma",
          meaning: "Motion/Action",
          description: "Action or movement that causes change and interaction between atoms."
        },
        {
          name: "Sāmānya",
          meaning: "Generality/Universal",
          description: "Universal qualities shared by multiple entities, like 'cowness' in all cows."
        },
        {
          name: "Viśeṣa",
          meaning: "Particularity",
          description: "The unique property of atoms or souls that makes them distinguishable from others of the same class."
        },
        {
          name: "Samavāya",
          meaning: "Inherence",
          description: "The inseparable relation between substances and their attributes or parts (like a thread and its color, or a whole and its parts)."
        },
        {
          name: "Abhāva",
          meaning: "Non-existence/Absence",
          description: "Later added by commentators; accounts for absence, like the non-existence of an object at a time or place, or prior/posterior non-existence."
        }
      ],
      Atomism: {
        belief: "All physical matter is composed of eternal, indivisible atoms (paramāṇu). These atoms are qualitatively distinct.",
        typesOfAtoms: ["Earth (Pṛthivī)", "Water (Jala)", "Fire (Tejas)", "Air (Vāyu)"],
        formation: "Atoms combine to form dyads (dvyaṇuka), triads (tryaṇuka), and more complex bodies through motion (karma), initiated by an unseen force (adṛṣṭa) or later, Ishvara.",
        roleOfIshvara: "Later Vaiśeṣikas propose a divine force (Ishvara) or an unseen moral principle (adṛṣṭa) initiates atomic motion and combination."
      }
    },
    epistemology: {
      validKnowledge: "Yathārtha Jñāna (true, valid knowledge)",
      pramāṇas: [
        {
          name: "Pratyakṣa",
          meaning: "Perception",
          description: "Direct sensory experience of objects. This includes both external perception (through the five senses) and internal perception (of mental states like pleasure, pain by the mind)."
        },
        {
          name: "Anumāna",
          meaning: "Inference",
          description: "Knowledge derived from previous knowledge or observation through logical reasoning, e.g., inferring fire from smoke."
        }
      ],
      note: "Unlike Nyāya (which accepts four), Vaiśeṣika traditionally accepts only two pramāṇas (means of valid knowledge): perception and inference. Later Vaiśeṣikas, especially in the combined Nyāya-Vaiśeṣika school, accepted all four."
    },
    liberation: {
      goal: "To escape the cycle of birth and death (samsāra) by realizing the true nature of the self (ātman) as distinct from the body, mind, and the material world.",
      means: "Achieved through true knowledge (tattvajñāna) of the six (or seven) Padārthas, leading to the cessation of actions driven by ignorance and desire, and ultimately the cessation of suffering."
    },
    comparisonWithNyaya: {
      relationship: "Vaiśeṣika and Nyāya are considered sister schools and eventually merged to form the Nyāya-Vaiśeṣika school due to their shared realist ontology and logical methodologies.",
      difference: "While Nyāya primarily focuses on logic, epistemology, and methods of argument, Vaiśeṣika concentrates on metaphysics, particularly the categorization of reality (Padārthas) and atomic theory."
    },
    influence: {
      onOtherSchools: [
        "Provided a detailed metaphysical framework for other Indian philosophies.",
        "Its atomic theory and categorization were discussed and debated by Buddhist, Jaina, and Vedānta schools.",
        "Formed the ontological basis for the combined Nyāya-Vaiśeṣika system."
      ],
      onScience: [
        "Considered a precursor to atomic theory and material science in ancient India.",
        "Its systematic classification of substances, qualities, and actions influenced early Indian scientific thought."
      ],
      debates: "Engaged in extensive debates with Buddhist schools regarding the nature of reality, momentariness, and the existence of a permanent self and atoms."
    },
    commentariesAndWorks: [
      {
        author: "Prashastapāda",
        work: "Padārtha Dharma Sangraha (also known as Praśastapāda Bhāṣya)",
        description: "A highly influential commentary that elaborates on Kaṇāda’s Sūtras, often considered a foundational text in its own right. It organizes the Vaiśeṣika system systematically."
      },
      {
        author: "Udayana",
        work: "Kiraṇāvalī",
        description: "A commentary on Praśastapāda's work, further defending Vaiśeṣika realism against Buddhist idealism."
      },
      {
        author: "Śrīdhara",
        work: "Nyāyakandalī",
        description: "Another important commentary on Praśastapāda’s Bhāṣya, known for its clarity and detailed explanations."
      },
      {
        author: "Śaṅkara Miśra",
        work: "Vaiśeṣika Sūtropaskāra",
        description: "A later commentary directly on the Vaiśeṣika Sūtras."
      }
    ],
    notableThinkers: [ 
        { name: "Kaṇāda", description: "Founder of the Vaiśeṣika school and author of Vaiśeṣika Sūtras." },
        { name: "Prashastapāda", description: "Authored the influential commentary Padārtha Dharma Sangraha." },
        { name: "Udayana", description: "Significant philosopher of the Nyāya-Vaiśeṣika tradition, wrote Kiraṇāvalī." },
        { name: "Śrīdhara", description: "Commentator known for Nyāyakandalī."}
    ],
    modernRelevance: {
      uses: [
        "Its atomic theory provides a historical perspective on early scientific thought in India.",
        "Offers insights into Indian metaphysics, ontology, and the classification of reality.",
        "Its principles of categorization are relevant to fields like information science and knowledge representation."
      ],
      academicInterest: "Studied in comparative philosophy, history of science (particularly physics and chemistry in ancient India), and Indian logic. The realism of Vaiśeṣika continues to be a subject of philosophical discussion."
    }
  },
  {
    slug: "samkhya",
    name: "Sāṃkhya",
    meaning: "Enumeration or Number",
    founder: "Sage Kapila",
    period: "Around 1st millennium BCE or earlier",
    coreText: {
      title: "Sāṃkhya Kārikā",
      author: "Iśvarakṛṣṇa",
      description: "Authoritative classical text that outlines the metaphysical system of Sāṃkhya in 72 verses."
    },
    aim: "Liberation (moksha) through discriminative knowledge between consciousness (Puruṣa) and matter (Prakṛti).",
    corePhilosophy: {
      summary: "Sāṃkhya is a dualistic and atheistic school that explains the universe through two eternal realities: Puruṣa (pure consciousness) and Prakṛti (primordial matter). Liberation is achieved by realizing their complete distinction.",
      ontology: "Dualism — Two independent and eternal entities: Puruṣa and Prakṛti.",
      realism: undefined, // Dualistic realism, but more focused on the Purusa/Prakriti distinction
      theismDescription: "Classical Sāṃkhya is non-theistic; it does not require or posit a creator God (Īśvara)."
    },
    keyConcepts: {
      DualRealities: [
        {
          name: "Puruṣa",
          meaning: "Pure Consciousness",
          description: "The true self, passive witness, immutable, and non-material. Infinite in number (many puruṣas)."
        },
        {
          name: "Prakṛti",
          meaning: "Primordial Matter",
          description: "Unmanifested material cause of the universe, composed of three guṇas. It evolves into all physical and mental realities."
        }
      ],
      Gunas: [
        {
          name: "Sattva",
          description: "Light, purity, knowledge, balance."
        },
        {
          name: "Rajas",
          description: "Activity, passion, energy, movement."
        },
        {
          name: "Tamas",
          description: "Inertia, darkness, ignorance, heaviness."
        }
      ],
      Tattvas: {
        description: "The evolution of reality from Prakṛti into 24 other tattvas (principles), leading to the empirical world and mental faculties.",
        list: [
          "1. Prakṛti (Primordial Nature)",
          "2. Mahat or Buddhi (Intellect)",
          "3. Ahaṃkāra (Ego)",
          "4-8. Five Jñānendriyas (Senses of Knowledge: Hearing, Touch, Sight, Taste, Smell)",
          "9-13. Five Karmendriyas (Organs of Action: Speech, Grasping, Locomotion, Excretion, Procreation)",
          "14-18. Five Tanmātras (Subtle Elements: Sound, Touch, Form, Taste, Smell)",
          "19-23. Five Mahābhūtas (Gross Elements: Ether, Air, Fire, Water, Earth)",
          "24. Manas (Mind)",
          "25. Puruṣa (Consciousness)"
        ]
      }
    },
    epistemology: {
      validKnowledge: "Pramā — valid cognition",
      pramāṇas: [
        { name: "Pratyakṣa", meaning: "Perception", description: "Direct sensory experience or immediate apprehension." },
        { name: "Anumāna", meaning: "Inference", description: "Knowledge derived through logical reasoning from observed signs." },
        { name: "Śabda", meaning: "Verbal Testimony", description: "Knowledge gained from reliable authorities or scriptures, particularly from enlightened seers (Āpta)." }
      ]
    },
    liberation: {
      goal: "Kaivalya — absolute isolation or detachment of Puruṣa from Prakṛti.",
      means: "Discriminative knowledge (viveka-khyāti) that Puruṣa is not the body, mind, or ego but the eternal witness."
    },
    influence: {
      onOtherSchools: [
        "Provides the metaphysical foundation for Patañjali’s Yoga Sūtras (Yoga).",
        "Used in understanding mind-body constitution through guṇas and tattvas (Ayurveda).",
        "Conceptual impact on subtle body theories, cosmology, and liberation mechanisms (Vedānta & Tantra)."
      ],
       onSpiritualPractice: "Its principles of discrimination (viveka) are foundational for many meditative paths."
    },
    notableThinkers: [
      {
        name: "Kapila Muni",
        description: "Mythic founder and seer of Sāṃkhya system."
      },
      {
        name: "Iśvarakṛṣṇa",
        description: "Author of Sāṃkhya Kārikā — the most authoritative surviving classical text."
      },
      {
        name: "Gauḍapāda",
        description: "Wrote an important early commentary on Sāṃkhya Kārikā."
      },
      {
        name: "Vācaspati Miśra",
        description: "Author of Tattvakaumudī, a key commentary on Sāṃkhya Kārikā."
      }
    ],
    commentariesAndWorks: [ 
        {
            author: "Iśvarakṛṣṇa",
            work: "Sāṃkhya Kārikā",
            description: "The primary classical text of Sāṃkhya."
        },
        {
            author: "Gauḍapāda",
            work: "Sāṃkhya Kārikā Bhāṣya",
            description: "An early and important commentary on Iśvarakṛṣṇa's Sāṃkhya Kārikā."
        },
        {
            author: "Vācaspati Miśra",
            work: "Sāṃkhyatattvakaumudī",
            description: "A highly influential commentary on the Sāṃkhya Kārikā."
        }
    ],
    modernRelevance: {
      uses: [
        "Foundation for psychological and spiritual disciplines like meditation and self-inquiry.",
        "Used in integrative health and therapy models focusing on the gunas and mind-body layers."
      ],
      academicInterest: "Continues to be studied in Indian metaphysics, psychology, consciousness studies, and comparative religion."
    },
    comparisonWithOtherSchools: {
      "Yoga": "Closely related — Yoga Darshana accepts Sāṃkhya metaphysics but adds Iśvara (God) as a special puruṣa.",
      "Vedānta": "Sāṃkhya is dualistic; Advaita Vedānta is non-dual. Vedānta critiques Sāṃkhya's denial of a Supreme Being and its independent Prakṛti.",
      "Buddhism": "Both discuss suffering and liberation but differ in views of self; Sāṃkhya believes in eternal self (puruṣa), while Buddhism denies permanent self (anātman)."
    }
  },
  {
    slug: "yoga",
    name: "Yoga",
    meaning: "Union or Discipline",
    founder: "Maharishi Patañjali (compiler of systematized Yoga philosophy)",
    period: "Around 2nd century BCE (Yoga Sūtras compiled)",
    coreText: {
      title: "Yoga Sūtras of Patañjali",
      author: "Patañjali",
      description: "A foundational text comprising 196 aphorisms outlining the theory and practice of Raja Yoga — the path of meditative discipline and mental purification."
    },
    aim: "Liberation (moksha) through cessation of mental fluctuations and realization of the Self (Puruṣa).",
    corePhilosophy: {
      summary: "Yoga builds upon the metaphysical system of Sāṃkhya but introduces Iśvara (God) as a special puruṣa and emphasizes practical methods to discipline the body, mind, and senses for spiritual realization.",
      ontology: "Dualism — Same as Sāṃkhya (Puruṣa and Prakṛti) with the addition of Iśvara.",
      realism: undefined, // Accepts Sāṃkhya's dualistic realism.
      theismDescription: "Theistic — acknowledges a personal God (Iśvara) as an object of meditation, a special Puruṣa untouched by afflictions and karma, and a source of spiritual help."
    },
    keyConcepts: {
      cittaVrttiNirodhah: {
        translation: "Yoga is the cessation of the fluctuations of the mind.",
        explanation: "When mental modifications are stilled, the true nature of the self (Puruṣa) is revealed."
      },
      astangaYoga: {
        meaning: "Eight Limbs of Yoga",
        limbs: [
          "1. Yama – Moral Restraints (non-violence, truth, non-stealing, celibacy, non-possessiveness)",
          "2. Niyama – Personal Observances (purity, contentment, discipline, self-study, devotion to Iśvara)",
          "3. Āsana – Physical Postures (steady and comfortable seat)",
          "4. Prāṇāyāma – Breath Regulation (control of vital energy)",
          "5. Pratyāhāra – Withdrawal of the Senses (from external objects)",
          "6. Dhāraṇā – Concentration (fixing the mind on a single point)",
          "7. Dhyāna – Meditation (uninterrupted flow of thought towards the object of concentration)",
          "8. Samādhi – Absorption or Enlightened Union (mind becomes one with the object of meditation)"
        ]
      },
      isvaraConcept: {
        description: "A special puruṣa, untouched by karma or ignorance, considered an eternal teacher and ideal object of meditation. Devotion to Iśvara (Iśvara-praṇidhāna) is one of the Niyamas.",
        mantra: "Om (Praṇava) is the symbol of Iśvara."
      },
      kleshas: [
        "Avidyā (Ignorance of the true nature of reality)",
        "Asmitā (Egoism, identification of Puruṣa with Prakṛti)",
        "Rāga (Attachment to pleasure)",
        "Dveṣa (Aversion to pain)",
        "Abhiniveśa (Fear of death / Clinging to life)"
      ],
      kaivalyaConcept: "Final liberation or absolute isolation of Puruṣa from Prakṛti, attained when the mind (citta) is completely purified and stilled, and the Self (Puruṣa) is realized in its pure, conscious state."
    },
    epistemology: {
      pramāṇas: [
        { name: "Pratyakṣa", meaning: "Direct Perception", description: "Knowledge obtained through direct sensory experience or mental intuition, including yogic perception (yogaja-pratyakṣa)." },
        { name: "Anumāna", meaning: "Inference", description: "Knowledge derived through logical reasoning from observed facts." },
        { name: "Āgama / Śabda", meaning: "Scriptural Testimony", description: "Knowledge gained from authoritative texts (like Yoga Sutras) or reliable teachers (āpta)." }
      ]
    },
    liberation: { 
      goal: "Kaivalya - The ultimate state of freedom and isolation of Puruṣa from Prakṛti, free from suffering and the cycle of rebirth.",
      means: "Through the practice of Aṣṭāṅga Yoga, leading to discriminative discernment (viveka-khyāti) and the cessation of mental fluctuations (citta-vṛtti-nirodha)."
    },
    influence: {
      onOtherSchools: [ 
          "Sāṃkhya: Yoga adopts Sāṃkhya's metaphysics but adds Iśvara and practical disciplines.",
          "Vedānta: Many Vedānta schools incorporate yogic practices. Both aim for moksha but differ on the nature of ultimate reality (Yoga is dualistic, Advaita Vedānta non-dualistic).",
          "Buddhism: Shares emphasis on meditation and mental purification but differs on the concept of a permanent Self (Puruṣa vs. Anātman)."
      ],
      onSpiritualPractice: "Integral to nearly all paths of Indian spirituality including Vedānta, Tantra, and Buddhism. Provides practical methods for self-realization.",
      globalImpact: "Modern global Yoga movements draw heavily from Patañjali’s system, especially in therapeutic, wellness, and psychological contexts. It has become a worldwide phenomenon.",
      onScience: ["Explored for its relevance to neuroscience, consciousness studies, mental health, stress reduction, and psychosomatic medicine."]
    },
    commentariesAndWorks: [
        { author: "Vyāsa", work: "Yoga Bhāṣya (or Sāṃkhyapravacanabhāṣya)", description: "The primary and most authoritative classical commentary on the Yoga Sūtras." },
        { author: "Vācaspati Miśra", work: "Tattvavaiśāradī", description: "A sub-commentary on Vyāsa's Yoga Bhāṣya, providing detailed explanations." },
        { author: "Bhoja Rāja", work: "Rājamārtaṇḍa", description: "A notable 11th-century commentary on the Yoga Sūtras." }
    ],
    notableThinkers: [ 
      {
        name: "Maharishi Patañjali",
        description: "Systematized Yoga philosophy and practice in the Yoga Sūtras."
      },
      {
        name: "Vyāsa",
        description: "Author of the foundational commentary, Yoga Bhāṣya."
      },
      {
        name: "Swami Vivekananda",
        description: "Popularized Rāja Yoga globally in the late 19th century, emphasizing Yoga’s scientific and spiritual aspects."
      },
      {
        name: "Tirumalai Krishnamacharya",
        description: "Considered the father of modern Haṭha Yoga, trained many influential 20th-century Yoga masters like B.K.S. Iyengar and K. Pattabhi Jois."
      }
    ],
    modernRelevance: {
      uses: [ 
        "Mental clarity, emotional balance, and stress reduction through meditation and mindfulness.",
        "Physical health, flexibility, and vitality via āsana and prāṇāyāma.",
        "Spiritual growth through disciplined practice, self-awareness, and ethical living."
      ],
      integration: "Widely used in integrative therapies, psychotherapy, education, sports training, and corporate wellness programs."
    },
    comparisonWithOtherSchools: { 
      "Sāṃkhya": "Yoga is the practical aspect of Sāṃkhya's theoretical framework, accepting its metaphysics but adding the concept of Iśvara and a systematic path of practice (Aṣṭāṅga Yoga).",
      "Vedānta": "While both aim for liberation (Mokṣa), Yoga is explicitly dualistic (Puruṣa-Prakṛti). Advaita Vedānta is non-dualistic (Brahman alone is real). However, yogic practices are often integrated into Vedāntic paths.",
      "Buddhism": "Both systems emphasize meditation, ethical conduct, and mental purification. They differ significantly on the concept of a permanent Self (Ātman/Puruṣa in Yoga, Anattā/Anātman in Buddhism)."
    },
    branchesOfYoga: [
      {
        name: "Rāja Yoga",
        description: "The 'royal path' of meditation and mind control as systematized by Patañjali in the Yoga Sūtras."
      },
      {
        name: "Haṭha Yoga",
        description: "Focuses on physical postures (āsanas), breath control (prāṇāyāma), and purification techniques (kriyas) to prepare the body and mind for higher states of consciousness."
      },
      {
        name: "Karma Yoga",
        description: "The path of selfless action, performing duties without attachment to the results, as a means of spiritual purification (prominently discussed in the Bhagavad Gītā)."
      },
      {
        name: "Bhakti Yoga",
        description: "The path of devotion, love, and surrender to a personal God or divine principle."
      },
      {
        name: "Jñāna Yoga",
        description: "The path of wisdom and discriminative knowledge, seeking to realize the true nature of the Self and reality through study, reflection, and meditation."
      }
    ]
  },
  {
    slug: "purva-mimamsa",
    name: "Pūrva Mīmāṃsā",
    meaning: "Earlier Inquiry (on Vedas)",
    founder: "Maharishi Jaimini",
    period: "Around 4th–3rd century BCE",
    coreText: {
      title: "Mīmāṃsā Sūtras",
      author: "Jaimini",
      description: "A foundational text that outlines the principles of Vedic interpretation and the philosophy of dharma (righteous duty) through ritual actions."
    },
    aim: "To establish the authority of the Vedas and the eternal nature of Dharma as revealed through Vedic rituals, leading to desired results like heaven (svarga) and ultimately, for some later Mimamsakas, liberation (moksha).",
    corePhilosophy: {
      summary: "Mīmāṃsā is a theologically conservative, ritual-centric system focused on the correct interpretation and performance of Vedic sacrifices. It holds that dharma is known only through the Vedas, which are eternal and authorless.",
      ontology: "Ritualism and Dharma — The world operates through prescribed karmas (ritual duties) and their unseen results (apūrva). It upholds the reality of the external world and the individual self.",
      realism: true,
      theismDescription: "Classical Mīmāṃsā is non-theistic; it does not require or emphasize belief in a creator God. The focus is on the impersonal authority of the Vedas and the efficacy of rituals themselves. Deities mentioned in rituals are seen as part of the ritual injunction rather than independent conscious beings to be worshipped."
    },
    keyConcepts: {
      vedaConcept: {
        name: "Veda (Authority & Nature)",
        description: "Considered eternal (nitya) and authorless (apauruṣeya); the ultimate source of Dharma and knowledge. The words of the Veda are self-validating (svataḥprāmāṇya) and require no external justification."
      },
      dharmaConcept: {
        name: "Dharma (Vedic Duty)",
        description: "That which is enjoined by the Veda (codanā-lakṣaṇo'rtho dharmaḥ); primarily understood as ritual action (yajña) and ethical duty. Known only through the Vedas, not through perception or inference."
      },
      apurvaConcept: {
        name: "Apūrva (Latent Potency)",
        description: "An unseen or latent potency generated by the performance of a ritual action, which resides in the performer and ensures the fruition of the ritual's result at a later time (e.g., attainment of heaven). It acts as the link between ritual and its consequence.",
      },
      sabdaConcept: { 
          name: "Śabda (Vedic Testimony)",
          description: "One of the main pramāṇas (means of knowledge); in Mīmāṃsā, Vedic śabda is the ultimate and infallible authority for knowing dharma."
      },
      ritualismConcept: { 
          name: "Ritualism (Yajña)",
          description: "The correct and precise performance of rituals (karma-kāṇḍa) as prescribed in the Vedas is essential to uphold cosmic and moral order (dharma) and achieve desired ends."
      }
    },
    epistemology: {
      emphasis: "Establishing the self-validity (svataḥprāmāṇya) of Vedic knowledge and refuting skepticism.",
      pramāṇas: [
        { name: "Pratyakṣa", meaning: "Perception", description: "Knowledge obtained through direct sensory experience." },
        { name: "Anumāna", meaning: "Inference", description: "Knowledge derived from reasoning based on invariable concomitance." },
        { name: "Śabda", meaning: "Verbal Testimony", description: "Knowledge from authoritative verbal statements, especially the Vedas, considered intrinsically valid." },
        { name: "Upamāna", meaning: "Comparison", description: "Knowledge derived from similarity or analogy." },
        { name: "Arthāpatti", meaning: "Postulation/Presumption", description: "Knowledge derived from postulating a fact to explain an apparent inconsistency between known facts." },
        { name: "Anupalabdhi", meaning: "Non-apprehension/Non-perception", description: "Knowledge of non-existence derived from the absence of perception (accepted by the Bhāṭṭa school of Mīmāṃsā)." }
      ]
    },
    liberation: {
      goal: "Primarily, the attainment of heaven (svarga) through the correct performance of Vedic rituals. Later Mīmāṃsakas, influenced by other schools, discussed liberation (mokṣa) as the cessation of suffering and rebirth, achieved by exhausting karmas through performance of nitya (obligatory) and naimittika (occasional) karmas, and avoiding kāmya (desire-driven) and niṣiddha (prohibited) karmas.",
      means: "Strict adherence to Vedic injunctions, performance of prescribed rituals (dharma), and abstaining from prohibited actions (adharma)."
    },
    influence: {
      onOtherSchools: [
        "Provided foundational principles for Vedic hermeneutics (rules of interpretation) extensively used by other schools, including Vedānta, in interpreting scriptures.",
        "Greatly influenced the Dharmaśāstras (codes of conduct and law) and Smṛti literature by providing a philosophical basis for ritual duties and social obligations.",
        "Its methods of reasoning and debate contributed to the development of Indian legal theories and practices."
      ]
    },
    commentariesAndWorks: [
      { author: "Jaimini", work: "Mīmāṃsā Sūtras", description: "The foundational aphoristic text of the Pūrva Mīmāṃsā school." },
      { author: "Śabarasvāmin", work: "Śabara Bhāṣya", description: "The earliest extant and most authoritative commentary on Jaimini's Mīmāṃsā Sūtras." },
      { author: "Kumārila Bhaṭṭa", work: "Ślokavārttika, Tantravārttika, Tupṭīkā", description: "Extensive commentaries on Śabara Bhāṣya, defending Vedic authority and establishing the Bhāṭṭa school of Mīmāṃsā. Known for refuting Buddhist critiques." },
      { author: "Prabhākara Miśra", work: "Bṛhatī (commentary on Śabara Bhāṣya) and Laghvī", description: "Key works establishing the Prābhākara school of Mīmāṃsā, offering distinct interpretations, particularly in epistemology (theory of error as akhyāti)." }
    ],
    notableThinkers: [
      { name: "Maharishi Jaimini", description: "Founder of the Pūrva Mīmāṃsā school and author of the Mīmāṃsā Sūtras." },
      { name: "Śabarasvāmin", description: "Authored the crucial Śabara Bhāṣya, the primary commentary on the Mīmāṃsā Sūtras." },
      { name: "Kumārila Bhaṭṭa", description: "A major 7th-century philosopher who significantly developed Mīmāṃsā philosophy, particularly the Bhāṭṭa school. He was a staunch defender of Vedic ritualism and critiqued Buddhist views." },
      { name: "Prabhākara Miśra", description: "A 7th-8th century philosopher and a contemporary of Kumārila Bhaṭṭa, who founded the Prābhākara school of Mīmāṃsā, known for its distinct epistemological theories (e.g., triputīpratyakṣavāda - theory of triple perception)." }
    ],
    modernRelevance: {
      uses: [
        "Its principles of textual interpretation (hermeneutics) continue to be studied in fields like law, linguistics, and literary criticism, particularly in the context of Sanskrit texts.",
        "Provides insights into the historical development of Vedic ritual practices and their philosophical underpinnings.",
        "Influential in the study of Sanskrit linguistics and philosophy of language, especially concerning the nature of meaning and sentence interpretation."
      ],
      academicInterest: "Mīmāṃsā is studied for its unique contributions to epistemology (theory of knowledge), philosophy of language, and its role in preserving and justifying Vedic traditions. Its sophisticated debates with other schools are crucial for understanding Indian intellectual history."
    },
    comparisonWithOtherSchools: { 
      "Vedānta (Uttara Mīmāṃsā)": "Pūrva Mīmāṃsā focuses on the Karma-kāṇḍa (ritualistic portion) of the Vedas, while Vedānta focuses on the Jñāna-kāṇḍa (knowledge portion, i.e., Upanishads). They are often seen as complementary parts of a larger Vedic inquiry, with Mīmāṃsā providing the methodology for Vedic interpretation and Vedānta providing the ultimate philosophical goal of liberation through knowledge of Brahman."
    },
    subSchools: [
      { name: "Bhāṭṭa School", founder: "Kumārila Bhaṭṭa", emphasis: "Strong defense of the Veda’s infallibility, realistic epistemology, theory of intrinsic validity of knowledge (svataḥprāmāṇyavāda), and theory of error as viparītakhyāti (misapprehension)." },
      { name: "Prābhākara School", founder: "Prabhākara Miśra", emphasis: "Distinct theory of knowledge (tripuṭīpratyakṣavāda - simultaneous cognition of knower, known, and knowledge), theory of error as akhyātivāda (non-apprehension of difference), and anvitābhidhānavāda (theory that words convey meaning only in sentence context)." }
    ]
  },
  {
    slug: "vedanta",
    name: "Vedānta (Uttara Mīmāṃsā)",
    meaning: "End of the Vedas (philosophy of the Upaniṣads)",
    founder: "Bādarāyaṇa (compiler of Brahma Sūtras)",
    period: "Approx. 500 BCE to 200 CE (systematization with Brahma Sūtras)",
    coreText: {
      title: "Brahma Sūtras (also known as Vedānta Sūtras)",
      author: "Bādarāyaṇa",
      description: "A systematic treatise in aphoristic style that interprets the philosophical teachings of the Upaniṣads and harmonizes their diverse messages. It forms one of the three pillars of Vedānta known as the Prasthānatrayī, along with the Upaniṣads and the Bhagavad Gītā."
    },
    aim: "To realize the identity or relationship between the individual soul (Ātman) and the ultimate reality (Brahman), leading to Mokṣa (liberation from the cycle of birth and death).",
    corePhilosophy: {
      summary: "Vedānta, meaning 'the end or culmination of the Vedas,' seeks to interpret the philosophical teachings of the Upaniṣads concerning the nature of the Absolute (Brahman), the individual soul (Ātman), the universe (Jagat), and the path to liberation (Mokṣa). It offers profound metaphysical and ethical insights into the nature of existence.",
      ontology: "Primarily non-material, asserting Brahman as the ultimate, underlying reality and cause of the universe. The nature of this causality and the reality of the world vary among its sub-schools.",
      realism: undefined, // Varies widely among sub-schools (e.g., Advaita is non-realist/illusionist regarding the empirical world, others are realist)
      theismDescription: "The concept of God (Īśvara or Brahman) varies significantly among sub-schools. Advaita views Brahman as an impersonal, attributeless Absolute, while Bhakti-oriented schools like Viśiṣṭādvaita and Dvaita worship a personal Supreme Being (e.g., Vishnu/Narayana) with infinite auspicious attributes."
    },
    keyConcepts: {
      vedantaKeyConcepts: [
        {
          name: "Brahman",
          meaning: "The Ultimate Reality",
          description: "The absolute, infinite, eternal, and unchanging reality that is the source, sustainer, and dissolver of all existence. Its nature (impersonal/Nirguṇa or personal/Saguṇa) is a key point of divergence among Vedānta schools."
        },
        {
          name: "Ātman",
          meaning: "The Individual Self/Soul",
          description: "The inner Self or true essence of the individual; considered eternal, conscious, and, in many schools, inherently blissful. Its relationship with Brahman (identity, part, or distinct entity) is central to Vedāntic thought."
        },
        {
          name: "Mokṣa",
          meaning: "Liberation",
          description: "The ultimate spiritual goal: freedom from the cycle of birth and death (Saṃsāra) and the suffering associated with it. Achieved through the realization of the Self’s true nature and its connection to Brahman."
        },
        {
          name: "Māyā",
          meaning: "Cosmic Illusion / Creative Power",
          description: "A key concept, especially in Advaita Vedānta, referring to the cosmic power that veils the true nature of Brahman and projects the empirical world of multiplicity and duality. In other schools, it can mean the creative power of God."
        },
        {
          name: "Karma & Saṃsāra",
          meaning: "Action & Cycle of Rebirth",
          description: "The law of cause and effect where actions (karma) lead to consequences, binding the soul to the cycle of repeated birth and death (Saṃsāra). Liberation transcends this cycle."
        },
        {
          name: "Jñāna, Bhakti, Karma Yoga",
          meaning: "Paths to Liberation",
          description: "The three primary paths emphasized in Vedānta for attaining Mokṣa: Jñāna Yoga (path of knowledge), Bhakti Yoga (path of devotion), and Karma Yoga (path of selfless action). Different schools may prioritize one over others or advocate their synthesis."
        }
      ]
    },
    epistemology: {
      emphasis: "Śabda (scriptural testimony, primarily the Upaniṣads as interpreted by the Brahma Sūtras and Bhagavad Gītā) is considered the highest and most direct means of knowledge (pramāṇa) for understanding metaphysical truths like Brahman and Ātman, which are beyond sensory perception and inference alone.",
      pramāṇas: [
        { name: "Śabda", meaning: "Scriptural Testimony", description: "Authoritative verbal testimony, especially the Vedas (Upaniṣads), considered the primary source for knowledge of Brahman." },
        { name: "Anumāna", meaning: "Inference", description: "Logical reasoning, often used to support scriptural truths and refute opposing views." },
        { name: "Pratyakṣa", meaning: "Perception", description: "Direct sensory experience and intuitive apprehension, considered valid for empirical knowledge but limited for understanding ultimate reality." },
        // Other pramāṇas like Upamāna (comparison), Arthāpatti (postulation), and Anupalabdhi (non-apprehension) are accepted by some Vedānta schools.
      ]
    },
    liberation: {
      goal: "Mokṣa: The realization of the Ātman's true nature and its ultimate relationship with Brahman, leading to freedom from Saṃsāra.",
      means: "Primarily through Jñāna (discriminative knowledge of Self and Brahman) in Advaita; through Bhakti (loving devotion to God) in Viśiṣṭādvaita and Dvaita, often combined with Karma (selfless action) and Jñāna. The specific means and nature of liberation vary among sub-schools."
    },
    influence: {
      onOtherSchools: [
        "Represents the philosophical culmination of Vedic thought and has deeply influenced nearly all subsequent Hindu philosophies and spiritual traditions.",
        "Bhakti movements across India (e.g., Alwars, Nayanmars, Gaudiya Vaishnavism, Warkari Sampradaya) are largely rooted in Vedāntic (especially Viśiṣṭādvaita and Dvaita) interpretations of devotion to a personal God.",
        "Modern Hindu spiritual teachers and movements (e.g., Swami Vivekananda, Ramana Maharshi, Sri Aurobindo, Paramahansa Yogananda) have drawn extensively from Vedānta, popularizing its teachings globally.",
        "Most classical Yoga traditions, particularly those emphasizing meditation and self-realization, integrate Vedāntic metaphysics (especially Advaita) as their philosophical basis."
      ],
      globalImpact: "Vedānta philosophy has been extensively studied and embraced by seekers, scholars, and spiritual movements worldwide for its profound metaphysics, ethics, and universal insights on consciousness and reality. It has contributed to interfaith dialogue and cross-cultural understanding.",
      importance: "Vedānta is arguably the most influential and widely studied school of Indian philosophy, shaping the core tenets of modern Hinduism and offering timeless wisdom applicable to contemporary life."
    },
    commentariesAndWorks: [
        { author: "Adi Shankaracharya", work: "Brahma Sūtra Bhāṣya, commentaries on principal Upaniṣads and Bhagavad Gītā", description: "Definitive commentaries establishing Advaita Vedānta." },
        { author: "Ramanujacharya", work: "Śrī Bhāṣya (commentary on Brahma Sūtras), Gītā Bhāṣya", description: "Key commentaries establishing Viśiṣṭādvaita Vedānta." },
        { author: "Madhvacharya", work: "Pūrṇaprajña Bhāṣya (commentary on Brahma Sūtras), commentaries on Upaniṣads and Gītā", description: "Foundational commentaries for Dvaita Vedānta." },
        { author: "Bādarāyaṇa", work: "Brahma Sūtras", description: "The foundational aphoristic text itself, which all major Vedānta āchāryas commented upon."}
    ],
    notableThinkers: [
        { name: "Bādarāyaṇa", description: "Compiler of the Brahma Sūtras, the foundational text of Vedānta." },
        { name: "Gauḍapāda", description: "Early Advaita philosopher, considered a preceptor to Shankaracharya's lineage." },
        { name: "Adi Shankaracharya", description: "The foremost proponent of Advaita Vedānta, who consolidated its philosophy and established monastic orders." },
        { name: "Ramanujacharya", description: "The chief proponent of Viśiṣṭādvaita Vedānta, emphasizing Bhakti to a personal God (Narayana)." },
        { name: "Madhvacharya", description: "The founder of Dvaita Vedānta, strongly emphasizing dualism between God, souls, and matter." },
        { name: "Vallabhacharya", description: "Founder of Śuddhādvaita (Pure Non-dualism) Vedānta." },
        { name: "Nimbārkāchārya", description: "Proponent of Dvaitādvaita (Dualistic Non-dualism) or Bhedābheda." },
        { name: "Chaitanya Mahaprabhu", description: "Promulgator of Achintya Bhedābheda Vedānta and the Gaudiya Vaishnavism tradition." },
        { name: "Swami Vivekananda", description: "A key figure in the revival of Hinduism and introduction of Vedānta (particularly Advaita) to the Western world in the late 19th century." },
        { name: "Ramana Maharshi", description: "A renowned 20th-century sage whose teachings centered on Advaitic self-inquiry (Ātma-vichāra)." },
        { name: "Sri Aurobindo", description: "Philosopher, yogi, and spiritual leader who developed Integral Yoga, a synthesis rooted in Vedānta." }
    ],
    modernRelevance: {
      uses: [
        "Provides profound frameworks for self-inquiry, spiritual development, and understanding consciousness (especially Advaita’s Jñāna Yoga and neti-neti approach).",
        "Forms the philosophical basis for various devotional practices (bhakti yoga), including chanting, prayer, and worship of personal deities (prominent in Viśiṣṭādvaita, Dvaita, and other Bhakti schools).",
        "Its ethical teachings on Dharma, non-violence, and selfless service (Karma Yoga) offer guidance for living a meaningful life.",
        "Influences modern psychology, particularly transpersonal psychology, consciousness studies, and interfaith dialogue due to its universal and experiential approach."
      ],
      academicInterest: "Vedānta’s diverse schools and their interpretations of concepts like Brahman, Ātman, Māyā, and Mokṣa continue to be a major area of study in Indology, comparative philosophy, religious studies, and philosophy of mind. Its ideas on inner divinity, universal consciousness, and the harmony of religions appeal to a broad spectrum of philosophical and scientific audiences.",
      integration: "Its principles are integrated into various meditation techniques, spiritual retreats, and educational programs worldwide aimed at personal growth and well-being."
    },
    schoolsOfVedānta: [
      {
        name: "Advaita Vedānta",
        founder: "Adi Shankaracharya (consolidator)",
        coreView: "Non-dualism (A-dvaita): Ātman (the individual Self) is identical to Brahman (the Ultimate Reality). The perceived multiplicity of the world is due to Māyā (illusion). Liberation (Mokṣa) is attained through Jñāna (knowledge) of this non-dual identity.",
        keyConcepts: ["Nirguṇa Brahman (attributeless Absolute)", "Māyā (cosmic illusion)", "Adhyāsa (superimposition)", "Jñāna Yoga (path of knowledge)"],
        viewOnGod: "Brahman is the sole, impersonal reality. Īśvara (personal God) is a lower manifestation of Brahman within Māyā, useful for devotional practices as a preliminary step."
      },
      {
        name: "Viśiṣṭādvaita Vedānta",
        founder: "Ramanujacharya",
        coreView: "Qualified Non-dualism (Viśiṣṭa-advaita): Brahman (identified with Vishnu/Narayana) is the sole reality but is qualified by sentient souls (cit) and insentient matter (acit) which form Its body. Ātman is distinct from but inseparably related to Brahman. Liberation is achieved through loving devotion (Bhakti) and divine grace.",
        keyConcepts: ["Saguṇa Brahman (attributeful God)", "Bhakti Yoga (path of devotion)", "Śarīra-Śarīrī-Bhāva (body-soul relationship between world/souls and God)", "Prapatti (surrender)"],
        viewOnGod: "Brahman is a personal God (Vishnu/Narayana) with infinite auspicious attributes. The world and individual souls are real and eternally exist as modes or attributes of God."
      },
      {
        name: "Dvaita Vedānta",
        founder: "Madhvacharya",
        coreView: "Dualism (Dvaita): Brahman (identified with Vishnu) is the independent, supreme reality, eternally and fundamentally different from individual souls (jīvas) and the material world (jagat). Liberation comes through Bhakti, divine grace (prasāda), and direct perception of God.",
        keyConcepts: ["Pañca-bheda (five-fold eternal differences: God-soul, God-matter, soul-soul, soul-matter, matter-matter)", "Realism (reality of the world and individual souls)", "Tāratamya (gradation among souls)"],
        viewOnGod: "God (Vishnu) is the supreme and independent reality, possessing infinite auspicious qualities. Souls and the universe are dependent realities, eternally distinct from God."
      },
      {
        name: "Dvaitādvaita Vedānta (or Bhedābheda)",
        founder: "Nimbārkāchārya",
        coreView: "Dualistic Non-dualism: Brahman, souls, and the world are simultaneously different and non-different. Souls and matter are dependent on Brahman yet retain their distinct identities. Bhakti to Krishna and Radha is central.",
        keyConcepts: ["Svābhāvika-bhedābheda (natural difference and non-difference)", "Simultaneous identity and difference", "Devotion to Radha-Krishna"],
        viewOnGod: "Brahman is identified with Krishna, who is both transcendent and immanent, different from and non-different from souls and the world."
      },
      {
        name: "Śuddhādvaita Vedānta",
        founder: "Vallabhacharya",
        coreView: "Pure Non-dualism: The entire universe, both souls and matter, is real and is a manifestation of Brahman (identified with Krishna), untainted by Māyā. Liberation is through selfless devotion (Puṣṭi Bhakti) and divine grace.",
        keyConcepts: ["Puṣṭimārga (Path of Grace)", "Brahman as Krishna", "Real manifestation (not illusory)"],
        viewOnGod: "Brahman is Krishna, the embodiment of Satchidananda (existence-consciousness-bliss). The world is His pure, real play (Līlā)."
      },
      {
        name: "Achintya Bhedābheda Vedānta",
        founder: "Chaitanya Mahaprabhu (inspirer)",
        coreView: "Inconceivable Simultaneous Oneness and Difference: The relationship between God (Krishna), souls, and the world is one of inconceivable, simultaneous oneness and difference. Emphasizes ecstatic devotion (Prema Bhakti) to Krishna.",
        keyConcepts: ["Achintya Shakti (inconceivable power of God)", "Prema Bhakti (ecstatic love for God)", "Gaudiya Vaishnavism"],
        viewOnGod: "Krishna is the Supreme Personality of Godhead, and souls are His eternal parts and parcels, simultaneously one with and different from Him in an inconceivable way."
      }
    ]
  }
];

export function getSchoolBySlug(slug: string): SchoolDetail | undefined {
  return detailedSchoolsData.find(school => school.slug === slug);
}

// To generate static paths for Next.js
export function getAllSchoolSlugs() {
  return detailedSchoolsData.map(school => ({
    params: {
      slug: school.slug,
    },
  }));
}

