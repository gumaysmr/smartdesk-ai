import OpenAI from 'openai';
import type { AiAnalysisResult } from '../../../src/shared/types';
import { env } from '../../config/env';
import { buildAnalysisPrompt } from './prompt';
import { parseAiJson } from './parse';

export async function analyzeWithOpenAI(input: string): Promise<AiAnalysisResult> {
  if (!env.OPENAI_API_KEY) {
    throw new Error('OPENAI_API_KEY is not configured.');
  }

  const client = new OpenAI({ apiKey: env.OPENAI_API_KEY });
  const response = await client.responses.create({
    model: env.OPENAI_MODEL,
    input: buildAnalysisPrompt({ input, provider: 'openai' }),
  });

  return {
    ...parseAiJson(response.output_text),
    provider: 'openai',
  };
}
