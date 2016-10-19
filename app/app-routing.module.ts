import { NgModule }      from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { RainDetailComponent }  from './rain-detail.component';
import { RainsComponent }       from './rains.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard',  component: DashboardComponent },
  { path: 'detail/:id', component: RainDetailComponent },
  { path: 'rains',     component: RainsComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
