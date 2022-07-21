import{arrayShaffle, debounce} from './util.js';
import renderPhotosList from './photo-rendering.js';

const RANDOM_PHOTOS_LENGTH = 10;
const RERENDER_DELAY = 500;
const ACTIVE_FILTER_CLASS = 'img-filters__button--active';

const imgFiltersElement = document.querySelector('.img-filters');
const buttonWrapper = document.querySelector('.img-filters__form');

export default function initFilters(initialPhotos) {
  renderDefault();
  showPhotoFilters();

  const debouncedFilter = debounce(filter, RERENDER_DELAY);

  buttonWrapper.addEventListener('click', ({target}) => {
    if (target.tagName === 'BUTTON') {
      const currentActive = buttonWrapper.querySelector(`.${ACTIVE_FILTER_CLASS}`);

      if (currentActive) {
        currentActive.classList.remove(ACTIVE_FILTER_CLASS);
      }

      target.classList.add(ACTIVE_FILTER_CLASS);
      const chosenFilter = target.id.replace('filter-', '');

      debouncedFilter(chosenFilter);
    }
  });

  function filter(name) {
    removePictures();
    switch(name) {
      case 'random':
        return renderPhotosList(randomizePhotos(initialPhotos));
      case 'discussed':
        return renderPhotosList(sortPhotosByComments(initialPhotos));
      case 'default':
        return renderDefault();
    }
  }

  function renderDefault() {
    renderPhotosList(initialPhotos);
  }
}

function showPhotoFilters() {
  imgFiltersElement.classList.remove('img-filters--inactive');
}

function randomizePhotos(array) {
  const randomPhotos = arrayShaffle([...array]).slice(0, RANDOM_PHOTOS_LENGTH);

  return randomPhotos;
}

function sortPhotosByComments(array) {
  const sorted = [...array].sort((a, b) => b.comments.length - a.comments.length);

  return sorted;
}

function removePictures() {
  const pictureNodeList = document.querySelectorAll('.picture');
  pictureNodeList.forEach((picture) => picture.remove());
}
