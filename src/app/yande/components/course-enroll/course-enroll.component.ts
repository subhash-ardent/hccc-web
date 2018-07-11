import { Component, OnInit } from '@angular/core';
import {Course} from '../../models/course';
import {AppService} from '../../../app.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-course-enroll',
  templateUrl: './course-enroll.component.html',
  styleUrls: ['./course-enroll.component.css']
})
export class CourseEnrollComponent implements OnInit {
  public course;
  constructor(appService: AppService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data
      .subscribe((data: { course: Course }) => {
        this.course = data.course;
      });
  }

}
