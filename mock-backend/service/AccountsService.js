'use strict';


/**
 * Retrieve accounts from the system
 *
 * contentType String The MediaType of the request content
 * accept String The MediaType of the response content
 * userId String Unique identifier of the user initiating the call
 * userName String If a userName is passed in query string, the results will be filtered by accounts user name (optional)
 * phoneNumber String If a phone number is passed in query string, the results will be filtered by accounts mobile number (optional)
 * role String If a role is passed in query string, the results will be filtered by roles (optional)
 * returns RetrieveAccountsListResponse
 **/
exports.getAccounts = function(contentType,accept,userId,userName,phoneNumber,role) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "accounts" : [ {
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
  }, {
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
  } ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

