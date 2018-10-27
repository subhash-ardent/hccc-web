import { Component, OnInit, Input } from '@angular/core';
import { Course } from '../../models/course';
import { AppService } from '../../../app.service';


@Component({
  selector: 'hccc-my-courses',
  templateUrl: './my-courses.component.html',
  styleUrls: ['./my-courses.component.scss']
})
export class MyCoursesComponent implements OnInit {
myCourses:Course[] = [{
  courseName: "testCourse",
  courseImageURL: "http://www.nasrinsafai.com/wp-content/images/goddess-saraswati.jpg",
  courseEndTime: "then",
  courseStartTime: "now",
  courseStartDate: "today",
  courseEndDate: "tomorrow",
  tags: ['kids', 'slokas'],
  slots: 19,
  courseVenue: "silphaKalaVedika",
  teachers: [],
  flyerURL: "google.com",
  courseId: "test",
  courseDays: "friday",
  courseRemarks: "for testing",
  ageRestrictions: "none",
  tagsString: "",
  teachersString: ""
}, {
  courseName: "testCourse",
  courseImageURL: "http://www.nasrinsafai.com/wp-content/images/goddess-saraswati.jpg",
  courseEndTime: "then",
  courseStartTime: "now",
  courseStartDate: "today",
  courseEndDate: "tomorrow",
  tags: ['kids', 'slokas'],
  slots: 19,
  courseVenue: "silphaKalaVedika",
  teachers: [],
  flyerURL: "google.com",
  courseId: "test",
  courseDays: "2",
  courseRemarks: "for testing",
  ageRestrictions: "none",
  tagsString: "",
  teachersString: ""
}, {
  courseName: "testCourse",
  courseImageURL: "http://www.nasrinsafai.com/wp-content/images/goddess-saraswati.jpg",
  courseEndTime: "then",
  courseStartTime: "now",
  courseStartDate: "today",
  courseEndDate: "tomorrow",
  tags: ['kids', 'slokas'],
  slots: 19,
  courseVenue: "silphaKalaVedika",
  teachers: [],
  flyerURL: "google.com",
  courseId: "test",
  courseDays: "2",
  courseRemarks: "for testing",
  ageRestrictions: "none",
  tagsString: "",
  teachersString: ""
}, {
  courseName: "testCourse",
  courseImageURL: "http://www.nasrinsafai.com/wp-content/images/goddess-saraswati.jpg",
  courseEndTime: "then",
  courseStartTime: "now",
  courseStartDate: "today",
  courseEndDate: "tomorrow",
  tags: ['kids', 'slokas'],
  slots: 19,
  courseVenue: "silphaKalaVedika",
  teachers: [],
  flyerURL: "google.com",
  courseId: "test",
  courseDays: "2",
  courseRemarks: "for testing",
  ageRestrictions: "none",
  tagsString: "",
  teachersString: ""
}];
  constructor() {}

  ngOnInit() {}

} 
