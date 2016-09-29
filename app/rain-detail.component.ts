import { Component, Input } from '@angular/core';

import { Rain } from './rain';

@Component({
  selector: 'rain-detail',
  template: `
    <div *ngIf="rain">
      <h2>A Closer Look at {{rain.recognize}}</h2>
      <div><b>{{rain.inquiry}}</b></div>
      <div>
        <label><b>Investigate: </b></label>{{rain.investigate}}
      </div>
      <div>
        <label>
          <b>
            Do you recognize that your "self" is not defined by a set of emotions,
          sensations, or stories?
          </b>
        </label>
        <span>{{rain.nonid}}</span>
      </div>
    </div>
  `
})

export class RainDetailComponent {
  @Input()
  rain: Rain;
}
