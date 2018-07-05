import { Component, OnInit } from '@angular/core';
import {AppService} from '../../services/app.service';

@Component({
  selector: 'hccc-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent implements OnInit {

  constructor(public appService: AppService) { }

  ngOnInit() {
  }

}
