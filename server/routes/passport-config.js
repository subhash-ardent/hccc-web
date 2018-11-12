const env = process.env.ENVIRONMENT ? process.env.ENVIRONMENT : 'dev';
const config = require(`${__dirname}/../config/${env}.json`);
const request = require('request');
const fs = require('fs');
const path = require('path');
const certFile = path.resolve(__dirname, '../cert/cid_crt.crt');
const keyFile = path.resolve(__dirname, '../cert/cid_key.key');

const guestUser = {userName: "hccc-guest-user"};

// Temporarily hardcoding yande profile. remove when devotee api is available

// const yneUser = {
//   "userName": "yande",
//   "phoneNumber": "9876543210",
//   "roles": [{
//     "roleId": "52",
//     "roleName": "Chairman - Youth and Cultural",
//     "roleDescription": "Chairman - Youth and Cultural",
//   }, {
//     "roleId": "28",
//     "roleName": "Devotee",
//     "roleDescription": "Devotee",
//   }],
//   "email": "email",
//   "dateOfBirth": "1990-07-12",
//   "firstName": "Vandhana",
//   "lastName": "Bhanoori",
//   "middleName": "",
//   "familyMembers": [{
//     "firstName": "Prabhakar",
//     "lastName": "Bhanoori",
//     "middleName": ""
//   }]
// };

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
        passphrase: 'changeit',
        securityOptions: 'SSL_OP_NO_SSLv3'
      },
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "User-Name": usrNm
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

let getUserFromCookie = function (req) {
  let currUserName;
  if (req.cookies && req.cookies.sessionInfo) {
    let sessionInfo = req.cookies.sessionInfo;
    if (sessionInfo.startsWith("username=")) {
      currUserName = sessionInfo.substring(9);
    }
  }
  return currUserName;
};

let customStrategyVerify = function (req, cb) {

  // This method is called to verify a valid session before every protected route.
  console.log("verifying session");

  // Check if the request has a (valid) logged-in user and not a guest user.
  if (req && req.user && req.user.userName && req.user.userName !== guestUser.userName) {

    // If the request has a valid user, return the user.
    cb(null, req.user);

  } else {

    // Look into the cookies to see if a valid user session is set by the legacy application.

    /***********************/
    // Currently hard-coding Y&E username ("ABCD"). Below lines to be toggled to get username from cookie
    // let currUserName = getUserFromCookie(req);
    let currUserName = "DEVOTEE1";
    /************************/


    if (!currUserName) {

      // If there is no user session found in the cookies, return guest user
      cb(null, guestUser);

    } else {

      // If a valid user session is found in the cookies (set by legacy application),
      // get the user details from backend and return the same
      getUserByUserName(currUserName)
        .then(function (userDetails) {
          cb(null, userDetails);
        })
        .catch(function (e) {

          // If not able to get user details for the user, return guest user.
          console.log("Cannot establish a session for ", currUserName, ". Continue as Guest User.");
          cb(null, guestUser);
        });
    }
  }

};
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
