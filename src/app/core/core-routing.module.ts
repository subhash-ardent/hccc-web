import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {PageNotFoundComponent} from './components/page-not-found/page-not-found.component';
import {LoginRedirectComponent} from './components/login-redirect/login-redirect.component';
import {GenericErrorComponent} from './components/generic-error/generic-error.component';

const coreRoutes: Routes = [
  {path: 'login-redirect', component: LoginRedirectComponent},
  {path: 'error-page', component: GenericErrorComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(coreRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class CoreRoutingModule {
}
