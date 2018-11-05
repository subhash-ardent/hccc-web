import {Component, OnInit, Input, ViewChild} from '@angular/core';
import {Teacher} from '../../models/teacher';
import {NgForm} from '@angular/forms';
import {YandeApiService} from '../../services/yande-api.service';
import {SnackBarService} from '../../../core/services/snack-bar.service';
import {Devotee} from '../../../core/models/devotee';
import {Router} from '@angular/router';

@Component({
  selector: 'hccc-teacher-form',
  templateUrl: './teacher-form.component.html',
  styleUrls: ['./teacher-form.component.scss']
})
export class TeacherFormComponent implements OnInit {
  @Input() model = new Teacher();
  @Input() tAction = '';
  @Input() hideTDetails: boolean;
  @ViewChild('teacherForm') teacherForm: NgForm;

  devotee: Devotee;
  isTeacher = false;
  invalidPhoneNumber = false;

  constructor(
    private apiService: YandeApiService,
    private snachBarService: SnackBarService,
    private router: Router
  ) {
  }

  ngOnInit() {
  }

  getDevotee(value: string) {
    // mock backend has data for phone numbers 5555555555, 6666666666 and 7777777777
    if (value && value.length >= 10) {
      this.invalidPhoneNumber = false;
      this.apiService.getDevotee(value).subscribe(a => {
        if (a.length && a.length > 0) {
          this.devotee = a[0];
          if (this.devotee && this.devotee.roles && this.devotee.roles.map(role => role.roleName).includes('Teacher')) {
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
    console.log('submitted');
  }

  onCancelling() {
    this.teacherForm.reset();
    this.router.navigate(['/teachers']);
  }

}
