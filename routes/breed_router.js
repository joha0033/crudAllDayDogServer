const express = require('express');
const router = express.Router();


router.get('/dogs', (req, res) => {
  res.json(['dogs!'])
})



module.exports = router;
