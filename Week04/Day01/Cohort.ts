export class Cohort{

  name: string;
  students: string [];
  mentors: string [];

  constructor(name: string, students = [], mentors = []){

    this.name = name ; 
    this.students = students;
    this.mentors = mentors;
  }

  addStudent(Student){
    this.students.push(Student.name)
  }
  addMentor(Mentor){
     this.mentors.push(Mentor.name)
  }
  info(){
   console.log(`The ${this.name} cohort has ${this.students} students and ${this.mentors} mentors.`); 
  } 
}