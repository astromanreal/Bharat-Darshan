
import type { LucideIcon } from "lucide-react";
import { BookHeart, Zap, Sparkles, UserCircle, Globe, Repeat, EyeOff, Heart, Lightbulb, Sprout, Award, Filter, GitCompareArrows, Speaker, Layers, Pyramid, Orbit, ShieldAlert, Flame, Activity, Anchor, Scale, Link as LinkIcon, Network } from "lucide-react";

export type DetailedConceptExample = string | {
  phrase?: string; // For Samsara, Maya, Jnana
  meaning?: string; // Optional, as some complex examples have sub-definitions
  // For Mantra
  mantra?: string;
  purpose?: string;
  // For Purushartha
  Dharma?: { definition: string; example: string };
  Artha?: { definition: string; example: string };
  Kāma?: { definition: string; example: string };
  Moksha?: { definition: string; example: string };
   // For Yoga
  BhaktiYoga?: { description: string; symbol: string };
  KarmaYoga?: { description: string; symbol: string };
  RajaYoga?: { description: string; symbol: string };
  JnanaYoga?: { description: string; symbol: string };
  // For Tattvas example
  TattvaInShaivism?: { tattva: string; meaning: string; role: string; };
  TattvaInVedanta?: { tattva: string; meaning: string; role: string; };
  // For Ishvara
  IshvaraSpecific?: { phrase: string; meaning: string; };
   // For Chakras
  balancedChakraExample?: { chakra: string; meaning: string; role: string; };
  imbalancedChakraExample?: { chakra: string; meaning: string; role: string; };
  // For Tapas
  BhagavadGitaExample?: {
    context: string;
    significance: string;
    exampleVerse: string;
  };
  // For Shraddha
  BhagavadGitaReference?: {
    context: string;
    significance: string;
    keyMessage: string;
  };
  // For VivekaVairagya
  spiritualPractice?: {
    meditation: string;
    renunciation?: string;
  };
};

export type ChakraDefinition = {
  name: string;
  location: string;
  associatedColor: string;
  associatedElement: string;
  qualities: string;
  imbalances: string;
  balancedState: string;
  yogaPractices: string;
};

export type IshvaraInterpretation = {
  interpretation: string;
  qualities: string[];
  relationToAtman?: string;
  relationToShakti?: string;
  relationToAvatars?: string;
  exampleContext: string;
  exampleSignificance: string;
  exampleRituals?: string;
};

export type RelatedConceptLink = {
  slug: string;
  name: string; // Name of the related concept for display
  relationship: string; // Description of how they are related
};

export type DetailedConcept = {
  slug: string;
  name: string; 
  title?: string; // Optional title for detailed page header, if different from name
  meaning: string | { [key: string]: string; };
  philosophicalSignificance: string | { [key: string]: string; };
  practicalApplication: string | { [key: string]: string; };
  example: DetailedConceptExample; 
  icon: LucideIcon;
  interconnectedWisdomSpecific?: string;
  holisticUnderstandingSpecific?: string;
  spiritualGrowthSpecific?: string;
  relatedConcepts?: RelatedConceptLink[];
  coreElements?: { // For Mantra
    Types: Array<{ name: string; description: string; }>;
    ChantingMethods: string[];
    Uses: string[];
  };
  types?: { // For Gunas
      Sattva: { definition: string; attributes: string[]; examples: string[]; };
      Rajas: { definition: string; attributes: string[]; examples: string[]; };
      Tamas: { definition: string; attributes: string[]; examples: string[]; };
  };
  prakritiPurushaCoreConcepts?: { // For Prakriti-Purusha
      Prakriti: { definition: string; attributes: string[]; evolutes: string[]; };
      Purusha: { definition: string; attributes: string[]; role: string; };
  };
  tattvaCoreConcepts?: { // For Tattvas
    ShaivaTattvas: { definition: string; categories: Array<{ name: string; description: string; }> };
    VedanticTattvas: { definition: string; categories: Array<{ name: string; description: string; }> };
  };
  chakraDefinitions?: { // For Chakras (main details for each chakra)
    RootChakra: ChakraDefinition;
    SacralChakra: ChakraDefinition;
    SolarPlexusChakra: ChakraDefinition;
    HeartChakra: ChakraDefinition;
    ThroatChakra: ChakraDefinition;
    ThirdEyeChakra: ChakraDefinition;
    CrownChakra: ChakraDefinition;
  };
  ishvaraInterpretations?: { // For Ishvara (different interpretations)
    Vedanta: IshvaraInterpretation;
    Shaivism: IshvaraInterpretation;
    Vaishnavism: IshvaraInterpretation;
  };
  tapasCoreConcepts?: { // For Tapas
    roleInYoga: {
      interpretation: string;
      qualities: string[];
      relationToKarma: string;
    };
    connectionToSadhana: {
      interpretation: string;
      qualities: string[];
      relationToBhakti: string;
    };
  };
  shraddhaCoreConcepts?: { // For Shraddha
    RoleInBhakti: {
      interpretation: string;
      qualities: string[];
      relationToGrace: string;
    };
    RoleInJnanaYoga: {
      interpretation: string;
      qualities: string[];
      relationToViveka: string;
    };
  };
  vivekaVairagyaCoreConcepts?: { // For Viveka & Vairagya
    vivekaExamples: string[];
    vairagyaExamples: string[];
    scripturalBasis: { source: string; quote: string; };
  };
};

export const detailedConceptsData: DetailedConcept[] = [
  {
    slug: "dharma",
    name: "Dharma (धर्म)",
    meaning: "Dharma refers to the cosmic order, righteousness, duty, and the law that governs the universe. It encompasses the moral, ethical, and social guidelines one must follow to live harmoniously within the world.",
    philosophicalSignificance: "Dharma is the fundamental principle that supports the functioning of the cosmos and the individual. It is often described as the path of righteousness and moral responsibility. Each individual has their own dharma based on their life stage, role in society, and nature.",
    practicalApplication: "Dharma calls for living in a manner that aligns with the natural order and fulfills one's duties, whether in relation to family, community, or the universe.",
    example: "Arjuna's internal conflict in the Bhagavad Gita about going to war is a reflection of dharma. He struggles with his personal duty versus his emotional ties, a struggle which is resolved through Krishna’s guidance on aligning with higher duty.",
    icon: BookHeart,
    relatedConcepts: [
      { slug: "karma", name: "Karma", relationship: "actions aligned with Dharma generate positive Karma." },
      { slug: "purushartha", name: "Purushartha", relationship: "is one of the four aims of life, providing an ethical foundation." },
      { slug: "moksha", name: "Moksha", relationship: "living a life of Dharma contributes to the path towards." }
    ]
  },
  {
    slug: "karma",
    name: "Karma (कर्म)",
    meaning: "Karma is the principle of cause and effect, asserting that every action has consequences. It can be categorized into three types: Sanchita (accumulated past actions), Prarabdha (current life's actions), and Agami (future actions).",
    philosophicalSignificance: "Karma explains that human actions, whether good or bad, shape our future experiences. It emphasizes responsibility and the need for conscious, moral action.",
    practicalApplication: "Understanding karma helps people to take responsibility for their actions and their impact on themselves and the world. Practicing good karma involves performing selfless actions that contribute to the well-being of others.",
    example: "The Bhagavad Gita teaches that one should perform their duties selflessly, without attachment to the results of actions. This is known as Nishkama Karma.",
    icon: Zap,
    relatedConcepts: [
      { slug: "samsara", name: "Samsāra", relationship: "is the driving force behind the cycle of." },
      { slug: "moksha", name: "Moksha", relationship: "is overcome through understanding and right action to achieve." },
      { slug: "dharma", name: "Dharma", relationship: "actions aligned with Dharma generate positive Karma." },
      { slug: "gunas", name: "Gunas", relationship: "influence the nature of actions and their resultant Karma." }
    ]
  },
  {
    slug: "moksha",
    name: "Moksha (मोक्ष)",
    meaning: "Moksha is the ultimate liberation from the cycle of birth, death, and rebirth (samsara). It is the state of freedom from all limitations, desires, and material attachments, leading to the realization of the Self and Brahman (the supreme reality).",
    philosophicalSignificance: "Moksha represents the ultimate goal of human existence, the end of suffering, and the realization of one's unity with the Divine. It is not a place but a state of being in which the soul is freed from worldly illusions.",
    practicalApplication: "To achieve Moksha, one must transcend the ego, attachments, and material desires, and realize their divine nature through meditation, self-inquiry, and spiritual wisdom.",
    example: "In the Bhagavad Gita, Krishna explains to Arjuna that by following the path of devotion, knowledge, and disciplined action, one can ultimately achieve Moksha and realize their oneness with the Divine.",
    icon: Sparkles,
    relatedConcepts: [
      { slug: "samsara", name: "Samsāra", relationship: "is liberation from the cycle of." },
      { slug: "atman", name: "Ātman", relationship: "involves the realization of the true nature of." },
      { slug: "brahman", name: "Brahman", relationship: "is often described as union with or realization of." },
      { slug: "karma", name: "Karma", relationship: "is achieved by transcending the bonds of." },
      { slug: "jnana", name: "Jnana", relationship: "is a primary path towards achieving." },
      { slug: "bhakti", name: "Bhakti", relationship: "can lead to, through divine grace." },
      { slug: "yoga-concept", name: "Yoga", relationship: "provides practical paths to attain." }
    ]
  },
  {
    slug: "atman",
    name: "Ātman (आत्मन्)",
    meaning: "Ātman refers to the individual soul or Self, the eternal, unchanging essence of a person that is distinct from the body and mind. It is the true identity of an individual, beyond the physical and mental realms.",
    philosophicalSignificance: "The realization of the Ātman is central to spiritual liberation. It is the understanding that I am not my body, nor my thoughts, but I am the eternal, unchanging Self. The discovery of Ātman is key to understanding one's true nature.",
    practicalApplication: "Meditation, introspection, and philosophical inquiry are means to experience and realize the Ātman. By recognizing the divine essence within, individuals can move beyond the ego and worldly distractions.",
    example: "In the Upanishads, it is stated that the Ātman and Brahman are one and the same, and understanding this unity is key to attaining Moksha.",
    icon: UserCircle,
    relatedConcepts: [
      { slug: "brahman", name: "Brahman", relationship: "is often identified with, or seen as an aspect of." },
      { slug: "moksha", name: "Moksha", relationship: "realization of Ātman is key to achieving." },
      { slug: "samsara", name: "Samsāra", relationship: "is the entity believed to be caught in the cycle of." },
      { slug: "jnana", name: "Jnana", relationship: "is the knowledge of the true nature of." }
    ]
  },
  {
    slug: "brahman",
    name: "Brahman (ब्रह्मन्)",
    meaning: "Brahman is the ultimate, unchanging reality that is the source of everything in the universe. It is formless, infinite, and transcendent, yet immanent in all things. It is the supreme, all-pervading consciousness that exists beyond time, space, and causality.",
    philosophicalSignificance: "Brahman is the highest truth, the ground of all being, and the source from which everything emanates. All creation, from the smallest particle to the vast cosmos, is an expression of Brahman. Understanding Brahman is essential to understanding the unity of all existence.",
    practicalApplication: "The path to realizing Brahman involves self-inquiry, meditation, and devotion, which lead to a direct experience of this universal consciousness.",
    example: "The phrase “Tat Tvam Asi” (That Thou Art) from the Upanishads teaches that the individual soul (Ātman) is not separate from Brahman. Realizing this oneness is the essence of spiritual liberation.",
    icon: Globe,
    relatedConcepts: [
      { slug: "atman", name: "Ātman", relationship: "is the individual counterpart to, or identical with." },
      { slug: "maya", name: "Māyā", relationship: "is the power that veils the true nature of." },
      { slug: "moksha", name: "Moksha", relationship: "is ultimate realization or union with." },
      { slug: "ishvara", name: "Ishvara", relationship: "can be considered the Saguna (with attributes) aspect of." }
    ]
  },
  {
    slug: "samsara",
    name: "Samsāra (संसार)",
    meaning: "Samsāra refers to the endless cycle of birth, death, and rebirth that all living beings undergo. It is driven by karma (the law of cause and effect) and is characterized by suffering (dukkha) and impermanence. The cycle continues until one achieves liberation (moksha).",
    philosophicalSignificance: "Samsāra represents the material world, governed by attachment, desires, and ignorance. It is the state of being trapped in the cycle of reincarnation, constantly experiencing suffering due to the unfulfilled desires of the body and mind. The ultimate goal in many Indian spiritual traditions is to break free from Samsāra and attain Moksha, liberation from the cycle of birth and death.",
    practicalApplication: "In practical terms, understanding Samsāra involves recognizing the impermanent and transient nature of life. It encourages one to focus on detachment from material desires, cultivate inner peace, and seek higher truths through spiritual practices such as meditation, self-inquiry, and devotion.",
    example: {
      phrase: "Tat Tvam Asi",
      meaning: "That Thou Art – This teaching from the Upanishads reveals that the individual soul (Ātman) is not separate from the ultimate reality (Brahman), and liberation from Samsāra is attained when one recognizes this oneness."
    },
    icon: Repeat,
    interconnectedWisdomSpecific: "Samsāra is closely related to the concepts of Karma (the consequences of actions) and Moksha (liberation). By understanding that one's actions directly affect their future in the cycle of birth and rebirth, one can take responsibility for their choices and pursue a path to Moksha, thereby breaking free from the cycle of Samsāra.",
    holisticUnderstandingSpecific: "Understanding Samsāra brings insight into the human condition: the suffering caused by attachment to the material world, the ignorance of the eternal truth, and the constant cycle of rebirth. It teaches the importance of spiritual awakening and the need to transcend worldly attachments to reach a higher state of consciousness.",
    spiritualGrowthSpecific: "By recognizing the transient nature of life and focusing on spiritual goals such as self-realization and devotion to the Divine, individuals can transcend the limitations of Samsāra and begin their journey toward Moksha. Detachment, ethical living, and selfless actions help reduce the influence of past karma and advance towards liberation.",
    relatedConcepts: [
      { slug: "karma", name: "Karma", relationship: "is the driving force of." },
      { slug: "moksha", name: "Moksha", relationship: "is liberation from." },
      { slug: "atman", name: "Ātman", relationship: "is the entity believed to be caught in." },
      { slug: "maya", name: "Māyā", relationship: "contributes to the continuation of." }
    ]
  },
  {
    slug: "maya",
    name: "Māyā (माया)",
    meaning: "Māyā refers to the cosmic illusion or ignorance that veils the true nature of reality. It is the force that causes living beings to perceive the world as real and permanent when, in fact, it is transient and illusory. Māyā creates the distinction between the eternal, unchanging truth (Brahman) and the temporary, ever-changing world.",
    philosophicalSignificance: "Māyā is central to the philosophical teachings of Advaita Vedānta and other Indian spiritual traditions. It is the veil of illusion that prevents one from recognizing their true self (Ātman) and the ultimate reality (Brahman). Māyā makes us perceive the world through the lens of ego, attachment, and duality, which obscures the oneness of existence. Overcoming Māyā is essential to achieving spiritual enlightenment and liberation (moksha).",
    practicalApplication: "In practical terms, overcoming Māyā involves recognizing the illusory nature of worldly attachments and desires. By cultivating awareness, mindfulness, and self-inquiry, one can gradually see through the veil of Māyā and realize the truth of their divine nature. Meditation, devotion, and study of sacred texts help clear the ignorance that Māyā creates.",
    example: {
      phrase: "Neti Neti",
      meaning: "This phrase, meaning 'Not this, not this,' is used in Vedantic teachings to point to the ultimate truth by negating the false identification with the temporary world and realizing the formless, eternal essence (Brahman)."
    },
    icon: EyeOff,
    interconnectedWisdomSpecific: "Māyā is intricately connected to the concepts of Ātman, Brahman, and Samsāra. It causes the illusion of separateness from Brahman, trapping souls in the cycle of Samsāra (birth, death, and rebirth). The ultimate goal is to see beyond Māyā and realize that the true self (Ātman) is one with the eternal, unchanging Brahman, leading to liberation (moksha).",
    holisticUnderstandingSpecific: "Understanding Māyā leads to a deeper realization of the nature of reality and the human condition. It shows that the world, as perceived through the senses and mind, is not the ultimate truth, but rather a reflection of deeper spiritual truths. By transcending Māyā, one can experience the unity of all existence and the oneness of the self with the cosmos.",
    spiritualGrowthSpecific: "By developing spiritual discernment and the ability to see through the illusions of Māyā, one can break free from the attachments and ego-driven desires that bind them to the cycle of Samsāra. Embracing the path of wisdom (jnana yoga), devotion (bhakti yoga), and disciplined practice leads to the realization of one's true nature and liberation from the illusion of Māyā.",
    relatedConcepts: [
      { slug: "brahman", name: "Brahman", relationship: "veils the true nature of." },
      { slug: "samsara", name: "Samsāra", relationship: "is perpetuated by." },
      { slug: "jnana", name: "Jnana", relationship: "is the knowledge that pierces through." },
      { slug: "viveka-vairagya", name: "Viveka & Vairagya", relationship: "helps to discern and detach from." }
    ]
  },
  {
    slug: "bhakti",
    name: "Bhakti (भक्ति)",
    meaning: "Bhakti refers to devotion, love, and surrender to the Divine. It is the path of cultivating a personal relationship with God, where the devotee expresses deep affection, gratitude, and reverence. Bhakti transcends rituals and external practices, focusing on heartfelt connection and emotional attachment to the Divine presence.",
    philosophicalSignificance: "In many Indian spiritual traditions, especially within Bhakti Yoga, devotion to the Divine is considered a powerful means of liberation. Bhakti emphasizes that God is not an abstract concept but a personal, loving entity who responds to the devotee's love and devotion. This path teaches that through intense love and surrender to God, one can transcend the ego, overcome attachments, and realize spiritual freedom.",
    practicalApplication: "Practicing Bhakti involves cultivating love for the Divine through prayer, singing hymns, chanting mantras, and engaging in devotional practices. This path requires a sincere heart, selfless devotion, and an unwavering commitment to the Divine. It often includes engaging in acts of kindness, surrendering personal desires, and seeing the Divine in every aspect of life.",
    example: {
      phrase: "Jai Shri Ram",
      meaning: "A common chant in Bhakti traditions, invoking Lord Rama’s name as a declaration of surrender and devotion. It symbolizes the power of the divine name and the devotee's love and trust in God."
    },
    icon: Heart,
    interconnectedWisdomSpecific: "Bhakti is closely connected to concepts like Surrender (Ātman's realization through Divine will), Love (Prema), and Grace (Kripa). The love for the Divine fosters a sense of unity with the universe, and through surrender, the devotee experiences God's grace. Bhakti serves as a bridge between the human soul and the Divine, facilitating direct connection with the transcendent reality (Brahman).",
    holisticUnderstandingSpecific: "The practice of Bhakti provides a holistic approach to spiritual life, wherein love and devotion are central. Bhakti transforms the mundane aspects of life into a sacred offering to the Divine. It is not merely about ritualistic worship but about embodying love and compassion in every action, thought, and word. Bhakti fosters inner peace, emotional balance, and spiritual clarity.",
    spiritualGrowthSpecific: "By dedicating one's life to devotion and love for the Divine, the practitioner experiences profound spiritual growth. Bhakti teaches humility, selflessness, and the cultivation of pure love. As the heart becomes free from ego and worldly attachments, the soul aligns with the Divine will. The ultimate goal of Bhakti is to attain moksha (liberation) by merging with the Divine presence through love and surrender.",
    relatedConcepts: [
      { slug: "ishvara", name: "Ishvara", relationship: "is often directed towards a personal form of." },
      { slug: "yoga-concept", name: "Yoga", relationship: "is one of the primary paths (Bhakti Yoga) within." },
      { slug: "moksha", name: "Moksha", relationship: "is a means to attain, through divine grace." },
      { slug: "shraddha", name: "Shraddha", relationship: "is the foundational faith for." }
    ]
  },
  {
    slug: "jnana",
    name: "Jnana (ज्ञान)",
    meaning: "Jnana refers to spiritual knowledge and wisdom that leads to self-realization. It is the path of intellectual understanding, self-inquiry, and discrimination (viveka) between the real and the unreal, the eternal and the transient. Jnana involves recognizing the true nature of the self (Ātman) and its oneness with Brahman (the Supreme Reality).",
    philosophicalSignificance: "Jnana is one of the primary paths to liberation in Indian spiritual traditions, particularly in Advaita Vedānta. It emphasizes the realization that the individual soul (Ātman) is not separate from the ultimate reality (Brahman). Through deep introspection and self-inquiry, the seeker discerns the illusory nature of the material world (Māyā) and recognizes the unchanging, eternal nature of the true self. This knowledge leads to liberation (moksha) from the cycle of birth and rebirth (Samsāra).",
    practicalApplication: "The practice of Jnana involves introspection, meditation, and contemplation. One engages in self-inquiry (Atma-vichara) by asking questions like 'Who am I?' and 'What is the nature of the self?' It also requires the development of discrimination (viveka) to differentiate between the eternal truth and the temporary, material world. Through study of sacred texts such as the Upanishads, Bhagavad Gita, and other Vedantic literature, practitioners deepen their understanding of the nature of existence and the self.",
    example: {
      phrase: "Tat Tvam Asi",
      meaning: "This phrase, meaning 'That Thou Art,' from the Upanishads, signifies that the individual self (Ātman) is not different from the ultimate reality (Brahman). This realization is the core of Jnana, where one sees the unity between themselves and the divine."
    },
    icon: Lightbulb,
    interconnectedWisdomSpecific: "Jnana is closely related to the concepts of Viveka (Discrimination), Māyā (Illusion), and Moksha (Liberation). The path of Jnana helps the seeker to discern the real from the unreal, seeing beyond the illusory nature of the world created by Māyā. It leads to the realization of the oneness of the individual soul (Ātman) with Brahman, resulting in liberation from Samsāra.",
    holisticUnderstandingSpecific: "Jnana offers a deep intellectual and spiritual understanding of existence. It is a path of knowledge that goes beyond surface-level perceptions and requires the practitioner to explore the nature of reality itself. By integrating Jnana into daily life, one learns to live with clarity, discernment, and detachment from the fleeting world, aligning with the eternal truth.",
    spiritualGrowthSpecific: "Through the practice of Jnana, individuals undergo spiritual growth by transcending ignorance (avidya) and recognizing the ultimate truth. By engaging in self-inquiry, meditation, and the study of sacred teachings, the practitioner moves closer to self-realization and liberation (moksha). Jnana fosters wisdom, inner peace, and a profound sense of unity with the divine, helping to dissolve the ego and experience the oneness of existence.",
    relatedConcepts: [
      { slug: "atman", name: "Ātman", relationship: "is the knowledge of the true nature of." },
      { slug: "brahman", name: "Brahman", relationship: "is the understanding of one's identity with." },
      { slug: "maya", name: "Māyā", relationship: "dispels the illusion of." },
      { slug: "viveka-vairagya", name: "Viveka & Vairagya", relationship: "is cultivated through, and leads to deeper." },
      { slug: "moksha", name: "Moksha", relationship: "is a direct path to achieve." }
    ]
  },
  {
    slug: "yoga-concept", 
    name: "Yoga (योग)",
    meaning: "Yoga is a disciplined spiritual practice that seeks to harmonize body, mind, and spirit. It involves various techniques and paths aimed at spiritual realization, self-awareness, and liberation (moksha). The term 'Yoga' comes from the Sanskrit root 'Yuj,' meaning 'to unite' or 'to join,' symbolizing the union of the individual self (Ātman) with the Supreme (Brahman).",
    philosophicalSignificance: "Yoga represents a holistic approach to spiritual growth, encompassing physical, mental, and spiritual practices. It is a transformative journey toward self-realization, where practitioners cultivate inner peace, mental clarity, and emotional stability. The ultimate aim of Yoga is to transcend the ego and the material world, merging with the Divine. It is both a practical system and a philosophy that empowers individuals to live in harmony with the universe.",
    practicalApplication: "Yoga is practiced through a variety of techniques, each focusing on different aspects of the self. Some of the most well-known paths of Yoga include Bhakti Yoga (the path of devotion), Karma Yoga (the path of selfless action), Raja Yoga (the path of meditation and self-control), and Jnana Yoga (the path of wisdom and knowledge). These practices can be integrated into daily life through physical postures (asanas), breathing techniques (pranayama), meditation, ethical conduct (yamas and niyamas), and self-inquiry.",
    example: {
      BhaktiYoga: {
        description: "Bhakti Yoga is the path of devotion and love for the Divine. It involves practices like chanting, prayer, and worship to foster a personal relationship with God. Through surrender and devotion, the practitioner seeks to merge with the Divine presence.",
        symbol: "The chanting of divine names or hymns, such as 'Hare Krishna' or 'Om Namah Shivaya.'"
      },
      KarmaYoga: {
        description: "Karma Yoga is the path of selfless action. It emphasizes performing duties without attachment to results, dedicating every action to the Divine. By practicing selflessness, the practitioner purifies the mind and heart, progressing toward liberation.",
        symbol: "Performing daily tasks with mindfulness, offering the fruits of actions to the Divine."
      },
      RajaYoga: {
        description: "Raja Yoga is the path of meditation and control of the mind. It involves systematic practices such as concentration (dharana), meditation (dhyana), and deep contemplation (samadhi) to master the mind and reach higher states of consciousness.",
        symbol: "The practice of meditation or deep mindfulness to control the fluctuations of the mind (chitta-vritti)."
      },
      JnanaYoga: {
        description: "Jnana Yoga is the path of wisdom and self-inquiry. It focuses on knowledge of the self (Ātman) and the ultimate reality (Brahman). By discerning the real from the unreal, practitioners attain self-realization and liberation.",
        symbol: "The inquiry into the nature of the self, asking 'Who am I?' and 'What is the ultimate truth?'"
      }
    },
    icon: Sprout,
    interconnectedWisdomSpecific: "Yoga is a holistic discipline that integrates all aspects of human life—physical, mental, emotional, and spiritual. The paths of Yoga are deeply interconnected. For example, practicing Karma Yoga (selfless action) can purify the mind for meditation in Raja Yoga, while the wisdom gained through Jnana Yoga helps deepen one's understanding in Bhakti Yoga. Together, these paths lead to self-realization and liberation (moksha).",
    holisticUnderstandingSpecific: "Yoga is more than a physical practice—it is a way of life that involves cultivating awareness, discipline, and devotion in every moment. Each path offers a unique approach to connect with the divine, transcend the limitations of the ego, and align with the higher truth. Yoga unites the body, mind, and spirit, making it an integrated approach to spiritual growth.",
    spiritualGrowthSpecific: "Yoga fosters profound spiritual growth by helping individuals develop clarity, balance, and inner peace. Through the different paths of Yoga, practitioners learn to control their thoughts, emotions, and actions, leading to a deeper understanding of their true nature and purpose. The ultimate goal of Yoga is to experience liberation (moksha) and oneness with the Divine, transcending the cycle of birth and rebirth (samsara).",
    relatedConcepts: [
      { slug: "moksha", name: "Moksha", relationship: "is a system of practices aimed at achieving." },
      { slug: "atman", name: "Ātman", relationship: "facilitates the realization of." },
      { slug: "tapas", name: "Tapas", relationship: "is an integral part of many yogic disciplines." },
      { slug: "chakras", name: "Chakras", relationship: "many yogic practices aim to awaken and balance." }
    ]
  },
  {
    slug: "purushartha",
    name: "Purushārtha (पुरुषार्थ)",
    meaning: "Purushartha refers to the 'Four Aims of Human Life' in Indian philosophy. It represents a comprehensive framework that outlines the ideal pursuits of human existence—Dharma (righteousness and duty), Artha (material prosperity), Kāma (desire and enjoyment), and Moksha (liberation). Each aim is considered essential to a balanced, meaningful, and spiritually fulfilling life.",
    philosophicalSignificance: "The concept of Purushartha is rooted in the idea that human life is not meant to be ascetic alone or materialistic alone. It provides a holistic guide for living that embraces ethical living, material well-being, emotional fulfillment, and spiritual liberation. These four aims are not mutually exclusive but are designed to support each other in harmony.",
    practicalApplication: "Purusharthas guide the stages of human life (Ashramas) and individual choices. A person begins life focused on Dharma and Artha, explores Kāma in youth and family life, and ultimately seeks Moksha in later life. Balancing these aims ensures responsible action, personal well-being, and spiritual evolution.",
    example: {
      Dharma: { definition: "Righteousness, moral values, and duties based on one's role in society and stage in life.", example: "A teacher educating students with sincerity and compassion, adhering to ethical values." },
      Artha: { definition: "Material wealth, prosperity, and resources needed for stability and progress.", example: "Earning wealth through honest means to support one’s family and contribute to society." },
      Kāma: { definition: "Pleasure, desire, and emotional fulfillment including art, music, love, and companionship.", example: "Enjoying music, love, or aesthetics within the bounds of Dharma." },
      Moksha: { definition: "Liberation from the cycle of birth and death (samsara); Self-realization.", example: "A yogi seeking self-realization through meditation and detachment from worldly desires." }
    },
    icon: Award,
    interconnectedWisdomSpecific: "The Purusharthas are interconnected and meant to be pursued in balance. Dharma provides the ethical foundation for Artha and Kāma. Without Dharma, wealth and pleasure can become destructive. Moksha is the ultimate goal, but it does not reject the other aims—instead, it transcends and integrates them in the final stage of spiritual evolution.",
    holisticUnderstandingSpecific: "Purushartha encourages individuals to live fully, yet mindfully. It shows that a spiritual life is not separate from the world but includes responsible action (Dharma), rightful prosperity (Artha), emotional richness (Kāma), and spiritual seeking (Moksha). When pursued in the right order and balance, these aims lead to a life of harmony, fulfillment, and liberation.",
    spiritualGrowthSpecific: "By integrating the four aims of life, an individual evolves spiritually while remaining grounded in worldly responsibilities. Dharma ensures integrity, Artha provides security, Kāma offers joy, and Moksha leads to transcendence. This integrated pursuit fosters a complete and enlightened life.",
    relatedConcepts: [
      { slug: "dharma", name: "Dharma", relationship: "is the foundational aim guiding the pursuit of others." },
      { slug: "moksha", name: "Moksha", relationship: "is the ultimate aim among the four." },
      { slug: "karma", name: "Karma", relationship: "actions performed in pursuit of Purusharthas generate." }
    ]
  },
  {
    slug: "gunas",
    name: "Gunas (गुण)",
    meaning: "Gunas are the three fundamental qualities or tendencies inherent in all of nature (Prakriti): Sattva (purity, harmony), Rajas (passion, activity), and Tamas (inertia, ignorance). These forces interact to determine the characteristics of mind, behavior, and experiences.",
    philosophicalSignificance: "Originating from Samkhya philosophy, the Gunas explain creation, transformation, and dissolution. Everything in the material universe is a blend of these qualities. Spiritual evolution involves cultivating Sattva, moderating Rajas, and overcoming Tamas to transcend all three.",
    practicalApplication: "Awareness of Gunas helps understand moods and decisions. Diet, environment, and thoughts influence Guna dominance. Choosing Sattvic elements aids inner balance and spiritual awakening.",
    example: "A compassionate person exhibits Sattva, a driven entrepreneur displays Rajas, and someone prone to lethargy shows Tamas. These qualities influence actions and perceptions.",
    icon: Filter,
    types: {
        Sattva: { definition: "Purity, harmony, balance, light, and wisdom. It promotes spiritual awareness, peace, and joy.", attributes: ["Truthfulness", "Compassion", "Detachment", "Discipline", "Clarity of thought"], examples: ["Practicing compassion and meditation.", "Selfless service.", "Fresh, wholesome food."] },
        Rajas: { definition: "Activity, passion, desire, movement, and restlessness. It binds through attachment to outcomes and pleasures.", attributes: ["Ambition", "Excitement", "Anxiety", "Greed", "Drive"], examples: ["Striving for success with agitation.", "Craving sensory pleasures.", "Spicy, stimulating food."] },
        Tamas: { definition: "Inertia, darkness, ignorance, lethargy, and delusion. It obscures clarity and promotes confusion and attachment.", attributes: ["Laziness", "Depression", "Fear", "Ignorance", "Delusion"], examples: ["Indulging in oversleeping or escapism.", "Neglecting responsibilities.", "Stale, overcooked food."] }
    },
    interconnectedWisdomSpecific: "Though all three Gunas exist in everyone, their proportion varies. Even spiritual practices are influenced by Gunas—e.g., Sattvic charity is selfless, Rajasic expects returns, Tamasic is careless. Transcending Gunas via Bhakti, Jnana, or renunciation leads to Moksha.",
    holisticUnderstandingSpecific: "Understanding Guna interplay is key to self-mastery. By observing tendencies, one can refine behavior. The Bhagavad Gita explains how Gunas influence faith, food, actions, and destiny.",
    spiritualGrowthSpecific: "The spiritual path involves moving from Tamas to Rajas, then to Sattva. Liberation (Trigunatita) lies beyond Sattva, where the soul is untouched by Prakriti’s fluctuations and abides in pure consciousness (Brahman).",
    relatedConcepts: [
      { slug: "prakriti-purusha", name: "Prakriti & Purusha", relationship: "Prakriti is composed of the three Gunas." },
      { slug: "karma", name: "Karma", relationship: "the nature of actions (Karma) is influenced by the dominant Guna." },
      { slug: "yoga-concept", name: "Yoga", relationship: "practices aim to cultivate Sattva and transcend the Gunas." }
    ]
  },
  {
    slug: "prakriti-purusha",
    title: "Prakriti & Purusha (प्रकृति और पुरुष)",
    name: "Prakriti & Purusha",
    meaning: "In Samkhya philosophy, Prakriti represents the primal matter or nature — the dynamic, unconscious source of the material world. Purusha is the eternal, unchanging, conscious spirit or self. The interplay of these two leads to the creation of the universe. Liberation (moksha) is achieved by realizing the difference between the two.",
    philosophicalSignificance: "Prakriti and Purusha form the dual foundations of Samkhya metaphysics. Prakriti is composed of the three Gunas — Sattva, Rajas, and Tamas — and evolves into the manifest world. Purusha is pure awareness, uninvolved in action or change. The bondage of the soul arises when Purusha mistakenly identifies with Prakriti. True knowledge comes from discerning this distinction.",
    practicalApplication: "This teaching encourages spiritual seekers to practice introspection and discernment (viveka). One learns to distinguish between the ever-changing mind-body complex (Prakriti) and the inner witness (Purusha). Meditation, self-awareness, and dispassion help in breaking the identification with Prakriti and realizing the true Self.",
    example: "A simple analogy is that of a dancer (Prakriti) and the spectator (Purusha). The dance continues only as long as the spectator watches. Once the spectator (Purusha) recognizes that he is separate, the dance loses its hold — symbolizing liberation.",
    icon: GitCompareArrows,
    prakritiPurushaCoreConcepts: { 
        Prakriti: { definition: "The primordial, unconscious material principle. It is dynamic and ever-changing, and includes everything from the body and mind to the cosmos.", attributes: ["Mutable", "Composed of Gunas", "Source of material existence"], evolutes: ["Mahat (cosmic intelligence)", "Ahamkara (ego)", "Manas (mind)", "Five senses (indriyas)", "Five motor organs", "Five elements (earth, water, fire, air, space)"] },
        Purusha: { definition: "The pure, passive, eternal consciousness or Self. It is formless, unchanging, and distinct from the physical and mental realms.", attributes: ["Immutable", "Witness", "Non-doer", "Eternal", "Infinite"], role: "Simply observes without interacting or changing. Ignorance leads to its identification with Prakriti." }
    },
    interconnectedWisdomSpecific: "This dualism aligns with broader Indian philosophy where the world is seen as a play (lila) and realization comes from understanding one's true identity. The concept deeply connects with ideas of Ātman, Gunas, Karma, and Moksha, forming a coherent path to Self-realization.",
    holisticUnderstandingSpecific: "Seeing the world as Prakriti helps practitioners detach from impermanence and cultivate inner stillness. Understanding Purusha as the silent witness aligns one with the unchanging Self, leading to deeper awareness and peace.",
    spiritualGrowthSpecific: "Spiritual practice becomes a journey from entanglement in Prakriti to abiding in the pure light of Purusha. This realization is a turning point where the soul no longer seeks fulfillment in the transient, and begins to rest in its own eternal nature.",
    relatedConcepts: [
      { slug: "gunas", name: "Gunas", relationship: "Prakriti is constituted by the three." },
      { slug: "atman", name: "Ātman", relationship: "Purusha is often equated with the concept of." },
      { slug: "samkhya", name: "Sāṃkhya", relationship: "is the philosophical school that primarily elaborates on." } // Assuming samkhya is a slug for the school
    ]
  },
  {
    slug: "mantra",
    title: "Mantra (मन्त्र)",
    name: "Mantra",
    meaning: "A mantra is a sacred sound, syllable, word, or phrase imbued with spiritual significance and vibrational potency. Derived from 'manas' (mind) and 'tra' (tool/instrument), a mantra is a tool to liberate the mind from distractions and bring spiritual focus.",
    philosophicalSignificance: "Mantras are central to many Indian spiritual traditions, including Vedic, Tantric, and Bhakti practices. They are believed to carry divine vibrations that can transform consciousness, purify the mind, and connect the practitioner with higher realities. The repetition (japa) of mantras aligns the subtle energies of the body and mind toward divine realization.",
    practicalApplication: "Mantras are used in meditation, rituals, worship (puja), healing practices, and daily routines. Chanting or silently repeating a mantra helps calm the mind, increase concentration, and invoke divine presence. Some mantras are associated with specific deities, while others are universal (e.g., 'Om').",
    coreElements: {
      Types: [
        { name: "Bija Mantras", description: "Seed sounds (like 'Om', 'Hreem', 'Shreem') that carry raw spiritual energy and are often used in tantric practices." },
        { name: "Saguna Mantras", description: "Mantras associated with specific deities, e.g., 'Om Namah Shivaya', 'Om Namo Narayanaya'." },
        { name: "Nirguna Mantras", description: "Mantras that invoke the formless, attributeless divine, such as 'So'ham' or 'Om Tat Sat'." },
        { name: "Vedic Mantras", description: "Ancient mantras from the Vedas, chanted with precise intonation and rhythm, such as the Gayatri Mantra." }
      ],
      ChantingMethods: [
        "Japa (repetition of mantra)", "Ajapa-japa (spontaneous inner repetition)", "Likhita Japa (writing the mantra repeatedly)",
        "Loud chanting (Vaikhari)", "Whispered chanting (Upamsu)", "Mental chanting (Manasika)"
      ],
      Uses: [
        "Meditation and concentration", "Purification and healing", "Invocation of deities", "Protection and energy shielding", "Attaining specific spiritual goals (siddhis)", "Opening and balancing chakras"
      ]
    },
    example: {
      mantra: "ॐ नमः शिवाय (Om Namah Shivaya)",
      meaning: "I bow to Shiva, the Supreme Consciousness, the inner Self.",
      purpose: "Used for purification, inner peace, and connection to Lord Shiva."
    },
    icon: Speaker,
    interconnectedWisdomSpecific: "Mantras align with the deeper philosophies of Nāda (sound), Bhakti (devotion), and Dhyāna (meditation). They serve as bridges between the individual consciousness and the universal. Through mantras, one engages the senses, intellect, and heart in divine remembrance.",
    holisticUnderstandingSpecific: "Sound is considered a fundamental force of creation (Shabda Brahman). Mantras harness this primal power to restructure inner awareness, awaken dormant spiritual energy, and transcend ego-driven patterns.",
    spiritualGrowthSpecific: "With consistent practice and sincerity, mantra chanting leads to mental clarity, emotional balance, and spiritual elevation. Mantra becomes not just a practice, but a living vibration guiding the soul toward union with the Divine.",
    relatedConcepts: [
      { slug: "bhakti", name: "Bhakti", relationship: "is often a core practice in." },
      { slug: "yoga-concept", name: "Yoga", relationship: "Mantra Japa is a key technique in many paths of." },
      { slug: "chakras", name: "Chakras", relationship: "specific Bija Mantras are associated with activating." }
    ]
  },
  {
    slug: "tattvas",
    title: "Tattvas (तत्त्व)",
    name: "Tattvas",
    meaning: "Tattvas are the fundamental principles or elements that constitute reality in various philosophical systems (darshanas) of Indian thought. These principles are used to map and explain the layers of existence, from the gross physical world to the subtler realms of consciousness. In schools like Shaiva and Vedantic philosophy, Tattvas form the building blocks of the universe and human experience.",
    philosophicalSignificance: "In Indian philosophy, especially in Shaiva and Vedantic systems, Tattvas are viewed as essential components that make up both the cosmos and the individual self. They describe the process by which the One (Brahman or Shiva) manifests into the many, creating the material world and the experiences of living beings. Understanding Tattvas is crucial for grasping the interconnectedness of existence, the nature of the self, and the path to spiritual liberation.",
    practicalApplication: "The study of Tattvas is not just theoretical; it is used in meditation, self-inquiry, and spiritual practice. By understanding these elements, one can discern the nature of the physical body, mind, and soul. This understanding helps practitioners align their inner self with the cosmic order, achieve clarity, and remove ignorance (Avidya). Tattvas guide spiritual seekers towards Moksha (liberation) by revealing the structure of reality.",
    icon: Layers, 
    example: {
      TattvaInShaivism: {
        tattva: "Parama Shiva (Supreme Consciousness)",
        meaning: "The highest and most fundamental Tattva, representing pure consciousness and non-duality. It is both the source and the ultimate goal of spiritual realization.",
        role: "Represents the unmanifest potential from which all creation emanates. Recognizing oneself as Parama Shiva is the essence of liberation."
      },
      TattvaInVedanta: {
        tattva: "Brahman",
        meaning: "The absolute, unchanging reality that is the source of the universe and all existence. It is formless and infinite, and everything in the world is a manifestation of Brahman.",
        role: "Understanding and realizing Brahman leads to the cessation of the cycle of birth and death, resulting in Moksha."
      },
       meaning: "Tattvas like Parama Shiva in Shaivism or Brahman in Vedanta represent ultimate realities, guiding one to liberation by understanding the fundamental principles of existence."
    },
    tattvaCoreConcepts: {
      ShaivaTattvas: { 
        definition: "In the Shaiva philosophy, especially in the Kashmiri Shaivism tradition, there are 36 Tattvas. These are classified into categories such as universal principles, individual principles, and the elements that form the material world.",
        categories: [
          { name: "Shiva Tattvas", description: "These are the highest principles, representing the pure consciousness or the source of creation. They include Parama Shiva (Supreme Shiva) and other related principles of consciousness." },
          { name: "Shakti Tattvas", description: "These are the divine powers or energies of the universe, which emanate from Shiva. Shakti is the dynamic aspect of the divine, responsible for creation and manifestation." },
          { name: "Vyakta Tattvas", description: "These are the manifest principles of the physical universe, like the elements, senses, and organs of perception." }
        ]
      },
      VedanticTattvas: { 
        definition: "In Vedantic philosophy, Tattvas describe the different levels of reality. They include the ultimate reality (Brahman), the individual soul (Atman), and the material world (Jagat), all of which are ultimately connected.",
        categories: [
          { name: "Brahman", description: "The supreme, formless reality that is the source of all creation. Brahman is both transcendent and immanent, beyond all categories of time, space, and causality." },
          { name: "Ātman", description: "The individual soul or Self, which is essentially Brahman in its true nature. It is eternal, unchanging, and non-dual, and its realization is key to liberation." },
          { name: "Jagat", description: "The world or universe, which is an appearance or manifestation of Brahman. It is transient and illusory, and the goal of Vedanta is to realize that the world is not separate from Brahman." }
        ]
      }
    },
    interconnectedWisdomSpecific: "The Tattvas in both Shaiva and Vedantic philosophies provide a framework to understand the relationship between the individual and the universe. They point to the underlying unity of all existence and the realization of one's true nature as the ultimate goal of spiritual practice.",
    holisticUnderstandingSpecific: "The study of Tattvas helps individuals see beyond the surface of reality and understand the deeper spiritual essence of the world. It emphasizes the interconnectedness of the physical, mental, and spiritual realms, encouraging holistic growth in both worldly and spiritual pursuits.",
    spiritualGrowthSpecific: "By contemplating the Tattvas, one begins to see the transient nature of the material world (Prakriti) and the eternal nature of the soul (Atman). This realization brings inner peace, detachment from the ego, and the awakening of the higher consciousness, which ultimately leads to liberation (Moksha).",
    relatedConcepts: [
      { slug: "prakriti-purusha", name: "Prakriti & Purusha", relationship: "are fundamental Tattvas in Samkhya philosophy." },
      { slug: "gunas", name: "Gunas", relationship: "Prakriti evolves into further Tattvas based on the interplay of." },
      { slug: "vedanta", name: "Vedānta", relationship: "explores Tattvas like Brahman, Atman, and Jagat." } // Assuming vedanta is a slug for the school
    ]
  },
  {
    slug: "chakras",
    title: "Chakras (चक्र)",
    name: "Chakras",
    icon: Orbit, 
    meaning: "Chakras are energy centers located along the spine in the subtle body. These centers correspond to physical, emotional, and spiritual aspects of a person. The word 'chakra' means 'wheel' in Sanskrit, representing the spinning of energy within the body. There are seven main chakras, each associated with specific qualities and areas of life. Balancing and harmonizing the chakras is essential for overall well-being and spiritual growth.",
    philosophicalSignificance: "In yogic and tantric traditions, chakras are considered to be the focal points of prana (life energy) within the body. The balance of these energy centers determines the flow of vitality, consciousness, and emotional well-being. Each chakra is linked to particular physical organs, mental states, and spiritual experiences. The goal of spiritual practices like yoga and meditation is to align and activate these chakras to awaken higher states of consciousness.",
    practicalApplication: "The practice of yoga and meditation focuses on the purification, activation, and balancing of the chakras. Techniques such as asanas (physical postures), pranayama (breathing exercises), mantra chanting, visualization, and meditation are used to bring energy into balance. When chakras are blocked or unbalanced, it can lead to physical or emotional imbalances. Proper alignment of the chakras is believed to enhance health, increase vitality, and elevate spiritual awareness.",
    example: { 
      balancedChakraExample: { 
        chakra: "Anahata (Heart Chakra)",
        meaning: "The heart chakra, when balanced, fosters unconditional love and compassion. It allows for deep connections with others and promotes emotional well-being. It represents the bridge between the lower (material) and higher (spiritual) chakras.",
        role: "When balanced, the heart chakra brings emotional healing, fostering love, empathy, and understanding. It helps individuals cultivate loving relationships, express care, and nurture both themselves and others."
      },
      imbalancedChakraExample: {
        chakra: "Manipura (Solar Plexus Chakra)",
        meaning: "When imbalanced, the solar plexus chakra can manifest as low self-esteem, digestive issues, or a lack of personal power. It often reflects feelings of insecurity, fear of rejection, or being disconnected from one's true self.",
        role: "Balancing the solar plexus chakra restores confidence, personal power, and self-worth, improving one's ability to make decisions, set boundaries, and take charge of one's life."
      }
    },
    interconnectedWisdomSpecific: "The chakras are deeply interconnected. The balance of the lower chakras (Muladhara, Svadhisthana, Manipura) is often foundational to the well-being of the higher chakras (Anahata, Vishuddha, Ajna, Sahasrara). An imbalance in one chakra can affect the flow of energy through others. For example, if the heart chakra is blocked, it may also hinder the throat chakra, affecting communication of emotions and love.",
    holisticUnderstandingSpecific: "The study and practice of chakra balancing encourage a holistic approach to life. It connects the physical, emotional, mental, and spiritual dimensions of existence. By harmonizing these energy centers, one can achieve a balanced state of health and well-being, both individually and in relation to the environment.",
    spiritualGrowthSpecific: "Chakra work fosters spiritual growth by helping practitioners release blockages, attain mental clarity, and deepen their connection with the divine. Each chakra represents a different aspect of spiritual evolution, from basic survival instincts to the highest form of spiritual enlightenment. When all chakras are balanced and aligned, it facilitates inner peace, higher consciousness, and the realization of oneness with the universe.",
    chakraDefinitions: {
      RootChakra: { name: "Muladhara (मूलाधार)", location: "Base of the spine, near the perineum.", associatedColor: "Red", associatedElement: "Earth", qualities: "Stability, security, grounding, survival instincts.", imbalances: "Fear, insecurity, financial instability, survival anxiety.", balancedState: "Grounded, secure, stable, feeling of safety.", yogaPractices: "Mountain pose (Tadasana), sitting meditation, grounding exercises." },
      SacralChakra: { name: "Svadhisthana (स्वाधिष्ठान)", location: "Lower abdomen, about two inches below the navel.", associatedColor: "Orange", associatedElement: "Water", qualities: "Creativity, sensuality, emotional well-being, sexuality.", imbalances: "Emotional instability, guilt, lack of creativity, sexual dysfunction.", balancedState: "Creative expression, emotional flow, healthy relationships.", yogaPractices: "Hip-opening poses, pelvic tilts, creative visualization." },
      SolarPlexusChakra: { name: "Manipura (मणिपूर)", location: "Upper abdomen, near the stomach.", associatedColor: "Yellow", associatedElement: "Fire", qualities: "Personal power, confidence, self-esteem, willpower.", imbalances: "Low self-esteem, lack of confidence, fear of rejection, digestive issues.", balancedState: "Strong sense of self, confidence, motivation, digestive health.", yogaPractices: "Core strengthening poses, power poses, breath of fire (Kapalbhati)." },
      HeartChakra: { name: "Anahata (अनाहत)", location: "Center of the chest, near the heart.", associatedColor: "Green", associatedElement: "Air", qualities: "Love, compassion, empathy, forgiveness, connection.", imbalances: "Difficulty in relationships, lack of compassion, emotional coldness.", balancedState: "Unconditional love, compassion, deep connection with others.", yogaPractices: "Heart-opening poses, deep breathing, loving-kindness meditation (Metta)." },
      ThroatChakra: { name: "Vishuddha (विशुद्ध)", location: "Throat region.", associatedColor: "Blue", associatedElement: "Ether (Space)", qualities: "Communication, self-expression, truth, creativity.", imbalances: "Difficulty in communication, fear of speaking, dishonesty.", balancedState: "Clear communication, speaking one's truth, creative expression.", yogaPractices: "Neck stretches, chanting mantras, breathwork." },
      ThirdEyeChakra: { name: "Ajna (आज्ञा)", location: "Between the eyebrows, slightly above the bridge of the nose.", associatedColor: "Indigo", associatedElement: "Light", qualities: "Intuition, perception, wisdom, clarity of mind.", imbalances: "Lack of direction, confusion, inability to trust intuition.", balancedState: "Heightened intuition, clarity, wisdom, inner vision.", yogaPractices: "Meditation, mindfulness, visualization exercises." },
      CrownChakra: { name: "Sahasrara (सहस्रार)", location: "Top of the head.", associatedColor: "Violet or White", associatedElement: "Cosmic Energy", qualities: "Spiritual connection, enlightenment, unity with the universe.", imbalances: "Spiritual disconnection, lack of purpose, depression.", balancedState: "A deep sense of connection to the divine, peace, transcendence.", yogaPractices: "Meditation, connection with higher consciousness, silence." }
    },
    relatedConcepts: [
      { slug: "yoga-concept", name: "Yoga", relationship: "practices are often used to balance and awaken." },
      { slug: "mantra", name: "Mantra", relationship: "specific Bija Mantras are used to activate." },
      { slug: "prana", name: "Prana", relationship: "are centers where Prana (life force) is concentrated." } // Assuming 'prana' will be a concept
    ]
  },
  {
    slug: "ishvara",
    title: "Ishvara (ईश्वर)",
    name: "Ishvara",
    icon: ShieldAlert,
    meaning: "Ishvara refers to the personal aspect of the Divine, often understood as the Supreme Controller, Lord, or God in various Hindu traditions. Unlike Brahman, which is formless and impersonal, Ishvara is seen as a specific, personal deity who governs the universe and the cosmic order. Different schools of philosophy interpret Ishvara in distinct ways, either as a manifestation of Brahman or as a distinct entity that exists separately but in relation to Brahman.",
    philosophicalSignificance: "Ishvara plays a central role in many schools of Hindu philosophy, especially in theistic traditions like Vedanta, Shaivism, and Vaishnavism. In Vedanta, Ishvara is often equated with Brahman, the ultimate reality, but with specific attributes that allow devotees to worship and relate to the Divine. In schools like Shaivism and Vaishnavism, Ishvara is considered a personal deity with form and qualities, such as Shiva in Shaivism or Vishnu in Vaishnavism, to whom one can surrender and seek divine grace.",
    practicalApplication: "Worship of Ishvara is a key aspect of Bhakti Yoga, the path of devotion. Practitioners engage in rituals, prayers, meditation, and devotion towards Ishvara, cultivating a personal relationship with the Divine. This practice of devotion is considered a direct means to attain Moksha (liberation) by surrendering to the will of Ishvara, gaining divine guidance, and experiencing grace. By recognizing Ishvara's personal nature, devotees find a focus for their spiritual practice and a way to connect with the Divine on a personal level.",
    example: {
      IshvaraSpecific: { 
        phrase: "The Personal God",
        meaning: "Ishvara is the personal aspect of the Divine, such as Shiva or Vishnu, who governs the universe and guides devotees. Worship of Ishvara through devotion is a key path to liberation."
      }
    },
    interconnectedWisdomSpecific: "The concept of Ishvara connects deeply with the practice of Bhakti (devotion), where the individual surrenders to the divine will. The devotion to Ishvara as a personal deity allows individuals to cultivate a relationship with God, facilitating a direct connection with the ultimate reality. Ishvara also links with concepts of Dharma, as Ishvara is seen as the enforcer of cosmic order and righteousness in the universe.",
    holisticUnderstandingSpecific: "By recognizing Ishvara as the personal aspect of the Divine, one is able to approach spiritual practice with a sense of devotion and intimacy. This allows for a path to liberation that is grounded in love, surrender, and trust in the Divine will. Whether as Shiva, Vishnu, or another deity, Ishvara provides a focal point for spiritual practice that helps direct one's life toward higher consciousness and ultimate freedom.",
    spiritualGrowthSpecific: "Devotion to Ishvara is a direct path to spiritual growth. It leads to an enhanced sense of connection to the Divine, the unfolding of grace, and the removal of obstacles to liberation. The surrender to Ishvara helps purify the mind, heart, and soul, making it possible for individuals to live in harmony with the cosmic order and attain Moksha.",
    ishvaraInterpretations: {
      Vedanta: { interpretation: "In Vedantic philosophy, Ishvara is seen as a manifestation of Brahman with specific qualities (Saguna Brahman), making it possible to worship a personal form of the Divine. This is distinct from Nirguna Brahman (attributeless).", qualities: ["Omnipotence", "Omniscience", "Omnibenevolence", "Creator", "Sustainer", "Dissolver"], relationToAtman: "Ishvara is the Lord of Maya, governing the empirical world. Individual souls (Jivas) are expressions of Brahman veiled by Maya.", exampleContext: "Worship of deities like Shiva, Vishnu, or Devi as personal manifestations of Ishvara.", exampleSignificance: "Facilitates devotional relationship, making abstract Brahman accessible through form and qualities.", exampleRituals: "Puja (ritual worship), chanting of divine names, temple visits." },
      Shaivism: { interpretation: "Ishvara is identified primarily as Shiva, the Supreme Being who is both transcendent and immanent. Shiva is the ultimate reality, the source of all creation, preservation, and destruction.", qualities: ["Creator", "Destroyer", "Compassionate", "Meditative", "Lord of Dance (Nataraja)"], relationToShakti: "Shiva is inseparable from Shakti, his divine feminine energy. They represent consciousness and power, the static and dynamic aspects of the Absolute.", exampleContext: "Devotion to Shiva through meditation, chanting 'Om Namah Shivaya', and performing rituals like Abhishekam.", exampleSignificance: "Realizing oneness with Shiva leads to liberation from the cycle of samsara.", exampleRituals: "Lingam worship, Mahashivaratri festival, recitation of Shiva Sahasranama." },
      Vaishnavism: { interpretation: "Ishvara is identified with Vishnu (or Narayana), the preserver and protector of the universe, often worshipped through his avatars like Rama and Krishna.", qualities: ["Preserver", "Compassionate", "Protector", "Loving", "Upholder of Dharma"], relationToAvatars: "Vishnu incarnates in various forms (avatars) to restore cosmic order and guide humanity.", exampleContext: "Devotion to Vishnu or his avatars through chanting, kirtan, and temple worship. Recitation of Vishnu Sahasranama.", exampleSignificance: "Surrender (Prapatti) and loving devotion (Bhakti) to Vishnu lead to Vaikuntha (Vishnu's abode) and liberation.", exampleRituals: "Ekadashi fasting, Tulasi worship, festivals like Janmashtami and Rama Navami." }
    },
    relatedConcepts: [
      { slug: "brahman", name: "Brahman", relationship: "is often seen as the personal, Saguna (with attributes) aspect of the impersonal Nirguna." },
      { slug: "bhakti", name: "Bhakti", relationship: "is the path of devotion towards." },
      { slug: "yoga-concept", name: "Yoga", relationship: "in Patanjali's Yoga Sutras, Ishvara Pranidhana (devotion to Ishvara) is a key Niyama." }
    ]
  },
  {
    slug: "tapas",
    title: "Tapas (तपस्)",
    name: "Tapas",
    meaning: "Tapas refers to austerity, self-discipline, and the inner fire that purifies and strengthens one’s spiritual resolve. It is the practice of self-control and enduring discomfort for spiritual growth. Tapas is regarded as essential in all yogic traditions, playing a crucial role in achieving mental clarity, spiritual awakening, and self-realization.",
    philosophicalSignificance: "Tapas represents the burning desire to purify oneself and achieve spiritual progress. It is the 'heat' or 'fire' that burns away impurities and obstacles on the spiritual path. In the yogic tradition, Tapas is seen as the force that cultivates inner strength and resilience, essential qualities for overcoming life's challenges and attaining liberation (Moksha).",
    practicalApplication: "Tapas is practiced by adopting a disciplined and focused lifestyle. This can involve fasting, following strict routines, regular meditation, controlling one's desires, and undergoing physical or mental challenges to build strength. The practice of Tapas requires perseverance, patience, and deep commitment. It is about cultivating an unshakable willpower and endurance that aids in spiritual growth.",
    example: {
      BhagavadGitaExample: {
        context: "In the Bhagavad Gita, Lord Krishna emphasizes the importance of Tapas for a spiritual aspirant. He describes Tapas as a mental and physical discipline that purifies the practitioner and enhances their ability to focus on the Divine.",
        significance: "The Gita mentions the various types of Tapas and explains how it can be performed in the mode of goodness, passion, and ignorance. Tapas performed with purity and devotion leads to greater spiritual understanding and liberation.",
        exampleVerse: "In Bhagavad Gita 17.14-17.16, Lord Krishna explains that Tapas performed with devotion, without selfish desires, and aligned with righteousness purifies the heart and mind, allowing the practitioner to attain peace and spiritual fulfillment."
      }
    },
    icon: Flame,
    interconnectedWisdomSpecific: "Tapas is interconnected with other spiritual practices like Dhyana (meditation), Karma (action), and Sadhana. It represents the sustained effort to cultivate discipline and transform oneself spiritually. Tapas leads to inner clarity and enables deeper connection to one's higher self and the Divine. It plays a key role in overcoming obstacles and distractions, allowing the practitioner to progress on the path of enlightenment.",
    holisticUnderstandingSpecific: "Tapas is not just physical endurance; it is about balancing both body and mind to serve a higher purpose. By practicing Tapas, one overcomes ignorance and attachment, purifying both the internal and external aspects of life. It is a crucial part of an integrated spiritual journey, leading to self-mastery and ultimate freedom.",
    spiritualGrowthSpecific: "Tapas facilitates spiritual growth by purifying the mind and body. By practicing austerity and discipline, one strengthens their spiritual resolve and removes mental impurities. This purification leads to increased focus, greater awareness, and the ability to transcend the limitations of the ego. Tapas allows one to connect with their true self and ultimately achieve liberation (Moksha).",
    tapasCoreConcepts: {
      roleInYoga: {
        interpretation: "In yoga, Tapas signifies the fire within that drives a practitioner to pursue their spiritual goals with dedication and persistence. Tapas is considered one of the Niyamas (personal observances) and represents the commitment to overcoming distractions, ego, and worldly attachments.",
        qualities: ["Self-discipline", "Purification", "Inner Strength", "Focus"],
        relationToKarma: "Tapas is closely related to the principle of Karma. Through self-discipline and perseverance, one can burn off past karmas, remove mental impurities, and achieve spiritual enlightenment. By performing Tapas, the practitioner transforms their actions and consciousness, which can lead to the dissolution of accumulated karma."
      },
      connectionToSadhana: {
        interpretation: "Tapas is integral to Sadhana (spiritual practice), which involves dedicated effort towards spiritual growth. Through Tapas, the practitioner becomes focused, resilient, and mentally clear, which supports all aspects of Sadhana, such as meditation, prayer, and self-study.",
        qualities: ["Persistence", "Endurance", "Commitment"],
        relationToBhakti: "While Bhakti (devotion) focuses on love and surrender to the Divine, Tapas involves inner strength and discipline, offering a complementary path for those seeking to purify themselves and connect with the Divine through disciplined action."
      }
    },
    relatedConcepts: [
      { slug: "yoga-concept", name: "Yoga", relationship: "is a key component (Niyama) in Ashtanga Yoga." },
      { slug: "karma", name: "Karma", relationship: "is believed to burn away impurities and past." },
      { slug: "shraddha", name: "Shraddha", relationship: "provides the endurance needed for sustained." }
    ]
  },
  {
    slug: "shraddha",
    title: "Shraddha (श्रद्धा)",
    name: "Shraddha",
    icon: Anchor,
    meaning: "Shraddha refers to deep faith, trust, and reverence in spiritual truth, sacred scriptures, and the guidance of the guru. It is not blind belief, but a refined and intuitive confidence in the spiritual path that stems from inner conviction and past impressions (samskaras).",
    philosophicalSignificance: "In Indian spiritual traditions, Shraddha is regarded as the foundation of all spiritual endeavor. Without faith, the journey toward self-realization lacks direction and inspiration. Shraddha sustains the seeker during challenges and helps maintain a consistent practice of sadhana (spiritual discipline).",
    practicalApplication: "Shraddha manifests in everyday life as devotion to study scriptures, obedience to the teachings of the guru, consistent practice of yoga or meditation, and trust in divine timing. It keeps the practitioner anchored, especially when results are not immediately visible. Faith turns knowledge into personal experience.",
    shraddhaCoreConcepts: {
      RoleInBhakti: {
        interpretation: "In the path of Bhakti Yoga, Shraddha is essential for cultivating a loving relationship with the Divine. It enables surrender, patience, and unwavering love for God despite external challenges or inner doubts.",
        qualities: ["Devotion", "Surrender", "Love", "Trust"],
        relationToGrace: "Shraddha opens the heart to receive divine grace. A seeker who trusts the process and remains humble is more likely to experience spiritual blessings."
      },
      RoleInJnanaYoga: {
        interpretation: "Even in the path of knowledge (Jnana Yoga), Shraddha is required to accept the teachings of the scriptures and the words of enlightened masters before one has direct realization. This preliminary trust evolves into wisdom through introspection and experience.",
        qualities: ["Intuition", "Openness", "Wisdom"],
        relationToViveka: "Shraddha complements Viveka (discrimination). While Viveka discerns truth from illusion, Shraddha fuels the confidence to act upon that discernment."
      }
    },
    example: {
      BhagavadGitaReference: {
        context: "In the Bhagavad Gita (Chapter 4, Verse 39), Lord Krishna says: 'Shraddhāvān labhate jñānaṁ' – The one with Shraddha attains knowledge.",
        significance: "This emphasizes that faith is not the end, but the beginning of true knowledge. Faith leads to inquiry, practice, and finally, realization.",
        keyMessage: "Without Shraddha, the seeker may abandon the path during trials. With Shraddha, even an initial glimmer of insight deepens into spiritual awakening."
      }
    },
    interconnectedWisdomSpecific: "Shraddha is closely linked with Tapas (discipline), Satsang (holy company), and Guru Bhakti (devotion to the teacher). It empowers all other practices by giving them spiritual fuel. Faith in the unseen, the unknown, and the eternal is what leads the seeker beyond the limitations of the material mind.",
    holisticUnderstandingSpecific: "Shraddha arises from the heart and transcends intellectual reasoning. It bridges the gap between theoretical knowledge and lived experience. While reason builds structure, Shraddha fills it with soul. It prepares the mind to absorb subtle truths and awakens spiritual sensitivity.",
    spiritualGrowthSpecific: "As faith deepens, doubts dissolve and clarity arises. Shraddha strengthens the will to persevere and transforms spiritual teachings into living wisdom. Over time, it evolves from trust in external teachings to inner certitude in the Self (Atman). This transformation is essential for attaining liberation (Moksha).",
    relatedConcepts: [
      { slug: "bhakti", name: "Bhakti", relationship: "is a core component and expression of." },
      { slug: "tapas", name: "Tapas", relationship: "sustains the practice of, during difficult times." },
      { slug: "guru", name: "Guru", relationship: "is often directed towards the teachings of a." } // Assuming 'guru' will be a concept/category
    ]
  },
  {
    slug: "viveka-vairagya",
    title: "Viveka (विवेक) & Vairagya (वैराग्य)",
    name: "Viveka & Vairagya",
    icon: Scale,
    meaning: {
      viveka: "Viveka means the power of discernment or discrimination — specifically the ability to distinguish between the eternal (Nitya) and the non-eternal (Anitya), the real (Sat) and the unreal (Asat), the Self (Ātman) and the not-Self (Anātman).",
      vairagya: "Vairagya is detachment or dispassion toward sensory pleasures and worldly attachments. It reflects an inner freedom and renunciation born out of clear understanding, not suppression."
    },
    philosophicalSignificance: {
      essence: "Together, Viveka and Vairagya form the twin pillars of spiritual awakening in Vedanta and yogic traditions. Viveka opens the eyes to the illusory nature of worldly existence, while Vairagya helps the seeker renounce that which is unreal and fleeting.",
      purpose: "They prepare the aspirant’s mind for deep meditation, inward reflection, and ultimately Self-realization. Without Viveka and Vairagya, the mind remains restless and caught in illusion (Māyā)."
    },
    practicalApplication: {
      viveka: "Daily introspection, studying scriptures (shastras), observing the impermanence of all things, and questioning the nature of reality cultivate Viveka.",
      vairagya: "Vairagya is expressed by minimizing indulgence, simplifying life, and withdrawing attachment from pleasures, possessions, ego, and even the desire for liberation itself."
    },
    example: {
      spiritualPractice: {
        meditation: "Regular self-inquiry (Atma Vichara) with the question 'Who am I?' sharpens Viveka.",
        renunciation: "Practicing contentment, non-attachment, and focusing on the inner Self fosters Vairagya."
      }
    },
    interconnectedWisdomSpecific: "Viveka and Vairagya are foundational to all advanced spiritual practices such as the Eightfold Path of Yoga (Ashtanga), Jnana Yoga, and Vedanta. They purify the mind, enabling it to reflect the truth like a still lake reflects the moon.",
    holisticUnderstandingSpecific: "Viveka leads to right understanding. Vairagya leads to right living. When both are integrated, the seeker walks steadily toward truth. They balance each other—discernment without detachment becomes theoretical; detachment without discernment can become dry or escapist.",
    spiritualGrowthSpecific: "By practicing Viveka and Vairagya, one gradually overcomes ignorance (Avidya) and identifies with the eternal Self. They are considered the gateways to lasting peace, freedom from suffering, and spiritual liberation (Moksha).",
    vivekaVairagyaCoreConcepts: {
      vivekaExamples: [
        "Understanding that wealth, status, and beauty are impermanent and do not define the Self.",
        "Discriminating between the observer (consciousness) and the observed (body, mind, world)."
      ],
      vairagyaExamples: [
        "Letting go of cravings, resentments, and compulsive desires.",
        "Remaining inwardly unaffected by praise or blame, success or failure."
      ],
      scripturalBasis: {
        source: "Viveka Chudamani by Adi Shankaracharya",
        quote: "“Brahma satyam jagat mithya, jivo brahmaiva naparah” — Brahman alone is real, the world is an illusion, and the individual soul is not different from Brahman."
      }
    },
    relatedConcepts: [
      { slug: "jnana", name: "Jnana", relationship: "Viveka is a key aspect of, and Vairagya is a prerequisite for deep." },
      { slug: "maya", name: "Māyā", relationship: "helps to discern and detach from the influences of." },
      { slug: "moksha", name: "Moksha", relationship: "are essential qualities for attaining." },
      { slug: "yoga-concept", name: "Yoga", relationship: "are cultivated through various yogic practices." }
    ]
  }
];

export const interconnectedWisdomText = {
  title: "Interconnected Wisdom",
  content: "The core concepts of Indian philosophy—Dharma, Karma, Moksha, Ātman, Brahman, Samsāra, Māyā, Bhakti, Jnana, Yoga, Purushārtha, Gunas, Prakriti, Purusha, Mantra, Tattvas, Chakras, Ishvara, Tapas, Shraddha, Viveka, and Vairagya—are deeply interconnected. They provide a comprehensive framework for understanding the human condition, the nature of reality, and our place in the universe. This wisdom emphasizes that life is a journey of self-discovery, aiming to align with cosmic order (Dharma), understand actions' consequences (Karma), navigate existence's cycle (Samsāra) by discerning illusion (Māyā and Viveka), cultivating devotion (Bhakti) to a personal Divine (Ishvara) with faith (Shraddha) and detachment (Vairagya), pursuing profound knowledge (Jnana), engaging in disciplined practice (Yoga & Tapas), achieving life's essential aims (Purushārtha), understanding nature's qualities (Gunas), distinguishing spirit from matter (Purusha & Prakriti), harnessing sacred sound (Mantra), understanding reality's principles (Tattvas), balancing energy centers (Chakras), and ultimately realizing our divine essence (Ātman) as one with supreme consciousness (Brahman), leading to liberation (Moksha)."
};

export const holisticUnderstandingText = {
  title: "Holistic Understanding & Spiritual Growth",
  sections: [
    {
      subtitle: "Holistic Understanding",
      content: "The study of these concepts offers profound insights into the nature of existence, helping individuals navigate life’s challenges and find meaning in their spiritual practice."
    },
    {
      subtitle: "Spiritual Growth",
      content: "By embracing these ideas and integrating them into everyday life, one can achieve greater clarity, purpose, and a deeper sense of connection to both the world and the divine."
    }
  ]
};

export function getConceptBySlug(slug: string): DetailedConcept | undefined {
  return detailedConceptsData.find(concept => concept.slug === slug);
}

export function getAllConceptSlugs() {
  return detailedConceptsData.map(concept => ({
    slug: concept.slug,
  }));
}

// Helper to get a specific concept's icon (example)
export function getConceptIcon(slug: string): LucideIcon | undefined {
  const concept = getConceptBySlug(slug);
  return concept?.icon;
}

// Helper to get a specific concept's name for display (example)
export function getConceptName(slug: string): string | undefined {
  const concept = getConceptBySlug(slug);
  return concept?.name; 
}

// Helper to get a specific concept's title for display (example)
export function getConceptTitle(slug: string): string | undefined {
  const concept = getConceptBySlug(slug);
  return concept?.title || concept?.name;
}
