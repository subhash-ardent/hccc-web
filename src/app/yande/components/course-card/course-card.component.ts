import { Component, OnInit, Input } from '@angular/core';
import {Course} from '../../models/course';

@Component({
  selector: 'course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.scss']
})
export class CourseCardComponent implements OnInit {
  @Input() course: Course;
  @Input() hideEnroll: boolean;
  @Input() hideDetails: boolean;
  @Input() showDelete: boolean;
  constructor() { }

  ngOnInit() {
    console.log(this.course);
  }

  deleteCourse(courseId) {

  }
}
