import { Animal } from "./animal";
'use strict';

export class Mammal extends Animal {

  constructor(name: string) {
    super(name);
    this.breeding = 'pushing miniature versions out'
    this.favFood = 'meat and veggies'
  }
}