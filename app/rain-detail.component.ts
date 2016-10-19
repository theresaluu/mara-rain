import { Component, OnInit }      from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';

import { Rain }        from './rain';
import { RainService } from './rain.service';

@Component({
  moduleId: module.id,
  selector: 'my-rain-detail',
  templateUrl: 'rain-detail.component.html',
  styleUrls: [ 'rain-detail.component.css' ]
})

export class RainDetailComponent implements OnInit {

  rain: Rain;

  constructor(
    private rainService: RainService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
      let id = +params['id'];
      this.rainService.getRain(id)
        .then(rain => this.rain = rain);
    });
  }
  goBack(): void {
    this.location.back();
  }
}
