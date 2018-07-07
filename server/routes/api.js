"use strict";

let express = require('express');
let router = express.Router();
const request = require('request');
const env = process.env.ENVIRONMENT ? process.env.ENVIRONMENT : 'dev';
const config = require(`${__dirname}/../config/${env}.json`);

router.all('/*', (req, res) => {
  try{
    console.log(req.method, req.url);
    let options = {
      baseUrl: config.baseUrl,
      url: "/yande/api" + req.url,
      method: req.method,
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "User-Id": "abcd" // TODO: update user id from session
      }
    };

    if (req.method === 'POST' && req.body) {
      options.body = JSON.stringify(req.body);
      console.log(options, req.body);
    }
    // console.log(options);
    request(options, function(err, response, body) {
      if(err) {
        console.log(`Api call for ${req.url} failed with an error`, err);
        res.status(500).end();
      } else if(response.statusCode >= 400) {
        console.log(`Api call for ${req.url} failed with status code - ${response.statusCode}`);
        res.status(response.statusCode).end();
      } else {
        console.log(`Received response for $req.url`, response.statusCode);
        res.status(response.statusCode).send(body);
      }
    })
  } catch (e) {
    console.log(e);
  }

});

module.exports = router;
