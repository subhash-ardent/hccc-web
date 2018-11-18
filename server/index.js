const express = require('express');
const path = require('path');
const https = require('https');
const http = require('http');
const fs = require('fs');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const request = require('request');
const session = require ('express-session');
const passport = require('passport');
const Strategy = require('passport-custom').Strategy;

const health = require(__dirname + '/routes/health');
const api = require(__dirname + '/routes/api');
const currentUser = require(__dirname + '/routes/currentUser');
const passportConfig = require(__dirname + '/routes/passport-config');

const env = process.env.NODE_ENV ? process.env.NODE_ENV : 'dev';
const config = require(`${__dirname}/config/${env}.json`);

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cookieParser());


/*
Express session is currently not utilized for this application.
Session management is performed by the legacy application.
Node server will query the legacy application for every request.
This is not performant, but works for the interim as we iron-out long term SSO Strategies.
*/

// Enabling user session
const sessionOptions = config.sessionOptions;
const m15 = 1000 * 60 * 15;
sessionOptions.cookie = {
  expires: new Date(Date.now() + m15),
  maxAge: m15
};
app.use(session(sessionOptions));

// Verify session
app.use((req,res,next) => {
  if(!req.session) {
    return next(new Error('Session Unavailable'));
  } else {
    console.log("Session Verified");
    next();
  }
});



// Configure passport
passport.use('custom', new Strategy(passportConfig.customStrategyVerify));
passport.serializeUser(passportConfig.serializeUser);
passport.deserializeUser(passportConfig.deserializeUser);
app.use(passport.initialize());
app.use(passport.session());

let failureRedirect = {
  failureRedirect: '/hccc/error-page'
};

// Configure API and Webapp routes

// API routes
app.use('/hccc/user/current', passport.authenticate('custom', failureRedirect), currentUser);
app.use('/hccc/api', passport.authenticate('custom', failureRedirect), api);

// Health endpoint
app.use('/hccc/health', health);

// Webapp routes
app.use('/hccc', passport.authenticate('custom', failureRedirect), express.static(path.join(__dirname, '../dist/youth-and-education')));
app.use('/hccc/', passport.authenticate('custom', failureRedirect), express.static(path.join(__dirname, '../dist/youth-and-education')));
app.use('/hccc/*', passport.authenticate('custom', failureRedirect), express.static(path.join(__dirname, '../dist/youth-and-education')));


if (env && env === 'prod') {

  // Code to run on SSL 443
  if(config && config.serverCerts) {
    const port = '443';
    const p12File = path.resolve(__dirname, './cert/' + config.serverCerts.p12);
    const options = {
      pfx: fs.readFileSync(p12File),
      passphrase: config.serverCerts.pwd
    };
    app.set('port', port);
    const server = https.createServer(options, app);
    server.listen(port, '0.0.0.0', () => console.log(`API running on localhost: ${port}`));
  } else {
    throw new Error("Server certs not configured");
  }
} else {

  // Code to run on port 3000
  const port = '3000';
  app.set('port', port);
  const server = http.createServer(app);
  server.listen(port, '0.0.0.0', () => console.log(`API running on localhost: ${port}`));

}




