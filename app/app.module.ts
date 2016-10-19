import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent }         from './app.component';
import { DashboardComponent }   from './dashboard.component';
import { RainDetailComponent }  from './rain-detail.component';
import { RainsComponent }       from './rains.component';
import { RainService }         from './rain.service';

import { AppRoutingModule }     from './app-routing.module';

@NgModule({
  imports:      [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    RainDetailComponent,
    RainsComponent
  ],
  providers: [
    RainService
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule {
}
