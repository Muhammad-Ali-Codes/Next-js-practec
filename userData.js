const express = require('express');

const router = express.Router(); // Router capital R

const data = [
  { id: 1, name: "johan" },
  { id: 2, name: "johan" },
  { id: 3, name: "johan" },
  { id: 4, name: "johan" }
];

router.get('/data', (req, res) => {
  res.json(data);
});

module.exports = router;
