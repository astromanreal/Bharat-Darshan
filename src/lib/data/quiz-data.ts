export type QuizQuestion = {
  topic: string;
  question: string;
  options: string[];
  answer: string;
};

export type QuizSet = {
  title: string;
  slug: string;
  description: string;
  questions: QuizQuestion[];
};

export const allQuizzesData: QuizQuestion[] = [
  {
    topic: "Dharma",
    question: "What does Dharma refer to in Sanatan Dharma?",
    options: [
      "Cosmic order and righteousness",
      "Material wealth and prosperity",
      "Rebirth and the cycle of life",
      "Desire and enjoyment"
    ],
    answer: "Cosmic order and righteousness"
  },
  {
    topic: "Karma",
    question: "What is the principle of Karma in Sanatan Dharma?",
    options: [
      "Cause and effect of actions",
      "Spiritual liberation",
      "Material wealth",
      "Reincarnation and rebirth"
    ],
    answer: "Cause and effect of actions"
  },
  {
    topic: "Moksha",
    question: "What is Moksha in the context of Sanatan Dharma?",
    options: [
      "Liberation from the cycle of birth and death",
      "Physical well-being",
      "Material success",
      "Attachment to worldly desires"
    ],
    answer: "Liberation from the cycle of birth and death"
  },
  {
    topic: "Ātman",
    question: "What does Ātman represent in Hindu philosophy?",
    options: [
      "The soul or Self",
      "The cosmic order",
      "Material wealth",
      "The material body"
    ],
    answer: "The soul or Self"
  },
  {
    topic: "Brahman",
    question: "What is Brahman in Sanatan Dharma?",
    options: [
      "The ultimate, unchanging reality",
      "The personal aspect of the Divine",
      "The cycle of life and death",
      "The soul or Self"
    ],
    answer: "The ultimate, unchanging reality"
  },
  {
    topic: "Samsāra",
    question: "What does Samsāra refer to in Sanatan Dharma?",
    options: [
      "The endless cycle of birth, death, and rebirth",
      "The ultimate liberation from suffering",
      "The personal deity worshipped",
      "The supreme reality"
    ],
    answer: "The endless cycle of birth, death, and rebirth"
  },
  {
    topic: "Māyā",
    question: "What is Māyā in Hindu philosophy?",
    options: [
      "Cosmic illusion or ignorance",
      "The eternal truth",
      "The personal divine aspect",
      "The spiritual knowledge"
    ],
    answer: "Cosmic illusion or ignorance"
  },
  {
    topic: "Bhakti",
    question: "What does Bhakti refer to in Sanatan Dharma?",
    options: [
      "Devotion, love, and surrender to the Divine",
      "Intellectual understanding",
      "Physical discipline and austerity",
      "The pursuit of material success"
    ],
    answer: "Devotion, love, and surrender to the Divine"
  },
  {
    topic: "Jnana",
    question: "What does Jnana refer to in Hindu philosophy?",
    options: [
      "Spiritual knowledge and wisdom",
      "Physical well-being",
      "Material wealth",
      "Devotional service"
    ],
    answer: "Spiritual knowledge and wisdom"
  },
  {
    topic: "Yoga",
    question: "What is the aim of Yoga in Hindu philosophy?",
    options: [
      "To unite body, mind, and spirit",
      "To seek material prosperity",
      "To gain worldly power",
      "To develop physical strength"
    ],
    answer: "To unite body, mind, and spirit"
  },
  {
    topic: "Purushārtha",
    question: "What does Purushārtha refer to in Sanatan Dharma?",
    options: [
      "The four aims of human life",
      "The soul's journey after death",
      "The ultimate liberation",
      "The cosmic illusion"
    ],
    answer: "The four aims of human life"
  },
  {
    topic: "Gunas",
    question: "What are the three Gunas in Hindu philosophy?",
    options: [
      "Sattva, Rajas, Tamas",
      "Dharma, Karma, Moksha",
      "Purusha, Prakriti, Atman",
      "Bhakti, Jnana, Yoga"
    ],
    answer: "Sattva, Rajas, Tamas"
  },
  {
    topic: "Prakriti & Purusha",
    question: "What do Prakriti and Purusha represent in Samkhya philosophy?",
    options: [
      "Prakriti: material nature, Purusha: the conscious self",
      "Prakriti: spiritual knowledge, Purusha: material wealth",
      "Prakriti: the soul, Purusha: the body",
      "Prakriti: the law of karma, Purusha: the divine"
    ],
    answer: "Prakriti: material nature, Purusha: the conscious self"
  },
  {
    topic: "Mantra",
    question: "What is a Mantra in Hinduism?",
    options: [
      "A sacred sound or phrase for spiritual practice",
      "A type of ritual sacrifice",
      "A prayer to the deities for wealth",
      "A scripture containing moral laws"
    ],
    answer: "A sacred sound or phrase for spiritual practice"
  },
  {
    topic: "Tattvas",
    question: "What do Tattvas represent in Hindu philosophy?",
    options: [
      "The fundamental principles of reality",
      "The four aims of human life",
      "The laws of karma",
      "The different paths of Yoga"
    ],
    answer: "The fundamental principles of reality"
  },
  {
    topic: "Chakras",
    question: "What are Chakras in spiritual philosophy?",
    options: [
      "Energy centers in the subtle body",
      "Places of pilgrimage",
      "Types of deities worshipped",
      "Sacred texts"
    ],
    answer: "Energy centers in the subtle body"
  },
  {
    topic: "Ishvara",
    question: "What is Ishvara in Hindu philosophy?",
    options: [
      "The personal aspect of the Divine",
      "The ultimate, formless reality",
      "The law of cause and effect",
      "The physical world"
    ],
    answer: "The personal aspect of the Divine"
  },
  {
    topic: "Tapas",
    question: "What does Tapas refer to in Hinduism?",
    options: [
      "Austerity and self-discipline for spiritual growth",
      "Intellectual wisdom and knowledge",
      "Material wealth and success",
      "Devotional service to the deities"
    ],
    answer: "Austerity and self-discipline for spiritual growth"
  },
  {
    topic: "Shraddha",
    question: "What does Shraddha mean in the context of spirituality?",
    options: [
      "Faith and reverence in spiritual truth",
      "Physical endurance",
      "The practice of meditation",
      "Devotion to a personal deity"
    ],
    answer: "Faith and reverence in spiritual truth"
  },
  {
    topic: "Viveka & Vairagya",
    question: "What do Viveka and Vairagya represent in Sanatan Dharma?",
    options: [
      "Discernment and detachment",
      "Material wealth and success",
      "Physical strength and endurance",
      "Devotional practices and rituals"
    ],
    answer: "Discernment and detachment"
  }
];

export const mainQuiz: QuizSet = {
    title: "Sanatana Dharma Essentials",
    slug: "sanatana-essentials",
    description: "Test your knowledge of core concepts in Sanatana Dharma.",
    questions: allQuizzesData,
};
