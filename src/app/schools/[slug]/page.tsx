"use client";
import { getSchoolBySlug, getAllSchoolSlugs, type SchoolDetail, type PadarthaCategory, type Pramana, type KeyConceptDetail, type TattvaConcept, type Thinker, type ComparisonDetail, type CommentaryWork, type VedantaSubSchool } from '@/lib/data/philosophical-schools';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { BookOpen, Target, Users, Brain, GitFork, Book, History, Rss, Lightbulb, CheckCircle, HelpCircle, Atom, Microscope, Combine, Users2, Zap, ListTree, Columns, Drama, Wind, Waves, HeartHandshake, ShieldAlert, GitMerge, Sprout, BrainCog, AlignCenter, Package, Pyramid, Gem, UsersRound, BookHeart, Award, UserCheck, UserPlus } from 'lucide-react';
import type { Metadata } from 'next';
import { notFound, useParams } from 'next/navigation'; // Use useParams for client components
import { useEffect, useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { mockUser } from '@/lib/constants';


// export async function generateStaticParams() { // Only for Server Components generating static paths
//   return getAllSchoolSlugs();
// }

// Metadata generation should remain if this page can also be a Server Component, but for client-side dynamic rendering, it's less critical here.
// Or it can be moved to a parent layout if params are available.
// For now, let's assume dynamic title based on client-side data fetching.

export default function SchoolDetailPageClient() {
  const params = useParams();
  const slug = typeof params.slug === 'string' ? params.slug : '';
  const [school, setSchool] = useState<SchoolDetail | null | undefined>(undefined); // undefined for loading state
  const [isEnrolled, setIsEnrolled] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    if (slug) {
      const schoolData = getSchoolBySlug(slug);
      setSchool(schoolData);
      // Simulate fetching user's enrolled school
      if (schoolData && mockUser.enrolledSchoolSlug === schoolData.slug) {
        setIsEnrolled(true);
      } else {
        setIsEnrolled(false);
      }
    }
  }, [slug]);
  
  // This useEffect must be called unconditionally before any early returns.
  useEffect(() => {
    if (school) {
      document.title = `${school.name} - Philosophical School - Sanatana Insights`;
    }
  }, [school]);


  if (school === undefined) {
    return <div className="container mx-auto py-12 px-4 text-center">Loading school details...</div>;
  }

  if (!school) {
    notFound(); // Or handle as a client-side not found
    return null;
  }

  const handleEnrollment = () => {
    if (!school) return;

    if (isEnrolled) {
      // Mock unenroll
      setIsEnrolled(false);
      mockUser.enrolledSchoolSlug = null; // Update mock data
      toast({
        title: "Unenrolled",
        description: `You have unenrolled from ${school.name}.`,
        variant: "default",
      });
    } else {
      // Mock enroll
      setIsEnrolled(true);
      mockUser.enrolledSchoolSlug = school.slug; // Update mock data
      toast({
        title: "Successfully Enrolled!",
        description: `You are now enrolled in the ${school.name} school.`,
      });
    }
    // In a real app: await enrollInSchoolAction(school.slug);
  };


  const renderPramanas = (pramanas?: Pramana[]) => {
    if (!pramanas || pramanas.length === 0) return null;
    return (
    <>
      {pramanas.map((pramana, index) => (
        <div key={`pramana-${index}`} className="mb-4 p-4 border border-border/50 rounded-md bg-muted/20 shadow-sm">
          <h4 className="font-semibold text-primary">{pramana.name} <span className="text-sm text-accent font-normal italic">({pramana.meaning})</span></h4>
          <p className="text-foreground/80">{pramana.description}</p>
        </div>
      ))}
    </>
  )};

  const renderKeyConceptDetails = (concepts?: KeyConceptDetail[], title?: string) => {
    if (!concepts || concepts.length === 0) return null;
    return (
    <>
      {title && <h4 className="text-lg font-semibold text-primary mb-2">{title}</h4>}
      {concepts.map((concept, index) => (
        <div key={`${title?.toLowerCase().replace(/\s+/g, '-') || 'concept'}-${index}`} className="mb-3 p-3 border border-border/40 rounded-md bg-muted/10 shadow-sm">
          <h5 className="font-medium text-accent">{concept.name}{concept.meaning ? ` (${concept.meaning})` : ''}</h5>
          <p className="text-sm text-foreground/80">{concept.description}</p>
        </div>
      ))}
    </>
  )};
  
  const renderTattvas = (tattvas?: TattvaConcept) => {
    if (!tattvas) return null;
    return (
    <>
      <h4 className="text-lg font-semibold text-primary mb-2">Tattvas (Principles of Existence)</h4>
      <div className="p-3 border border-border/40 rounded-md bg-muted/10 shadow-sm">
        <p className="text-sm text-foreground/80 mb-2">{tattvas.description}</p>
        <ul className="list-disc list-inside space-y-1 text-sm text-foreground/70 pl-2">
          {tattvas.list.map((item, index) => <li key={`tattva-${index}`}>{item}</li>)}
        </ul>
      </div>
    </>
  )};

  const renderVedantaSubSchools = (subSchools?: VedantaSubSchool[]) => {
    if (!subSchools || subSchools.length === 0) return null;
    return (
      <Section title="Major Sub-Schools of Vedānta">
        <div className="space-y-6">
          {subSchools.map((subSchool, index) => (
            <Card key={`vedanta-subschool-${index}`} className="bg-muted/20 shadow-md">
              <CardHeader>
                <CardTitle className="text-xl text-secondary flex items-center">
                  <Pyramid className="h-6 w-6 mr-2" /> {subSchool.name}
                </CardTitle>
                {subSchool.founder && <CardDescription>Founder/Consolidator: {subSchool.founder}</CardDescription>}
              </CardHeader>
              <CardContent className="space-y-3">
                <p><span className="font-semibold text-accent">Core View:</span> {subSchool.coreView}</p>
                <p><span className="font-semibold text-accent">View on God:</span> {subSchool.viewOnGod}</p>
                {subSchool.keyConcepts && subSchool.keyConcepts.length > 0 && (
                  <div>
                    <h5 className="font-semibold text-primary mb-1">Key Concepts:</h5>
                    <ul className="list-disc list-inside ml-4 text-sm text-foreground/80 space-y-1">
                      {subSchool.keyConcepts.map((concept, cIndex) => <li key={`concept-${cIndex}`}>{concept}</li>)}
                    </ul>
                  </div>
                )}
                {subSchool.types && subSchool.types.length > 0 && (
                   <div>
                    <h5 className="font-semibold text-primary mt-3 mb-1">Further Classifications/Types:</h5>
                     <ul className="list-disc list-inside ml-4 text-sm text-foreground/80 space-y-1">
                      {subSchool.types.map((type, tIndex) => (
                        <li key={`type-${tIndex}`}>
                          <strong>{type.name}:</strong> {type.view}
                          {type.founder && ` (Founder: ${type.founder})`}
                        </li>
                      ))}
                    </ul>
                   </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>
    );
  };


  return (
    <div className="container mx-auto py-12 px-4">
      <header className="mb-12 text-center">
        {school.slug === 'nyaya' && <GitFork className="h-20 w-20 text-primary mx-auto mb-6" />}
        {school.slug === 'vaisheshika' && <Atom className="h-20 w-20 text-primary mx-auto mb-6" />}
        {school.slug === 'samkhya' && <Package className="h-20 w-20 text-primary mx-auto mb-6" />}
        {school.slug === 'yoga' && <Sprout className="h-20 w-20 text-primary mx-auto mb-6" />}
        {school.slug === 'purva-mimamsa' && <BookHeart className="h-20 w-20 text-primary mx-auto mb-6" />}
        {school.slug === 'vedanta' && <Gem className="h-20 w-20 text-primary mx-auto mb-6" />}
        {!['nyaya', 'vaisheshika', 'samkhya', 'yoga', 'purva-mimamsa', 'vedanta'].includes(school.slug) && <BrainCog className="h-20 w-20 text-primary mx-auto mb-6" />}
        
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-primary">
          {school.name}
        </h1>
        <p className="mt-2 text-2xl text-accent italic">&quot;{school.meaning}&quot;</p>
        <div className="mt-4 text-lg text-foreground/80 space-y-1">
          <p><span className="font-semibold">Founder:</span> {school.founder}</p>
          <p><span className="font-semibold">Period:</span> {school.period}</p>
        </div>
        <Button 
            onClick={handleEnrollment} 
            className="mt-6 text-lg py-3 px-6"
            variant={isEnrolled ? "outline" : "default"}
          >
            {isEnrolled ? (
              <>
                <UserCheck className="mr-2 h-5 w-5" /> Currently Enrolled
              </>
            ) : (
              <>
                <UserPlus className="mr-2 h-5 w-5" /> Enroll in this School
              </>
            )}
          </Button>
      </header>

      <div className="space-y-10">
        <InfoCard icon={<Target className="h-7 w-7 text-primary" />} title="Aim of the School">
          <p className="text-lg leading-relaxed">{school.aim}</p>
        </InfoCard>

        <InfoCard icon={<Book className="h-7 w-7 text-primary" />} title="Core Text(s)">
           <span className="font-semibold text-primary">{school.coreText.title}</span> by {school.coreText.author}
          <p className="mt-2 text-foreground/80">{school.coreText.description}</p>
        </InfoCard>

        <InfoCard icon={<Brain className="h-7 w-7 text-primary" />} title="Core Philosophy">
          <p className="mb-3 font-medium text-foreground/90">{school.corePhilosophy.summary}</p>
          {school.corePhilosophy.metaphysics && <p className="mb-2"><span className="font-semibold text-accent">Metaphysics:</span> {school.corePhilosophy.metaphysics}</p>}
          {school.corePhilosophy.ontology && <p className="mb-2"><span className="font-semibold text-accent">Ontology:</span> {school.corePhilosophy.ontology}</p>}
          
          <div className="flex flex-wrap gap-2 mt-3">
            {typeof school.corePhilosophy.realism === 'boolean' && (
              <Badge variant={school.corePhilosophy.realism ? "default" : "secondary"} className="text-sm bg-primary/80 text-primary-foreground">
                {school.corePhilosophy.realism ? "Realist School" : "Non-Realist/Idealist School"}
              </Badge>
            )}
          </div>
          {school.corePhilosophy.theismDescription && <p className="mt-3 p-3 bg-accent/10 text-accent-foreground/90 border border-accent/30 rounded-md"><span className="font-semibold text-accent">Theistic Stance:</span> {school.corePhilosophy.theismDescription}</p>}
        </InfoCard>

        <InfoCard icon={<Lightbulb className="h-7 w-7 text-primary" />} title="Key Concepts">
          {renderKeyConceptDetails(school.keyConcepts.vedantaKeyConcepts)}
          {school.keyConcepts.Pramāṇas && school.keyConcepts.Pramāṇas.length > 0 && school.slug === 'nyaya' && ( 
            <>
              <Section title="Pramāṇas (Means of Valid Knowledge)">
                {renderPramanas(school.keyConcepts.Pramāṇas)}
              </Section>
              <Separator className="my-6" />
            </>
          )}
          
          {renderKeyConceptDetails(school.keyConcepts.DualRealities, "Dual Realities")}
          {school.keyConcepts.DualRealities && school.keyConcepts.DualRealities.length > 0 && <Separator className="my-6" />}
          
          {renderKeyConceptDetails(school.keyConcepts.Gunas, "Guṇas (Qualities of Prakṛti)")}
          {school.keyConcepts.Gunas && school.keyConcepts.Gunas.length > 0 && <Separator className="my-6" />}
          
          {renderTattvas(school.keyConcepts.Tattvas)}
           {school.keyConcepts.Tattvas && <Separator className="my-6" />}


          {school.keyConcepts.Padarthas && school.keyConcepts.Padarthas.length > 0 && (
             <Section title="Padārthas (Categories of Reality)">
              {school.keyConcepts.Padarthas.map((padartha, index) => (
                typeof padartha === 'string' ? (
                  <li key={`padartha-str-${index}`} className="list-disc list-inside text-foreground/80">{padartha}</li>
                ) : (
                  <div key={`padartha-obj-${index}`} className="mb-4 p-4 border border-border/50 rounded-md bg-muted/20 shadow-sm">
                    <h4 className="font-semibold text-primary">{padartha.name} <span className="text-sm text-accent font-normal italic">({padartha.meaning})</span></h4>
                    <p className="text-foreground/80">{padartha.description}</p>
                  </div>
                )
              ))}
            </Section>
          )}
           {school.keyConcepts.Padarthas && school.keyConcepts.Padarthas.length > 0 && <Separator className="my-6" />}
          
          {school.keyConcepts.Logic && (
            <>
              <Section title="Logic (Nyāya)">
                <h4 className="font-semibold text-primary mb-1">Five-Membered Syllogism:</h4>
                <ul className="list-decimal list-inside space-y-1 text-foreground/80 mb-2">
                  {school.keyConcepts.Logic.FiveMemberedSyllogism.map((step, index) => <li key={`syllogism-${index}`}>{step}</li>)}
                </ul>
                <p className="mt-2 text-foreground/80"><span className="font-semibold text-accent">Example:</span> {school.keyConcepts.Logic.Example}</p>
              </Section>
               <Separator className="my-6" />
            </>
          )}

          {school.keyConcepts.Atomism && (
             <>
              <Section title="Atomism (Vaiśeṣika)">
                <div className="p-4 border border-border/50 rounded-md bg-muted/20 shadow-sm space-y-2">
                    <p><span className="font-semibold text-primary">Belief:</span> {school.keyConcepts.Atomism.belief}</p>
                    <div>
                        <h5 className="font-semibold text-primary">Types of Atoms:</h5>
                        <ul className="list-disc list-inside ml-4 text-foreground/80">
                            {school.keyConcepts.Atomism.typesOfAtoms.map((type, i) => <li key={`atom-type-${i}`}>{type}</li>)}
                        </ul>
                    </div>
                    <p><span className="font-semibold text-primary">Formation:</span> {school.keyConcepts.Atomism.formation}</p>
                    <p><span className="font-semibold text-primary">Role of Ishvara/Adṛṣṭa:</span> {school.keyConcepts.Atomism.roleOfIshvara}</p>
                </div>
              </Section>
               <Separator className="my-6" />
            </>
          )}

          {school.keyConcepts.cittaVrttiNirodhah && (
            <>
              <Section title="Citta-Vṛtti-Nirodhaḥ">
                <div className="p-4 border border-border/50 rounded-md bg-muted/20 shadow-sm space-y-2">
                  <p className="font-semibold text-primary">{school.keyConcepts.cittaVrttiNirodhah.translation}</p>
                  <p className="text-foreground/80">{school.keyConcepts.cittaVrttiNirodhah.explanation}</p>
                </div>
              </Section>
               <Separator className="my-6" />
            </>
          )}
          {school.keyConcepts.astangaYoga && (
            <>
              <Section title="Aṣṭāṅga Yoga (Eight Limbs of Yoga)">
                 <div className="p-4 border border-border/50 rounded-md bg-muted/20 shadow-sm space-y-2">
                  <p className="font-semibold text-primary mb-1">{school.keyConcepts.astangaYoga.meaning}</p>
                  <ul className="list-decimal list-inside space-y-1 text-foreground/80">
                    {school.keyConcepts.astangaYoga.limbs.map((limb, index) => <li key={`astanga-limb-${index}`}>{limb}</li>)}
                  </ul>
                </div>
              </Section>
               <Separator className="my-6" />
            </>
          )}
           {school.keyConcepts.isvaraConcept && (
            <>
              <Section title="Īśvara (God in Yoga)">
                <div className="p-4 border border-border/50 rounded-md bg-muted/20 shadow-sm space-y-2">
                  <p className="text-foreground/80">{school.keyConcepts.isvaraConcept.description}</p>
                  <p className="italic text-accent">Mantra: {school.keyConcepts.isvaraConcept.mantra}</p>
                </div>
              </Section>
               <Separator className="my-6" />
            </>
          )}
          {school.keyConcepts.kleshas && school.keyConcepts.kleshas.length > 0 && (
            <>
              <Section title="Kleśas (Afflictions)">
                <div className="p-4 border border-border/50 rounded-md bg-muted/20 shadow-sm space-y-2">
                  <ul className="list-disc list-inside space-y-1 text-foreground/80">
                    {school.keyConcepts.kleshas.map((klesha, index) => <li key={`klesha-${index}`}>{klesha}</li>)}
                  </ul>
                </div>
              </Section>
               <Separator className="my-6" />
            </>
          )}
          {school.keyConcepts.kaivalyaConcept && (
            <>
              <Section title="Liberation (Kaivalya)">
                 <div className="p-4 border border-border/50 rounded-md bg-muted/20 shadow-sm">
                    <p className="text-foreground/80">{school.keyConcepts.kaivalyaConcept}</p>
                 </div>
              </Section>
               <Separator className="my-6" />
            </>
          )}
          {renderKeyConceptDetails([school.keyConcepts.vedaConcept, school.keyConcepts.dharmaConcept, school.keyConcepts.apurvaConcept, school.keyConcepts.ritualismConcept, school.keyConcepts.sabdaConcept].filter(Boolean) as KeyConceptDetail[])}

        </InfoCard>
        
        {school.schoolsOfVedānta && school.schoolsOfVedānta.length > 0 && (
          <InfoCard icon={<Pyramid className="h-7 w-7 text-primary" />} title="Sub-Schools of Vedānta">
            {renderVedantaSubSchools(school.schoolsOfVedānta)}
          </InfoCard>
        )}


        <InfoCard icon={<HelpCircle className="h-7 w-7 text-primary" />} title="Epistemology">
          {school.epistemology.emphasis && <p className="mb-3"><span className="font-semibold text-accent">Emphasis:</span> {school.epistemology.emphasis}</p>}
          {school.epistemology.validKnowledge && <p className="mb-3"><span className="font-semibold text-accent">Concept of Valid Knowledge:</span> {school.epistemology.validKnowledge}</p>}
          
          {school.epistemology.typesOfKnowledge && school.epistemology.typesOfKnowledge.length > 0 && (
            <>
              <h4 className="font-semibold text-primary mb-1">Types of Knowledge:</h4>
              <ul className="list-disc list-inside space-y-1 text-foreground/80 mb-3">
                {school.epistemology.typesOfKnowledge.map((type, index) => <li key={`knowledge-type-${index}`}>{type}</li>)}
              </ul>
            </>
          )}

          {school.epistemology.pramāṇas && school.epistemology.pramāṇas.length > 0 && (
             <>
              <h4 className="font-semibold text-primary mb-1">Pramāṇas Accepted:</h4>
              {renderPramanas(school.epistemology.pramāṇas)}
            </>
          )}
          {school.epistemology.note && <p className="mt-3 p-3 bg-accent/10 text-accent-foreground/90 border border-accent/30 rounded-md shadow-sm"><span className="font-semibold">Note:</span> {school.epistemology.note}</p>}
        </InfoCard>
        
        <InfoCard icon={<CheckCircle className="h-7 w-7 text-primary" />} title="Liberation (Moksha)">
          <p className="mb-2"><span className="font-semibold text-accent">Goal:</span> {school.liberation.goal}</p>
          <p><span className="font-semibold text-accent">Means:</span> {school.liberation.means}</p>
        </InfoCard>

        {school.branchesOfYoga && school.branchesOfYoga.length > 0 && (
          <InfoCard icon={<GitMerge className="h-7 w-7 text-primary" />} title="Branches of Yoga">
            {school.branchesOfYoga.map((branch, index) => (
              <div key={`branch-yoga-${index}`} className="mb-4 p-4 border border-border/50 rounded-md bg-muted/20 shadow-sm">
                <h4 className="font-semibold text-primary">{branch.name}</h4>
                <p className="text-foreground/80">{branch.description}</p>
              </div>
            ))}
          </InfoCard>
        )}
        
        {school.subSchools && school.subSchools.length > 0 && (
          <InfoCard icon={<ListTree className="h-7 w-7 text-primary" />} title="Sub-Schools">
            {school.subSchools.map((sub, index) => (
              <div key={`subschool-${index}`} className="mb-4 p-4 border border-border/50 rounded-md bg-muted/20 shadow-sm">
                <h4 className="font-semibold text-primary">{sub.name}</h4>
                {sub.founder && <p className="text-sm text-muted-foreground">Founder: {sub.founder}</p>}
                <p className="text-foreground/80 mt-1">{sub.emphasis}</p>
              </div>
            ))}
          </InfoCard>
        )}


        {school.comparisonWithNyaya && (
          <InfoCard icon={<Combine className="h-7 w-7 text-primary" />} title="Comparison with Nyāya">
            <p className="mb-2"><span className="font-semibold text-accent">Relationship:</span> {school.comparisonWithNyaya.relationship}</p>
            <p><span className="font-semibold text-accent">Key Difference:</span> {school.comparisonWithNyaya.difference}</p>
          </InfoCard>
        )}
        
        {school.comparisonWithOtherSchools && (
          <InfoCard icon={<Columns className="h-7 w-7 text-primary" />} title="Comparison with Other Schools">
            {Object.entries(school.comparisonWithOtherSchools).map(([otherSchoolName, comparisonText]) => (
              <div key={`comp-${otherSchoolName}`} className="mb-3 p-3 border border-border/40 rounded-md bg-muted/10 shadow-sm">
                <h4 className="font-semibold text-accent mb-1">{otherSchoolName}</h4>
                <p className="text-sm text-foreground/80">{comparisonText}</p>
              </div>
            ))}
          </InfoCard>
        )}

        <InfoCard icon={<UsersRound className="h-7 w-7 text-primary" />} title="Influence">
          {school.influence.onOtherSchools && school.influence.onOtherSchools.length > 0 &&
            <Section title="On Other Schools/Areas">
              <ul className="list-disc list-inside space-y-1 text-foreground/80">
                {school.influence.onOtherSchools.map((influence, index) => <li key={`influence-${index}`}>{influence}</li>)}
              </ul>
            </Section>
          }
          {school.influence.onSpiritualPractice && (
            <>
              <Separator className="my-4" />
              <Section title="On Spiritual Practice">
                <p className="text-foreground/80">{school.influence.onSpiritualPractice}</p>
              </Section>
            </>
          )}
           {school.influence.globalImpact && (
            <>
              <Separator className="my-4" />
              <Section title="Global Impact">
                <p className="text-foreground/80">{school.influence.globalImpact}</p>
              </Section>
            </>
          )}
          {school.influence.onScience && school.influence.onScience.length > 0 && (
            <>
              <Separator className="my-4" />
              <Section title="On Science">
                <ul className="list-disc list-inside space-y-1 text-foreground/80">
                  {school.influence.onScience.map((item, index) => <li key={`science-influence-${index}`}>{item}</li>)}
                </ul>
              </Section>
            </>
          )}
          <Separator className="my-4" />
          {school.influence.importance && <p><span className="font-semibold text-accent">Overall Importance:</span> {school.influence.importance}</p>}
          {school.influence.debates && <p className="mt-2"><span className="font-semibold text-accent">Key Debates:</span> {school.influence.debates}</p>}
        </InfoCard>
        
        {school.notableThinkers && school.notableThinkers.length > 0 && (
          <InfoCard icon={<Users2 className="h-7 w-7 text-primary" />} title="Notable Thinkers/Teachers">
            {school.notableThinkers.map((thinker, index) => (
              <div key={`thinker-${index}`} className="mb-4 p-4 border border-border/50 rounded-md bg-muted/20 shadow-sm">
                <h4 className="font-semibold text-primary">{thinker.name}</h4>
                <p className="mt-1 text-foreground/80 text-sm">{thinker.description}</p>
              </div>
            ))}
          </InfoCard>
        )}

        {school.commentariesAndWorks && school.commentariesAndWorks.length > 0 && (
          <InfoCard icon={<BookOpen className="h-7 w-7 text-primary" />} title="Major Commentaries & Works">
            {school.commentariesAndWorks.map((item, index) => (
              <div key={`commentary-${index}`} className="mb-4 p-4 border border-border/50 rounded-md bg-muted/20 shadow-sm">
                <h4 className="font-semibold text-primary">{item.work}</h4>
                <p className="text-sm text-accent italic">by {item.author}</p>
                <p className="mt-1 text-foreground/80">{item.description}</p>
              </div>
            ))}
          </InfoCard>
        )}


        <InfoCard icon={<History className="h-7 w-7 text-primary" />} title="Modern Relevance">
           <Section title="Uses & Applications">
            <ul className="list-disc list-inside space-y-1 text-foreground/80">
              {school.modernRelevance.uses.map((use, index) => <li key={`relevance-use-${index}`}>{use}</li>)}
            </ul>
          </Section>
          {school.modernRelevance.integration && (
            <>
              <Separator className="my-4" />
              <Section title="Integration in Modern Life">
                 <p className="text-foreground/80">{school.modernRelevance.integration}</p>
              </Section>
            </>
          )}
          {school.modernRelevance.revival && (
            <>
              <Separator className="my-4" />
              <p><span className="font-semibold text-accent">Revival:</span> {school.modernRelevance.revival}</p>
            </>
          )}
           {school.modernRelevance.academicInterest && (
            <>
              <Separator className="my-4" />
              <p><span className="font-semibold text-accent">Academic Interest:</span> {school.modernRelevance.academicInterest}</p>
            </>
          )}
        </InfoCard>
      </div>

      <footer className="mt-16 text-center p-6 bg-muted/30 rounded-lg">
        <Rss className="h-10 w-10 text-secondary mx-auto mb-3" />
        <h2 className="text-2xl font-semibold mb-2 text-secondary-foreground">Continuous Exploration</h2>
        <p className="text-foreground/70 max-w-2xl mx-auto">
          The {school.name} school, like all Darśanas, offers a profound system of thought. Its study continues to provide valuable insights into logic, knowledge, and the nature of reality.
        </p>
      </footer>
    </div>
  );
}

interface InfoCardProps {
  icon: React.ReactNode;
  title: React.ReactNode;
  children: React.ReactNode;
}

function InfoCard({ icon, title, children }: InfoCardProps) {
  return (
    <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
      <CardHeader className="flex-row items-center space-x-4 pb-4">
        {icon}
        <CardTitle className="text-2xl text-accent">{title}</CardTitle>
      </CardHeader>
      <CardContent className="text-foreground/90 leading-relaxed space-y-4 pt-2"> 
        {children}
      </CardContent>
    </Card>
  );
}

interface SectionProps {
  title: string;
  children: React.ReactNode;
}
function Section({ title, children }: SectionProps) {
  return (
    <div className="mb-3">
      <h3 className="text-xl font-semibold text-primary mb-2">{title}</h3>
      {children}
    </div>
  );
}

// This is now primarily a client component.
// If you need generateStaticParams, it means you want to pre-render these pages.
// In that case, data fetching (getSchoolBySlug) would happen at build time (server-side).
// The client-side interactions (enrollment, toast) would still be client-side.
// For this example, making it fully client-rendered simplifies state management for mock interactions.



