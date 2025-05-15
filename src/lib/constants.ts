

import type { DetailedConcept as NewMockConcept } from "@/lib/data/concepts-data";
import { detailedConceptsData as newMockConceptsData } from "@/lib/data/concepts-data";


export type NavItem = {
  title: string;
  href: string;
  disabled?: boolean;
};

export type SiteConfig = {
  name: string;
  description: string;
  tagline: string;
  url: string;
  ogImage: string;
  mainNav: NavItem[];
};

export const siteConfig: SiteConfig = {
  name: "Sanatana Insights",
  description: "Explore the profound depths of Indian philosophy, Sanātana Dharma, and spiritual heritage. Discover timeless teachings, scriptures, and the wisdom of sages.",
  tagline: "Eternal Wisdom for Modern Minds",
  url: "https://example.com", // Replace with your actual URL
  ogImage: "https://example.com/og.jpg", // Replace with your actual OG image URL
  mainNav: [
    { title: "Home", href: "/" },
    { title: "Philosophical Schools", href: "/schools" },
    { title: "Bharat History", href: "/bharat-history" },
    { title: "Vedic Science", href: "/vedic-science" },
    { title: "Cultural Arts", href: "/cultural-arts" },
    { title: "Texts & Scriptures", href: "/texts" },
    { title: "Timeline", href: "/timeline" },
    { title: "Saints & Philosophers", href: "/saints" },
    { title: "Themes & Concepts", href: "/concepts" },
    { title: "Resources", href: "/resources" },
    { title: "Gallery", href: "/gallery" },
    { title: "Ask AI", href: "/ask-ai" },
    { title: "Settings", href: "/settings" },
    // { title: "Profile", href: "/profile" }, // Profile is accessed via icon
    // { title: "Contact", href: "/contact" }, // Contact is accessed via icon
  ],
};

// Mock Data for user profile features
export type MockSchool = {
  slug: string;
  name: string;
  meaning: string;
};

export type MockUser = {
  id: string;
  name: string;
  username: string;
  avatarUrl: string;
  level: number;
  points: number;
  enrolledSchoolSlug: string | null;
  likedConceptSlugs: string[]; // Changed from likedConceptIds to likedConceptSlugs
  activityLog: Array<{ timestamp: string; action: string; details: string }>;
};

export const mockUser: MockUser = {
  id: "user123",
  name: "Sadhaka Satya",
  username: "@satya_seeker",
  avatarUrl: "https://picsum.photos/seed/satyaseeker/200/200",
  level: 5,
  points: 1250,
  enrolledSchoolSlug: "yoga",
  likedConceptSlugs: ["dharma", "moksha", "maya", "bhakti", "jnana"], // Ensure these are slugs and add 'maya', 'bhakti', 'jnana'
  activityLog: [
    { timestamp: "2024-07-29T10:00:00Z", action: "Liked Concept", details: "Dharma" },
    { timestamp: "2024-07-28T15:30:00Z", action: "Enrolled in School", details: "Yoga" },
    { timestamp: "2024-07-27T09:15:00Z", action: "Completed Reading", details: "Introduction to Vedanta" },
    { timestamp: "2024-07-30T11:00:00Z", action: "Liked Concept", details: "Māyā" },
    { timestamp: "2024-07-31T14:00:00Z", action: "Liked Concept", details: "Bhakti" },
    { timestamp: "2024-08-01T10:00:00Z", action: "Liked Concept", details: "Jnana" },
  ],
};

// Re-exporting detailedConceptsData and related types/functions for convenience if needed elsewhere
// or they can be imported directly from 'concepts-data.ts'
export const mockConceptsData = newMockConceptsData;
export type MockConcept = NewMockConcept; // Alias for consistency if old imports exist

export const mockSchoolsData: MockSchool[] = [
    { slug: "nyaya", name: "Nyāya", meaning: "Logic or Reasoning" },
    { slug: "vaisheshika", name: "Vaiśeṣika", meaning: "Particularity or Atomism" },
    { slug: "samkhya", name: "Sāṃkhya", meaning: "Enumeration or Number" },
    { slug: "yoga", name: "Yoga", meaning: "Union or Discipline" },
    { slug: "purva-mimamsa", name: "Pūrva Mīmāṃsā", meaning: "Earlier Inquiry (on Vedas)" },
    { slug: "vedanta", name: "Vedānta", meaning: "End of the Vedas" },
];

// Function to get concept by slug (mock)
export const getConceptBySlug = (slug: string): MockConcept | undefined => {
  return mockConceptsData.find(c => c.slug === slug);
};

// Function to get school by slug (mock)
export const getSchoolBySlugMock = (slug: string): MockSchool | undefined => {
  return mockSchoolsData.find(s => s.slug === slug);
};

    
