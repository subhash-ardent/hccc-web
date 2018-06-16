const env = process.env.ENVIRONMENT ? process.env.ENVIRONMENT : 'dev';
const config = require(`${__dirname}/../config/${env}.json`);
const request = require('request');



let getUser = function(usrNm, cb) {
  // fetching current users info from backend
  // make GET call to /accounts endpoint passing userName as query parameter

  let options = {
    baseUrl: config.baseUrl,
    url: "/yande/api/accounts?userName=" +  usrNm,
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
      return cb(err);
    } else if(response.statusCode >= 400) {
      console.log(`Api call for ${options.url} failed with status code - ${response.statusCode}`);
      return cb(new Error('User Details api call - Response Code' + response.statusCode));
    } else {
      console.log(`Received response for ${options.url}`);
      cb(null, JSON.parse(body)[0]);
    }
  });
};

let getUserFromCookie = function(req) {

  let currUserName;
  //TODO: get current user from cookie

  /****************************************************************************/
  //For development purposes toggle between devotee and yande chair roles here

  // currUserName = "achutham"; //devotee role
  currUserName = "kesavam"; // y&e chair role

  /****************************************************************************/
  return currUserName;
};

let customStrategyVerify = function(req, cb) {
  if(req.user) {
    cb(null, req.user);
  } else {
    let currUserName = getUserFromCookie(req);
    getUser(currUserName, cb);
  }

};
let serializeUser = function(user, cb) {
  cb(null, user.userName);
};
let deserializeUser = function(userName, cb) {
  getUser(userName, cb);
};

module.exports = {
  customStrategyVerify,
  serializeUser,
  deserializeUser
};
