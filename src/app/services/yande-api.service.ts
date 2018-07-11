import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Course} from '../models/course';
import {CourseCollection} from '../models/courseCollection';
import {Teacher} from '../models/teacher';
import {BehaviorSubject, Observable, of, timer} from 'rxjs';
import {LoggerService} from './logger.service';
import {catchError, tap, take, delayWhen} from 'rxjs/operators';
import {AppService} from './app.service';
import {Account} from '../models/account';


@Injectable({
  providedIn: 'root'
})
export class YandeApiService {

  private coursesEndpointUrl = 'yande/api/courses';
  private teachersEndpointUrl = 'yande/api/teachers';
  private logger = new LoggerService(this.constructor.name);
  public isCoursesLoaded = false;
  public courses$: BehaviorSubject<Course[]> = new BehaviorSubject(null);
  public teachers$: BehaviorSubject<Teacher[]> = new BehaviorSubject(null);

  constructor(
    private appService: AppService,
    private http: HttpClient) {
    this.loadCourses();
  }

  // Courses

  async loadCourses() {
    try {
      const intentionalDelay = () => timer(1000);
      const res = await this.http.get<CourseCollection>(this.coursesEndpointUrl).pipe(
        take(1),
        delayWhen(intentionalDelay),
        catchError(this.appService.handleFatalError<CourseCollection>('loadCourses'))
      ).toPromise();
      this.logger.info('Fetched courses');
      if (res && res.courses) {
        this.courses$.next(res.courses);
        this.isCoursesLoaded = true;
      } else {
        throw new Error('Invalid payload');
      }
    } catch (e) {
      this.appService.handleFatalError<CourseCollection>('loadCourses')(e);
    }

  }

  addCourse(newCourse: Course) {
    console.log('prinitng newCourse', JSON.stringify({course: newCourse}));
    return this.http.post<{course: Course}>(this.coursesEndpointUrl, {course: newCourse}).pipe(
      tap(
        res => {
          if (!res.course) { throw new Error('Invalid Response'); }
          this.courses$.value.push(res.course);
          this.courses$.next(this.courses$.value);
          this.logger.info(`${newCourse.courseName} added successfully`);
        }),
      catchError(this.appService.handleFatalError<Course[]>(`add course`))
    );
  }

  updateCourse(updatedCourse: Course) {
    return this.http.patch<Course>('/courses', JSON.stringify(updatedCourse)).pipe(
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

  loadTeachers() {
    this.http.get<Teacher[]>(this.teachersEndpointUrl)
      .subscribe(
        res => {
          this.teachers$.next(res);
        },
        err => this.logger.error('Error retrieving Teachers')
      );
  }

  addTeacher(newTeacher: Teacher) {
    return this.http.post<Teacher>('/Teachers', JSON.stringify(newTeacher)).pipe(
      tap(
        res => {
          this.teachers$.value.push(res);
          this.teachers$.next(this.teachers$.value);
          this.logger.info(`${newTeacher.userName} added successfully`);
        })
    );
  }

  updateTeacher(updatedTeacher: Teacher) {
    return this.http.patch<Teacher>('/tVs', JSON.stringify(updatedTeacher)).pipe(
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


}

