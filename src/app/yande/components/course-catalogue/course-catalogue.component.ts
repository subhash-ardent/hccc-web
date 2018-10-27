import {Component, OnInit, Input} from '@angular/core';
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
   filterTag: string = '';
   filterString: string = '';
  constructor(public appService: AppService,
              private router: Router,
              private route: ActivatedRoute) {
    this.appService = appService;
  }

  ngOnInit() {
    this.route.data
      .subscribe((data: { courses: Course[] }) => {
        this.courses = data.courses;
        console.log(this.courses);
        this.buildTagMap();
        this.findTopThreeTags();
      });
  }

  buildTagMap() {
    this.courses.forEach(c => {
      if (c.tags) {
        c.tags.forEach(t => {
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
    console.log(this.tagMap);
    this.topThreeTags = Array.from(this.tagMap.keys()).sort((a, b) => this.tagMap.get(b).length - this.tagMap.get(a).length).slice(0, 3);
    this.topThreeTags[3] = 'ALL'; 
  }
  // onClickAddNew() {
  //     this.router.navigate(['../create'], {relativeTo: this.route});
  // }
}
