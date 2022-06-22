import {photoDescriptions} from './data.js';

const picturesElement = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');

const photos = photoDescriptions();
const photosListFragment = document.createDocumentFragment();

photos.forEach(({url, likes, comments}) => {
  const pictureElement = pictureTemplate.cloneNode(true);
  pictureElement.querySelector('.picture__img').src = url;
  pictureElement.querySelector('.picture__likes').textContent = likes;
  pictureElement.querySelector('.picture__comments').textContent = comments.length;
  photosListFragment.append(pictureElement);
});

picturesElement.append(photosListFragment);
