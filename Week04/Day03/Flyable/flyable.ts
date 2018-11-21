'use strict'
interface Flyable {

  land();
  fly();
  takeoff(); 
}

abstract class Vehicle {
  
  type: string;
  age: number; 
  color: string;
}

class Helicopter extends Vehicle implements Flyable{

  land() {};
  fly() {};
  takeoff() {}; 

} 

