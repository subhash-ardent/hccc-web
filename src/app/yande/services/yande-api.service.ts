import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Course} from '../models/course';
import {CourseCollection} from '../models/course-collection';
import {TeacherCollection} from '../models/teacher-collection';
import {Teacher} from '../models/teacher';
import {BehaviorSubject, Observable, of, timer} from 'rxjs';
import {LoggerService} from '../../core/services/logger.service';
import {catchError, tap, take, delayWhen} from 'rxjs/operators';
import {AppService} from '../../app.service';
import {Account} from '../../core/models/account';
import {SnackBarService} from '../../core/services/snack-bar.service';


@Injectable({
  providedIn: 'root'
})
export class YandeApiService {

  private coursesEndpointUrl = 'yande/api/courses';
  private teachersEndpointUrl = 'yande/api/teachers';
  private devoteeEndpointUrl = 'yande/api/accounts';
  private logger = new LoggerService(this.constructor.name);
  public isCoursesLoaded = false;
  public isTeachersLoaded = false;
  public courses$: BehaviorSubject<Course[]> = new BehaviorSubject(null);
  public teachers$: BehaviorSubject<Teacher[]> = new BehaviorSubject(null);

  constructor(
    private appService: AppService,
    private snachBarService: SnackBarService,
    private http: HttpClient) {
    this.loadCourses();
    this.loadTeachers();
  }

  // Courses

  async loadCourses() {
    try {
      const intentionalDelay = () => timer(1000);
      const res = await this.http.get<Course[]>(this.coursesEndpointUrl).pipe(
        take(1),
        delayWhen(intentionalDelay),
        catchError(this.appService.handleFatalError<Course[]>('loadCourses'))
      ).toPromise();
      this.logger.info('Fetched courses');
      if (res) {
        this.courses$.next(res);
        this.isCoursesLoaded = true;
      } else {
        throw new Error('Invalid payload');
      }
    } catch (e) {
      this.appService.handleFatalError<Course[]>('loadCourses')(e);
    }
  }

  addCourse(newCourse: Course) {
    return this.http.post<{course: Course}>(this.coursesEndpointUrl, {course: newCourse}).pipe(
      tap(
        res => {
          if (!res.course) { throw new Error('Invalid Response'); }
          this.courses$.value.push(res.course);
          this.courses$.next(this.courses$.value);
          this.logger.info(`${newCourse.courseName} added successfully`);
          this.snachBarService.showSuccessSnackBar('New Course Added Successfully');
        })
    );
  }

  updateCourse(updatedCourse: Course) {
    return this.http.patch<Course>(this.coursesEndpointUrl, JSON.stringify(updatedCourse)).pipe(
      tap(
        res => {
          const courses = this.courses$.value;
          const index = courses.findIndex((course: Course) => course.courseId === updatedCourse.courseId);
          courses.splice(index, 1, updatedCourse);
          this.courses$.next(courses);
          this.logger.info(`${updatedCourse.courseName} updated successfully`);
        })
    );
  }

  // Teachers

  async loadTeachers() {
    try {
      const intentionalDelay = () => timer(1000);
      const res = await this.http.get<Teacher[]>(this.teachersEndpointUrl).pipe(
        take(1),
        delayWhen(intentionalDelay),
        catchError(this.appService.handleFatalError<Teacher[]>('loadTeachers'))
      ).toPromise();
      this.logger.info('Fetched teachers');
      if (res) {
        this.teachers$.next(res);
        this.isTeachersLoaded = true;
      } else {
        throw new Error('Invalid payload');
      }
    } catch (e) {
      this.appService.handleFatalError<Teacher[]>('loadTeachers')(e);
    }
  }

  addTeacher(newTeacher: Teacher) {
    return this.http.post<Teacher>(this.teachersEndpointUrl, {teacher: newTeacher}).pipe(
      tap(
        res => {
          this.teachers$.value.push(res);
          this.teachers$.next(this.teachers$.value);
          this.logger.info(`Teacher added successfully`);
        })
    );
  }

  updateTeacher(updatedTeacher: Teacher) {
    return this.http.patch<Teacher>(this.teachersEndpointUrl, JSON.stringify(updatedTeacher)).pipe(
      tap(
        res => {
          const teachers = this.teachers$.value;
          const index = teachers.findIndex((teacher: Teacher) => teacher.userName === updatedTeacher.userName);
          teachers.splice(index, 1, updatedTeacher);
          this.teachers$.next(teachers);
          this.logger.info(`${updatedTeacher.userName} updated successfully`);
        })
    );
  }

  // Account

  getDevotee(mobileNumber: string): Observable<[Account]> {
    return this.http.get<[Account]>(this.devoteeEndpointUrl + '?phoneNumber=' + mobileNumber).pipe(
      take(1),
      tap(a => console.log(a)),
      catchError(this.appService.handleFatalError<[Account]>('getDevotee'))
    );
  }
}

