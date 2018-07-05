import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';

import { AppBannerComponent} from './app-banner/app-banner.component';
import { AppHeaderComponent} from './app-header/app-header.component';
import { PageNotFoundComponent} from './page-not-found/page-not-found.component';
import { LoginRedirectComponent} from './login-redirect/login-redirect.component';
import { CoreRoutingModule } from './core-routing.module';
import { GenericErrorComponent } from './generic-error/generic-error.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { SideNavbarComponent } from './side-navbar/side-navbar.component';


@NgModule({
  imports: [
    CommonModule,
    CoreRoutingModule,
    MaterialModule
  ],
  declarations: [
    AppBannerComponent,
    AppHeaderComponent,
    PageNotFoundComponent,
    LoginRedirectComponent,
    GenericErrorComponent,
    SpinnerComponent,
    SideNavbarComponent
  ],
  exports: [
    AppBannerComponent,
    AppHeaderComponent,
    SpinnerComponent,
    SideNavbarComponent
  ]
})
export class CoreModule { }
