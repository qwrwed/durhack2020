const express = require('express');

const router = express.Router();

router.post('/', (req, res) => {
  const answer = JSON.stringify(req.body)
  res.send('test is testing properly.' + answer);
});

module.exports = router;
