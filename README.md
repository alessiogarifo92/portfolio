# Portfolio — Alessio Garifo

Sito statico (HTML/CSS/JS, nessuna build), bilingue EN/IT. Tutti i contenuti stanno in `content.js` (oggetti `en` e `it`):
le sezioni vuote vengono nascoste automaticamente.

- Anteprima locale: `cd /home/user/portfolio && python3 -m http.server 8000`
- Deploy: workflow `.github/workflows/pages.yml` (push su `main`). Una tantum: Settings → Pages → Source = GitHub Actions.
- I TODO sono stati compilati dal PDF LinkedIn; aggiungi `projects` e `certifications` quando vuoi.
- "Download CV" scarica `assets/Alessio_Garifo_CV.pdf`: CV ATS-friendly (A4, una colonna, testo reale) generato da `cv/cv.html`. Dopo aver modificato `cv/cv.html`: `cd /home/user/portfolio && node scripts/build-cv.js` (serve Playwright con Chromium; in alternativa imposta `CHROMIUM_PATH`).

## Progetti e demo
- Screenshot reali in `assets/projects/` (presi dalle evidenze di test dei repo, ridimensionati in WebP).
- `demos/mix-and-splash/` è la build web statica di Mix & Splash (`npx vite build` nel repo del gioco, senza service worker), giocabile dal portfolio.
- Per aggiungere un link live o un APK a un progetto: in `content.js` imposta `url` e/o `apk` su quel progetto, i pulsanti compaiono da soli.
