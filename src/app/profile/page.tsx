import { UserProfileClient } from "./user-profile-client";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { User } from "lucide-react";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "My Profile - Sanatana Insights",
  description: "View your progress, enrolled school, liked concepts, and activity on Sanatana Insights.",
};

export default function ProfilePage() {
  return (
    <div className="container mx-auto py-8">
      <section className="text-center mb-12">
         <User className="h-16 w-16 text-primary mx-auto mb-4" />
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-primary">
          My Profile
        </h1>
        <p className="mt-4 text-xl text-foreground/80 max-w-3xl mx-auto">
          Track your journey, manage your preferences, and see your contributions to the Sanatana Insights community.
        </p>
      </section>
      <UserProfileClient />
    </div>
  );
}
