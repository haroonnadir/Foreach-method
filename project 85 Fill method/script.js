//Here's how you can use the splice method:
const numbers = [1, 2, 3, 4, 5];
// Remove elements starting from index 2 (inclusive) to index 4 (exclusive)
const deletedNumbers = numbers.splice(2, 2);
console.log(numbers);       // Output: [1, 2, 5] (elements after removal)
console.log(deletedNumbers);  // Output: [3, 4] (removed elements)

//Adding Elements:
const numbers1 = [1, 2, 3, 4, 5];
// Add elements at index 2 without removing any elements
numbers.splice(2, 0, 6, 7);

console.log(numbers1);  // Output: [1, 2, 6, 7, 3, 4, 5]
