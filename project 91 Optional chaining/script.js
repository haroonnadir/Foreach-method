// Syntax:
object?.property
object?.method()

// Accessing Properties:
const user = {
  name: 'Alice',
  address: {
    street: '123 Main St',
  },
};

console.log(user?.address?.city);  // Output: undefined (address object or city property doesn't exist)
console.log(user?.name);           // Output: 'Alice'

// Calling Methods:
const math = {
  add: (a, b) => a + b,
};

console.log(math?.multiply(2, 3));  // Output: undefined (multiply method doesn't exist)
console.log(math?.add(2, 3));       // Output: 5

// Using in Expressions:
const data = {
  user: {
    id: 123,
    details: {
      email: 'example@example.com',
    },
  },
};

const email = data?.user?.details?.email || 'No email available';
console.log(email);  // Output: 'example@example.com'
const invalidEmail = data?.user?.details?.invalidEmail || 'No email available';
console.log(invalidEmail);  // Output: 'No email available'
