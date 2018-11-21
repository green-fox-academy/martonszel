export abstract class Animal {

  protected name: string;
  protected age: number;
  protected gender: string;
  protected favFood: string
  protected breeding: string

  constructor(name: string) {
    this.name = name;
  }

  getName() {
    return this.name
  };
  breed() {
    return this.breeding
  };
  food () {
    return this.favFood;
  }
}
