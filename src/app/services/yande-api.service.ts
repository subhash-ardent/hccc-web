import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Course} from '../models/course';
import {Teacher} from '../models/teacher';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {LoggerService} from './logger.service';
import {catchError, tap} from 'rxjs/operators';


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
    private http: HttpClient) {
    this.loadCourses();
  }

  // Courses

  getCoursesAsObservable(): BehaviorSubject<Course[]> {
    return this.courses$;
  }

  loadCourses() {
    this.http.get<{courses: Course[]}>(this.coursesEndpointUrl)
      .subscribe(
        res => {
          this.logger.info('Fetched courses successfully');
          const courses = res.courses ? res.courses : [];
          this.courses$.next(courses);
          this.isCoursesLoaded = true;
        },
        err => this.logger.error('Error retrieving Courses')
      );
  }

  addCourse(newCourse: Course) {
    return this.http.post<Course>('/courses', JSON.stringify(newCourse)).pipe(
      tap(
        res => {
          this.courses$.value.push(res);
          this.courses$.next(this.courses$.value);
          this.logger.info(`${newCourse.courseName} added successfully`);
        })
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

  getTeachersAsObservable(): BehaviorSubject<Teacher[]> {
    return this.teachers$;
  }

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

