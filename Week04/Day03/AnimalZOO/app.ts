
import { Mammal } from "./mammal";
import { Reptile } from "./reptile";
import { Bird } from "./bird";

'use strict';

let reptileOne = new Reptile("Cruel Crocodile");
let mammalOne = new Mammal("Koala");
let birdOne = new Bird("Parrot");

console.log("\n", "How do you breed?", "\n");

console.log("A " + reptileOne.getName() + " is breeding by " + reptileOne.breed() + ".");
console.log('-----------------', '\n')

console.log("A " + mammalOne.getName() + " is breeding by " + mammalOne.breed() + ".");
console.log('-----------------', '\n')

console.log("A " + birdOne.getName() + " is breeding by " + birdOne.breed() + ".");
console.log('-----------------', '\n')





