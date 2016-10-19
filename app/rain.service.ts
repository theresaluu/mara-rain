import { Rain } from './rain';
import { RAINS } from './mock-rains';
import { Injectable } from '@angular/core';

@Injectable()
export class RainService {
  getRains(): Promise<Rain[]> {
    return Promise.resolve(RAINS);
  }

  getRainsSlowly(): Promise<Rain[]> {
    return new Promise<Rain[]>(resolve =>
      setTimeout(resolve, 2000)) //delay 2 seconds
      .then(() => this.getRains());
  }

  getRain(id: number): Promise<Rain> {
    return this.getRains()
    .then(rains => rains.find(rain => rain.id === id));
  }
}
