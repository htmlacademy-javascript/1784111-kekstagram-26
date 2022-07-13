import {renderPhotosList} from './photo-rendering.js';
import {displayLoadErrorMessage} from './util.js';
import {closeUserModal} from './user-form.js';

const bodyElement = document.querySelector('body');
const messageTemplateSuccess = document.querySelector('#success').content.querySelector('.success');
const messageTemplateError = document.querySelector('#error').content.querySelector('.error');
const submitFormElement = document.querySelector('.img-upload__submit');

function loadData (onSuccess, onError) {
  return fetch('https://26.javascript.pages.academy/kekstagram/data')
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
    })
    .then((data) => {
      onSuccess(data);
    })
    .catch(() => {
      onError();
    });
}

loadData(renderPhotosList, displayLoadErrorMessage);

function displaySendSuccessMessage () {
  bodyElement.append(messageTemplateSuccess);

  const successMessageElement = document.querySelector('.success');
  const successInnerElement = document.querySelector('.success__inner');
  const successTitleElement = document.querySelector('.success__title');

  const removeSuccessMessageOnClick = (evt) => {
    if(evt.target !== successInnerElement && evt.target !== successTitleElement) {
      successMessageElement.remove();

      removeSuccessMessageEventListeners ();
    }
  };

  const removeSuccessMessageOnEsc = (evt) => {
    if(evt.key === 'Escape') {
      successMessageElement.remove();

      removeSuccessMessageEventListeners ();
    }
  };

  function removeSuccessMessageEventListeners () {
    document.removeEventListener('click', removeSuccessMessageOnClick);
    document.removeEventListener('keydown', removeSuccessMessageOnEsc);
  }

  document.addEventListener('click', removeSuccessMessageOnClick);
  document.addEventListener('keydown', removeSuccessMessageOnEsc);
}


function displaySendErrorMessage () {
  bodyElement.append(messageTemplateError);

  const errorMessageElement = document.querySelector('.error');
  const errorInnerElement = document.querySelector('.error__inner');
  const errorTitleElement = document.querySelector('.error__title');
  errorMessageElement.style.zIndex = '100';

  const removeErrorMessageOnClick = (evt) => {
    if(evt.target !== errorInnerElement && evt.target !== errorTitleElement) {
      errorMessageElement.remove();

      removeErrorMessageEventListeners ();
    }
  };

  const removeErrorMessageOnEsc = (evt) => {
    if(evt.key === 'Escape') {
      errorMessageElement.remove();

      removeErrorMessageEventListeners ();
    }
  };

  function removeErrorMessageEventListeners () {
    document.removeEventListener('click', removeErrorMessageOnClick);
    document.removeEventListener('keydown', removeErrorMessageOnEsc);
  }

  document.addEventListener('click', removeErrorMessageOnClick);
  document.addEventListener('keydown', removeErrorMessageOnEsc);
}


const blockSubmitButton = () => {
  submitFormElement.disabled = true;
  submitFormElement.textContent = 'Отправляю...';
};

const unblockSubmitButton = () => {
  submitFormElement.disabled = false;
  submitFormElement.textContent = 'Опубликовать';
};

function sendData (formData) {
  blockSubmitButton();
  fetch(
    'https://26.javascript.pages.academy/kekstagram',
    {
      method: 'POST',
      body: formData,
    },
  )
    .then((response) => {
      if (response.ok) {
        closeUserModal();
        displaySendSuccessMessage();
        unblockSubmitButton();
      } else {
        displaySendErrorMessage();
        unblockSubmitButton();
      }
    })
    .catch(() => {
      displaySendErrorMessage();
      unblockSubmitButton();
    });
}

export{sendData};
