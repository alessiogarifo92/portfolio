# Portfolio — Alessio Garifo

Sito statico (HTML/CSS/JS, nessuna build). Tutti i contenuti stanno in `content.js`:
le sezioni vuote vengono nascoste automaticamente.

- Anteprima locale: `cd /home/user/portfolio && python3 -m http.server 8000`
- Deploy: workflow `.github/workflows/pages.yml` (push su `main`). Una tantum: Settings → Pages → Source = GitHub Actions.
- I TODO sono stati compilati dal PDF LinkedIn; aggiungi `projects` e `certifications` quando vuoi.
- "Scarica CV (PDF)" usa la stampa del browser (CSS `@media print`).

## Progetti e demo
- Screenshot reali in `assets/projects/` (presi dalle evidenze di test dei repo, ridimensionati in WebP).
- `demos/mix-and-splash/` è la build web statica di Mix & Splash (`npx vite build` nel repo del gioco, senza service worker), giocabile dal portfolio.
- Per aggiungere un link live o un APK a un progetto: in `content.js` imposta `url` e/o `apk` su quel progetto, i pulsanti compaiono da soli.
