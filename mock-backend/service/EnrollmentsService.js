'use strict';


/**
 * Retrieve enrollments from the system. Only enrollments belonging to the requesting user account will be returned. User Account information is available in the header.
 *
 * contentType String The MediaType of the request content
 * accept String The MediaType of the response content
 * accountId String Unique identifier of the devotee's (user's) account
 * accountId2 String Id of the account to be retrieved
 * returns RetrieveEnrollmentsListResponse
 **/
exports.getEnrollments = function(contentType,accept,accountId,accountId2) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "enrollment" : [ {
    "enrollmentId" : "enrollmentId",
    "accountId" : "accountId",
    "guardianName" : {
      "firstName" : "firstName",
      "lastName" : "lastName",
      "middleName" : "middleName"
    },
    "indemnityId" : "indemnityId",
    "participantName" : {
      "firstName" : "firstName",
      "lastName" : "lastName",
      "middleName" : "middleName"
    },
    "isParticipantUnder18" : true
  }, {
    "enrollmentId" : "enrollmentId",
    "accountId" : "accountId",
    "guardianName" : {
      "firstName" : "firstName",
      "lastName" : "lastName",
      "middleName" : "middleName"
    },
    "indemnityId" : "indemnityId",
    "participantName" : {
      "firstName" : "firstName",
      "lastName" : "lastName",
      "middleName" : "middleName"
    },
    "isParticipantUnder18" : true
  } ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

