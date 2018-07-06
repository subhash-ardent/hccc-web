import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {CourseCatalogueComponent} from './course-catalogue/course-catalogue.component';
import {CourseCreateComponent} from './course-create/course-create.component';
import {CourseEnrollComponent} from './course-enroll/course-enroll.component';
import {CourseIndemnityComponent} from './course-indemnity/course-indemnity.component';
import {TeacherListComponent} from './teacher-list/teacher-list.component';
import {TeacherOnboardComponent} from './teacher-onboard/teacher-onboard.component';
import {CourseDetailsComponent} from './course-details/course-details.component';
import {CourseDetailsUpdateComponent} from './course-details-update/course-details-update.component';
import {TeacherDetailsComponent} from './teacher-details/teacher-details.component';
import {TeacherDetailsUpdateComponent} from './teacher-details-update/teacher-details-update.component';
import {CourseBaseComponent} from './course-base/course-base.component';
import {TeacherBaseComponent} from './teacher-base/teacher-base.component';

import {AuthGuardService} from '../services/auth-guard.service';
import {YandeChairGuardService} from '../services/yande-chair-guard.service';
import {CourseListResolveService} from './services/course-list-resolve.service';
import {CourseDetailsResolveService} from './services/course-details-resolve.service';


const yandeRoutes: Routes = [
  {path: '', redirectTo: '/course/catalogue', pathMatch: 'full'},
  {
    path: 'course', component: CourseBaseComponent,
    children: [
      {
        path: 'catalogue', component: CourseCatalogueComponent, resolve: {
          courses: CourseListResolveService
        }
      },
      {
        path: 'details/:id', component: CourseDetailsComponent, resolve: {
          course: CourseDetailsResolveService
        }
      },
      {
        path: 'enroll/:id', component: CourseEnrollComponent,
        canActivate: [AuthGuardService],
        resolve: {
          course: CourseDetailsResolveService
        }
      },
      {path: 'indemnity/:id', component: CourseIndemnityComponent, canActivate: [AuthGuardService]},
      {path: 'update/:id', component: CourseDetailsUpdateComponent, canActivate: [YandeChairGuardService]},
      {path: 'create', component: CourseCreateComponent, canActivate: [YandeChairGuardService]},
      {path: '', redirectTo: '/catalogue', pathMatch: 'full'},
    ]
  },
  {
    path: 'teacher',
    component: TeacherBaseComponent,
    canActivate: [YandeChairGuardService],
    children: [
      {
        path: '',
        canActivateChild: [YandeChairGuardService],
        children: [
          {path: 'list', component: TeacherListComponent},
          {path: 'onboard', component: TeacherOnboardComponent},
          {path: 'details/:id', component: TeacherDetailsComponent},
          {path: 'update/:id', component: TeacherDetailsUpdateComponent},
          {path: '', redirectTo: 'list', pathMatch: 'full'},
        ],
      }
    ]
  }
];


@NgModule({
  imports: [
    RouterModule.forChild(yandeRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: [
    CourseListResolveService
  ]
})
export class YandeRoutingModule {
}


