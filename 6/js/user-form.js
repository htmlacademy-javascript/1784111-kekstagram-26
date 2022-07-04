const userFormElement = document.querySelector('.img-upload__form');
const uploadImgElement = document.querySelector('#upload-file');
const textHashtagsElement = document.querySelector('.text__hashtags');
const userCommentElement = document.querySelector('.text__description');
const uploadImgCloseElement = document.querySelector('.img-upload__cancel');
const imgOverlayElement = document.querySelector('.img-upload__overlay');
const bodyElement = document.querySelector('body');

const onPopupEscKeydown = (evt) => {
  const isUserTyping = evt.target === textHashtagsElement || evt.target === userCommentElement;

  if (evt.key === 'Escape' && !isUserTyping) {
    evt.preventDefault();
    closeUserModal ();
    userFormElement.reset();
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

  document.removeEventListener('keydown', onPopupEscKeydown);
}

uploadImgElement.addEventListener('input', openUserModal);

uploadImgCloseElement.addEventListener('click', () => {
  closeUserModal();
});

export {userFormElement};
