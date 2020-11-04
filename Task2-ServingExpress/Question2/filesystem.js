const fs = require('fs');

let filePath = './input.txt';

fs.readFile(filePath, 'utf8', (err, content) => {
  if (err) {
    console.log('There is no file to read from the content.');
  } else {
    console.log(content);
  }
});
