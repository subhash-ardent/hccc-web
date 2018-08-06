import { Component, OnInit } from '@angular/core';
import {catchError} from 'rxjs/operators';
import {Teacher} from '../../models/teacher';
import {YandeApiService} from '../../services/yande-api.service';
import {AppService} from '../../../app.service';
import {ActivatedRoute} from '@angular/router';
import {Account} from '../../../core/models/account';

@Component({
  selector: 'app-teacher-onboard',
  templateUrl: './teacher-onboard.component.html',
  styleUrls: ['./teacher-onboard.component.scss']
})
export class TeacherOnboardComponent implements OnInit {
  model = new Teacher();
  teachers: Teacher[];
  submitted = false;
  devotee;
  constructor(private appService: AppService,
              private apiService: YandeApiService) { }

  ngOnInit() {
  }

  getDevotee(value: string) {
    // mock backend has data for phone numbers 5678901234 and 1234567890
    this.apiService.getDevotee(value).subscribe(a => {
      if (a.length && a.length > 0) {
        this.devotee = a[0];
      } else {
        this.appService.openSnackBar('The phone number ' + value + ', is not associated with any devotee in the system', null);
      }
    });
  }

  onSubmit() {
    this.submitted = true;
    console.log('printing model', this.model);

    this.apiService.addTeacher(this.model).pipe(
      catchError(this.appService.handleFatalError<Teacher[]>(`submit to add teacher`))
    ).subscribe();
  }

}
