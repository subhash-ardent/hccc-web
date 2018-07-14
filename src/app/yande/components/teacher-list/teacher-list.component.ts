import { Component, OnInit } from '@angular/core';
import {AppService} from '../../../app.service';


@Component({
  selector: 'teacher-list',
  templateUrl: './teacher-list.component.html',
  styleUrls: ['./teacher-list.component.css']
})
export class TeacherListComponent implements OnInit {
	public appService;

    constructor(appService: AppService) {
        this.appService = appService;
    }

  ngOnInit() {
  }

}
