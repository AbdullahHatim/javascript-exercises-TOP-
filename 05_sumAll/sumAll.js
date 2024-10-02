const sumAll = function (first, second) {
  let sum = 0;
  let biggerNumber = first > second ? first : second;
  let smallerNumber = first < second ? first : second;

  if (
    Math.floor(smallerNumber) !== smallerNumber ||
    Math.floor(biggerNumber) !== biggerNumber ||
    smallerNumber < 0
  )
    return "ERROR";

  while (biggerNumber >= smallerNumber) {
    sum += biggerNumber;
    biggerNumber--;
  }

  return sum;
};

// Do not edit below this line
module.exports = sumAll;
