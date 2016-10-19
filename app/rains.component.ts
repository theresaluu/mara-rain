import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Rain } from './rain';
import { RainService } from './rain.service';

@Component({
  moduleId: module.id,
  selector: 'my-rains',
  templateUrl: 'rains.component.html',
  styleUrls: ['rains.component.css']
})

export class RainsComponent implements OnInit {
  tagline = 'Invite her to tea';
  rains: Rain[];
  selectedRain: Rain;

  constructor(
    private router: Router,
    private rainService: RainService) { }

  getRains(): void {
    this.rainService.getRains().then(rains => this.rains = rains);
  }

  ngOnInit(): void {
    this.getRains();
  }

  onSelect(rain: Rain): void {
    this.selectedRain = rain;
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedRain.id]);
  }
}
