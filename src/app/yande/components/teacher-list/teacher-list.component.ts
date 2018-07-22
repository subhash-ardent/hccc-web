import {Component, OnInit} from '@angular/core';
import {AppService} from '../../../app.service';
import {Teacher} from '../../models/teacher';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'teacher-list',
  templateUrl: './teacher-list.component.html',
  styleUrls: ['./teacher-list.component.scss']
})
export class TeacherListComponent implements OnInit {
  public teachers: Teacher[];
  constructor(public appService: AppService,
              private route: ActivatedRoute) {
    this.appService = appService;
  }

  ngOnInit() {
    this.route.data
      .subscribe((data: { teachers: Teacher[] }) => {
        this.teachers = data.teachers;
      });
  }

}
