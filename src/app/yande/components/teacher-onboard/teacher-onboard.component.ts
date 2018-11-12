import { Component, OnInit, Input } from '@angular/core';
import {catchError} from 'rxjs/operators';
import {Teacher} from '../../models/teacher';
import {YandeApiService} from '../../services/yande-api.service';
import {AppService} from '../../../app.service';
import {SnackBarService} from '../../../core/services/snack-bar.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Devotee} from '../../../core/models/devotee';

@Component({
  selector: 'app-teacher-onboard',
  templateUrl: './teacher-onboard.component.html',
  styleUrls: ['./teacher-onboard.component.scss']
})
export class TeacherOnboardComponent implements OnInit {
  teachers: Teacher[];
  devotee: Devotee;
  isTeacher = false;
  constructor(private appService: AppService,
              private snachBarService: SnackBarService,
              private apiService: YandeApiService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
  }



}
