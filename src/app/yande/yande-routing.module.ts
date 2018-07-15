import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {CourseCatalogueComponent} from './components/course-catalogue/course-catalogue.component';
import {CourseCreateComponent} from './components/course-create/course-create.component';
import {CourseEnrollComponent} from './components/course-enroll/course-enroll.component';
import {CourseIndemnityComponent} from './components/course-indemnity/course-indemnity.component';
import {TeacherListComponent} from './components/teacher-list/teacher-list.component';
import {TeacherOnboardComponent} from './components/teacher-onboard/teacher-onboard.component';
import {CourseDetailsComponent} from './components/course-details/course-details.component';
import {CourseDetailsUpdateComponent} from './components/course-details-update/course-details-update.component';
import {TeacherDetailsComponent} from './components/teacher-details/teacher-details.component';
import {TeacherDetailsUpdateComponent} from './components/teacher-details-update/teacher-details-update.component';
import {CourseBaseComponent} from './components/course-base/course-base.component';
import {TeacherBaseComponent} from './components/teacher-base/teacher-base.component';

import {AuthGuardService} from '../core/services/auth-guard.service';
import {YandeChairGuardService} from './services/yande-chair-guard.service';
import {CourseListResolveService} from './services/course-list-resolve.service';
import {CourseDetailsResolveService} from './services/course-details-resolve.service';
import {TeacherListResolveService} from './services/teacher-list-resolve.service';
import {TeacherDetailsResolveService} from './services/teacher-details-resolve.service';


const yandeRoutes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {
    path: 'course', component: CourseBaseComponent,
    data: {title: 'Courses'},
    children: [
      {
        path: 'catalogue',
        component: CourseCatalogueComponent,
        data: {title: 'Catalogue'},
        resolve: {
          courses: CourseListResolveService
        }
      },
      {
        path: 'details/:id', component: CourseDetailsComponent,
        resolve: {
          course: CourseDetailsResolveService
        },
        data: {title: 'Details'}
      },
      {
        path: 'enroll/:id', component: CourseEnrollComponent,
        canActivate: [AuthGuardService],
        resolve: {
          course: CourseDetailsResolveService
        },
        data: {title: 'Enroll'}
      },
      {path: 'indemnity/:id',
        component: CourseIndemnityComponent,
        canActivate: [AuthGuardService],
        data: {title: 'Indemnity'}},
      {path: 'update/:id',
        component: CourseDetailsUpdateComponent,
        canActivate: [YandeChairGuardService],
        data: {title: 'Edit'}},
      {
        path: 'create', component: CourseCreateComponent,
        canActivate: [YandeChairGuardService],
        resolve: {
          teachers: TeacherListResolveService
        },
        data: {title: 'Create'}
      },
      {path: '', redirectTo: '/course/catalogue', pathMatch: 'full'},
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
          {
            path: 'list', component: TeacherListComponent,
            resolve: {
              teachers: TeacherListResolveService
            }
          },
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


