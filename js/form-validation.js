const form = document.querySelector('.img-upload__form');

const pristine = new Pristine(form, {
  classTo: 'text__label',
  errorTextParent: 'text__label',
});

const re = /^#[A-Za-zA-Яа-яЁё0-9]{1,20}$/i;
const hashtagsArray = form.querySelector('.text__hashtags').value.split(' ');

function validateHashtags (value) {
  re.test(value);
  return re.test(value);
}

function validateHashtagsPattern (value) {
  let checkPattern;
  for (let i = 0; i < value.length; i++) {
    checkPattern = validateHashtags(value[i]);
    if (checkPattern === false) {
      break;
    }
  }
  // console.log(checkPattern);
  return checkPattern;
}

validateHashtagsPattern(hashtagsArray);

// Функция вроде работает, с предустановленным value в text__hashtags, но когда доходит до валидации ввода сразу ошибка

pristine.addValidator(form.querySelector('.text__hashtags'), validateHashtagsPattern, 'Неверно');

form.addEventListener('submit', (evt) => {
  evt.preventDefault();

  const isValid = pristine.validate();
  if (isValid) {
    // console.log('Можно отправлять');
  } else {
    // console.log('Форма невалидна');
  }
});

// form.addEventListener('submit', (evt) => {
//   evt.preventDefault();
//   pristine.validate();
// });
