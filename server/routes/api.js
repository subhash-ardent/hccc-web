"use strict";

let express = require('express');
let router = express.Router();
const request = require('request');
const env = process.env.ENVIRONMENT ? process.env.ENVIRONMENT : 'dev';
const config = require(`${__dirname}/../config/${env}.json`);

router.get('/*', (req, res) => {
  let options = {
    baseUrl: config.baseUrl,
    url: "/yande/api" + req.url,
    method: req.method,
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Account-Id": "abcd" // TODO: update user id from session
    }
  };
  request(options, function(err, response, body) {
    if(err) {
      console.log(`Api call for ${req.url} failed with an error`, err);
      res.status(500).end();
    } else if(response.statusCode >= 400) {
      console.log(`Api call for ${req.url} failed with status code - ${response.statusCode}`);
      res.status(response.statusCode).end();
    } else {
      console.log(`Received response for $req.url}`);
      res.status(200).send(body);
    }
  })
});

module.exports = router;
