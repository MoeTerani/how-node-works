const EventEmitter = require('events');

const myEmitter = new EventEmitter(); // #1 Create our own copy of the EventEmitter

console.log(myEmitter); //# Before, an empty EventEmitter object

//#3 create event listener for the created event(newSlae)
myEmitter.on('newSale', () => {
  console.log('ther was new sales');
});
//#3 create event listener for the created event(newSlae)
myEmitter.on('newSale', () => {
  console.log('Customer name: Moe');
});

//we use the argument passed into event emitter
myEmitter.on('newSale', stock => {
  console.log(`There are ${stock} items left.`);
});

// we can add argument to even emitter, that event listener can use later
myEmitter.emit('newSale', 9); // #2 Create a new event

//# After, an empty EventEmitter object
console.log(myEmitter);
