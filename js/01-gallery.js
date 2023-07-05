import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryMarkup = galleryItems.map((image, index) => {
  return `<li class="gallery__item"><a class="gallery__link" data-source="${image.original}" href="${image.original}"><img data-index="${index}" class="gallery__image" src="${image.preview}" alt="${image.description}"></a></li>`;
});

const galleryTemplate = `${galleryMarkup.join("")}`;

const galleryList = document.querySelector(".gallery");
galleryList.insertAdjacentHTML("beforeend", galleryTemplate);

galleryList.addEventListener("click", showOriginalImage);

function showOriginalImage(event) {
  //event.preventDafault();
  if (event.target.nodeName !== "IMG") {
    return;
  }

  const selectedImage = event.target.dataset.index;
  const sourceImage = event.target.dataset.source;
  console.log(selectedImage);
  console.log(sourceImage);

  const instance = basicLightbox.create(`
    <div class="modal">
    <img data-index="${selectedImage}" src="${sourceImage}">
    </div>
`);

  instance.show();
}

// console.log(instance);
