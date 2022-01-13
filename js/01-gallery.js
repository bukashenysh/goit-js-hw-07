import { galleryItems } from './gallery-items.js';

// console.log(galleryItems);

// Change code below this line
const galleryEl = document.querySelector('.gallery');

galleryEl.insertAdjacentHTML('beforeend', createGalleryItem(galleryItems));

galleryEl.addEventListener('click', showingBigImage);

function createGalleryItem(images) { 
  return images.map(({ description, original, preview}) => {
    return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>
`;
  }).join('');
};

function showingBigImage(e) { 
  
  basicLightbox.create(`<img width="1400" height="900" src="${e.target.dataset.source}">`).show()
  
  comparingNodeName(e)
};

function comparingNodeName(e) {
    e.preventDefault();

  if (e.target.nodeName !== "IMG") { 
    return;
  };
  
  return e.target.dataset.source;

};
