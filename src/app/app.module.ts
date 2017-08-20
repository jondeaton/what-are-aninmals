import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }  from './app.component';
import {AninmalDetailComponent } from "./aninmal-detail.component";

@NgModule({

  imports: [
    BrowserModule,
    FormsModule
  ],

  // the declarations array contains a list of application components,
  // pipes, and directives that belong to the module
  declarations: [
    AppComponent,
    AninmalDetailComponent
  ],

  bootstrap: [ AppComponent ]
})
export class AppModule { }
