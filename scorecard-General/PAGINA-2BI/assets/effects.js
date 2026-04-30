(function () {
  "use strict";

  var reducedMotion = false;
  try { reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches; } catch (_) {}

  // ── LOADER ──
  function dismissLoader() {
    var loader = document.getElementById("loader");
    if (!loader) return;
    loader.classList.add("gone");
    setTimeout(function () { loader.style.display = "none"; }, 800);
  }
  if (document.readyState === "complete") { setTimeout(dismissLoader, 400); }
  else { window.addEventListener("load", function () { setTimeout(dismissLoader, 600); }); }

  // ── SCROLL PROGRESS ──
  var progBar = document.querySelector(".scroll-prog");
  function updateProgress() {
    if (!progBar) return;
    var h = document.documentElement.scrollHeight - window.innerHeight;
    progBar.style.width = h > 0 ? ((window.scrollY / h) * 100) + "%" : "0";
  }

  // ── CUSTOM CURSOR ──
  var cur = document.getElementById("cur");
  var ring = document.getElementById("cur-ring");
  var mx = 0, my = 0, cx = 0, cy = 0;
  if (cur && ring && !reducedMotion && window.innerWidth > 980) {
    document.addEventListener("mousemove", function (e) {
      mx = e.clientX; my = e.clientY;
      cur.style.left = mx + "px"; cur.style.top = my + "px";
    });
    (function animRing() {
      cx += (mx - cx) * 0.12; cy += (my - cy) * 0.12;
      ring.style.left = cx + "px"; ring.style.top = cy + "px";
      requestAnimationFrame(animRing);
    })();
    document.addEventListener("mousedown", function () { ring.classList.add("click"); });
    document.addEventListener("mouseup", function () { ring.classList.remove("click"); });

    // Hover targets
    document.querySelectorAll("a, button, .sv-card, .dash-kpi, .hv-card, .res-box, .sd-dot").forEach(function (el) {
      el.addEventListener("mouseenter", function () { ring.classList.add("big"); });
      el.addEventListener("mouseleave", function () { ring.classList.remove("big"); });
    });

    // Cursor trail
    var trailThrottle = 0;
    document.addEventListener("mousemove", function (e) {
      if (Date.now() - trailThrottle < 50) return;
      trailThrottle = Date.now();
      var dot = document.createElement("div");
      dot.className = "trail";
      dot.style.left = e.clientX + "px";
      dot.style.top = e.clientY + "px";
      document.body.appendChild(dot);
      setTimeout(function () { dot.remove(); }, 700);
    });
  }

  // ── CARD HOVER GRADIENT ──
  document.querySelectorAll(".sv-card").forEach(function (card) {
    card.addEventListener("mousemove", function (e) {
      var r = card.getBoundingClientRect();
      card.style.setProperty("--rx", ((e.clientX - r.left) / r.width * 100) + "%");
      card.style.setProperty("--ry", ((e.clientY - r.top) / r.height * 100) + "%");
    });
  });

  // ── SCROLL REVEAL ──
  function revealElements() {
    var els = document.querySelectorAll(".fx-reveal:not(.on)");
    els.forEach(function (el) {
      var top = el.getBoundingClientRect().top;
      if (top < window.innerHeight * 0.88) { el.classList.add("on"); }
    });
    // Section tag animation
    document.querySelectorAll(".sec-tag:not(.on)").forEach(function (t) {
      if (t.getBoundingClientRect().top < window.innerHeight * 0.88) t.classList.add("on");
    });
  }

  // ── COUNTER ANIMATION ──
  var countersAnimated = new Set();
  function animateCounters() {
    document.querySelectorAll(".counter").forEach(function (el) {
      if (countersAnimated.has(el)) return;
      if (el.getBoundingClientRect().top > window.innerHeight) return;
      countersAnimated.add(el);
      var target = parseInt(el.getAttribute("data-target"), 10);
      var duration = 1800;
      var start = performance.now();
      function tick(now) {
        var progress = Math.min((now - start) / duration, 1);
        var eased = 1 - Math.pow(1 - progress, 3);
        el.textContent = Math.round(target * eased);
        if (progress < 1) requestAnimationFrame(tick);
      }
      requestAnimationFrame(tick);
    });
  }

  // ── SECTION DOTS ──
  var dots = document.querySelector(".section-dots");
  var sectionIds = ["hero-home", "servicios", "dashboard", "resultados", "cta-final"];
  function updateDots() {
    if (!dots) return;
    if (window.scrollY > 200) { dots.classList.add("show"); } else { dots.classList.remove("show"); }
    var current = "";
    sectionIds.forEach(function (id) {
      var sec = document.getElementById(id);
      if (sec && sec.getBoundingClientRect().top < window.innerHeight * 0.5) current = id;
    });
    dots.querySelectorAll(".sd-dot").forEach(function (d) {
      d.classList.toggle("active", d.getAttribute("data-section") === current);
    });
  }
  if (dots) {
    dots.querySelectorAll(".sd-dot").forEach(function (d) {
      d.addEventListener("click", function () {
        var sec = document.getElementById(d.getAttribute("data-section"));
        if (sec) sec.scrollIntoView({ behavior: "smooth" });
      });
    });
  }

  // ── BACK TO TOP ──
  var backTop = document.getElementById("backTop");
  function updateBackTop() {
    if (!backTop) return;
    backTop.classList.toggle("show", window.scrollY > 600);
  }
  if (backTop) {
    backTop.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // ── SCROLL HANDLER ──
  var scrollTicking = false;
  window.addEventListener("scroll", function () {
    if (!scrollTicking) {
      requestAnimationFrame(function () {
        updateProgress();
        revealElements();
        animateCounters();
        updateDots();
        updateBackTop();
        scrollTicking = false;
      });
      scrollTicking = true;
    }
  }, { passive: true });

  // Initial calls
  setTimeout(function () { revealElements(); animateCounters(); updateDots(); updateBackTop(); }, 100);

  // ── LIGHTNING BOLTS ──
  if (!reducedMotion) {
    var stage = document.querySelector(".lightning-stage");
    function createBolt() {
      if (!stage) return;
      var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      svg.setAttribute("class", "bolt-svg");
      svg.setAttribute("width", "60");
      svg.setAttribute("height", "120");
      svg.setAttribute("viewBox", "0 0 60 120");
      var path = document.createElementNS("http://www.w3.org/2000/svg", "path");
      var pts = "M30,0 ";
      var y = 0;
      while (y < 110) {
        y += 10 + Math.random() * 15;
        var x = 15 + Math.random() * 30;
        pts += "L" + x + "," + Math.min(y, 120) + " ";
      }
      path.setAttribute("d", pts);
      svg.appendChild(path);
      svg.style.left = (Math.random() * 100) + "%";
      svg.style.top = (Math.random() * 60) + "%";
      svg.style.width = (40 + Math.random() * 60) + "px";
      stage.appendChild(svg);
      requestAnimationFrame(function () { svg.classList.add("flash"); });
      setTimeout(function () { svg.remove(); }, 600);
    }
    setInterval(function () {
      if (Math.random() < 0.3) createBolt();
    }, 4000);
  }

  // ── LIVE TICKER ──
  var ticker = document.querySelector(".live-ticker");
  var tickerText = document.querySelector(".lt-text");
  if (ticker && tickerText) {
    var tickerMsgs = [
      "<b>Dashboard ejecutivo</b> actualizado hace 3 min",
      "<b>n8n workflow</b> — 847 ejecuciones hoy",
      "<b>Bot WhatsApp</b> — 23 conversaciones activas",
      "<b>IoT sensor</b> Planta 2 — temp: 22.4°C",
      "<b>Power BI</b> refresco automático OK",
      "<b>Claude AI</b> — 156 consultas resueltas hoy",
      "<b>API Microsip</b> — sync cada 15 min",
      "<b>Nuevo proyecto</b> onboarding industria alimenticia"
    ];
    var tickerIdx = 0;
    function showTicker() {
      tickerText.innerHTML = tickerMsgs[tickerIdx];
      ticker.classList.add("on");
      tickerIdx = (tickerIdx + 1) % tickerMsgs.length;
      setTimeout(function () { ticker.classList.remove("on"); }, 5000);
    }
    setTimeout(showTicker, 3000);
    setInterval(showTicker, 8000);
  }

  // ── MAGNETIC BUTTONS ──
  if (!reducedMotion && window.innerWidth > 980) {
    document.querySelectorAll(".btn--magnetic").forEach(function (btn) {
      btn.addEventListener("mousemove", function (e) {
        var r = btn.getBoundingClientRect();
        var x = ((e.clientX - r.left) / r.width - 0.5) * 2;
        var y = ((e.clientY - r.top) / r.height - 0.5) * 2;
        btn.style.transform = "translate(" + (x * 8).toFixed(1) + "px," + (y * 6).toFixed(1) + "px)";
      });
      btn.addEventListener("mouseleave", function () {
        btn.style.transform = "";
      });
    });
  }

  // ── DASHBOARD BAR ANIMATION ──
  var dashStage = document.querySelector(".dash-stage");
  if (dashStage) {
    var dashObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          dashStage.querySelectorAll(".bar").forEach(function (bar, i) {
            bar.style.animationDelay = (i * 0.08) + "s";
          });
          dashObserver.disconnect();
        }
      });
    }, { threshold: 0.2 });
    dashObserver.observe(dashStage);
  }

  // ── HERO PANEL TILT ──
  if (!reducedMotion && window.innerWidth > 980) {
    var panel = document.querySelector(".hero-visual-scene");
    if (panel) {
      panel.addEventListener("mousemove", function (e) {
        var r = panel.getBoundingClientRect();
        var x = ((e.clientX - r.left) / r.width - 0.5) * 8;
        var y = ((e.clientY - r.top) / r.height - 0.5) * 8;
        panel.style.transform = "perspective(1200px) rotateY(" + x.toFixed(1) + "deg) rotateX(" + (-y).toFixed(1) + "deg)";
      });
      panel.addEventListener("mouseleave", function () {
        panel.style.transform = "";
      });
    }
  }

  // ── EXTERNAL IMAGE FALLBACK ──
  document.querySelectorAll(".js-ext-img").forEach(function (img) {
    img.referrerPolicy = "no-referrer";
    img.addEventListener("error", function () {
      var railItem = img.closest(".photo-rail__item");
      if (railItem && railItem.parentNode) {
        railItem.parentNode.removeChild(railItem);
      }
    });
  });

})();
