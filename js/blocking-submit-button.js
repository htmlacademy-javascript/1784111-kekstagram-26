const submitFormElement = document.querySelector('.img-upload__submit');

function blockSubmitButton() {
  submitFormElement.disabled = true;
  submitFormElement.textContent = 'Отправляю...';
}

function unblockSubmitButton() {
  submitFormElement.disabled = false;
  submitFormElement.textContent = 'Опубликовать';
}

export{blockSubmitButton, unblockSubmitButton};
