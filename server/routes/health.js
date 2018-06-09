"use strict";

let express = require('express');
let router = express.Router();

router.get('/*', (req, res) => {
  res.status(200).json({name:"HCCC Youth and Education Web Applications", uptime: process.uptime()});
});

module.exports = router;

