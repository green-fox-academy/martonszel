import { Plant } from "./plants";

export class Tree extends Plant {

  constructor(color: string, waterAmount: number= 0) {
    super(color, waterAmount)
    this.needsWater = this.waterAmount < 10;
  }

  watering(amount: number) {
    this.waterAmount += amount * 0.40;
    this.needsWater = this.waterAmount < 10;
  }
  log() {
    if (this.needsWater) {
      console.log(`The ${this.color} Tree needs water!`);
    } else {
      console.log(`The ${this.color} Tree doesn't need water!`);
    }
  }
}