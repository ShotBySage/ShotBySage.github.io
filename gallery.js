console.log("JS loaded");

// ---------------- HOMEPAGE FAVORITES ----------------
const homepageImages = [
  { src: "images/homepage/1.jpg", caption: "DisgusTay | Halifax Goth Fest 2026" },
  { src: "images/homepage/2.jpg", caption: "Stripknot | Halifax Goth Fest 2026" },
  { src: "images/homepage/3.jpg", caption: "Florence Wright | Huddersfield Northern Quarter" },
  { src: "images/homepage/4.jpg", caption: "Didn't catch their name | Huddersfield Northern Quarter" },
  { src: "images/homepage/5.jpg", caption: "Jamie-Leigh Pollard | Halifax Goth Fest 2026" },
  { src: "images/homepage/6.jpg", caption: "Full 'Salvation' Gig group | Halifax Goth Fest 2026" },
];

const defaultHeroText =
  "These are my current favourite few. Wanna see more? Check the links at the top of the page :)";

const container = document.getElementById("homepage-gallery");
const heroText = document.querySelector(".hero p");

// ---------------- MODAL ----------------
const modal = document.createElement("div");
modal.id = "image-modal";
modal.innerHTML = `
  <div class="modal-content">
    <button id="close-modal">×</button>
    <img id="modal-img" src="" alt="">
    <p id="modal-caption"></p>
  </div>
`;
document.body.appendChild(modal);

const modalImg = document.getElementById("modal-img");
const modalCaption = document.getElementById("modal-caption");
const closeBtn = document.getElementById("close-modal");

closeBtn.addEventListener("click", () => (modal.style.display = "none"));
if (window.closeMobileDropdown) window.closeMobileDropdown();
modal.addEventListener("click", (e) => {
  if (e.target === modal) modal.style.display = "none";
});

// ---------------- ZOOM RESET ----------------
let scale = 1;
function resetZoom() {
  scale = 1;
  modalImg.style.transform = "scale(1)";
}

// ---------------- CATEGORY DEFINITIONS ----------------
const categories = {
  "Audience & Candid": [
    { src: "images/Audience/1.jpg", caption: "Jamie-Leigh Pollard | Halifax Goth Fest 2026" },
    { src: "images/Audience/2.jpg", caption: "Jamie-Leigh Pollard | Halifax Goth Fest 2026" },
    { src: "images/Audience/3.jpg", caption: "Audience Shot at Salvation Gig | Halifax Goth Fest 2026" },
    { src: "images/Audience/4.jpg", caption: "Audience Shot at Salvation Gig | Halifax Goth Fest 2026" },
  ],
  "Burlesque": [
    { src: "images/Burlesque/1.jpg", caption: "DisgusTay | Halifax Goth Fest 2026" },
    { src: "images/Burlesque/2.jpg", caption: "DisgusTay | Halifax Goth Fest 2026" },
    { src: "images/Burlesque/3.jpg", caption: "Stripknot | Halifax Goth Fest 2026" },
    { src: "images/Burlesque/4.jpg", caption: "Lois Tunnicliff | Halifax Goth Fest 2026" },
    { src: "images/Burlesque/5.jpg", caption: "Lois Tunnicliff | Halifax Goth Fest 2026" },
    { src: "images/Burlesque/6.jpg", caption: "Stripknot | Halifax Goth Fest 2026" },
    { src: "images/Burlesque/7.jpg", caption: "DisgusTay | Halifax Goth Fest 2026" },
    { src: "images/Burlesque/8.jpg", caption: "Stripknot | Halifax Goth Fest 2026" },
    { src: "images/Burlesque/9.jpg", caption: "Lois Tunnicliff | Halifax Goth Fest 2026" },
  ],
  "Live Music": [
    { src: "images/live/1.jpg", caption: "Didn't catch their name | Huddersfield Northern Quarter" },
    { src: "images/live/2.jpg", caption: "Didn't catch their name | Huddersfield Northern Quarter" },
    { src: "images/live/3.jpg", caption: "Florence Wright | Huddersfield Northern Quarter" },
    { src: "images/live/4.jpg", caption: "Audience Shot at Salvation Gig | Halifax Goth Fest 2026" },
    { src: "images/live/5.jpg", caption: "Audience Shot at Salvation Gig | Halifax Goth Fest 2026" },
    { src: "images/live/6.jpg", caption: "Close up at 'Salvation' Gig | Halifax Goth Fest 2026" },
    { src: "images/live/7.jpg", caption: "Full 'Salvation' Gig group | Halifax Goth Fest 2026" },
    { src: "images/live/8.jpg", caption: "SillyLittleSongz | Huddersfield Northern Quarter" },
  ],
  "Performance Acts": [
    { src: "images/performance/1.jpg", caption: "AwolCircusArts | HuddersfieldBID Charity Event" },
    { src: "images/performance/2.jpg", caption: "AwolCircusArts | HuddersfieldBID Charity Event" },
    { src: "images/performance/3.jpg", caption: "SandInYourEye | HuddersfieldBID Charity Event" },
    { src: "images/performance/4.jpg", caption: "SandInYourEye | HuddersfieldBID Charity Event" },
  ],
};

// ---------------- PREVIEW PATH HELPER ----------------
function getPreviewPath(fullPath) {
  const parts = fullPath.split("/");
  const fileName = parts.pop();
  return `${parts.join("/")}/preview/${fileName}`;
}

// ---------------- RENDER FUNCTION ----------------
function renderGallery(images) {
  if (!container) return;

  container.innerHTML = "";

  images.forEach((image) => {
    const item = document.createElement("div");
    item.classList.add("gallery-item");

    const img = document.createElement("img");
    img.src = getPreviewPath(image.src); // compressed preview
    img.alt = image.caption;
    img.loading = "lazy";

    img.addEventListener("click", () => {
	  if (window.closeMobileDropdown) window.closeMobileDropdown();
      modal.style.display = "flex";
      resetZoom();
      modalImg.src = image.src; // full resolution
      modalCaption.textContent = image.caption;
    });

    const caption = document.createElement("div");
    caption.classList.add("caption");
    caption.textContent = image.caption;

    item.appendChild(img);
    item.appendChild(caption);
    container.appendChild(item);
  });
}

// ---------------- DESKTOP NAV ----------------
const navLinks = document.querySelectorAll(".desktop-nav a");
navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const category = link.textContent.trim();
    const images = categories[category];

    if (images) {
      heroText.textContent = `You are currently viewing ${category}.`;
      renderGallery(images);
    }
  });
});

// ---------------- INITIAL LOAD ----------------
if (heroText) heroText.textContent = defaultHeroText;
renderGallery(homepageImages);

// ---------------- MOBILE DROPDOWN ----------------
(() => {
  const toggle = document.getElementById("dropdown-toggle");
  const menu = document.getElementById("dropdown-menu");
  const arrow = document.getElementById("arrow");
  const mobileLinks = document.querySelectorAll("#dropdown-menu a");

  if (!toggle) return;

  toggle.addEventListener("click", () => {
    const open = menu.style.display === "flex";
    menu.style.display = open ? "none" : "flex";
    arrow.style.transform = open ? "rotate(0deg)" : "rotate(180deg)";
  });

  mobileLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const category = link.textContent.trim();
      const images = categories[category];

      if (images) {
        heroText.textContent = `You are currently viewing ${category}.`;
        renderGallery(images);
      }

      menu.style.display = "none";
      arrow.style.transform = "rotate(0deg)";
    });
  });
})();

// ===== NSFW HOMEPAGE GATE (15 minute reset) =====
document.addEventListener("DOMContentLoaded", () => {
  const overlay = document.getElementById("nsfw-overlay");
  const enterBtn = document.getElementById("nsfw-enter");
  const exitBtn = document.getElementById("nsfw-exit");

  const isHomepage =
    window.location.pathname === "/" ||
    window.location.pathname.includes("index.html");

  if (!isHomepage) return;

  const lastAccepted = localStorage.getItem("nsfwAcceptedTime");
  const now = Date.now();
  const fifteenMinutes = 15 * 60 * 1000;

  if (!lastAccepted || now - lastAccepted > fifteenMinutes) {
    overlay.classList.add("active");
    document.body.style.overflow = "hidden";
  }

  enterBtn?.addEventListener("click", () => {
    localStorage.setItem("nsfwAcceptedTime", now);
    overlay.classList.remove("active");
    document.body.style.overflow = "";
  });

  exitBtn?.addEventListener("click", () => {
    window.location.href = "https://www.google.com";
  });
});