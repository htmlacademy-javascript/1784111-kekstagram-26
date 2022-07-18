import {arrayShaffle} from './util.js';
const RANDOM_PHOTOS_LENGTH = 10;

const imgFiltersElement = document.querySelector('.img-filters');
const defaultFilterElement = document.querySelector('#filter-default');
const randomFilterElement = document.querySelector('#filter-random');
const discussedFilterElement = document.querySelector('#filter-discussed');
const activeFilterClass = 'img-filters__button--active';


function showPhotoFilters() {
  imgFiltersElement.classList.remove('img-filters--inactive');
}

function getDefaultPhotos(array) {
  return array;
}

function getRandomPhotos(array) {
  arrayShaffle(array);
  const randomPhotos = Array.from(array.slice(0, RANDOM_PHOTOS_LENGTH));

  return randomPhotos;
}

function getDiscussedPhotos(array) {
  array.sort((a, b) => b.comments.length - a.comments.length);

  return array;
}

function removePictures() {
  const pictureElementCollection = document.querySelectorAll('.picture');
  for(let i = 0; i < pictureElementCollection.length; i++) {
    pictureElementCollection[i].remove();
  }
}

const setRandomFilter = (cb) => {
  randomFilterElement.addEventListener('click', () => {
    defaultFilterElement.classList.remove(activeFilterClass);
    discussedFilterElement.classList.remove(activeFilterClass);
    randomFilterElement.classList.add(activeFilterClass);

    removePictures();
    cb();
  });
};

const setDiscussedFilter = (cb) => {
  discussedFilterElement.addEventListener('click', () => {
    defaultFilterElement.classList.remove(activeFilterClass);
    discussedFilterElement.classList.add(activeFilterClass);
    randomFilterElement.classList.remove(activeFilterClass);

    removePictures();
    cb();
  });
};

const setDefaultFilter = (cb) => {
  defaultFilterElement.addEventListener('click', () => {
    defaultFilterElement.classList.add(activeFilterClass);
    discussedFilterElement.classList.remove(activeFilterClass);
    randomFilterElement.classList.remove(activeFilterClass);

    removePictures();
    cb();
  });
};

export {showPhotoFilters, getRandomPhotos, getDefaultPhotos, getDiscussedPhotos, setRandomFilter, setDiscussedFilter, setDefaultFilter};
