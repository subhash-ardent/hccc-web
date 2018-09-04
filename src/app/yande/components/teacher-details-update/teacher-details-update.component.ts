import { Component, OnInit } from '@angular/core';
import { AppService } from '../../../app.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Teacher } from '../../models/teacher';

@Component({
  selector: 'app-teacher-details-update',
  templateUrl: './teacher-details-update.component.html',
  styleUrls: ['./teacher-details-update.component.css']
})
export class TeacherDetailsUpdateComponent implements OnInit {

  public teacher;
  constructor(public appService: AppService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data
      .subscribe((data: { teacher: Teacher }) => {
        this.teacher = data.teacher;
        console.log(this.teacher);
      });
  }

}
