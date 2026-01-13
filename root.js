const fs = require('fs');
fs.writeFile('example.txt', 'hello world', (err) => {
  if(err) throw err;
  else console.log("File written successfully");
})