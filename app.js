(function () {
  var d = window.PORTFOLIO;
  var $ = function (id) { return document.getElementById(id); };
  var esc = function (s) { var e = document.createElement("div"); e.textContent = s; return e.innerHTML; };
  var has = function (a) { return Array.isArray(a) ? a.length > 0 : a && Object.keys(a).length > 0; };

  document.title = d.name + " — " + d.role;
  $("name").textContent = d.name;
  $("role").textContent = d.role;
  $("location").textContent = d.location;
  $("tagline").textContent = d.tagline;
  $("footer").textContent = "© " + new Date().getFullYear() + " " + d.name;

  var cta = [];
  if (d.links.linkedin) cta.push('<a class="btn primary" href="' + d.links.linkedin + '" rel="noopener">LinkedIn</a>');
  if (d.links.github) cta.push('<a class="btn" href="' + d.links.github + '" rel="noopener">GitHub</a>');
  if (d.links.email) cta.push('<a class="btn" href="mailto:' + d.links.email + '">Email</a>');
  cta.push('<button class="btn" onclick="window.print()">Scarica CV (PDF)</button>');
  $("cta").innerHTML = cta.join("");

  $("stats").innerHTML = (d.stats || []).map(function (s) {
    return '<div><b>' + esc(s.value) + '</b><span>' + esc(s.label) + '</span></div>';
  }).join("");

  var sections = [];
  if (has(d.about)) sections.push(["about", "Chi sono", d.about.map(function (p) { return "<p>" + esc(p) + "</p>"; }).join("")]);
  if (has(d.skills)) sections.push(["skills", "Competenze", '<div class="skills">' + Object.keys(d.skills).map(function (k) {
    return '<div><h3>' + esc(k) + '</h3><ul class="chips">' + d.skills[k].map(function (s) { return "<li>" + esc(s) + "</li>"; }).join("") + "</ul></div>";
  }).join("") + "</div>"]);
  if (has(d.experience)) sections.push(["experience", "Esperienza", '<ol class="timeline">' + d.experience.map(function (e) {
    var b = (e.bullets || []).map(function (x) { return "<li>" + esc(x) + "</li>"; }).join("");
    var period = /^TODO/.test(e.period || "") ? "" : e.period || "";
    return '<li><div class="when">' + esc(period) + '</div><div><h3>' + esc(e.title) + ' · ' + esc(e.company) + '</h3>' + (e.summary ? "<p>" + esc(e.summary) + "</p>" : "") + (b ? "<ul>" + b + "</ul>" : "") + "</div></li>";
  }).join("") + "</ol>"]);
  if (has(d.earlier)) sections.push(["earlier", "Percorso precedente", '<ol class="timeline">' + d.earlier.map(function (e) {
    return '<li><div class="when">' + esc(e.period) + '</div><div>' + esc(e.text) + "</div></li>";
  }).join("") + "</ol>"]);
  if (has(d.projects)) sections.push(["projects", "Progetti", '<div class="cards">' + d.projects.map(function (p) {
    var links = (p.url ? '<a href="' + p.url + '" rel="noopener">Demo</a> ' : "") + (p.repo ? '<a href="' + p.repo + '" rel="noopener">Codice</a>' : "");
    return '<article class="card"><h3>' + esc(p.name) + '</h3><p>' + esc(p.description) + '</p><ul class="chips">' +
      (p.stack || []).map(function (s) { return "<li>" + esc(s) + "</li>"; }).join("") + "</ul><div class=\"links\">" + links + "</div></article>";
  }).join("") + "</div>"]);
  if (has(d.education)) sections.push(["education", "Formazione", "<ul class=\"plain\">" + d.education.map(function (e) {
    return "<li><b>" + esc(e.degree) + "</b> — " + esc(e.school) + " <span>" + esc(e.period || "") + "</span></li>";
  }).join("") + "</ul>"]);
  if (has(d.certifications)) sections.push(["certifications", "Certificazioni", "<ul class=\"plain\">" + d.certifications.map(function (c) { return "<li>" + esc(typeof c === "string" ? c : c.name) + "</li>"; }).join("") + "</ul>"]);
  if (has(d.languages)) sections.push(["languages", "Lingue", "<ul class=\"plain\">" + d.languages.map(function (l) { return "<li><b>" + esc(l.name) + "</b> — " + esc(l.level) + "</li>"; }).join("") + "</ul>"]);

  $("sections").innerHTML = sections.map(function (s) {
    return '<section id="' + s[0] + '" class="reveal"><h2>' + s[1] + "</h2>" + s[2] + "</section>";
  }).join("");
  $("nav-links").innerHTML = sections.map(function (s) { return '<a href="#' + s[0] + '">' + s[1] + "</a>"; }).join("");

  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
    }, { threshold: 0.08 });
    document.querySelectorAll(".reveal").forEach(function (el) { io.observe(el); });
  } else document.querySelectorAll(".reveal").forEach(function (el) { el.classList.add("in"); });

  var root = document.documentElement;
  try { var t = localStorage.getItem("theme"); if (t) root.dataset.theme = t; } catch (e) {}
  $("theme").addEventListener("click", function () {
    var dark = root.dataset.theme ? root.dataset.theme === "dark" : matchMedia("(prefers-color-scheme: dark)").matches;
    root.dataset.theme = dark ? "light" : "dark";
    try { localStorage.setItem("theme", root.dataset.theme); } catch (e) {}
  });
})();
