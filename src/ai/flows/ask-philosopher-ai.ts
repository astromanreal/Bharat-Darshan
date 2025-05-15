// src/ai/flows/ask-philosopher-ai.ts
'use server';
/**
 * @fileOverview AI tool that provides answers to spiritual or philosophical questions based on ancient Indian knowledge.
 *
 * - askPhilosopherAI - A function that handles the question answering process.
 * - AskPhilosopherAIInput - The input type for the askPhilosopherAI function.
 * - AskPhilosopherAIOutput - The return type for the askPhilosopherAI function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AskPhilosopherAIInputSchema = z.object({
  question: z.string().describe('The spiritual or philosophical question to be answered.'),
});
export type AskPhilosopherAIInput = z.infer<typeof AskPhilosopherAIInputSchema>;

const AskPhilosopherAIOutputSchema = z.object({
  answer: z.string().describe('The AI-generated answer to the question, based on ancient Indian knowledge and scriptural references.'),
});
export type AskPhilosopherAIOutput = z.infer<typeof AskPhilosopherAIOutputSchema>;

export async function askPhilosopherAI(input: AskPhilosopherAIInput): Promise<AskPhilosopherAIOutput> {
  return askPhilosopherAIFlow(input);
}

const prompt = ai.definePrompt({
  name: 'askPhilosopherAIPrompt',
  input: {schema: AskPhilosopherAIInputSchema},
  output: {schema: AskPhilosopherAIOutputSchema},
  prompt: `You are an AI philosopher, deeply versed in ancient Indian scriptures (Vedas, Upanishads, Puranas, Itihasas like Mahabharata and Ramayana, Darshanas, etc.) and philosophical traditions (Vedanta, Samkhya, Yoga, Nyaya, Vaisheshika, Mimamsa). Provide a thoughtful and insightful answer to the following spiritual or philosophical question. Strive for clarity and depth, drawing upon relevant concepts and teachings from these traditions. If appropriate, briefly mention key texts or concepts that inform your answer, but prioritize a coherent and understandable response for a general audience interested in Sanatana Dharma.

Question: {{{question}}}`,
});

const askPhilosopherAIFlow = ai.defineFlow(
  {
    name: 'askPhilosopherAIFlow',
    inputSchema: AskPhilosopherAIInputSchema,
    outputSchema: AskPhilosopherAIOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    // The use of output! assumes that if the prompt execution is successful,
    // the output will conform to the schema or Genkit/model will have thrown an error.
    // This error would be caught by the calling form's try-catch block.
    if (!output) {
        // This case should ideally be rare if the model is functioning correctly and can adhere to the schema.
        // If output is null/undefined, returning it as is (or throwing) is appropriate.
        // The `output!` below signifies we expect it to be populated.
        // If it's critical to handle a null output without crashing, the return type of askPhilosopherAI
        // and the frontend handling would need to accommodate `AskPhilosopherAIOutput | null`.
        // For now, relying on `output!` and the existing frontend error handling is standard.
        console.error('AI response output was null, which was not expected.');
        throw new Error('AI failed to generate a conforming response.');
    }
    return output;
  }
);

