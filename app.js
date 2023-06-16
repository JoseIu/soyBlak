'use strict';

const imagesItems = document.querySelectorAll('.home__item');
const homeImage = document.querySelector('.home__image');

const images = ['asstes/images/blak_4.jpg', 'asstes/images/blak_3.jpg', 'asstes/images/blak.jpg'];

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
