import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {catchError, map, mergeMap} from 'rxjs/operators';
import {Account} from './core/models/account';
import {LoggerService} from './core/services/logger.service';
import {Router, ActivatedRoute} from '@angular/router';
import {NotFoundError} from './core/models/not-found-error';
import {BreadCrumb} from './core/models/bread-crumb';
import {MatSnackBar} from '@angular/material';
import {SnackBarComponent} from './core/components/snack-bar/snack-bar.component';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private yandeChairRoleLabel = 'Chairman - Youth and Cultural';
  private hcccGuestUserName = 'hccc-guest-user';
  private currentUserUrl = 'yande/user/current';  // URL to web api
  private logger = new LoggerService(this.constructor.name);

  public currentUser: Account;
  public isLoggedIn$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  public isLoggedIn = false;
  public isYandeChair$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  public isYandeChair = false;
  public isinitialDataLoaded = false;
  public sideNavMenuClick$: Observable<Event>;
  public breadCrumbs: BreadCrumb[];

  authRedirectUrl: string;
  loading = false;

  constructor(
    private http: HttpClient,
    private router: Router,
    public snackBar: MatSnackBar) {
    this.loadInitialData();
    this.isLoggedIn$.subscribe(
      isLoggedIn => {
        this.isLoggedIn = isLoggedIn;
      },
      err => {
        this.logger.error('Error while fetching login status of user');
      }
    );
    this.isYandeChair$.subscribe(
      isYandeChair => {
        this.isYandeChair = isYandeChair;
      },
      err => {
        this.logger.error('Error while checking for Y&E role of user');
      }
    );

  }

  async loadInitialData() {
    const user = await this.http.get<Account>(this.currentUserUrl)
      .pipe(
        catchError(this.handleFatalError<Account>('loadInitialData'))
      )
      .toPromise();
    this.logger.info('Fetched current user');
    this.currentUser = user;

    if (this.currentUser && this.currentUser.userName && this.currentUser.userName !== this.hcccGuestUserName) {
      this.isLoggedIn$.next(true);
      if (this.currentUser.roles.length > 0 && this.currentUser.roles.includes(this.yandeChairRoleLabel)) {
        this.isYandeChair$.next(true);
      }
    }
    this.isinitialDataLoaded = true;
  }

  buildBreadCrumb(route: ActivatedRoute) {
    this.breadCrumbs = [];
    let url = '';
    while (route) {
      route.params.pipe(mergeMap((params) => route.data.pipe(map(data => {
        if (route.routeConfig && route.routeConfig.path && route.routeConfig.path.length > 0 && data && data.title) {
          let label = data.title;
          let path = route.routeConfig.path;
          if (label.startsWith(':')) {
            const paramName = label.replace(':','');
            label = data[paramName];
            path = params[paramName];
            console.log(route.params);
          }
          url = `${url}${path}/`;
          const breadcrumb = {
            label: label,
            url: url
          };
          this.breadCrumbs.push(breadcrumb);
        }
      })))).subscribe();
      route = route.firstChild;
    }
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 5000,
    });
  }

  async handlePathParams(route: ActivatedRoute, breadCrumb: BreadCrumb): Promise<string> {
    return await route.data.pipe(
      map((data: any) => {
        breadCrumb.url.replace(breadCrumb.label, route.params[breadCrumb.label.replace(':','')]);
        breadCrumb.label = data.title;
        return data.title;
      }))
      .toPromise();
  }

  public handleFatalError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      if (error instanceof NotFoundError) {
        this.logger.error(`${operation} failed: ${error.message}. Redirecting to page-not-found`);
        this.router.navigate(['/page-not-found']);
      } else {
        this.logger.error(`${operation} failed: ${error.message}. Redirecting to error-page`);
        this.router.navigate(['/error-page']);
      }
      return of(result as T);
    };
  }

  public handleNonFatalError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      this.logger.error(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

  public showErrorOnSnackbar<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      this.logger.error(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
