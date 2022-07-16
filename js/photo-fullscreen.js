import initComments from './comments.js';

const bigPictureElement = document.querySelector('.big-picture');
const bigPictureImgElement = document.querySelector('.big-picture__img img');
const bigPictureCancelElement = document.querySelector('.big-picture__cancel');
const likesCountElement = document.querySelector('.likes-count');
const socialCaptionElement = document.querySelector('.social__caption');

function openFullScreenPhoto(photo) {
  bigPictureElement.classList.remove('hidden');
  document.body.classList.add('modal-open');

  bigPictureImgElement.src = photo.url;
  likesCountElement.textContent = photo.likes;
  socialCaptionElement.textContent = photo.description;

  const resetUserComments = initComments(photo.comments);

  bigPictureCancelElement.addEventListener('click', closeFullScreenPhoto);
  document.addEventListener('keydown', closeFullScreenPhotoOnEsc);

  function closeFullScreenPhoto() {
    bigPictureElement.classList.add('hidden');
    document.body.classList.remove('modal-open');
    resetUserComments();

    bigPictureCancelElement.removeEventListener('click', closeFullScreenPhoto);
    document.removeEventListener('keydown', closeFullScreenPhotoOnEsc);
  }

  function closeFullScreenPhotoOnEsc(evt) {
    if (evt.key === 'Escape') {
      closeFullScreenPhoto ();
    }
  }
}

export {openFullScreenPhoto};
