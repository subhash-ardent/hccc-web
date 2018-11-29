import {Component, ViewChild, ElementRef, AfterViewInit} from '@angular/core';
import {AppService} from '../../../app.service';
import {catchError} from 'rxjs/operators';
import {fromEvent} from 'rxjs';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'hccc-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss']
})
export class AppHeaderComponent implements AfterViewInit {
  @ViewChild('menuButton') menuButton: any;

  loginUrl: string;
  redirectUrl: string;

  constructor(
    public appService: AppService) {
    if (environment && environment.loginRedirect) {
      this.loginUrl = environment.loginRedirect.loginUrl;
      this.redirectUrl = environment.loginRedirect.redirectUrl;
    }
  }

  ngAfterViewInit() {
    this.appService.sideNavMenuClick$ = fromEvent(this.menuButton._elementRef.nativeElement, 'click');
  }

}
