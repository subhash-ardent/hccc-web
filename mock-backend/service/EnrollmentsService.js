'use strict';


/**
 * Retrieve enrollments from the system. Only enrollments belonging to the requesting user account will be returned. User Account information is available in the header.
 *
 * contentType String The MediaType of the request content
 * accept String The MediaType of the response content
 * userId String Unique identifier of the user initiating the call
 * userName String Id of the account to be retrieved
 * returns RetrieveEnrollmentsListResponse
 **/
exports.getEnrollments = function(contentType,accept,userId,userName) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "enrollment" : [ {
    "enrollmentId" : "enrollmentId",
    "guardianName" : {
      "firstName" : "firstName",
      "lastName" : "lastName",
      "middleName" : "middleName"
    },
    "indemnityId" : "indemnityId",
    "userName" : "userName",
    "participantName" : {
      "firstName" : "firstName",
      "lastName" : "lastName",
      "middleName" : "middleName"
    },
    "isParticipantUnder18" : true
  }, {
    "enrollmentId" : "enrollmentId",
    "guardianName" : {
      "firstName" : "firstName",
      "lastName" : "lastName",
      "middleName" : "middleName"
    },
    "indemnityId" : "indemnityId",
    "userName" : "userName",
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

