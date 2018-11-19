import { Flower } from "./flower";
import { Tree } from "./tree";
import { Garden } from "./garden";
import { Plant } from "./plants";

let plant: Plant[] = [];

let flower1: Flower = new Flower('yellow');
let flower2: Flower = new Flower('blue');
let tree1: Tree = new Tree('purple');
let tree2: Tree = new Tree('orange');

plant.push(flower1, flower2, tree1, tree2);

let garden1: Garden = new Garden(plant);

garden1.statusInfo();
garden1.watering(40);
garden1.watering(70);