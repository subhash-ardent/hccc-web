import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import {Course} from '../../models/course';
import {AppService} from '../../../app.service';
import {ActivatedRoute, Router} from '@angular/router';


@Component({
  selector: 'app-course-enroll',
  templateUrl: './course-enroll.component.html',
  styleUrls: ['./course-enroll.component.css']
})
export class CourseEnrollComponent implements OnInit{
  public course:Course;
  
  family:string[] = ['father','mother','brother','sister','grandpa','grandma','cousin','uncle','aunt',];
  
  constructor(private router: Router,
              private route: ActivatedRoute,
              private appService: AppService) { }

  ngOnInit() {
    this.route.data
      .subscribe((data: { course: Course }) => {
        this.course = data.course;
      });
      
  }
 
  toEnroll(){
    this.router.navigate(['/indemnity']);
  }

}
