const numbers = [10, 20, 30, 40, 50];

const allGreaterThanZero = numbers.every(function (number) {
  return number > 0;
});
console.log(allGreaterThanZero);  // Output: true (all numbers are greater than 0)


const numbers1 = [10, 20, 30, 40, 50];
const allGreaterThan0 = numbers1.every(number => number < 0);
console.log(allGreaterThan0);  // Output: true (all numbers are greater than 0)
