

class Animal {

    hunger: number;
    thirst: number;

    constructor(hunger: number = 50, thirst: number = 50) {
        this.hunger = hunger;
        this.thirst = thirst;
    }
    eat() {
        return --this.hunger;
    }
    drink() {
        return --this.thirst;
    }
    play() {
        ++this.hunger;
        ++this.thirst;
    }
}
let animal1 = new Animal();
let animal2 = new Animal();

console.log(animal1.eat());
console.log(animal2.drink());

animal1.play();
console.log(animal1.hunger);
console.log(animal1.thirst);
