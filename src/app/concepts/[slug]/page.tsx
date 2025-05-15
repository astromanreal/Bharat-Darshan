

"use client";

import { useParams, notFound, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { getConceptBySlug, interconnectedWisdomText, holisticUnderstandingText, type DetailedConcept, type DetailedConceptExample, type ChakraDefinition, type IshvaraInterpretation, type RelatedConceptLink } from '@/lib/data/concepts-data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { BookOpenText, Brain, Lightbulb, Target, MessageSquare, Sparkles, Link as LinkIcon, ScanSearch, TrendingUp, Speaker, Layers, CheckCircle, AlignLeft, Pyramid, Network, Orbit, Sun, ShieldAlert, Users, Flame, Activity, Anchor, Scale, ArrowLeft, Share2 } from 'lucide-react'; 

function renderExample(example: DetailedConceptExample, conceptName: string) {
  if (typeof example === 'string') {
    return <p className="text-lg leading-relaxed">{example}</p>;
  }

  if (example.mantra && example.purpose) { // Mantra example
    return (
      <div className="space-y-2">
        <p className="text-lg font-semibold text-primary font-hindi">{example.mantra}</p>
        {example.meaning && <p className="text-md italic text-muted-foreground">{example.meaning}</p>}
        <p className="text-md"><span className="font-semibold">Purpose:</span> {example.purpose}</p>
      </div>
    );
  }

  if (example.phrase) { // Samsara, Maya, Jnana example, VivekaVairagya (if phrase based)
     return (
      <div className="space-y-2">
        <p className="text-lg font-semibold text-primary">{example.phrase}</p>
        {example.meaning && <p className="text-md italic text-muted-foreground whitespace-pre-line">{example.meaning}</p>}
      </div>
    );
  }
  
  if (example.Dharma && example.Artha && example.Kāma && example.Moksha) { // Purushartha example
    return (
      <div className="space-y-4">
        <div>
          <h5 className="font-semibold text-primary">Dharma (Righteousness):</h5>
          <p className="text-md italic text-muted-foreground">{example.Dharma.definition}</p>
          <p className="text-md"><span className="font-semibold">Example:</span> {example.Dharma.example}</p>
        </div>
        <div>
          <h5 className="font-semibold text-primary">Artha (Prosperity):</h5>
          <p className="text-md italic text-muted-foreground">{example.Artha.definition}</p>
          <p className="text-md"><span className="font-semibold">Example:</span> {example.Artha.example}</p>
        </div>
        <div>
          <h5 className="font-semibold text-primary">Kāma (Pleasure):</h5>
          <p className="text-md italic text-muted-foreground">{example.Kāma.definition}</p>
          <p className="text-md"><span className="font-semibold">Example:</span> {example.Kāma.example}</p>
        </div>
        <div>
          <h5 className="font-semibold text-primary">Moksha (Liberation):</h5>
          <p className="text-md italic text-muted-foreground">{example.Moksha.definition}</p>
          <p className="text-md"><span className="font-semibold">Example:</span> {example.Moksha.example}</p>
        </div>
      </div>
    );
  }

  if (example.BhaktiYoga && example.KarmaYoga && example.RajaYoga && example.JnanaYoga) { // Yoga example
    return (
      <div className="space-y-4">
        {example.meaning && <p className="text-lg leading-relaxed mb-4">{example.meaning}</p> }
        <div>
          <h5 className="font-semibold text-primary">Bhakti Yoga (Devotion):</h5>
          <p className="text-md italic text-muted-foreground">{example.BhaktiYoga.description}</p>
          <p className="text-md"><span className="font-semibold">Symbol:</span> {example.BhaktiYoga.symbol}</p>
        </div>
        <div>
          <h5 className="font-semibold text-primary">Karma Yoga (Selfless Action):</h5>
          <p className="text-md italic text-muted-foreground">{example.KarmaYoga.description}</p>
          <p className="text-md"><span className="font-semibold">Symbol:</span> {example.KarmaYoga.symbol}</p>
        </div>
         <div>
          <h5 className="font-semibold text-primary">Rāja Yoga (Meditation):</h5>
          <p className="text-md italic text-muted-foreground">{example.RajaYoga.description}</p>
          <p className="text-md"><span className="font-semibold">Symbol:</span> {example.RajaYoga.symbol}</p>
        </div>
        <div>
          <h5 className="font-semibold text-primary">Jñāna Yoga (Wisdom):</h5>
          <p className="text-md italic text-muted-foreground">{example.JnanaYoga.description}</p>
          <p className="text-md"><span className="font-semibold">Symbol:</span> {example.JnanaYoga.symbol}</p>
        </div>
      </div>
    );
  }

  if (example.TattvaInShaivism && example.TattvaInVedanta) { // Tattva example
    return (
      <div className="space-y-4">
         {example.meaning && <p className="text-lg leading-relaxed mb-4">{example.meaning}</p> }
        <div>
          <h5 className="font-semibold text-primary">Example from Shaivism: {example.TattvaInShaivism.tattva}</h5>
          <p className="text-md italic text-muted-foreground">{example.TattvaInShaivism.meaning}</p>
          <p className="text-md"><span className="font-semibold">Role:</span> {example.TattvaInShaivism.role}</p>
        </div>
        <div>
          <h5 className="font-semibold text-primary">Example from Vedanta: {example.TattvaInVedanta.tattva}</h5>
          <p className="text-md italic text-muted-foreground">{example.TattvaInVedanta.meaning}</p>
          <p className="text-md"><span className="font-semibold">Role:</span> {example.TattvaInVedanta.role}</p>
        </div>
      </div>
    );
  }
  
  if (example.IshvaraSpecific) { // Ishvara example
    return (
      <div className="space-y-2">
        <p className="text-lg font-semibold text-primary">{example.IshvaraSpecific.phrase}</p>
        {example.IshvaraSpecific.meaning && <p className="text-md italic text-muted-foreground">{example.IshvaraSpecific.meaning}</p>}
         {example.meaning && <p className="text-md mt-2">{example.meaning}</p>}
      </div>
    );
  }

  if(example.balancedChakraExample && example.imbalancedChakraExample) { // Chakra example
    return (
      <div className="space-y-4">
        <div>
          <h5 className="font-semibold text-primary">Balanced Chakra Example: {example.balancedChakraExample.chakra}</h5>
          <p className="text-md italic text-muted-foreground">{example.balancedChakraExample.meaning}</p>
          <p className="text-md"><span className="font-semibold">Role:</span> {example.balancedChakraExample.role}</p>
        </div>
        <div>
          <h5 className="font-semibold text-primary">Imbalanced Chakra Example: {example.imbalancedChakraExample.chakra}</h5>
          <p className="text-md italic text-muted-foreground">{example.imbalancedChakraExample.meaning}</p>
          <p className="text-md"><span className="font-semibold">Role:</span> {example.imbalancedChakraExample.role}</p>
        </div>
      </div>
    );
  }

  if (example.BhagavadGitaExample) { // Tapas example
    return (
      <div className="space-y-4">
        <h5 className="font-semibold text-primary">Example from Bhagavad Gita:</h5>
        <p className="text-md"><strong>Context:</strong> {example.BhagavadGitaExample.context}</p>
        <p className="text-md"><strong>Significance:</strong> {example.BhagavadGitaExample.significance}</p>
        <p className="text-md italic text-muted-foreground"><strong>Verse/Concept:</strong> {example.BhagavadGitaExample.exampleVerse}</p>
      </div>
    );
  }

  if (example.BhagavadGitaReference) { // Shraddha example
    return (
      <div className="space-y-4">
        <h5 className="font-semibold text-primary">Reference from Bhagavad Gita:</h5>
        <p className="text-md"><strong>Context:</strong> {example.BhagavadGitaReference.context}</p>
        <p className="text-md"><strong>Significance:</strong> {example.BhagavadGitaReference.significance}</p>
        <p className="text-md italic text-muted-foreground"><strong>Key Message:</strong> {example.BhagavadGitaReference.keyMessage}</p>
      </div>
    );
  }
  
  if (example.spiritualPractice && example.spiritualPractice.meditation) { // Viveka & Vairagya example
    return (
      <div className="space-y-4">
        <div>
          <h5 className="font-semibold text-primary">Spiritual Practice (Meditation for Viveka):</h5>
          <p className="text-md">{example.spiritualPractice.meditation}</p>
        </div>
        {example.spiritualPractice.renunciation && (
           <div>
            <h5 className="font-semibold text-primary">Spiritual Practice (Renunciation for Vairagya):</h5>
            <p className="text-md">{example.spiritualPractice.renunciation}</p>
          </div>
        )}
      </div>
    );
  }


  // Fallback for other complex objects, or just render the meaning if present
  if (example.meaning) {
    return <p className="text-lg leading-relaxed">{example.meaning}</p>;
  }
  return <p className="text-lg leading-relaxed">{`Details for ${conceptName}`}</p>;
}

function renderInfoText(textData: string | { [key: string]: string; }) {
  if (typeof textData === 'string') {
    return <p className="text-lg leading-relaxed whitespace-pre-line">{textData}</p>;
  }
  return (
    <div className="text-lg leading-relaxed whitespace-pre-line space-y-2">
      {Object.entries(textData).map(([key, value]) => (
        <div key={key}>
          <strong className="capitalize text-accent">{key.replace(/([A-Z])/g, ' $1').trim()}:</strong>
          <p className="text-foreground/85 ml-1">{value}</p>
        </div>
      ))}
    </div>
  );
}


export default function ConceptDetailPage() {
  const params = useParams();
  const slug = typeof params.slug === 'string' ? params.slug : '';
  const [concept, setConcept] = useState<DetailedConcept | null | undefined>(undefined);

  useEffect(() => {
    if (slug) {
      const conceptData = getConceptBySlug(slug);
      setConcept(conceptData);
    }
  }, [slug]);

  useEffect(() => {
    if (concept) {
      document.title = `${concept.title || concept.name} - Concept - Sanatana Insights`;
    } else if (concept === null) {
      document.title = "Concept Not Found - Sanatana Insights";
    }
  }, [concept]);

  if (concept === undefined) {
    return <div className="container mx-auto py-12 px-4 text-center">Loading concept details...</div>;
  }

  if (!concept) {
    notFound();
    return null; 
  }

  const Icon = concept.icon || Brain;

  return (
    <div className="container mx-auto py-12 px-4">
      <div className="mb-8">
        <Button variant="outline" asChild>
          <Link href="/concepts">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Concepts
          </Link>
        </Button>
      </div>

      <header className="mb-12 text-center">
        <Icon className="h-20 w-20 text-primary mx-auto mb-6" />
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-primary">
          {concept.title || concept.name}
        </h1>
         {concept.title && concept.name !== concept.title && <p className="text-2xl text-muted-foreground mt-2">{concept.name}</p>}
      </header>

      <div className="space-y-10">
        <InfoCard icon={<MessageSquare className="h-7 w-7 text-primary" />} title="Meaning">
         {renderInfoText(concept.meaning)}
        </InfoCard>

        <InfoCard icon={<Brain className="h-7 w-7 text-primary" />} title="Philosophical Significance">
         {renderInfoText(concept.philosophicalSignificance)}
        </InfoCard>

        <InfoCard icon={<Lightbulb className="h-7 w-7 text-primary" />} title="Practical Application">
          {renderInfoText(concept.practicalApplication)}
        </InfoCard>

        <InfoCard icon={<Target className="h-7 w-7 text-primary" />} title="Example">
           {renderExample(concept.example, concept.name)}
        </InfoCard>

        {/* Related Concepts Section */}
        {concept.relatedConcepts && concept.relatedConcepts.length > 0 && (
          <InfoCard icon={<Network className="h-7 w-7 text-primary" />} title="Related Concepts">
            <ul className="space-y-3">
              {concept.relatedConcepts.map((related, index) => (
                <li key={`related-${index}`} className="p-3 bg-muted/30 rounded-md hover:bg-muted/50 transition-colors">
                  <Link href={`/concepts/${related.slug}`} className="block">
                    <h4 className="font-medium text-primary hover:underline">{related.name}</h4>
                    <p className="text-sm text-foreground/70">{related.relationship}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </InfoCard>
        )}

        {/* Additional sections for specific concepts */}
        {concept.slug === "mantra" && concept.coreElements && (
          <InfoCard icon={<Speaker className="h-7 w-7 text-primary" />} title="Core Elements of Mantra">
            <div className="space-y-4">
              <div>
                <h4 className="text-xl font-semibold text-accent mb-2">Types of Mantras:</h4>
                <ul className="list-disc list-inside space-y-1">
                  {concept.coreElements.Types.map((type, index) => (
                    <li key={`type-${index}`}><strong>{type.name}:</strong> {type.description}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-accent mb-2">Chanting Methods:</h4>
                <ul className="list-disc list-inside space-y-1">
                  {concept.coreElements.ChantingMethods.map((method, index) => (
                    <li key={`method-${index}`}>{method}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-accent mb-2">Uses of Mantras:</h4>
                <ul className="list-disc list-inside space-y-1">
                  {concept.coreElements.Uses.map((use, index) => (
                    <li key={`use-${index}`}>{use}</li>
                  ))}
                </ul>
              </div>
            </div>
          </InfoCard>
        )}

        {concept.slug === "gunas" && concept.types && (
          <InfoCard icon={<Layers className="h-7 w-7 text-primary" />} title="The Three Gunas">
            <div className="space-y-6">
              <div>
                <h4 className="text-xl font-semibold text-accent mb-2">Sattva (Purity, Harmony):</h4>
                <p className="italic text-muted-foreground mb-1">{concept.types.Sattva.definition}</p>
                <p className="mb-1"><strong>Attributes:</strong> {concept.types.Sattva.attributes.join(", ")}</p>
                <p><strong>Examples:</strong></p>
                <ul className="list-disc list-inside ml-4">
                  {concept.types.Sattva.examples.map((ex, i) => <li key={`sattva-ex-${i}`}>{ex}</li>)}
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-accent mb-2">Rajas (Passion, Activity):</h4>
                <p className="italic text-muted-foreground mb-1">{concept.types.Rajas.definition}</p>
                <p className="mb-1"><strong>Attributes:</strong> {concept.types.Rajas.attributes.join(", ")}</p>
                 <p><strong>Examples:</strong></p>
                <ul className="list-disc list-inside ml-4">
                  {concept.types.Rajas.examples.map((ex, i) => <li key={`rajas-ex-${i}`}>{ex}</li>)}
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-accent mb-2">Tamas (Inertia, Ignorance):</h4>
                <p className="italic text-muted-foreground mb-1">{concept.types.Tamas.definition}</p>
                <p className="mb-1"><strong>Attributes:</strong> {concept.types.Tamas.attributes.join(", ")}</p>
                 <p><strong>Examples:</strong></p>
                <ul className="list-disc list-inside ml-4">
                  {concept.types.Tamas.examples.map((ex, i) => <li key={`tamas-ex-${i}`}>{ex}</li>)}
                </ul>
              </div>
            </div>
          </InfoCard>
        )}

        {concept.slug === "prakriti-purusha" && concept.prakritiPurushaCoreConcepts && (
          <InfoCard icon={<AlignLeft className="h-7 w-7 text-primary" />} title="Core Concepts of Prakriti & Purusha">
            <div className="space-y-6">
              <div>
                <h4 className="text-xl font-semibold text-accent mb-2">Prakriti (Primal Matter/Nature):</h4>
                <p className="italic text-muted-foreground mb-1">{concept.prakritiPurushaCoreConcepts.Prakriti.definition}</p>
                <p className="mb-1"><strong>Attributes:</strong> {concept.prakritiPurushaCoreConcepts.Prakriti.attributes.join(", ")}</p>
                <p><strong>Evolutes:</strong> {concept.prakritiPurushaCoreConcepts.Prakriti.evolutes.join(", ")}</p>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-accent mb-2">Purusha (Pure Consciousness/Self):</h4>
                <p className="italic text-muted-foreground mb-1">{concept.prakritiPurushaCoreConcepts.Purusha.definition}</p>
                <p className="mb-1"><strong>Attributes:</strong> {concept.prakritiPurushaCoreConcepts.Purusha.attributes.join(", ")}</p>
                <p><strong>Role:</strong> {concept.prakritiPurushaCoreConcepts.Purusha.role}</p>
              </div>
            </div>
          </InfoCard>
        )}

        {concept.slug === "tattvas" && concept.tattvaCoreConcepts && (
          <InfoCard icon={<Pyramid className="h-7 w-7 text-primary" />} title="Core Concepts of Tattvas">
            <div className="space-y-6">
              <div>
                <h4 className="text-xl font-semibold text-accent mb-2">Shaiva Tattvas:</h4>
                <p className="italic text-muted-foreground mb-1">{concept.tattvaCoreConcepts.ShaivaTattvas.definition}</p>
                {concept.tattvaCoreConcepts.ShaivaTattvas.categories.map((category, index) => (
                  <div key={`shaiva-cat-${index}`} className="ml-4 mb-2">
                    <h5 className="font-medium text-primary/90">{category.name}:</h5>
                    <p className="text-sm text-foreground/80">{category.description}</p>
                  </div>
                ))}
              </div>
              <div>
                <h4 className="text-xl font-semibold text-accent mb-2">Vedantic Tattvas:</h4>
                <p className="italic text-muted-foreground mb-1">{concept.tattvaCoreConcepts.VedanticTattvas.definition}</p>
                {concept.tattvaCoreConcepts.VedanticTattvas.categories.map((category, index) => (
                  <div key={`vedantic-cat-${index}`} className="ml-4 mb-2">
                    <h5 className="font-medium text-primary/90">{category.name}:</h5>
                    <p className="text-sm text-foreground/80">{category.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </InfoCard>
        )}

        {concept.slug === "chakras" && concept.chakraDefinitions && (
          <InfoCard icon={<Orbit className="h-7 w-7 text-primary" />} title="The Seven Chakras">
            <div className="space-y-6">
              {Object.entries(concept.chakraDefinitions).map(([key, chakra]) => (
                <div key={key} className="p-4 border border-border/30 rounded-md bg-muted/20 shadow-sm">
                  <h4 className="text-lg font-semibold text-accent mb-1" style={{color: chakra.associatedColor.toLowerCase() !== 'white' && chakra.associatedColor.toLowerCase() !== '#ffffff' ? chakra.associatedColor.toLowerCase() : 'var(--foreground)'}}>
                    {chakra.name}
                  </h4>
                  <p className="text-sm text-muted-foreground mb-2"><strong>Location:</strong> {chakra.location}</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1 text-sm">
                     <p><strong>Color:</strong> <span style={{color: chakra.associatedColor.toLowerCase() !== 'white' && chakra.associatedColor.toLowerCase() !== '#ffffff' ? chakra.associatedColor.toLowerCase() : 'var(--foreground)'}}>{chakra.associatedColor}</span></p>
                    <p><strong>Element:</strong> {chakra.associatedElement}</p>
                    <p className="sm:col-span-2"><strong>Qualities:</strong> {chakra.qualities}</p>
                    <p className="sm:col-span-2"><strong>Imbalances:</strong> {chakra.imbalances}</p>
                    <p className="sm:col-span-2"><strong>Balanced State:</strong> {chakra.balancedState}</p>
                    <p className="sm:col-span-2"><strong>Yoga Practices:</strong> {chakra.yogaPractices}</p>
                  </div>
                </div>
              ))}
            </div>
          </InfoCard>
        )}

        {concept.slug === "ishvara" && concept.ishvaraInterpretations && (
          <InfoCard icon={<ShieldAlert className="h-7 w-7 text-primary" />} title="Interpretations of Ishvara">
            <div className="space-y-6">
              {(Object.entries(concept.ishvaraInterpretations) as [string, IshvaraInterpretation][]).map(([schoolName, details]) => (
                <div key={schoolName} className="p-4 border border-border/30 rounded-md bg-muted/20 shadow-sm">
                  <h4 className="text-lg font-semibold text-accent mb-1">{schoolName} Interpretation</h4>
                  <p className="text-md italic text-muted-foreground mb-2">{details.interpretation}</p>
                  <p><strong>Qualities:</strong> {details.qualities.join(", ")}</p>
                  {details.relationToAtman && <p><strong>Relation to Atman:</strong> {details.relationToAtman}</p>}
                  {details.relationToShakti && <p><strong>Relation to Shakti:</strong> {details.relationToShakti}</p>}
                  {details.relationToAvatars && <p><strong>Relation to Avatars:</strong> {details.relationToAvatars}</p>}
                  <div className="mt-3 pt-3 border-t border-border/20">
                    <h5 className="font-semibold text-primary/90">Example Context:</h5>
                    <p className="text-sm text-foreground/80">{details.exampleContext}</p>
                    <h5 className="font-semibold text-primary/90 mt-2">Significance:</h5>
                    <p className="text-sm text-foreground/80">{details.exampleSignificance}</p>
                    {details.exampleRituals && (
                      <>
                        <h5 className="font-semibold text-primary/90 mt-2">Rituals:</h5>
                        <p className="text-sm text-foreground/80">{details.exampleRituals}</p>
                      </>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </InfoCard>
        )}

        {concept.slug === "tapas" && concept.tapasCoreConcepts && (
          <InfoCard icon={<Activity className="h-7 w-7 text-primary" />} title="Core Aspects of Tapas">
            <div className="space-y-6">
              <div>
                <h4 className="text-xl font-semibold text-accent mb-2">Role in Yoga:</h4>
                <p className="italic text-muted-foreground mb-1">{concept.tapasCoreConcepts.roleInYoga.interpretation}</p>
                <p className="mb-1"><strong>Qualities:</strong> {concept.tapasCoreConcepts.roleInYoga.qualities.join(", ")}</p>
                <p><strong>Relation to Karma:</strong> {concept.tapasCoreConcepts.roleInYoga.relationToKarma}</p>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-accent mb-2">Connection to Sadhana:</h4>
                <p className="italic text-muted-foreground mb-1">{concept.tapasCoreConcepts.connectionToSadhana.interpretation}</p>
                <p className="mb-1"><strong>Qualities:</strong> {concept.tapasCoreConcepts.connectionToSadhana.qualities.join(", ")}</p>
                <p><strong>Relation to Bhakti:</strong> {concept.tapasCoreConcepts.connectionToSadhana.relationToBhakti}</p>
              </div>
            </div>
          </InfoCard>
        )}

        {concept.slug === "shraddha" && concept.shraddhaCoreConcepts && (
          <InfoCard icon={<Anchor className="h-7 w-7 text-primary" />} title="Core Aspects of Shraddha">
            <div className="space-y-6">
              <div>
                <h4 className="text-xl font-semibold text-accent mb-2">Role In Bhakti:</h4>
                <p className="italic text-muted-foreground mb-1">{concept.shraddhaCoreConcepts.RoleInBhakti.interpretation}</p>
                <p className="mb-1"><strong>Qualities:</strong> {concept.shraddhaCoreConcepts.RoleInBhakti.qualities.join(", ")}</p>
                <p><strong>Relation to Grace:</strong> {concept.shraddhaCoreConcepts.RoleInBhakti.relationToGrace}</p>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-accent mb-2">Role In Jnana Yoga:</h4>
                <p className="italic text-muted-foreground mb-1">{concept.shraddhaCoreConcepts.RoleInJnanaYoga.interpretation}</p>
                <p className="mb-1"><strong>Qualities:</strong> {concept.shraddhaCoreConcepts.RoleInJnanaYoga.qualities.join(", ")}</p>
                <p><strong>Relation to Viveka:</strong> {concept.shraddhaCoreConcepts.RoleInJnanaYoga.relationToViveka}</p>
              </div>
            </div>
          </InfoCard>
        )}
        
        {concept.slug === "viveka-vairagya" && concept.vivekaVairagyaCoreConcepts && (
          <InfoCard icon={<Scale className="h-7 w-7 text-primary" />} title="Core Aspects of Viveka & Vairagya">
            <div className="space-y-6">
              <div>
                <h4 className="text-xl font-semibold text-accent mb-2">Examples of Viveka (Discernment):</h4>
                <ul className="list-disc list-inside space-y-1 text-foreground/80">
                  {concept.vivekaVairagyaCoreConcepts.vivekaExamples.map((ex, i) => <li key={`viveka-ex-${i}`}>{ex}</li>)}
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-accent mb-2">Examples of Vairagya (Detachment):</h4>
                <ul className="list-disc list-inside space-y-1 text-foreground/80">
                  {concept.vivekaVairagyaCoreConcepts.vairagyaExamples.map((ex, i) => <li key={`vairagya-ex-${i}`}>{ex}</li>)}
                </ul>
              </div>
              {concept.vivekaVairagyaCoreConcepts.scripturalBasis && (
                <div>
                  <h4 className="text-xl font-semibold text-accent mb-2">Scriptural Basis:</h4>
                  <p className="italic text-muted-foreground mb-1"><strong>Source:</strong> {concept.vivekaVairagyaCoreConcepts.scripturalBasis.source}</p>
                  <p className="text-md"><strong>Quote:</strong> "{concept.vivekaVairagyaCoreConcepts.scripturalBasis.quote}"</p>
                </div>
              )}
            </div>
          </InfoCard>
        )}

         {/* Sections for concepts that have string values for interconnectedWisdom, etc. */}
        {concept.interconnectedWisdomSpecific && typeof concept.interconnectedWisdomSpecific === 'string' && (
            <InfoCard icon={<Share2 className="h-7 w-7 text-primary" />} title="Interconnected Wisdom (Specific)">
              <p className="text-lg leading-relaxed">{concept.interconnectedWisdomSpecific}</p>
            </InfoCard>
        )}
        {concept.holisticUnderstandingSpecific && typeof concept.holisticUnderstandingSpecific === 'string' && (
            <div className="mt-10">
              <InfoCard icon={<ScanSearch className="h-7 w-7 text-primary" />} title="Holistic Understanding (Specific)">
              <p className="text-lg leading-relaxed">{concept.holisticUnderstandingSpecific}</p>
              </InfoCard>
            </div>
        )}
        {concept.spiritualGrowthSpecific && typeof concept.spiritualGrowthSpecific === 'string' && (
          <div className="mt-10">
              <InfoCard icon={<TrendingUp className="h-7 w-7 text-primary" />} title="Spiritual Growth (Specific)">
              <p className="text-lg leading-relaxed">{concept.spiritualGrowthSpecific}</p>
              </InfoCard>
          </div>
        )}


      </div>

      <Separator className="my-12 md:my-16" />
      
      <section className="space-y-8 mt-10">
        <Card className="shadow-lg bg-gradient-to-br from-accent/5 via-background to-secondary/5">
          <CardHeader>
            <CardTitle className="text-2xl md:text-3xl text-accent flex items-center">
              <Sparkles className="mr-3 h-7 w-7" /> Interconnected Wisdom (General)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg text-foreground/85 leading-relaxed">{interconnectedWisdomText.content}</p>
          </CardContent>
        </Card>

        <Card className="shadow-lg bg-gradient-to-bl from-primary/5 via-background to-accent/5">
          <CardHeader>
            <CardTitle className="text-2xl md:text-3xl text-primary flex items-center">
             <BookOpenText className="mr-3 h-7 w-7" /> Holistic Understanding & Spiritual Growth (General)
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {holisticUnderstandingText.sections.map((section, index) => (
              <div key={index}>
                <h3 className="text-xl font-semibold text-primary/90 mb-1">{section.subtitle}</h3>
                <p className="text-lg text-foreground/85 leading-relaxed">{section.content}</p>
              </div>
            ))}
          </CardContent>
        </Card>
      </section>

      <footer className="mt-16 text-center p-6 bg-muted/30 rounded-lg">
        <p className="text-foreground/70 max-w-2xl mx-auto">
          The study of concepts like {concept.title || concept.name} offers a profound pathway to understanding the depths of Indian spiritual traditions and enriching one&apos;s own journey.
        </p>
      </footer>
    </div>
  );
}

interface InfoCardProps {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}

function InfoCard({ icon, title, children }: InfoCardProps) {
  return (
    <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
      <CardHeader className="flex-row items-center space-x-4 pb-4">
        {icon}
        <CardTitle className="text-2xl text-accent">{title}</CardTitle>
      </CardHeader>
      <CardContent className="text-foreground/90 pt-0">
        {children}
      </CardContent>
    </Card>
  );
}


