(function () {
  "use strict";

  var header = document.querySelector(".site-header");
  var nav = document.querySelector(".nav");
  var toggle = document.querySelector(".nav-toggle");
  var track = document.getElementById("galleryTrack");
  var dotsWrap = document.getElementById("galleryDots");
  var lightbox = document.getElementById("lightbox");
  var lightboxImg = document.getElementById("lightboxImg");
  var prevBtn = document.querySelector(".gallery-prev");
  var nextBtn = document.querySelector(".gallery-next");

  /* Sticky header shadow */
  function onScroll() {
    if (!header) return;
    if (window.scrollY > 12) header.classList.add("is-scrolled");
    else header.classList.remove("is-scrolled");
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* Mobile nav */
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!open));
      nav.classList.toggle("is-open", !open);
    });
    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        toggle.setAttribute("aria-expanded", "false");
        nav.classList.remove("is-open");
      });
    });
  }

  /* Scroll reveal */
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!reduceMotion) {
    var revealEls = document.querySelectorAll(".reveal");
    if (revealEls.length && "IntersectionObserver" in window) {
      var io = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (e) {
            if (e.isIntersecting) {
              e.target.classList.add("is-visible");
              io.unobserve(e.target);
            }
          });
        },
        { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
      );
      revealEls.forEach(function (el) {
        io.observe(el);
      });
    } else {
      revealEls.forEach(function (el) {
        el.classList.add("is-visible");
      });
    }
  } else {
    document.querySelectorAll(".reveal").forEach(function (el) {
      el.classList.add("is-visible");
    });
  }

  /* Gallery: dots + nav buttons */
  var items = track ? track.querySelectorAll(".gallery-item") : [];

  function scrollGalleryBy(dir) {
    if (!track) return;
    var amount = Math.min(track.clientWidth * 0.85, 340);
    track.scrollBy({ left: dir * amount, behavior: "smooth" });
  }

  if (prevBtn) prevBtn.addEventListener("click", function () {
    scrollGalleryBy(-1);
  });
  if (nextBtn) nextBtn.addEventListener("click", function () {
    scrollGalleryBy(1);
  });

  function buildDots() {
    if (!dotsWrap || !track || !items.length) return;
    dotsWrap.innerHTML = "";
    items.forEach(function (_, i) {
      var b = document.createElement("button");
      b.type = "button";
      b.className = "gallery-dot" + (i === 0 ? " is-active" : "");
      b.setAttribute("aria-label", "Bild " + (i + 1));
      b.addEventListener("click", function () {
        items[i].scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
      });
      dotsWrap.appendChild(b);
    });
  }

  function syncDots() {
    if (!track || !dotsWrap) return;
    var dots = dotsWrap.querySelectorAll(".gallery-dot");
    if (!dots.length) return;
    var scrollLeft = track.scrollLeft;
    var maxScroll = track.scrollWidth - track.clientWidth;
    var approx = maxScroll < 2 ? 0 : scrollLeft / maxScroll;
    var idx = Math.round(approx * (items.length - 1));
    idx = Math.max(0, Math.min(items.length - 1, idx));
    dots.forEach(function (d, i) {
      d.classList.toggle("is-active", i === idx);
    });
  }

  buildDots();
  if (track) {
    var scrollTimer;
    track.addEventListener("scroll", function () {
      clearTimeout(scrollTimer);
      scrollTimer = setTimeout(syncDots, 80);
    }, { passive: true });
    window.addEventListener("resize", syncDots, { passive: true });
    syncDots();
  }

  /* Lightbox */
  function openLightbox(src, alt) {
    if (!lightbox || !lightboxImg) return;
    lightboxImg.src = src;
    lightboxImg.alt = alt || "";
    lightbox.hidden = false;
    document.body.style.overflow = "hidden";
  }

  function closeLightbox() {
    if (!lightbox) return;
    lightbox.hidden = true;
    lightboxImg.src = "";
    document.body.style.overflow = "";
  }

  items.forEach(function (btn) {
    btn.addEventListener("click", function () {
      openLightbox(btn.getAttribute("data-full"), btn.getAttribute("data-alt"));
    });
  });

  if (lightbox) {
    lightbox.addEventListener("click", function (e) {
      if (e.target === lightbox || e.target.classList.contains("lightbox-close")) closeLightbox();
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && !lightbox.hidden) closeLightbox();
    });
  }

  /* Subtle parallax on hero background */
  var heroBg = document.querySelector(".hero-bg");
  if (heroBg && !reduceMotion) {
    window.addEventListener(
      "scroll",
      function () {
        var hero = document.querySelector(".hero");
        if (!hero) return;
        var rect = hero.getBoundingClientRect();
        if (rect.bottom < 0 || rect.top > window.innerHeight) return;
        var p = Math.max(0, Math.min(1, 1 - rect.top / (window.innerHeight + rect.height)));
        heroBg.style.transform = "translate3d(0, " + (p * 18).toFixed(1) + "px, 0)";
      },
      { passive: true }
    );
  }
})();
