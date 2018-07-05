'use strict';

const courses = [ {
    "courseName" : "NARAYANEEYAM CLASSES",
    "courseEndTime" : "3.00 PM",
    "courseStartTime" : "2.00 PM",
    "courseEndDate" : "2019-02-15",
    "ageRestrictions" : "Age above 7",
    "courseStartDate" : "2018-07-15",
    "tags" : [ "Slokas", "Adults" ],
    "slots" : 20,
    "courseVenue" : "Kanaka Durga Hall",
    "teachers" : [ "Madhu Ramesh"],
    "flyerURL" : "flyerURL",
    "courseId" : "1",
    "courseDays" : "Saturdays",
    "courseRemarks" : "Please bring your copy of Narayaneeyam to the class",
    "imageURL" : "http://www.livermoretemple.org/hints/images/2012/Jyeshtabhishekam.gif",
  },
    {
      "courseName" : "STEM SUMMER WORKSHOP",
      "courseEndTime" : "1.00 PM",
      "courseStartTime" : "11.00 AM",
      "courseEndDate" : "2018-08-15",
      "ageRestrictions" : "Age from 8 to 15",
      "courseStartDate" : "2018-06-15",
      "tags" : [ "STEM", "Kids" ],
      "slots" : 20,
      "courseVenue" : "Tirumala Hall",
      "teachers" : [ "Binduraj"],
      "flyerURL" : "flyerURL",
      "courseId" : "2",
      "courseDays" : "Saturdays",
      "courseRemarks" : "Please bring your own laptop",
      "imageURL" : "http://www.livermoretemple.org/hints/images/2018/summer-workshops.gif",

    },
    {
      "courseName" : "VISHNUSAHASRANAMAM CLASS",
      "courseEndTime" : "2.00 PM",
      "courseStartTime" : "1.00 PM",
      "courseEndDate" : "2018-08-15",
      "ageRestrictions" : "Age above 7",
      "courseStartDate" : "2018-06-15",
      "tags" : [ "Slokas", "Kids", "Adults"],
      "slots" : 20,
      "courseVenue" : "Kanaka Durga Hall",
      "teachers" : [ "Madhu Ramesh"],
      "flyerURL" : "flyerURL",
      "courseId" : "3",
      "courseDays" : "Saturdays",
      "courseRemarks" : "Please bring your copy of Vishnu Sahasaranamam",
      "imageURL" : "http://www.livermoretemple.org/hints/images/2010/vishnuclasses.jpg",

    },
    {
      "courseName" : "SANSKRIT CLASSES",
      "courseEndTime" : "varies by course level",
      "courseStartTime" : "varies by course level",
      "courseEndDate" : "2018-08-15",
      "ageRestrictions" : "Age above 6 and Adults",
      "courseStartDate" : "2018-06-15",
      "tags" : [ "SANSKRIT", "Kids", "Adults","sanskrit","language"],
      "slots" : 20,
      "courseVenue" : "varies by course level",
      "teachers" : [ "-"],
      "flyerURL" : "flyerURL",
      "courseId" : "4",
      "courseDays" : "Saturdays",
      "courseRemarks" : "Children 6 to 10 years must be accompanied by a parent.No prior knowledge of Sanskrit is required.",
      "imageURL" : "http://www.livermoretemple.org/hints/images/2015/om.gif",

    },
    {
      "courseName" : "BALAJYOTHI CLASS - I",
      "courseEndTime" : "1.45 PM",
      "courseStartTime" : "1.15 PM",
      "courseEndDate" : "2018-08-15",
      "ageRestrictions" : "4-7 years",
      "courseStartDate" : "2018-06-15",
      "tags" : [ "BALAJYOTHI", "Kids","Stories", "Slokas", "Bhajans", "Art","Craft"],
      "slots" : 20,
      "courseVenue" : "varies by course level",
      "teachers" : [ "Chitra Padmanabhan"],
      "flyerURL" : "flyerURL",
      "courseId" : "5",
      "courseDays" : "2nd and 4th Saturdays of the month",
      "courseRemarks" : "During the classes, we encourage children to maintain discipline and urge parents to cooperate",
      "imageURL" : "http://www.livermoretemple.org/hints/images/2015/om.gif",

    },
    {
      "courseName" : "BHAKTIJOTHI CLASS - II",
      "courseEndTime" : "1.45 PM",
      "courseStartTime" : "1.15 PM",
      "courseEndDate" : "2018-08-15",
      "ageRestrictions" : "7 years and above",
      "courseStartDate" : "2018-06-15",
      "tags" : [ "BHAKTIJOTHI", "Kids","Rituals","Slokas", "Slokas", "Bhajans" ],
      "slots" : 20,
      "courseVenue" : "varies by course level",
      "teachers" : [ "Chitra Padmanabhan"],
      "flyerURL" : "flyerURL",
      "courseId" : "6",
      "courseDays" : "2nd and 4th Saturdays of the month",
      "courseRemarks" : "During the classes, we encourage children to maintain discipline and urge parents to cooperate",
      "imageURL" : "http://www.livermoretemple.org/hints/images/2015/om.gif",

    },
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
exports.addCourse = function(contentType,accept,userId,body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "course" : {
    "courseEndTime" : "courseEndTime",
    "courseStartTime" : "courseStartTime",
    "courseEndDate" : "courseEndDate",
    "ageRestrictions" : "ageRestrictions",
    "courseStartDate" : "courseStartDate",
    "tags" : [ "tags", "tags" ],
    "slots" : 0,
    "courseVenue" : "courseVenue",
    "teachers" : [ "teachers", "teachers" ],
    "imageURL" : "imageURL",
    "flyerURL" : "flyerURL",
    "courseId" : "courseId",
    "courseDays" : "courseDays",
    "courseRemarks" : "courseRemarks"
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
 * Retrieve course by Course Id
 *
 * contentType String The MediaType of the request content
 * accept String The MediaType of the response content
 * userId String Unique identifier of the user initiating the call
 * courseId String Id of the course to be retrieved
 * returns RetrieveCourseResponse
 **/
exports.getCourseById = function(contentType,accept,userId,courseId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    const course = courses.find(course => course.courseId == courseId);
    examples['application/json'] = {
  "course" : course
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
exports.getCourses = function(contentType,accept,userId,tags) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {courses};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
};

