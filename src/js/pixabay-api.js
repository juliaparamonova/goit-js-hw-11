// 45046577-03496d23e82ad22c3baa8c519

// "Sorry, there are no images matching your search query. Please try again!"

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { renderImg } from './render-functions';

import 'simplelightbox/dist/simple-lightbox.min.css';
import SimpleLightbox from 'simplelightbox';

export function searchImages(value) {
  const form = document.querySelector('.form');
  form.insertAdjacentHTML('afterend', '<div id="loader" class="loader"></div>');
  const params = new URLSearchParams({
    key: '45046577-03496d23e82ad22c3baa8c519',
    q: value,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: 20,
  });
  const baseUrl = 'https://pixabay.com/api/';
  return fetch(`${baseUrl}?${params}`).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}