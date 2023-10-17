//Creating a Map:
const myMap = new Map();
const otherMap = new Map([
  ['key1', 'value1'],
  ['key2', 'value2'],
]);

//Adding and Retrieving Key-Value Pairs:
myMap.set('name', 'Alice');
console.log(myMap.get('name'));  // Output: Alice

//Checking for Key Existence:
console.log(myMap.has('name'));  // Output: true
console.log(myMap.has('age'));   // Output: false

//Removing Key-Value Pairs:
myMap.delete('name');
console.log(myMap.has('name'));  // Output: false
myMap.clear();
console.log(myMap.size);  // Output: 0


// //Iterating Over a Map:
// const myMap = new Map([
//   ['name', 'Alice'],
//   ['age', 30],
// ]);
// for (const [key, value] of myMap) {
//   console.log(`${key}: ${value}`);
// }

