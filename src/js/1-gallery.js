import SimpleLightbox from 'simplelightbox';
import galleryData from './gallery-data.json';

function getGalleryItemTemplate({ preview, original, description }) {
  return `<li class="gallery-item">
    <a class="gallery-link" href=${original}>
      <img
        class="gallery-image"
        src=${preview}
        alt=${description}
      />
    </a>
  </li>`;
}

function renderGallery(images) {
  return images
    .map((image) => {
      return getGalleryItemTemplate(image)
    })
    .join("");
}

const generateGalleryMarkup = images => {
  return images.reduce((acc, { original, preview, description }) => {
    return (
      acc +
      `<li class="gallery-item">
        <a class="gallery-link" href="${original}">
        <img
          class="gallery-image"
          src="${preview}"
          alt="${description}"
        />
        </a>
      </li>`
    );
  }, '');
};

const galleryContainer = document.querySelector('.gallery');
galleryContainer.innerHTML = renderGallery(galleryData);

new SimpleLightbox('.gallery a.gallery-link', {
  captionsData: 'alt',
  captionDelay: 250,
  overlayOpacity: 0.8,
});
