import {Component, OnInit, Input, ViewChild} from '@angular/core';
import {Teacher} from '../../models/teacher';
import {FormBuilder, FormControl, FormGroup, NgForm, Validators} from '@angular/forms';
import {YandeApiService} from '../../services/yande-api.service';
import {SnackBarService} from '../../../core/services/snack-bar.service';
import {Devotee} from '../../../core/models/devotee';
import {ActivatedRoute, Router} from '@angular/router';
import {AppService} from '../../../app.service';
import {catchError} from 'rxjs/operators';
import {Course} from '../../models/course';

@Component({
  selector: 'hccc-teacher-form',
  templateUrl: './teacher-form.component.html',
  styleUrls: ['./teacher-form.component.scss']
})
export class TeacherFormComponent implements OnInit {
  @Input() teacher: Teacher;
  @Input() action = '';

  readOnly = false;
  devoteePhNo: FormControl;
  userName: string;
  teacherForm: FormGroup;
  devoteeSelected = false;
  devotees: Devotee[];
  isTeacher = false;
  invalidPhoneNumber = false;

  static constructPostPayload(teacher) {
    return {
      salutation: teacher.salutation,
      profilePictureURL: teacher.profilePictureURL,
      indemnitySigned: teacher.indemnitySigned,
      backgroundVerified: teacher.backgroundVerified,
      identityVerified: teacher.identityVerified,
      skillSets: teacher.skillSets,
    };
  }

  constructor(
    private apiService: YandeApiService,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private appService: AppService,
    private snackBarService: SnackBarService) {
  }

  ngOnInit() {
    this.devoteePhNo = new FormControl('',
      [Validators.minLength(10), Validators.maxLength(10), Validators.required]);
    switch (this.action) {
      case 'details':
        this.readOnly = true;
        this.teacherForm = this.createForm(this.teacher);
        break;

      case 'edit':
        this.readOnly = false;
        this.teacherForm = this.createForm(this.teacher);
        this.devoteeSelected = true;
        this.configureChangeListeners(this.teacherForm);
        break;

      case 'create':
        this.readOnly = false;
        this.teacherForm = this.createForm(new Teacher());
        break;
    }
  }

  createForm(c: Teacher): FormGroup {

    // this.userName = new FormControl('', [Validators.required]);
    const fg = this.formBuilder.group({
      salutation: [c.salutation, {updateOn: 'blur', validators: Validators.required}],
      profilePictureURL: [c.profilePictureURL, {updateOn: 'blur'}],
      indemnitySigned: [{value: c.indemnitySigned, disabled: this.readOnly}, {updateOn: 'blur'}],
      backgroundVerified: [{value: c.backgroundVerified, disabled: this.readOnly}, {updateOn: 'blur'}],
      identityVerified: [{value: c.identityVerified, disabled: this.readOnly}, {updateOn: 'blur'}],
      skillSets: [c.skillSets, {updateOn: 'blur', validators: Validators.required}],
    });

    return fg;
  }

  configureChangeListeners(cf: FormGroup) {
    const self = this;
    cf.controls['salutation'].valueChanges.subscribe(c => self.updateTeacher({salutation: c}));
    cf.controls['profilePictureURL'].valueChanges.subscribe(c => self.updateTeacher({profilePictureURL: c}));
    cf.controls['indemnitySigned'].valueChanges.subscribe(c => self.updateTeacher({indemnitySigned: c}));
    cf.controls['backgroundVerified'].valueChanges.subscribe(c => self.updateTeacher({backgroundVerified: c}));
    cf.controls['identityVerified'].valueChanges.subscribe(c => self.updateTeacher({identityVerified: c}));
    cf.controls['skillSets'].valueChanges.subscribe(c => self.updateTeacher({skillSets: c}));
  }


  getDevotee(value: string) {
    // mock backend has data for phone numbers 5555555555, 6666666666 and 7777777777
    if (value && value.length >= 10) {
      this.invalidPhoneNumber = false;
      this.appService.loading = true;
      this.apiService.getDevotee(value).subscribe(
        a => {
          this.appService.loading = false;
          if (a.length && a.length > 0) {
            this.devotees = a;
            this.devoteeSelected = false;
            this.devotees.forEach(d => {
              if (d && d.categories && d.categories.map(role => role.name).includes('Teacher')) {
                d.isTeacher = true;
              } else if (!this.devoteeSelected) {
                this.userName = d.userName;
                this.devoteeSelected = true;
              }
            });

          } else {
            this.appService.loading = false;
            this.snackBarService.showFailureSnackBar(
              'The phone number ' + value + ', is not associated with any devotee in the system'
            );
          }
        },
        error => {
          this.snackBarService.showFailureSnackBar('Could not retriev Devotee with Phone Number ' + value );
          this.appService.loading = false;
        });
    } else {
      this.invalidPhoneNumber = true;
    }

  }

  updateTeacher(updates) {
    if (updates) {
      this.appService.loading = true;
      this.apiService.updateTeacher(updates, this.teacher.teacherId).subscribe(
        data => {
          this.snackBarService.showSuccessSnackBar(Object.keys(updates).join(', ') + ' updated Successfully');
          this.appService.loading = false;
        },
        error => {
          this.snackBarService.showFailureSnackBar('Error while updating teacher details');
          this.appService.loading = false;
        }
      );
    }
  }

  onSubmit() {
    this.appService.loading = true;
    console.log(this.userName);
    this.apiService.addTeacher(TeacherFormComponent.constructPostPayload(this.teacherForm.value), this.userName).subscribe(
      data => {
        this.router.navigate(['../'], {relativeTo: this.route});
        this.snackBarService.showSuccessSnackBar('New Teacher Onboarded Successfully');
        this.appService.loading = false;
      },
      error => {
        this.snackBarService.showFailureSnackBar('Error while Onboarding new Teacher');
        this.appService.loading = false;
        if (error) {
          this.appService.handleNonFatalError<any>('Onboard Teacher' + error.message);
        } else {
          this.appService.handleNonFatalError<any>('Onboard Teacher');
        }
      }
    );
  }

  onDevoteeSelect(userName, isTeacher) {
    if (!isTeacher) {
      this.userName = userName;
    }
  }

  onCancelling() {
    this.teacherForm.reset();
    this.router.navigate(['/teachers']);
  }

}
