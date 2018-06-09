'use strict';

var utils = require('../utils/writer.js');
var Indemnities = require('../service/IndemnitiesService');

module.exports.addEnrollment = function addEnrollment (req, res, next) {
  var contentType = req.swagger.params['Content-Type'].value;
  var accept = req.swagger.params['Accept'].value;
  var accountId = req.swagger.params['Account-Id'].value;
  var accountId2 = req.swagger.params['accountId'].value;
  var body = req.swagger.params['body'].value;
  Indemnities.addEnrollment(contentType,accept,accountId,accountId2,body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.addIndemnity = function addIndemnity (req, res, next) {
  var contentType = req.swagger.params['Content-Type'].value;
  var accept = req.swagger.params['Accept'].value;
  var accountId = req.swagger.params['Account-Id'].value;
  var body = req.swagger.params['body'].value;
  Indemnities.addIndemnity(contentType,accept,accountId,body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getIndemnities = function getIndemnities (req, res, next) {
  var contentType = req.swagger.params['Content-Type'].value;
  var accept = req.swagger.params['Accept'].value;
  var accountId = req.swagger.params['Account-Id'].value;
  Indemnities.getIndemnities(contentType,accept,accountId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
