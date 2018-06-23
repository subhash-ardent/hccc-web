import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CourseCatalogueComponent} from "./course-catalogue/course-catalogue.component";
import { CourseCreateComponent} from "./course-create/course-create.component";
import { CourseEnrollComponent} from "./course-enroll/course-enroll.component";
import { CourseIndemnityComponent} from "./course-indemnity/course-indemnity.component";
import { TeacherListComponent} from "./teacher-list/teacher-list.component";
import { TeacherOnboardComponent} from "./teacher-onboard/teacher-onboard.component";
import { CourseDetailsComponent } from './course-details/course-details.component';
import { CourseDetailsUpdateComponent } from './course-details-update/course-details-update.component';
import { TeacherDetailsComponent } from './teacher-details/teacher-details.component';
import { TeacherDetailsUpdateComponent } from './teacher-details-update/teacher-details-update.component';


const yandeRoutes: Routes = [
  { path: '',   redirectTo: '/course/catalogue', pathMatch: 'full' },
  { path: 'course/catalogue',  component: CourseCatalogueComponent },
  { path: 'course/create',  component: CourseCreateComponent },
  { path: 'course/details/:id', component: CourseDetailsComponent },
  { path: 'course/update/:id', component: CourseDetailsUpdateComponent },
  { path: 'course/enroll/:id', component: CourseEnrollComponent },
  { path: 'course/indemnity/:id', component: CourseIndemnityComponent },
  { path: 'teacher/list', component: TeacherListComponent },
  { path: 'teacher/onboard', component: TeacherOnboardComponent },
  { path: 'teacher/details/:id', component: TeacherDetailsComponent },
  { path: 'teacher/update/:id', component: TeacherDetailsUpdateComponent }
];


@NgModule({
  imports: [
    RouterModule.forChild(yandeRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class YandeRoutingModule { }



/*
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeacherListComponent }      from './yande/teacher-list/teacher-list.component';
import { CourseCatalogueComponent } from "./yande/course-catalogue/course-catalogue.component";
import { CourseComponent } from './course/course.component';
import { CreateCourseComponent } from './create-course/create-course.component';
import { EnrollCourseComponent } from './enroll-course/enroll-course.component';
import { LoginRedirectComponent } from './core/login-redirect/login-redirect.component';
import {AuthGuard} from './services/auth-guard.service';

const routes: Routes = [
  { path: 'login', component: LoginRedirectComponent },
  { path: 'teachers', component: TeacherListComponent },
  {
    path: 'courses',
    component: CourseComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        children: [
          { path: 'new', component: CreateCourseComponent },
          { path: 'enroll', component: EnrollCourseComponent },
          { path: '', component: CourseCatalogueComponent }
        ]
      }
    ]
  },
  { path: 'home', component: CourseCatalogueComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}

 */
