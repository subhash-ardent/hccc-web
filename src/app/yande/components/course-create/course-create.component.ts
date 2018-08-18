import {Component, OnInit, ViewChild} from '@angular/core';
import {Course} from '../../models/course';
import {YandeApiService} from '../../services/yande-api.service';
import {catchError} from 'rxjs/operators';
import {AppService} from '../../../app.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Teacher} from '../../models/teacher';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatChipInputEvent} from '@angular/material';
import { NgForm } from '@angular/forms';
import {SnackBarService} from '../../../core/services/snack-bar.service';

@Component({
  selector: 'app-course-create',
  templateUrl: './course-create.component.html',
  styleUrls: ['./course-create.component.scss']
})
export class CourseCreateComponent{
  constructor() {
  }
}
