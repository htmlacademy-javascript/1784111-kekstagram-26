import {getRandomPositiveInteger, getRandomArrayElement, createNumericArray, getFirstArrayIndex} from './util.js';

const COMMENTATOR_NAMES = [
  'Юлиан',
  'Олег',
  'Август',
  'Влад',
  'Нонна',
  'Йоханна',
  'Лидия',
  'Генриетта',
  'Елена',
  'Евгений',
  'Лоренс',
  'Эрик',
];

const MESSAGE_EXAMPLES = [
  'В целом всё неплохо. Но не всё.',
  'Всё отлично!',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const ID_ARRAYS = createNumericArray(25);
const URL_ARRAYS = createNumericArray(25);
const commentsIds = new Set();

function getRandomCommentId () {
  let noUnique = true;
  let randomId;

  while(noUnique) {
    randomId = getRandomPositiveInteger(1, 1000);
    noUnique = commentsIds.has(randomId);
  }

  commentsIds.add(randomId);
  return randomId;
}

function generateComment () {
  return {
    id: getRandomCommentId(),
    avatar: `img/avatar-${getRandomPositiveInteger(1, 6)}.svg`,
    message: getRandomArrayElement(MESSAGE_EXAMPLES),
    name: getRandomArrayElement(COMMENTATOR_NAMES),
  };
}

function getPhotoDescription () {
  return {
    id: getFirstArrayIndex(ID_ARRAYS),
    url: `photos/${getFirstArrayIndex(URL_ARRAYS)}.jpg`,
    description: 'Случайная фотография',
    likes: getRandomPositiveInteger(15, 200),
    comments: Array.from(
      {length: getRandomPositiveInteger(1, 10)},
      generateComment),
  };
}

const photoDescriptions = () => Array.from({length: 25}, getPhotoDescription);

export {photoDescriptions, getRandomCommentId};
