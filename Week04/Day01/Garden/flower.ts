import { Plant } from "./plants";

export class Flower extends Plant {

  constructor(color: string, waterAmount: number = 0 ) {
    super(color, waterAmount)

    this.needsWater = this.waterAmount < 5;
  }

  watering(amount: number) {
    this.waterAmount += amount * 0.75;
    this.needsWater = this.waterAmount < 5;
  }

  log() {
    if (this.needsWater) {
      console.log(`The ${this.color} Flower needs water!`);
    } else {
      console.log(`The ${this.color} Flower doesn't need water!`);
    }
  }
}