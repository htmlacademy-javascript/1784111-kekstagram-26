import {resetImageScale} from './image-scaling.js';
import {resetImageEffect} from './image-effects.js';
import {pristine} from './form-validation.js';

const userFormElement = document.querySelector('.img-upload__form');
const uploadImgElement = document.querySelector('#upload-file');
const textHashtagsElement = document.querySelector('.text__hashtags');
const userCommentElement = document.querySelector('.text__description');
const uploadImgCloseElement = document.querySelector('.img-upload__cancel');
const imgOverlayElement = document.querySelector('.img-upload__overlay');
const bodyElement = document.querySelector('body');

const onPopupEscKeydown = (evt) => {
  const isUserTyping = evt.target === textHashtagsElement || evt.target === userCommentElement;

  if (evt.key === 'Escape' && !isUserTyping  && !bodyElement.contains(document.querySelector('.error'))) {
    evt.preventDefault();
    closeUserModal ();
    userFormElement.reset();
    pristine.reset();
  }
};

function openUserModal () {
  imgOverlayElement.classList.remove('hidden');
  bodyElement.classList.add('modal-open');

  document.addEventListener('keydown', onPopupEscKeydown);
}

function closeUserModal () {
  imgOverlayElement.classList.add('hidden');
  bodyElement.classList.remove('modal-open');
  userFormElement.reset();
  resetImageEffect();
  resetImageScale();

  document.removeEventListener('keydown', onPopupEscKeydown);
}

uploadImgElement.addEventListener('input', openUserModal);

uploadImgCloseElement.addEventListener('click', () => {
  closeUserModal();
  pristine.reset();
});

export {userFormElement, closeUserModal};
