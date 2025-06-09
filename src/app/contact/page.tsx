import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MessageCircle, Users, Send, Linkedin, Twitter, Instagram, Github } from "lucide-react";
import Link from "next/link";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Contact Us - Sanatana Insights",
  description: "Get in touch with the Sanatana Insights team. We'd love to hear from you whether you have questions, feedback, or partnership inquiries.",
  keywords: ["Contact Sanatana Insights", "Feedback", "Inquiries", "Support", "Indian Philosophy Contact", "Spiritual Guidance Contact"],
};

const socialLinks = [
  {
    name: "Twitter / X",
    href: "https://twitter.com/Sathyamsarthak",
    icon: <Twitter className="h-5 w-5" />,
    username: "@Sathyamsarthak",
  },
  {
    name: "Instagram",
    href: "https://instagram.com/srishikharji",
    icon: <Instagram className="h-5 w-5" />,
    username: "@srishikharji",
  },
  {
    name: "GitHub",
    href: "https://github.com/astromanreal",
    icon: <Github className="h-5 w-5" />,
    username: "astromanreal",
  },
];

export default function ContactPage() {
  return (
    <div className="container mx-auto py-12 px-4">
      <section className="text-center mb-16">
        <Mail className="h-20 w-20 text-primary mx-auto mb-6" />
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-primary">
          Get in Touch
        </h1>
        <p className="mt-6 text-xl text-foreground/80 max-w-3xl mx-auto">
          We&apos;d love to hear from you. Whether you have a question, feedback, or just want to connect, feel free to reach out through any of the channels below.
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        <Card className="shadow-xl hover:shadow-2xl transition-shadow duration-300">
          <CardHeader className="pb-4">
            <div className="flex items-center space-x-3 mb-2">
              <Send className="h-8 w-8 text-accent" />
              <CardTitle className="text-2xl text-accent">Direct Contact</CardTitle>
            </div>
            <CardDescription>For direct inquiries, please use the details below.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6 pt-2">
            <div className="flex items-center space-x-4 p-4 bg-muted/50 rounded-lg">
              <Mail className="h-6 w-6 text-primary" />
              <div>
                <p className="font-semibold text-foreground">Email</p>
                <a href="mailto:astroman6569@gmail.com" className="text-foreground/80 hover:text-primary transition-colors">
                  astroman6569@gmail.com
                </a>
              </div>
            </div>
            <div className="flex items-center space-x-4 p-4 bg-muted/50 rounded-lg">
              <Phone className="h-6 w-6 text-primary" />
              <div>
                <p className="font-semibold text-foreground">Phone</p>
                <a href="tel:+918102116569" className="text-foreground/80 hover:text-primary transition-colors">
                  +91 8102116569
                </a>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-xl hover:shadow-2xl transition-shadow duration-300">
          <CardHeader className="pb-4">
            <div className="flex items-center space-x-3 mb-2">
              <Users className="h-8 w-8 text-accent" />
              <CardTitle className="text-2xl text-accent">Connect Online</CardTitle>
            </div>
            <CardDescription>Follow us and engage with our community on social media.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 pt-2">
            {socialLinks.map((link) => (
              <Button
                key={link.name}
                variant="outline"
                className="w-full justify-start text-left h-auto py-3 shadow-sm hover:shadow-md transition-shadow"
                asChild
              >
                <Link href={link.href} target="_blank" rel="noopener noreferrer">
                  <div className="flex items-center space-x-3">
                    {link.icon}
                    <div>
                      <p className="font-medium text-foreground">{link.name}</p>
                      <p className="text-sm text-muted-foreground">{link.username}</p>
                    </div>
                  </div>
                </Link>
              </Button>
            ))}
          </CardContent>
        </Card>
      </div>

      <section className="mt-20 text-center p-8 bg-secondary/10 rounded-xl shadow-lg">
        <MessageCircle className="h-12 w-12 text-secondary mx-auto mb-4" />
        <h2 className="text-3xl font-semibold mb-4 text-secondary-foreground">Your Voice Matters</h2>
        <p className="text-lg text-secondary-foreground/80 max-w-2xl mx-auto">
          Your feedback helps us grow and improve Sanatana Insights. We appreciate you taking the time to connect with us and share your thoughts or inquiries.
        </p>
      </section>
    </div>
  );
}
