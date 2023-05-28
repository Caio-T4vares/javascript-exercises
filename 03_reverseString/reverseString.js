const reverseString = function (string) {
  const array = string.split("");
  let reverseString = [];
  for (let i = 0; i < array.length; i++) {
    reverseString[i] = array[array.length - 1 - i];
  }
  return reverseString.join("");
};
// Do not edit below this line
module.exports = reverseString;
