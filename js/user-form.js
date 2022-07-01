const uploadImgElement = document.querySelector('#upload-file');
const textHashtagsElement = document.querySelector('.text__hashtags');
const textDescriptionElement = document.querySelector('.text__description');
const uploadImgCloseElement = document.querySelector('.img-upload__cancel');
const imgOverlayElement = document.querySelector('.img-upload__overlay');
const bodyElement = document.querySelector('body');

const defaultUploadImgElement = uploadImgElement.value;
const defaultTextHashtagsElement = textHashtagsElement.value;
const defaultTextDescriptionElement = textDescriptionElement.value;
const effectsRadioElements = document.querySelectorAll('.effects__radio');
const defaultRadioElement = document.querySelector('#effect-none');

const resetUserModal = () => {
  effectsRadioElements.forEach((element) => {
    if (element.hasAttribute('checked') && element.id !== 'effect-none') {
      element.removeAttribute('checked');
    }
  });

  if (!defaultRadioElement.hasAttribute('checked')) {
    defaultRadioElement.setAttribute('checked', '');
  }

  uploadImgElement.value = defaultUploadImgElement;
  textHashtagsElement.value = defaultTextHashtagsElement;
  textDescriptionElement.value = defaultTextDescriptionElement;
};

const onPopupEscKeydown = (evt) => {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    closeUserModal ();
  }
};

// Пробовал отключить esc на фокусе этими способами

// const onPopupEscKeydown = (evt) => {
//   if (evt.key === 'Escape') {
//     if (textHashtagsElement.onfocus) {
//       evt.stopPropagation();
//       console.log('Проверка2');
//     } else {
//       evt.preventDefault();
//       closeUserModal ();
//       console.log('Проверка');
//     }
//   }
// };

// const onPopupEscKeydown = (evt) => {
//   if (evt.key === 'Escape' && !textHashtagsElement.onfocus) {
//     evt.preventDefault();
//     closeUserModal ();
//     console.log('Проверка');
//   }
// };

// const onPopupEscKeydown = (evt) => {
//   if (textHashtagsElement.onfocus) {
//     evt.stopPropagation();
//     console.log('Проверка');
//   } else if (evt.key === 'Escape') {
//     evt.preventDefault();
//     closeUserModal ();
//   }
// };


// textHashtagsElement.onfocus = () => {
//   evt.stopPropagation();
//   console.log('Проверка');
// };

function openUserModal () {
  imgOverlayElement.classList.remove('hidden');
  bodyElement.classList.add('modal-open');

  document.addEventListener('keydown', onPopupEscKeydown);
}

function closeUserModal () {
  imgOverlayElement.classList.add('hidden');
  bodyElement.classList.remove('modal-open');
  resetUserModal();

  document.removeEventListener('keydown', onPopupEscKeydown);
}

uploadImgElement.addEventListener('input', () => {
  openUserModal();
});

uploadImgCloseElement.addEventListener('click', () => {
  closeUserModal();
});
