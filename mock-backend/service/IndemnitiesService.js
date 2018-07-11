'use strict';


/**
 * Adds a new indemnity for a student in the system
 *
 * contentType String The MediaType of the request content
 * accept String The MediaType of the response content
 * userName String Unique identifier of the devotee's account
 * body IndemnityObject 
 * returns IndemnityObject
 **/
exports.addIndemnity = function(contentType,accept,userName,body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "signedFor" : {
    "firstName" : "firstName",
    "lastName" : "lastName",
    "middleName" : "middleName"
  },
  "signedBy" : {
    "firstName" : "firstName",
    "lastName" : "lastName",
    "middleName" : "middleName"
  },
  "indemnityForm" : {
    "indemnityFormTitle" : "indemnityFormTitle",
    "indemnityFormId" : "indemnityFormId",
    "indemnityFormVersion" : "indemnityFormVersion",
    "templateURL" : "templateURL"
  },
  "signedOn" : "signedOn",
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
 * Retrieves indemnities from the system. 
 * Only indemnities belonging to the requesting user account will be returned. User Account information is available in the header.
 *
 * contentType String The MediaType of the request content
 * accept String The MediaType of the response content
 * userName String Unique identifier of the devotee's account
 * familyMemberId String Identifier of the family member (optional)
 * indemnityFormId String Identifier of the Indemnity Form (optional)
 * returns RetrieveIndemnitiesListResponse
 **/
exports.getIndemnities = function(contentType,accept,userName,familyMemberId,indemnityFormId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "indemnities" : [ {
    "signedFor" : {
      "firstName" : "firstName",
      "lastName" : "lastName",
      "middleName" : "middleName"
    },
    "signedBy" : {
      "firstName" : "firstName",
      "lastName" : "lastName",
      "middleName" : "middleName"
    },
    "indemnityForm" : {
      "indemnityFormTitle" : "indemnityFormTitle",
      "indemnityFormId" : "indemnityFormId",
      "indemnityFormVersion" : "indemnityFormVersion",
      "templateURL" : "templateURL"
    },
    "signedOn" : "signedOn",
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
    }
  }, {
    "signedFor" : {
      "firstName" : "firstName",
      "lastName" : "lastName",
      "middleName" : "middleName"
    },
    "signedBy" : {
      "firstName" : "firstName",
      "lastName" : "lastName",
      "middleName" : "middleName"
    },
    "indemnityForm" : {
      "indemnityFormTitle" : "indemnityFormTitle",
      "indemnityFormId" : "indemnityFormId",
      "indemnityFormVersion" : "indemnityFormVersion",
      "templateURL" : "templateURL"
    },
    "signedOn" : "signedOn",
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
    }
  } ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

