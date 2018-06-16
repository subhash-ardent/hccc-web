'use strict';


/**
 * Retrieve teacher by teacher Id
 *
 * contentType String The MediaType of the request content
 * accept String The MediaType of the response content
 * userId String Unique identifier of the user initiating the call
 * teacherId String Id of the teacher to be retrieved
 * returns RetrieveTeacherResponse
 **/
exports.getTeacherById = function(contentType,accept,userId,teacherId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "teacher" : {
    "skillSet" : [ "skillSet", "skillSet" ],
    "indemnitySigned" : true,
    "identityVerified" : true,
    "userName" : "userName",
    "backgroundVerified" : true
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
 * Retrieve list of teachers
 *
 * contentType String The MediaType of the request content
 * accept String The MediaType of the response content
 * userId String Unique identifier of the user initiating the call
 * returns RetrieveTeachersListResponse
 **/
exports.getTeachers = function(contentType,accept,userId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "teachers" : [ {
    "skillSet" : [ "skillSet", "skillSet" ],
    "indemnitySigned" : true,
    "identityVerified" : true,
    "userName" : "userName",
    "backgroundVerified" : true
  }, {
    "skillSet" : [ "skillSet", "skillSet" ],
    "indemnitySigned" : true,
    "identityVerified" : true,
    "userName" : "userName",
    "backgroundVerified" : true
  } ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Add a new teacher to the system
 *
 * contentType String The MediaType of the request content
 * accept String The MediaType of the response content
 * userId String Unique identifier of the user initiating the call
 * body RegisterTeacherRequest 
 * returns RetrieveTeacherResponse
 **/
exports.registerTeacher = function(contentType,accept,userId,body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "teacher" : {
    "skillSet" : [ "skillSet", "skillSet" ],
    "indemnitySigned" : true,
    "identityVerified" : true,
    "userName" : "userName",
    "backgroundVerified" : true
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

