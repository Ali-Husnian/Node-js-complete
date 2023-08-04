// console.log(arguments);
// console.log(require('module').wrapper);

// module export
const C = require('./test-module1');
const calc1 = new C();
console.log(calc1.add(10,5));

// export
// Method 1

// const calc2 = require('./test-module2');
// console.log(calc2.multiply(10,5));

//Method 2
const {add , multiply, divide} = require('./test-module2');
console.log(multiply(12,5));

// caching 

require('./test-module3')();
require('./test-module3')();
require('./test-module3')();