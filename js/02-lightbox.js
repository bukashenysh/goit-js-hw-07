import { galleryItems } from './gallery-items.js';

// console.log(galleryItems);

// Change code below this line

const galleryEl = document.querySelector('.gallery');

galleryEl.insertAdjacentHTML('beforeend', createGalleryItem(galleryItems));


new SimpleLightbox('.gallery a', {
  captions: true,
  captionsData: 'alt',
  captionDelay: 250,
});

function createGalleryItem(images) { 
  return images.map(({ description, original, preview}) => {
    return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`;
  }).join('');
};

