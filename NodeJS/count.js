var name = require('./third')

var counter = function(arr){
    return `There are  ${arr.length} elements in the array`
}

var add = function(a,b){
    return `Sum:${a+b}`
}

const pi = 3.14;

// module.exports.counter = counter;
// module.exports.add = add;
// module.exports.pi = pi;

module.exports = {
    counter:counter,
    add:add,
    name:name
}