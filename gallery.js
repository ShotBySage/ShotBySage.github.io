console.log("gallery editorial system loaded");

/* =========================
   PROJECT DATA
========================= */

const projects = [
  {
    title: "Noise Control band",
    id: "noicont",
    previewCount: 4,
    images: [
      { src: "images/noicont/001.jpg", caption: "Dylan | NoiseControl" },
      { src: "images/noicont/026.jpg", caption: "Elle | NoiseControl" },
      { src: "images/noicont/028.jpg", caption: "NoiseControl" },
      { src: "images/noicont/024.jpg", caption: "Kit | NoiseControl" },
      { src: "images/noicont/005.jpg", caption: "Dylan | NoiseControl" },
      { src: "images/noicont/003.jpg", caption: "Dylan | NoiseControl" },
	  { src: "images/noicont/019.jpg", caption: "Kit | NoiseControl" },	  
      { src: "images/noicont/016.jpg", caption: "Curt | NoiseControl" },	  
      { src: "images/noicont/010.jpg", caption: "Morgan | NoiseControl" },
      { src: "images/noicont/011.jpg", caption: "Morgan | NoiseControl" },
      { src: "images/noicont/014.jpg", caption: "Elle & Dylan | NoiseControl" },
      { src: "images/noicont/015.jpg", caption: "Curt | NoiseControl" },	  
      { src: "images/noicont/018.jpg", caption: "Curt & Kit | NoiseControl" },	 
      { src: "images/noicont/027.jpg", caption: "Elle | NoiseControl" },	
      { src: "images/noicont/029.jpg", caption: "NoiseControl" },	  
	  

	  
    ]
  },
  {
    title: "Cezzasean 'Divine Pressure' BTS",
    id: "project-Cezzasean",
    previewCount: 4,
    images: [
      { src: "images/CEZZASEAN/9.jpg", caption: "Cezzasean | BTS for 'Divine Pressure' Music video" },
      { src: "images/CEZZASEAN/1.jpg", caption: "Cezzasean | BTS for 'Divine Pressure' Music video" },
      { src: "images/CEZZASEAN/4.jpg", caption: "Cezzasean | BTS for 'Divine Pressure' Music video" },
      { src: "images/CEZZASEAN/8.jpg", caption: "Cezzasean | BTS for 'Divine Pressure' Music video" },
      { src: "images/CEZZASEAN/2.jpg", caption: "Cezzasean | BTS for 'Divine Pressure' Music video" },
      { src: "images/CEZZASEAN/3.jpg", caption: "Cezzasean | BTS for 'Divine Pressure' Music video" },
      { src: "images/CEZZASEAN/6.jpg", caption: "Cezzasean | BTS for 'Divine Pressure' Music video" },
      { src: "images/CEZZASEAN/5.jpg", caption: "Cezzasean | BTS for 'Divine Pressure' Music video" },
      { src: "images/CEZZASEAN/10.jpg", caption: "Cezzasean | BTS for 'Divine Pressure' Music video" },
      { src: "images/CEZZASEAN/11.jpg", caption: "Cezzasean | BTS for 'Divine Pressure' Music video" },
      { src: "images/CEZZASEAN/12.jpg", caption: "Cezzasean | BTS for 'Divine Pressure' Music video" },
    ]
  },
  {
    title: "Northern Quarter Open Mic",
    id: "project-nq",
    previewCount: 4,
    images: [
      { src: "images/nq/1.jpg", caption: "Florence Wright | Huddersfield Northern Quarter" },
      { src: "images/nq/9.jpg", caption: "LFAD band | Huddersfield Northern Quarter" },
      { src: "images/nq/2.jpg", caption: "Eliza Beth | Huddersfield Northern Quarter" },
      { src: "images/nq/3.jpg", caption: "Joey 'Bob' Gee | Huddersfield Northern Quarter" },
      { src: "images/nq/4.jpg", caption: "Cerys | Huddersfield Northern Quarter" },
	  { src: "images/nq/10.jpg", caption: "LFAD band | Huddersfield Northern Quarter" },
      { src: "images/nq/5.jpg", caption: "SillyLittleSongz | Huddersfield Northern Quarter" },
      { src: "images/nq/6.jpg", caption: "John Newsham | Huddersfield Northern Quarter" },
      { src: "images/nq/7.jpg", caption: "John Bussey | Huddersfield Northern Quarter" },
      { src: "images/nq/8.jpg", caption: "Didn't catch their name | Huddersfield Northern Quarter" },
    ]
  },
  {
    title: "Halifax Goth Fest",
    id: "project-halifax",
    previewCount: 4,
    images: [
      { src: "images/Burlesque/1.jpg", caption: "DisgusTay | Halifax Goth Fest 2026" },
      { src: "images/Burlesque/2.jpg", caption: "DisgusTay | Halifax Goth Fest 2026" },
      { src: "images/Burlesque/3.jpg", caption: "Stripknot | Halifax Goth Fest 2026" },
      { src: "images/Burlesque/4.jpg", caption: "Lois Tunnicliff | Halifax Goth Fest 2026" },
      { src: "images/Burlesque/5.jpg", caption: "Lois Tunnicliff | Halifax Goth Fest 2026" },
      { src: "images/Burlesque/6.jpg", caption: "Stripknot | Halifax Goth Fest 2026" },
      { src: "images/Burlesque/7.jpg", caption: "DisgusTay | Halifax Goth Fest 2026" },
      { src: "images/Burlesque/8.jpg", caption: "Stripknot | Halifax Goth Fest 2026" },
      { src: "images/Burlesque/9.jpg", caption: "Lois Tunnicliff | Halifax Goth Fest 2026" },
      { src: "images/Audience/1.jpg", caption: "Jamie-Leigh Pollard | Halifax Goth Fest 2026" },
      { src: "images/Audience/2.jpg", caption: "Jamie-Leigh Pollard | Halifax Goth Fest 2026" },
      { src: "images/Audience/3.jpg", caption: "Audience Shot at Salvation Gig | Halifax Goth Fest 2026" },
      { src: "images/Audience/4.jpg", caption: "Audience Shot at Salvation Gig | Halifax Goth Fest 2026" },
      { src: "images/Audience/5.jpg", caption: "Audience candid at Salvation Gig | Halifax Goth Fest 2026" },
      { src: "images/live/4.jpg", caption: "Audience Shot at Salvation Gig | Halifax Goth Fest 2026" },
      { src: "images/live/7.jpg", caption: "Full 'Salvation' Gig group | Halifax Goth Fest 2026" },
      { src: "images/live/5.jpg", caption: "Audience Shot at Salvation Gig | Halifax Goth Fest 2026" },
      { src: "images/live/6.jpg", caption: "Close up at 'Salvation' Gig | Halifax Goth Fest 2026" }
    ]
  },
  {
    title: "Performance Acts",
    id: "project-performance",
    previewCount: 4,
    images: [
      { src: "images/performance/1.jpg", caption: "AwolCircusArts | HuddersfieldBID Charity Event" },
      { src: "images/performance/2.jpg", caption: "AwolCircusArts | HuddersfieldBID Charity Event" },
      { src: "images/performance/3.jpg", caption: "AwolCircusArts | HuddersfieldBID Charity Event" },
      { src: "images/performance/4.jpg", caption: "SandInYourEye | HuddersfieldBID Charity Event" },
      { src: "images/performance/5.jpg", caption: "SandInYourEye | HuddersfieldBID Charity Event" }
    ]
  }
];

/* =========================
   HELPERS
========================= */

const portfolio = document.getElementById("portfolio");
const header = document.getElementById("site-header");
const contactMenu = document.getElementById("contact-menu");
const contactToggle = document.getElementById("contact-toggle");
const contactActions = document.getElementById("contact-actions");

const modal = document.getElementById("image-modal");
const modalImg = document.getElementById("modal-img");
const modalCaption = document.getElementById("modal-caption");
const modalClose = document.getElementById("modal-close");
const modalPrev = document.getElementById("modal-prev");
const modalNext = document.getElementById("modal-next");

const expandedState = {};
const ratioCache = new Map();

let currentModalProjectId = null;
let currentModalIndex = 0;

function getPreviewPath(fullPath) {
  const parts = fullPath.split("/");
  const fileName = parts.pop();
  return `${parts.join("/")}/preview/${fileName}`;
}

function debounce(fn, wait = 120) {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => fn(...args), wait);
  };
}

function isMobile() {
  return window.matchMedia("(max-width: 700px)").matches;
}

function getProjectById(projectId) {
  return projects.find((project) => project.id === projectId);
}

function openModal(projectId, index) {
  const project = getProjectById(projectId);
  if (!project) return;

  currentModalProjectId = projectId;
  currentModalIndex = index;

  const image = project.images[index];
  modalImg.src = image.src;
  modalImg.alt = image.caption;
  modalCaption.textContent = image.caption || "";
  modal.classList.add("active");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  modal.classList.remove("active");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

function stepModal(direction) {
  const project = getProjectById(currentModalProjectId);
  if (!project) return;

  currentModalIndex += direction;

  if (currentModalIndex < 0) currentModalIndex = project.images.length - 1;
  if (currentModalIndex >= project.images.length) currentModalIndex = 0;

  openModal(currentModalProjectId, currentModalIndex);
}

async function getImageRatio(src) {
  if (ratioCache.has(src)) return ratioCache.get(src);

  const ratio = await new Promise((resolve) => {
    const img = new Image();
    img.onload = () => {
      const result = img.naturalWidth / img.naturalHeight || 1;
      resolve(result);
    };
    img.onerror = () => resolve(1);
    img.src = src;
  });

  ratioCache.set(src, ratio);
  return ratio;
}

async function getVisiblePreviewIndexes(project, availableWidth) {
  const previewCount = project.previewCount || 4;
  const candidates = project.images.slice(0, previewCount);
  const height = 320;
  const gap = 10;

  const ratios = await Promise.all(
    candidates.map((img) => getImageRatio(getPreviewPath(img.src)))
  );

  const visibleIndexes = [];
  let usedWidth = 0;

  ratios.forEach((ratio, i) => {
    const itemWidth = Math.round(height * ratio);
    const nextWidth = visibleIndexes.length === 0 ? itemWidth : itemWidth + gap;

    if (usedWidth + nextWidth <= availableWidth) {
      visibleIndexes.push(i);
      usedWidth += nextWidth;
    }
  });

  if (visibleIndexes.length === 0 && candidates.length > 0) {
    visibleIndexes.push(0);
  }

  return visibleIndexes;
}

function createImageButton(projectId, imageIndex, imgData, previewSrc) {
  return `
    <div class="gallery-item">
      <button
        class="image-trigger gallery-open"
        type="button"
        data-project="${projectId}"
        data-index="${imageIndex}"
        aria-label="${imgData.caption}"
      >
        <img
          src="${previewSrc}"
          alt="${imgData.caption}"
          loading="lazy"
        >
      </button>
    </div>
  `;
}

async function renderPortfolio() {
  const mobile = isMobile();
  portfolio.innerHTML = "";

  for (let projectIndex = 0; projectIndex < projects.length; projectIndex++) {
    const project = projects[projectIndex];
    const section = document.createElement("section");
    section.className = `project ${projectIndex === 0 ? "first-project" : ""} ${expandedState[project.id] ? "expanded" : ""}`;

    let previewIndexes = [];

    if (mobile) {
      const previewCount = project.previewCount || 4;
      previewIndexes = Array.from({ length: Math.min(previewCount, project.images.length) }, (_, i) => i);
    } else {
      const availableWidth = portfolio.clientWidth - 20;
      previewIndexes = await getVisiblePreviewIndexes(project, availableWidth);
    }

    const previewSet = new Set(previewIndexes);

    const previewMarkup = previewIndexes
      .map((index) => {
        const img = project.images[index];
        return createImageButton(project.id, index, img, getPreviewPath(img.src));
      })
      .join("");

    const desktopExpandedMarkup = project.images
      .map((img, index) => ({ img, index }))
      .filter(({ index }) => !previewSet.has(index))
      .map(({ img, index }, order) => `
        <div class="gallery-item" style="animation-delay:${order * 70}ms">
          <button
            class="image-trigger gallery-open"
            type="button"
            data-project="${project.id}"
            data-index="${index}"
            aria-label="${img.caption}"
          >
            <img src="${getPreviewPath(img.src)}" alt="${img.caption}" loading="lazy">
          </button>
        </div>
      `)
      .join("");

    const mobileExpandedMarkup = project.images
      .map((img, index) => createImageButton(project.id, index, img, getPreviewPath(img.src)))
      .join("");

    section.innerHTML = `
      <div class="section-rule section-rule-top"></div>

      <div class="project-head">
        <h2 class="project-title">${project.title}</h2>
        <button class="expand-btn" type="button" data-expand="${project.id}">
          ${expandedState[project.id] ? "Hide full set" : "View full set"}
        </button>
      </div>

      <div class="preview-shell">
        <div class="favourites">
          ${previewMarkup}
        </div>
      </div>

      <div class="desktop-expand-gallery">
        ${desktopExpandedMarkup}
      </div>

      <div class="mobile-expand-gallery">
        ${mobileExpandedMarkup}
      </div>

      <div class="section-rule section-rule-bottom"></div>
    `;

    portfolio.appendChild(section);
  }

  bindPreviewHoverHints();
}

/* =========================
   HEADER BEHAVIOUR
========================= */

function updateHeaderState() {
  header.classList.toggle("is-condensed", window.scrollY > 30);
}

contactToggle.addEventListener("click", () => {
  const open = contactMenu.classList.toggle("open");
  contactToggle.setAttribute("aria-expanded", String(open));
  contactActions.setAttribute("aria-hidden", String(!open));
});

document.addEventListener("click", (event) => {
  if (!contactMenu.contains(event.target)) {
    contactMenu.classList.remove("open");
    contactToggle.setAttribute("aria-expanded", "false");
    contactActions.setAttribute("aria-hidden", "true");
  }
});

window.addEventListener("scroll", updateHeaderState);

/* =========================
   MODAL EVENTS
========================= */

modalClose.addEventListener("click", closeModal);
modalPrev.addEventListener("click", () => stepModal(-1));
modalNext.addEventListener("click", () => stepModal(1));

modal.addEventListener("click", (event) => {
  if (event.target === modal) closeModal();
});

document.addEventListener("keydown", (event) => {
  if (!modal.classList.contains("active")) return;

  if (event.key === "Escape") closeModal();
  if (event.key === "ArrowLeft") stepModal(-1);
  if (event.key === "ArrowRight") stepModal(1);
});

let touchStartX = 0;

modal.addEventListener("touchstart", (event) => {
  touchStartX = event.changedTouches[0].clientX;
}, { passive: true });

modal.addEventListener("touchend", (event) => {
  const touchEndX = event.changedTouches[0].clientX;
  const delta = touchEndX - touchStartX;

  if (Math.abs(delta) < 40) return;

  if (delta > 0) stepModal(-1);
  else stepModal(1);
}, { passive: true });

/* =========================
   CLICK EVENTS
========================= */

document.addEventListener("click", (event) => {
  const openTrigger = event.target.closest(".gallery-open");
  if (openTrigger) {
    const projectId = openTrigger.dataset.project;
    const imageIndex = Number(openTrigger.dataset.index);
    openModal(projectId, imageIndex);
    return;
  }

  const expandButton = event.target.closest(".expand-btn");
  if (expandButton) {
    const projectId = expandButton.dataset.expand;
    expandedState[projectId] = !expandedState[projectId];
    renderPortfolio();
  }
});

/* =========================
   HOVER HINT
========================= */

function bindPreviewHoverHints() {
  if (isMobile()) return;

  const previewButtons = document.querySelectorAll(".preview-shell .gallery-open");

  previewButtons.forEach((button) => {
    let timer = null;

    const project = button.closest(".project");
    if (!project) return;

    const clearHintTimer = () => {
      if (timer) {
        clearTimeout(timer);
        timer = null;
      }
    };

    button.addEventListener("mouseenter", () => {
      if (project.classList.contains("expanded")) return;

      timer = setTimeout(() => {
        project.classList.add("hint-glow");
        setTimeout(() => project.classList.remove("hint-glow"), 1200);
      }, 5000);
    });

    button.addEventListener("mouseleave", clearHintTimer);
    button.addEventListener("click", clearHintTimer);
  });
}

/* =========================
   RESIZE RERENDER
========================= */

window.addEventListener("resize", debounce(renderPortfolio, 160));

/* =========================
   INIT
========================= */

updateHeaderState();
renderPortfolio();

const form = document.getElementById("contact-form-real");
const status = document.getElementById("form-status");

if (form) {
  form.addEventListener("submit", async function (e) {
    e.preventDefault();

    status.textContent = "Sending…";

    const data = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        status.textContent = "Message sent ✓";
        form.reset();
      } else {
        status.textContent = "Something went wrong.";
      }
    } catch {
      status.textContent = "Network error.";
    }
  });
}