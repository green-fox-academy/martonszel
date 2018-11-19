
import { Plant } from "./plants";

export class Garden {

  plants: Plant[];

  constructor(plants: Plant[]) {
    this.plants = plants;
  }

  watering(amount: number) {
    console.log('Watering with ' + amount);

    let thirstyPlants: Plant[] = this.plants.filter(plant => plant.needsWater);

    let dividedAmount: number = amount / thirstyPlants.length;

    thirstyPlants.forEach(plant => plant.watering(dividedAmount));
    this.statusInfo();
  }

  newPlant(plant: Plant) {
    this.plants.push(plant);
  }

  statusInfo() {
    this.plants.forEach(plantStat => plantStat.log());
  }
}