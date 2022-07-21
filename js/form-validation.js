import{sendData} from './server-interaction.js';

const userFormElement = document.querySelector('.img-upload__form');

const pristine = new Pristine(userFormElement, {
  classTo: 'text__label',
  errorTextParent: 'text__label',
});

const re = /^#[A-Za-zA-Яа-яЁё0-9]{1,20}$/;

function validateHashtag (value) {
  return re.test(value);
}

function validateHashtagsPattern() {
  const arrayInput = userFormElement.querySelector('.text__hashtags');
  const hashtagsArray = arrayInput.value.split(' ');

  if (arrayInput.value.length) {
    let checkPattern;
    for (let i = 0; i < hashtagsArray.length; i++) {
      checkPattern = validateHashtag(hashtagsArray[i]);
      if (checkPattern === false) {
        break;
      }
    }
    return checkPattern;
  }
  return true;
}

function validateHashtagsAmount() {
  const arrayInput = userFormElement.querySelector('.text__hashtags');
  const hashtagsArray = arrayInput.value.split(' ');
  return hashtagsArray.length <= 5;
}

function validateHashtagsUnique() {
  const arrayInput = userFormElement.querySelector('.text__hashtags');
  const hashtagsArray = arrayInput.value.toLowerCase().split(' ');
  const hashtagsUniqueArray = Array.from(new Set(hashtagsArray));
  return hashtagsArray.length === hashtagsUniqueArray.length;
}

pristine.addValidator(userFormElement.querySelector('.text__hashtags'), validateHashtagsPattern, 'Хэштеги должны начинаться с #, не могут содержать пробелы, спецсимволы, символы пунктуации, эмодзи и т. д.;');
pristine.addValidator(userFormElement.querySelector('.text__hashtags'), validateHashtagsAmount, 'Не больше 5 хэштегов');
pristine.addValidator(userFormElement.querySelector('.text__hashtags'), validateHashtagsUnique, 'Используйте уникальные хэштеги');

userFormElement.addEventListener('submit', (evt) => {
  evt.preventDefault();

  const isValid = pristine.validate();
  if (isValid) {
    const formData = new FormData(evt.target);
    sendData(formData);
  }
});

export{pristine};
