"use strict";

let express = require('express');
let router = express.Router();

router.get('/*', (req, res) => {
  if(req.user) {
    return res.json(req.user);
  } else {
    console.log("No User Context");
    return res.status(404);
  }
});

module.exports = router;




