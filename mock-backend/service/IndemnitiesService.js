'use strict';


/**
 * Add a new enrollment to the system
 *
 * contentType String The MediaType of the request content
 * accept String The MediaType of the response content
 * accountId String Unique identifier of the devotee's (user's) account
 * accountId2 String Id of the account to be retrieved
 * body CreateEnrollmentRequest 
 * returns RetrieveEnrollmentResponse
 **/
exports.addEnrollment = function(contentType,accept,accountId,accountId2,body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "enrollment" : {
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
 * Add a new indemnity to the system
 *
 * contentType String The MediaType of the request content
 * accept String The MediaType of the response content
 * accountId String Unique identifier of the devotee's (user's) account
 * body CreateIndemnityRequest 
 * returns RetrieveIndemnityResponse
 **/
exports.addIndemnity = function(contentType,accept,accountId,body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "indemnity" : {
    "guardianFirstName" : {
      "firstName" : "firstName",
      "lastName" : "lastName",
      "middleName" : "middleName"
    },
    "AccountId" : "AccountId",
    "participantDOB" : "participantDOB",
    "participantName" : {
      "firstName" : "firstName",
      "lastName" : "lastName",
      "middleName" : "middleName"
    },
    "indemnityFormVersion" : "indemnityFormVersion"
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
 * Retrieve indemnities from the system. Only indemnities belonging to the requesting user account will be returned. User Account information is available in the header.
 *
 * contentType String The MediaType of the request content
 * accept String The MediaType of the response content
 * accountId String Unique identifier of the devotee's (user's) account
 * returns RetrieveIndemnitiesListResponse
 **/
exports.getIndemnities = function(contentType,accept,accountId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "indemnities" : [ {
    "guardianFirstName" : {
      "firstName" : "firstName",
      "lastName" : "lastName",
      "middleName" : "middleName"
    },
    "AccountId" : "AccountId",
    "participantDOB" : "participantDOB",
    "participantName" : {
      "firstName" : "firstName",
      "lastName" : "lastName",
      "middleName" : "middleName"
    },
    "indemnityFormVersion" : "indemnityFormVersion"
  }, {
    "guardianFirstName" : {
      "firstName" : "firstName",
      "lastName" : "lastName",
      "middleName" : "middleName"
    },
    "AccountId" : "AccountId",
    "participantDOB" : "participantDOB",
    "participantName" : {
      "firstName" : "firstName",
      "lastName" : "lastName",
      "middleName" : "middleName"
    },
    "indemnityFormVersion" : "indemnityFormVersion"
  } ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

