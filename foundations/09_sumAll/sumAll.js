const sumAll = function (first, second) {
  if (first < 0 || second < 0) return "ERROR";
  if (!(Number.isInteger(first) && Number.isInteger(second))) return "ERROR";
  if (!(typeof first === "number" && typeof second === "number"))
    return "ERROR";

  let sum = 0;
  let initial = 0;
  let final = 0;
  if (first > second) {
    initial = second;
    final = first;
  } else {
    initial = first;
    final = second;
  }

  for (let i = initial; i <= final; i++) {
    sum += i;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
