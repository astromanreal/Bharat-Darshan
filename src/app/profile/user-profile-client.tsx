
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { mockUser, mockSchoolsData, getSchoolBySlugMock, type MockSchool, type MockUser } from "@/lib/constants";
import { getConceptBySlug as getConceptDataBySlug, type DetailedConcept } from "@/lib/data/concepts-data"; // Updated import
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { Award, BookOpen, Heart, Activity, Users, Compass, Star, Edit3 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

// Helper to get first letter for Avatar fallback
const getInitials = (name: string) => {
  const names = name.split(' ');
  if (names.length > 1) {
    return `${names[0][0]}${names[names.length - 1][0]}`.toUpperCase();
  }
  return name.substring(0, 2).toUpperCase();
};

export function UserProfileClient() {
  const [user, setUser] = useState<MockUser>(mockUser);
  const [enrolledSchool, setEnrolledSchool] = useState<MockSchool | null | undefined>(null);
  const [likedConcepts, setLikedConcepts] = useState<DetailedConcept[]>([]); // Changed to DetailedConcept
  const { toast } = useToast();

  useEffect(() => {
    if (user.enrolledSchoolSlug) {
      setEnrolledSchool(getSchoolBySlugMock(user.enrolledSchoolSlug));
    } else {
      setEnrolledSchool(null);
    }
    // Use likedConceptSlugs and getConceptDataBySlug
    setLikedConcepts(user.likedConceptSlugs.map(slug => getConceptDataBySlug(slug)).filter(c => c !== undefined) as DetailedConcept[]);
  }, [user]);

  const handleEnrollInSchool = (slug: string) => {
    const schoolToEnroll = getSchoolBySlugMock(slug);
    if (schoolToEnroll) {
      setUser(prevUser => ({ ...prevUser, enrolledSchoolSlug: slug }));
      toast({
        title: "Successfully Enrolled!",
        description: `You are now enrolled in ${schoolToEnroll.name}.`,
      });
    }
  };

  const handleUnenroll = () => {
    if (enrolledSchool) {
         toast({
            title: "Unenrolled",
            description: `You have unenrolled from ${enrolledSchool.name}.`,
        });
        setUser(prevUser => ({ ...prevUser, enrolledSchoolSlug: null }));
    }
  };

  const pointsToNextLevel = (user.level + 1) * 1000; // Example calculation
  const progressPercentage = Math.min((user.points / pointsToNextLevel) * 100, 100);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Left Column: User Info & Progress */}
      <div className="md:col-span-1 space-y-6">
        <Card className="shadow-lg">
          <CardHeader className="items-center text-center">
            <Avatar className="w-24 h-24 mb-4 border-2 border-primary">
              <AvatarImage src={user.avatarUrl} alt={user.name} data-ai-hint="profile avatar" />
              <AvatarFallback>{getInitials(user.name)}</AvatarFallback>
            </Avatar>
            <CardTitle className="text-2xl">{user.name}</CardTitle>
            <CardDescription className="text-accent">{user.username}</CardDescription>
             <Button variant="outline" size="sm" className="mt-2">
                <Edit3 className="mr-2 h-4 w-4" /> Edit Profile
            </Button>
          </CardHeader>
          <CardContent className="text-center">
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">Level {user.level}</p>
              <Progress value={progressPercentage} aria-label={`${progressPercentage}% to next level`} className="h-3" />
              <p className="text-xs text-muted-foreground">{user.points} / {pointsToNextLevel} points to Level {user.level + 1}</p>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center text-xl"><Award className="mr-2 h-5 w-5 text-primary" /> My Path</CardTitle>
          </CardHeader>
          <CardContent>
            {enrolledSchool ? (
              <div>
                <p className="text-sm text-muted-foreground mb-1">Currently Enrolled In:</p>
                <h3 className="text-lg font-semibold text-accent">{enrolledSchool.name}</h3>
                <p className="text-xs text-foreground/80 mb-3">{enrolledSchool.meaning}</p>
                <div className="flex space-x-2">
                    <Button asChild variant="default" size="sm">
                        <Link href={`/schools/${enrolledSchool.slug}`}>View School</Link>
                    </Button>
                    <Button onClick={handleUnenroll} variant="outline" size="sm">Unenroll</Button>
                </div>
              </div>
            ) : (
              <div>
                <p className="text-foreground/80 mb-3">You are not currently enrolled in any philosophical school.</p>
                <p className="text-sm text-muted-foreground mb-2">Choose a school to deepen your study:</p>
                <div className="space-y-2">
                {mockSchoolsData.slice(0,3).map(school => ( // Show a few options
                    <Button key={school.slug} variant="outline" size="sm" className="w-full justify-start" onClick={() => handleEnrollInSchool(school.slug)}>
                        Enroll in {school.name}
                    </Button>
                ))}
                <Button asChild variant="link" className="text-primary px-0">
                    <Link href="/schools">Explore all schools...</Link>
                </Button>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Right Column: Liked Items & Activity */}
      <div className="md:col-span-2 space-y-6">
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center text-xl"><Heart className="mr-2 h-5 w-5 text-red-500" /> Liked Concepts</CardTitle>
          </CardHeader>
          <CardContent>
            {likedConcepts.length > 0 ? (
              <ul className="space-y-3">
                {likedConcepts.map(concept => (
                  <li key={concept.slug} className="p-3 bg-muted/50 rounded-md hover:bg-muted transition-colors">
                    {/* Link to the new concept detail page */}
                    <Link href={`/concepts/${concept.slug}`} className="block">
                        <h4 className="font-medium text-primary">{concept.name}</h4>
                        {/* Use meaning as a short summary if needed, or remove if too long */}
                        <p className="text-xs text-foreground/70 line-clamp-2">{concept.meaning}</p>
                    </Link>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-foreground/80">You haven&apos;t liked any concepts yet. <Link href="/concepts" className="text-primary hover:underline">Explore concepts</Link>.</p>
            )}
          </CardContent>
        </Card>
        
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center text-xl"><Compass className="mr-2 h-5 w-5 text-primary" /> For You</CardTitle>
            <CardDescription>Recommendations based on your interests.</CardDescription>
          </CardHeader>
          <CardContent>
            {/* Mock recommendations */}
            <ul className="space-y-3">
              <li className="p-3 bg-muted/50 rounded-md hover:bg-muted transition-colors">
                <Link href="/texts" className="block">
                  <h4 className="font-medium text-primary flex items-center"><BookOpen className="mr-2 h-4 w-4"/>Explore the Bhagavad Gita</h4>
                  <p className="text-xs text-foreground/70">A central scripture discussing Dharma, Yoga, and Bhakti.</p>
                </Link>
              </li>
              {enrolledSchool?.slug === 'yoga' && (
                 <li className="p-3 bg-muted/50 rounded-md hover:bg-muted transition-colors">
                    <Link href="/saints" className="block">
                    <h4 className="font-medium text-primary flex items-center"><Star className="mr-2 h-4 w-4"/>Learn about Patanjali</h4>
                    <p className="text-xs text-foreground/70">The compiler of the Yoga Sutras.</p>
                    </Link>
                </li>
              )}
               <li className="p-3 bg-muted/50 rounded-md hover:bg-muted transition-colors">
                <Link href="/ask-ai" className="block">
                  <h4 className="font-medium text-primary flex items-center"><Users className="mr-2 h-4 w-4"/>Ask the AI Philosopher</h4>
                  <p className="text-xs text-foreground/70">Get AI-powered insights on philosophical questions.</p>
                </Link>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center text-xl"><Activity className="mr-2 h-5 w-5 text-primary" /> Activity Feed</CardTitle>
          </CardHeader>
          <CardContent>
            {user.activityLog.length > 0 ? (
              <ul className="space-y-3">
                {user.activityLog.map((activity, index) => (
                  <li key={index} className="text-sm p-3 border-b border-border/30 last:border-b-0">
                    <span className="font-semibold text-primary">{activity.action}:</span> <span className="text-foreground/80">{activity.details}</span>
                    <p className="text-xs text-muted-foreground mt-0.5">{new Date(activity.timestamp).toLocaleDateString()}</p>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-foreground/80">No recent activity.</p>
            )}
          </CardContent>
           <CardFooter>
            <Button variant="link" className="text-sm text-primary px-0">View all activity</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
