import { Injectable } from '@angular/core';
import {catchError, map, take} from 'rxjs/operators';
import {YandeApiService} from './yande-api.service';
import {ActivatedRouteSnapshot, Router, RouterStateSnapshot} from '@angular/router';
import {Teacher} from '../models/teacher';
import {AppService} from '../../app.service';

@Injectable({
  providedIn: 'root'
})
export class TeacherDetailsResolveService {

  constructor(private appService: AppService,
              private apiService: YandeApiService,
              private router: Router) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<Teacher> {
    return this.getTeacher(route);
  }

  async getTeacher(route: ActivatedRouteSnapshot): Promise<Teacher> {
    if (!this.apiService.isTeachersLoaded) {
      await this.apiService.loadTeachers();
    }
    return this.apiService.teachers$.pipe(
      take(1),
      map(teachers => {
        if (!teachers || teachers.length === 0) {
          throw new Error('Teacher List is Empty');
        } else {
          const teacher = teachers.find(t => t.account && t.account.userName && t.account.userName === route.params['id']);
          return teacher;
        }
      }),
      catchError(this.appService.handleFatalError<Teacher>(`get teachers`))
    ).toPromise();
  }
}
