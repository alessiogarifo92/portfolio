// Unica fonte dei contenuti. Le sezioni con array vuoto vengono nascoste.
window.PORTFOLIO = {
  name: "Alessio Garifo",
  role: "Full-Stack Software Developer",
  location: "Amsterdam, Paesi Bassi",
  tagline: "PHP, Laravel e Vue.js: applicazioni web robuste e manutenibili, dal concept alla produzione su Google Cloud, con supporto tecnico e AI integrata nel flusso di lavoro.",
  about: [
    "Sviluppatore full stack con oltre 4 anni di esperienza nella costruzione di applicazioni web scalabili e manutenibili in PHP e JavaScript. Lavoro sul backend (Laravel, REST API, database design) e sul frontend (Vue.js, componenti UI), seguendo i progetti dall'idea iniziale al rilascio in produzione.",
    "Affianco allo sviluppo il supporto tecnico: gestisco bug, incidenti e richieste degli utenti tramite ticketing, con analisi del problema, riproduzione, individuazione della causa e fix, comunicando in modo chiaro con utenti e team. Sono a mio agio con SLA, priorità e percorsi di escalation.",
    "Uso quotidianamente assistenti di coding e strumenti ad agenti per accelerare lo sviluppo e migliorare la qualità del codice, e progetto funzionalità basate su AI (ricerca intelligente, suggerimenti di contenuti, automazione di workflow) con attenzione ad affidabilità, performance e prompt ben strutturati.",
    "Sono aperto a nuove opportunità: un full stack developer, modernizzare un'applicazione PHP esistente, rafforzare il supporto tecnico con una gestione strutturata dei ticket, o esplorare come l'AI può migliorare il tuo prodotto."
  ],
  links: {
    github: "https://github.com/alessiogarifo92",
    linkedin: "https://www.linkedin.com/in/alessio-garifo-a89697128/",
    email: "Alessiogarifo92@gmail.com"
  },
  stats: [
    { value: "4+", label: "anni di esperienza" },
    { value: "GCP", label: "deploy e infrastruttura" },
    { value: "AI", label: "tool e funzionalità integrate" }
  ],
  skills: {
    "Backend": ["PHP", "Laravel", "REST API", "MVC", "OOP", "Database design", "Integrazioni di terze parti"],
    "Frontend": ["Vue.js", "JavaScript", "HTML", "CSS / SASS", "Bootstrap", "jQuery"],
    "Database": ["MySQL", "SQLite"],
    "Cloud & Infrastruttura": ["Google Cloud Platform", "Linux / Ubuntu", "VMware vSphere"],
    "AI": ["Assistenti di coding e agenti", "Funzionalità AI-powered", "Prompt design e integrazione API"],
    "Supporto & Processo": ["Ticketing e risoluzione incidenti", "Root cause analysis", "SLA ed escalation", "Git"]
  },
  experience: [
    {
      company: "Flexpedia",
      title: "Full Stack Developer",
      period: "Feb 2024 – oggi · Haarlem",
      summary: "Sviluppo e manutenzione di una grande applicazione di business legacy, con evoluzioni su frontend e backend garantendo stabilità e affidabilità del sistema.",
      bullets: [
        "Sviluppo e manutenzione full stack di una grande piattaforma legacy",
        "Gestione dei ticket di supporto e collaborazione diretta con gli utenti per diagnosi e risoluzione dei problemi",
        "Monitoraggio e uso quotidiano di Google Cloud Platform (GCP)",
        "Sviluppo e manutenzione di integrazioni con servizi di terze parti",
        "Contributo alla transizione AI del progetto",
        "Miglioramento continuo, automazione e ottimizzazione dei processi"
      ]
    },
    {
      company: "Massimi Sistemi",
      title: "Back End Developer",
      period: "Giu 2021 – Set 2023 · Siena",
      bullets: [
        "Partecipazione all'intero ciclo di studio, test e implementazione del codice per i trust domains, con completamento del progetto e soddisfazione del cliente",
        "Realizzazione di sistemi di buffer per velocizzare la lettura dei dati dal database",
        "Individuazione e correzione di bug nel codice esistente, con maggiore stabilità e prestazioni",
        "Ottimizzazione del codice per ridurre i tempi di caricamento e aumentare l'efficienza",
        "Codice riutilizzabile, pulito e leggibile, per semplificare le modifiche future"
      ]
    },
    {
      company: "Boolean Careers",
      title: "Full Stack Web Developer Trainee",
      period: "Set 2020 – Mar 2021 · Milano",
      bullets: [
        "Corso intensivo di 6 mesi: teoria al mattino e pratica nel pomeriggio",
        "HTML, CSS/SASS, Bootstrap, JavaScript (jQuery, Vue.js), PHP e OOP, MySQL, Laravel"
      ]
    }
  ],
  earlier: [
    { period: "2013 – 2015", text: "GFT Technologies, Firenze — Banking Back Office Clerk e Customer Care (applicazioni AS400, supporto clienti su carte di credito)" },
    { period: "2015 – 2019", text: "Esperienze di lavoro all'estero e in Italia: Regno Unito, Australia (team leader di 6 persone in vigneto), controllo qualità, vendita e ristorazione" }
  ],
  projects: [
    {
      name: "Tisane Match",
      kind: "Web app + app Android",
      featured: true,
      description: "App che consiglia tisane, tè, chai, ginseng, orzo e cioccolate calde da scaffale in base al gusto. Un quiz in 4-5 passi costruisce il profilo di gusto dell'utente e ogni prodotto riceve un match in percentuale con la spiegazione del perché. Disponibile in italiano e inglese, installabile sul telefono e come APK Android offline.",
      highlights: [
        "Motore di match su 12 note di gusto (0-5) per utente e per prodotto, con grafico radar",
        "Catalogo di 156 prodotti (31 marche, 6 tipi di bevanda), foto da Open Food Facts con credito",
        "Login con email o Google (Laravel Socialite), recensioni, collezione personale, pannello admin protetto",
        "App Android offline con NativePHP: dati in SQLite sul telefono e «Aggiorna catalogo» dal sito",
        "Deploy su Render con Postgres su Neon; test automatici in CI su SQLite e Postgres; APK costruito con GitHub Actions"
      ],
      stack: ["Laravel 13", "PHP 8.4", "Blade", "Tailwind 4", "SQLite", "Postgres", "NativePHP", "Socialite", "GitHub Actions", "Docker"],
      media: [
        { src: "assets/projects/tisane-home.webp", alt: "Tisane Match: home con call to action e profilo di gusto" },
        { src: "assets/projects/tisane-quiz.webp", alt: "Tisane Match: quiz di gusto, passo 3 di 4" },
        { src: "assets/projects/tisane-results.webp", alt: "Tisane Match: scheda prodotto con match e radar" },
        { src: "assets/projects/tisane-app.webp", alt: "Tisane Match: catalogo nell'app Android con aggiornamento offline" }
      ],
      note: "Codice in repository privato: disponibile su richiesta."
    },
    {
      name: "Mix & Splash",
      kind: "Gioco mobile (Android, PWA)",
      featured: true,
      description: "Puzzle casual per smartphone: si dipingono immagini in pixel art mandando secchielli di vernice su un nastro attorno alla tela. Ci sono solo rosso, giallo e blu: arancione, verde e viola si ottengono mescolando sulla tela. Gioco offline, senza account, in inglese e italiano.",
      highlights: [
        "100 livelli in 10 stage tematici, con boss ogni 10 livelli e album delle immagini completate",
        "Meccaniche progressive: pixel ghiacciati, pixel nascosti, nastro corto",
        "Ogni livello ha una soluzione verificata in simulazione, con livelli generati e controllati in CI",
        "Tutorial guidato, simboli per ogni colore (accessibile a chi distingue male i colori)",
        "Unit test con Vitest e test end-to-end con Playwright; build Android (APK) con Capacitor"
      ],
      stack: ["TypeScript", "Phaser 4", "Vite", "Capacitor", "PWA", "Vitest", "Playwright"],
      media: [
        { src: "assets/projects/ms-map.webp", alt: "Mix & Splash: mappa dei livelli per stage" },
        { src: "assets/projects/ms-play.webp", alt: "Mix & Splash: livello in corso con secchielli e nastro" },
        { src: "assets/projects/ms-mix.webp", alt: "Mix & Splash: schermata di vittoria" },
        { src: "assets/projects/ms-album.webp", alt: "Mix & Splash: album dello stage con ricompensa" }
      ],
      demo: { label: "Gioca la demo", src: "demos/mix-and-splash/index.html" },
      note: "Codice in repository privato: disponibile su richiesta. La demo è la build web dello stesso gioco."
    },
    {
      name: "PS Plus Catalog",
      kind: "Web app full stack",
      description: "Catalogo indipendente e non ufficiale del PlayStation Plus Game Catalog, con ricerca e filtri migliori di quelli nativi. Aggrega e normalizza dati pubblici dello store; i campi non disponibili restano vuoti e non vengono mai inventati.",
      highlights: [
        "API REST in FastAPI con PostgreSQL e SQLAlchemy; sync schedulato come processo separato (APScheduler)",
        "Frontend Nuxt 3 con Tailwind e interfaccia in 10 lingue",
        "Fetch rispettoso della sorgente: ritardo configurabile, retry con backoff, log dei sync; l'API serve l'ultimo dato valido se la sorgente cambia",
        "Ambiente completo con Docker Compose, endpoint admin protetto da chiave, test con pytest"
      ],
      stack: ["Python", "FastAPI", "PostgreSQL", "Nuxt 3", "Vue", "Tailwind", "Docker Compose"],
      note: "Codice in repository privato: disponibile su richiesta."
    },
    {
      name: "Telegram Jobs Bot",
      kind: "Automazione / bot",
      description: "Bot Telegram che invia in una chat privata le nuove offerte Laravel/PHP full stack ad Amsterdam e in remoto UE, con titolo, azienda, sede, stipendio, anteprima e link per candidarsi. Solo API ufficiali e feed RSS, nessuno scraping.",
      highlights: [
        "6 fonti (Adzuna, LaraJobs, DevITJobs.nl, Jobicy, Remotive, Remote OK) con filtri per ruolo e località",
        "Esecuzione serverless con GitHub Actions su due cadenze (ogni 30 minuti e ogni 2 ore), calibrate sui limiti di ogni fonte e sul budget di minuti gratuiti",
        "Deduplicazione con stato versionato (seen.json) e attribuzione alle fonti; test con pytest in CI"
      ],
      stack: ["Python", "Telegram Bot API", "GitHub Actions", "REST / RSS", "pytest"],
      note: "Codice in repository privato: disponibile su richiesta."
    },
    {
      name: "Subsplit",
      kind: "App mobile",
      description: "App per dividere gli abbonamenti familiari o di gruppo: traccia chi deve quanto per le spese ricorrenti, senza gestire pagamenti reali.",
      highlights: [
        "React Native con Expo e TypeScript; backend Supabase (Postgres, Auth, Storage) con migrazioni versionate",
        "Visibilità di importi e pagamenti diversa per ruolo (admin, pagatore, partecipante, esterno), verificata con evidenze per ogni caso",
        "Design system «Ledger» con coppie di colori verificate sul contrasto WCAG AA"
      ],
      stack: ["React Native", "Expo", "TypeScript", "Supabase", "Postgres"],
      note: "Codice in repository privato: disponibile su richiesta."
    },
    {
      name: "Deliveboo",
      kind: "Progetto finale Boolean (team)",
      description: "Applicazione di food delivery in stile Deliveroo, realizzata in team come progetto finale del corso Boolean: carrello, checkout con pagamento simulato e invio dell'ordine al ristorante.",
      highlights: [
        "Pagamento di prova con Braintree e area riservata per i ristoratori",
        "Statistiche dell'andamento degli ordini con Chart.js"
      ],
      stack: ["Laravel", "PHP", "MySQL", "Vue", "Braintree", "Chart.js"],
      repo: "https://github.com/alessiogarifo92/deliveboo"
    }
  ],
  education: [
    { school: "Boolean", degree: "Corso Full Stack Web Developer Full Time", period: "2020 – 2021" },
    { school: "Wine & Spirit Education Trust", degree: "Attestato Wine and Spirit Education", period: "2018 – 2019" },
    { school: "ISIS Gramsci-Keynes, Prato", degree: "Geometra / Analisi geometrica", period: "2006 – 2011" }
  ],
  certifications: [],
  languages: []
};
