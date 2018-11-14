'use strict'

class Car {
  
  name: string;
  gasAmount: number = 0;
  capacity: number = 100;

  constructor(carname: string) {
    this.name = carname;
    this.gasAmount;
    this.capacity;
  }
}

class Station {
  gasAmount: number;

  constructor(gas: number = 1000) {
    this.gasAmount = gas;
  }

  refill(car: Car) {
    this.gasAmount = this.gasAmount - car.capacity;
    car.gasAmount = car.capacity;
    car.capacity = 0;
    console.log(this.gasAmount);
    console.log(car);
  }
}

let Mazda = new Car('Mazda');
let Suzuki = new Car('Suzuki');

let OMV = new Station(1500);

console.log(Mazda, Suzuki, OMV);

OMV.refill(Mazda);
OMV.refill(Suzuki);