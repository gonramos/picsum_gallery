import getImageArr from './getImageArr.js'
import displayImages from './displayImages.js';

export default async function loadImages(url = '') {
  let nextPage = '';
  let images = [];

  if (url) {
    nextPage = url;
  } else {
    const storedLinks = localStorage
      .getItem('links')
      .split(', ')
      .map(item => {
        return item.replace(/<(.*)>;.*/i, '$1');
      });

    nextPage = storedLinks.pop();
  }

  try {
    images = await getImageArr(nextPage);
  } catch (err) {
    console.error(err);
  }

  displayImages(images);
}