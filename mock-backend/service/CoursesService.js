'use strict';


/**
 * Add a new course to the catalogue
 *
 * contentType String The MediaType of the request content
 * accept String The MediaType of the response content
 * accountId String Unique identifier of the devotee's (user's) account
 * body CreateCourseRequest 
 * returns RetrieveCourseResponse
 **/
exports.addCourse = function(contentType,accept,accountId,body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "course" : {
    "courseEndTime" : "courseEndTime",
    "slots" : 0,
    "courseVenue" : "courseVenue",
    "teachers" : [ "teachers", "teachers" ],
    "imageURL" : "imageURL",
    "flyerURL" : "flyerURL",
    "courseStartTime" : "courseStartTime",
    "ageRestrictions" : "ageRestrictions",
    "courseId" : "courseId",
    "courseDays" : "courseDays",
    "courseRemarks" : "courseRemarks",
    "tags" : "tags"
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
 * accountId String Unique identifier of the devotee's (user's) account
 * courseId String Id of the course to be retrieved
 * returns RetrieveCourseResponse
 **/
exports.getCourseById = function(contentType,accept,accountId,courseId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "course" : {
    "courseEndTime" : "courseEndTime",
    "slots" : 0,
    "courseVenue" : "courseVenue",
    "teachers" : [ "teachers", "teachers" ],
    "imageURL" : "imageURL",
    "flyerURL" : "flyerURL",
    "courseStartTime" : "courseStartTime",
    "ageRestrictions" : "ageRestrictions",
    "courseId" : "courseId",
    "courseDays" : "courseDays",
    "courseRemarks" : "courseRemarks",
    "tags" : "tags"
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
 * accountId String Unique identifier of the devotee's (user's) account
 * tags String Tags to be used as filter - comma seperated list of tags (optional)
 * returns RetrieveCoursesListResponse
 **/
exports.getCourses = function(contentType,accept,accountId,tags) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "courses" : [ {
    "courseEndTime" : "courseEndTime",
    "slots" : 0,
    "courseVenue" : "courseVenue",
    "teachers" : [ "teachers", "teachers" ],
    "imageURL" : "imageURL",
    "flyerURL" : "flyerURL",
    "courseStartTime" : "courseStartTime",
    "ageRestrictions" : "ageRestrictions",
    "courseId" : "courseId",
    "courseDays" : "courseDays",
    "courseRemarks" : "courseRemarks",
    "tags" : "tags"
  }, {
    "courseEndTime" : "courseEndTime",
    "slots" : 0,
    "courseVenue" : "courseVenue",
    "teachers" : [ "teachers", "teachers" ],
    "imageURL" : "imageURL",
    "flyerURL" : "flyerURL",
    "courseStartTime" : "courseStartTime",
    "ageRestrictions" : "ageRestrictions",
    "courseId" : "courseId",
    "courseDays" : "courseDays",
    "courseRemarks" : "courseRemarks",
    "tags" : "tags"
  } ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

