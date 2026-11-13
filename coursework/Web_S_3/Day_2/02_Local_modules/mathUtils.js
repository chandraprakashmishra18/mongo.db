function validate(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error('Both values must be numbers');
    }
}
// mathUtils.js


// Public functions — exported
function add(a, b)      { validate(a,b); return a + b; }
function subtract(a, b) { validate(a,b); return a - b; }
function multiply(a, b) { validate(a,b); return a * b; }
function divide(a, b) {
 
 if (b === 0) throw new Error('Cannot divide by zero');
  return a / b;

}


module.exports = { add, subtract, multiply, divide };
