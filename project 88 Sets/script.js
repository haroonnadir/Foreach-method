//Creating a Set:
const mySet = new Set([1, 2, 3, 2, 1]);
console.log(mySet);  // Output: Set(3) { 1, 2, 3 }

//Adding and Removing Values:
mySet.add(4);
console.log(mySet);  // Output: Set(4) { 1, 2, 3, 4 }
mySet.delete(2);
console.log(mySet);  // Output: Set(3) { 1, 3, 4 }


//Checking for Value Existence:
console.log(mySet.has(3));  // Output: true
console.log(mySet.has(2));  // Output: false

//Iterating Over a Set:
for (const item of mySet) {
  console.log(item);
}

//Size of the Set:
console.log(mySet.size);  // Output: 3
