const fs = require('fs');

let fileName = 'file.txt';

let buffer = new Buffer.from(
  'This is one of the core modules of Node.js using Buffer'
);

fs.open(fileName, 'a', (err, fd) => {
  if (err) {
    console.log('The file does not exist');
  } else {
    fs.write(fd, buffer, (err, bytes) => {
      if (err) {
        console.log('You can not write on the file.');
      } else {
        console.log(`${bytes} character is written on the file.`);
        console.log(fd);
      }
    });
  }
});
