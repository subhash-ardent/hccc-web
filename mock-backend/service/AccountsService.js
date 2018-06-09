'use strict';


/**
 * Retrieve accounts from the system
 *
 * contentType String The MediaType of the request content
 * accept String The MediaType of the response content
 * accountId String Unique identifier of the devotee's (user's) account
 * mobileNumber String If a user name is passed in query string, the results will be filtered by accounts user name (optional)
 * userName String If a mobile number is passed in query string, the results will be filtered by accounts mobile number (optional)
 * returns RetrieveAccountsListResponse
 **/
exports.getAccounts = function(contentType,accept,accountId,mobileNumber,userName) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "accounts" : [ {
    "accountId" : "accountId",
    "mobileNumber" : "mobileNumber",
    "familyMembers" : [ {
      "firstName" : "firstName",
      "lastName" : "lastName",
      "middleName" : "middleName"
    }, {
      "firstName" : "firstName",
      "lastName" : "lastName",
      "middleName" : "middleName"
    } ]
  }, {
    "accountId" : "accountId",
    "mobileNumber" : "mobileNumber",
    "familyMembers" : [ {
      "firstName" : "firstName",
      "lastName" : "lastName",
      "middleName" : "middleName"
    }, {
      "firstName" : "firstName",
      "lastName" : "lastName",
      "middleName" : "middleName"
    } ]
  } ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

