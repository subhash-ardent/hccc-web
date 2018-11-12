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
import {Devotee} from '../../core/models/devotee';
import {SnackBarService} from '../../core/services/snack-bar.service';
import {IndemnityForm} from '../models/indemnity-forms';
import {FamilyMember} from '../../core/models/family-member';


@Injectable({
  providedIn: 'root'
})
export class YandeApiService {

  private coursesEndpointUrl = 'yande/api/courses';
  private teachersEndpointUrl = 'yande/api/teachers';
  private devoteeEndpointUrl = 'yande/api/devotees';
  private indemnityFormsEndpointUrl = 'yande/api/indemnityForms';
  private logger = new LoggerService(this.constructor.name);
  public isCoursesLoaded = false;
  public isTeachersLoaded = false;
  public isIndemnityFormsLoaded = false;
  public courses$: BehaviorSubject<Course[]> = new BehaviorSubject(null);
  public teachers$: BehaviorSubject<Teacher[]> = new BehaviorSubject(null);
  public indemnityForms$: BehaviorSubject<IndemnityForm[]> = new BehaviorSubject(null);

  constructor(
    private appService: AppService,
    private snackBarService: SnackBarService,
    private http: HttpClient) {
    // this.loadCourses();
    // this.loadTeachers();
    // this.loadIndemnityForms();
  }

  // Courses

  // Creates and returns a `Course` object from response payload

  createCourse(res): Course {
    if (!res) {
      return null;
    }
    const c = new Course();

    c.courseId = res.courseId || '';
    c.courseName = res.courseName || '';
    c.ageRestrictions = res.ageRestrictions || '';
    c.courseRemarks = res.courseRemarks || '';
    c.isArchived = res.isArchived || '';
    c.isRegistrationOpen = res.isRegistrationOpen || '';
    c.courseStartTime = res.courseStartTime || '';
    c.courseEndTime = res.courseEndTime || '';
    c.courseStartDate = res.courseStartDate || '';
    c.courseEndTime = res.courseEndTime || '';
    c.courseDays = res.courseDays || '';
    c.courseVenue = res.courseVenue || '';
    c.flyerURL = res.flyerURL || '';
    c.slots = res.slots || '';

    c.tags = res.tags || '';
    c.tagsArray = c.tags.split(',');

    c.teachers = [];
    if (res.teachers) {
      res.teachers.forEach(t => c.teachers.push(this.createTeacher(t)));
    }

    c.indemnityForms = [];
    if (res.indemnityForms) {
      res.indemnityForms.forEach(t => c.indemnityForms.push(this.createIndemnityForm(t)));
    }

    return c;
  }

  // Creates and returns a `Teacher` object from response payload

  createTeacher(res): Teacher {
    if (!res) {
      return null;
    }
    const c = new Teacher();

    c.teacherId = res.teacherId || '';
    c.salutation = res.salutation || '';
    c.profilePictureURL = res.profilePictureURL || '';
    c.indemnitySigned = res.indemnitySigned || false;
    c.backgroundVerified = res.backgroundVerified || false;
    c.identityVerified = res.identityVerified || false;
    c.skillSets = res.skillSets || '';
    c.devotee = this.createDevotee(res.devotee);

    return c;
  }

  // Creates and returns a `Devotee` object from response payload

  createDevotee(res): Devotee {
    if (!res) {
      return null;
    }
    const c = new Devotee();

    c.userName = res.userName || '';
    c.firstName = res.firstName || '';
    c.middleName = res.middleName || '';
    c.lastName = res.lastName || '';
    c.phoneResidence = res.phoneResidence || '';
    c.email = res.email || '';
    c.familyMembers = [];
    res.familyInfoDetails.forEach(t => c.familyMembers.push(this.createFamilyMember(t)));
    c.categories = [];

    return c;
  }

  // Creates and returns a `FamilyMember` object from response payload

  createFamilyMember(res): FamilyMember {
    if (!res) {
      return null;
    }
    const c = new FamilyMember();

    c.firstName = res.firstName || '';
    c.lastName = res.lastName || '';
    c.relation = res.relation || '';

    return c;
  }


  createIndemnityForm(res): IndemnityForm {
    if (!res) {
      return null;
    }
    const c = new IndemnityForm();

    c.indemnityFormId = res.indemnityFormId || '';
    c.indemnityFormTitle = res.indemnityFormTitle || '';
    c.indemnityFormDescription = res.indemnityFormDescription || '';
    c.indemnityFormVersion = res.indemnityFormVersion || '';
    c.indemnityFormURL = res.indemnityFormURL || '';

    return c;
  }

  async loadCourses() {
    try {
      const intentionalDelay = () => timer(1000);
      const res = await this.http.get<any>(this.coursesEndpointUrl).pipe(
        take(1),
        delayWhen(intentionalDelay),
        catchError(this.appService.handleFatalError('loadCourses'))
      ).toPromise();
      this.logger.info('Fetched courses');
      // const res = [];
      if (Array.isArray(res) || res.length) {
        this.courses$.next(res.map(r => this.createCourse(r)));
        this.isCoursesLoaded = true;
      } else {
        throw new Error('Invalid payload');
      }
    } catch (e) {
      this.appService.handleFatalError<Course[]>('loadCourses')(e);
    }
  }

  addCourse(newCourse) {
    return this.http.post<Course>(this.coursesEndpointUrl, newCourse).pipe(
      tap(
        res => {
          if (!res) {
            throw new Error('Invalid Response');
          }
          this.courses$.value.push(res);
          this.courses$.next(this.courses$.value);
          this.logger.info(`${newCourse.courseName} added successfully`);
          this.snackBarService.showSuccessSnackBar('New Course Added Successfully');
        })
    );
  }

  deleteCourse(deletedCourse: Course) {
    return this.http.delete(this.coursesEndpointUrl + '/' + deletedCourse.courseId).pipe(
      tap(
        res => {
          const courses = this.courses$.value;
          const index = courses.findIndex((course: Course) => course.courseId === deletedCourse.courseId);
          courses.splice(index, 1);
          console.log(index, courses);
          this.courses$.next(courses);
          this.logger.info(`${deletedCourse.courseName} deleted successfully`);
        })
    );
  }

  updateCourse(updates, courseId) {
    return this.http.patch(this.coursesEndpointUrl + '/' + courseId, updates).pipe(
      tap(
        res => {
          const courses = this.courses$.value;
          const index = courses.findIndex((course: Course) => course.courseId === courseId);
          courses[index] = Object.assign(courses[index], updates);
          this.courses$.next(courses);
          this.logger.info(`${courses[index].courseName} updated successfully`);
        })
    );
  }

  // Teachers

  async loadTeachers() {
    try {
      const intentionalDelay = () => timer(1000);
      const res = await this.http.get<any>(this.teachersEndpointUrl).pipe(
        take(1),
        delayWhen(intentionalDelay),
        catchError(this.appService.handleFatalError<Teacher[]>('loadTeachers'))
      ).toPromise();
      this.logger.info('Fetched teachers');
      // const res = [];
      if (res) {
        this.teachers$.next(res.map(r => this.createTeacher(r)));
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

  // Devotee

  getDevotee(mobileNumber: string): Observable<[Devotee]> {
    return this.http.get<[Devotee]>(this.devoteeEndpointUrl + '/phoneResidence/' + mobileNumber).pipe(
      take(1),
      catchError(this.appService.handleFatalError<[Devotee]>('getDevotee'))
    );
  }

  // Indemnity Forms

  async loadIndemnityForms() {
    try {
      const intentionalDelay = () => timer(1000);
      const res = await this.http.get<any>(this.indemnityFormsEndpointUrl).pipe(
        take(1),
        delayWhen(intentionalDelay),
        catchError(this.appService.handleFatalError<IndemnityForm[]>('loadIndemnityForms'))
      ).toPromise();
      this.logger.info('Fetched teachers');
      // const res = [];
      if (res) {
        this.indemnityForms$.next(res.map(r => this.createIndemnityForm(r)));
        this.isIndemnityFormsLoaded = true;
      } else {
        throw new Error('Invalid payload');
      }
    } catch (e) {
      this.appService.handleFatalError<IndemnityForm[]>('loadIndemnityForms')(e);
    }
  }
}

