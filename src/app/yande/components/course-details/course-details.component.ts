import { Component, OnInit } from '@angular/core';
import {Course} from '../../models/course';
import {AppService} from '../../../app.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit {
  public course;
  constructor(public appService: AppService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data
      .subscribe((data: { course: Course }) => {
        this.course = data.course;
      });
  }

}
