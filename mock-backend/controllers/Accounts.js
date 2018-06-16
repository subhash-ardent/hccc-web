'use strict';

var utils = require('../utils/writer.js');
var Accounts = require('../../mock-data/AccountsService');

module.exports.getAccounts = function getAccounts (req, res, next) {
  var contentType = req.swagger.params['Content-Type'].value;
  var accept = req.swagger.params['Accept'].value;
  var userId = req.swagger.params['User-Id'].value;
  var userName = req.swagger.params['userName'].value;
  var phoneNumber = req.swagger.params['phoneNumber'].value;
  var role = req.swagger.params['role'].value;
  Accounts.getAccounts(contentType,accept,userId,userName,phoneNumber,role)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
