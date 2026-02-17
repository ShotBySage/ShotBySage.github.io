console.log("JS loaded");

const homepageImages = [
  { src: "images/homepage/1.jpg", caption: "Test caption" }
];

const container = document.getElementById("homepage-gallery");

function getPreviewPath(fullPath) {
  const parts = fullPath.split("/");
  const fileName = parts.pop();
  return parts.join("/") + "/preview/" + fileName;
}

function renderGallery(images) {
  container.innerHTML = "";

  images.forEach((image) => {
    const img = document.createElement("img");
    img.src = getPreviewPath(image.src);
    img.loading = "lazy";
    container.appendChild(img);
  });
}

renderGallery(homepageImages);
