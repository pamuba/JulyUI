var events = require('events');
var util = require('util');


// var myEmitter = new events.EventEmitter();

// myEmitter.on('run', function(msg){
//     console.log(msg+" running")
// })

// //execute the event
// myEmitter.emit('run', 'John')


var Person = function(name){
    this.name = name
}

util.inherits(Person, events.EventEmitter)

var john = new Person('John');

john.on('speak', function(){
    console.log("John is speaking")
});

john.emit('speak')