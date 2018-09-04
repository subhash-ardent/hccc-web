import { Component, OnInit, Input } from '@angular/core';
import { Teacher } from '../../models/teacher';

@Component({
  selector: 'hccc-teacher-form',
  templateUrl: './teacher-form.component.html',
  styleUrls: ['./teacher-form.component.scss']
})
export class TeacherFormComponent implements OnInit {
  @Input() model = new Teacher();
  @Input() tAction: string = '';
  @Input() hideTDetails:boolean;

  constructor() { }

  ngOnInit() {
  }

}
