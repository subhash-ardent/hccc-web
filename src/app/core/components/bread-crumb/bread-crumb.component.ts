import { Component, OnInit, Input} from '@angular/core';
import {AppService} from '../../../app.service';

@Component({
  selector: 'hccc-bread-crumb',
  templateUrl: './bread-crumb.component.html',
  styleUrls: ['./bread-crumb.component.scss']
})
export class BreadCrumbComponent implements OnInit {
  constructor(public appService: AppService) { }

  ngOnInit() {
  }

}
