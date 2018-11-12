import {Component, Input, OnInit} from '@angular/core';
import {Teacher} from '../../models/teacher';
import {SnackBarService} from '../../../core/services/snack-bar.service';
import {YandeApiService} from '../../services/yande-api.service';
import {AppService} from '../../../app.service';

@Component({
  selector: 'teacher-card',
  templateUrl: './teacher-card.component.html',
  styleUrls: ['./teacher-card.component.scss']
})
export class TeacherCardComponent implements OnInit {
  @Input() teacher: Teacher;
  @Input() hideDetails: boolean;
  @Input() showDelete: boolean;
  constructor(private appService: AppService,
              private apiService: YandeApiService,
              private snackBarService: SnackBarService) { }

  ngOnInit() {
  }

  deleteTeacher(teacherId) {
    this.appService.loading = true;
    this.apiService.deleteTeacher(this.teacher).subscribe(
      data => {
        this.snackBarService.showSuccessSnackBar('Teacher Info deleted successfully');
        this.appService.loading = false;
      },
      error => {
        this.snackBarService.showFailureSnackBar('Error while deleting Teacher Info');
        this.appService.loading = false;
      }
    );
  }

}
