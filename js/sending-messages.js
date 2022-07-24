const messageTemplateSuccess = document.querySelector('#success').content.querySelector('.success');
const messageTemplateError = document.querySelector('#error').content.querySelector('.error');
const bodyElement = document.body;

function displaySendSuccessMessage() {
  bodyElement.append(messageTemplateSuccess);

  const successMessageElement = document.querySelector('.success');
  const successInnerElement = document.querySelector('.success__inner');
  const successTitleElement = document.querySelector('.success__title');

  function removeSuccessMessageOnClick(evt) {
    if(evt.target !== successInnerElement && evt.target !== successTitleElement) {
      successMessageElement.remove();

      removeSuccessMessageEventListeners();
    }
  }

  function removeSuccessMessageOnEsc(evt) {
    if(evt.key === 'Escape') {
      successMessageElement.remove();

      removeSuccessMessageEventListeners();
    }
  }

  function removeSuccessMessageEventListeners() {
    document.removeEventListener('click', removeSuccessMessageOnClick);
    document.removeEventListener('keydown', removeSuccessMessageOnEsc);
  }

  document.addEventListener('click', removeSuccessMessageOnClick);
  document.addEventListener('keydown', removeSuccessMessageOnEsc);
}

function displaySendErrorMessage() {
  bodyElement.append(messageTemplateError);

  const errorMessageElement = document.querySelector('.error');
  const errorInnerElement = document.querySelector('.error__inner');
  const errorTitleElement = document.querySelector('.error__title');
  errorMessageElement.style.zIndex = '100';

  function removeErrorMessageOnClick(evt) {
    if(evt.target !== errorInnerElement && evt.target !== errorTitleElement) {
      errorMessageElement.remove();

      removeErrorMessageEventListeners();
    }
  }

  function removeErrorMessageOnEsc(evt) {
    if(evt.key === 'Escape') {
      errorMessageElement.remove();

      removeErrorMessageEventListeners();
    }
  }

  function removeErrorMessageEventListeners() {
    document.removeEventListener('click', removeErrorMessageOnClick);
    document.removeEventListener('keydown', removeErrorMessageOnEsc);
  }

  document.addEventListener('click', removeErrorMessageOnClick);
  document.addEventListener('keydown', removeErrorMessageOnEsc);
}

export{displaySendSuccessMessage, displaySendErrorMessage};
