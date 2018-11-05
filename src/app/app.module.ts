import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FlexLayoutModule} from '@angular/flex-layout';

// Components
import {AppComponent} from './app.component';

// Modules
import {YandeModule} from './yande/yande.module';
import {CoreModule} from './core/core.module';
import {AppRoutingModule} from './app-routing.module';
import {MaterialModule} from './material.module';

import {AuthGuardService} from './core/services/auth-guard.service';
import {AppService} from './app.service';


@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    MaterialModule,
    FlexLayoutModule,
    YandeModule,
    CoreModule,
    AppRoutingModule,
  ],
  providers: [
    AuthGuardService,
    AppService
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
