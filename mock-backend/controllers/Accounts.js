'use strict';

var utils = require('../utils/writer.js');
var Accounts = require('../service/AccountsService');

module.exports.getAccounts = function getAccounts (req, res, next) {
  var contentType = req.swagger.params['Content-Type'].value;
  var accept = req.swagger.params['Accept'].value;
  var accountId = req.swagger.params['Account-Id'].value;
  var mobileNumber = req.swagger.params['mobileNumber'].value;
  var userName = req.swagger.params['userName'].value;
  Accounts.getAccounts(contentType,accept,accountId,mobileNumber,userName)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
