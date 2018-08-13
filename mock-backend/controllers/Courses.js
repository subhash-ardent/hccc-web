'use strict';

var utils = require('../utils/writer.js');
var Courses = require('../../mock-data/CoursesService');

module.exports.addCourse = function addCourse (req, res, next) {
  var contentType = req.swagger.params['Content-Type'].value;
  var accept = req.swagger.params['Accept'].value;
  var userName = req.swagger.params['User-Name'].value;
  var body = req.swagger.params['body'].value;
  Courses.addCourse(contentType,accept,userName,body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response, response.code);
    });
};

module.exports.getCourseById = function getCourseById (req, res, next) {
  var contentType = req.swagger.params['Content-Type'].value;
  var accept = req.swagger.params['Accept'].value;
  var userName = req.swagger.params['User-Name'].value;
  var courseId = req.swagger.params['courseId'].value;
  Courses.getCourseById(contentType,accept,userName,courseId)
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
  var userName = req.swagger.params['User-Name'].value;
  var tags = req.swagger.params['tags'].value;
  Courses.getCourses(contentType,accept,userName,tags)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
