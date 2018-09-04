import { Component, OnInit, Input } from '@angular/core';
import {catchError} from 'rxjs/operators';
import {Teacher} from '../../models/teacher';
import {YandeApiService} from '../../services/yande-api.service';
import {AppService} from '../../../app.service';
import {SnackBarService} from '../../../core/services/snack-bar.service';
import {ActivatedRoute, Router} from '@angular/router';
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
  devotee: Account;
  isTeacher = false;
  invalidPhoneNumber = false;
  constructor(private appService: AppService,
              private snachBarService: SnackBarService,
              private apiService: YandeApiService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
  }

  getDevotee(value: string) {
    // mock backend has data for phone numbers 5555555555, 6666666666 and 7777777777
    if (value && value.length >= 10) {
      this.invalidPhoneNumber = false;
      this.apiService.getDevotee(value).subscribe(a => {
        if (a.length && a.length > 0) {
          this.devotee = a[0];
          if (this.devotee && this.devotee.roles && this.devotee.roles.includes('Teacher')) {
            this.isTeacher = true;
          }
        } else {
          this.snachBarService.showFailureSnackBar(
            'The phone number ' + value + ', is not associated with any devotee in the system'
          );
        }
      });
    } else {
      this.invalidPhoneNumber = true;
    }

  }

  onSubmit() {
    this.submitted = true;
    console.log('printing model', this.model);

    this.apiService.addTeacher(this.model).subscribe(
      data => {
        this.snachBarService.showSuccessSnackBar('New Teacher Onboarded Successfully');
        this.router.navigate(['../'], {relativeTo: this.route});
      },
      error => this.snachBarService.showFailureSnackBar('Error while onboarding teacher')
    );
  }

}
