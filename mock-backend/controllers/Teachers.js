'use strict';

var utils = require('../utils/writer.js');
var Teachers = require('../service/TeachersService');

module.exports.getTeacherById = function getTeacherById (req, res, next) {
  var contentType = req.swagger.params['Content-Type'].value;
  var accept = req.swagger.params['Accept'].value;
  var accountId = req.swagger.params['Account-Id'].value;
  var teacherId = req.swagger.params['teacherId'].value;
  Teachers.getTeacherById(contentType,accept,accountId,teacherId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getTeachers = function getTeachers (req, res, next) {
  var contentType = req.swagger.params['Content-Type'].value;
  var accept = req.swagger.params['Accept'].value;
  var accountId = req.swagger.params['Account-Id'].value;
  Teachers.getTeachers(contentType,accept,accountId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.registerTeacher = function registerTeacher (req, res, next) {
  var contentType = req.swagger.params['Content-Type'].value;
  var accept = req.swagger.params['Accept'].value;
  var accountId = req.swagger.params['Account-Id'].value;
  var body = req.swagger.params['body'].value;
  Teachers.registerTeacher(contentType,accept,accountId,body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
