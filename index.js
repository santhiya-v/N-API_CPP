const testapp = require('bindings')('mingw_test');

let result = testapp.addTwoNum(5, 4);

console.log("Result : ",result);