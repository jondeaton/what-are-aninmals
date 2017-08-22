import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

import { DashboardComponent} from './dashboard.component';
import { AninmalsComponent } from './aninmals.component';
import { AninmalDetailComponent } from './aninmal-detail.component';

const routes: Routes = [
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
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
