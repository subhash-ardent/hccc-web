const env = process.env.NODE_ENV ? process.env.NODE_ENV : 'dev';
const config = require(`${__dirname}/../config/${env}.json`);
const request = require('request');
const fs = require('fs');
const path = require('path');
const certFile = path.resolve(__dirname, '../cert/' + config.certs.crt);
const keyFile = path.resolve(__dirname, '../cert/' + config.certs.key);

const guestUser = {
  userName: "hccc-guest-user",
  categories: [
    {
      "name": "Guest",
    }
  ]
};

let getUserByUserName = function (usrNm) {
  // fetching current users info from backend
  // make GET call to /accounts endpoint passing userName as query parameter

  return new Promise(function (resolve, reject) {
    process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;
    let options = {
      baseUrl: config.baseUrl,
      url: "/devotees/" + usrNm,
      method: 'GET',
      agentOptions: {
        cert: fs.readFileSync(certFile),
        key: fs.readFileSync(keyFile),
        passphrase: config.certs.pwd,
        securityOptions: 'SSL_OP_NO_SSLv3'
      },
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "X-hccc-logged-in-user": usrNm,
        "X-hccc-authz-role": "Devotee"
      }
    };

    request(options, function (err, response, body) {
      if (err) {
        console.log(`Api call for ${options.url} failed with an error`, err);
        reject(err);
      } else if (response.statusCode >= 400) {
        console.log(`Api call for ${options.url} failed with status code - ${response.statusCode}`);
        reject(new Error('User Details api call - Response Code' + response.statusCode));
      } else {
        //console.log(`Received response for ${options.url}`);
        let users = JSON.parse(body);
        if (users)
          resolve(JSON.parse(body));
        else
          reject(new Error('No matching user profile found'));
      }
    });
  });
};

let getUserNameBySid = function (sid) {
  // fetching current users info from backend
  // make GET call to /accounts endpoint passing userName as query parameter

  return new Promise(function (resolve, reject) {
    process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;
    let options = {
      baseUrl: config.baseUrl,
      url: "/ssoSession/" + sid,
      method: 'GET',
      agentOptions: {
        cert: fs.readFileSync(certFile),
        key: fs.readFileSync(keyFile),
        passphrase: config.certs.pwd,
        securityOptions: 'SSL_OP_NO_SSLv3'
      },
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      }
    };

    request(options, function (err, response, body) {
      if (err) {
        console.log(`Api call for ${options.url} failed with an error`, err);
        reject(err);
      } else if (response.statusCode >= 400) {
        console.log(`Api call for ${options.url} failed with status code - ${response.statusCode}`);
        reject(new Error('SSO Session api call - Response Code' + response.statusCode));
      } else {
        //console.log(`Received response for ${options.url}`);
        let sessionInfo = JSON.parse(body);
        if (sessionInfo && sessionInfo.validSession && sessionInfo.userName)
          resolve(sessionInfo.userName);
        else
          reject(new Error('No valid session found'));
      }
    });
  });
};

let getSidFromCookie = function (req) {
  if (req.cookies && req.cookies.hcccsid) {
    console.log("hcccsid: ", req.cookies.hcccsid);
    return req.cookies.hcccsid;
  }
  console.log("Failed to find hcccsid cookie");
};

let customStrategyVerify = function (req, cb) {

  // This method is called to verify a valid session before every protected route.

  // // Check if the request has a (valid) logged-in user and not a guest user.
  // if (req && req.user && req.user.userName && req.user.userName !== guestUser.userName) {
  //
  //   // If the request has a valid user, return the user.
  //   console.log("Request has a valid user, ", req.user);
  //   cb(null, req.user);
  //
  // } else {

  // Look into the cookies to see if a valid user session is set by the legacy application.
  let sid = getSidFromCookie(req);
  let currUserName = null;
  getUserNameBySid(sid)

    .then(function (currUserName) {
      console.log("currUserName: ", currUserName);

      if (!currUserName) {

        // If there is no user session found in the cookies, return guest user
        cb(null, guestUser);

      } else {

        // If a valid user session is found in the cookies (set by legacy application),
        // get the user details from backend and return the same
        return getUserByUserName(currUserName);

      }
    })
    .then(function (userDetails) {

      if (userDetails) {
        console.log(userDetails);
        cb(null, userDetails);
      }
    })
    .catch(function (e) {

      // If not able to get user details for the user, return guest user.
      console.log("Cannot establish a session for ", currUserName, ". Continue as Guest User.");
      cb(null, guestUser);
    });


  // }

};


/*
Express session is currently not utilized for this application.
Session management is performed by the legacy application.
Node server will query the legacy application for every request.
This is not performant, but works for the interim as we iron-out long term SSO Strategies.
*/

let serializeUser = function (user, cb) {

  // Sets the current user in session
  //
  cb(null, user.userName);
};


let deserializeUser = function (userName, cb) {
  if (userName === guestUser.userName) {
    cb(null, guestUser);
  } else {
    getUserByUserName(userName)
      .then(function (userDetails) {
        cb(null, userDetails);
      })
      .catch(function () {
        cb(null, false);
      });
  }
};

module.exports = {
  customStrategyVerify,
  serializeUser,
  deserializeUser
};


// To set cookie
// javascript:document.cookie="hcccsid=253577545"