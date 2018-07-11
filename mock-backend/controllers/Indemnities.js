'use strict';

var utils = require('../utils/writer.js');
var Indemnities = require('../service/IndemnitiesService');

module.exports.addIndemnity = function addIndemnity (req, res, next) {
  var contentType = req.swagger.params['Content-Type'].value;
  var accept = req.swagger.params['Accept'].value;
  var userName = req.swagger.params['User-Name'].value;
  var body = req.swagger.params['body'].value;
  Indemnities.addIndemnity(contentType,accept,userName,body)
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
  var userName = req.swagger.params['User-Name'].value;
  var familyMemberId = req.swagger.params['familyMemberId'].value;
  var indemnityFormId = req.swagger.params['indemnityFormId'].value;
  Indemnities.getIndemnities(contentType,accept,userName,familyMemberId,indemnityFormId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
