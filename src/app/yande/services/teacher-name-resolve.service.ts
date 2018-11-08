import { Injectable } from '@angular/core';
import {catchError, map, take} from 'rxjs/operators';
import {YandeApiService} from './yande-api.service';
import {ActivatedRouteSnapshot, Router, RouterStateSnapshot} from '@angular/router';
import {AppService} from '../../app.service';
import {FullNamePipe} from '../../core/pipes/full-name.pipe';

@Injectable({
  providedIn: 'root'
})
export class TeacherNameResolveService {


  constructor(private appService: AppService,
              private apiService: YandeApiService,
              private router: Router) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<string> {
    return this.getTeacherName(route);
  }

  async getTeacherName(route: ActivatedRouteSnapshot): Promise<string> {
    if (!this.apiService.isTeachersLoaded) {
      await this.apiService.loadTeachers();
    }
    return this.apiService.teachers$.pipe(
      take(1),
      map(teachers => {
        if (!teachers || teachers.length === 0) {
          throw new Error('Teacher List is Empty');
        } else {
          const teacher = teachers.find(t => t.devotee && t.devotee.userName && t.devotee.userName === route.params['id']);
          const name = new FullNamePipe().transform(teacher.devotee);
          console.log(name);
          return name;
        }
      }),
      catchError(this.appService.handleFatalError<string>(`get teacher name`))
    ).toPromise();
  }
}
