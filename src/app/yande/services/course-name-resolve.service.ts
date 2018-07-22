import { Injectable } from '@angular/core';
import {catchError, map, take} from 'rxjs/operators';
import {YandeApiService} from './yande-api.service';
import {ActivatedRouteSnapshot, Router, RouterStateSnapshot} from '@angular/router';
import {Course} from '../models/course';
import {AppService} from '../../app.service';

@Injectable({
  providedIn: 'root'
})
export class CourseNameResolveService {

  constructor(private appService: AppService,
              private apiService: YandeApiService,
              private router: Router) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<string> {
    return this.getCourseName(route);
  }

  async getCourseName(route: ActivatedRouteSnapshot): Promise<string> {
    if (!this.apiService.isCoursesLoaded) {
      await this.apiService.loadCourses();
    }
    return this.apiService.courses$.pipe(
      take(1),
      map(courses => {
        if (!courses || courses.length === 0) {
          throw new Error('Course Catalogue is Empty');
        } else {
          const course = courses[parseInt(route.params['id']) - 1];
          console.log(course.courseName);
          return course.courseName;
        }
      }),
      catchError(this.appService.handleFatalError<string>(`get course name`))
    ).toPromise();
  }
}
