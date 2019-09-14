const EventEmitter = require('events');
const http = require('http');

//this the best practice tyo use class to create emit events
class Sale extends EventEmitter {
  constructor() {
    super();
  }
}

const myEmitter = new Sale(); // #1 Create our own copy of the EventEmitter class

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

//**************************************************************** */
// Create a serevr to simulate the request and event listening
const server = http.createServer();

server.on('request', (req, res) => {
  //log the requested URL
  console.log(req.url);
  console.log('Request Recieved');
  res.end('Request Recieved');
});

//Only the first respond will be send , so here will be clg instes of res.end()
server.on('request', (req, res) => {
  console.log(' Another Request 👌🏼');
});

server.on('close', (req, res) => {
  res.end(' Server closed');
});

//run the server on a specific port
server.listen(8000, '127.0.0.1', () => {
  console.log('Waiting for request');
});
