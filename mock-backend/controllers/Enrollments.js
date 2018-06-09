'use strict';

var utils = require('../utils/writer.js');
var Enrollments = require('../service/EnrollmentsService');

module.exports.getEnrollments = function getEnrollments (req, res, next) {
  var contentType = req.swagger.params['Content-Type'].value;
  var accept = req.swagger.params['Accept'].value;
  var accountId = req.swagger.params['Account-Id'].value;
  var accountId2 = req.swagger.params['accountId'].value;
  Enrollments.getEnrollments(contentType,accept,accountId,accountId2)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
