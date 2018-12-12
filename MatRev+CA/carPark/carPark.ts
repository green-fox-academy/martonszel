'use strict';

import { Car } from './car';
import { readFromFile, appendToFile } from './file-io';

export class CarPark {

  private myCars: Car[] = [];

  addCar(car: Car): void {
    this.myCars.push(car);
  }

  public getMyCars(): Car[] {
    return this.myCars;
  }

  addCarToFile(car: Car) {
    appendToFile('cars.csv', `${car.getLicensePlate()},${car.getManucaturerYear()},${car.getTicker()}\r\n`);
  }

  /*removeById(id: number) {
    this.myCars.forEach((car, index) => {
      if (car.getId() === id) {
        console.log(car.getId() + ' apád fasza ' + index );
        this.myCars.splice(index, 1);
      }
    });
    return this.myCars;
  }
  */
  removebyID(id: number) {
    this.myCars = this.myCars.filter( car => car.getId() !== id);
    // minden olyan elem legyen benne aminek az id-je nem ez
  }

  getOldest(fileName: string): string {
    let fileContent = readFromFile(fileName);
    if (fileContent !== null) {
      let tempArray: string[] = fileContent.split('\n');
      let carArray: Car[] = tempArray.map((line,index) => {
        return new Car( index + 1 ,line.split(',')[0], parseInt(line.split(',')[1]), parseInt(line.split(',')[3]));
      });
      carArray.sort((a, b) => {
        return a.getManucaturerYear() - b.getManucaturerYear();
      });
      return carArray[0].getLicensePlate();
    }
  }

  getPenalty(fileName: string) {
    let content = readFromFile(fileName);
    let noParkingTicket: string[] = [];
    if (content !== null) {
      content.split('\r\n').forEach(e => {
        if(e.split(',')[2] === '0') {
          noParkingTicket.push(e.split(',')[0]);
        }
      });
    }
    return noParkingTicket;
  }
}

