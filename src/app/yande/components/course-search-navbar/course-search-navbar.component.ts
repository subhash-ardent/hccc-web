import {Component, Input, OnInit} from '@angular/core';
import {Course} from '../../models/course';

@Component({
  selector: 'hccc-course-search-navbar',
  templateUrl: './course-search-navbar.component.html',
  styleUrls: ['./course-search-navbar.component.css']
})
export class CourseSearchNavbarComponent implements OnInit {
  @Input() topThreeTags: [string];
  constructor() { }

  ngOnInit() {
  }

}
