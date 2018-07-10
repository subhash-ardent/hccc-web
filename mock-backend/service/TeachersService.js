'use strict';


/**
 * Retrieves teacher by teacher Id
 *
 * contentType String The MediaType of the request content
 * accept String The MediaType of the response content
 * userName String Unique identifier of the devotee's account
 * teacherId String Id of the teacher to be retrieved
 * returns TeacherObject
 **/
exports.getTeacherById = function(contentType,accept,userName,teacherId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "profilePictureURL" : "profilePictureURL",
  "skillSet" : [ "skillSet", "skillSet" ],
  "indemnitySigned" : true,
  "salutation" : "salutation",
  "identityVerified" : true,
  "account" : {
    "phoneNumber" : "phoneNumber",
    "roles" : [ "roles", "roles" ],
    "name" : {
      "firstName" : "firstName",
      "lastName" : "lastName",
      "middleName" : "middleName"
    },
    "dateOfBirth" : "dateOfBirth",
    "userName" : "userName",
    "familyMembers" : [ {
      "name" : {
        "firstName" : "firstName",
        "lastName" : "lastName",
        "middleName" : "middleName"
      },
      "dateOfBirth" : "dateOfBirth"
    }, {
      "name" : {
        "firstName" : "firstName",
        "lastName" : "lastName",
        "middleName" : "middleName"
      },
      "dateOfBirth" : "dateOfBirth"
    } ],
    "email" : "email"
  },
  "backgroundVerified" : true
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Retrieves list of teachers
 *
 * contentType String The MediaType of the request content
 * accept String The MediaType of the response content
 * userName String Unique identifier of the devotee's account
 * returns RetrieveTeachersListResponse
 **/
exports.getTeachers = function(contentType,accept,userName) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "teachers" : [ {
    "profilePictureURL" : "profilePictureURL",
    "skillSet" : [ "skillSet", "skillSet" ],
    "indemnitySigned" : true,
    "salutation" : "salutation",
    "identityVerified" : true,
    "account" : {
      "phoneNumber" : "phoneNumber",
      "roles" : [ "roles", "roles" ],
      "name" : {
        "firstName" : "firstName",
        "lastName" : "lastName",
        "middleName" : "middleName"
      },
      "dateOfBirth" : "dateOfBirth",
      "userName" : "userName",
      "familyMembers" : [ {
        "name" : {
          "firstName" : "firstName",
          "lastName" : "lastName",
          "middleName" : "middleName"
        },
        "dateOfBirth" : "dateOfBirth"
      }, {
        "name" : {
          "firstName" : "firstName",
          "lastName" : "lastName",
          "middleName" : "middleName"
        },
        "dateOfBirth" : "dateOfBirth"
      } ],
      "email" : "email"
    },
    "backgroundVerified" : true
  }, {
    "profilePictureURL" : "profilePictureURL",
    "skillSet" : [ "skillSet", "skillSet" ],
    "indemnitySigned" : true,
    "salutation" : "salutation",
    "identityVerified" : true,
    "account" : {
      "phoneNumber" : "phoneNumber",
      "roles" : [ "roles", "roles" ],
      "name" : {
        "firstName" : "firstName",
        "lastName" : "lastName",
        "middleName" : "middleName"
      },
      "dateOfBirth" : "dateOfBirth",
      "userName" : "userName",
      "familyMembers" : [ {
        "name" : {
          "firstName" : "firstName",
          "lastName" : "lastName",
          "middleName" : "middleName"
        },
        "dateOfBirth" : "dateOfBirth"
      }, {
        "name" : {
          "firstName" : "firstName",
          "lastName" : "lastName",
          "middleName" : "middleName"
        },
        "dateOfBirth" : "dateOfBirth"
      } ],
      "email" : "email"
    },
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
 * Adds a new teacher to the system
 *
 * contentType String The MediaType of the request content
 * accept String The MediaType of the response content
 * userName String Unique identifier of the devotee's account
 * body TeacherObject 
 * returns TeacherObject
 **/
exports.registerTeacher = function(contentType,accept,userName,body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "profilePictureURL" : "profilePictureURL",
  "skillSet" : [ "skillSet", "skillSet" ],
  "indemnitySigned" : true,
  "salutation" : "salutation",
  "identityVerified" : true,
  "account" : {
    "phoneNumber" : "phoneNumber",
    "roles" : [ "roles", "roles" ],
    "name" : {
      "firstName" : "firstName",
      "lastName" : "lastName",
      "middleName" : "middleName"
    },
    "dateOfBirth" : "dateOfBirth",
    "userName" : "userName",
    "familyMembers" : [ {
      "name" : {
        "firstName" : "firstName",
        "lastName" : "lastName",
        "middleName" : "middleName"
      },
      "dateOfBirth" : "dateOfBirth"
    }, {
      "name" : {
        "firstName" : "firstName",
        "lastName" : "lastName",
        "middleName" : "middleName"
      },
      "dateOfBirth" : "dateOfBirth"
    } ],
    "email" : "email"
  },
  "backgroundVerified" : true
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

