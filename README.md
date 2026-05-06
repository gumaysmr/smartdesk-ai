# SmartDeskAI

SmartDeskAI, AI destekli ofis workflow otomasyon platformudur. Bu repo Umay'in
Lead Developer / Maintainer sorumlulugundaki ana mimariyi baz alir:

- Next.js frontend
- Express.js backend API
- OpenAI ve Claude servis katmani
- SSE streaming altyapisi
- Ortak TypeScript contract yapilari
- ESLint, Prettier ve GitHub workflow standardi

## Kurulum

```bash
npm install
```

`.env.example` dosyasini referans alarak `.env` olusturun.

## Gelistirme

Frontend:

```bash
npm run dev
```

Backend:

```bash
npm run dev:api
```

## Kontrol

```bash
npm run lint
npm run typecheck
npm run build
```

GitHub branch ve PR kurallari icin [docs/GITHUB_WORKFLOW.md](docs/GITHUB_WORKFLOW.md)
dosyasina bakin. API sozlesmeleri [docs/API_CONTRACTS.md](docs/API_CONTRACTS.md)
altinda tutulur.
