const findTheOldest = function (persons) {
  return persons.sort((a, b) => {
    let ageA = (a.yearOfDeath ?? new Date().getFullYear()) - a.yearOfBirth;
    let ageB = (b.yearOfDeath ?? new Date().getFullYear()) - b.yearOfBirth;
    return ageB - ageA;
  })[0];
};

// Do not edit below this line
module.exports = findTheOldest;
