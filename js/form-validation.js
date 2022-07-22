import{sendData} from './server-interaction.js';

const userFormElement = document.querySelector('.img-upload__form');
const arrayInput = userFormElement.querySelector('.text__hashtags');

const pristine = new Pristine(userFormElement, {
  classTo: 'text__label',
  errorTextParent: 'text__label',
});

const re = /^#[A-Za-zA-Яа-яЁё0-9]{1,20}$/;

function validateHashtag (value) {
  return re.test(value);
}

function validateHashtagsPattern(value) {
  const hashtagsArray = value.split(' ');

  return value.length ? hashtagsArray.every(validateHashtag): true;
}

function validateHashtagsAmount(value) {
  const hashtagsArray = value.split(' ');

  return hashtagsArray.length <= 5;
}

function validateHashtagsUnique(value) {
  const hashtagsArray = value.toLowerCase().split(' ');
  const hashtagsUniqueArray = Array.from(new Set(hashtagsArray));

  return hashtagsArray.length === hashtagsUniqueArray.length;
}

pristine.addValidator(arrayInput, validateHashtagsPattern, 'Хэштеги должны начинаться с #, не могут содержать пробелы, спецсимволы, символы пунктуации, эмодзи и т. д.;');
pristine.addValidator(arrayInput, validateHashtagsAmount, 'Не больше 5 хэштегов');
pristine.addValidator(arrayInput, validateHashtagsUnique, 'Используйте уникальные хэштеги');

userFormElement.addEventListener('submit', (evt) => {
  evt.preventDefault();

  const isValid = pristine.validate();
  if (isValid) {
    const formData = new FormData(evt.target);
    sendData(formData);
  }
});

export{pristine};
