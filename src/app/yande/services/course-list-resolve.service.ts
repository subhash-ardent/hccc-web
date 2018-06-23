import { Injectable }             from '@angular/core';
import { Router, Resolve, RouterStateSnapshot,
  ActivatedRouteSnapshot } from '@angular/router';
import { Observable }             from 'rxjs';
import { map, take }              from 'rxjs/operators';

import { Course }  from '../../models/course';
import { YandeApiService }  from '../../services/yande-api.service';

@Injectable({
  providedIn: 'root'
})
export class CourseListResolveService implements Resolve<Course>  {

  constructor(private apiService: YandeApiService, private router: Router) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Course> {

    return this.apiService.getCourses().pipe(
      take(1),
      map(courses => {
        if (courses) {
          return courses;
        } else { // id not found
          this.router.navigate(['/page-not-found']);
          return null;
        }
      })
    );
  }
}
