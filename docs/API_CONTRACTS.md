# SmartDeskAI API Contracts

Base URL:

- Frontend development: `http://localhost:3000`
- API development: `http://localhost:4000`

## GET /api/health

Servis durumunu dondurur.

## POST /api/ai/analyze

AI analizini tek JSON cevap olarak dondurur.

Request:

```json
{
  "input": "Analiz edilecek mail veya evrak metni",
  "provider": "openai"
}
```

`provider` opsiyoneldir. `openai` veya `claude` olabilir. Bos birakilirsa mock analiz kullanilir.

## POST /api/ai/analyze/stream

SSE ile analiz durumunu ve sonucunu yayinlar.

Event sirasi:

- `status`
- `result`
- `error`
- `done`
