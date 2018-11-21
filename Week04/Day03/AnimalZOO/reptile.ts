import { Animal } from "./animal";
'use strict';

export class Reptile extends Animal {

  constructor(name: string) {
    super(name);
    this.breeding = 'laying eggs';
    this.favFood = 'meat and fish and green stuff'
  }
}