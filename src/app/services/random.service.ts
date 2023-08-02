import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RandomService {
  constructor() {}

  getRandomInt(max: number): number {
    return Math.floor(Math.random() * max);
  }
}
