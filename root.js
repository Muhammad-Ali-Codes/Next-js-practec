let express = require('express');
let app = express();

let data = [
  { id: 1, name: "johan" },
  { id: 2, name: "johan" },
  { id: 3, name: "johan" },
  { id: 4, name: "johan" }
];

app.get('/mehboob', (req, res) => {
  res.json(data);
});

app.get('/', (req, res) => {
  res.send("mm");
});

const port = 30001;
app.listen(port, () => {
  console.log("server is running");
});
