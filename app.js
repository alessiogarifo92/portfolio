(function () {
  var P = window.PORTFOLIO, d, u, lang;
  var $ = function (id) { return document.getElementById(id); };
  var esc = function (s) { var e = document.createElement("div"); e.textContent = s; return e.innerHTML; };
  var has = function (a) { return Array.isArray(a) ? a.length > 0 : a && Object.keys(a).length > 0; };

  function pickLang() {
    try { var saved = localStorage.getItem("lang"); if (saved === "en" || saved === "it") return saved; } catch (e) {}
    var q = new URLSearchParams(location.search).get("lang");
    if (q === "en" || q === "it") return q;
    return (navigator.language || "en").toLowerCase().indexOf("it") === 0 ? "it" : "en";
  }

  function render() {
  d = P[lang]; u = d.ui; d.name = P.name; d.links = P.links;
  document.documentElement.lang = lang;
  document.title = d.name + " — " + d.role;
  var meta = document.querySelector('meta[name="description"]'); if (meta) meta.content = d.tagline;
  $("lang").textContent = u.switchLang; $("lang").setAttribute("aria-label", u.switchLabel); $("lang").title = u.switchLabel;
  $("theme").textContent = u.theme;
  $("name").textContent = d.name;
  $("role").textContent = d.role;
  $("location").textContent = d.location;
  $("tagline").textContent = d.tagline;
  $("footer").textContent = "© " + new Date().getFullYear() + " " + d.name;

  var cta = [];
  if (d.links.linkedin) cta.push('<a class="btn primary" href="' + d.links.linkedin + '" rel="noopener">LinkedIn</a>');
  if (d.links.github) cta.push('<a class="btn" href="' + d.links.github + '" rel="noopener">GitHub</a>');
  if (d.links.email) cta.push('<a class="btn" href="mailto:' + d.links.email + '">Email</a>');
  cta.push('<button class="btn" onclick="window.print()">' + esc(u.cv) + '</button>');
  $("cta").innerHTML = cta.join("");

  $("stats").innerHTML = (d.stats || []).map(function (s) {
    return '<div><b>' + esc(s.value) + '</b><span>' + esc(s.label) + '</span></div>';
  }).join("");

  var sections = [];
  if (has(d.about)) sections.push(["about", u.about, d.about.map(function (p) { return "<p>" + esc(p) + "</p>"; }).join("")]);
  if (has(d.skills)) sections.push(["skills", u.skills, '<div class="skills">' + Object.keys(d.skills).map(function (k) {
    return '<div><h3>' + esc(k) + '</h3><ul class="chips">' + d.skills[k].map(function (s) { return "<li>" + esc(s) + "</li>"; }).join("") + "</ul></div>";
  }).join("") + "</div>"]);
  if (has(d.experience)) sections.push(["experience", u.experience, '<ol class="timeline">' + d.experience.map(function (e) {
    var b = (e.bullets || []).map(function (x) { return "<li>" + esc(x) + "</li>"; }).join("");
    var period = /^TODO/.test(e.period || "") ? "" : e.period || "";
    return '<li><div class="when">' + esc(period) + '</div><div><h3>' + esc(e.title) + ' · ' + esc(e.company) + '</h3>' + (e.summary ? "<p>" + esc(e.summary) + "</p>" : "") + (b ? "<ul>" + b + "</ul>" : "") + "</div></li>";
  }).join("") + "</ol>"]);
  if (has(d.earlier)) sections.push(["earlier", u.earlier, '<ol class="timeline">' + d.earlier.map(function (e) {
    return '<li><div class="when">' + esc(e.period) + '</div><div>' + esc(e.text) + "</div></li>";
  }).join("") + "</ol>"]);
  if (has(d.projects)) sections.push(["projects", u.projects, '<div class="projects">' + d.projects.map(function (p, i) {
    var media = (p.media || []).map(function (m) {
      return '<button class="shot" data-src="' + m.src + '" data-alt="' + esc(m.alt) + '"><img loading="lazy" src="' + m.src + '" alt="' + esc(m.alt) + '"></button>';
    }).join("");
    var actions = (p.demo ? '<button class="btn primary" data-demo="' + i + '">▶ ' + esc(p.demo.label) + '</button> <a class="btn" href="' + p.demo.src + '" target="_blank" rel="noopener">' + esc(u.fullscreen) + '</a> ' : "") +
      (p.url ? '<a class="btn primary" href="' + p.url + '" rel="noopener">' + esc(u.demo) + '</a> ' : "") +
      (p.apk ? '<a class="btn" href="' + p.apk + '" rel="noopener">' + esc(u.apk) + '</a> ' : "") +
      (p.repo ? '<a class="btn" href="' + p.repo + '" rel="noopener">' + esc(u.code) + '</a>' : "");
    return '<article class="project' + (p.featured ? " featured" : "") + '"><div class="ptext"><p class="kind">' + esc(p.kind || "") + '</p><h3>' + esc(p.name) + '</h3><p>' + esc(p.description) + '</p>' +
      (p.highlights ? "<ul>" + p.highlights.map(function (h) { return "<li>" + esc(h) + "</li>"; }).join("") + "</ul>" : "") +
      '<ul class="chips">' + (p.stack || []).map(function (x) { return "<li>" + esc(x) + "</li>"; }).join("") + "</ul>" +
      (actions ? '<div class="actions">' + actions + "</div>" : "") + (p.note ? '<p class="note">' + esc(p.note) + "</p>" : "") + "</div>" +
      (media ? '<div class="shots">' + media + "</div>" : "") + '<div class="demo-slot" id="demo-' + i + '"></div></article>';
  }).join("") + "</div>"]);
  if (has(d.education)) sections.push(["education", u.education, "<ul class=\"plain\">" + d.education.map(function (e) {
    return "<li><b>" + esc(e.degree) + "</b> — " + esc(e.school) + " <span>" + esc(e.period || "") + "</span></li>";
  }).join("") + "</ul>"]);
  if (has(d.certifications)) sections.push(["certifications", u.certifications, "<ul class=\"plain\">" + d.certifications.map(function (c) { return "<li>" + esc(typeof c === "string" ? c : c.name) + "</li>"; }).join("") + "</ul>"]);
  if (has(d.languages)) sections.push(["languages", u.languages, "<ul class=\"plain\">" + d.languages.map(function (l) { return "<li><b>" + esc(l.name) + "</b> — " + esc(l.level) + "</li>"; }).join("") + "</ul>"]);

  $("sections").innerHTML = sections.map(function (s) {
    return '<section id="' + s[0] + '" class="reveal"><h2>' + s[1] + "</h2>" + s[2] + "</section>";
  }).join("");
  $("nav-links").innerHTML = sections.map(function (s) { return '<a href="#' + s[0] + '">' + s[1] + "</a>"; }).join("");

  observe();
  }

  function observe() {
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
    }, { threshold: 0.08 });
    document.querySelectorAll(".reveal").forEach(function (el) { io.observe(el); });
  } else document.querySelectorAll(".reveal").forEach(function (el) { el.classList.add("in"); });
  }

  lang = pickLang();
  render();
  $("lang").addEventListener("click", function () {
    lang = lang === "en" ? "it" : "en";
    try { localStorage.setItem("lang", lang); } catch (e) {}
    render();
  });

  document.addEventListener("click", function (e) {
    var shot = e.target.closest && e.target.closest(".shot");
    if (shot) {
      $("lb-img").src = shot.dataset.src; $("lb-img").alt = shot.dataset.alt;
      if ($("lb").showModal) $("lb").showModal(); else $("lb").setAttribute("open", "");
      return;
    }
    var demo = e.target.closest && e.target.closest("[data-demo]");
    if (demo) {
      var i = demo.dataset.demo, slot = $("demo-" + i), p = d.projects[i];
      if (slot.firstChild) { slot.innerHTML = ""; demo.textContent = "▶ " + p.demo.label; return; }
      slot.innerHTML = '<div class="phone"><iframe src="' + p.demo.src + '" title="' + esc(p.name) + '" allow="fullscreen"></iframe></div>';
      demo.textContent = u.closeDemo; slot.scrollIntoView({ behavior: "smooth", block: "center" });
    }
    if (e.target.id === "lb" || e.target.id === "lb-img") $("lb").close ? $("lb").close() : $("lb").removeAttribute("open");
  });

  var root = document.documentElement;
  try { var t = localStorage.getItem("theme"); if (t) root.dataset.theme = t; } catch (e) {}
  $("theme").addEventListener("click", function () {
    var dark = root.dataset.theme ? root.dataset.theme === "dark" : matchMedia("(prefers-color-scheme: dark)").matches;
    root.dataset.theme = dark ? "light" : "dark";
    try { localStorage.setItem("theme", root.dataset.theme); } catch (e) {}
  });
})();
