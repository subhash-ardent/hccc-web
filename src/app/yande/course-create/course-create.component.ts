import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-create',
  templateUrl: './course-create.component.html',
  styleUrls: ['./course-create.component.css']
})
export class CourseCreateComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  	 this.breakpoint = (window.innerWidth <= 768) ? 1 : 2;
  }
  onResize(event) {
  	this.breakpoint = (event.target.innerWidth <= 768) ? 1 : 2;
  }

}
