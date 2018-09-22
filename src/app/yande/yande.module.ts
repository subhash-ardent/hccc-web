import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {MaterialModule} from '../material.module';
import {CoreModule} from '../core/core.module';
import {YandeRoutingModule} from './yande-routing.module';

import {CourseCardComponent} from './components/course-card/course-card.component';
import {CourseCatalogueComponent} from './components/course-catalogue/course-catalogue.component';
import {CourseCreateComponent} from './components/course-create/course-create.component';
import {CourseEnrollComponent} from './components/course-enroll/course-enroll.component';
import {CourseIndemnityComponent} from './components/course-indemnity/course-indemnity.component';
import {CourseSearchNavbarComponent} from './components/course-search-navbar/course-search-navbar.component';
import {TeacherCardComponent} from './components/teacher-card/teacher-card.component';
import {TeacherListComponent} from './components/teacher-list/teacher-list.component';
import {TeacherOnboardComponent} from './components/teacher-onboard/teacher-onboard.component';
import {CourseDetailsComponent} from './components/course-details/course-details.component';
import {CourseDetailsUpdateComponent} from './components/course-details-update/course-details-update.component';
import {TeacherDetailsComponent} from './components/teacher-details/teacher-details.component';
import {TeacherDetailsUpdateComponent} from './components/teacher-details-update/teacher-details-update.component';
import {CourseBaseComponent} from './components/course-base/course-base.component';
import {TeacherBaseComponent} from './components/teacher-base/teacher-base.component';
import { CourseSortPipe } from './pipes/course-sort.pipe';
import { CourseFormComponent } from './components/course-form/course-form.component';
import { CourseFilterPipe } from './pipes/course-filter.pipe';
import { TeacherFormComponent } from './components/teacher-form/teacher-form.component';





@NgModule({
  imports: [
    CommonModule,
    YandeRoutingModule,
    FormsModule,
    MaterialModule,
    CoreModule
  ],
  declarations: [
    CourseCardComponent,
    CourseCatalogueComponent,
    CourseCreateComponent,
    CourseEnrollComponent,
    CourseIndemnityComponent,
    CourseSearchNavbarComponent,
    TeacherCardComponent,
    TeacherListComponent,
    TeacherOnboardComponent,
    CourseDetailsComponent,
    CourseDetailsUpdateComponent,
    TeacherDetailsComponent,
    TeacherDetailsUpdateComponent,
    CourseBaseComponent,
    TeacherBaseComponent,
    CourseSortPipe,
    CourseFormComponent,
    CourseFilterPipe,
    TeacherFormComponent
  ]
})
export class YandeModule {
}
