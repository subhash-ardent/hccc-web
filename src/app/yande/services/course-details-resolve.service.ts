import {Injectable} from '@angular/core';
import {
  Router, Resolve, RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import {Observable, timer} from 'rxjs';
import {map, take, delayWhen} from 'rxjs/operators';

import {Course} from '../../models/course';
import {YandeApiService} from '../../services/yande-api.service';

@Injectable({
  providedIn: 'root'
})
export class CourseDetailsResolveService {

  constructor(private apiService: YandeApiService, private router: Router) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Course> {

    return this.apiService.getCoursesAsObservable().pipe(
      take(this.apiService.isCoursesLoaded ? 1 : 2),
      map(courses => {
        if (courses) {
          return courses[parseInt(route.params['id']) - 1];
        } else {
          return null;
        }
      })
    );
  }
}
