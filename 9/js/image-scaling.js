const scaleControlValueElement = document.querySelector('.scale__control--value');
const scaleControlSmallerElement = document.querySelector('.scale__control--smaller');
const scaleControlBiggerElement = document.querySelector('.scale__control--bigger');
const defaltScaleControlValue = scaleControlValueElement.value;
let scaleControlNumericValue = 100;
const previewImageElement = document.querySelector('.img-upload__preview img');

scaleControlSmallerElement.addEventListener('click', () => {
  if (scaleControlNumericValue > 25) {
    scaleControlValueElement.value = `${scaleControlNumericValue -= 25}%`;
    previewImageElement.style.transform = `scale(${scaleControlValueElement.value})`;
  }
});

scaleControlBiggerElement.addEventListener('click', () => {
  if (scaleControlNumericValue < 100) {
    scaleControlValueElement.value = `${scaleControlNumericValue += 25}%`;
    previewImageElement.style.transform = `scale(${scaleControlValueElement.value})`;
  }
});

function resetImageScale () {
  scaleControlNumericValue = 100;
  scaleControlValueElement.value = defaltScaleControlValue;
  previewImageElement.removeAttribute('style');
}

export {resetImageScale, previewImageElement};
