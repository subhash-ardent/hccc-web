'use strict';


/**
 * Retrieve teacher by teacher Id
 *
 * contentType String The MediaType of the request content
 * accept String The MediaType of the response content
 * accountId String Unique identifier of the devotee's (user's) account
 * teacherId String Id of the teacher to be retrieved
 * returns RetrieveTeacherResponse
 **/
exports.getTeacherById = function(contentType,accept,accountId,teacherId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "teacher" : {
    "accountId" : "accountId",
    "teacherEmail" : "teacherEmail",
    "teacherId" : "teacherId",
    "teacherName" : {
      "firstName" : "firstName",
      "lastName" : "lastName",
      "middleName" : "middleName"
    },
    "teacherPhoneNumber" : "teacherPhoneNumber"
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
 * accountId String Unique identifier of the devotee's (user's) account
 * returns RetrieveTeachersListResponse
 **/
exports.getTeachers = function(contentType,accept,accountId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "teachers" : [ {
    "accountId" : "accountId",
    "teacherEmail" : "teacherEmail",
    "teacherId" : "teacherId",
    "teacherName" : {
      "firstName" : "firstName",
      "lastName" : "lastName",
      "middleName" : "middleName"
    },
    "teacherPhoneNumber" : "teacherPhoneNumber"
  }, {
    "accountId" : "accountId",
    "teacherEmail" : "teacherEmail",
    "teacherId" : "teacherId",
    "teacherName" : {
      "firstName" : "firstName",
      "lastName" : "lastName",
      "middleName" : "middleName"
    },
    "teacherPhoneNumber" : "teacherPhoneNumber"
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
 * accountId String Unique identifier of the devotee's (user's) account
 * body RegisterTeacherRequest 
 * returns RetrieveTeacherResponse
 **/
exports.registerTeacher = function(contentType,accept,accountId,body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "teacher" : {
    "accountId" : "accountId",
    "teacherEmail" : "teacherEmail",
    "teacherId" : "teacherId",
    "teacherName" : {
      "firstName" : "firstName",
      "lastName" : "lastName",
      "middleName" : "middleName"
    },
    "teacherPhoneNumber" : "teacherPhoneNumber"
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

