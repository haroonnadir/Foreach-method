//Here's how you can use the find method:
const numbers = [10, 20, 30, 40, 50];
const foundNumber = numbers.find(function (number) {
  return number > 25;
});
console.log(foundNumber);  // Output: 30 (the first number greater than 25)


//Here's how you can use the find method:
const number = [10, 20, 30, 40, 50];
const foundNumber1 = number.find(number => number > 25);
console.log(foundNumber1);  // Output: 30 (the first number greater than 25)
