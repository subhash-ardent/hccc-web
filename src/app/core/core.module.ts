import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';

import { AppBannerComponent} from './components/app-banner/app-banner.component';
import { AppHeaderComponent} from './components/app-header/app-header.component';
import { PageNotFoundComponent} from './components/page-not-found/page-not-found.component';
import { LoginRedirectComponent} from './components/login-redirect/login-redirect.component';
import { CoreRoutingModule } from './core-routing.module';
import { GenericErrorComponent } from './components/generic-error/generic-error.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { SideNavbarComponent } from './components/side-navbar/side-navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { FullNamePipe } from './pipes/full-name.pipe';
import { BreadCrumbComponent } from './components/bread-crumb/bread-crumb.component';
import { HomeComponent } from './components/home/home.component';


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
    SideNavbarComponent,
    FooterComponent,
    FullNamePipe,
    BreadCrumbComponent,
    HomeComponent
  ],
  exports: [
    AppBannerComponent,
    AppHeaderComponent,
    SpinnerComponent,
    SideNavbarComponent,
    FooterComponent,
    FullNamePipe
  ]
})
export class CoreModule { }
