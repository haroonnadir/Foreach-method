//Using Iterables:
const iterable = [1, 2, 3, 4, 5];
// Using a for...of loop to iterate over the iterable
for (const item of iterable) {
  console.log(item);
}
// Using spread operator to convert iterable to an array
const arrayFromIterable = [...iterable];
console.log(arrayFromIterable);
// Using Array.from to convert iterable to an array
const arrayFromIterable2 = Array.from(iterable);
console.log(arrayFromIterable2);

//Custom Iterables:
const customIterable = {
  data: [10, 20, 30],
  [Symbol.iterator]() {
    let index = 0;
    return {
      next: () => {
        if (index < this.data.length) {
          return { value: this.data[index++], done: false };
        }
        return { done: true };
      }
    };
  }
};

for (const item of customIterable) {
  console.log(item);
}
