import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {PageNotFoundComponent} from './components/page-not-found/page-not-found.component';
import {LoginRedirectComponent} from './components/login-redirect/login-redirect.component';
import {GenericErrorComponent} from './components/generic-error/generic-error.component';

const coreRoutes: Routes = [
  {
    path: 'login-redirect',
    component: LoginRedirectComponent,
    data: {title: 'Login Redirect'}
  },
  {
    path: 'error-page',
    component: GenericErrorComponent,
    data: {title: 'Error Page'}
  },
  {
    path: '**',
    component: PageNotFoundComponent,
    data: {title: 'Page Not Found'}
  }
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
