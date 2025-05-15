
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Milestone, CalendarClock, Users, Lightbulb, BookOpen } from "lucide-react";

export const metadata = {
  title: "Timeline of Wisdom - Sanatana Insights",
  description: "Trace the chronological evolution of Indian philosophy from ancient Vedic times to modern spiritual movements.",
};

const timelineData = {
  "timeline": [
    {
      "period": "Vedic Period",
      "duration": "c. 1500 - 500 BCE",
      "title": "Composition of the Vedas and Early Speculations",
      "key_developments": [
        "Composition of the Samhitas (Rigveda, Yajurveda, Samaveda, Atharvaveda)",
        "Brahmanas (ritualistic texts)",
        "Aranyakas (philosophical interpretations of rituals)",
        "Early Upanishads (philosophical insights into cosmic order)",
        "Rta (cosmic order) and the role of deities in the universe",
        "Development of the first philosophical concepts of Dharma and Karma"
      ],
      "notable_figures": [
        "Vyasa (compiler of Vedas)",
        "Rishi sages (Bharadvaja, Agastya, Vishvamitra)"
      ],
      "key_ideas": [
        "Cosmic order (Rta) governs the universe",
        "Deities as representations of cosmic forces",
        "Concept of sacrifice (Yajna) to maintain cosmic harmony"
      ]
    },
    {
      "period": "Upanishadic Period",
      "duration": "c. 800 - 200 BCE",
      "title": "Rise of Upanishadic Thought and Shramana Movements",
      "key_developments": [
        "Exploration of the nature of Brahman (universal consciousness) and Atman (individual soul)",
        "Philosophical focus on the concepts of Karma and Moksha (liberation)",
        "Shramana movements (Buddhism, Jainism) arise as reformations of the Vedic tradition",
        "Pioneering works such as the Principal Upanishads"
      ],
      "notable_figures": [
        "Adi Shankaracharya (founder of Advaita Vedanta)",
        "Sage Yajnavalkya (author of the Brihadaranyaka Upanishad)",
        "Gautama Buddha (founder of Buddhism)",
        "Mahavira (founder of Jainism)"
      ],
      "key_ideas": [
        "Brahman and Atman are one and the same (Advaita)",
        "Concept of Atman (individual soul) being eternal and indestructible",
        "Doctrine of Karma and its impact on future lives",
        "Moksha (liberation) through self-realization"
      ]
    },
    {
      "period": "Classical Philosophical Development",
      "duration": "c. 200 BCE - 1000 CE",
      "title": "Systematization of Orthodox Schools and Philosophical Sutras",
      "key_developments": [
        "Systematization of the six orthodox philosophical schools (Darshanas)",
        "Composition of major philosophical Sutras and commentaries",
        "Rise of logical and ethical systems like Nyaya and Vaisheshika",
        "Development of Yoga philosophy with Patanjali’s Yoga Sutras",
        "Brahma Sutras and Vedantic philosophy by Badrayana"
      ],
      "notable_figures": [
        "Patanjali (Yoga Sutras)",
        "Gautama (founder of Nyaya)",
        "Kanada (founder of Vaisheshika)",
        "Badrayana (author of Brahma Sutras)",
        "Nagarjuna (Buddhist philosopher, Madhyamaka school)"
      ],
      "key_ideas": [
        "Logical reasoning and epistemology (Nyaya)",
        "Atomism and the nature of reality (Vaisheshika)",
        "Path of meditation and liberation (Yoga)",
        "The doctrine of emptiness (Madhyamaka, Nagarjuna)",
        "Concept of Brahman as the ultimate reality"
      ]
    },
    {
      "period": "Medieval Bhakti & Reform Movements",
      "duration": "c. 1000 - 1700 CE",
      "title": "Flourishing of Bhakti and Reform Movements",
      "key_developments": [
        "Emergence of Bhakti movements focusing on devotion to a personal god",
        "Philosophical foundations for Dvaita and Vishishtadvaita schools",
        "Influence of great saint-philosophers like Ramanujacharya and Madhvacharya",
        "Rise of Sikhism under Guru Nanak",
        "Influence of saints like Kabir and Mirabai in promoting devotion over ritualism"
      ],
      "notable_figures": [
        "Ramanujacharya (Vishishtadvaita)",
        "Madhvacharya (Dvaita philosophy)",
        "Kabir (Bhakti poet-saint)",
        "Guru Nanak (founder of Sikhism)",
        "Mirabai (devotee of Lord Krishna)"
      ],
      "key_ideas": [
        "Vishishtadvaita (qualified non-dualism) by Ramanujacharya",
        "Dvaita (dualism) by Madhvacharya",
        "Emphasis on personal devotion to God (Bhakti)",
        "The rejection of caste and ritual in favor of simple devotion (Kabir)",
        "Universal brotherhood and one God (Guru Nanak)"
      ]
    },
    {
      "period": "Modern Indian Philosophy",
      "duration": "c. 1700 CE - Present",
      "title": "Renaissance of Indian Thought and Neo-Vedanta",
      "key_developments": [
        "Revival of Advaita Vedanta and global spread of Indian spiritual ideas",
        "Swami Vivekananda’s contributions to philosophy and spiritual practice",
        "Sri Aurobindo’s Integral Yoga and philosophy of human evolution",
        "Influence of Indian thought on Western intellectuals",
        "Modern interpretation of Vedanta and the synthesis of science and spirituality"
      ],
      "notable_figures": [
        "Swami Vivekananda (Neo-Vedanta)",
        "Sri Aurobindo (Integral Yoga)",
        "Ramakrishna Paramahamsa (mystical teachings)",
        "Mahatma Gandhi (philosophy of non-violence, Satyagraha)"
      ],
      "key_ideas": [
        "Advaita Vedanta revival and emphasis on self-realization",
        "Integral Yoga for spiritual and material transformation (Sri Aurobindo)",
        "Practical Vedanta for modern life (Swami Vivekananda)",
        "Non-violence and truth as the basis for political and social life (Mahatma Gandhi)",
        "Harmonization of spirituality and science"
      ]
    }
  ],
  "summary": {
    "overview": "The history of Sanatan Dharma (eternal truth) is an ever-evolving journey of spiritual and philosophical enlightenment. From the early Vedic period to the present, the journey of wisdom and knowledge has shaped not only Indian civilization but also influenced global thought.",
    "legacy": "The evolution of Indian philosophical thought continues to inspire and guide millions worldwide. Whether through the ancient wisdom of the Vedas, the philosophical doctrines of the Upanishads, or the modern interpretations by thinkers like Swami Vivekananda, the legacy of Sanatan Dharma is vast and profound."
  }
};

export default function TimelinePage() {
  return (
    <div className="container mx-auto py-8">
      <section className="text-center mb-12">
        <CalendarClock className="h-16 w-16 text-primary mx-auto mb-4" />
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-primary">
          Timeline of Wisdom
        </h1>
        <p className="mt-4 text-xl text-foreground/80 max-w-3xl mx-auto">
          Journey through the ages and witness the evolution of Indian philosophical thought, from its ancient roots to its contemporary expressions.
        </p>
      </section>

      <div className="relative pl-8 border-l-2 border-primary/50 space-y-12">
        {timelineData.timeline.map((event, index) => (
          <div key={index} className="relative">
            <div className="absolute -left-[2.1rem] top-1.5 transform -translate-x-1/2 -translate-y-1/2">
              <Milestone className="h-8 w-8 text-primary bg-background p-1 rounded-full border-2 border-primary/70" />
            </div>
            <Card className="ml-4 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-card">
              <CardHeader>
                <CardTitle className="text-2xl text-accent">{event.period}</CardTitle>
                <CardDescription className="text-primary/90">{event.duration}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <h3 className="font-semibold text-xl text-primary">{event.title}</h3>
                
                {event.key_developments && event.key_developments.length > 0 && (
                  <div>
                    <h4 className="font-medium text-accent flex items-center mb-1">
                      <BookOpen className="h-5 w-5 mr-2" /> Key Developments:
                    </h4>
                    <ul className="list-disc list-inside text-foreground/80 space-y-1 pl-4">
                      {event.key_developments.map((dev, i) => (
                        <li key={`dev-${index}-${i}`}>{dev}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {event.notable_figures && event.notable_figures.length > 0 && (
                  <div>
                    <h4 className="font-medium text-accent flex items-center mb-1">
                      <Users className="h-5 w-5 mr-2" /> Notable Figures:
                    </h4>
                    <ul className="list-disc list-inside text-foreground/80 space-y-1 pl-4">
                      {event.notable_figures.map((fig, i) => (
                        <li key={`fig-${index}-${i}`}>{fig}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {event.key_ideas && event.key_ideas.length > 0 && (
                  <div>
                    <h4 className="font-medium text-accent flex items-center mb-1">
                      <Lightbulb className="h-5 w-5 mr-2" /> Key Ideas:
                    </h4>
                    <ul className="list-disc list-inside text-foreground/80 space-y-1 pl-4">
                      {event.key_ideas.map((idea, i) => (
                        <li key={`idea-${index}-${i}`}>{idea}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
      
      <section className="mt-16 p-8 bg-muted/50 rounded-lg shadow-md">
        <h2 className="text-3xl font-semibold mb-4 text-center text-primary">An Unfolding Legacy</h2>
        <div className="space-y-4 text-foreground/80 text-lg">
          <p>{timelineData.summary.overview}</p>
          <p>{timelineData.summary.legacy}</p>
        </div>
      </section>
    </div>
  );
}
