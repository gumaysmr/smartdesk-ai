import type {
  AiAnalysisRequest,
  AiAnalysisResult,
} from '../../../src/shared/types';
import { analyzeWithClaude } from './claude';
import { createMockAnalysis } from './mock';
import { analyzeWithOpenAI } from './openai';

export async function analyzeWorkflow(
  request: AiAnalysisRequest,
): Promise<AiAnalysisResult> {
  if (request.provider === 'claude') {
    return analyzeWithClaude(request.input);
  }

  if (request.provider === 'openai') {
    return analyzeWithOpenAI(request.input);
  }

  return createMockAnalysis(request.input);
}
