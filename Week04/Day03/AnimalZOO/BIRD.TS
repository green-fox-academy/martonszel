import { Animal } from "./animal";
'use strict';

export class Bird extends Animal implements Flyable {

  constructor(name: string) {
    super(name);
    this.breeding = 'laying eggs'
    this.favFood = 'insects and small green stuff'
  }

  land() {};
  fly() {};
  takeoff() {};

}