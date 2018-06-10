'use strict';


/**
 * Retrieve accounts from the system
 *
 * contentType String The MediaType of the request content
 * accept String The MediaType of the response content
 * accountId String Unique identifier of the devotee's (user's) account
 * accountId2 String If a accountId is passed in query string, the results will be filtered by accounts user name (optional)
 * phoneNumber String If a phone number is passed in query string, the results will be filtered by accounts mobile number (optional)
 * returns RetrieveAccountsListResponse
 **/
exports.getAccounts = function(contentType,accept,accountId,accountId2,phoneNumber) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "accounts" : [ {
    "accountId" : "accountId",
    "phoneNumber" : "phoneNumber",
    "roles" : [ "roles", "roles" ],
    "familyMembers" : [ {
      "phoneNumber" : "phoneNumber",
      "name" : {
        "firstName" : "firstName",
        "lastName" : "lastName",
        "middleName" : "middleName"
      },
      "dateOfBirth" : "dateOfBirth",
      "email" : "email"
    }, {
      "phoneNumber" : "phoneNumber",
      "name" : {
        "firstName" : "firstName",
        "lastName" : "lastName",
        "middleName" : "middleName"
      },
      "dateOfBirth" : "dateOfBirth",
      "email" : "email"
    } ],
    "email" : "email"
  }, {
    "accountId" : "accountId",
    "phoneNumber" : "phoneNumber",
    "roles" : [ "roles", "roles" ],
    "familyMembers" : [ {
      "phoneNumber" : "phoneNumber",
      "name" : {
        "firstName" : "firstName",
        "lastName" : "lastName",
        "middleName" : "middleName"
      },
      "dateOfBirth" : "dateOfBirth",
      "email" : "email"
    }, {
      "phoneNumber" : "phoneNumber",
      "name" : {
        "firstName" : "firstName",
        "lastName" : "lastName",
        "middleName" : "middleName"
      },
      "dateOfBirth" : "dateOfBirth",
      "email" : "email"
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

