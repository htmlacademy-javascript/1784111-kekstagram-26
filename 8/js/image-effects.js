import {previewImageElement} from './image-scaling.js';

const effectsRadioElements = document.querySelectorAll('.effects__radio');
const imgUploadEffectsElement = document.querySelector('.img-upload__effects');
const sliderElement = document.querySelector('.effect-level__slider');
const effectLevelValueElement = document.querySelector('.effect-level__value');

function addPreviewImageCheckedClass () {
  effectsRadioElements.forEach((element) => {
    if (element.checked) {
      previewImageElement.removeAttribute('class');
      previewImageElement.classList.add(`effects__preview--${element.value}`);
    }
  });
}

noUiSlider.create(sliderElement, {
  range: {
    min: 0,
    max: 0,
  },
  start: 0,
  connect: 'lower',
  format: {
    to: function (value) {
      if (Number.isInteger(value)) {
        return value.toFixed(0);
      }
      return value.toFixed(1);
    },
    from: function (value) {
      return parseFloat(value);
    },
  },
});

function hidingSlider () {
  if (previewImageElement.classList.contains('effects__preview--none') || !previewImageElement.hasAttribute('class')) {
    sliderElement.setAttribute('hidden', '');
  } else {
    sliderElement.removeAttribute('hidden', '');
  }
}

function changeSlider () {
  if (previewImageElement.classList.contains('effects__preview--chrome')) {
    sliderElement.noUiSlider.updateOptions({
      range: {
        min: 0,
        max: 1,
      },
      step: 0.1,
    });
    sliderElement.noUiSlider.set(1);
  } else if (previewImageElement.classList.contains('effects__preview--sepia')) {
    sliderElement.noUiSlider.updateOptions({
      range: {
        min: 0,
        max: 1,
      },
      step: 0.1,
    });
    sliderElement.noUiSlider.set(1);
  } else if (previewImageElement.classList.contains('effects__preview--marvin')) {
    sliderElement.noUiSlider.updateOptions({
      range: {
        min: 0,
        max: 100,
      },
      step: 1,
    });
    sliderElement.noUiSlider.set(100);
  } else if (previewImageElement.classList.contains('effects__preview--phobos')) {
    sliderElement.noUiSlider.updateOptions({
      range: {
        min: 0,
        max: 3,
      },
      step: 0.1,
    });
    sliderElement.noUiSlider.set(3);
  } else if (previewImageElement.classList.contains('effects__preview--heat')) {
    sliderElement.noUiSlider.updateOptions({
      range: {
        min: 1,
        max: 3,
      },
      step: 0.1,
    });
    sliderElement.noUiSlider.set(3);
  }
}

function changeImageFilterEffect () {
  const currentSliderValue = effectLevelValueElement.value;
  if (previewImageElement.classList.contains('effects__preview--chrome')) {
    previewImageElement.style.filter = `grayscale(${currentSliderValue})`;
  } else if (previewImageElement.classList.contains('effects__preview--sepia')) {
    previewImageElement.style.filter = `sepia(${currentSliderValue})`;
  } else if (previewImageElement.classList.contains('effects__preview--marvin')) {
    previewImageElement.style.filter = `invert(${currentSliderValue}%)`;
  } else if (previewImageElement.classList.contains('effects__preview--phobos')) {
    previewImageElement.style.filter = `blur(${currentSliderValue}px)`;
  } else if (previewImageElement.classList.contains('effects__preview--heat')) {
    previewImageElement.style.filter = `brightness(${currentSliderValue})`;
  }
}

function resetImageFilter () {
  if (previewImageElement.classList.contains('effects__preview--none')) {
    // Тут не совсем уверен должен ли масштаб сбрасываться при смене фильтра
    // previewImageElement.removeAttribute('style');
    previewImageElement.style.filter = '';
    effectLevelValueElement.value = '';
  }
}

function resetImageEffect () {
  previewImageElement.removeAttribute('style');
  previewImageElement.removeAttribute('class');
  hidingSlider();
  effectLevelValueElement.value = '';
}

sliderElement.noUiSlider.on('update', () => {
  effectLevelValueElement.value = sliderElement.noUiSlider.get();
  changeImageFilterEffect();
});

imgUploadEffectsElement.addEventListener('change', () => {
  addPreviewImageCheckedClass();
  hidingSlider();
  changeSlider();
  resetImageFilter();
});

export {resetImageEffect};
