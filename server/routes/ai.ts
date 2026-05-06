import { Router } from 'express';
import { z } from 'zod';
import type { AiAnalysisRequest } from '../../src/shared/types';
import { analyzeWorkflow } from '../services/ai/analyze';
import { fail, ok } from '../utils/api-response';
import { sendSse, startSse } from '../utils/sse';

const requestSchema = z.object({
  input: z.string().trim().min(1, 'input is required').max(12000),
  provider: z.enum(['openai', 'claude']).optional(),
});

export const aiRouter = Router();

aiRouter.post('/analyze', async (req, res) => {
  const parsed = requestSchema.safeParse(req.body);

  if (!parsed.success) {
    res.status(400).json(fail('VALIDATION_ERROR', parsed.error.message));
    return;
  }

  try {
    const result = await analyzeWorkflow(parsed.data satisfies AiAnalysisRequest);
    res.json(ok(result));
  } catch (error) {
    res.status(502).json(fail('AI_PROVIDER_ERROR', getErrorMessage(error)));
  }
});

aiRouter.post('/analyze/stream', async (req, res) => {
  const parsed = requestSchema.safeParse(req.body);

  if (!parsed.success) {
    res.status(400).json(fail('VALIDATION_ERROR', parsed.error.message));
    return;
  }

  startSse(res);
  sendSse(res, 'status', { message: 'analysis_started' });

  try {
    const result = await analyzeWorkflow(parsed.data satisfies AiAnalysisRequest);
    sendSse(res, 'result', ok(result));
  } catch (error) {
    sendSse(res, 'error', fail('AI_PROVIDER_ERROR', getErrorMessage(error)));
  } finally {
    sendSse(res, 'done', { ok: true });
    res.end();
  }
});

function getErrorMessage(error: unknown) {
  return error instanceof Error ? error.message : 'Unknown AI provider error.';
}
