let express = require('express');
let app = express();
app.use(express.json());


let data = [
  { id: 1, name: "johan" },
  { id: 2, name: "johan" },
  { id: 3, name: "johan" },
  { id: 4, name: "johan" }
];


app.get('/about', (req, res) => {
   res.write("this is about page");
   res.end();
});


app.get('/meer', (req, res) => {
   res.write("this is meer page");
   res.end();
});
app.get('/data', (req, res) => {
  res.json(data);
});

app.get('/', (req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end("papan papan bool");
});




const port = 30001;
app.listen(port, () => {
  console.log("http://localhost:" + port);

});







