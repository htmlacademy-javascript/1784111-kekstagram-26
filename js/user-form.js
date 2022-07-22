import{resetImageScale} from './image-scaling.js';
import{resetImageEffect} from './image-effects.js';
import{pristine} from './form-validation.js';
import {isEscPressed} from './keyboard.js';

const userFormElement = document.querySelector('.img-upload__form');
const uploadImgElement = document.querySelector('#upload-file');
const textHashtagsElement = document.querySelector('.text__hashtags');
const userCommentElement = document.querySelector('.text__description');
const imgOverlayElement = document.querySelector('.img-upload__overlay');
const bodyElement = document.body;

uploadImgElement.addEventListener('input', openUserModal);
userFormElement.addEventListener('reset', () => {
  closeUserModal();
  resetImageEffect();
  resetImageScale();
  pristine.reset();
});

function closeUserModal() {
  imgOverlayElement.classList.add('hidden');
  bodyElement.classList.remove('modal-open');
  document.removeEventListener('keydown', onPopupEscKeydown);
}

function openUserModal() {
  imgOverlayElement.classList.remove('hidden');
  bodyElement.classList.add('modal-open');

  document.addEventListener('keydown', onPopupEscKeydown);
}

function onPopupEscKeydown(evt) {
  const isUserTyping = evt.target === textHashtagsElement || evt.target === userCommentElement;

  if (isEscPressed(evt) && !isUserTyping  && !bodyElement.contains(document.querySelector('.error'))) {
    evt.preventDefault();
    userFormElement.reset();
  }
}

export{userFormElement};
