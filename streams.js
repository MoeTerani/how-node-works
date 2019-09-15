const fs = require('fs');

//Nice trick to create a new server
const server = require('http').createServer();

server.on('request', (req, res) => {
  //solution 1 - put the file in a variable and send it to clien
  //   fs.readFile('./test-file.txt', (err, data) => {
  //     if (err) throw err;
  //     console.log(data);
  //     res.end(data);
  //   });

  // solution 2 - Using streams instead of sending the hole file directly

  //   const readable = fs.createReadStream('./test-file.txt');
  //   readable.on('data', chunk => {
  //     res.write(chunk);
  //   });
  //   readable.on('end', () => {
  //     res.end();
  //   });
  //   readable.on('error', err => {
  //     console.log(err);
  //     res.statusCode = 500;
  //     res.end('file not find');
  //   });

  //Solution 3 using PIPE function and wil solve the problem of backpressure

  const readable = fs.createReadStream('./test-file.txt');
  readable.pipe(res);
  //readableSource.pipe(writebale destination-in this case (res))
});

//run the server on a specific port
server.listen(8000, '127.0.0.1', () => {
  console.log('Waiting for request');
});
