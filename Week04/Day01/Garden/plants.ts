export class Plant {

  color: string;
  waterAmount: number;
  needsWater: boolean;

  constructor(color: string, waterAmount: number ) {
    this.color = color;
    this.waterAmount = waterAmount;

  }

  watering(amount: number) {
    this.waterAmount += amount;
  }
  
  log() {
    if (this.needsWater) {
      console.log("")
    } else {
      console.log("")
    }
  }
}