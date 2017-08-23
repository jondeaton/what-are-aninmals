import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {InMemoryDataService } from './in-memory-data.service';
import {InMemoryWebApiModule} from 'angular-in-memory-web-api';

import {AppComponent} from './app.component';
import {AninmalService} from './aninmal.service';
import {AppRoutingModule} from './app-routing.module';
import {AninmalsComponent} from './aninmals.component';
import {DashboardComponent} from './dashboard.component';
import {AninmalDetailComponent } from './aninmal-detail.component';
import {AninmalSearchService} from './aninmal-search.service';
import {AninmalSearchComponent} from './aninmal-search.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService)
  ],

  // the declarations array contains a list of application components,
  // pipes, and directives that belong to the module
  declarations: [
    AppComponent,
    AninmalsComponent,
    DashboardComponent,
    AninmalDetailComponent,
    AninmalSearchComponent,
  ],
  bootstrap: [ AppComponent ],
  providers: [ AninmalService, AninmalSearchService ] // <-- create fresh instances when creating the AppComponent
})
export class AppModule { }
