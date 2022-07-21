const effectsRadioNodeList = document.querySelectorAll('.effects__radio');
const imgEffectsElement = document.querySelector('.img-upload__effects');
const sliderElement = document.querySelector('.effect-level__slider');
const effectLevelValueElement = document.querySelector('.effect-level__value');
const previewImageElement = document.querySelector('.img-upload__preview img');

function addPreviewImageCheckedClass() {
  for (let i = 0; i < effectsRadioNodeList.length; i++) {
    if (effectsRadioNodeList[i].checked) {
      previewImageElement.removeAttribute('class');
      previewImageElement.classList.add(`effects__preview--${effectsRadioNodeList[i].value}`);

      break;
    }
  }
}

noUiSlider.create(sliderElement, {
  range: {
    min: 0,
    max: 0,
  },
  start: 0,
  connect: 'lower',
  format: {
    to: function(value) {
      if (Number.isInteger(value)) {
        return value.toFixed(0);
      }
      return value.toFixed(1);
    },
    from: function(value) {
      return parseFloat(value);
    },
  },
});

function isImgClass(className) {
  return previewImageElement.className.includes(className);
}

function hidingSlider() {
  if (isImgClass('none') || !previewImageElement.hasAttribute('class')) {
    sliderElement.setAttribute('hidden', '');
  } else {
    sliderElement.removeAttribute('hidden', '');
  }
}

function changeSlider() {
  if (isImgClass('chrome')) {
    sliderElement.noUiSlider.updateOptions({
      range: {
        min: 0,
        max: 1,
      },
      step: 0.1,
    });
    sliderElement.noUiSlider.set(1);
  } else if (isImgClass('sepia')) {
    sliderElement.noUiSlider.updateOptions({
      range: {
        min: 0,
        max: 1,
      },
      step: 0.1,
    });
    sliderElement.noUiSlider.set(1);
  } else if (isImgClass('marvin')) {
    sliderElement.noUiSlider.updateOptions({
      range: {
        min: 0,
        max: 100,
      },
      step: 1,
    });
    sliderElement.noUiSlider.set(100);
  } else if (isImgClass('phobos')) {
    sliderElement.noUiSlider.updateOptions({
      range: {
        min: 0,
        max: 3,
      },
      step: 0.1,
    });
    sliderElement.noUiSlider.set(3);
  } else if (isImgClass('heat')) {
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

function changeImageFilterEffect() {
  const currentSliderValue = effectLevelValueElement.value;
  if (isImgClass('chrome')) {
    previewImageElement.style.filter = `grayscale(${currentSliderValue})`;
  } else if (isImgClass('sepia')) {
    previewImageElement.style.filter = `sepia(${currentSliderValue})`;
  } else if (isImgClass('marvin')) {
    previewImageElement.style.filter = `invert(${currentSliderValue}%)`;
  } else if (isImgClass('phobos')) {
    previewImageElement.style.filter = `blur(${currentSliderValue}px)`;
  } else if (isImgClass('heat')) {
    previewImageElement.style.filter = `brightness(${currentSliderValue})`;
  }
}

function resetImageFilter() {
  if (isImgClass('none')) {
    previewImageElement.style.filter = '';
    effectLevelValueElement.value = '';
  }
}

function resetImageEffect() {
  previewImageElement.removeAttribute('style');
  previewImageElement.removeAttribute('class');
  hidingSlider();
  effectLevelValueElement.value = '';
}

sliderElement.noUiSlider.on('update', () => {
  effectLevelValueElement.value = sliderElement.noUiSlider.get();
  changeImageFilterEffect();
});

imgEffectsElement.addEventListener('change', () => {
  addPreviewImageCheckedClass();
  hidingSlider();
  changeSlider();
  resetImageFilter();
});

export{resetImageEffect};
