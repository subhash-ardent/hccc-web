'use strict';

var utils = require('../utils/writer.js');
var Accounts = require('../service/AccountsService');

module.exports.getAccounts = function getAccounts (req, res, next) {
  var contentType = req.swagger.params['Content-Type'].value;
  var accept = req.swagger.params['Accept'].value;
  var accountId = req.swagger.params['Account-Id'].value;
  var accountId2 = req.swagger.params['accountId'].value;
  var phoneNumber = req.swagger.params['phoneNumber'].value;
  Accounts.getAccounts(contentType,accept,accountId,accountId2,phoneNumber)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
