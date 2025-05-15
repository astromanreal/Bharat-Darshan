import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Construction, Lightbulb, Quote, BookOpenText, History, Trophy, ListChecks } from "lucide-react"; // Added History, Trophy, ListChecks
import Link from "next/link";
import QuizClient from "@/components/quiz-client"; 
import { ShlokaDisplay } from "@/components/shloka-display";

export const metadata = {
  title: "Learn & Quiz - Sanatana Insights",
  description: "Engage with interactive quizzes on core Sanatana Dharma concepts and track your progress. Our Philosopher AI is under development.",
};

export default function AskAiPage() {
  return (
    <div className="container mx-auto py-8">
      {/* AI Coming Soon Section */}
      <section className="text-center mb-12">
        <Construction className="h-20 w-20 text-primary mx-auto mb-6" />
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-primary">
          Philosopher AI - Coming Soon!
        </h1>
        <p className="mt-6 text-xl text-foreground/80 max-w-3xl mx-auto">
          We are diligently working on bringing you an insightful AI Philosopher, trained on the vast wisdom of ancient Indian scriptures. This feature will soon allow you to explore profound philosophical questions.
        </p>
        <p className="mt-4 text-lg text-accent max-w-2xl mx-auto">
          Thank you for your patience! In the meantime, test your knowledge and track your progress with our interactive quiz module below.
        </p>
      </section>

      {/* Interactive Quiz Section */}
      <section className="my-16">
        <div className="text-center mb-10">
          <Lightbulb className="h-16 w-16 text-primary mx-auto mb-4" /> 
          <h2 className="scroll-m-20 text-3xl font-semibold tracking-tight text-primary">
            Interactive Quiz Module
          </h2>
          <p className="mt-3 text-lg text-foreground/80 max-w-2xl mx-auto">
            Sharpen your understanding of key Sanatana Dharma concepts with this interactive quiz. Your progress and history will be saved locally.
          </p>
        </div>
        <QuizClient /> {/* Render the QuizClient component */}
      </section>

      <Card className="max-w-3xl mx-auto shadow-xl my-12 bg-gradient-to-br from-background to-secondary/5 rounded-lg">
        <CardHeader className="items-center">
          <Lightbulb className="h-12 w-12 text-accent mb-2" />
          <CardTitle className="text-2xl">What to Expect from the AI</CardTitle>
          <CardDescription>
            Soon, you&apos;ll be able to ask our AI questions like:
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-3 text-center text-foreground/90">
          <p>&quot;What is the nature of Dharma according to the Gita?&quot;</p>
          <p>&quot;Explain the concept of Maya.&quot;</p>
          <p>&quot;How does Karma influence rebirth?&quot;</p>
        </CardContent>
      </Card>

      <section className="my-16">
        <h2 className="text-3xl font-semibold text-center mb-8 text-primary">
          While You Wait, Ponder This Wisdom
        </h2>
        <ShlokaDisplay
          sanskrit="मन एव मनुष्याणां कारणं बन्धमोक्षयोः ।"
          hindi="मन ही मनुष्यों के बन्धन और मोक्ष का कारण है ।"
          english="The mind alone is the cause of human bondage and liberation."
        />
      </section>

      <section className="mt-16 text-center">
        <h2 className="text-2xl font-semibold mb-4 text-primary">Stay Curious</h2>
        <div className="max-w-2xl mx-auto space-y-6">
          <Card className="shadow-md rounded-lg">
            <CardHeader>
              <CardTitle className="text-xl text-accent flex items-center justify-center">
                <BookOpenText className="mr-2 h-6 w-6" />
                Explore Our Existing Resources
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground/80">
                Feel free to explore other sections of Sanatana Insights, such as our <Link href="/texts" className="text-primary hover:underline">Texts & Scriptures</Link> or <Link href="/concepts" className="text-primary hover:underline">Themes & Concepts</Link> pages.
              </p>
            </CardContent>
          </Card>
          <Card className="shadow-md rounded-lg">
            <CardHeader>
              <CardTitle className="text-xl text-accent flex items-center justify-center">
                <Quote className="mr-2 h-6 w-6" />
                A Thought on Inquiry
              </CardTitle>
            </CardHeader>
            <CardContent>
              <blockquote className="italic text-foreground/80 border-l-4 border-primary pl-4 py-2">
                &quot;The important thing is not to stop questioning. Curiosity has its own reason for existing.&quot; - Albert Einstein (adapted)
              </blockquote>
              <p className="text-sm text-muted-foreground mt-2">
                Keep your philosophical questions ready for when our AI Philosopher arrives!
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
