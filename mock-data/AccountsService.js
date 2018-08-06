'use strict';

//../mock-data

/*

cd ..
rm -rf mock-backend && mkdir mock-backend
swagger-codegen generate -i swagger.json -l nodejs-server -o ./mock-backend/
cd mock-backend
npm install
npm start

 */


const data = {
  allAccounts: [ {
    "userName" : "achutham",
    "phoneNumber" : "1234567890",
    "roles" : [ "Devotee"],
    "email" : "email",
    "dateOfBirth" : "1990-07-12",
    "name" : {
      "firstName" : "Achuthan",
      "lastName" : "Krishna",
      "middleName" : ""
    },
    "familyMembers" : [ {
      "name" : {
        "firstName" : "Sathya",
        "lastName" : "Bhaama",
        "middleName" : ""
      },
      "dateOfBirth" : "1990-12-12"
    }, {
      "name" : {
        "firstName" : "Rukmini",
        "lastName" : "Krishna",
        "middleName" : ""
      },
      "dateOfBirth" : "1990-06-12"
    } ]
  }, {
    "userName" : "Kesavam",
    "phoneNumber" : "9876543210",
    "roles" : [ "Chairman - Youth and Cultural", "Devotee" ],
    "email" : "email",
    "dateOfBirth" : "1990-07-12",
    "name" : {
      "firstName" : "Kesavam",
      "lastName" : "Krishna",
      "middleName" : ""
    },
    "familyMembers" : [ {
      "name" : {
        "firstName" : "Sita",
        "lastName" : "Raman",
        "middleName" : ""
      },
      "dateOfBirth" : "1990-12-12"
    }, {
      "name" : {
        "firstName" : "Radha",
        "lastName" : "Krishna",
        "middleName" : ""
      },
      "dateOfBirth" : "1990-06-12"
    } ]
  }, {
    "userName" : "Narayanam",
    "phoneNumber" : "5678901234",
    "roles" : [ "Teacher", "Devotee" ],
    "email" : "email",
    "dateOfBirth" : "1990-07-12",
    "name" : {
      "firstName" : "Narayanam",
      "lastName" : "Krishna",
      "middleName" : ""
    },
    "familyMembers" : [ {
      "name" : {
        "firstName" : "Lakshmi",
        "lastName" : "Raman",
        "middleName" : ""
      },
      "dateOfBirth" : "1990-12-12"
    }, {
      "name" : {
        "firstName" : "Padma",
        "lastName" : "Krishna",
        "middleName" : ""
      },
      "dateOfBirth" : "1990-06-12"
    } ]
  } ],
  teacher: [ {
    "userName" : "hari",
    "phoneNumber" : "1234567890",
    "roles" : [ "Devotee", "Teacher"],
    "email" : "email",
    "dateOfBirth" : "1990-07-12",
    "name" : {
      "firstName" : "Hari",
      "lastName" : "Krishna",
      "middleName" : ""
    },
  }, {
    "userName" : "govindan",
    "phoneNumber" : "9876543210",
    "roles" : [ "Chairman - Youth and Cultural", "Devotee" ],
    "email" : "email",
    "dateOfBirth" : "1990-07-12",
    "name" : {
      "firstName" : "govindan",
      "lastName" : "Krishna",
      "middleName" : ""
    },
  }, {
    "userName" : "Narayanan",
    "phoneNumber" : "5678901234",
    "roles" : [ "Teacher", "Devotee" ],
    "email" : "email",
    "dateOfBirth" : "1990-07-12",
    "name" : {
      "firstName" : "Narayanan",
      "lastName" : "Krishna",
      "middleName" : ""
    },
  } ],
  yande: [ {
    "userName" : "yande",
    "phoneNumber" : "9876543210",
    "roles" : [ "Chairman - Youth and Cultural", "Devotee" ],
    "email" : "email",
    "dateOfBirth" : "1990-07-12",
    "name" : {
      "firstName" : "Vandhana",
      "lastName" : "Bhanoori",
      "middleName" : ""
    },
    "familyMembers" : [ {
      "name" : {
        "firstName" : "Prabhakar",
        "lastName" : "Bhanoori",
        "middleName" : ""
      },
      "dateOfBirth" : "1990-12-12"
    } ]
  } ],
  devotee: [ {
    "userName" : "devotee",
    "phoneNumber" : "1234567890",
    "roles" : [ "Devotee"],
    "email" : "email",
    "dateOfBirth" : "1990-07-12",
    "name" : {
      "firstName" : "Achuthan",
      "lastName" : "Krishna",
      "middleName" : ""
    },
    "familyMembers" : [ {
      "name" : {
        "firstName" : "Sathya",
        "lastName" : "Bhaama",
        "middleName" : ""
      },
      "dateOfBirth" : "1990-12-12"
    }, {
      "name" : {
        "firstName" : "Rukmini",
        "lastName" : "Krishna",
        "middleName" : ""
      },
      "dateOfBirth" : "1990-06-12"
    } ]
  }],
  "5678901234": [ {
    "userName" : "Narayanam",
    "phoneNumber" : "5678901234",
    "roles" : [ "Teacher", "Devotee" ],
    "email" : "email",
    "dateOfBirth" : "1990-07-12",
    "name" : {
      "firstName" : "Narayanam",
      "lastName" : "Krishna",
      "middleName" : ""
    },
    "familyMembers" : [ {
      "name" : {
        "firstName" : "Lakshmi",
        "lastName" : "Raman",
        "middleName" : ""
      },
      "dateOfBirth" : "1990-12-12"
    }, {
      "name" : {
        "firstName" : "Padma",
        "lastName" : "Krishna",
        "middleName" : ""
      },
      "dateOfBirth" : "1990-06-12"
    } ]
  } ],
  "1234567890": [ {
    "userName" : "srinivasan",
    "phoneNumber" : "5678901234",
    "roles" : [ "Teacher", "Devotee" ],
    "email" : "email",
    "dateOfBirth" : "1990-07-12",
    "name" : {
      "firstName" : "Srinivasan",
      "lastName" : "Venkatesan",
      "middleName" : ""
    },
    "familyMembers" : [ {
      "name" : {
        "firstName" : "Lakshmi",
        "lastName" : "Raman",
        "middleName" : ""
      },
      "dateOfBirth" : "1990-12-12"
    }, {
      "name" : {
        "firstName" : "Padma",
        "lastName" : "Krishna",
        "middleName" : ""
      },
      "dateOfBirth" : "1990-06-12"
    } ]
  } ],
};

exports.getAccounts = function(contentType,accept,accountId,userName,phoneNumber,role) {
  return new Promise(function(resolve, reject) {
    if (userName === 'devotee') {
      resolve(data['devotee']);
    } else if (userName === 'yande') {
      resolve(data['yande']);
    } else if (phoneNumber === '5678901234') {
      resolve(data['5678901234']);
    } else if (role === 'teacher') {
      resolve(data['teacher']);
    } else if (!userName && !phoneNumber && !role) {
      resolve(data['allAccounts']);
    } else {
      resolve([]);
    }
  });
};

