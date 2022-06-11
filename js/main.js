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

function createNewNumericArray (min, max) {
  const newArray = [];
  for (let i = min; i <= max; i++) {
    newArray.push(i);
  }
  return newArray;
}

function shuffleArray (array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

const ID_ARRAYS = createNewNumericArray(1, 25);
const URL_ARRAYS = createNewNumericArray(1, 25);
const commentsId = shuffleArray(createNewNumericArray(1, 1000));

function getFirstArrayIndex (array) {
  return array.shift();
}

function getPhotoDescription () {
  return {
    id: getFirstArrayIndex(ID_ARRAYS),
    url: `photos/${getFirstArrayIndex(URL_ARRAYS)}.jpg`,
    description: 'Случайная фотография',
    likes: getRandomPositiveInteger(15, 200),
    comments: {
      id: getFirstArrayIndex(commentsId),
      avatar: `img/avatar-${getRandomPositiveInteger(1, 6)}.svg`,
      message: getRandomArrayElement(MESSAGE_EXAMPLES),
      name: getRandomArrayElement(COMMENTATOR_NAMES),
    },
  };
}
// Я пока отключил на этой строке eslinter, чтобы не ругался на неиспользуемую переменную
// eslint-disable-next-line no-unused-vars
const photoDescriptions = Array.from({length: 25}, getPhotoDescription);

