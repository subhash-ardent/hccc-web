import {Injectable} from '@angular/core';
import {
  Router, Resolve, RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import {Observable, timer} from 'rxjs';
import {map, take, delayWhen, catchError} from 'rxjs/operators';

import {Course} from '../../models/course';
import {NotFoundError} from '../../models/NotFoundError';
import {YandeApiService} from '../../services/yande-api.service';
import {AppService} from '../../services/app.service';

@Injectable({
  providedIn: 'root'
})
export class CourseDetailsResolveService {

  constructor(private appService: AppService,
              private apiService: YandeApiService,
              private router: Router) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Course> {

    return this.apiService.getCoursesAsObservable().pipe(
      take(this.apiService.isCoursesLoaded ? 1 : 2),
      map(courses => {
        if (courses) {
          const course = courses[parseInt(route.params['id']) - 1];
          if (course) {
            return course;
          } else {
            throw new RangeError(`Course with id, ${parseInt(route.params['id']) - 1} cannot be found`);
          }
        } else {
          return null;
        }
      }),
      catchError(this.appService.handleFatalError<Course>(`get course`))
    );
  }
}
