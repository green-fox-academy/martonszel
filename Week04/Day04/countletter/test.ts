'use strict';

import { countLetters } from "./countletter";

declare function require(path: string): any;
const test = require('tape');

test('testing countLetters', t => {
  t.deepEqual(countLetters('Elviss'), {e: 1, i: 1, l: 1, s: 2, v: 1} );
  t.deepEqual(countLetters('Elviss'), {e: 1, i: 1, l: 1, s: 3, v: 1} );
  t.deepEqual(countLetters('Elvviss'), {e: 1, i: 1, l: 1, s: 2, v: 1} );
  t.end()


})
