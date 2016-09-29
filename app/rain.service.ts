import { Injectable } from '@angular/core';

import { Rain } from './rain';
import { RAINS } from './mock-rains';

@Injectable()
export class RainService {
  getRains(): Rain[] {
    return RAINS;
  }
}
