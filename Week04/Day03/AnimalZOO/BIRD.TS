import { Animal } from "./animal";
'use strict';

export class Bird extends Animal  {

  constructor(name: string) {
    super(name);
    this.breeding = 'laying eggs'
    this.favFood = 'insects and small green stuff'
  }

}