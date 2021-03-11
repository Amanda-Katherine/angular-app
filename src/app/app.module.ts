import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms' //TypeScript Feature

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule //tells Angular to import forms features
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
