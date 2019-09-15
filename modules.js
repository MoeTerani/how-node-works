// console.log(arguments);

const Calculator = require('./test-module-1');

const calc1 = new Calculator();
console.log(calc1.add(10, 5));

// import methods added to the exports object in other files.
// const calc2 = require('./test-module-2');

// console.log(calc2.add(10, 5));
// console.log(calc2.multiply(10, 5));
// console.log(calc2.divide(10, 5));

//another way is use es6 deconstructing to use added methods to exports obj
const { add, multiply, divide } = require('./test-module-2');

console.log(add(100, 50));
console.log(multiply(100, 50));
console.log(divide(100, 50));

/// CACHING-- the file is read once and cached , after that it's executed from the memory pools
require('./test-modul-3')();
require('./test-modul-3')();
require('./test-modul-3')();
