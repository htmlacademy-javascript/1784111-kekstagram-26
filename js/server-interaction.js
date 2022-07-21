import{displayLoadErrorMessage} from './loading-message.js';
import{displaySendSuccessMessage, displaySendErrorMessage} from './sending-messages.js';
import{blockSubmitButton, unblockSubmitButton} from './blocking-submit-button.js';
import{closeUserModal} from './user-form.js';
import initFilters from './photos-filter.js';

function loadData(onSuccess, onError) {
  return fetch('https://26.javascript.pages.academy/kekstagram/data')
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
    })
    .then(onSuccess)
    .catch(onError);
}

loadData(initFilters, displayLoadErrorMessage);

function sendData(formData) {
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
