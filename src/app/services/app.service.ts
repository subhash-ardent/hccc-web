import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {Account} from '../models/account';
import {LoggerService} from './logger.service';
import {Router} from '@angular/router';

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

  authRedirectUrl: string;
  loading = false;

  constructor(
    private http: HttpClient,
    private router: Router) {
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

  public handleFatalError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      this.logger.error(`${operation} failed: ${error.message}`);
      this.router.navigate(['/error-page']);
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
