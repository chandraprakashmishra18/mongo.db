// app.js
const math = require('./mathUtils');   // relative path

console.log(math.add(10, 5));          // 15
console.log(math.subtract(10, 5));     // 5
console.log(math.multiply(10, 5));     // 50
console.log(math.divide(10, 5));       // 2

// Destructuring import
const { add, multiply } = require('./mathUtils');
console.log(add(3, 4));               // 7

// Error handling
try {
  console.log(math.divide(10, 0));    // throws error
} catch (err) {
  console.error('Error:', err.message);
}
