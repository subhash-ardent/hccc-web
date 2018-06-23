import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';

import { AppBannerComponent} from "./app-banner/app-banner.component";
import { AppHeaderComponent} from "./app-header/app-header.component";
import { PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import { LoginRedirectComponent} from "./login-redirect/login-redirect.component";
import { CoreRoutingModule } from './core-routing.module';


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
    LoginRedirectComponent
  ],
  exports: [
    AppBannerComponent,
    AppHeaderComponent
  ]
})
export class CoreModule { }
