import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import {AninmalService} from './aninmal.service';
import {RouterModule} from '@angular/router';
import {AninmalsComponent} from './aninmals.component';
import {DashboardComponent} from './dashboard.component';
import {AninmalDetailComponent } from './aninmal-detail.component';

@NgModule({

  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
      },
      {
        path: 'aninmals',
        component: AninmalsComponent
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'detail/:id', // <-- parameterized routing
        component: AninmalDetailComponent
      }
    ])
  ],

  // the declarations array contains a list of application components,
  // pipes, and directives that belong to the module
  declarations: [
    AppComponent,
    AninmalsComponent,
    DashboardComponent,
    AninmalDetailComponent,
  ],

  bootstrap: [ AppComponent ],
  providers: [ AninmalService ] // <-- create fresh instance of AninmalService when creating the AppComponent
})
export class AppModule { }
