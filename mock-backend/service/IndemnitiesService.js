'use strict';


/**
 * Add a new enrollment to the system
 *
 * contentType String The MediaType of the request content
 * accept String The MediaType of the response content
 * userId String Unique identifier of the user initiating the call
 * userName String Id of the account to be retrieved
 * body CreateEnrollmentRequest 
 * returns RetrieveEnrollmentResponse
 **/
exports.addEnrollment = function(contentType,accept,userId,userName,body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "enrollment" : {
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
 * userId String Unique identifier of the user initiating the call
 * body CreateIndemnityRequest 
 * returns RetrieveIndemnityResponse
 **/
exports.addIndemnity = function(contentType,accept,userId,body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "indemnity" : {
    "guardianName" : {
      "firstName" : "firstName",
      "lastName" : "lastName",
      "middleName" : "middleName"
    },
    "userName" : "userName",
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
 * userId String Unique identifier of the user initiating the call
 * returns RetrieveIndemnitiesListResponse
 **/
exports.getIndemnities = function(contentType,accept,userId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "indemnities" : [ {
    "guardianName" : {
      "firstName" : "firstName",
      "lastName" : "lastName",
      "middleName" : "middleName"
    },
    "userName" : "userName",
    "participantName" : {
      "firstName" : "firstName",
      "lastName" : "lastName",
      "middleName" : "middleName"
    },
    "indemnityFormVersion" : "indemnityFormVersion"
  }, {
    "guardianName" : {
      "firstName" : "firstName",
      "lastName" : "lastName",
      "middleName" : "middleName"
    },
    "userName" : "userName",
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

