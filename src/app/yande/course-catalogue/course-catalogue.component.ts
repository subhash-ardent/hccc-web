import { Component, OnInit } from '@angular/core';
import {AppService} from '../../services/app.service';
import {ActivatedRoute, Router }                 from '@angular/router';

@Component({
  selector: 'app-course-catalogue',
  templateUrl: './course-catalogue.component.html',
  styleUrls: ['./course-catalogue.component.css']
})
export class CourseCatalogueComponent implements OnInit {
  public appService;
  constructor(appService: AppService,
              private router: Router,
              private route: ActivatedRoute,) {
    this.appService = appService;
  }

  ngOnInit() {
  }

  onClickAddNew() {
    this.router.navigate(["../create"], { relativeTo: this.route });
  }

}
