'use strict';

var utils = require('../utils/writer.js');
var Enrollments = require('../service/EnrollmentsService');

module.exports.addEnrollment = function addEnrollment (req, res, next) {
  var contentType = req.swagger.params['Content-Type'].value;
  var accept = req.swagger.params['Accept'].value;
  var userName = req.swagger.params['User-Name'].value;
  var userName2 = req.swagger.params['userName'].value;
  var body = req.swagger.params['body'].value;
  Enrollments.addEnrollment(contentType,accept,userName,userName2,body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getEnrollments = function getEnrollments (req, res, next) {
  var contentType = req.swagger.params['Content-Type'].value;
  var accept = req.swagger.params['Accept'].value;
  var userName = req.swagger.params['User-Name'].value;
  var userName2 = req.swagger.params['userName'].value;
  Enrollments.getEnrollments(contentType,accept,userName,userName2)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
