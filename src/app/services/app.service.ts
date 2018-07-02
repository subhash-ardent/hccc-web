import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {catchError, map, tap} from 'rxjs/operators';
import {Account} from '../models/account';
import {LoggerService} from './logger.service';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private yandeChairRoleLabel = 'Chairman - Youth and Cultural';
  private hcccGuestUserName = 'hccc-guest-user';
  private currentUserUrl = 'yande/user/current';  // URL to web api
  private logger = new LoggerService(this.constructor.name);

  public currentUser: Account;
  isLoggedIn = false;
  isYandeChair = false;
  authRedirectUrl: string;
  loading = false;

  constructor(
    private http: HttpClient) {
    this.getCurrentUser()
      .subscribe(user => {
        this.currentUser = user;
        this.logger.debug(this.currentUser.userName);
        if (this.currentUser && this.currentUser.userName && this.currentUser.userName !== this.hcccGuestUserName) {
          this.isLoggedIn = true;
          this.logger.debug(this.currentUser.userName);
        }
        if (this.currentUser && this.currentUser.roles && this.currentUser.roles.length > 0) {
          if (this.currentUser.roles.includes(this.yandeChairRoleLabel)) {
            this.isYandeChair = true;
          }
        }
      });
  }

  /** GET current user by id. Will 404 if id not found */
  getCurrentUser(): Observable<Account> {
    const url = `${this.currentUserUrl}`;
    return this.http.get<Account>(url).pipe(
      tap(_ => this.logger.info(`fetched current user`)),
      catchError(this.handleError<Account>(`getCurrentUser`))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      this.logger.error(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

}
