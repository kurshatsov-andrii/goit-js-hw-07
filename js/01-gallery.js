import { galleryItems } from "./gallery-items.js";
// Change code below this line

//Знаходимо селектор gallery
const galleryList = document.querySelector(".gallery");

//Формуємо розмітку
const galleryListMarkup = galleryItems
  .map(({ preview, original, description }) => {
    return `<li class="gallery__item">
        <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
    </li>`;
  })
  .join("");

//Додаємо розмітку фотогалереї на сайт
galleryList.insertAdjacentHTML("afterbegin", galleryListMarkup);

galleryList.addEventListener("click", onGalleryListClick);

function onGalleryListClick(event) {
  event.preventDefault();

  if (!event.target.classList.contains("gallery__image")) {
    return;
  }

  const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" alt="${event.target.alt}" class="gallery__size">`);

  instance.show();
  document.addEventListener("keydown", onEscPress);

  function onEscPress(event) {
    if (event.code === "Escape") {
      instance.close();
      document.removeEventListener("keydown", onEscPress);
    }
  }
}
