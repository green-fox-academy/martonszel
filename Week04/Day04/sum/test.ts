import { Numberlist } from "./sum";

const test = require('tape')

test('testing NumberList', t => {

  let testemptylist: Numberlist = new Numberlist([]);
  t.equal(testemptylist.addNum(), 0, 'no number in array should return 0');

  let testmultiplNum: Numberlist = new Numberlist([23, 12, 8, 32, 100]);
  t.equal(testmultiplNum.addNum(), 175, '23+12+8+32+100 sum is 175');

  let testOneNumber: Numberlist = new Numberlist([11]);
  t.equal(testOneNumber.addNum(), 11, 'one element in array should return the element');

  let testNullinArray: Numberlist = new Numberlist([null]);
  t.equal(testNullinArray.addNum(), 0, 'null in the array will return 0');

  let teststringinArray: Numberlist = new Numberlist([undefined]);
  t.equal (teststringinArray.addNum(),  'string in the array will throw error');
  t.end();
})