const http = require('http');
const fs = require('fs');
const { log } = require('console');



const server = http.createServer((req,res) => {
    console.log
})

server.listen(3000, () => {
  console.log("server is listening on port 3000");
})