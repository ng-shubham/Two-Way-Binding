import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
 
// This import is required for ngModel
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { TwocompComponent } from './twocomp/twocomp.component';

@NgModule({
  declarations: [
    AppComponent,
    TwocompComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
