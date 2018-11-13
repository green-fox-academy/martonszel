/*Create a Counter class
which has an integer property
when creating it should have a default value 0 or we can specify it when creating
we can add(number) to increase the counter's value by a whole number
or we can add() without parameters just increasing the counter's value by one
and we can get() the current value as string
also we can reset() the value to the initial value*/

class Counter {
    counter: number;
  
    constructor(counter: number = 0) {
      this.counter = counter;
    }
  
    add(counter: number = 1) {
      this.counter += Math.round(counter);
    }
  
    get() {
      return this.counter;
    }
  
    reset() {
      this.counter = 0;
    }
  }
  
  let counter = new Counter(2);
  let counter_1 = new Counter();
  
  console.log(counter.get());
  console.log(counter_1.get());
  
  counter.add();
  counter_1.add(3);
  
  console.log(counter.get());
  console.log(counter_1.get());
  
  counter.reset();
  
  console.log(counter.get());
  console.log(counter_1.get());