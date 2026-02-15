console.log("JS loaded");


// Homepage + Category Gallery JS

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
modal.addEventListener("click", (e) => {
  if (e.target === modal) modal.style.display = "none";
});

// ---------------- ZOOM RESET ----------------
let scale = 1;
let originX = 0;
let originY = 0;

function resetZoom() {
  scale = 1;
  originX = 0;
  originY = 0;
  modalImg.style.transform = "scale(1)";
}

// ---------------- CATEGORY DEFINITIONS ----------------
const categories = {
  "Audience & Candid": [
    { src: "images/audience/1.jpg", caption: "Jamie-Leigh Pollard | Halifax Goth Fest 2026" },
    { src: "images/audience/2.jpg", caption: "Jamie-Leigh Pollard | Halifax Goth Fest 2026" },
    { src: "images/audience/3.jpg", caption: "Audience Shot at Salvation Gig | Halifax Goth Fest 2026" },
    { src: "images/audience/4.jpg", caption: "Audience Shot at Salvation Gig | Halifax Goth Fest 2026" },
  ],
  Burlesque: [
    { src: "images/burlesque/1.jpg", caption: "DisgusTay | Halifax Goth Fest 2026" },
    { src: "images/burlesque/2.jpg", caption: "DisgusTay | Halifax Goth Fest 2026" },
    { src: "images/burlesque/3.jpg", caption: "Stripknot | Halifax Goth Fest 2026" },
    { src: "images/burlesque/4.jpg", caption: "Lois Tunnicliff | Halifax Goth Fest 2026" },
    { src: "images/burlesque/5.jpg", caption: "Lois Tunnicliff | Halifax Goth Fest 2026" },
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

// ---------------- RENDER FUNCTION ----------------
function renderGallery(images) {
  if (!container) return;

  container.innerHTML = "";

  images.forEach((image) => {
    const item = document.createElement("div");
    item.classList.add("gallery-item");

    const img = document.createElement("img");
    img.src = image.src;
    img.alt = image.caption;

    img.addEventListener("click", () => {
      modal.style.display = "flex";
      resetZoom();
      modalImg.src = image.src;
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
const toggle = document.getElementById("dropdown-toggle");
const menu = document.getElementById("dropdown-menu");
const arrow = document.getElementById("arrow");
const mobileLinks = document.querySelectorAll("#dropdown-menu a");

if (toggle) {
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
}
