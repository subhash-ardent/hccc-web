import {Component, OnInit, Input, ChangeDetectorRef} from '@angular/core';
import {AppService} from '../../../app.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Course} from '../../models/course';
import {YandeApiService} from '../../services/yande-api.service';
import {LoggerService} from '../../../core/services/logger.service';

@Component({
  selector: 'app-course-catalogue',
  templateUrl: './course-catalogue.component.html',
  styleUrls: ['./course-catalogue.component.scss']
})
export class CourseCatalogueComponent implements OnInit {
  public courses;
  public tagMap = new Map();
  public topThreeTags: any[];
  filterTag = '';
  filterString = '';
  private logger = new LoggerService(this.constructor.name);

  constructor(public appService: AppService,
              private apiService: YandeApiService,
              private router: Router,
              private route: ActivatedRoute) {
    this.appService = appService;
  }

  ngOnInit() {
    this.route.data
      .subscribe((data: { courses: Course[] }) => {
        this.courses = data.courses;
        // this.buildTagMap();
        // this.findTopThreeTags();
      });
  }



  buildTagMap() {
    this.courses.forEach(c => {
      if (c.tags) {
        c.tagsArray.forEach(t => {
          if (this.tagMap.has(t.toUpperCase())) {
            this.tagMap.get(t.toUpperCase()).push(c);
          } else {
            this.tagMap.set(t.toUpperCase(), [c]);
          }
        });
      }
    });
  }

  findTopThreeTags() {
    this.topThreeTags = Array.from(this.tagMap.keys()).sort((a, b) => this.tagMap.get(b).length - this.tagMap.get(a).length).slice(0, 3);
    this.topThreeTags[3] = 'ALL';
  }

  // onClickAddNew() {
  //     this.router.navigate(['../create'], {relativeTo: this.route});
  // }
}
