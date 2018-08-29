import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {Course} from '../../models/course';

@Component({
  selector: 'hccc-course-search-navbar',
  templateUrl: './course-search-navbar.component.html',
  styleUrls: ['./course-search-navbar.component.css']
})
export class CourseSearchNavbarComponent implements OnInit {
  @Input() topThreeTags: any[];
  searchString:string='';
  @Output() filteredTag = new EventEmitter <String>();
  @Output() searchKey = new EventEmitter <string>();
  constructor() { }

  ngOnInit() {
  }

  tagSelection(tag:string) 
  {
    this.searchString = '';
    this.searchKey.emit(this.searchString);
    this.filteredTag.emit((tag.toLowerCase() === 'all') ? '' : tag);
  }
  searchingString(){
    this.filteredTag.emit('');
    this.searchKey.emit(this.searchString);
  }


}
