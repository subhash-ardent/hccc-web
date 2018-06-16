'use strict';


/**
 * Add a new course to the catalogue
 *
 * contentType String The MediaType of the request content
 * accept String The MediaType of the response content
 * userId String Unique identifier of the user initiating the call
 * body CreateCourseRequest 
 * returns RetrieveCourseResponse
 **/
exports.addCourse = function(contentType,accept,userId,body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "course" : {
    "courseEndTime" : "courseEndTime",
    "courseStartTime" : "courseStartTime",
    "courseEndDate" : "courseEndDate",
    "ageRestrictions" : "ageRestrictions",
    "courseStartDate" : "courseStartDate",
    "tags" : [ "tags", "tags" ],
    "slots" : 0,
    "courseVenue" : "courseVenue",
    "teachers" : [ "teachers", "teachers" ],
    "imageURL" : "imageURL",
    "flyerURL" : "flyerURL",
    "courseId" : "courseId",
    "courseDays" : "courseDays",
    "courseRemarks" : "courseRemarks"
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Retrieve course by Course Id
 *
 * contentType String The MediaType of the request content
 * accept String The MediaType of the response content
 * userId String Unique identifier of the user initiating the call
 * courseId String Id of the course to be retrieved
 * returns RetrieveCourseResponse
 **/
exports.getCourseById = function(contentType,accept,userId,courseId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "course" : {
    "courseEndTime" : "courseEndTime",
    "courseStartTime" : "courseStartTime",
    "courseEndDate" : "courseEndDate",
    "ageRestrictions" : "ageRestrictions",
    "courseStartDate" : "courseStartDate",
    "tags" : [ "tags", "tags" ],
    "slots" : 0,
    "courseVenue" : "courseVenue",
    "teachers" : [ "teachers", "teachers" ],
    "imageURL" : "imageURL",
    "flyerURL" : "flyerURL",
    "courseId" : "courseId",
    "courseDays" : "courseDays",
    "courseRemarks" : "courseRemarks"
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Retrieve courses from the catalogue
 *
 * contentType String The MediaType of the request content
 * accept String The MediaType of the response content
 * userId String Unique identifier of the user initiating the call
 * tags String Tags to be used as filter - comma seperated list of tags (optional)
 * returns RetrieveCoursesListResponse
 **/
exports.getCourses = function(contentType,accept,userId,tags) {
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

