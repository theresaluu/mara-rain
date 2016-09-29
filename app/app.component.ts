import { Component, OnInit } from '@angular/core';

import { Rain } from './rain';
import { RainService } from './rain.service';

@Component({
  selector: 'my-app',
  template: `
  <h1>{{title}}</h1>
  <h3>{{tagline}}</h3>
  <ul class="rains">
    <li *ngFor="let rain of rains"
      [class.selected]="rain == selectedRain"
      (click)="onSelect(rain)">
      <span class="feel">{{rain.recognize}}</span> <small>{{rain.inquiry}}</small>
    </li>
  </ul>
  <rain-detail [rain]="selectedRain"></rain-detail>
  `,
  styles: [`
    .selected {
      background-color: #CFD8DC !important;
      color: white;
    }
    .rains {
      margin: 0 0 2em 0;
      list-style-type: none;
      padding: 0;
      width: 25em;
    }
    .rains li {
      cursor: pointer;
      position: relative;
      left: 0;
      background-color: #EEE;
      margin: .5em;
      padding: .3em 0;
      height: 1.6em;
      border-radius: 4px;
    }
    .rains li.selected:hover {
      background-color: #BBD8DC !important;
      color: white;
    }
    .rains li:hover {
      color: #607D8B;
      background-color: #DDD;
      left: .1em;
    }
    .rains .text {
      position: relative;
      top: -3px;
    }
    .rains .feel {
      display: inline-block;
      font-size: small;
      color: white;
      width: 7em;
      padding: 0.8em 0.7em 0 0.7em;
      background-color: #607D8B;
      line-height: 1em;
      position: relative;
      left: -1px;
      top: -4px;
      height: 1.8em;
      margin-right: .8em;
      border-radius: 4px 0 0 4px;
    }
  `],
  providers: [RainService]
})
export class AppComponent implements OnInit {
  title = 'Mara';
  tagline = 'Invite her to tea';
  rains: Rain[];
  selectedRain: Rain;

  constructor(private rainService: RainService) { }

  onSelect(rain: Rain): void{
    this.selectedRain = rain;
  }

  getRains(): void {
    this.rains = this.rainService.getRains();
  }

  ngOnInit(): void {
    this.getRains();
  }
}
