export default async function getImageArr(url) {
  const response = await fetch(url);
  const images = await response.json();
  localStorage.setItem('links', response.headers.get('link'));
  return images;
}
