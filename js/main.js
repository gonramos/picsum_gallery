import loadImages from './loadImages.js'
import { loaderDiv, singleImageDiv, selectedImage, loadMoreButton, scrollToTopButton } from './selectors.js'

const baseApiUrl = 'https://picsum.photos/v2/list?page=1&limit=52';

document.addEventListener('DOMContentLoaded', loadImages(baseApiUrl));
window.addEventListener("scroll", handleScroll);

singleImageDiv.addEventListener('click', function () {
  singleImageDiv.style.transform = `translateY(-100%)`;
  selectedImage.src = '';
  selectedImage.alt = '';
})

loadMoreButton.addEventListener('click', function () {
  loadMoreButton.classList.add('hidden');
  loaderDiv.classList.remove('display-none');
});
loadMoreButton.addEventListener('click', function () { loadImages() });

scrollToTopButton.addEventListener('click', function () {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth',
  })
});

function handleScroll() {
  let y = window.scrollY;
  if (y > 300) {
    scrollToTopButton.classList.remove('hidden');
  } else {
    scrollToTopButton.classList.add('hidden');
  }
}
