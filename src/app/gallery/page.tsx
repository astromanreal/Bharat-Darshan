import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { Image as ImageIcon, Music2, Film } from "lucide-react";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Media Gallery - Spiritual Art & Visuals - Sanatana Insights",
  description: "Explore sacred Indian art, spiritual visuals, mandalas, philosophical depictions, and images inspired by Sanatana Dharma traditions.",
  keywords: ["Indian Spiritual Art", "Hindu Art", "Sacred Visuals", "Mandala Art", "Philosophical Art", "Sanatana Dharma Gallery", "Divine Imagery", "Vedic Art", "Temple Art"],
};

// Updated placeholder data
const galleryItems = [
  {
    id: "spiritual-art-1",
    title: "Cosmic Contemplation",
    type: "Art",
    imageUrl: "https://i.pinimg.com/736x/0f/09/a7/0f09a7b7d42c9b29d0ff6a5ef26584b0.jpg",
    dataAiHint: "abstract art",
    description: "A vibrant depiction of spiritual introspection and cosmic connection.",
  },
  {
    id: "sacred-symbolism",
    title: "Sacred Geometry",
    type: "Art",
    imageUrl: "https://i.pinimg.com/736x/5b/4d/0e/5b4d0ea23b026f6a822eb120ba6d6aad.jpg",
    dataAiHint: "geometric patterns",
    description: "Intricate patterns representing universal harmony and spiritual symbols.",
  },
  {
    id: "meditative-visage",
    title: "Meditative Visage",
    type: "Art",
    imageUrl: "https://i.pinimg.com/736x/a6/bb/d4/a6bbd43107d8373a676f4dc5616e8ce0.jpg",
    dataAiHint: "buddha face",
    description: "Artistic portrayal of a serene, meditative figure, evoking peace.",
  },
  {
    id: "divine-energy",
    title: "Divine Energy Flow",
    type: "Art",
    imageUrl: "https://i.pinimg.com/736x/4b/5b/50/4b5b5098d483c375f5990749656448c5.jpg",
    dataAiHint: "spiritual energy",
    description: "An abstract representation of flowing spiritual energy and consciousness.",
  },
  {
    id: "ancient-wisdom-art",
    title: "Symbol of Wisdom",
    type: "Art",
    imageUrl: "https://i.pinimg.com/736x/f6/d7/4d/f6d74d6c2adf8795c108c2f230afe405.jpg",
    dataAiHint: "om symbol",
    description: "Visual art invoking ancient scriptural wisdom through symbolic representation.",
  },
  {
    id: "mandala-universe",
    title: "Mandala of the Universe",
    type: "Art",
    imageUrl: "https://i.pinimg.com/736x/48/b3/4e/48b34e24005d2e23851c57f5e2a570ac.jpg",
    dataAiHint: "mandala art",
    description: "A complex mandala representing the cosmic order and spiritual journey.",
  },
  {
    id: "lotus-awakening",
    title: "Lotus Awakening",
    type: "Art",
    imageUrl: "https://i.pinimg.com/736x/2c/4b/cd/2c4bcd8214973138ef9030f6c1d2bbfc.jpg",
    dataAiHint: "lotus flower",
    description: "Symbolic representation of spiritual awakening and purity through the lotus.",
  },
  {
    id: "vedic-illumination",
    title: "Vedic Illumination",
    type: "Art",
    imageUrl: "https://i.pinimg.com/736x/d0/98/87/d098878e1b709c01a70a4b156989327e.jpg",
    dataAiHint: "vedic art",
    description: "Artwork inspired by Vedic scriptures, depicting light and wisdom.",
  },
  {
    id: "chakra-harmony",
    title: "Chakra Harmony",
    type: "Art",
    imageUrl: "https://i.pinimg.com/736x/d9/d5/48/d9d548ef1d3f7a6d6337f2513cbd0997.jpg",
    dataAiHint: "chakra art",
    description: "Visual representation of the body's energy centers in harmonious alignment.",
  },
  {
    id: "celestial-dance",
    title: "Celestial Dance",
    type: "Art",
    imageUrl: "https://i.pinimg.com/736x/1c/ac/3a/1cac3a670dcdee2b80daec625e77012d.jpg",
    dataAiHint: "shiva nataraja",
    description: "Depiction of a divine dance, symbolizing cosmic creation and destruction.",
  },
  {
    id: "path-to-enlightenment",
    title: "Path to Enlightenment",
    type: "Art",
    imageUrl: "https://i.pinimg.com/736x/2b/da/05/2bda053b0511852c670c3c2843f4c4fa.jpg",
    dataAiHint: "spiritual path",
    description: "An artistic vision of the journey towards spiritual enlightenment and peace.",
  },
  {
    id: "ganesha-blessings",
    title: "Ganesha's Blessings",
    type: "Art",
    imageUrl: "https://i.pinimg.com/736x/f1/80/66/f1806699bbedd96a52ec5d84da4fd17a.jpg",
    dataAiHint: "ganesha art",
    description: "Artwork featuring Lord Ganesha, bestower of wisdom and remover of obstacles.",
  },
  {
    id: "sacred-river",
    title: "Sacred River Flow",
    type: "Art",
    imageUrl: "https://i.pinimg.com/736x/92/14/f6/9214f6bde15ed7430c2602341e9ef6d7.jpg",
    dataAiHint: "ganges river",
    description: "Symbolic representation of a holy river, signifying purification and life.",
  },
  {
    id: "tree-of-life-mandala",
    title: "Tree of Life Mandala",
    type: "Art",
    imageUrl: "https://i.pinimg.com/736x/3e/3d/1f/3e3d1fef6c1f075c0db107ea4f4f456a.jpg",
    dataAiHint: "tree life",
    description: "A mandala incorporating the Tree of Life, symbolizing interconnectedness.",
  },
];

export default function GalleryPage() {
  return (
    <div className="container mx-auto py-8">
      <section className="text-center mb-12">
        <ImageIcon className="h-16 w-16 text-primary mx-auto mb-4" />
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-primary">
          Media Gallery
        </h1>
        <p className="mt-4 text-xl text-foreground/80 max-w-3xl mx-auto">
          Immerse yourself in the sights and sounds of Indian spirituality. Explore sacred art, chants, manuscripts, and more.
        </p>
      </section>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {galleryItems.map((item) => (
          <Card key={item.id} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group">
            <div className="relative w-full h-80"> {/* Increased height for better display of new images */}
              <Image
                src={item.imageUrl}
                alt={item.title}
                layout="fill"
                objectFit="cover"
                data-ai-hint={item.dataAiHint}
                className="transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <h3 className="text-white text-lg font-semibold">{item.title}</h3>
              </div>
            </div>
            <CardContent className="p-4">
              <div className="flex items-center text-sm text-muted-foreground mb-1">
                {/* Kept existing icon logic, but all new items are 'Art' */}
                {item.type === "Audio" && <Music2 className="h-4 w-4 mr-2 text-accent" />}
                {item.type === "Art" && <ImageIcon className="h-4 w-4 mr-2 text-accent" />}
                {item.type === "Manuscript" && <ImageIcon className="h-4 w-4 mr-2 text-accent" />}
                {item.type === "Animation" && <Film className="h-4 w-4 mr-2 text-accent" />}
                {item.type === "Photography" && <ImageIcon className="h-4 w-4 mr-2 text-accent" />}
                <span>{item.type}</span>
              </div>
              <CardDescription className="text-foreground/80 leading-tight h-12 overflow-hidden">
                {item.description}
              </CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
