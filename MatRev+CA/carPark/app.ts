'use strict'

import { Car } from './car';
import { CarPark } from './carPark';
import { readFromFile } from './file-io';


let myCar = new Car(12, 'ABCD-92', 1984, 1);
let myCar2 = new Car(14, 'ABCD-92', 1984, 1);
let myCar3 = new Car(2, 'ABCD-92', 1984, 1);
let myCarPark = new CarPark();
//console.log(myCarPark.getMyCars().length);
myCarPark.addCar(myCar);
myCarPark.addCar(myCar2);
myCarPark.addCar(myCar3);
//console.log(myCarPark.getMyCars());
myCarPark.removebyID(14);
//console.log(myCarPark);
//console.log(myCarPark.getMyCars().length);
// console.log(myCarPark.removeById(2));
// console.log(myCarPark.getMyCars());
//myCarPark.addCarToFile(myCar);
// console.log(myCarPark.getMyCars());
console.log(myCarPark.getOldest('cars.csv'));
// console.log(myCarPark.getPenalty('cars.csv'));
//console.log(myCar1.getLicensePlate())
myCarPark.getOldest('cars.csv');
