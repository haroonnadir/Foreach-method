//Here's how you can use the some method:
const numbers = [10, 20, 30, 40, 50];
const hasNumberGreaterThan30 = numbers.some(function (number) {
  return number > 30;
});
console.log(hasNumberGreaterThan30);  // Output: true (at least one number is greater than 30)


//You can also use an arrow function for a more concise syntax:sss
const numbers1 = [10, 20, 30, 40, 50];
const hasNumberGreaterThan50 = numbers1.some(number => number > 30);
console.log(hasNumberGreaterThan50);  // Output: true (at least one number is greater than 30)
