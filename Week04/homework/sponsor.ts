export class Sponsor{

  name: string;
  age: number;
  gender: string;
  company: string;
  hireStudents: number;
  
  constructor( name:string  = "Jane Doe", age:number = 30, gender:string = "female", company:string = "Google", hireStudents: number = 0){
  
  this.name = name;
  this.age = age;
  this.gender = gender; 
  this.company = company;
  this.hireStudents = hireStudents;
  }

introduce(){
  return `Hi, I'm ${this.name}, a ${this.age} year old ${this.gender} who represents ${this.company} and hired ${this.hireStudents} students so far.`;
}

hire(){
return this.hireStudents ++; 

}

getGoal(){
  return "Hire brilliant junior software developers."
}
}