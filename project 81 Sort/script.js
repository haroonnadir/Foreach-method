const fruits = ['banana', 'apple', 'orange', 'grape'];
fruits.sort();
console.log(fruits);  // Output: ['apple', 'banana', 'grape', 'orange']


const numbers = [10, 5, 8, 2, 3];
numbers.sort(function (a, b) {
  return a - b;  // Sort in ascending order
});
console.log(numbers);  // Output: [2, 3, 5, 8, 10]