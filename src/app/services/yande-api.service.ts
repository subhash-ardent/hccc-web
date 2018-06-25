import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Course } from '../models/course';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class YandeApiService {

  private coursesEndpointUrl = 'yande/api/courses';

  constructor(private http: HttpClient,
              private messageService: MessageService) { }

  getCourses(): Observable<Course[]> {
    const url = `${this.coursesEndpointUrl}`;
    return this.http.get<Course[]>(url)
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
  private log(message: string) {
    this.messageService.add('AppService: ' + message);
  }
}
