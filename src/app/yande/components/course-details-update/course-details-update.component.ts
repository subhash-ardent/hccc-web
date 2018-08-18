import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {CourseDetailsComponent} from '../course-details/course-details.component';
import {Course} from '../../models/course';
import {AppService} from '../../../app.service';

@Component({
  selector: 'app-course-details-update',
  templateUrl: './course-details-update.component.html',
  styleUrls: ['./course-details-update.component.css']
})
export class CourseDetailsUpdateComponent implements OnInit {
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
