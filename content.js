// Unica fonte dei contenuti, in inglese (en) e italiano (it). Le sezioni con array vuoto vengono nascoste.
// Fonti: profilo LinkedIn (PDF) e README/codice dei repository dei progetti. Nulla di inventato.
window.PORTFOLIO = {
  name: "Alessio Garifo",
  links: {
    github: "https://github.com/alessiogarifo92",
    linkedin: "https://www.linkedin.com/in/alessio-garifo-a89697128/",
    email: "alessiogarifo92@gmail.com"
  },

  en: {
    ui: {
      about: "About", skills: "Skills", experience: "Experience", earlier: "Earlier career", projects: "Projects",
      education: "Education", certifications: "Certifications", languages: "Languages",
      cv: "Download CV (PDF)", fullscreen: "Full screen", closeDemo: "■ Close demo", demo: "Live demo",
      apk: "Download APK", code: "Code on GitHub", theme: "Theme", switchLang: "IT", switchLabel: "Leggi in italiano"
    },
    role: "Full-Stack Software Developer",
    location: "Amsterdam, Netherlands",
    tagline: "PHP, Laravel and Vue.js: robust, maintainable web applications from concept to production on Google Cloud, with hands-on technical support and AI built into the workflow.",
    about: [
      "Full-stack developer with 5 years of professional experience building scalable, maintainable web applications in PHP and JavaScript. I work across the backend (Laravel, REST APIs, database design) and the frontend (Vue.js, UI components), taking projects from the initial concept to deployment in production.",
      "Alongside development I handle technical support: bug reports, incidents and user issues through ticketing systems, with problem analysis, reproduction, root-cause identification and fixes, while keeping communication clear with users and internal teams. I'm comfortable working with SLAs, priorities and escalation paths.",
      "In my daily workflow I use AI coding assistants and agent-based tools to speed up development and improve code quality, and I design AI-powered features (smart search, content suggestions, workflow automation) with attention to reliability, performance and well-structured prompts and APIs.",
      "Open to new opportunities: a full-stack role, modernising an existing PHP application, strengthening technical support through structured ticket management, or exploring how AI can enhance your product."
    ],
    stats: [
      { value: "5", label: "years as a developer" },
      { value: "6", label: "side projects" },
      { value: "2", label: "Android apps (APK)" }
    ],
    skills: {
      "Backend": ["PHP", "Laravel", "REST APIs", "MVC", "OOP", "Database design", "Third-party integrations"],
      "Frontend": ["Vue.js", "JavaScript", "TypeScript", "HTML", "CSS / SASS", "Tailwind", "Bootstrap"],
      "Databases": ["MySQL", "PostgreSQL", "SQLite"],
      "Cloud & Infrastructure": ["Google Cloud Platform", "Linux / Ubuntu", "VMware vSphere", "Docker", "GitHub Actions"],
      "AI": ["AI coding assistants & agents", "AI-powered features", "Prompt design & API integration"],
      "Support & Process": ["Ticketing & incident resolution", "Root-cause analysis", "SLAs & escalation", "Git"]
    },
    experience: [
      {
        company: "Flexpedia", title: "Full Stack Developer", period: "Feb 2024 – present · Haarlem",
        summary: "Development and maintenance of a large legacy business application, delivering enhancements across frontend and backend while keeping the system stable and reliable.",
        bullets: [
          "Full-stack development and maintenance of a large legacy platform",
          "Managing support tickets and working directly with users to troubleshoot and resolve issues",
          "Monitoring and daily use of Google Cloud Platform (GCP)",
          "Developing and maintaining third-party integrations",
          "Contributing to the project's AI transition",
          "Driving continuous improvement, automation and process optimisation"
        ]
      },
      {
        company: "Massimi Sistemi", title: "Back End Developer", period: "Jun 2021 – Sep 2023 · Siena",
        bullets: [
          "Took part in the whole study, testing and implementation cycle for trust domains, leading to successful project completion and client satisfaction",
          "Built buffer systems to speed up database reads",
          "Found and fixed bugs in existing code, improving stability and performance",
          "Optimised existing code to cut load times and improve efficiency",
          "Wrote reusable, clean, readable code that made future changes easier"
        ]
      },
      {
        company: "Boolean Careers", title: "Full Stack Web Developer Trainee", period: "Sep 2020 – Mar 2021 · Milan",
        bullets: [
          "Intensive 6-month full-time bootcamp: theory in the morning, hands-on practice in the afternoon",
          "HTML, CSS/SASS, Bootstrap, JavaScript (jQuery, Vue.js), PHP & OOP, MySQL, Laravel"
        ]
      }
    ],
    earlier: [
      { period: "2013 – 2015", text: "GFT Technologies, Florence — Banking back-office clerk and customer care (AS400 applications, credit-card customer support)" },
      { period: "2015 – 2019", text: "Work experience abroad and in Italy: United Kingdom, Australia (vineyard team leader for a 6-person team), quality control, sales and hospitality" }
    ],
    projects: [
      {
        id: "tisane", name: "Tisane Match", kind: "Web app + Android app", featured: true,
        description: "Recommends herbal teas, teas, chai, ginseng, barley drinks and hot chocolates from the shelf based on taste. A 5-step quiz (about two minutes) builds the user's taste profile, and every product gets a personal match percentage with an explanation of why. Available in English and Italian, installable on the phone and as an offline Android APK.",
        highlights: [
          "Matching engine on 12 taste notes (0–5) for every user and product, with a radar chart",
          "Catalogue of 156 products (31 brands, 6 drink types), photos from Open Food Facts with credit",
          "Email or Google login (Laravel Socialite), reviews, personal collection, password-protected admin panel",
          "Offline Android app with NativePHP: data in SQLite on the phone and \"Update catalogue\" from the website",
          "Deployed on Render with Postgres on Neon; automated tests in CI on both SQLite and Postgres; APK built by GitHub Actions"
        ],
        stack: ["Laravel 13", "PHP 8.4", "Blade", "Tailwind 4", "SQLite", "Postgres", "NativePHP", "Socialite", "GitHub Actions", "Docker"],
        media: [
          { src: "assets/projects/tisane-home.webp", alt: "Tisane Match: home page with call to action and taste profile" },
          { src: "assets/projects/tisane-quiz.webp", alt: "Tisane Match: taste quiz" },
          { src: "assets/projects/tisane-results.webp", alt: "Tisane Match: product page with match score and radar chart" },
          { src: "assets/projects/tisane-app.webp", alt: "Tisane Match: catalogue in the Android app with offline update" }
        ],
        note: "Code in a private repository: available on request."
      },
      {
        id: "mix", name: "Mix & Splash", kind: "Mobile game (Android, PWA)", featured: true,
        description: "Casual puzzle game for smartphones: paint pixel-art pictures by sending paint buckets around a conveyor belt that circles the canvas. You only get red, yellow and blue — orange, green and purple come from mixing on the canvas. Offline, no account, in English and Italian.",
        highlights: [
          "100 levels across 10 themed stages, a boss every 10 levels and an album of completed pictures",
          "Progressive mechanics: frozen pixels, hidden pixels, short conveyor",
          "Every level ships with a solution verified in simulation; levels are generated and checked in CI",
          "Guided tutorial and a symbol for every colour (playable for colour-blind players)",
          "Unit tests with Vitest and end-to-end tests with Playwright; Android build (APK) with Capacitor"
        ],
        stack: ["TypeScript", "Phaser 4", "Vite", "Capacitor", "PWA", "Vitest", "Playwright"],
        media: [
          { src: "assets/projects/ms-map.webp", alt: "Mix & Splash: level map by stage" },
          { src: "assets/projects/ms-play.webp", alt: "Mix & Splash: level in progress with buckets and conveyor" },
          { src: "assets/projects/ms-mix.webp", alt: "Mix & Splash: victory screen" },
          { src: "assets/projects/ms-album.webp", alt: "Mix & Splash: stage album with reward" }
        ],
        demo: { label: "Play the demo", src: "demos/mix-and-splash/index.html" },
        note: "Code in a private repository: available on request. The demo is the web build of the same game."
      },
      {
        id: "psplus", name: "PS Plus Catalog", kind: "Full-stack web app",
        description: "Independent, unofficial catalogue of the PlayStation Plus Game Catalog, with better search and filters than the native ones. It aggregates and normalises public store data; fields that aren't available stay empty and are never made up.",
        highlights: [
          "REST API in FastAPI with PostgreSQL and SQLAlchemy; scheduled sync worker as a separate process (APScheduler)",
          "Nuxt 3 frontend with Tailwind and a UI in 10 languages",
          "Source-friendly fetching: configurable delay, retries with backoff, sync logs; the API keeps serving the last good data if the source changes",
          "Full environment with Docker Compose, key-protected admin endpoint, tests with pytest"
        ],
        stack: ["Python", "FastAPI", "PostgreSQL", "Nuxt 3", "Vue", "Tailwind", "Docker Compose"],
        note: "Code in a private repository: available on request."
      },
      {
        id: "jobs", name: "Telegram Jobs Bot", kind: "Automation / bot",
        description: "Telegram bot that pushes new Laravel/PHP full-stack openings in Amsterdam and EU-remote roles to a private chat, with title, company, location, salary, a preview and an apply link. Official APIs and RSS feeds only — no scraping.",
        highlights: [
          "6 sources (Adzuna, LaraJobs, DevITJobs.nl, Jobicy, Remotive, Remote OK) with role and location filters",
          "Serverless runs on GitHub Actions in two lanes (every 30 minutes and every 2 hours), sized to each source's rate limits and the free Actions budget",
          "Deduplication with versioned state (seen.json) and source attribution; pytest in CI"
        ],
        stack: ["Python", "Telegram Bot API", "GitHub Actions", "REST / RSS", "pytest"],
        note: "Code in a private repository: available on request."
      },
      {
        id: "subsplit", name: "Subsplit", kind: "Mobile app",
        description: "App to split family or group subscriptions: tracks who owes what for recurring costs, without handling real payments.",
        highlights: [
          "React Native with Expo and TypeScript; Supabase backend (Postgres, Auth, Storage) with versioned migrations",
          "Amounts and payments visible according to role (admin, payer, participant, outsider), verified case by case",
          "\"Ledger\" design system with every colour pair checked against WCAG AA contrast"
        ],
        stack: ["React Native", "Expo", "TypeScript", "Supabase", "Postgres"],
        note: "Code in a private repository: available on request."
      },
      {
        id: "deliveboo", name: "Deliveboo", kind: "Boolean final project (team)",
        description: "Deliveroo-style food delivery application built as a team for the Boolean bootcamp final project: cart, checkout with simulated payment and order sent to the restaurant.",
        highlights: [
          "Test payments with Braintree and a private area for restaurant owners",
          "Order trend statistics with Chart.js"
        ],
        stack: ["Laravel", "PHP", "MySQL", "Vue", "Braintree", "Chart.js"],
        repo: "https://github.com/alessiogarifo92/deliveboo"
      }
    ],
    education: [
      { school: "Boolean", degree: "Full Stack Web Developer bootcamp (full time)", period: "2020 – 2021" },
      { school: "Wine & Spirit Education Trust", degree: "Certificate in Wine and Spirit Education", period: "2018 – 2019" },
      { school: "ISIS Gramsci-Keynes, Prato", degree: "Surveying / Geometric analysis", period: "2006 – 2011" }
    ],
    certifications: [],
    languages: []
  },

  it: {
    ui: {
      about: "Chi sono", skills: "Competenze", experience: "Esperienza", earlier: "Percorso precedente", projects: "Progetti",
      education: "Formazione", certifications: "Certificazioni", languages: "Lingue",
      cv: "Scarica CV (PDF)", fullscreen: "Schermo intero", closeDemo: "■ Chiudi demo", demo: "Demo live",
      apk: "Scarica APK", code: "Codice su GitHub", theme: "Tema", switchLang: "EN", switchLabel: "Read in English"
    },
    role: "Full-Stack Software Developer",
    location: "Amsterdam, Paesi Bassi",
    tagline: "PHP, Laravel e Vue.js: applicazioni web robuste e manutenibili, dal concept alla produzione su Google Cloud, con supporto tecnico e AI integrata nel flusso di lavoro.",
    about: [
      "Sviluppatore full stack con 5 anni di esperienza professionale nella costruzione di applicazioni web scalabili e manutenibili in PHP e JavaScript. Lavoro sul backend (Laravel, REST API, database design) e sul frontend (Vue.js, componenti UI), seguendo i progetti dall'idea iniziale al rilascio in produzione.",
      "Affianco allo sviluppo il supporto tecnico: gestisco bug, incidenti e richieste degli utenti tramite ticketing, con analisi del problema, riproduzione, individuazione della causa e fix, comunicando in modo chiaro con utenti e team. Sono a mio agio con SLA, priorità e percorsi di escalation.",
      "Uso quotidianamente assistenti di coding e strumenti ad agenti per accelerare lo sviluppo e migliorare la qualità del codice, e progetto funzionalità basate su AI (ricerca intelligente, suggerimenti di contenuti, automazione di workflow) con attenzione ad affidabilità, performance e prompt ben strutturati.",
      "Sono aperto a nuove opportunità: un ruolo full stack, modernizzare un'applicazione PHP esistente, rafforzare il supporto tecnico con una gestione strutturata dei ticket, o esplorare come l'AI può migliorare il tuo prodotto."
    ],
    stats: [
      { value: "5", label: "anni da sviluppatore" },
      { value: "6", label: "progetti personali" },
      { value: "2", label: "app Android (APK)" }
    ],
    skills: {
      "Backend": ["PHP", "Laravel", "REST API", "MVC", "OOP", "Database design", "Integrazioni di terze parti"],
      "Frontend": ["Vue.js", "JavaScript", "TypeScript", "HTML", "CSS / SASS", "Tailwind", "Bootstrap"],
      "Database": ["MySQL", "PostgreSQL", "SQLite"],
      "Cloud & Infrastruttura": ["Google Cloud Platform", "Linux / Ubuntu", "VMware vSphere", "Docker", "GitHub Actions"],
      "AI": ["Assistenti di coding e agenti", "Funzionalità AI-powered", "Prompt design e integrazione API"],
      "Supporto & Processo": ["Ticketing e risoluzione incidenti", "Root cause analysis", "SLA ed escalation", "Git"]
    },
    experience: [
      {
        company: "Flexpedia", title: "Full Stack Developer", period: "Feb 2024 – oggi · Haarlem",
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
        company: "Massimi Sistemi", title: "Back End Developer", period: "Giu 2021 – Set 2023 · Siena",
        bullets: [
          "Partecipazione all'intero ciclo di studio, test e implementazione del codice per i trust domains, con completamento del progetto e soddisfazione del cliente",
          "Realizzazione di sistemi di buffer per velocizzare la lettura dei dati dal database",
          "Individuazione e correzione di bug nel codice esistente, con maggiore stabilità e prestazioni",
          "Ottimizzazione del codice per ridurre i tempi di caricamento e aumentare l'efficienza",
          "Codice riutilizzabile, pulito e leggibile, per semplificare le modifiche future"
        ]
      },
      {
        company: "Boolean Careers", title: "Full Stack Web Developer Trainee", period: "Set 2020 – Mar 2021 · Milano",
        bullets: [
          "Corso intensivo full time di 6 mesi: teoria al mattino e pratica nel pomeriggio",
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
        id: "tisane", name: "Tisane Match", kind: "Web app + app Android", featured: true,
        description: "App che consiglia tisane, tè, chai, ginseng, orzo e cioccolate calde da scaffale in base al gusto. Un quiz in 5 passi (circa due minuti) costruisce il profilo di gusto dell'utente e ogni prodotto riceve un match in percentuale con la spiegazione del perché. Disponibile in italiano e inglese, installabile sul telefono e come APK Android offline.",
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
          { src: "assets/projects/tisane-quiz.webp", alt: "Tisane Match: quiz di gusto" },
          { src: "assets/projects/tisane-results.webp", alt: "Tisane Match: scheda prodotto con match e radar" },
          { src: "assets/projects/tisane-app.webp", alt: "Tisane Match: catalogo nell'app Android con aggiornamento offline" }
        ],
        note: "Codice in repository privato: disponibile su richiesta."
      },
      {
        id: "mix", name: "Mix & Splash", kind: "Gioco mobile (Android, PWA)", featured: true,
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
        id: "psplus", name: "PS Plus Catalog", kind: "Web app full stack",
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
        id: "jobs", name: "Telegram Jobs Bot", kind: "Automazione / bot",
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
        id: "subsplit", name: "Subsplit", kind: "App mobile",
        description: "App per dividere gli abbonamenti familiari o di gruppo: traccia chi deve quanto per le spese ricorrenti, senza gestire pagamenti reali.",
        highlights: [
          "React Native con Expo e TypeScript; backend Supabase (Postgres, Auth, Storage) con migrazioni versionate",
          "Visibilità di importi e pagamenti diversa per ruolo (admin, pagatore, partecipante, esterno), verificata caso per caso",
          "Design system «Ledger» con coppie di colori verificate sul contrasto WCAG AA"
        ],
        stack: ["React Native", "Expo", "TypeScript", "Supabase", "Postgres"],
        note: "Codice in repository privato: disponibile su richiesta."
      },
      {
        id: "deliveboo", name: "Deliveboo", kind: "Progetto finale Boolean (team)",
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
      { school: "ISIS Gramsci-Keynes, Prato", degree: "Geometria / Analisi geometrica", period: "2006 – 2011" }
    ],
    certifications: [],
    languages: []
  }
};
