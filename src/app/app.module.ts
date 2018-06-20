import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { AppBannerComponent } from './app-banner/app-banner.component';
import { TeacherListComponent } from './teacher-list/teacher-list.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule, MatIconModule, MatMenuModule,
        MatToolbarModule, MatSidenavModule, MatListModule, MatCardModule,
        MatGridListModule} from '@angular/material';
import { AppRoutingModule } from './app-routing.module';
import { CourseCatalogueComponent } from './course-catalogue/course-catalogue.component';
import {FlexLayoutModule} from '@angular/flex-layout'

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    AppBannerComponent,
    TeacherListComponent,
    CourseCatalogueComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FlexLayoutModule,
    MatButtonModule,
    MatCheckboxModule,
    MatMenuModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    AppRoutingModule,
    MatCardModule,
    MatGridListModule
  ],
  exports: [
    MatButtonModule,
    MatCheckboxModule,
    MatMenuModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }



// To toggle between y&e chair and regular devotee set below cookies on the browser
// https://kudithipudi.org/2016/02/03/how-to-add-cookies-in-chrome-without-a-pluginextension/

//devotee
//javascript:document.cookie="sessionInfo=username=devotee"

//y&e chair
//javascript:document.cookie="sessionInfo=username=yande"

//invalid
//javascript:document.cookie="sessionInfo=username=invalid"
