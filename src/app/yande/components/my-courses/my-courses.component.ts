import {Component, OnInit, Input} from '@angular/core';
import {Course} from '../../models/course';
import {AppService} from '../../../app.service';


@Component({
  selector: 'hccc-my-courses',
  templateUrl: './my-courses.component.html',
  styleUrls: ['./my-courses.component.scss']
})
export class MyCoursesComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }
}
