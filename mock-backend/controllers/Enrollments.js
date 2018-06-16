'use strict';

var utils = require('../utils/writer.js');
var Enrollments = require('../service/EnrollmentsService');

module.exports.getEnrollments = function getEnrollments (req, res, next) {
  var contentType = req.swagger.params['Content-Type'].value;
  var accept = req.swagger.params['Accept'].value;
  var userId = req.swagger.params['User-Id'].value;
  var userName = req.swagger.params['userName'].value;
  Enrollments.getEnrollments(contentType,accept,userId,userName)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
