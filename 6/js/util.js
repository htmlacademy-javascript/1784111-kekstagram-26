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

export {getRandomPositiveInteger, getRandomArrayElement, checkStringLength, createNumericArray, getFirstArrayIndex};
