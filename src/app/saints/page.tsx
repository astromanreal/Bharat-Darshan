
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { Users, BookOpen, MapPin, MessageSquare, Landmark, BookMarked, Sparkles as SparklesIcon, ScrollText, Heart, Lightbulb } from "lucide-react"; // Added Lightbulb

export const metadata = {
  title: "Saints & Philosophers - Sanatana Insights",
  description: "Discover the lives and teachings of eminent saints, sages, and philosophers who shaped Indian thought.",
};

const saintsDataRaw = [
  {
    "name": "Adi Shankaracharya",
    "era": "8th Century CE",
    "birthPlace": "Kaladi, Kerala, India",
    "philosophy": "Advaita Vedanta (Non-dualism)",
    "biography": "Adi Shankaracharya was a great Indian philosopher and theologian who consolidated the doctrine of Advaita Vedanta. He traveled across India to propagate his philosophy, debated scholars, and revived Hinduism during a period of cultural decline.",
    "keyTeachings": [
      "Brahman is the only reality; the world is Maya (illusion).",
      "The individual soul (Atman) is not different from Brahman.",
      "Liberation (Moksha) is attained through knowledge (Jnana Yoga)."
    ],
    "majorWorks": [
      "Commentaries on Upanishads, Bhagavad Gita, and Brahma Sutras",
      "Vivekachudamani",
      "Atma Bodha",
      "Bhaja Govindam"
    ],
    "legacy": "Founded four major mathas (monastic centers) in India. Unified the spiritual essence of the Vedas. Key influence on Indian spirituality and philosophy.",
    "associatedDeityOrConcept": "Shiva", 
    "dataAiHint": "indian philosopher"
  },
  {
    "name": "Ramanujacharya",
    "era": "11th Century CE", 
    "birthPlace": "Sriperumbudur, Tamil Nadu, India",
    "philosophy": "Vishishtadvaita Vedanta (Qualified Non-dualism)",
    "biography": "Ramanujacharya was one of the most influential philosophers in the Vedantic tradition. He emphasized a personal relationship with a supreme God (Vishnu or Narayana), advocating a middle path between pure dualism and non-dualism. He taught that the soul and God are distinct yet inseparably related, like body and soul.",
    "keyTeachings": [
      "Brahman (God) is with attributes—personal and loving.",
      "The individual soul (Jiva) is a part of Brahman but retains its individuality.",
      "Devotion (Bhakti) and surrender (Prapatti) to God lead to liberation.",
      "Social equality and inclusion are vital for spiritual progress."
    ],
    "majorWorks": [
      "Sri Bhashya (commentary on the Brahma Sutras)",
      "Gita Bhashya (commentary on the Bhagavad Gita)",
      "Vedartha Sangraha",
      "Nityagrantha"
    ],
    "legacy": "Revived Vaishnavism and temple-based devotional practices. Founded the Sri Vaishnava tradition and established key temples and spiritual institutions. A major advocate for temple entry and equality in spiritual practice.",
    "associatedDeityOrConcept": "Vishnu / Narayana (Supreme Personal God)",
    "dataAiHint": "spiritual teacher"
  },
  {
    "name": "Patanjali",
    "era": "2nd Century BCE (approximate)",
    "birthPlace": "Uncertain; possibly Tamil Nadu or North India",
    "philosophy": "Yoga Philosophy (Ashtanga Yoga)",
    "biography": "Patanjali is the author of the Yoga Sutras, a foundational text of classical Yoga. His teachings systematized yogic practice into the Eightfold Path, emphasizing mental discipline and spiritual liberation.",
    "keyTeachings": [
      "Chitta Vritti Nirodha – Yoga is the cessation of mental fluctuations.",
      "Ashtanga Yoga: Eight limbs for self-purification and realization.",
      "Detachment and disciplined practice lead to liberation (Kaivalya)."
    ],
    "majorWorks": [
      "Yoga Sutras of Patanjali",
      "Mahabhashya (commentary on Panini's grammar, attributed by some)"
    ],
    "legacy": "Revered as the father of classical yoga. His system bridges physical practice, mental discipline, and spiritual freedom.",
    "associatedDeityOrConcept": "Shesha (Divine Serpent), Shiva (indirectly)", 
    "dataAiHint": "yoga master"
  },
  {
    "name": "Gautama Buddha",
    "era": "563–483 BCE (traditional)",
    "birthPlace": "Lumbini (present-day Nepal)",
    "philosophy": "Buddhism (Middle Way, Four Noble Truths)",
    "biography": "Born as Siddhartha Gautama, he renounced royal life in search of truth. After years of asceticism, he attained enlightenment under the Bodhi tree and became the Buddha. He spent his life teaching the path to end suffering.",
    "keyTeachings": [
      "Four Noble Truths: Life is suffering; the cause is desire; cessation is possible; follow the Eightfold Path.",
      "The Middle Way avoids extremes of indulgence and self-mortification.",
      "Anatta (non-self), Anicca (impermanence), Dukkha (suffering)."
    ],
    "majorWorks": [
      "Dhammapada (sayings attributed to him)",
      "Sutta Pitaka (discourses)",
      "Vinaya Pitaka (monastic rules)"
    ],
    "legacy": "Founder of Buddhism. His teachings influenced Asia profoundly, emphasizing compassion, mindfulness, and insight.",
    "associatedDeityOrConcept": "None (non-theistic path), but venerated as an Enlightened Being", 
    "dataAiHint": "buddha statue"
  },
  {
    "name": "Madhvacharya",
    "era": "13th Century CE",
    "birthPlace": "Pajaka, Udupi, Karnataka, India",
    "philosophy": "Dvaita Vedanta (Dualism)",
    "biography": "Madhvacharya was a renowned philosopher and the chief proponent of the Dvaita (dualism) school of Vedanta. He emphasized the eternal difference between the individual soul (jiva) and the Supreme Being (Vishnu). He was a powerful debater and reformer who revived Vaishnavism in South India.",
    "keyTeachings": [
      "There is a fundamental difference between the individual soul and God (Vishnu).",
      "God, souls, and matter are eternally distinct.",
      "Devotion (Bhakti) to Vishnu leads to liberation.",
      "Vishnu is the supreme and independent reality."
    ],
    "majorWorks": [
      "Brahma Sutra Bhashya",
      "Bhagavad Gita Bhashya",
      "Upanishad Bhashyas",
      "Mahabharata Tatparya Nirnaya",
      "Anuvyakhyana"
    ],
    "legacy": "Founded the Dvaita Vedanta tradition and the Krishna Matha at Udupi. Influenced Bhakti movements and provided strong philosophical foundations for Vaishnava practices.",
    "associatedDeityOrConcept": "Vishnu (especially Krishna)",
    "dataAiHint": "indian saint"
  },
  {
    "name": "Chaitanya Mahaprabhu",
    "era": "15th Century CE",
    "birthPlace": "Nabadwip, West Bengal, India",
    "philosophy": "Achintya Bheda Abheda (Inconceivable Oneness and Difference)",
    "biography": "Chaitanya Mahaprabhu was a mystic saint and the key proponent of Gaudiya Vaishnavism. He emphasized ecstatic devotion (bhakti) to Lord Krishna, particularly in the form of congregational chanting (sankirtana). Considered an incarnation of both Radha and Krishna, he traveled extensively to spread devotional love.",
    "keyTeachings": [
      "Krishna is the Supreme Personality of Godhead.",
      "The soul is simultaneously one with and different from God (Achintya Bheda Abheda).",
      "Chanting the holy names of God (Harinama Sankirtan) is the highest spiritual practice.",
      "Pure love for Krishna (Prema Bhakti) is the ultimate goal of life."
    ],
    "majorWorks": [
      "Shikshashtakam (Eight Instructions)",
      "Teachings recorded in Chaitanya Charitamrita",
      "Biographical accounts in Chaitanya Bhagavata"
    ],
    "legacy": "Inspired the Bhakti movement in eastern India. Founder of the Gaudiya Vaishnava tradition, which later influenced the global spread of Krishna devotion through ISKCON.",
    "associatedDeityOrConcept": "Krishna (combined form of Radha-Krishna)",
    "dataAiHint": "spiritual leader"
  },
  {
    "name": "Sant Kabir",
    "era": "15th Century CE",
    "birthPlace": "Varanasi (Kashi), Uttar Pradesh, India",
    "philosophy": "Nirguna Bhakti (Devotion to the Formless God)",
    "biography": "Sant Kabir was a mystic poet and saint who emphasized devotion to a formless, universal God. Born into a Muslim weaver family, he rejected religious orthodoxy and sought spiritual truth beyond the boundaries of Hinduism and Islam. His dohas (couplets) carry deep spiritual wisdom and social messages.",
    "keyTeachings": [
      "God is beyond form, rituals, and scriptures.",
      "True devotion comes from inner purity and love.",
      "All human beings are equal; caste and religion do not define spirituality.",
      "Serve the living beings to serve God."
    ],
    "majorWorks": [
      "Kabir Doha (Couplets)",
      "Bijak",
      "Granthavali",
      "Anurag Sagar"
    ],
    "legacy": "Inspired millions across religious boundaries. His verses are included in the Guru Granth Sahib. A key voice against religious hypocrisy, promoting unity and inner realization.",
    "associatedDeityOrConcept": "Nirguna Rama (Formless Divine)",
    "dataAiHint": "mystic poet"
  },
  {
    "name": "Tulsidas",
    "era": "16th Century CE",
    "birthPlace": "Rajapur, Uttar Pradesh, India",
    "philosophy": "Saguna Bhakti (Devotion to God with Form)",
    "biography": "Tulsidas was a legendary poet-saint, philosopher, and devotee of Lord Rama. He composed the 'Ramcharitmanas', a retelling of Valmiki’s Ramayana in Awadhi, making Rama’s story accessible to the masses. He promoted devotion, righteousness, and moral values through his literary works.",
    "keyTeachings": [
      "Devotion to Lord Rama is the path to liberation.",
      "Righteous living (dharma) and moral conduct are essential.",
      "God resides in the hearts of those who are pure and humble.",
      "The holy name of Rama is greater than even Rama Himself."
    ],
    "majorWorks": [
      "Ramcharitmanas",
      "Hanuman Chalisa",
      "Vinaya Patrika",
      "Kavitavali",
      "Dohavali"
    ],
    "legacy": "Popularized the worship of Lord Rama and Hanuman among the common people. His works remain central to spiritual and cultural life in North India. Greatly influenced Bhakti literature and devotional practices.",
    "associatedDeityOrConcept": "Rama",
    "dataAiHint": "rama devotee"
  },
  {
    "name": "Swami Vivekananda",
    "era": "19th Century CE",
    "birthPlace": "Kolkata (Calcutta), West Bengal, India",
    "philosophy": "Neo-Vedanta (Universal Vedanta)",
    "biography": "Swami Vivekananda was a disciple of Sri Ramakrishna Paramahamsa and a key figure in the revival of Hinduism in modern India. He gained global recognition after his historic speech at the World Parliament of Religions in Chicago in 1893. He emphasized spiritual humanism and the unity of all religions.",
    "keyTeachings": [
      "All religions lead to the same truth.",
      "Each soul is potentially divine; the goal is to manifest this divinity.",
      "Serve humanity as service to God (Shiva Jnane Jiva Seva).",
      "Spiritual strength and self-confidence are essential for national regeneration."
    ],
    "majorWorks": [
      "Jnana Yoga",
      "Bhakti Yoga",
      "Raja Yoga",
      "Karma Yoga",
      "Lectures from Colombo to Almora"
    ],
    "legacy": "Founded the Ramakrishna Mission and Ramakrishna Math. Inspired spiritual nationalism and youth movements. Influenced thinkers globally and became a bridge between East and West in spiritual thought.",
    "associatedDeityOrConcept": "Universal Self (Atman); Inspired by Ramakrishna and Advaita Vedanta",
    "dataAiHint": "spiritual humanist"
  },
  {
    "name": "Mirabai",
    "era": "16th Century CE",
    "birthPlace": "Kudki, Rajasthan, India",
    "philosophy": "Prem Bhakti (Devotional Love for God)",
    "biography": "Mirabai was a Rajput princess and saint-poetess who dedicated her life to the love and worship of Lord Krishna. Defying societal norms and royal expectations, she renounced worldly life and composed deeply emotional bhajans expressing her divine love for Krishna. She is celebrated as a symbol of spiritual devotion, courage, and feminine strength.",
    "keyTeachings": [
      "True devotion transcends caste, gender, and social expectations.",
      "Loving surrender (prem bhakti) to God is the highest path.",
      "God resides in the heart of the devotee, beyond rituals and temples.",
      "One’s bond with God is personal, intense, and eternal."
    ],
    "majorWorks": [
      "Bhajans and poems devoted to Lord Krishna",
      "Padas (lyrical verses)",
      "Mirabai's compositions preserved in oral traditions and anthologies"
    ],
    "legacy": "Her songs are sung in temples and homes across India. A symbol of divine love and devotion, especially among women. She deeply influenced the Bhakti movement and devotional literature.",
    "associatedDeityOrConcept": "Krishna (as her divine lover and Lord)",
    "dataAiHint": "devotional poet"
  },
  {
    "name": "Guru Nanak",
    "era": "15th Century CE",
    "birthPlace": "Nankana Sahib, Punjab (now in Pakistan)",
    "philosophy": "Oneness of God and Equality of All",
    "biography": "Guru Nanak was the founder of Sikhism, a monotheistic religion that emphasizes devotion to one God and the equality of all human beings. He traveled extensively to spread his message of love, tolerance, and social justice, establishing the core principles of Sikhism.",
    "keyTeachings": [
      "There is one God (Ik Onkar), who is the same for all people.",
      "All human beings are equal, regardless of caste, gender, or religion.",
      "Live a truthful life, earn an honest living, and share with others.",
      "Meditation on God's name (Naam Japna) and service to humanity (Seva) are key spiritual practices."
    ],
    "majorWorks": [
      "Guru Granth Sahib (compiled by later Gurus, but Guru Nanak's hymns are central to it)",
      "Japji Sahib (the foundational prayer of Sikhism)",
      "Rehat Maryada (Sikh code of conduct, as passed down through Sikh Gurus)"
    ],
    "legacy": "Guru Nanak's teachings laid the foundation for Sikhism, a monotheistic faith that stresses equality, service, and devotion. His hymns and teachings continue to guide millions around the world.",
    "associatedDeityOrConcept": "One God (Waheguru)",
    "dataAiHint": "sikh guru"
  },
  {
    "name": "Sant Dnyaneshwar",
    "era": "13th Century CE",
    "birthPlace": "Apegaon, Maharashtra, India",
    "philosophy": "Bhakti and Advaita (Non-dualism with Devotion)",
    "biography": "Sant Dnyaneshwar was a child prodigy and a philosopher-saint of the Varkari tradition in Maharashtra. At a very young age, he composed the 'Dnyaneshwari', a Marathi commentary on the Bhagavad Gita, making the sacred text accessible to the common people. He emphasized devotion to Lord Vitthal (Krishna) and unity of all beings.",
    "keyTeachings": [
      "The Divine resides within all beings—see God in everyone.",
      "Spiritual knowledge and devotion must go hand in hand.",
      "One can attain liberation through loving devotion and righteous living.",
      "The world is a manifestation of the Supreme Consciousness."
    ],
    "majorWorks": [
      "Dnyaneshwari (commentary on the Bhagavad Gita)",
      "Amrutanubhav (philosophical treatise)",
      "Changdev Pasashti (verses addressed to the yogi Changdev)"
    ],
    "legacy": "A major pillar of the Bhakti movement in Maharashtra. His works are foundational to Marathi literature and spirituality. Revered as a divine child-saint who attained samadhi at the age of 21 in Alandi.",
    "associatedDeityOrConcept": "Vitthal (form of Lord Krishna)",
    "dataAiHint": "marathi saint"
  },
  {
    "name": "Sant Namdev",
    "era": "13th Century CE",
    "birthPlace": "Narsi Bahmani, Maharashtra, India",
    "philosophy": "Nirguna Bhakti (Devotion to the Formless God), Varkari Tradition",
    "biography": "Sant Namdev was a prominent saint, poet, and spiritual reformer known for his deep devotion to Lord Vitthal. He composed numerous abhangas (devotional hymns) in Marathi and Hindi. Namdev emphasized the omnipresence of God and rejected caste-based discrimination, preaching equality and love.",
    "keyTeachings": [
      "God resides in every being; serve all with love.",
      "True devotion transcends rituals and social status.",
      "Chanting God's name with sincerity purifies the heart.",
      "All paths leading to truth and love are sacred."
    ],
    "majorWorks": [
      "Abhangas in Marathi",
      "Hymns included in the Guru Granth Sahib (in Hindi)",
      "Poetic verses expressing intimate love for Vitthal"
    ],
    "legacy": "A key figure in the Bhakti movement, Sant Namdev bridged communities across caste and regional lines. His hymns are included in Sikh scripture, highlighting his universal appeal. He inspired future saints like Dnyaneshwar and Tukaram.",
    "associatedDeityOrConcept": "Vitthal (Krishna as worshipped in Pandharpur)",
    "dataAiHint": "marathi saint"
  },
  {
    "name": "Ramakrishna Paramahamsa",
    "era": "19th Century CE",
    "birthPlace": "Kamarpukur, West Bengal, India",
    "philosophy": "Experiential Vedanta, Universalism, Bhakti",
    "biography": "Ramakrishna was a mystic and saint who practiced various religious paths—including Hinduism, Islam, and Christianity—and declared that all lead to the same divine truth. He was known for his ecstatic devotion to Goddess Kali and his life of spiritual intensity. His teachings inspired the formation of the Ramakrishna Mission by his disciple Swami Vivekananda.",
    "keyTeachings": [
      "All religions are true and lead to the same God.",
      "God can be realized through sincere devotion and spiritual practice.",
      "The world is ephemeral; seek God with a pure heart.",
      "Renounce lust and greed to attain spiritual wisdom."
    ],
    "majorWorks": [
      "Teachings recorded by Mahendranath Gupta (M. or Master) in 'The Gospel of Sri Ramakrishna'",
      "Sayings and parables passed on orally by disciples"
    ],
    "legacy": "Symbol of religious harmony and universal spirituality. His teachings laid the foundation for the global Vedanta movement. Revered by spiritual seekers across traditions for his purity, simplicity, and divine realization.",
    "associatedDeityOrConcept": "Kali (Divine Mother), Advaita Vedanta, Universal God",
    "dataAiHint": "spiritual master"
  }
];

// Processed data for the component
const saints = saintsDataRaw.map(saint => ({
  ...saint,
  slug: saint.name.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, ''),
}));


export default function SaintsPage() {
  return (
    <div className="container mx-auto py-12 px-4">
      <section className="text-center mb-16">
        <Users className="h-20 w-20 text-primary mx-auto mb-6" />
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-primary">
          Saints & Philosophers
        </h1>
        <p className="mt-6 text-xl text-foreground/80 max-w-3xl mx-auto">
          Explore the biographies and profound teachings of the spiritual luminaries who have illuminated the path of Indian wisdom for millennia.
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {saints.map((saint) => (
          <Card 
            key={saint.slug} 
            className="flex flex-col overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300 bg-gradient-to-br from-card via-muted/20 to-card border-primary/20 rounded-lg"
          >
            <CardHeader className="bg-gradient-to-b from-primary/20 via-primary/10 to-transparent p-6">
              <div className="flex items-center space-x-4 mb-2">
                <Lightbulb className="h-10 w-10 text-primary flex-shrink-0" />
                <div>
                  <CardTitle className="text-2xl lg:text-3xl font-bold text-primary drop-shadow-md">{saint.name}</CardTitle>
                  <CardDescription className="text-md text-accent font-semibold">{saint.philosophy}</CardDescription>
                </div>
              </div>
              <p className="text-xs text-muted-foreground">{saint.era} &bull; {saint.birthPlace}</p>
            </CardHeader>
            
            <CardContent className="p-6 flex-grow flex flex-col">
              <p className="text-foreground/85 leading-relaxed text-sm mb-5 line-clamp-5 flex-grow">
                {saint.biography}
              </p>

              <div className="space-y-4 mt-auto">
                <div>
                  <h4 className="font-semibold text-sm text-accent mb-1.5 flex items-center"><SparklesIcon className="h-4 w-4 mr-2 text-yellow-500" /> Key Teachings</h4>
                  <ul className="list-disc list-inside space-y-1 text-xs text-foreground/75 pl-5 line-clamp-3">
                    {saint.keyTeachings.slice(0,3).map((teaching, index) => ( 
                      <li key={index}>{teaching}</li>
                    ))}
                  </ul>
                </div>
                
                {saint.associatedDeityOrConcept && (
                  <div>
                    <h4 className="font-semibold text-sm text-accent mb-1.5 flex items-center"><Landmark className="h-4 w-4 mr-2 text-indigo-500" /> Associated With</h4>
                    <p className="text-xs text-foreground/75 pl-1">{saint.associatedDeityOrConcept}</p>
                  </div>
                )}
              </div>
            </CardContent>
            {/* Learn more button removed as per user request */}
          </Card>
        ))}
      </div>
      
      <section className="mt-20 text-center p-8 bg-secondary/10 rounded-xl shadow-lg">
        <Heart className="h-12 w-12 text-secondary mx-auto mb-4" />
        <h2 className="text-3xl font-semibold mb-4 text-secondary-foreground">A Tapestry of Wisdom</h2>
        <p className="text-lg text-secondary-foreground/80 max-w-2xl mx-auto">
          The lives and teachings of these saints and philosophers form a rich tapestry, guiding humanity towards spiritual understanding and enlightenment. Their wisdom continues to resonate through ages.
        </p>
      </section>
    </div>
  );
}

