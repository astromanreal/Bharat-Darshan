import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Download, BookOpen, PlaySquare, ListChecks } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Learning & Resources - Sanatana Insights",
  description: "Access downloadable scriptures, reading guides, video lectures, podcasts, and a glossary of Sanskrit terms to deepen your understanding of Indian philosophy.",
};

export default function ResourcesPage() {
  return (
    <div className="container mx-auto py-8">
      <section className="text-center mb-12">
        <BookOpen className="h-16 w-16 text-primary mx-auto mb-4" />
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-primary">
          Learning & Resources
        </h1>
        <p className="mt-4 text-xl text-foreground/80 max-w-3xl mx-auto">
          Deepen your journey into Indian philosophy with our curated collection of resources. Find texts, guides, media, and tools to support your study and practice.
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card className="shadow-lg hover:shadow-xl transition-shadow">
          <CardHeader className="flex-row items-center space-x-3">
            <Download className="h-8 w-8 text-accent" />
            <CardTitle className="text-2xl text-accent">Downloadable Texts</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="mb-4">Access open-source scriptures and important philosophical texts in PDF format.</CardDescription>
            <ul className="list-disc list-inside space-y-2 text-foreground/90">
              <li><Link href="#" className="hover:text-primary hover:underline">The Upanishads (Translation)</Link> (Placeholder)</li>
              <li><Link href="#" className="hover:text-primary hover:underline">Patanjali's Yoga Sutras (Commentary)</Link> (Placeholder)</li>
              <li><Link href="#" className="hover:text-primary hover:underline">Bhagavad Gita (Sanskrit & Translation)</Link> (Placeholder)</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="shadow-lg hover:shadow-xl transition-shadow">
          <CardHeader className="flex-row items-center space-x-3">
            <BookOpen className="h-8 w-8 text-accent" />
            <CardTitle className="text-2xl text-accent">Reading Guides</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="mb-4">Navigate the vast ocean of Indian philosophical literature with our introductory and advanced reading guides.</CardDescription>
             <ul className="list-disc list-inside space-y-2 text-foreground/90">
              <li><Link href="#" className="hover:text-primary hover:underline">Beginner's Guide to Vedanta</Link> (Placeholder)</li>
              <li><Link href="#" className="hover:text-primary hover:underline">Exploring the Darshanas</Link> (Placeholder)</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="shadow-lg hover:shadow-xl transition-shadow">
          <CardHeader className="flex-row items-center space-x-3">
            <PlaySquare className="h-8 w-8 text-accent" />
            <CardTitle className="text-2xl text-accent">Video Lectures & Podcasts</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="mb-4">Engage with teachings from scholars and spiritual leaders through video lectures and podcasts.</CardDescription>
            <ul className="list-disc list-inside space-y-2 text-foreground/90">
              <li><Link href="#" className="hover:text-primary hover:underline">Lecture Series on Advaita Vedanta</Link> (Placeholder)</li>
              <li><Link href="#" className="hover:text-primary hover:underline">Podcast: Wisdom of the Sages</Link> (Placeholder)</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="shadow-lg hover:shadow-xl transition-shadow">
          <CardHeader className="flex-row items-center space-x-3">
            <ListChecks className="h-8 w-8 text-accent" />
            <CardTitle className="text-2xl text-accent">Glossary of Sanskrit Terms</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="mb-4">Understand key Sanskrit philosophical terms with our comprehensive glossary.</CardDescription>
            <Link href="#" className="text-primary hover:underline font-semibold">Access Glossary</Link> (Placeholder)
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
