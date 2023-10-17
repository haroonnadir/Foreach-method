const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce(function (accumulator, current) {
  return accumulator + current;
}, 0);
console.log(sum);  // Output: 15 (1 + 2 + 3 + 4 + 5)



const number = [1, 2, 3, 4, 5];
const suum = number.reduce((accumulator, current) => accumulator + current, 0);
console.log(suum);  // Output: 15 (1 + 2 + 3 + 4 + 5)
