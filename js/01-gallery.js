import { galleryItems } from "./gallery-items.js";
// Change code below this line
console.log(galleryItems);

const items = galleryItems
  .map((item) => {
    return `<div class="gallery__item">
   <a class="gallery__link" href="${item.original}">
     <img
       class="gallery__image"
       src="${item.preview}"
       data-source="${item.original}"
       alt="${item.description}"
     />
   </a>
 </div> `;
  })
  .join("");

const gallery = document.querySelector(".gallery");

gallery.innerHTML = items;

gallery.addEventListener("click", gettingBigPicture);

function gettingBigPicture(event) {
  event.preventDefault();
  const instance = basicLightbox.create(
    `<img width="1280" height="900" src="${event.target.dataset.source}">`
  );
  instance.show();
}
