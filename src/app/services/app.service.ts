import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import {Account} from '../models/account';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private yandeChairRoleLabel = "Chairman - Youth and Cultural";
  private hcccGuestUserName = "hccc-guest-user";
  private currentUserUrl = 'yande/user/current';  // URL to web api

  public currentUser: Account;
  isLoggedIn = false;
  isYandeChair = false;
  authRedirectUrl:string;
  loading:boolean = false;

  constructor(
    private http: HttpClient,
    private messageService: MessageService) {

    this.getCurrentUser()
      .subscribe(user => {
        this.currentUser = user;
        this.log(this.currentUser.userName);
        if(this.currentUser && this.currentUser.userName && this.currentUser.userName !== this.hcccGuestUserName) {
          this.isLoggedIn = true;
          this.log(this.currentUser.userName);
        }
        if(this.currentUser && this.currentUser.roles && this.currentUser.roles.length > 0) {
          if(this.currentUser.roles.includes(this.yandeChairRoleLabel))
            this.isYandeChair = true;
        }
      });



  }
  /** GET current user by id. Will 404 if id not found */
  getCurrentUser(): Observable<Account> {
    const url = `${this.currentUserUrl}`;
    return this.http.get<Account>(url).pipe(
      tap(_ => this.log(`fetched current user`)),
      catchError(this.handleError<Account>(`getCurrentUser`))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a AppService message with the MessageService */
  private log(message: string) {
    this.messageService.add('AppService: ' + message);
  }
}
