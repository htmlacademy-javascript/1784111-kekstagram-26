const DEFAULT_SCALE_VALUE = document.querySelector('.scale__control--value').value;
const SCALE_STEP = 25;
const MIN_SCALE = 25;
const MAX_SCALE = 100;

const scaleControlElement = document.querySelector('.scale__control--value');
const SmallerButtonElement = document.querySelector('.scale__control--smaller');
const BiggerButtonElement = document.querySelector('.scale__control--bigger');
const previewImageElement = document.querySelector('.img-upload__preview img');

let scaleNumericValue = DEFAULT_SCALE_VALUE.slice(0, -1);

SmallerButtonElement.addEventListener('click', () => {
  if (scaleNumericValue > MIN_SCALE) {
    scaleControlElement.value = `${scaleNumericValue -= SCALE_STEP}%`;
    previewImageElement.style.transform = `scale(${scaleControlElement.value})`;
  }
});

BiggerButtonElement.addEventListener('click', () => {
  if (scaleNumericValue < MAX_SCALE) {
    scaleControlElement.value = `${scaleNumericValue += SCALE_STEP}%`;
    previewImageElement.style.transform = `scale(${scaleControlElement.value})`;
  }
});

function resetImageScale() {
  scaleNumericValue = DEFAULT_SCALE_VALUE.slice(0, -1);
  scaleControlElement.value = DEFAULT_SCALE_VALUE;
  previewImageElement.removeAttribute('style');
}

export{resetImageScale};
