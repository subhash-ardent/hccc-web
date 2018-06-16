import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeacherListComponent }      from './teacher-list/teacher-list.component';
import {CourseCatelogueComponent} from "./course-catelogue/course-catelogue.component";


const routes: Routes = [
  { path: 'teachers', component: TeacherListComponent },
  { path: 'courses', component: CourseCatelogueComponent},
  { path: 'home', component: CourseCatelogueComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
