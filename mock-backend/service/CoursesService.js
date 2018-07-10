'use strict';


/**
 * Adds a new course to the catalogue
 *
 * contentType String The MediaType of the request content
 * accept String The MediaType of the response content
 * userName String Unique identifier of the devotee's account
 * body CourseObject 
 * returns CourseObject
 **/
exports.addCourse = function(contentType,accept,userName,body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "courseEndTime" : "courseEndTime",
  "courseStartTime" : "courseStartTime",
  "courseEndDate" : "courseEndDate",
  "ageRestrictions" : "ageRestrictions",
  "courseStartDate" : "courseStartDate",
  "tags" : [ "tags", "tags" ],
  "courseName" : "courseName",
  "slots" : 0,
  "courseVenue" : "courseVenue",
  "teachers" : [ "teachers", "teachers" ],
  "imageURL" : "imageURL",
  "flyerURL" : "flyerURL",
  "courseId" : "courseId",
  "courseDays" : "courseDays",
  "courseRemarks" : "courseRemarks"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Retrieves course by Course Id
 *
 * contentType String The MediaType of the request content
 * accept String The MediaType of the response content
 * userName String Unique identifier of the devotee's account
 * courseId String Id of the course to be retrieved
 * returns CourseObject
 **/
exports.getCourseById = function(contentType,accept,userName,courseId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "courseEndTime" : "courseEndTime",
  "courseStartTime" : "courseStartTime",
  "courseEndDate" : "courseEndDate",
  "ageRestrictions" : "ageRestrictions",
  "courseStartDate" : "courseStartDate",
  "tags" : [ "tags", "tags" ],
  "courseName" : "courseName",
  "slots" : 0,
  "courseVenue" : "courseVenue",
  "teachers" : [ "teachers", "teachers" ],
  "imageURL" : "imageURL",
  "flyerURL" : "flyerURL",
  "courseId" : "courseId",
  "courseDays" : "courseDays",
  "courseRemarks" : "courseRemarks"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Retrieves courses from the catalogue
 *
 * contentType String The MediaType of the request content
 * accept String The MediaType of the response content
 * userName String Unique identifier of the devotee's account
 * tags String Tags to be used as filter - comma seperated list of tags (optional)
 * returns RetrieveCoursesListResponse
 **/
exports.getCourses = function(contentType,accept,userName,tags) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "courses" : [ {
    "courseEndTime" : "courseEndTime",
    "courseStartTime" : "courseStartTime",
    "courseEndDate" : "courseEndDate",
    "ageRestrictions" : "ageRestrictions",
    "courseStartDate" : "courseStartDate",
    "tags" : [ "tags", "tags" ],
    "courseName" : "courseName",
    "slots" : 0,
    "courseVenue" : "courseVenue",
    "teachers" : [ "teachers", "teachers" ],
    "imageURL" : "imageURL",
    "flyerURL" : "flyerURL",
    "courseId" : "courseId",
    "courseDays" : "courseDays",
    "courseRemarks" : "courseRemarks"
  }, {
    "courseEndTime" : "courseEndTime",
    "courseStartTime" : "courseStartTime",
    "courseEndDate" : "courseEndDate",
    "ageRestrictions" : "ageRestrictions",
    "courseStartDate" : "courseStartDate",
    "tags" : [ "tags", "tags" ],
    "courseName" : "courseName",
    "slots" : 0,
    "courseVenue" : "courseVenue",
    "teachers" : [ "teachers", "teachers" ],
    "imageURL" : "imageURL",
    "flyerURL" : "flyerURL",
    "courseId" : "courseId",
    "courseDays" : "courseDays",
    "courseRemarks" : "courseRemarks"
  } ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

