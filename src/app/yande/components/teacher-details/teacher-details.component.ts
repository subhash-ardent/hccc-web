import { Component, OnInit } from '@angular/core';
import {Teacher} from '../../models/teacher';
import {AppService} from '../../../app.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-teacher-details',
  templateUrl: './teacher-details.component.html',
  styleUrls: ['./teacher-details.component.css']
})
export class TeacherDetailsComponent implements OnInit {
  public teacher;
  constructor(public appService: AppService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data
      .subscribe((data: { teacher: Teacher }) => {
        this.teacher = data.teacher;
      });
  }

}
