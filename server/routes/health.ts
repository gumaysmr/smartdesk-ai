import { Router } from 'express';
import { ok } from '../utils/api-response';

export const healthRouter = Router();

healthRouter.get('/', (_req, res) => {
  res.json(
    ok({
      service: 'smartdesk-ai-api',
      status: 'healthy',
      timestamp: new Date().toISOString(),
    }),
  );
});
