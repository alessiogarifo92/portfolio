(function () {
  var P = window.PORTFOLIO, d, u, lang;
  var $ = function (id) { return document.getElementById(id); };
  var esc = function (s) { var e = document.createElement("div"); e.textContent = s; return e.innerHTML; };
  var has = function (a) { return Array.isArray(a) ? a.length > 0 : a && Object.keys(a).length > 0; };

  // Inline icons (stroke icons in currentColor, brand marks filled).
  var I = {
    linkedin: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z"/></svg>',
    github: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 .3a12 12 0 0 0-3.8 23.38c.6.12.83-.26.83-.57v-2c-3.34.73-4.04-1.6-4.04-1.6-.55-1.4-1.34-1.77-1.34-1.77-1.08-.74.09-.73.09-.73 1.2.09 1.83 1.24 1.83 1.24 1.07 1.83 2.8 1.3 3.49 1 .1-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.14-.3-.54-1.52.1-3.18 0 0 1-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.28-1.55 3.29-1.23 3.29-1.23.64 1.66.24 2.88.12 3.18a4.65 4.65 0 0 1 1.23 3.22c0 4.61-2.8 5.63-5.48 5.92.42.36.81 1.1.81 2.22v3.29c0 .32.21.7.82.58A12 12 0 0 0 12 .3"/></svg>',
    mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/></svg>',
    download: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="m7 10 5 5 5-5"/><path d="M12 15V3"/></svg>',
    play: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M7 4.5v15a1 1 0 0 0 1.5.86l12.5-7.5a1 1 0 0 0 0-1.72L8.5 3.64A1 1 0 0 0 7 4.5z"/></svg>',
    stop: '<svg viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="6" width="12" height="12" rx="2"/></svg>',
    expand: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/></svg>',
    android: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.6 9.48l1.84-3.18a.38.38 0 0 0-.66-.38l-1.86 3.22a11.4 11.4 0 0 0-9.84 0L5.22 5.92a.38.38 0 0 0-.66.38L6.4 9.48A10.8 10.8 0 0 0 1 18h22a10.8 10.8 0 0 0-5.4-8.52zM7 15.25a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5zm10 0a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5z"/></svg>',
    pin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z"/><circle cx="12" cy="10" r="3"/></svg>',
    briefcase: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>',
    clock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>',
    spark: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l1.9 5.8L20 10.7l-6.1 1.9L12 18.5l-1.9-5.9L4 10.7l6.1-1.9z"/><path d="M19 3v4M17 5h4"/></svg>',
    server: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="8" rx="2"/><rect x="2" y="14" width="20" height="8" rx="2"/><path d="M6 6h.01M6 18h.01"/></svg>',
    layout: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg>',
    database: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/><path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3"/></svg>',
    cloud: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9z"/></svg>',
    lifebuoy: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="4"/><path d="m4.93 4.93 4.24 4.24M14.83 14.83l4.24 4.24M14.83 9.17l4.24-4.24M4.93 19.07l4.24-4.24"/></svg>',
    sun: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/></svg>',
    moon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>'
  };
  // Every button looks the same; `tone` only tints the icon (brand colour), never the button body.
  function btn(o) {
    var tag = o.href ? "a" : "button";
    var attrs = o.href ? ' href="' + o.href + '"' + (o.ext ? ' target="_blank" rel="noopener"' : "") : ' type="button"';
    return "<" + tag + ' class="btn"' + attrs + (o.data || "") + '><i class="ico ' + (o.tone || "") + '">' + I[o.icon] + "</i><span>" + esc(o.label) + "</span></" + tag + ">";
  }

  function pickLang() {
    try { var saved = localStorage.getItem("lang"); if (saved === "en" || saved === "it") return saved; } catch (e) {}
    var q = new URLSearchParams(location.search).get("lang");
    if (q === "en" || q === "it") return q;
    return (navigator.language || "en").toLowerCase().indexOf("it") === 0 ? "it" : "en";
  }

  function contactButtons() {
    var b = [];
    if (P.links.linkedin) b.push(btn({ href: P.links.linkedin, ext: true, icon: "linkedin", tone: "t-linkedin", label: "LinkedIn" }));
    if (P.links.github) b.push(btn({ href: P.links.github, ext: true, icon: "github", tone: "t-github", label: "GitHub" }));
    if (P.links.email) b.push(btn({ href: "mailto:" + P.links.email, icon: "mail", tone: "t-mail", label: "Email" }));
    return b;
  }

  function render() {
    d = P[lang]; u = d.ui;
    document.documentElement.lang = lang;
    document.title = P.name + " — " + d.role;
    var meta = document.querySelector('meta[name="description"]'); if (meta) meta.content = d.tagline;
    $("lang").textContent = u.switchLang; $("lang").setAttribute("aria-label", u.switchLabel); $("lang").title = u.switchLabel;
    $("theme").setAttribute("aria-label", u.theme); $("theme").title = u.theme;
    $("name").textContent = P.name;
    $("role").textContent = d.role;
    $("location").textContent = d.location;
    $("tagline").textContent = d.tagline;
    $("footer").textContent = "© " + new Date().getFullYear() + " " + P.name;
    $("built").textContent = u.builtWith;

    $("cta").innerHTML = contactButtons().concat(btn({ icon: "download", tone: "t-accent", label: u.cv, data: ' data-print="1"' })).join("");
    $("facts").innerHTML = (d.facts || []).map(function (f) {
      return "<li" + (f.live ? ' class="live"' : "") + '><i class="ico">' + (f.live ? '<b class="dot"></b>' : I[f.icon]) + "</i>" + esc(f.text) + "</li>";
    }).join("");

    var sections = [];
    if (has(d.about)) {
      var langs = has(d.languages) ? '<aside class="langs glass"><h3>' + esc(u.languages) + "</h3><ul>" + d.languages.map(function (l) {
        return '<li><span class="lcode">' + esc(l.code) + '</span><div><b>' + esc(l.name) + "</b><small>" + esc(l.level) + '</small></div></li>';
      }).join("") + "</ul></aside>" : "";
      sections.push(["about", u.about, '<div class="about-wrap"><div class="about">' + d.about.map(function (p) { return "<p>" + esc(p) + "</p>"; }).join("") + "</div>" + langs + "</div>"]);
    }
    if (has(d.skills)) sections.push(["skills", u.skills, '<div class="bento">' + d.skills.map(function (s) {
      return '<div class="tile glass"><i class="ico tile-ico">' + I[s.icon] + "</i><h3>" + esc(s.title) + "</h3><p>" + esc(s.desc) + '</p><ul class="chips">' +
        s.items.map(function (x) { return "<li>" + esc(x) + "</li>"; }).join("") + "</ul></div>";
    }).join("") + "</div>"]);
    if (has(d.experience)) sections.push(["experience", u.experience, '<ol class="timeline">' + d.experience.map(function (e) {
      var b = (e.bullets || []).map(function (x) { return "<li>" + esc(x) + "</li>"; }).join("");
      return '<li><div class="when">' + esc(e.period || "") + '</div><div class="what glass"><h3>' + esc(e.title) + ' <span class="at">@ ' + esc(e.company) + "</span></h3>" +
        (e.summary ? "<p>" + esc(e.summary) + "</p>" : "") + (b ? "<ul>" + b + "</ul>" : "") + "</div></li>";
    }).join("") + "</ol>"]);
    if (has(d.projects)) sections.push(["projects", u.projects, '<div class="projects">' + d.projects.map(function (p, i) {
      var media = (p.media || []).map(function (m) {
        return '<button class="shot" data-src="' + m.src + '" data-alt="' + esc(m.alt) + '"><img decoding="async" src="' + m.src + '" alt="' + esc(m.alt) + '"></button>';
      }).join("");
      var actions = [];
      if (p.demo) {
        actions.push(btn({ icon: "play", tone: "t-accent", label: p.demo.label, data: ' data-demo="' + i + '"' }));
        actions.push(btn({ href: p.demo.src, ext: true, icon: "expand", tone: "t-accent", label: u.fullscreen }));
      }
      if (p.url) actions.push(btn({ href: p.url, ext: true, icon: "expand", tone: "t-accent", label: u.demo }));
      if (p.apk) actions.push(btn({ href: p.apk, ext: true, icon: "android", tone: "t-android", label: u.apk }));
      if (p.repo) actions.push(btn({ href: p.repo, ext: true, icon: "github", tone: "t-github", label: u.code }));
      return '<article class="project glass' + (p.featured ? " featured" : "") + '"><div class="ptext"><p class="kind">' + esc(p.kind || "") + "</p><h3>" + esc(p.name) + "</h3><p>" + esc(p.description) + "</p>" +
        (p.highlights ? "<ul>" + p.highlights.map(function (h) { return "<li>" + esc(h) + "</li>"; }).join("") + "</ul>" : "") +
        '<ul class="chips">' + (p.stack || []).map(function (x) { return "<li>" + esc(x) + "</li>"; }).join("") + "</ul>" +
        (actions.length ? '<div class="actions">' + actions.join("") + "</div>" : "") + (p.note ? '<p class="note">' + esc(p.note) + "</p>" : "") + "</div>" +
        (media ? '<div class="shots">' + media + "</div>" : "") + '<div class="demo-slot" id="demo-' + i + '"></div></article>';
    }).join("") + "</div>"]);
    if (has(d.earlier)) sections.push(["earlier", u.earlier, '<ol class="timeline compact">' + d.earlier.map(function (e) {
      return '<li><div class="when">' + esc(e.period) + '</div><div class="what">' + esc(e.text) + "</div></li>";
    }).join("") + "</ol>"]);
    if (has(d.education)) sections.push(["education", u.education, '<ul class="edu">' + d.education.map(function (e) {
      return '<li class="glass"><span class="when">' + esc(e.period || "") + "</span><b>" + esc(e.degree) + "</b><span>" + esc(e.school) + "</span></li>";
    }).join("") + "</ul>"]);
    if (has(d.certifications)) sections.push(["certifications", u.certifications, '<ul class="plain">' + d.certifications.map(function (c) { return "<li>" + esc(typeof c === "string" ? c : c.name) + "</li>"; }).join("") + "</ul>"]);
    if (d.contact) sections.push(["contact", u.contact, '<div class="contact glass"><h3>' + esc(d.contact.title) + "</h3><p>" + esc(d.contact.text) + '</p><div class="cta">' +
      btn({ href: "mailto:" + P.links.email, icon: "mail", tone: "t-mail", label: d.contact.email }) + contactButtons().slice(0, 2).join("") + "</div></div>"]);

    $("sections").innerHTML = sections.map(function (s, n) {
      return '<section id="' + s[0] + '" class="reveal"><h2><span class="num">0' + (n + 1) + "</span>" + esc(s[1]) + "</h2>" + s[2] + "</section>";
    }).join("");
    $("nav-links").innerHTML = sections.map(function (s) { return '<a href="#' + s[0] + '">' + esc(s[1]) + "</a>"; }).join("");
    themeIcon();
    observe();
  }

  function observe() {
    if ("IntersectionObserver" in window) {
      var io = new IntersectionObserver(function (es) {
        es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
      }, { threshold: 0.06 });
      document.querySelectorAll(".reveal").forEach(function (el) { io.observe(el); });
    } else document.querySelectorAll(".reveal").forEach(function (el) { el.classList.add("in"); });
  }

  var root = document.documentElement;
  function themeIcon() { $("theme").innerHTML = root.dataset.theme === "light" ? I.moon : I.sun; }

  lang = pickLang();
  render();

  $("lang").addEventListener("click", function () {
    lang = lang === "en" ? "it" : "en";
    try { localStorage.setItem("lang", lang); } catch (e) {}
    render();
  });
  // Follow live OS/browser theme changes until the visitor picks a theme with the toggle.
  var mq = window.matchMedia && matchMedia("(prefers-color-scheme: light)");
  function saved() { try { var t = localStorage.getItem("theme"); return t === "light" || t === "dark" ? t : null; } catch (e) { return null; } }
  if (mq) {
    var onChange = function () { if (!saved()) { root.dataset.theme = mq.matches ? "light" : "dark"; themeIcon(); } };
    if (mq.addEventListener) mq.addEventListener("change", onChange); else if (mq.addListener) mq.addListener(onChange);
  }
  $("theme").addEventListener("click", function () {
    root.dataset.theme = root.dataset.theme === "light" ? "dark" : "light";
    try { localStorage.setItem("theme", root.dataset.theme); } catch (e) {}
    themeIcon();
  });

  document.addEventListener("click", function (e) {
    var t = e.target.nodeType === 1 ? e.target : e.target.parentElement;
    if (t.closest("[data-print]")) { window.print(); return; }
    var shot = t.closest(".shot");
    if (shot) {
      $("lb-img").src = shot.dataset.src; $("lb-img").alt = shot.dataset.alt;
      if ($("lb").showModal) $("lb").showModal(); else $("lb").setAttribute("open", "");
      return;
    }
    var demo = t.closest("[data-demo]");
    if (demo) {
      var i = demo.dataset.demo, slot = $("demo-" + i), p = d.projects[i];
      if (slot.firstChild) {
        slot.innerHTML = "";
        demo.innerHTML = '<i class="ico t-accent">' + I.play + "</i><span>" + esc(p.demo.label) + "</span>";
        return;
      }
      slot.innerHTML = '<div class="phone"><iframe src="' + p.demo.src + '" title="' + esc(p.name) + '" allow="fullscreen"></iframe></div>';
      demo.innerHTML = '<i class="ico t-accent">' + I.stop + "</i><span>" + esc(u.closeDemo.replace(/^■\s*/, "")) + "</span>";
      slot.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }
    if (t.id === "lb" || t.id === "lb-img") { if ($("lb").close) $("lb").close(); else $("lb").removeAttribute("open"); }
  });
})();
