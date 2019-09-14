// const fs = require('fs');

// const printLine = el => {
//   let count = 0;
//   for (let count = 0; count < 1000001; count++) {
//     console.log(count, ':', el);
//   }
// };

// printLine('NODE IS THE BEST');

const fs = require('fs');
const crypto = require('crypto');

const start = Date.now();

//this line makes the node run on only one single threaded
process.env.UV_THREADPOOL_SIZE = 1;

setTimeout(() => {
  console.log('Timer 1 finished');
}, 0);
setImmediate(() => {
  console.log('Immidiate 1 finished');
});

fs.readFile('test-fil./test-file.txt', () => {
  console.log('File read finished');
  console.log('---------------------');

  setTimeout(() => {
    console.log('Timer 2 finished');
  }, 0);
  setTimeout(() => {
    console.log('Timer 3 finished');
  }, 3000);
  setImmediate(() => {
    console.log('Immidiate 2 finished');
  });

  process.nextTick(() => {
    console.log('process.nextTick');
  });

  crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha512', () => {
    console.log(Date.now() - start, 'Password encrypted');
  });
  crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha512', () => {
    console.log(Date.now() - start, 'Password encrypted');
  });
  crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha512', () => {
    console.log(Date.now() - start, 'Password encrypted');
  });
  crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha512', () => {
    console.log(Date.now() - start, 'Password encrypted');
  });
});

console.log('Hello from the top level code');
