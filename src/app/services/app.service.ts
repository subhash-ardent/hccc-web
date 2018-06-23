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

  private currentUserUrl = 'yande/user/current';  // URL to web api
  public currentUser: Account;
  isLoggedIn = false;
  authRedirectUrl:string;
  constructor(
    private http: HttpClient,
    private messageService: MessageService) {

    this.getCurrentUser()
      .subscribe(user => this.currentUser = user);

    if(this.currentUser && this.currentUser.userName && this.currentUser.userName !== 'hccc-guest-user') {
      this.isLoggedIn = true;
    }

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
