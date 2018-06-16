import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeacherListComponent }      from './teacher-list/teacher-list.component';
import {CourseCatalogueComponent} from "./course-catalogue/course-catalogue.component";


const routes: Routes = [
  { path: 'teachers', component: TeacherListComponent },
  { path: 'courses', component: CourseCatalogueComponent},
  { path: 'home', component: CourseCatalogueComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
