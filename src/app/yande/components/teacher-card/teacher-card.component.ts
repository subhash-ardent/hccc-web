import {Component, Input, OnInit} from '@angular/core';
import {Teacher} from '../../models/teacher';

@Component({
  selector: 'teacher-card',
  templateUrl: './teacher-card.component.html',
  styleUrls: ['./teacher-card.component.css']
})
export class TeacherCardComponent implements OnInit {
  @Input() teacher: Teacher;
  constructor() { }

  ngOnInit() {
  }

}
