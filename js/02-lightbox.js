//Зроби таку саму галерею як в першому завданні, але використовуючи бібліотеку SimpleLightbox, яка візьме на себе обробку кліків по зображеннях, відкриття і закриття модального вікна, а також гортання зображень за допомогою клавіатури.

import { galleryItems } from "./gallery-items.js";
// Change code below this line

//Знаходимо селектор gallery
const galleryList = document.querySelector(".gallery");

//Формуємо розмітку
const galleryListMarkup = galleryItems
  .map(({ preview, original, description }) => {
    return `
    <li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image"
      src="${preview}" 
      alt="${description}"      
       />
   </a>
</li>`;
  })
  .join("");

//Додаємо розмітку фотогалереї на сайт
galleryList.insertAdjacentHTML("afterbegin", galleryListMarkup);

//Нехай підпис буде знизу і з'являється через 250 мілісекунд після відкриття зображення
const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
  disableScroll: true,
});
