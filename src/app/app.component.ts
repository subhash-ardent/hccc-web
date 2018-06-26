import {ChangeDetectorRef, Component, OnDestroy} from '@angular/core';
import {MediaMatcher} from "@angular/cdk/layout";
import {AppService} from './services/app.service';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material';
import { NavigationCancel,
  Event,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router } from '@angular/router';

import { MessageService } from './services/message.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {
  title = 'app';
  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef,
              media: MediaMatcher,
              public appService: AppService,
              iconRegistry: MatIconRegistry,
              sanitizer: DomSanitizer,
              private router: Router,
              private logger: MessageService) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
    this.appService = appService;
    iconRegistry.addSvgIcon(
      'avatar-placeholder',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/baseline-account_box-24px.svg'));

    this.router.events.subscribe((event: Event) => {
      this.navigationInterceptor(event);
    });
  }

  private navigationInterceptor(event: Event): void {
    if (event instanceof NavigationStart) {
        this.appService.loading = true;
    }
    if (event instanceof NavigationEnd) {
        this.appService.loading = false;
    }
    if (event instanceof NavigationCancel) {
        this.appService.loading = false;
    }
    if (event instanceof NavigationError) {
        this.appService.loading = false;
    }
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
}
