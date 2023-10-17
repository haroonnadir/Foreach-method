const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = numbers.map(function (number) {
  return number * 2;
});

console.log(doubledNumbers);  // Output: [2, 4, 6, 8, 10]


const number = [1, 2, 3, 4, 5];
const doubledNumber = number.map(number => number * 2);
console.log(doubledNumber);  // Output: [2, 4, 6, 8, 10]
