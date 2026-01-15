let express = require('express');
let app = express()



let data = [
  {   id: 1, name: "johan"},
  {   id: 1, name: "johan"},
  {   id: 1, name: "johan"},
  {   id: 1, name: "johan"},
  {   id: 1, name: "johan"},
  {   id: 1, name: "johan"},
  {   id: 1, name: "johan"},
  {   id: 1, name: "johan"}
]

app.get('/mehboob', (req, res) => {
  res.json(data)
})

app.get('/' , (req,resp) => {
  resp.send("mm")
})
app.listen(3000, () => {
  console.log("server is runing");
  
})

let express = require(express);
