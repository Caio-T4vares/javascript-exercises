const fibonacci = function (num) {
  if (num < 0) return "OOPS";
  if (num == 0) return 0;
  let actual = 1;
  let prev = 0;
  let cont = 1;
  while (num > cont) {
    const temp = actual;
    actual += prev;
    prev = temp;
    cont++;
  }
  return actual;
};

// Do not edit below this line
module.exports = fibonacci;
