const palindromes = function (word) {
  const wordFilter = "abcdefghijklmnopqrstuvwxyz1234567890";

  const reverse = word
    .toLowerCase()
    .split("")
    .filter((char) => wordFilter.includes(char))
    .reverse()
    .join("");

  const formatedWord = word
    .toLowerCase()
    .split("")
    .filter((char) => wordFilter.includes(char))
    .join("");
  return reverse.toLowerCase() === formatedWord.toLowerCase();
};

// Do not edit below this line
module.exports = palindromes;
