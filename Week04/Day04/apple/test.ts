
declare function require(path:string): any;
const test = require('tape');

import { Apple } from './app';

let apple = new Apple;

test('show the apple', t => {
  t.equal(apple.getApple(), 'apple', 'getapple method returns with apple');
  t.notEqual (apple.getApple(), 'ajsndjkasndkj', 'getapple method not returns empty' );
  t.end()
});



