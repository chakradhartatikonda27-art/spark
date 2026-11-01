/**
 * SPARK Beauty Salon — Interactive Application Logic
 * Modular, performant, accessible vanilla ES6+
 */

(function () {
  "use strict";

  // ========================================================================
  // Data Definitions
  // ========================================================================

  const HERO_IMAGES = [
    {
      src: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1200&q=80",
      alt: "SPARK Salon Luxury Ambience",
      tag: "Main Lounge",
    },
    {
      src: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1200&q=80",
      alt: "Master Hair Styling Station",
      tag: "Hair Studio",
    },
    {
      src: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1200&q=80",
      alt: "Clinical Aesthetic Facial Suite",
      tag: "Skin Clinic",
    },
    {
      src: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=1200&q=80",
      alt: "Gentlemen's Executive Grooming",
      tag: "Men's Barber",
    },
  ];

  const MARQUEE_ITEMS = [
    "HAIR COUTURE",
    "ADVANCED SKINCARE",
    "L'ORÉAL PROFESSIONAL",
    "BRIDAL & EDITORIAL",
    "EXECUTIVE GROOMING",
    "BALAYAGE ARTISTRY",
    "KERATIN SMOOTHING",
    "ORGANIC SPA FACIALS",
  ];

  const SERVICES = [
    {
      id: "hair-styling",
      title: "Hair Styling & Cuts",
      desc: "Precision haircuts, custom blowouts, and signature texturizing designed for your facial contours.",
      icon: "i-scissors",
      image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80",
      category: "hair",
    },
    {
      id: "hair-coloring",
      title: "Color & Balayage",
      desc: "Dimensional balayage, French highlights, root melts, and gloss treatments with bond-repair infusion.",
      icon: "i-sparkle",
      image: "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&w=800&q=80",
      category: "hair",
    },
    {
      id: "skin-facials",
      title: "Aesthetic Skin & Facials",
      desc: "Hydrating medi-facials, oxygen infusions, and Korean glass-skin rejuvenation therapies.",
      icon: "i-drop",
      image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80",
      category: "skin",
    },
    {
      id: "hair-treatments",
      title: "Keratin & Botoplex",
      desc: "Intense moisture therapies, deep collagen botoplex, and frizz-free smoothing treatments.",
      icon: "i-crown",
      image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=800&q=80",
      category: "hair",
    },
    {
      id: "grooming",
      title: "Men's Grooming",
      desc: "Razor fade styling, hot towel beard sculpting, charcoal scalp detox, and skin energizers.",
      icon: "i-user",
      image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=800&q=80",
      category: "men",
    },
    {
      id: "bridal-makeup",
      title: "Bridal & Glamour",
      desc: "HD airbrush bridal looks, cocktail event glam, saree draping, and pre-wedding ritual packages.",
      icon: "i-heart",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=800&q=80",
      category: "bridal",
    },
  ];

  const MENU_CATEGORIES = [
    {
      id: "hair",
      label: "Hair & Styling",
      items: [
        { name: "Couture Precision Haircut & Styling", desc: "Consultation, bespoke cut, wash & blowdry finish", price: "₹850" },
        { name: "Signature Blowout & Thermal Waves", desc: "Volumizing wash, heat defense & editorial finish", price: "₹650" },
        { name: "French Balayage & Tonal Gloss", desc: "Freehand hand-painted lightening & bond restructuring", price: "₹3,800+" },
        { name: "Global Color & Ammonia-Free Gloss", desc: "Seamless root-to-end tone coverage with L'Oréal Inoa", price: "₹2,600+" },
        { name: "Keratin Smooth Therapy", desc: "Long-lasting formaldehyde-free anti-frizz discipline", price: "₹4,500+" },
        { name: "Botoplex Collagen Deep Reconstruction", desc: "Multi-peptide intensive restructuring for damaged fibers", price: "₹3,900+" },
      ],
    },
    {
      id: "skin",
      label: "Skin & Facials",
      items: [
        { name: "Glass Glow Oxygenating Medi-Facial", desc: "Deep ultrasonic pore purification and HA micro-infusion", price: "₹2,400" },
        { name: "Collagen Radiance Firming Ritual", desc: "Lymphatic drainage massage with gold peptide sheet mask", price: "₹3,200" },
        { name: "Detox Charcoal & Salicylic Pore Cleanse", desc: "Targeted T-zone unclogging and calming iced rose globes", price: "₹1,800" },
        { name: "Back Radiance & Exfoliating Polishing", desc: "Micro-buffing walnut exfoliation and restorative serum", price: "₹2,100" },
      ],
    },
    {
      id: "men",
      label: "Men's Grooming",
      items: [
        { name: "Master Barber Fade & Wash", desc: "Skin taper or textured crop with peppermint rinse", price: "₹450" },
        { name: "Hot Towel Beard Crafting & Oil Press", desc: "Precision razor edges, aromatic compress & growth elixir", price: "₹350" },
        { name: "Executive Revitalizing Scalp Detox", desc: "Tea tree scalp stimulation and neck tension release", price: "₹800" },
        { name: "Gentleman's Charcoal Express Facial", desc: "Instantly recharges dull, tired and sun-exposed skin", price: "₹1,200" },
      ],
    },
    {
      id: "bridal",
      label: "Bridal & Events",
      items: [
        { name: "Signature HD Bridal Airbrush Glamour", desc: "Waterproof finish, contouring, lash set & accessories", price: "₹12,000+" },
        { name: "Pre-Bridal Radiance Glow Ceremony", desc: "Body polish, brightening facial, manicure & pedicures", price: "₹8,500" },
        { name: "Cocktail / Reception Red Carpet Makeup", desc: "Sculpted eye glam, long-wear matte or dewy finish", price: "₹4,500" },
        { name: "Designer Saree Draping & Hair Updo", desc: "Stylized pleats, ironed borders & floral pin placement", price: "₹2,000" },
      ],
    },
  ];

  const STYLISTS = [
    {
      name: "Aarav Sharma",
      role: "Creative Hair Director",
      exp: "12",
      specialties: ["Balayage", "Precision Fades", "Keratin"],
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Priya Varma",
      role: "Lead Skin & Aesthetician",
      exp: "9",
      specialties: ["Hydra Medi-Facials", "Chemical Peels", "Lymphatic"],
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Karan Singhania",
      role: "Master Barber",
      exp: "8",
      specialties: ["Beard Sculpting", "Skin Taper", "Scalp Care"],
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Ananya Roy",
      role: "Bridal Artistry Lead",
      exp: "10",
      specialties: ["Airbrush HD", "Editorial Styling", "Couture Updos"],
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80",
    },
  ];

  const GALLERY_ITEMS = [
    {
      id: "gal-1",
      title: "Dimensional Hazelnut Balayage",
      category: "Hair Transformation",
      src: "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: "gal-2",
      title: "Royal HD Bridal Artistry",
      category: "Bridal & Glamour",
      src: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: "gal-3",
      title: "Precision Razor Taper & Sculpt",
      category: "Gentlemen's Grooming",
      src: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: "gal-4",
      title: "Radiant Glass-Skin Rejuvenation",
      category: "Aesthetic Skincare",
      src: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: "gal-5",
      title: "Lustrous Botoplex Silk Transformation",
      category: "Texture & Smooth",
      src: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: "gal-6",
      title: "Executive Lounge Ambience",
      category: "Salon Experience",
      src: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=900&q=80",
    },
  ];

  // ========================================================================
  // DOM Elements
  // ========================================================================
  const nav = document.getElementById("nav");
  const burger = document.getElementById("burger");
  const menu = document.getElementById("menu");
  const heroImg = document.getElementById("hero-img");
  const heroBlur = document.getElementById("hero-blur");
  const thumbsContainer = document.getElementById("thumbs");
  const marqueeContainer = document.getElementById("mq");
  const cardsContainer = document.getElementById("cards") || document.getElementById("serv-cards");
  const tabsContainer = document.getElementById("tabs") || document.getElementById("serv-tabs");
  const menuWrap = document.getElementById("menu-wrap");
  const teamContainer = document.getElementById("team") || document.getElementById("team-grid");
  const galleryContainer = document.getElementById("gal") || document.getElementById("gal-grid");
  const lightboxDialog = document.getElementById("lightbox");
  const lbImg = document.getElementById("lb-img");
  const lbVideo = document.getElementById("lb-video");
  const lbTitle = document.getElementById("lb-title");
  const lbCat = document.getElementById("lb-cat");
  const lbClose = document.getElementById("lb-close");
  const lbPrev = document.getElementById("lb-prev");
  const lbNext = document.getElementById("lb-next");
  const bookingForm = document.getElementById("booking-form") || document.getElementById("book-form");
  const bookingResult = document.getElementById("booking-result") || document.getElementById("book-res");
  const bookingAgain = document.getElementById("booking-again") || document.getElementById("b-again");
  const bookingServiceSelect = document.getElementById("b-service");
  const toast = document.getElementById("toast");
  const progressBar = document.getElementById("pg");
  const stickyBar = document.getElementById("sbar");
  const liveStatusDot = document.getElementById("live-dot") || document.querySelector(".co-dot");
  const liveStatusText = document.getElementById("live-status-text") || document.getElementById("co-stat-text");

  let currentGalleryIndex = 0;

  // ========================================================================
  // Initialization
  // ========================================================================

  function init() {
    dismissCurtain();
    setupScrollEffects();
    setupHeroCarousel();
    setupMarquee();
    renderServiceCards();
    renderServiceMenu();
    setupBeforeAfterSliders();
    renderStylists();
    renderGallery();
    setupLightbox();
    setupSpaceVideos();
    setupPortfolio();
    setupOperatingHours();
    setupBookingForm();
    setupMobileMenu();
    setupNewsletter();
    observeScrollReveal();
  }

  function dismissCurtain() {
    const cur = document.getElementById("cur");
    if (!cur) return;
    const hide = () => cur.classList.add("go");
    if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      hide();
    } else {
      setTimeout(hide, 450);
    }
    cur.addEventListener("click", hide);
  }

  // ========================================================================
  // Scroll Effects & Progress Bar
  // ========================================================================

  function setupScrollEffects() {
    window.addEventListener("scroll", () => {
      const scrollY = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? scrollY / docHeight : 0;

      // Header solid state
      if (nav) {
        const isSubpage = !!document.querySelector(".page-banner");
        if (scrollY > 50 || isSubpage) {
          nav.classList.add("solid");
        } else {
          nav.classList.remove("solid");
        }
      }

      // Top progress bar
      if (progressBar) {
        progressBar.style.transform = `scaleX(${progress})`;
      }

      // Mobile bottom bar reveal
      if (stickyBar) {
        if (scrollY > 300) {
          stickyBar.classList.add("show");
        } else {
          stickyBar.classList.remove("show");
        }
      }
    }, { passive: true });
  }

  // ========================================================================
  // Hero Carousel
  // ========================================================================

  function setupHeroCarousel() {
    if (!thumbsContainer || !heroImg) return;

    thumbsContainer.innerHTML = "";
    HERO_IMAGES.forEach((item, index) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = index === 0 ? "on" : "";
      btn.setAttribute("aria-label", `Show ${item.tag}`);
      btn.innerHTML = `<img src="${item.src}" alt="${item.alt}" loading="lazy" />`;
      btn.addEventListener("click", () => {
        setHeroImage(index);
      });
      thumbsContainer.appendChild(btn);
    });

    // Auto rotate every 6 seconds
    let currentHero = 0;
    setInterval(() => {
      currentHero = (currentHero + 1) % HERO_IMAGES.length;
      setHeroImage(currentHero);
    }, 6000);
  }

  function setHeroImage(index) {
    const item = HERO_IMAGES[index];
    if (!item) return;

    heroImg.style.backgroundImage = `url('${item.src}')`;
    if (heroBlur) {
      heroBlur.style.backgroundImage = `url('${item.src}')`;
    }

    const buttons = thumbsContainer.querySelectorAll("button");
    buttons.forEach((btn, i) => {
      btn.classList.toggle("on", i === index);
    });
  }

  // ========================================================================
  // Ticker Marquee
  // ========================================================================

  function setupMarquee() {
    if (!marqueeContainer) return;

    const itemsHTML = MARQUEE_ITEMS.map((text) => `<span>${text}</span>`).join("");
    marqueeContainer.innerHTML = `<div>${itemsHTML}${itemsHTML}</div>`;
  }

  // ========================================================================
  // Service Cards
  // ========================================================================

  function renderServiceCards() {
    if (!cardsContainer) return;

    cardsContainer.innerHTML = SERVICES.map((s, index) => `
      <article class="card rv" data-d="${(index % 3) + 1}">
        <div class="ph">
          <img src="${s.image}" alt="${s.title}" loading="lazy" />
          <div class="ic" aria-hidden="true">
            <svg><use href="#${s.icon}"/></svg>
          </div>
        </div>
        <div class="in-">
          <h3>${s.title}</h3>
          <p>${s.desc}</p>
          <a href="#book" class="go" data-service="${s.title}">
            Book Service <svg width="12" height="12"><use href="#arr"/></svg>
          </a>
        </div>
      </article>
    `).join("");

    cardsContainer.querySelectorAll(".go").forEach((link) => {
      link.addEventListener("click", (e) => {
        const serviceName = e.currentTarget.getAttribute("data-service");
        prefillBookingService(serviceName);
      });
    });
  }

  // ========================================================================
  // Service Menu & Tabs
  // ========================================================================

  function renderServiceMenu() {
    if (!tabsContainer || !menuWrap) return;

    tabsContainer.innerHTML = MENU_CATEGORIES.map((cat, index) => `
      <button
        type="button"
        role="tab"
        id="tab-${cat.id}"
        aria-controls="panel-${cat.id}"
        aria-selected="${index === 0 ? "true" : "false"}"
        data-cat="${cat.id}"
      >
        ${cat.label}
      </button>
    `).join("");

    menuWrap.innerHTML = MENU_CATEGORIES.map((cat, index) => `
      <div
        class="pm ${index === 0 ? "on" : ""}"
        id="panel-${cat.id}"
        role="tabpanel"
        aria-labelledby="tab-${cat.id}"
      >
        <h4>
          ${cat.label}
          <small>${cat.items.length} Signature Offerings</small>
        </h4>
        <ul>
          ${cat.items.map((item) => `
            <li>
              <div class="n">${item.name}</div>
              <div class="d">${item.desc}</div>
              <div class="p">Starting <b>${item.price}</b></div>
              <a href="#book" data-service="${item.name}">Book</a>
            </li>
          `).join("")}
        </ul>
      </div>
    `).join("");

    // Tab buttons event listeners
    tabsContainer.querySelectorAll("button").forEach((btn) => {
      btn.addEventListener("click", () => {
        const targetCat = btn.getAttribute("data-cat");

        tabsContainer.querySelectorAll("button").forEach((b) => {
          b.setAttribute("aria-selected", b === btn ? "true" : "false");
        });

        menuWrap.querySelectorAll(".pm").forEach((panel) => {
          panel.classList.toggle("on", panel.id === `panel-${targetCat}`);
        });
      });
    });

    menuWrap.querySelectorAll("li a").forEach((bookBtn) => {
      bookBtn.addEventListener("click", (e) => {
        const serviceName = e.currentTarget.getAttribute("data-service");
        prefillBookingService(serviceName);
      });
    });
  }

  // ========================================================================
  // Before / After Transformation Sliders
  // ========================================================================

  function setupBeforeAfterSliders() {
    const sliders = document.querySelectorAll(".ba");
    sliders.forEach((slider) => {
      const input = slider.querySelector("input[type='range']");
      const afterLayer = slider.querySelector(".af") || slider.querySelector(".ba-before");
      const handle = slider.querySelector(".hd") || slider.querySelector(".ba-handle");

      if (!input || !afterLayer || !handle) return;

      const updatePosition = () => {
        const val = input.value;
        afterLayer.style.clipPath = `inset(0 0 0 ${val}%)`;
        handle.style.left = `${val}%`;
      };

      input.addEventListener("input", updatePosition);
      input.addEventListener("change", updatePosition);
      updatePosition();
    });
  }

  // ========================================================================
  // Stylists Team
  // ========================================================================

  function renderStylists() {
    if (!teamContainer) return;

    teamContainer.innerHTML = STYLISTS.map((st, index) => `
      <article class="tm rv" data-d="${(index % 4) + 1}">
        <div class="tp">
          <img src="${st.image}" alt="${st.name}" loading="lazy" />
        </div>
        <div class="tb">
          <h3>${st.name}</h3>
          <div class="rl">${st.role}</div>
          <div class="ex">
            <b>${st.exp}+</b> Years Mastery
          </div>
          <div class="sp">
            ${st.specialties.map((s) => `<span>${s}</span>`).join("")}
          </div>
        </div>
      </article>
    `).join("");
  }

  // ========================================================================
  // Gallery & Native <dialog> Modal Lightbox
  // ========================================================================

  function renderGallery() {
    if (!galleryContainer) return;

    galleryContainer.innerHTML = GALLERY_ITEMS.map((item, index) => `
      <button
        type="button"
        class="rv"
        data-d="${(index % 5) + 1}"
        data-index="${index}"
        aria-label="View ${item.title}"
      >
        <img src="${item.src}" alt="${item.title}" loading="lazy" />
        <div class="v" aria-hidden="true">
          <svg><use href="#i-eye"/></svg>
        </div>
      </button>
    `).join("");

    galleryContainer.querySelectorAll("button").forEach((btn) => {
      btn.addEventListener("click", () => {
        const idx = parseInt(btn.getAttribute("data-index"), 10);
        openLightbox(idx);
      });
    });
  }

  function setupLightbox() {
    if (!lightboxDialog) return;

    // Light-dismiss: click on dialog element outside content closes dialog
    lightboxDialog.addEventListener("click", (e) => {
      if (e.target === lightboxDialog) {
        closeLightbox();
      }
    });

    if (lbClose) {
      lbClose.addEventListener("click", closeLightbox);
    }

    if (lbPrev) {
      lbPrev.addEventListener("click", (e) => {
        e.stopPropagation();
        navigateLightbox(-1);
      });
    }

    if (lbNext) {
      lbNext.addEventListener("click", (e) => {
        e.stopPropagation();
        navigateLightbox(1);
      });
    }

    // Keyboard navigation when open
    window.addEventListener("keydown", (e) => {
      if (!lightboxDialog.open) return;
      if (e.key === "ArrowLeft") {
        navigateLightbox(-1);
      } else if (e.key === "ArrowRight") {
        navigateLightbox(1);
      } else if (e.key === "Escape") {
        closeLightbox();
      }
    });
  }

  function setupSpaceVideos() {
    const spaceCards = document.querySelectorAll(".space-card");
    spaceCards.forEach((card) => {
      card.addEventListener("click", () => {
        const videoSrc = card.getAttribute("data-video");
        const title = card.getAttribute("data-title");

        if (lbImg) lbImg.style.display = "none";
        if (lbVideo) {
          lbVideo.src = videoSrc;
          lbVideo.style.display = "block";
          lbVideo.play().catch(() => {});
        }
        if (lbTitle) lbTitle.textContent = title;
        if (lbCat) lbCat.textContent = "Salon Interior Walkthrough";
        if (lbPrev) lbPrev.style.display = "none";
        if (lbNext) lbNext.style.display = "none";

        lightboxDialog.showModal();
      });
    });
  }

  function setupPortfolio() {
    const filterButtons = document.querySelectorAll(".port-btn");
    const cards = document.querySelectorAll(".port-card");

    if (filterButtons.length && cards.length) {
      filterButtons.forEach((btn) => {
        btn.addEventListener("click", () => {
          filterButtons.forEach((b) => b.classList.remove("active"));
          btn.classList.add("active");
          const filter = btn.getAttribute("data-filter");

          cards.forEach((card) => {
            const cat = card.getAttribute("data-cat");
            if (filter === "all" || cat === filter) {
              card.style.display = "flex";
            } else {
              card.style.display = "none";
            }
          });
        });
      });
    }

    cards.forEach((card) => {
      card.addEventListener("click", () => {
        const img = card.querySelector(".port-img img");
        const title = card.querySelector(".port-meta h4");
        const tag = card.querySelector(".port-tag");

        if (img && lightboxDialog) {
          if (lbVideo) {
            lbVideo.style.display = "none";
            lbVideo.pause();
          }
          if (lbImg) {
            lbImg.src = img.src;
            lbImg.alt = img.alt || "Portfolio image";
            lbImg.style.display = "block";
          }
          if (lbTitle && title) lbTitle.textContent = title.textContent;
          if (lbCat && tag) lbCat.textContent = tag.textContent;
          if (lbPrev) lbPrev.style.display = "none";
          if (lbNext) lbNext.style.display = "none";
          lightboxDialog.showModal();
        }
      });
    });
  }

  function openLightbox(index) {
    if (!lightboxDialog) return;
    currentGalleryIndex = index;

    if (lbVideo) {
      lbVideo.pause();
      lbVideo.src = "";
      lbVideo.style.display = "none";
    }
    if (lbImg) lbImg.style.display = "block";
    if (lbPrev) lbPrev.style.display = "flex";
    if (lbNext) lbNext.style.display = "flex";

    updateLightboxContent();
    lightboxDialog.showModal();
  }

  function closeLightbox() {
    if (lightboxDialog && lightboxDialog.open) {
      if (lbVideo) {
        lbVideo.pause();
        lbVideo.src = "";
      }
      lightboxDialog.close();
    }
  }

  function navigateLightbox(step) {
    currentGalleryIndex = (currentGalleryIndex + step + GALLERY_ITEMS.length) % GALLERY_ITEMS.length;
    updateLightboxContent();
  }

  function updateLightboxContent() {
    const item = GALLERY_ITEMS[currentGalleryIndex];
    if (!item) return;

    if (lbImg) {
      lbImg.src = item.src;
      lbImg.alt = item.title;
    }
    if (lbTitle) lbTitle.textContent = item.title;
    if (lbCat) lbCat.textContent = item.category;
  }

  // ========================================================================
  // Operating Hours (Live Status)
  // ========================================================================

  function setupOperatingHours() {
    if (!liveStatusDot || !liveStatusText) return;

    const now = new Date();
    const day = now.getDay(); // 0 is Sunday, 1 is Monday
    const hour = now.getHours();
    const minute = now.getMinutes();
    const currentTime = hour * 60 + minute;

    let isOpen = false;
    let closingTimeText = "9:00 PM";

    if (day === 1) {
      // Monday: 10:00 AM (600) to 8:00 PM (1200)
      isOpen = currentTime >= 600 && currentTime < 1200;
      closingTimeText = "8:00 PM";
    } else {
      // Tuesday – Sunday: 9:30 AM (570) to 9:00 PM (1260)
      isOpen = currentTime >= 570 && currentTime < 1260;
      closingTimeText = "9:00 PM";
    }

    if (isOpen) {
      liveStatusDot.classList.remove("c");
      liveStatusText.textContent = `Open Now · Closes at ${closingTimeText}`;
    } else {
      liveStatusDot.classList.add("c");
      liveStatusText.textContent = "Currently Closed · Opens Tomorrow at 9:30 AM";
    }

    // Highlight today's row in hours table
    const tableRows = document.querySelectorAll(".hrs table tr");
    if (tableRows.length >= 2) {
      if (day === 1) {
        tableRows[1].classList.add("today");
      } else {
        tableRows[0].classList.add("today");
      }
    }
  }

  // ========================================================================
  // Booking Form & Prefill
  // ========================================================================

  function prefillBookingService(serviceName) {
    if (!bookingServiceSelect) return;

    let matched = false;
    for (let i = 0; i < bookingServiceSelect.options.length; i++) {
      if (bookingServiceSelect.options[i].text.toLowerCase().includes(serviceName.toLowerCase()) ||
          serviceName.toLowerCase().includes(bookingServiceSelect.options[i].text.toLowerCase())) {
        bookingServiceSelect.selectedIndex = i;
        matched = true;
        break;
      }
    }

    if (!matched) {
      bookingServiceSelect.value = "Hair Consultation & Cut";
    }

    showToast(`Selected "${serviceName}" for appointment`);
  }

  function setupBookingForm() {
    if (!bookingForm) return;

    // Set minimum date to today
    const dateInput = document.getElementById("b-date");
    if (dateInput) {
      const todayISO = new Date().toISOString().split("T")[0];
      dateInput.min = todayISO;
      dateInput.value = todayISO;
    }

    // Auto-read URL params (e.g. ?service=Dimensional%20French%20Balayage)
    try {
      const params = new URLSearchParams(window.location.search);
      const srvParam = params.get("service") || params.get("package");
      const noteParam = params.get("notes");
      if (srvParam && bookingServiceSelect) {
        setBookingService(srvParam);
      }
      if (noteParam) {
        const notesInput = document.getElementById("b-notes");
        if (notesInput) notesInput.value = noteParam;
      }
    } catch (_) {}

    bookingForm.addEventListener("submit", (e) => {
      e.preventDefault();

      if (!bookingForm.checkValidity()) {
        bookingForm.reportValidity();
        return;
      }

      const submitBtn = bookingForm.querySelector("button[type='submit']");
      const name = document.getElementById("b-name").value;
      const phone = document.getElementById("b-phone").value;
      const service = document.getElementById("b-service").value;
      const date = document.getElementById("b-date").value;
      const time = document.getElementById("b-time").value;

      // Loading state
      submitBtn.classList.add("loading");
      submitBtn.disabled = true;

      setTimeout(() => {
        submitBtn.classList.remove("loading");
        submitBtn.disabled = false;

        // Hide form, show confirmation
        bookingForm.style.display = "none";
        if (bookingResult) {
          bookingResult.classList.add("show");
          const summaryEl = document.getElementById("res-summary");
          if (summaryEl) {
            summaryEl.textContent = `Thank you, ${name}! Your request for "${service}" on ${date} at ${time} has been reserved. Our concierge will confirm via ${phone}.`;
          }
        }

        showToast("Appointment successfully reserved!");
      }, 1000);
    });

    if (bookingAgain) {
      bookingAgain.addEventListener("click", () => {
        bookingForm.reset();
        bookingForm.style.display = "block";
        if (bookingResult) {
          bookingResult.classList.remove("show");
        }
      });
    }
  }

  // ========================================================================
  // Mobile Hamburger Drawer
  // ========================================================================

  function setupMobileMenu() {
    if (!burger || !menu) return;

    burger.addEventListener("click", () => {
      const isOpen = document.body.classList.toggle("open");
      burger.setAttribute("aria-expanded", isOpen ? "true" : "false");
      menu.classList.toggle("show", isOpen);
    });

    menu.querySelectorAll("nav a, .ctas a").forEach((link) => {
      link.addEventListener("click", () => {
        document.body.classList.remove("open");
        burger.setAttribute("aria-expanded", "false");
        menu.classList.remove("show");
      });
    });
  }

  // ========================================================================
  // Newsletter & Toast Alert
  // ========================================================================

  function setupNewsletter() {
    const nlForm = document.getElementById("nl-form");
    if (!nlForm) return;

    nlForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const input = nlForm.querySelector("input[type='email']");
      if (input && input.value) {
        showToast("Subscribed! Welcome to SPARK VIP Privileges.");
        input.value = "";
      }
    });
  }

  function showToast(message) {
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add("show");

    clearTimeout(toast._timeout);
    toast._timeout = setTimeout(() => {
      toast.classList.remove("show");
    }, 3800);
  }

  // ========================================================================
  // Intersection Observer for Scroll Animations
  // ========================================================================

  function observeScrollReveal() {
    const elements = document.querySelectorAll(".rv");
    if (!("IntersectionObserver" in window)) {
      elements.forEach((el) => el.classList.add("in"));
      return;
    }

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          obs.unobserve(entry.target);
        }
      });
    }, {
      rootMargin: "0px 0px -50px 0px",
      threshold: 0.1,
    });

    elements.forEach((el) => observer.observe(el));
  }

  // Run on DOM Ready
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
