import {openFullScreenPhoto} from './photo-fullscreen.js';

const picturesElement = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');

function renderPhotosList (photos) {
  const photosListFragment = document.createDocumentFragment();

  photos.forEach((photo) => {
    const pictureElement = pictureTemplate.cloneNode(true);
    pictureElement.querySelector('.picture__img').src = photo.url;
    pictureElement.querySelector('.picture__likes').textContent = photo.likes;
    pictureElement.querySelector('.picture__comments').textContent = photo.comments.length;
    pictureElement.querySelector('.picture__img').addEventListener('click', () => {
      openFullScreenPhoto(photo);
    });

    photosListFragment.append(pictureElement);
  });

  picturesElement.append(photosListFragment);
}

export {renderPhotosList};
