// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

import SimpleLightbox from "simplelightbox";
import 'simplelightbox/dist/simple-lightbox.min.css';

// console.log(galleryItems);

const galleryMarkup = createGalleryPalette(galleryItems);
const galleryRef = document.querySelector('.gallery');
galleryRef.insertAdjacentHTML('afterbegin', galleryMarkup);

var lightbox = new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay:250});

function createGalleryPalette(galleryItems)  {
    return galleryItems.map(({ preview, original, description }) => {return `
        <a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" /></a>
        `}).join('');
};
