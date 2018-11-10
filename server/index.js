const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const request = require('request');
const session = require ('express-session');
const passport = require('passport');
// const Strategy = require('passport-local').Strategy;
const Strategy = require('passport-custom').Strategy;

const health = require(__dirname + '/routes/health');
const api = require(__dirname + '/routes/api');
const currentUser = require(__dirname + '/routes/currentUser');
const passportConfig = require(__dirname + '/routes/passport-config');

const env = process.env.ENVIRONMENT ? process.env.ENVIRONMENT : 'dev';
const config = require(`${__dirname}/config/${env}.json`);

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cookieParser());

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
  failureRedirect: '/yande/error-page'
};

// Configure API and Webapp routes
app.use('/yande/user/current', passport.authenticate('custom', failureRedirect), currentUser);

//TODO: implement RBAC for APIs and put passport authentication back in place for protected APIs
app.use('/yande/api', api);
// app.use('/yande/api', passport.authenticate('custom', failureRedirect), api);
app.use('/yande/health', health);
// app.get('/yande/home', passport.authenticate('custom', failureRedirect), (req, res) => {
//   res.sendFile(path.join(__dirname, '../dist/youth-and-education/index.html'));
// });
app.use('/yande', passport.authenticate('custom', failureRedirect), express.static(path.join(__dirname, '../dist/youth-and-education')));
app.use('/yande/', passport.authenticate('custom', failureRedirect), express.static(path.join(__dirname, '../dist/youth-and-education')));
app.use('/yande/*', passport.authenticate('custom', failureRedirect), express.static(path.join(__dirname, '../dist/youth-and-education')));

const port = process.env.PORT || '3000';
app.set('port', port);
const server = http.createServer(app);
server.listen(port, '0.0.0.0', () => console.log(`API running on localhost: ${port}`));



