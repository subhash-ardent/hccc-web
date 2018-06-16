"use strict";

const env = process.env.ENVIRONMENT ? process.env.ENVIRONMENT : 'dev';
const config = require(`${__dirname}/../config/${env}.json`);
const loginUrl = config.loginUrl;
const request = require('request');

module.exports = {
  authenticate: (req, res, next) => {
    console.log("user: ", req.user);
    console.log("req: ", req);
    next();
  },
  enabled: (req, res, next) => {
    if(env !== 'dev') {
      if(req.isAuthenticated()) {
        return next();
      } else {
        //TODO: get user from session cookie
        //TODO: validate user session
        //TODO: perform sso authentication here
        next();
      }
    } else {

      /****************************************************************************/
      //For development purposes toggle between devotee and yande chair roles here

      let currUserName = "achutham"; //devotee role
      // let currUserName = "sudharshanam"; // y&e chair role

      /****************************************************************************/


      // fetching current users info from backend

      let options = {
        baseUrl: config.baseUrl,
        url: "/yande/api/account?userName=" +  currUserName,
        method: 'GET',
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
          "Account-Id": currUserName
        }
      };
      request(options, function(err, response, body) {
        if(err) {
          console.log(`Api call for ${req.url} failed with an error`, err);
          return next(err);
        } else if(response.statusCode >= 400) {
          console.log(`Api call for ${req.url} failed with status code - ${response.statusCode}`);
          return next(new Error('User Details api call - Response Code' + response.statusCode));
        } else {
          console.log(`Received response for ${req.url}`);
          req.login({details: body}, function(err) {
            if(err) {
              console.log("Error logging in user");
              return next(err);
            }
          });
          next();
        }
      });

    }
  }
};

