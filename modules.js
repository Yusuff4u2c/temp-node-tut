
// const names = require('./names')
const { yusuff, peter } = require('./names')
// console.log(names);
const sayHi = require('./utilities');
sayHi(peter)
sayHi(yusuff)
// sayHi(yusuff)
const item = require('./utilities');
console.log(item.items);
require('./app')