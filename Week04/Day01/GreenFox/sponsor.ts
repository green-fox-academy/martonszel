import { Person } from "./person";
export class Sponsor extends Person {

  company: string;
  hireStudents: number;

  constructor(name: string = "Jane Doe", age: number = 30, gender: string = "female", company: string = "Google", hireStudents: number = 0) {

    super(name,age,gender)
    this.company = company;
    this.hireStudents = hireStudents;
  }

  introduce() {
    console.log( `Hi, I'm ${this.name}, a ${this.age} year old ${this.gender} who represents ${this.company} and hired ${this.hireStudents} students so far.`)
  }

  hire() {
    return this.hireStudents++;

  }

  getGoal() {
    console.log("Hire brilliant junior software developers."); 
  }
}