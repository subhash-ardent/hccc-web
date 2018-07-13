'use strict';

const teachers = [ {
  "profilePictureURL" : "http://www.livermoretemple.org/hints/images/Priests/THEJESVI.jpg",
  "skillSet" : [ "Krishna yajurvedam", "Pancha Rathra Agamam" ],
  "indemnitySigned" : true,
  "salutation" : "Pdt",
  "identityVerified" : true,
  "account" : {
    "phoneNumber" : "1234567890",
    "roles" : [ "teacher", "devotee" ],
    "name" : {
      "firstName" : "Sampath",
      "lastName" : "Sridharan"
    },
    "userName" : "ss",
    "email" : "ss@livermoretemple.org"
  },
  "backgroundVerified" : true
}, {
  "profilePictureURL" : "http://www.livermoretemple.org/hints/images/Priests/KK.jpg",
  "skillSet" : [ "Vaideekam", "Vishnu Agamas" ],
  "indemnitySigned" : true,
  "salutation" : "Pdt",
  "identityVerified" : true,
  "account" : {
    "phoneNumber" : "1234567890",
    "roles" : [ "teacher", "devotee" ],
    "name" : {
      "firstName" : "Ramanujan",
      "lastName" : "Kannan"
    },
    "userName" : "rk",
    "email" : "rk@livermoretemple.org"
  },
  "backgroundVerified" : true
},
  {
    "profilePictureURL" : "http://www.livermoretemple.org/hints/images/Priests/DPK.jpg",
    "skillSet" : [ "Archaka Pravesa", "Pratishanta Vaikanasa Agama " ],
    "indemnitySigned" : true,
    "salutation" : "Pdt",
    "identityVerified" : true,
    "account" : {
      "phoneNumber" : "1234567890",
      "roles" : [ "teacher", "devotee" ],
      "name" : {
        "firstName" : "Divi",
        "middleName" : "Pawan",
        "lastName" : "Kumar"
      },
      "userName" : "dpk",
      "email" : "dpk@livermoretemple.org"
    },
    "backgroundVerified" : true
  },
  {
    "profilePictureURL" : "http://www.livermoretemple.org/hints/images/Priests/SRINIVASAB.jpg",
    "skillSet" : [ "Vaideekam", "Vishnu Agamas" ],
    "indemnitySigned" : true,
    "salutation" : "Pdt",
    "identityVerified" : true,
    "account" : {
      "phoneNumber" : "1234567890",
      "roles" : [ "teacher", "devotee" ],
      "name" : {
        "firstName" : "Sridhar",
        "middleName" : "S",
        "lastName" : "Bhattar"
      },
      "userName" : "ssb",
      "email" : "ssb@livermoretemple.org"
    },
    "backgroundVerified" : true
  },
  {
    "profilePictureURL" : "http://livermoretemple.org/hints/atirudram/images/p3.png",
    "skillSet" : [ "Bhagavath Gita", "Yoga" ],
    "indemnitySigned" : true,
    "salutation" : "Dr",
    "identityVerified" : true,
    "account" : {
      "phoneNumber" : "1234567890",
      "roles" : [ "teacher", "devotee" ],
      "name" : {
        "firstName" : "Kamala",
        "lastName" : "Shankar"
      },
      "userName" : "kamala",
      "email" : "kamala@livermoretemple.org"
    },
    "backgroundVerified" : true
  },
  {
    "profilePictureURL" : "http://livermoretemple.org/hints/atirudram/images/p1.png",
    "skillSet" : [ "Vishnu Sahasranaamam", "Narayaneeyam" ],
    "indemnitySigned" : true,
    "salutation" : "Smt",
    "identityVerified" : true,
    "account" : {
      "phoneNumber" : "1234567890",
      "roles" : [ "teacher", "devotee" ],
      "name" : {
        "firstName" : "Madhu",
        "lastName" : "Ramesh"
      },
      "userName" : "madhu",
      "email" : "madhu@livermoretemple.org"
    },
    "backgroundVerified" : true
  }];

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
    examples['application/json'] = {teachers};
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

