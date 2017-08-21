import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }  from './app.component';
import {AninmalDetailComponent } from "./aninmal-detail.component";
import {AninmalsComponent} from "./aninmals.component";
import {AninmalService} from "./aninmal.service";

@NgModule({

  imports: [
    BrowserModule,
    FormsModule
  ],

  // the declarations array contains a list of application components,
  // pipes, and directives that belong to the module
  declarations: [
    AppComponent,
    AninmalsComponent,
    AninmalDetailComponent,
  ],

  bootstrap: [ AppComponent ],
  providers: [AninmalService] // <-- create fresh instance of AninmalService when creating the AppComponent
})
export class AppModule { }
