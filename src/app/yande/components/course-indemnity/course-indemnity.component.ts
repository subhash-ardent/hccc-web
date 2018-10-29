import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { AppService } from '../../../app.service';

@Component({
  selector: 'app-course-indemnity',
  templateUrl: './course-indemnity.component.html',
  styleUrls: ['./course-indemnity.component.css']
})
export class CourseIndemnityComponent implements OnInit {

  constructor(public appService: AppService) {}

  ngOnInit() {
  }
  
}
