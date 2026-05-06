import Anthropic from '@anthropic-ai/sdk';
import type { AiAnalysisResult } from '../../../src/shared/types';
import { env } from '../../config/env';
import { buildAnalysisPrompt } from './prompt';
import { parseAiJson } from './parse';

export async function analyzeWithClaude(input: string): Promise<AiAnalysisResult> {
  if (!env.ANTHROPIC_API_KEY) {
    throw new Error('ANTHROPIC_API_KEY is not configured.');
  }

  const client = new Anthropic({ apiKey: env.ANTHROPIC_API_KEY });
  const message = await client.messages.create({
    model: env.CLAUDE_MODEL,
    max_tokens: 1200,
    messages: [
      {
        role: 'user',
        content: buildAnalysisPrompt({ input, provider: 'claude' }),
      },
    ],
  });

  const text = message.content
    .filter((block) => block.type === 'text')
    .map((block) => block.text)
    .join('\n');

  return {
    ...parseAiJson(text),
    provider: 'claude',
  };
}
