import { Component } from '@angular/core';

export class Rain {
  recognize: string;
  inquiry: string;
  investigate: string;
  nonid: boolean;
}

enum Emotion {
  "Longing", "Anxious", "Overwhelm", "Victimized",
  "Hopeful", "Loved", "Peaceful", "Excited"
};

enum Examine {
  "What unmet needs addressing?",
  "What is happening inside me?",
  "How am I experiencing this in my body?",
  "What am I believing?",
  "What does this feeling want from me?"
};

let reflections: string[] = [
  "Awareness of where I am on my current path",
  "I feel insecure when I cannot trust the word of others",
  "It is draining to combat people's negativity with only my own positivity",
  "There is not much to celebrate",
  "Pair down to what is important",
  "I've made deep connections with amazing people",
  "I am ready for what is to come",
  "I recognize the potential"
]

const RAINS: Rain[] = [
  { recognize: Emotion[0], inquiry: Examine[0], investigate: reflections[0], nonid: false },
  { recognize: Emotion[1], inquiry: Examine[1], investigate: reflections[1], nonid: false },
  { recognize: Emotion[2], inquiry: Examine[2], investigate: reflections[2], nonid: false },
  { recognize: Emotion[3], inquiry: Examine[3], investigate: reflections[3], nonid: false },
  { recognize: Emotion[4], inquiry: Examine[4], investigate: reflections[4], nonid: false },
  { recognize: Emotion[5], inquiry: Examine[0], investigate: reflections[5], nonid: false },
  { recognize: Emotion[6], inquiry: Examine[1], investigate: reflections[6], nonid: false },
  { recognize: Emotion[7], inquiry: Examine[2], investigate: reflections[7], nonid: false },
  { recognize: Emotion[0], inquiry: Examine[3], investigate: reflections[0], nonid: false },
  { recognize: Emotion[1], inquiry: Examine[4], investigate: reflections[1], nonid: false },
  { recognize: Emotion[2], inquiry: Examine[0], investigate: reflections[2], nonid: false },

];

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
  <div *ngIf="selectedRain">
    <h2>A Closer Look at {{selectedRain.recognize}}</h2>
    <div><b>{{selectedRain.inquiry}}</b></div>
    <div>
      <label><b>Investigate: </b></label>{{selectedRain.investigate}}
    </div>
    <div>
      <label>
        <b>
          Do you recognize that your "self" is not defined by a set of emotions,
        sensations, or stories?
        </b>
      </label>
      <span>{{selectedRain.nonid}}</span>
    </div>
  </div>
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
  `]
})
export class AppComponent {
  title = 'Mara';
  tagline = 'Invite her to tea';
  rains = RAINS;
  selectedRain: Rain;

  onSelect(rain: Rain): void{
    this.selectedRain = rain;
  }
}
