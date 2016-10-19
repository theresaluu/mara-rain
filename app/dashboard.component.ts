import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Rain } from './rain';
import { RainService } from './rain.service';

@Component({
  moduleId: module.id,
  selector: 'my-dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.html']
})
export class DashboardComponent implements OnInit {
  rains: Rain[] = [];

  constructor(
    private router: Router,
    private rainService: RainService) {
   }

  ngOnInit(): void {
    this.rainService.getRains()
    .then(rains => this.rains = rains.slice(1,5));
  }
  gotoDetail(rain: Rain): void {
   let link = ['/detail', rain.id];
   this.router.navigate(link);
  }
}
