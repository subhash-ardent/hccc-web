import {ChangeDetectorRef, Component, OnDestroy} from '@angular/core';
import {MediaMatcher} from "@angular/cdk/layout";
import {AppService} from './services/app.service';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {
  title = 'app';
  mobileQuery: MediaQueryList;
  fillerNav = ["Home", "Course Catalogue", "Teacher Onboarding"];
  private _mobileQueryListener: () => void;
  public appService;

  constructor(changeDetectorRef: ChangeDetectorRef,
              media: MediaMatcher,
              appService: AppService,
              iconRegistry: MatIconRegistry,
              sanitizer: DomSanitizer) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
    this.appService = appService;
    iconRegistry.addSvgIcon(
      'avatar-placeholder',
      sanitizer.bypassSecurityTrustResourceUrl('yande/assets/img/baseline-account_box-24px.svg'));

  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
}
