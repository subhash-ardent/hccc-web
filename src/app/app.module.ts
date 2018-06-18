import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { AppBannerComponent } from './app-banner/app-banner.component';
import { TeacherListComponent } from './teacher-list/teacher-list.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule, MatIconModule, MatMenuModule,
        MatToolbarModule, MatSidenavModule, MatListModule, MatCardModule} from '@angular/material';
import { AppRoutingModule } from './app-routing.module';
import { CourseCatalogueComponent } from './course-catalogue/course-catalogue.component';

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
    MatButtonModule,
    MatCheckboxModule,
    MatMenuModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    AppRoutingModule,
    MatCardModule
  ],
  exports: [
    MatButtonModule,
    MatCheckboxModule,
    MatMenuModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule
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
