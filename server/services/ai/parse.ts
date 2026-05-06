import { z } from 'zod';
import type { AiAnalysisResult } from '../../../src/shared/types';

const taskSchema = z.object({
  id: z.string(),
  title: z.string(),
  priority: z.enum(['low', 'medium', 'high', 'urgent']),
  assignee: z.enum(['Umay', 'Burak', 'Emre']).optional(),
  dueDate: z.string().optional(),
});

const analysisSchema = z.object({
  summary: z.string(),
  category: z.string(),
  priority: z.enum(['low', 'medium', 'high', 'urgent']),
  tasks: z.array(taskSchema),
  replyDraft: z.string(),
});

export function parseAiJson(text: string): Omit<AiAnalysisResult, 'provider'> {
  const jsonStart = text.indexOf('{');
  const jsonEnd = text.lastIndexOf('}');

  if (jsonStart === -1 || jsonEnd === -1) {
    throw new Error('AI response did not include JSON.');
  }

  return analysisSchema.parse(JSON.parse(text.slice(jsonStart, jsonEnd + 1)));
}
