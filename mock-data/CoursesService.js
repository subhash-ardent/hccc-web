'use strict';

const courses = [
  {
    "courseName": "STEM SUMMER WORKSHOP",
    "courseEndTime": "13:00",
    "courseStartTime": "11:00",
    "courseEndDate": "2018-08-15",
    "ageRestrictions": "Age from 8 to 15",
    "courseStartDate": "2018-06-15",
    "tags": ["STEM", "Kids"],
    "slots": 20,
    "courseVenue": "Tirumala Hall",
    "teachers": [{
      "profilePictureURL": "http://www.livermoretemple.org/hints/images/Priests/KK.jpg",
      "skillSet": ["Vaideekam", "Vishnu Agamas"],
      "indemnitySigned": true,
      "salutation": "Pdt",
      "identityVerified": true,
      "account": {
        "phoneNumber": "1234567890",
        "roles": ["teacher", "devotee"],
        "name": {
          "firstName": "Ramanujan",
          "lastName": "Kannan"
        },
        "userName": "rk",
        "email": "rk@livermoretemple.org"
      },
      "backgroundVerified": true
    }],
    "flyerURL": "flyerURL",
    "courseId": "2",
    "courseDays": "Saturdays",
    "courseRemarks": "Please bring your own laptop",
    "imageURL": "http://www.livermoretemple.org/hints/images/2018/summer-workshops.gif",

  },
  {
    "courseName": "VISHNUSAHASRANAMAM CLASS",
    "courseEndTime": "14:00",
    "courseStartTime": "13:00",
    "courseEndDate": "2018-08-15",
    "ageRestrictions": "Age above 7",
    "courseStartDate": "2018-06-15",
    "tags": ["Slokas", "Kids", "Adults"],
    "slots": 20,
    "courseVenue": "Kanaka Durga Hall",
    "teachers": [{
      "profilePictureURL": "http://www.livermoretemple.org/hints/images/Priests/DPK.jpg",
      "skillSet": ["Archaka Pravesa", "Pratishanta Vaikanasa Agama "],
      "indemnitySigned": true,
      "salutation": "Pdt",
      "identityVerified": true,
      "account": {
        "phoneNumber": "1234567890",
        "roles": ["teacher", "devotee"],
        "name": {
          "firstName": "Divi",
          "middleName": "Pawan",
          "lastName": "Kumar"
        },
        "userName": "dpk",
        "email": "dpk@livermoretemple.org"
      },
      "backgroundVerified": true
    }],
    "flyerURL": "flyerURL",
    "courseId": "3",
    "courseDays": "Saturdays",
    "courseRemarks": "Please bring your copy of Vishnu Sahasaranamam",
    "imageURL": "http://www.livermoretemple.org/hints/images/2010/vishnuclasses.jpg",

  },
  {
    "courseName": "NARAYANEEYAM CLASSES",
    "courseEndTime": "15:00",
    "courseStartTime": "14:00",
    "courseEndDate": "2019-02-15",
    "ageRestrictions": "Age above 7",
    "courseStartDate": "2018-07-15",
    "tags": ["Slokas", "Adults"],
    "slots": 20,
    "courseVenue": "Kanaka Durga Hall",
    "teachers": [
      {
        "profilePictureURL": "http://www.livermoretemple.org/hints/images/Priests/THEJESVI.jpg",
        "skillSet": ["Krishna yajurvedam", "Pancha Rathra Agamam"],
        "indemnitySigned": true,
        "salutation": "Pdt",
        "identityVerified": true,
        "account": {
          "phoneNumber": "1234567890",
          "roles": ["teacher", "devotee"],
          "name": {
            "firstName": "Sampath",
            "lastName": "Sridharan"
          },
          "userName": "ss",
          "email": "ss@livermoretemple.org"
        },
        "backgroundVerified": true
      }
    ],
    "flyerURL": "flyerURL",
    "courseId": "1",
    "courseDays": "Saturdays",
    "courseRemarks": "Please bring your copy of Narayaneeyam to the class",
    "imageURL": "http://www.livermoretemple.org/hints/images/2012/Jyeshtabhishekam.gif",
  },
  {
    "courseName": "SANSKRIT CLASSES",
    "courseEndTime": "15:00",
    "courseStartTime": "14:00",
    "courseEndDate": "2018-08-15",
    "ageRestrictions": "Age above 6 and Adults",
    "courseStartDate": "2018-06-15",
    "tags": ["SANSKRIT", "Kids", "Adults", "sanskrit", "language"],
    "slots": 20,
    "courseVenue": "varies by course level",
    "teachers": [{
      "profilePictureURL": "http://www.livermoretemple.org/hints/images/Priests/SRINIVASAB.jpg",
      "skillSet": ["Vaideekam", "Vishnu Agamas"],
      "indemnitySigned": true,
      "salutation": "Pdt",
      "identityVerified": true,
      "account": {
        "phoneNumber": "1234567890",
        "roles": ["teacher", "devotee"],
        "name": {
          "firstName": "Sridhar",
          "middleName": "S",
          "lastName": "Bhattar"
        },
        "userName": "ssb",
        "email": "ssb@livermoretemple.org"
      },
      "backgroundVerified": true
    }],
    "flyerURL": "flyerURL",
    "courseId": "4",
    "courseDays": "Saturdays",
    "courseRemarks": "Children 6 to 10 years must be accompanied by a parent.No prior knowledge of Sanskrit is required.",
    "imageURL": "http://www.livermoretemple.org/hints/images/2015/om.gif",

  }
];


/**
 * Add a new course to the catalogue
 *
 * contentType String The MediaType of the request content
 * accept String The MediaType of the response content
 * userId String Unique identifier of the user initiating the call
 * body CreateCourseRequest
 * returns RetrieveCourseResponse
 **/
exports.addCourse = function (contentType, accept, userId, body) {
  const getMaxId = (accumulator, currentValue) => parseInt(currentValue.courseId) > accumulator ? parseInt(currentValue.courseId) : accumulator;
  return new Promise(function (resolve, reject) {
    if (!body.course) {
      reject();
    }
    if(body && body.course && body.course.courseName && ['400', '403', '500'].includes(body.course.courseName)) {
      reject({code: parseInt(body.course.courseName)});
    } else {
      let maxId = courses.reduce(getMaxId, 0);
      body.course.courseId = maxId + 1;
      courses.push(body.course);
      var examples = {};
      examples['application/json'] = body;
      if (Object.keys(examples).length > 0) {
        resolve(examples[Object.keys(examples)[0]]);
      } else {
        resolve();
      }
    }
  });
}


/**
 * Retrieve course by Course Id
 *
 * contentType String The MediaType of the request content
 * accept String The MediaType of the response content
 * userId String Unique identifier of the user initiating the call
 * courseId String Id of the course to be retrieved
 * returns RetrieveCourseResponse
 **/
exports.getCourseById = function (contentType, accept, userId, courseId) {
  return new Promise(function (resolve, reject) {
    var examples = {};
    const course = courses.find(course => course.courseId == courseId);
    examples['application/json'] = {
      "course": course
    };
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Retrieve courses from the catalogue
 *
 * contentType String The MediaType of the request content
 * accept String The MediaType of the response content
 * userId String Unique identifier of the user initiating the call
 * tags String Tags to be used as filter - comma seperated list of tags (optional)
 * returns RetrieveCoursesListResponse
 **/
exports.getCourses = function (contentType, accept, userId, tags) {
  return new Promise(function (resolve, reject) {
    var examples = {};
    examples['application/json'] = {courses};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
};

