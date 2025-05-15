'use server';

/**
 * @fileOverview Summarizes a given scripture or philosophical text.
 *
 * - summarizeScripture - A function that accepts a scripture or philosophical text and returns a summary.
 * - SummarizeScriptureInput - The input type for the summarizeScripture function.
 * - SummarizeScriptureOutput - The return type for the summarizeScripture function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SummarizeScriptureInputSchema = z.object({
  text: z.string().describe('The scripture or philosophical text to summarize.'),
});
export type SummarizeScriptureInput = z.infer<typeof SummarizeScriptureInputSchema>;

const SummarizeScriptureOutputSchema = z.object({
  summary: z.string().describe('A summary of the scripture or philosophical text.'),
});
export type SummarizeScriptureOutput = z.infer<typeof SummarizeScriptureOutputSchema>;

export async function summarizeScripture(input: SummarizeScriptureInput): Promise<SummarizeScriptureOutput> {
  return summarizeScriptureFlow(input);
}

const prompt = ai.definePrompt({
  name: 'summarizeScripturePrompt',
  input: {schema: SummarizeScriptureInputSchema},
  output: {schema: SummarizeScriptureOutputSchema},
  prompt: `Summarize the following scripture or philosophical text:\n\n{{{text}}}`,
});

const summarizeScriptureFlow = ai.defineFlow(
  {
    name: 'summarizeScriptureFlow',
    inputSchema: SummarizeScriptureInputSchema,
    outputSchema: SummarizeScriptureOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
