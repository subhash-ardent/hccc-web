//Angular library imports

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';


// Components
import { AppComponent } from './app.component';

// Modules
import { YandeModule }     from './yande/yande.module';
import { CoreModule }     from './core/core.module';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material.module';




@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    MaterialModule,
    YandeModule,
    CoreModule,
    AppRoutingModule,
  ],
  declarations: [
    AppComponent
  ],
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
