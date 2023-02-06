const gallery = document.getElementById('gallery'),
      popup = document.getElementById('popup'),
      selectedImage = document.getElementById('selectedImage');

const imageIndexes = [1, 2, 3, 4,];
const selectedIndex = null;

imageIndexes.forEach(i => {
  const image = document.createElement('img');

  image.src = `./img/gallery/shot-${i}.jpg`;
  image.alt = `Cover for image ${i}`;
  image.classList.add('galleryImg');

  image.addEventListener('click', () => {
    popup.style.transform = `translateY(0)`;
    selectedImage.src = `./img/gallery/shot-${i}.jpg`;
    selectedImage.alt = `Cover for image ${i}`;
  });

  gallery.appendChild(image);
});

popup.addEventListener('click', () => {
  popup.style.transform = `translateY(-100%)`;
  popup.src = '';
  popup.alt = '';
});