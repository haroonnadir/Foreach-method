// //Syntax:
// Object.assign(target, source1, source2, ...);

//Merging Objects:
// const target = {};
// const source1 = { a: 1 };
// const source2 = { b: 2, c: 3 };
// Object.assign(target, source1, source2);
// console.log(target);  // Output: { a: 1, b: 2, c: 3 }

//Overwriting Properties:
// const target = { a: 1, b: 2 };
// const source = { b: 3, c: 4 };
// Object.assign(target, source);
// console.log(target);  // Output: { a: 1, b: 3, c: 4 }

// //Copying to an Empty Object:
// const source = { x: 10, y: 20 };
// const copy = Object.assign({}, source);
// console.log(copy);  // Output: { x: 10, y: 20 }

