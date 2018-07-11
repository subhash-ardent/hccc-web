import {ChangeDetectorRef, Component, AfterViewInit, ViewChild, OnDestroy} from '@angular/core';
import {AppService} from './app.service';
import {
  NavigationCancel,
  Event,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router
} from '@angular/router';
import {catchError} from 'rxjs/operators';
import {MatSidenav} from '@angular/material/sidenav';
import {MediaMatcher} from '@angular/cdk/layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit, OnDestroy {
  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;

  @ViewChild('snav') snav: MatSidenav;

  constructor(changeDetectorRef: ChangeDetectorRef,
              public appService: AppService,
              private router: Router,
              media: MediaMatcher) {
    this.router.events.subscribe((event: Event) => {
      this.navigationInterceptor(event);
    });
    this.mobileQuery = media.matchMedia('(max-width: 800px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);

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

  ngAfterViewInit() {
    this.appService.sideNavMenuClick$.pipe(
      catchError(this.appService.showErrorOnSnackbar<boolean>(`Side navbar operation`))
    ).subscribe(
      res => {
        this.snav.toggle();
      }
    );
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
}

