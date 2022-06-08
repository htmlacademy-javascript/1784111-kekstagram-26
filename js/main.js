function getRandomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return (min >= max || min < 0)
    ? false
    : Math.floor(Math.random() * (max - min + 1)) + min;
}
getRandomNumber();

function checkStringLength(stringCheck, maxSymbol) {
  if (stringCheck.length <= maxSymbol) {
    return true;
  }
  return false;
}
checkStringLength();


