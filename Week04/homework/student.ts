
export class Student {

  name: string;
  age: number;
  gender: string;
  previousOrganization : string; 
  skippedDays: number;

  constructor(name:string= "Jane Doe",age: number = 30, gender:string = "female", previousOrganization: string = "The School of Life" ,skippedDays: number = 0){

    this.name = name;
    this.age = age;
    this.gender = gender;  
    this.previousOrganization = previousOrganization;
    this. skippedDays = skippedDays;
  }

  getGoal(){
    return "Be a junior software developer."
  }

  introduce(){
  return `Hi, I'm ${this.name}, a ${this.age} year old ${this.gender} from ${this.previousOrganization} who skipped ${this.skippedDays} days from the course already.`
  }
}




  




