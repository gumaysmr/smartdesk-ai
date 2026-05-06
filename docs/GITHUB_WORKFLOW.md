# SmartDeskAI GitHub Workflow

## Branch Stratejisi

- `main`: Production-ready kod. Direkt commit kapali tutulmali.
- `develop`: Ekip islerinin birlestigi entegrasyon branch'i.
- `feature/umay-*`: Mimari, backend, AI entegrasyonu ve deploy isleri.
- `feature/burak-*`: Dashboard, landing, UI ve analytics isleri.
- `feature/emre-*`: Workflow olusturma, GitHub servisleri ve form isleri.

## Pull Request Kurallari

- Her PR `develop` branch'ine acilir.
- En az 1 ekip arkadasi review vermeden merge edilmez.
- PR aciklamasinda kapsam, test ve risk notu bulunur.
- Ortak type veya API contract degisiyorsa Umay review'u zorunludur.

## Commit Formati

- `feat(scope): kisa aciklama`
- `fix(scope): kisa aciklama`
- `chore(scope): kisa aciklama`
- `docs(scope): kisa aciklama`

Ornek: `feat(api): add ai analysis endpoint`

## Merge Akisi

1. Feature branch guncel `develop` uzerinden acilir.
2. Kod yazilir ve lokal `npm run lint` ile `npm run typecheck` calistirilir.
3. PR acilir.
4. Review yorumlari cozulur.
5. Squash merge ile `develop` branch'ine alinir.
