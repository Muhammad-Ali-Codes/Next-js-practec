const express = require('express');
const userdata = require('./userData');

const app = express();

app.use('/user', userdata);

const port = 30001;
app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
