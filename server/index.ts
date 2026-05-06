import cors from 'cors';
import express from 'express';
import { env } from './config/env';
import { aiRouter } from './routes/ai';
import { healthRouter } from './routes/health';
import { fail } from './utils/api-response';

const app = express();

app.use(
  cors({
    origin: env.CLIENT_ORIGIN,
  }),
);
app.use(express.json({ limit: '1mb' }));

app.use('/api/health', healthRouter);
app.use('/api/ai', aiRouter);

app.use((_req, res) => {
  res.status(404).json(fail('NOT_FOUND', 'Endpoint not found.'));
});

app.use(
  (
    error: unknown,
    _req: express.Request,
    res: express.Response,
    _next: express.NextFunction,
  ) => {
    const message =
      error instanceof Error ? error.message : 'Unexpected server error.';
    res.status(500).json(fail('INTERNAL_ERROR', message));
  },
);

app.listen(env.PORT, () => {
  console.log(`SmartDeskAI API listening on http://localhost:${env.PORT}`);
});
