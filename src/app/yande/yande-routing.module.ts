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
import {CourseNameResolveService} from './services/course-name-resolve.service';
import {TeacherNameResolveService} from './services/teacher-name-resolve.service';


const yandeRoutes: Routes = [
  {
    path: 'courses',
    data: {title: 'Courses'},
    children: [
      {
        path: '',
        component: CourseCatalogueComponent,
        resolve: {
          courses: CourseListResolveService
        }
      },
      {
        path: 'create', component: CourseCreateComponent,
        canActivate: [YandeChairGuardService],
        resolve: {
          teachers: TeacherListResolveService
        },
        data: {title: 'Create'}
      },
      {
        path: ':id',
        resolve: {
          course: CourseDetailsResolveService,
          id: CourseNameResolveService
        },
        data: {title: ':id'},
        children: [
          {
            path: '', component: CourseDetailsComponent
          },
          {
            path: 'enroll', component: CourseEnrollComponent,
            canActivate: [AuthGuardService],
            data: {title: 'Enroll'}
          },
          {
            path: 'indemnity',
            component: CourseIndemnityComponent,
            canActivate: [AuthGuardService],
            data: {title: 'Indemnity'}
          },
          {
            path: 'edit',
            component: CourseDetailsUpdateComponent,
            canActivate: [YandeChairGuardService],
            data: {title: 'Edit'},
            resolve: {
              teachers: TeacherListResolveService
            },
          },
        ]
      }
    ]
  },
  {
    path: 'teachers',
    canActivate: [YandeChairGuardService],
    canActivateChild: [YandeChairGuardService],
    data: {title: 'Teachers'},
    children: [
      {
        path: '',
        component: TeacherListComponent,
        resolve: {
          teachers: TeacherListResolveService
        },
      },
      {
        path: 'onboard',
        component: TeacherOnboardComponent,
        data: {title: 'Onboard'}
      },
      {
        path: ':id',
        canActivateChild: [YandeChairGuardService],
        resolve: {
          teacher: TeacherDetailsResolveService,
          id: TeacherNameResolveService
        },
        data: {title: ':id'},
        children: [
          {
            path: '',
            component: TeacherDetailsComponent
          },
          {
            path: 'edit',
            component: TeacherDetailsUpdateComponent,
            data: {title: 'Edit'}
          }
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


