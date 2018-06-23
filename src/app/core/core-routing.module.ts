import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import { LoginRedirectComponent} from "./login-redirect/login-redirect.component";

const coreRoutes: Routes = [
  { path: 'login-redirect', component: LoginRedirectComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(coreRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class CoreRoutingModule { }
