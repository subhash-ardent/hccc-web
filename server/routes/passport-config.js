const env = process.env.ENVIRONMENT ? process.env.ENVIRONMENT : 'dev';
const config = require(`${__dirname}/../config/${env}.json`);
const request = require('request');

const guestUser = {userName:"hccc-guest-user"};

let getUserByUserName = function(usrNm) {
  // fetching current users info from backend
  // make GET call to /accounts endpoint passing userName as query parameter

  return new Promise(function(resolve, reject) {
    let options = {
      baseUrl: config.baseUrl,
      url: "/yande/api/accounts?userName=" + usrNm,
      method: 'GET',
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "User-Id": usrNm
      }
    };
    request(options, function(err, response, body) {
      if(err) {
        console.log(`Api call for ${options.url} failed with an error`, err);
        reject(err);
      } else if(response.statusCode >= 400) {
        console.log(`Api call for ${options.url} failed with status code - ${response.statusCode}`);
        reject(new Error('User Details api call - Response Code' + response.statusCode));
      } else {
        //console.log(`Received response for ${options.url}`);
        let users = JSON.parse(body);
        if(users && users.length > 0)
          resolve(JSON.parse(body)[0]);
        else
          reject(new Error('No matching user profile found'));
      }
    });
  });
};

let getUserFromCookie = function(req) {
  let currUserName;
  console.log("cookie: ", req.cookies.sessionInfo);
  if (req.cookies && req.cookies.sessionInfo) {
    let sessionInfo = req.cookies.sessionInfo;
    if(sessionInfo.startsWith("username=")) {
      currUserName = sessionInfo.substring(9);
    }
  }
  return currUserName;
};

let customStrategyVerify = function(req, cb) {
  if(req && req.user && req.user.userName && req.user.userName !== guestUser.userName) {
    cb(null, req.user);
  } else {
    let currUserName = getUserFromCookie(req);
    if(!currUserName) {
      cb(null, guestUser);
    } else {
      getUserByUserName(currUserName)
        .then(function(userDetails){
          cb(null, userDetails);
        })
        .catch(function() {
          cb(null, false);
        });
    }
  }

};
let serializeUser = function(user, cb) {
  cb(null, user.userName);
};
let deserializeUser = function(userName, cb) {
    if(userName === guestUser.userName) {
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
