import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const items = galleryItems
  .map((item) => {
    return `
   <a class="gallery__item" href="${item.original}">
     <img
       class="gallery__image"
       src="${item.preview}"
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
  let galleryBox = new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    captionDelay: 250,
  });
  galleryBox.on("shown.simplelightbox", function () {});
}
