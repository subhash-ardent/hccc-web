"use strict";

let express = require('express');
const fs = require('fs');
const path = require('path');
const certFile = path.resolve(__dirname, '../cert/cid_crt.crt');
const keyFile = path.resolve(__dirname, '../cert/cid_key.key');

let router = express.Router();
const request = require('request');
const env = process.env.ENVIRONMENT ? process.env.ENVIRONMENT : 'dev';
const config = require(`${__dirname}/../config/${env}.json`);

router.all('/*', (req, res) => {
  process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;
  try{
    console.log(req.method, req.url);
    let options = {
      baseUrl: config.baseUrl,
      url: req.url,
      method: req.method,
      agentOptions: {
        cert: fs.readFileSync(certFile),
        key: fs.readFileSync(keyFile),
        passphrase: 'changeit',
        securityOptions: 'SSL_OP_NO_SSLv3'
      },
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "User-Name": "abcd" // TODO: update user id from session
      }
    };


    if (['POST', 'PATCH', 'PUT'].includes(req.method) && req.body) {
      options.body = JSON.stringify(req.body);
    }
    console.log(options);
    request(options, function(err, response, body) {
      // console.log(response);
      if(err) {
        console.log(`Api call for ${req.url} failed with an error`, err);
        res.status(500).end();
      } else if(response.statusCode >= 400) {
        console.log(`Api call for ${req.url} failed with status code - ${response.statusCode}`);
        res.status(response.statusCode).end();
      } else {
        console.log(`Received response for ${req.url}`, response.statusCode);
        res.status(response.statusCode).send(body);
      }
    })
  } catch (e) {
    console.log(e);
  }

});

module.exports = router;
