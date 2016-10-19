import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  template: `
  <h1>{{title}}</h1>
  <nav>
    <A routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
    <A routerLink="/rains" routerLinkActive="active">Rains</a>
  </nav>
  <router-outlet></router-outlet>
  `,
  styleUrls: ['app.component.css']
})

export class AppComponent {
  title = 'Mara';
}
