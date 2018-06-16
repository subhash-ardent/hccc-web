'use strict';

var utils = require('../utils/writer.js');
var Indemnities = require('../service/IndemnitiesService');

module.exports.addEnrollment = function addEnrollment (req, res, next) {
  var contentType = req.swagger.params['Content-Type'].value;
  var accept = req.swagger.params['Accept'].value;
  var userId = req.swagger.params['User-Id'].value;
  var userName = req.swagger.params['userName'].value;
  var body = req.swagger.params['body'].value;
  Indemnities.addEnrollment(contentType,accept,userId,userName,body)
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
  var userId = req.swagger.params['User-Id'].value;
  var body = req.swagger.params['body'].value;
  Indemnities.addIndemnity(contentType,accept,userId,body)
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
  var userId = req.swagger.params['User-Id'].value;
  Indemnities.getIndemnities(contentType,accept,userId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
