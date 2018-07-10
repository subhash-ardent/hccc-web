'use strict';

var utils = require('../utils/writer.js');
var Accounts = require('../service/AccountsService');

module.exports.getAccounts = function getAccounts (req, res, next) {
  var contentType = req.swagger.params['Content-Type'].value;
  var accept = req.swagger.params['Accept'].value;
  var userName = req.swagger.params['User-Name'].value;
  var userName2 = req.swagger.params['userName'].value;
  var phoneNumber = req.swagger.params['phoneNumber'].value;
  var role = req.swagger.params['role'].value;
  Accounts.getAccounts(contentType,accept,userName,userName2,phoneNumber,role)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
