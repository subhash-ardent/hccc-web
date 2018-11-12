import {Component, OnInit, Input, ChangeDetectorRef} from '@angular/core';
import {Course} from '../../models/course';
import {AppService} from '../../../app.service';
import {YandeApiService} from '../../services/yande-api.service';
import {SnackBarService} from '../../../core/services/snack-bar.service';

@Component({
  selector: 'course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.scss']
})
export class CourseCardComponent implements OnInit {
  @Input() course: Course;
  @Input() hideEnroll: boolean;
  @Input() hideDetails: boolean;
  @Input() showDelete: boolean;

  constructor(private appService: AppService,
              private apiService: YandeApiService,
              private snackBarService: SnackBarService) {
  }

  ngOnInit() {
    // console.log(this.course);
  }

  deleteCourse(courseId) {
    this.appService.loading = true;
    this.apiService.deleteCourse(this.course).subscribe(
      data => {
        this.snackBarService.showSuccessSnackBar('Course Deleted Successfully');
        this.appService.loading = false;
      },
      error => {
        this.snackBarService.showFailureSnackBar('Error while deleting course');
        this.appService.loading = false;
      }
    );
  }

}
