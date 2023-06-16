'use strict';

const imagesItems = document.querySelectorAll('.home__item');
const homeImage = document.querySelector('.home__image');

const images = ['asstes/images/blak_4.webp', 'asstes/images/blak_3.webp', 'asstes/images/blak.webp'];

const changeImage = index => {
  console.log(index);
  const imageSRC = images[index];
  homeImage.src = imageSRC;
  console.log(imageSRC);
};
imagesItems.forEach((image, i) => {
  imagesItems[i].addEventListener('click', () => {
    imagesItems.forEach(image => image.classList.remove('home__item-focus'));
    image.classList.add('home__item-focus');
    changeImage(i);
  });
});
