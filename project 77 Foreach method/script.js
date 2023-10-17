//Here's how you can use the forEach method:
const numbers = [1, 2, 3, 4, 5];
numbers.forEach(function (element) {
  console.log(element);
});

// Output:
// 1
// 2
// 3
// 4
// 5


//You can also access the index and the array itself within the callback function:
const num = [1, 2, 3, 4, 5];

num.forEach(function (element, index, array) {
  console.log(`Element at index ${index}: ${element}`);
  console.log('Full array:', array);
});

// Output:
// Element at index 0: 1
// Full array: [1, 2, 3, 4, 5]
// Element at index 1: 2
// Full array: [1, 2, 3, 4, 5]
// ...

