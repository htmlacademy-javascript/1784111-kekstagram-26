function getRandomPositiveInteger (a, b) {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
}

(function checkStringLength (string, length) {
  return string.length <= length;
})('вызов функции для eslinter');

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

function getRandomArrayElement (elements) {
  return elements[getRandomPositiveInteger(0, elements.length - 1)];
}

function createNumericArray (length = 10, start = 1) {
  return Array.from({ length }, (_, i) => start + i);
}

const ID_ARRAYS = createNumericArray(25);
const URL_ARRAYS = createNumericArray(25);
const commentsIds = new Set();

function getFirstArrayIndex (array) {
  return array.shift();
}

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
// Я пока отключил на этой строке eslinter, чтобы не ругался на неиспользуемую переменную
// eslint-disable-next-line no-unused-vars
const photoDescriptions = Array.from({length: 25}, getPhotoDescription);
