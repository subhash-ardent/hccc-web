'use strict';

var utils = require('../utils/writer.js');
var Courses = require('../service/CoursesService');

module.exports.addCourse = function addCourse (req, res, next) {
  var contentType = req.swagger.params['Content-Type'].value;
  var accept = req.swagger.params['Accept'].value;
  var userId = req.swagger.params['User-Id'].value;
  var body = req.swagger.params['body'].value;
  Courses.addCourse(contentType,accept,userId,body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getCourseById = function getCourseById (req, res, next) {
  var contentType = req.swagger.params['Content-Type'].value;
  var accept = req.swagger.params['Accept'].value;
  var userId = req.swagger.params['User-Id'].value;
  var courseId = req.swagger.params['courseId'].value;
  Courses.getCourseById(contentType,accept,userId,courseId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getCourses = function getCourses (req, res, next) {
  var contentType = req.swagger.params['Content-Type'].value;
  var accept = req.swagger.params['Accept'].value;
  var userId = req.swagger.params['User-Id'].value;
  var tags = req.swagger.params['tags'].value;
  Courses.getCourses(contentType,accept,userId,tags)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
