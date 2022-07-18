function getRandomPositiveInteger (a, b) {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
}

function checkStringLength (string, length) {
  return string.length <= length;
}

function getRandomArrayElement (elements) {
  return elements[getRandomPositiveInteger(0, elements.length - 1)];
}

function createNumericArray (length = 10, start = 1) {
  return Array.from({ length }, (_, i) => start + i);
}

function getFirstArrayIndex (array) {
  return array.shift();
}

const ALERT_SHOW_TIME = 10000;

function displayLoadErrorMessage () {
  const loadErrorMessage = document.createElement('p');
  loadErrorMessage.style.position = 'absolute';
  loadErrorMessage.style.left = '0';
  loadErrorMessage.style.top = '0';
  loadErrorMessage.style.right = '0';
  loadErrorMessage.style. margin = 0;
  loadErrorMessage.style.padding = '20px 3px';
  loadErrorMessage.style.fontSize = '16px';
  loadErrorMessage.style.textTransform = 'none';
  loadErrorMessage.style.textAlign = 'center';
  loadErrorMessage.style.backgroundColor = 'red';
  loadErrorMessage.textContent = 'Ошибка загрузки фотографий других пользователей. Попробуйте перезагрузить страницу, если проблема не будет устранена, попробуйте позже.';
  document.body.append(loadErrorMessage);

  setTimeout(() => {
    loadErrorMessage.remove();
  }, ALERT_SHOW_TIME);
}

function arrayShaffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

const debounce = (callback, timeoutDelay) => {
  let timeoutId;
  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
};

export {getRandomPositiveInteger, getRandomArrayElement, checkStringLength, createNumericArray, getFirstArrayIndex, displayLoadErrorMessage, arrayShaffle, debounce};
