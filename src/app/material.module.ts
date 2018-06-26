import {NgModule} from '@angular/core';
import {FlexLayoutModule} from '@angular/flex-layout';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


import {
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule,
    MatMenuModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatGridListModule,
    MatProgressSpinnerModule
} from '@angular/material';

@NgModule({
    imports: [
        BrowserAnimationsModule,
        FlexLayoutModule,
        MatButtonModule,
        MatCheckboxModule,
        MatMenuModule,
        MatIconModule,
        MatToolbarModule,
        MatSidenavModule,
        MatListModule,
        MatCardModule,
        MatGridListModule,
        MatProgressSpinnerModule
    ],
    exports: [
        BrowserAnimationsModule,
        FlexLayoutModule,
        MatButtonModule,
        MatCheckboxModule,
        MatMenuModule,
        MatIconModule,
        MatToolbarModule,
        MatSidenavModule,
        MatListModule,
        MatCardModule,
        MatGridListModule,
        MatProgressSpinnerModule
    ]
})
export class MaterialModule {
}
