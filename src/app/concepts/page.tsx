
"use client";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Brain, Heart, EyeOff, LucideIcon } from "lucide-react"; 
import Link from "next/link";
import { useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";
import { mockUser } from "@/lib/constants";
import { detailedConceptsData, type DetailedConcept, getConceptTitle } from "@/lib/data/concepts-data"; 

export default function ConceptsPage() {
  const [likedConcepts, setLikedConcepts] = useState<string[]>([]);
  const { toast } = useToast();

  useEffect(() => {
    const currentLiked = [...mockUser.likedConceptSlugs];
    setLikedConcepts(currentLiked);
  }, []);

  const handleLikeConcept = (conceptSlug: string) => {
    const conceptName = getConceptTitle(conceptSlug) || "Concept";
    const isCurrentlyLiked = likedConcepts.includes(conceptSlug);
    let newLikedConcepts: string[];

    if (isCurrentlyLiked) {
      newLikedConcepts = likedConcepts.filter((slug) => slug !== conceptSlug);
      toast({
        title: "Unliked Concept",
        description: `You have unliked "${conceptName}".`,
      });
    } else {
      newLikedConcepts = [...likedConcepts, conceptSlug];
      toast({
        title: "Liked Concept!",
        description: `You have liked "${conceptName}".`,
      });
    }
    setLikedConcepts(newLikedConcepts);
    mockUser.likedConceptSlugs = newLikedConcepts;
  };

  const getDisplayMeaning = (concept: DetailedConcept): string => {
    if (typeof concept.meaning === 'string') {
      return concept.meaning;
    }
    // For object meanings, try to find a "summary" or "viveka" or first key.
    if (concept.meaning.summary) return concept.meaning.summary;
    if (concept.meaning.viveka) return concept.meaning.viveka; // For VivekaVairagya like cases
    const firstKey = Object.keys(concept.meaning)[0];
    if (firstKey) return concept.meaning[firstKey];
    return "Explore this concept";
  };


  return (
    <div className="container mx-auto py-8">
      <section className="text-center mb-12">
        <Brain className="h-16 w-16 text-primary mx-auto mb-4" />
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-primary">
          Themes & Concepts
        </h1>
        <p className="mt-4 text-xl text-foreground/80 max-w-3xl mx-auto">
          Unravel the fundamental ideas that form the philosophical framework of Indian spiritual traditions. These concepts offer profound insights into the nature of existence and the human condition.
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {detailedConceptsData.map((concept) => {
          const IconComponent = concept.icon || Brain; // Fallback icon
          return (
            <Card key={concept.slug} className="flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="flex-row items-start justify-between space-x-4">
                <div className="flex items-center space-x-4">
                  <IconComponent className="h-8 w-8 text-primary" />
                  <CardTitle className="text-2xl">{concept.title ? concept.title : concept.name}</CardTitle>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => handleLikeConcept(concept.slug)}
                  aria-label={likedConcepts.includes(concept.slug) ? `Unlike ${concept.name}` : `Like ${concept.name}`}
                >
                  <Heart className={`h-6 w-6 ${likedConcepts.includes(concept.slug) ? "fill-red-500 text-red-500" : "text-muted-foreground"}`} />
                </Button>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col justify-between">
                <div>
                  <CardDescription className="text-foreground/90 leading-relaxed mb-4 line-clamp-4">
                    {getDisplayMeaning(concept)}
                  </CardDescription>
                </div>
                <Link href={`/concepts/${concept.slug}`} className="text-accent hover:underline font-semibold mt-auto self-start">
                  Explore Deeper
                </Link>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <section className="mt-16 text-center p-6 bg-muted/50 rounded-lg">
        <h2 className="text-2xl font-semibold mb-3 text-primary">Interconnected Wisdom</h2>
        <p className="text-foreground/80 max-w-2xl mx-auto">
          These concepts are often interconnected, forming a holistic understanding of life&apos;s journey. Their study can lead to greater clarity, purpose, and spiritual growth.
        </p>
      </section>
    </div>
  );
}

