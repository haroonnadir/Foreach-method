const numbers = [1, 2, 3, 4, 5];

const evenNumbers = numbers.filter(function (number) {
  return number % 2 === 0;
});
console.log(evenNumbers);  // Output: [2, 4]


const number = [1, 2, 3, 4, 5];
const evenNumber = numbers.filter(number => number % 2 === 0);
console.log(evenNumber);  // Output: [2, 4]
