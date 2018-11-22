'use strict';

import { anagram } from "./anagram";

declare function require(path: string): any;
const test = require('tape');

test('testing NumberList', t => {

  t.equal(anagram('Elvis', 'lives'), true);
  t.equal(anagram('Kraralábé', 'gólya'), false);
  t.end()
})