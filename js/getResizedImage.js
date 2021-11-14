export default function getResizedImage(id, w, h) {
  const maxSize = 500;
  const isHorizontal = w >= h;

  if (isHorizontal && w > maxSize) {
    h = Math.floor(h * maxSize / w);
    w = maxSize;
  } else if (h > maxSize) {
    w = Math.floor(w * maxSize / h);
    h = maxSize;
  }

  const thumbUrl = `https://picsum.photos/id/${id}/${Math.floor(w / 10)}/${Math.floor(h / 10)}`;
  const fullUrl = `https://picsum.photos/id/${id}/${w}/${h}`;

  return [fullUrl, thumbUrl, w, h];
}