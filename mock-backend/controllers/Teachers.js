'use strict';

var utils = require('../utils/writer.js');
var Teachers = require('../../mock-data/TeachersService');

module.exports.getTeacherById = function getTeacherById (req, res, next) {
  var contentType = req.swagger.params['Content-Type'].value;
  var accept = req.swagger.params['Accept'].value;
  var userName = req.swagger.params['User-Name'].value;
  var teacherId = req.swagger.params['teacherId'].value;
  Teachers.getTeacherById(contentType,accept,userName,teacherId)
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
  var userName = req.swagger.params['User-Name'].value;
  Teachers.getTeachers(contentType,accept,userName)
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
  var userName = req.swagger.params['User-Name'].value;
  var body = req.swagger.params['body'].value;
  Teachers.registerTeacher(contentType,accept,userName,body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
