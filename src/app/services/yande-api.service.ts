import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable} from 'rxjs';
import { Course } from '../models/course';

@Injectable({
  providedIn: 'root'
})
export class YandeApiService {

  private coursesEndpointUrl = 'yande/api/courses';

  constructor(private http: HttpClient) { }

  getCourses(): Observable<Course[]> {
    const url = `${this.coursesEndpointUrl}`;
    return this.http.get<Course[]>(url);
  }
}
