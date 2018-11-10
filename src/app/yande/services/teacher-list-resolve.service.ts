import {Injectable} from '@angular/core';
import {
  Router, Resolve, RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import {Observable, timer} from 'rxjs';
import {map, take, delayWhen, catchError} from 'rxjs/operators';

import {Teacher} from '../models/teacher';
import {YandeApiService} from './yande-api.service';
import {AppService} from '../../app.service';

@Injectable({
  providedIn: 'root'
})
export class TeacherListResolveService implements Resolve<Teacher[]> {

  constructor(private appService: AppService,
              private apiService: YandeApiService,
              private router: Router) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<Teacher[]> {
    return this.getTeachers();
  }

  async getTeachers(): Promise<Teacher[]> {
    if (!this.apiService.isTeachersLoaded) {
      await this.apiService.loadTeachers();
    }
    return this.apiService.teachers$.pipe(
      take(1),
      map(teachers => {
        // if (!teachers || teachers.length === 0) {
        //   throw new Error('Teachers List is Empty');
        // } else {
          return teachers;
        // }
      }),
      catchError(this.appService.handleFatalError<Teacher[]>(`get teachers`))
    ).toPromise();
  }
}
