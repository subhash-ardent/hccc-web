import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { AppBannerComponent } from './app-banner/app-banner.component';
import { TeacherListComponent } from './teacher-list/teacher-list.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule, MatIconModule, MatMenuModule,
        MatToolbarModule, MatSidenavModule, MatListModule} from '@angular/material';
import { AppRoutingModule } from './app-routing.module';
import { CourseCatelogueComponent } from './course-catelogue/course-catelogue.component';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    AppBannerComponent,
    TeacherListComponent,
    CourseCatelogueComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatButtonModule,
    MatCheckboxModule,
    MatMenuModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    AppRoutingModule,
    AppRoutingModule
  ],
  exports: [
    MatButtonModule,
    MatCheckboxModule,
    MatMenuModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }



// To toggle between y&e chair and regular devotee set below cookies on the browser

//devotee
//javascript:document.cookie="sessionInfo=username=devotee"

//y&e chair
//javascript:document.cookie="sessionInfo=username=yande"

//invalid
//javascript:document.cookie="sessionInfo=username=invalid"
