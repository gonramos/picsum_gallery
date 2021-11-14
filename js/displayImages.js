import buildFigure from './buildFigure.js'
import { imageGallery, loadMoreButton, loaderDiv } from './selectors.js';

export default function displayImages(imageArray) {
  if (imageArray.length) {
    imageArray.map(image => {
      const figure = buildFigure(image);
      imageGallery.appendChild(figure);
    });
    loadMoreButton.classList.remove('hidden');
    loaderDiv.classList.add('display-none');
  } else {
    imageGallery.innerHTML = 'Images could not be loaded!';
    loadMoreButton.classList.add('hidden');
    loaderDiv.classList.add('display-none');
  }
}