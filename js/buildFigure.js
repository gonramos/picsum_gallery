import getResizedImage from './getResizedImage.js'
import { singleImageDiv, selectedImage } from './selectors.js';

export default function buildFigure(imageObj) {
  const figure = document.createElement('figure');
  const img = document.createElement('img');
  const figCaption = document.createElement('figcaption');
  const [imgUrl, thumbUrl, newW, newH] = getResizedImage(imageObj.id, imageObj.width, imageObj.height);

  img.src = thumbUrl;
  img.width = newW;
  img.height = newH;
  img.loading = "lazy";
  img.alt = imageObj.author;
  img.classList.add('gallery-img');
  img.onload = () => { img.src = imgUrl; img.onload = null; }
  img.onclick = () => {
    singleImageDiv.style.transform = `translateY(0)`;
    selectedImage.src = imageObj.download_url;
    selectedImage.alt = imageObj.author;
  }
  figCaption.innerHTML = imageObj.author;

  figure.append(img, figCaption);
  return figure;
}