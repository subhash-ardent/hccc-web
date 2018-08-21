import {Component, OnInit} from '@angular/core';
import {AppService} from '../../../app.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Course} from '../../models/course';

@Component({
  selector: 'app-course-catalogue',
  templateUrl: './course-catalogue.component.html',
  styleUrls: ['./course-catalogue.component.scss']
})
export class CourseCatalogueComponent implements OnInit {
  public courses;
  public tagMap = new Map();
  public topThreeTags: any[];

  constructor(public appService: AppService,
              private router: Router,
              private route: ActivatedRoute) {
    this.appService = appService;
  }

  ngOnInit() {
    this.route.data
      .subscribe((data: { courses: Course[] }) => {
        this.courses = data.courses;
        this.buildTagMap();
        this.findTopThreeTags();
      });
  }

  buildTagMap() {
    this.courses.forEach(c => {
      c.tags.forEach(t => {
        if (this.tagMap.has(t)) {
          this.tagMap.get(t).push(c);
        } else {
          this.tagMap.set(t, [c]);
        }
      });
    });
  }

  findTopThreeTags() {
    console.log(this.tagMap);
    this.topThreeTags = Array.from(this.tagMap.keys()).sort((a, b) => this.tagMap.get(b).length - this.tagMap.get(a).length).slice(0, 3);
  }

  // onClickAddNew() {
  //     this.router.navigate(['../create'], {relativeTo: this.route});
  // }
}
